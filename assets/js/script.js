setInterval(function() {
    if (scrollY > 50) {
        $("logo").addClass('par-logo');
        $("logo").removeClass('logo');
    };
}, 50);