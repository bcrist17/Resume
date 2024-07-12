function CurrentClass(element){
    document.getElementById("scrolling").innerHTML = "scrolling";
    var options = document.querySelectorAll('#sideBar-list li');
    options.forEach(function(option) {
        option.classList.remove('sidebar-current');
    });
    element.classList.add('sidebar-current');
}

document.getElementById("info-sidebar").addEventListener("click", function() {
    CurrentClass(this);
    document.getElementById("Info").scrollIntoView({ behavior: 'smooth' });
    document.getElementById("scrolling").innerHTML = "not scrolling";
});

document.getElementById("about-me-sidebar").addEventListener("click", function() {
    CurrentClass(this);
    document.getElementById("About-Me").scrollIntoView({ behavior: 'smooth' });
    document.getElementById("scrolling").innerHTML = "not scrolling";
});

document.getElementById("work-experience-sidebar").addEventListener("click", function() {
    CurrentClass(this);
    document.getElementById("Work-Experience").scrollIntoView({ behavior: 'smooth' });
    document.getElementById("scrolling").innerHTML = "not scrolling";
});

document.getElementById("computer-skills-sidebar").addEventListener("click", function() {
    CurrentClass(this);
    document.getElementById("Computer-Skills").scrollIntoView({ behavior: 'smooth' });
    document.getElementById("scrolling").innerHTML = "not scrolling";
});

document.getElementById("coursework-sidebar").addEventListener("click", function() {
    CurrentClass(this);
    document.getElementById("Coursework").scrollIntoView({ behavior: 'smooth' });
    document.getElementById("scrolling").innerHTML = "not scrolling";
});

document.getElementById("awards-sidebar").addEventListener("click", function() {
    CurrentClass(this);
    document.getElementById("Awards").scrollIntoView({ behavior: 'smooth' });
    document.getElementById("scrolling").innerHTML = "not scrolling";
});

document.getElementById("education-sidebar").addEventListener("click", function() {
    CurrentClass(this);
    document.getElementById("Education").scrollIntoView({ behavior: 'smooth' });
    document.getElementById("scrolling").innerHTML = "not scrolling";
});

document.addEventListener('scroll', function() {
    if(document.getElementById("scrolling").innerHTML === "not scrolling"){
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
});

window.addEventListener('resize', function() {
    if (window.innerWidth <= 750){
        document.getElementById("sideBar").classList.add("hidden");
        document.getElementById("title").classList.remove("hidden");
    }
    else{
        document.getElementById("sideBar").classList.remove("hidden");
        document.getElementById("title").classList.add("hidden");
    }
});