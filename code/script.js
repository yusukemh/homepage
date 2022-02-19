function switch_content(pushed) {
    var home = document.getElementById("home");
    var resume = document.getElementById("resume");
    var notes = document.getElementById("notes");
    var history = document.getElementById("history");

    contents = [home, resume, notes, history]

    for (i=0; i<contents.length; i ++) {
        contents[i].style.display = 'none';
    }

    switch(pushed) {
        case 'home':
            home.style.display = "block";
            break;
        case 'resume':
            resume.style.display = 'block';
            break;
        case 'notes':
            notes.style.display = 'block';
            break;
        case 'history':
            history.style.display = 'block';
    } 
    
    // if (this.style.display === "none") {
    //     this.style.display = "block";
    //   } else {
    //     this.style.display = "none";
    //   }
}