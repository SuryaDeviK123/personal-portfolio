// Highlight Active Navigation Link
const currentPage = window.location.pathname.split("/").pop();

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Footer Year
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Kadali Surya Devi | All Rights Reserved`;
}