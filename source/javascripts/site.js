// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {
  let icons = document.querySelectorAll('.button-social-icon');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    icons.forEach(icon => {
      icon.style.fontSize = "20px";
    });

    document.getElementById('right-buttons').setAttribute('id', 'sticky-right-buttons')
  } else {
    icons.forEach(icon => {
      icon.style.fontSize = "30px";
    });
    document.getElementById('sticky-right-buttons').setAttribute('id', 'right-buttons')
  }
};
