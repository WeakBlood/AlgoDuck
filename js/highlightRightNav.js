document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.content h1, .content h2, .content h3'); // Headers in the content
    const navLinks = document.querySelectorAll('#right-navbar a'); // Links in the right navbar

    let currentActiveId = null; // Track the currently active section

    const observer = new IntersectionObserver((entries) => {
        // Filter for entries with positive visibility (those intersecting)
        const visibleEntries = entries.filter(entry => entry.isIntersecting);

        if (visibleEntries.length > 0) {
            // Sort visible entries by distance from the top
            visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

            // The closest visible section to the top
            const closestSection = visibleEntries[0].target.id;

            // Update active link if it has changed
            if (currentActiveId !== closestSection) {
                currentActiveId = closestSection;
                updateActiveLink(currentActiveId);
            }
        }
    }, {
        root: null, // Use the viewport as the root
        rootMargin: '0px 0px -15% 0px', // Adjust based on desired behavior
        threshold: 0 // Trigger whenever the element is even slightly visible
    });

    // Observe all sections
    sections.forEach(section => observer.observe(section));

    // Function to update active link
    function updateActiveLink(id) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`a[href="#${id}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Check the position of headers on page load
    function setInitialActiveLink() {
        const closestSectionAbove = Array.from(sections)
            .filter(section => section.getBoundingClientRect().bottom >= 0) // Ensure it hasn't fully scrolled out
            .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)[0];

        if (closestSectionAbove) {
            const id = closestSectionAbove.id;
            if (currentActiveId !== id) {
                currentActiveId = id;
                updateActiveLink(currentActiveId);
            }
        }
    }

    // Call the function to set the initial active link
    setInitialActiveLink();

    // Fallback for when no section is visible on scroll
    window.addEventListener('scroll', () => {
        if (currentActiveId) return; // Skip if already set by IntersectionObserver

        // Find the section closest to the top, even if not visible
        const closestSectionAbove = Array.from(sections)
            .filter(section => section.getBoundingClientRect().bottom >= 0) // Ensure it hasn't fully scrolled out
            .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)[0];

        if (closestSectionAbove) {
            const id = closestSectionAbove.id;
            if (currentActiveId !== id) {
                currentActiveId = id;
                updateActiveLink(currentActiveId);
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("Algorithms");
    const hiddenNav = document.getElementById("hiddenNav");
  
    // Toggle dropdown menu on click
    button.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent closing immediately due to document listener
      if (hiddenNav.classList.contains("show")) {
        hiddenNav.classList.remove("show");
      } else {
        hiddenNav.classList.add("show");
      }
    });
  
    // Close dropdown when clicking anywhere else
    document.addEventListener("click", function (event) {
      if (!hiddenNav.contains(event.target) && !button.contains(event.target)) {
        hiddenNav.classList.remove("show");
      }
    });
  
    // Optional: Keep dropdown open on hover
    hiddenNav.addEventListener("mouseenter", function () {
      hiddenNav.classList.add("show");
    });
  
    hiddenNav.addEventListener("mouseleave", function () {
      hiddenNav.classList.remove("show");
    });
  });