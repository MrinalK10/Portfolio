// (function() {
//     emailjs.init("3p6Bt0EuBg5UlBBqN"); 
// })();

// function sendEmail(event) {
//     event.preventDefault();

//     const form = document.getElementById('contactForm');
//     const formData = new FormData(form);

//     const data = {
//         fname: formData.get('fname'),
//         lname: formData.get('lname'),
//         email: formData.get('email'),
//         phone: formData.get('phone'),
//         message: formData.get('message')
//     };

//     emailjs.send("service_bh6sb67", "template_c3yhtpz", data)
//         .then(function(response) {
//             alert('Message sent successfully!');
//         }, function(error) {
//             console.error('Error:', error);
//             alert('An error occurred while sending the message.');
//         });
// }

// Menu show or Hidden 

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Show Menu

if(navToggle){
    navToggle.addEventListener('click' ,()=>{
        navMenu.classList.add('show-menu')
    })
}

// Hide Menu

if(navClose){
    navClose.addEventListener('click' ,()=>{
        navMenu.classList.remove('show-menu')
    })
}

// Remove menu mobile

const navLink =document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click',linkAction))



  function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



