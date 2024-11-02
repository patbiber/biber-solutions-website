document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 70; // Height of the header
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 768) {
    const hamburger = document.getElementById('hamburger-btn');
    const nav = document.querySelector('nav');

    // Initially set or ensure the nav is hidden on page load within a mobile view
    nav.style.display = nav.style.display || 'none';

    hamburger.addEventListener('click', () => {
      // Toggle the display state of the nav
      nav.style.display = (nav.style.display === 'none') ? 'flex' : 'none';
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerOffset = 70; // Height of the header
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Close the nav menu when a link is clicked
          nav.style.display = 'none';
        }
      });
    });
  }
});

document.getElementById("hamburger-btn").addEventListener("click", function() {
    document.querySelector("nav").classList.toggle("show");
});
