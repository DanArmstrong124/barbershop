setInterval(function() {
    if (scrollY > 50) {
        $("#logo").addClass('par-logo').removeClass('logo');
    }
}, 50);