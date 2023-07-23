// document.getElementById('send_message_button').addEventListener('click', event => {
//   event.preventDefault();
// });


// submit buttonis refreshis gatishva

// window.addEventListener('scroll', reveal);

// function reveal()  {
//   let reveals = document.querySelectorAll('.reveal')
//   for (let i = 0; i < reveals.length; i++)  {
//     let windowHeight = window.innerHeight;
//     let revealTop = reveals[i].getBoundingClientRect().top;
//     let revealPoint = 150;

//     if(revealTop < windowHeight - revealPoint) {
//       reveals[i].classList.add('active');
//     }
//     else {
//       reveals[i].classList.remove('active');
//     }
//   }
// }

let mobileMenu = document.querySelector(".menu")
let burgerMenu = document.querySelector(".burgermenu")
let xmark = document.querySelector(".xmark")

burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.add("show");
  burgerMenu.style.display = "none";
  xmark.style.display = "block";
});


xmark.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  burgerMenu.style.display = "block";
  xmark.style.display = "none";
});

