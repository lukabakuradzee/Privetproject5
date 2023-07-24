


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




// JavaScript code (file.js)

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section1_slider, .section2_home, .home_articles, .section3_projects_complited, .section4_video_background, .article2, .article3, .section5, .section6_feedback, .section7_subscribe_newsletter, .footer1, .section1_about_page, .section2_about_page, .section3_about_page, .section4_about_page, .section6_video_about, .section7_our_values, .section8_company_porfessionals, .section9_customers_questions, .section1_contact_page, .section2_contact, .iframe1, .section4_project_talk");
  
  // Configuration for the Intersection Observer
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3, // Adjust this value as needed
  };
  
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show2");
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  sections.forEach((section) => {
    observer.observe(section);
  });
});



// JavaScript code
const submitBTN = document.getElementById('send_message_button');

submitBTN.addEventListener('click', event => {
  event.preventDefault();
  event.stopImmediatePropagation();

  // Your specific actions related to preventing the default action, if needed
  // If not, you can omit this part.
});


