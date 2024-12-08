document.addEventListener("DOMContentLoaded", function () {
    fetch('navbar.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            initializeNavbar(); // Initialize navbar after it has been injected
        });

    // Observe sections for updating active link
    const sections = document.querySelectorAll('.content h1, .content h2, .content h3');
    const navLinks = document.querySelectorAll('#right-navbar a');
    let currentActiveId = null;

    const observer = new IntersectionObserver((entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
            visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
            const closestSection = visibleEntries[0].target.id;
            if (currentActiveId !== closestSection) {
                currentActiveId = closestSection;
                updateActiveLink(currentActiveId);
            }
        }
    }, {
        root: null,
        rootMargin: '0px 0px -15% 0px',
        threshold: 0
    });

    sections.forEach(section => observer.observe(section));

    function updateActiveLink(id) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`a[href="#${id}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    function setInitialActiveLink() {
        const closestSectionAbove = Array.from(sections)
            .filter(section => section.getBoundingClientRect().bottom >= 0)
            .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)[0];
        if (closestSectionAbove) {
            const id = closestSectionAbove.id;
            if (currentActiveId !== id) {
                currentActiveId = id;
                updateActiveLink(currentActiveId);
            }
        }
    }

    setInitialActiveLink();

    window.addEventListener('scroll', () => {
        if (currentActiveId) return;
        const closestSectionAbove = Array.from(sections)
            .filter(section => section.getBoundingClientRect().bottom >= 0)
            .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)[0];
        if (closestSectionAbove) {
            const id = closestSectionAbove.id;
            if (currentActiveId !== id) {
                currentActiveId = id;
                updateActiveLink(currentActiveId);
            }
        }
    });

    // Initialize Navbar (dropdown logic)
    function initializeNavbar() {
        const button = document.getElementById("Algorithms");
        const hiddenNav = document.getElementById("hiddenNav");

        if (!button || !hiddenNav) return;  // Early exit if elements not found

        button.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent closing immediately
            hiddenNav.classList.toggle("show");
        });

        document.addEventListener("click", function (event) {
            if (!hiddenNav.contains(event.target) && !button.contains(event.target)) {
                hideTimeout = setTimeout(function () {
                    hiddenNav.classList.remove("show");
                }, 300); 
            }
        });

        hiddenNav.addEventListener("mouseenter", function () {
            hiddenNav.classList.add("show");
        });

        hiddenNav.addEventListener("mouseleave", function () {
            hideTimeout = setTimeout(function () {
                hiddenNav.classList.remove("show");
            }, 300); 
        });
    }
});
