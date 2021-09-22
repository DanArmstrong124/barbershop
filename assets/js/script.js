window.onscroll = function() {
  if (scrollY > 50) {
    document.getElementById("logo").addClass('logo');
  } else {
    document.getElementById("logo").addClass('par-logo');
  }
}