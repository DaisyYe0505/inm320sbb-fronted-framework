const menuBtn = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("sidebar-backdrop");


menuBtn.addEventListener("click", () => {
    sidebar.classList.add("show-sidebar");
    backdrop.classList.add("show-backdrop");
});


backdrop.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
    backdrop.classList.remove("show-backdrop");
});


window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        sidebar.classList.remove("show-sidebar");
        backdrop.classList.remove("show-backdrop");
    }
});
