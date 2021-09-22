setInterval(function() {
    var scrollTing = scrollY;

    if (scrollTing > 50) {
        $("logo").addClass('par-logo');
        $("logo").removeClass('logo');
    };
    
    if (scrollTing < 49) {
        $("logo").addClass('logo');
        $("logo").removeClass('par-logo');
    };
}, 50);