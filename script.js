let currentPage = 0;
const pages = document.querySelectorAll(".page");

function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.remove("active");
        if (i === index) {
            page.classList.add("active");
        }
    });
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

document.getElementById("nextBtn")?.addEventListener("click", nextPage);
document.getElementById("prevBtn")?.addEventListener("click", prevPage);

document.getElementById("beginBtn")?.addEventListener("click", () => {
    currentPage = 1; // Move to the welcome page
    showPage(currentPage);
});

// Loading screen transition after 3 seconds
showPage(currentPage);
setTimeout(() => {
    currentPage = 1;
    showPage(currentPage);
}, 3000);