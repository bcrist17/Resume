var wait = false;

function RemoveSidebarClass(element){
    var options = document.querySelectorAll('#sideBar-list li');
    options.forEach(function(option) {
        option.classList.remove('sidebar-current');
    });
}

document.body.addEventListener("click", function(event) {
    if (event.target.classList.contains("sideBar-item")) {
        wait = true;
        var currentSidebarElement = event.target.id;
        RemoveSidebarClass();
        var currentElement = currentSidebarElement.replace("-sidebar", "");
        document.getElementById(currentElement).scrollIntoView({ behavior: 'instant' });
        document.getElementById(currentSidebarElement).classList.add('sidebar-current');
    }
});

document.addEventListener('scroll', function() {
    if (!wait){
        var sections = document.querySelectorAll('.Info-Container');
        var options = document.querySelectorAll('#sideBar-list li');
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach(function(section, index) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                options.forEach(function(option) {
                    option.classList.remove('sidebar-current');
                });
                document.querySelector('#' + section.id.toLowerCase() + '-sidebar').classList.add('sidebar-current');
            }
        });
    }
    else{
        wait = false;
    }
});

function resize(){
    if (window.innerWidth <= 750){
        document.getElementById("sideBar").classList.add("hidden");
        document.getElementById("title").classList.remove("hidden");
    }
    else{
        document.getElementById("sideBar").classList.remove("hidden");
        document.getElementById("title").classList.add("hidden");
    }
}

window.addEventListener('load', resize);

window.addEventListener('resize', resize);