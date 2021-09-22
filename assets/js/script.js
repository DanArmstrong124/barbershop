setInterval(function() {
    if (scrollY > 50) {
        $("logo").addClass('par-logo');
        $("logo").removeClass('logo');
    };
    
    if (scrollY < 49) {
        $("logo").addClass('logo');
        $("logo").removeClass('par-logo');
    };
}, 50);