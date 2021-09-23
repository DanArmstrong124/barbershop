window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if(scrollPosition >= 200){
        document.getElementById('logo').addClass('par-logo');
        document.getElementById('logo').removeClass('logo');
    };

    if(scrollPosition <= 199){
        document.getElementById('logo').addClass('logo');
        document.getElementById('logo').removeClass('par-logo');
    };
};