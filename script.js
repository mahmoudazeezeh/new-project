let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('header nav');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};
// Get all sections in the document
const sections = document.querySelectorAll('section');

// Select the <ul> element to append navigation links
const navbar = document.createElement('ul');
navbar.classList.add('navbar');

// Loop through each section and create navigation links
sections.forEach((section) => {
  const navItem = document.createElement('li');
  const link = document.createElement('a');

  // Set the href and text content for each link
  link.href = `#${section.id}`;
  link.textContent = section.getAttribute('data-nav') || section.id;

  // Append the link to the list item
  navItem.appendChild(link);

  // Append the list item to the navigation bar
  navbar.appendChild(navItem);
});

// Append the dynamically created navbar to the header
document.querySelector('.header').appendChild(navbar);

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
      });
    }
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
  menuIcon.classList.remove('fa-times');
  navbar.classList.remove('active');
};

ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, h1', { origin: 'top' });
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Web Designer', 'YouTuber'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
