// This is where it all goes :)

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 110) {
    document.querySelector(".button-social-icon").style.fontSize = "25px";
  } else {
    document.querySelector(".button-social-icon").style.fontSize = "50px";
  }
}
