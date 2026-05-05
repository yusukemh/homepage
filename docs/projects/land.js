var projects = [
    {
        "project_name": "Location Agnostic Neural Downscaler",
        "project_id": "project_land",
        "summary": "Deep learning model for monthly rainfall interpolation in Hawai`i. I implemented a neural network model to downscale coarse atmospheric variables to monthly rainfall at sub-km grid points. The model produces high-resolution (250m) monthly precipitation map over the Hawaiian Islands based on GCM outputs for the future (2030-2099) global warming scenarios.\n\n[Left]: Predicted monthly rainfall (in mm) for January 2050 at all grid locations, based on a GCM output. Upper Inset: Zoom of the blue rectangle over the island of Moloka‘i. The blue dots represent the locations of the weather stations in the training data. Weather stations on east Moloka‘i are sparsely distributed, but the model smoothly interpolates based on the orographic features. Lower Inset: The elevation map on the zoomed region.",
        "abstract": "",
        "img": "./imgs/land.png",
    },
    {
        "project_name": "Downscaling of Wind and precipitation with Diffusion Models over Hawaiian Islands",
        "project_id": "project_wrf_diffusion",
        "summary": "Residual Corrective Diffusion model was implemented to downscale global numerical model from 30km to 1km. First, a deterministic UNet downscales coarse ERA5 to high-resolution target variables (wind, temperature, and precipitation). Since this predicts blurry mean outputs, the diffusion model predicts the residual, refining the prediction to capture high spatial variability.\n\n[Left]: Predicted u-wind over Big Island. The model is capable of generating stochastic samples given a single condition, producing multiple scenarios that are consistent with the condition.",
        "abstract": "",
        "img": "./imgs/diffusion.png",
    },
    {
        "project_name": "Topographical Gaussian Process",
        "project_id": "project_tgp",
        "summary": "Gaussian Process with topography-aware anisotropic kernel for rainfall interpolation. Kernel is enhanced with local topographic information to allow anisotropic covariance in the input space. This is achieved by augmenting the kernel with extra information about the existense of the peaks/valleys between every points. \n\n[Left]: Predicted interpolation of monthly rainfall over the Island of O`ahu in July, 2000. The model interpolates between the given context points (observed monthly rainfall amounts at sparse weather stations.)",
        "abstract": "",
        "img": "./imgs/tgp.png",
    },
    {
        "project_name": "Diffusion Models for High-resolution Solar Irradiance",
        "project_id": "project_nimbus_diffusion",
        "summary": "Cascaded diffusion model was implemented to downscale Global Forecast Model (GFS, ~22 km resolution) down to sub-kilometer grid points over the island of O`ahu. \n\n[Left]: Generated cloud-cover samples from diffusion model over O`ahu",
        "abstract": "",
        "img": "./imgs/cloud.png",
    }
]