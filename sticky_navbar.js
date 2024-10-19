function loadStickyNavbar() {
    fetch('sticky_navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sticky_navbar').innerHTML = data;

            const nav = document.querySelector(".nav");

            window.addEventListener("scroll", fixNav);

            function fixNav() {
                if (window.scrollY > nav.offsetHeight + 150) {
                    nav.classList.add("active");
                } else {
                    nav.classList.remove("active");
                }
            }
        })
        .catch(error => console.error('Error loading the sticky navbar:', error));
}

window.onload = loadStickyNavbar;
