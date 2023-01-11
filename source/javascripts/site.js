// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {
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
};

// window.onload  = function(){
//   // selecting the elements for which we want to add a tooltip
//   const target = document.querySelector(".tooltip-button");
//   const tooltip = document.querySelector(".tooltip-text");

//   // change display to 'block' on mouseover
//   target.addEventListener('mouseover', () => {
//     tooltip.style.display = 'block';
//     // tooltip.style.animation = "fadeIn"
//     // tooltip.style.animationDuration = "0.6s"
//   }, false);

//   // change display to 'none' on mouseleave
//   target.addEventListener('mouseleave', () => {
//     tooltip.style.display = 'none';
//     // tooltip.style.animation = "fadeOut"
//     // tooltip.style.animationDuration = "0.6s"
//   }, false);
// }
