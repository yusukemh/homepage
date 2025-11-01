// $(function () {
//     $("#header").load("header.html");

//     $('#page_home').load("page_home.html");

//     // $("#short_me").load("short_me.html")
//     // $("#short_notes").load("short_notes.html")
//     // $('#short_projects').load('short_projects.html')
//     // $('#short_archive').load('short_archive.html')
//     // $('#short_resume').load('short_resume.html')

//     $("#footer").load("footer.html");
// })

if (window.MathJax) {
    MathJax.Hub.Queue(
        ["Typeset", MathJax.Hub]
    );
}

// var speed = 'slow';

// $('html, body').hide();

// $(document).ready(function() {
//     $('html, body').fadeIn(speed, function() {
//         $('a[href], button[href]').click(function(event) {
//             var url = $(this).attr('href');
//             if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
//             event.preventDefault();
//             $('html, body').fadeOut(speed, function() {
//                 window.location = url;
//             });
//         });
//     });
// });


function switch_content(pushed) {
    var home = document.getElementById("long_home");
    var me = document.getElementById("long_me");
    var notes = document.getElementById("long_notes");
    var projects = document.getElementById("projects");
    var archive = document.getElementById("archive");
    var resume = document.getElementById("resume");



    contents = [home, me, notes, projects, archive, resume]

    for (i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }

    switch (pushed) {
        case 'home':
            home.style.display = "block";
            break;
        case 'me':
            me.style.display = "block";
            break;
        case 'notes':
            notes.style.display = "block";
            break;
        case 'projects':
            projects.style.display = "block";
            break;
        case 'archive':
            archive.style.display = "block";
            break;
        case 'resume':
            resume.style.display = 'block';
            break;
    }
}