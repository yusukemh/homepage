var projects = [
    {
        "project_name": "Location Agnostic Neural Downscaler",
        "project_id": "project_land",
        "summary": "Deep learning model for monthly rainfall interpolation in Hawai`i. I implemented a neural network model to downscale coarse atmospheric variables to monthly rainfall at sub-km grid points. [Left]: Predicted monthly rainfall (in mm) for January 2050 at all grid locations, based on a GCM output. Upper Inset: Zoom of the blue rectangle over the island of Moloka‘i. The blue dots represent the locations of the weather stations in the training data. Weather stations on east Moloka‘i are sparsely distributed, but the model smoothly interpolates based on the orographic features. Lower Inset: The elevation map on the zoomed region.",
        "abstract": "",
        "img": "./imgs/land.png",
    },
    {
        "project_name": "Downscaling of Wind and precipitation with Diffusion Models over Hawaiian Islands",
        "project_id": "project_wrf_diffusion",
        "summary": "Diffusion model was implemented to downscale global numerical model from 30km to 1km. [Left]: Predicted u-wind over Big Island. The model is capable of generating stochastic samples given a single condition, producing multiple scenarios that are consistent with the condition.",
        "abstract": "",
        "img": "./imgs/diffusion.png",
    },
    {
        "project_name": "Topographical Gaussian Process",
        "project_id": "project_tgp",
        "summary": "Gaussian Process with topography-aware anisotropic kernel for rainfall interpolation. Kernel is enhanced with local topographic information to have anisotropic covariance in the input space. This is achieved by augmenting the kernel with extra information about the existense of the peaks/valleys between every points. [Left]: Predicted interpolation of monthly rainfall over the Island of O`ahu in July, 2000. The model interpolates between the given context points (observed monthly rainfall amounts at sparse weather stations.)",
        "abstract": "",
        "img": "./imgs/tgp.png",
    },
    {
        "project_name": "Diffusion Models for High-resolution Solar Irradiance",
        "project_id": "project_nimbus_diffusion",
        "summary": "Diffusion model was implemented to downscale Global Forecast Model (GFS) in 30 km down to sub-km grid points over the island of O`ahu. This work is publicly recognized as one of the first researches to apply diffusion models in weather forecasting settings. (Search for 'Awesome Diffusion Models for Weather Forecasting.') [Left]: Generated samples from diffusion model.",
        "abstract": "",
        "img": "./imgs/cloud.png",
    }
]