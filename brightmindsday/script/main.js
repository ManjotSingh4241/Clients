document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
  
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });

  // Select all the navigation links
  const navLinks = document.querySelectorAll('.nav-links a');

  // Add an event listener for each link
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default anchor behavior

      const targetId = this.getAttribute('href').substring(1); // Get the target section's id
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 60, // Adjust the scroll position to avoid navbar overlap
        behavior: 'smooth' // Enable smooth scrolling
      });
    });
  });