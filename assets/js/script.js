const logo = document.getElementById('logo');
const navbar = document.getElementById('nav');

window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if(scrollPosition >= 200){
        logo.classList.add('par-logo');
        logo.classList.remove('logo');
        navbar.classList.add('par-nav');
        navbar.classList.remove('nav');
    };

    if(scrollPosition <= 199){
        logo.classList.add("logo");
        logo.classList.remove("par-logo");
        navbar.classList.add('nav');
        navbar.classList.remove('par-nav');
    };
};