// Fixed Navbar
window.onscroll = function() {
    const header = document.querySelector('header');
    const offcanvas = document.getElementById('offcanvas-menu');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
        offcanvas.classList.add('offcanvas-style');
    } else {
        header.classList.remove('navbar-fixed');
        offcanvas.classList.remove('offcanvas-style');
    }
};

// Offcanvas navbar
document.getElementById("menu-toggle").addEventListener("change", function() {
    const offcanvas = document.getElementById("offcanvas-menu");
    offcanvas.classList.toggle("hidden");
});