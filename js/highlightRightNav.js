document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.content h1, .content h2, .content h3'); // Select headers
    const navLinks = document.querySelectorAll('#right-navbar a'); // Generalized selection of links

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                // Add active class to the corresponding link
                const id = entry.target.id;
                const activeLink = document.querySelector(`a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
