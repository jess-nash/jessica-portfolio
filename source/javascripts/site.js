// This is where it all goes :)

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  let icons = document.querySelectorAll('.button-social-icon');
  // let iconContainer = document.getElementById('right-buttons')
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    icons.forEach(icon => {
      icon.style.fontSize = "30px";
    })
    // iconContainer.style.right = "300px"
  } else {
    icons.forEach(icon => {
      icon.style.fontSize = "50px";
    })
  }
}
