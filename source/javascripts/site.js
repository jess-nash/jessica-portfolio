// This is where it all goes :)

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  let icons = document.querySelectorAll('.button-social-icon');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    icons.forEach(icon => {
      icon.style.fontSize = "30px";
    });

    // var rightButtons = document.getElementById('right-buttons');
    // rightButtons.style.position = "fixed";
    // rightButtons.style.top = '90px';
    // rightButtons.style.right = '20px';
    // rightButtons.style.transition = "400ms"

    document.getElementById('right-buttons').setAttribute('id', 'sticky-right-buttons')
  } else {
    icons.forEach(icon => {
      icon.style.fontSize = "50px";
    });
    // rightButtons.style.position = "absolute";
    // rightButtons.style.top = '175px';
    // rightButtons.style.right = '210px';
    // rightButtons.style.transition = "400ms"
    document.getElementById('sticky-right-buttons').setAttribute('id', 'right-buttons')
  }
}
