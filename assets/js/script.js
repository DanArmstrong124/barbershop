window.onscroll = function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").addClass('logo');
  } else {
    document.getElementById("logo").addClass('par-logo');
  }
}