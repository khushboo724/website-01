// const bar = document.getElementById('bar');
// const close = document.getElementById('close');
// const nav = document.getElementById('navbar');

// // Toggle the visibility of the navbar when the bar is clicked
// if (bar) {
//     bar.addEventListener('click', () => {
//         nav.classList.toggle('active');
//     });
// }

// // Hide the navbar when the close button is clicked
// if (close) {
//     close.addEventListener('click', () => {
//         nav.classList.remove('active');
//     });
//  }
function myFunction() {
    var x = document.getElementById("navbar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  
  }