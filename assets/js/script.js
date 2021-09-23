window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if(scrollPosition >= 200){
        document.getElementById('logo').classList.add('par-logo');
        document.getElementById('logo').classList.remove('logo');
    };

    if(scrollPosition <= 199){
        document.getElementById('logo').classList.add("logo");
        document.getElementById('logo').classList.remove("par-logo");
    };
};