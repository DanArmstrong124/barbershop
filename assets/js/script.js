window.onscroll = function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").className = "logo";
  } else {
    document.getElementById("logo").className = "par-logo";
  }
}