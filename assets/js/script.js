$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 500) {
        //clearHeader, not clearheader - caps H
        $("#logo").addClass(".par-logo");
        $("#nav").addClass(".par-nav");
    }
}); //missing );