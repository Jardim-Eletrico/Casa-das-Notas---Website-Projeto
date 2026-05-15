function toggleSideBar() {
    const hamburguer = document.getElementById("hamburguer");
    const sideBar = document.getElementById("sidebar");
    if (sideBar.style.display === "flex") {
        sideBar.style.display = "none";
        hamburguer.style.transform = "rotate(0deg)";
    } else {
        sideBar.style.display = "flex";
        sideBar.style.position = "absolute";
        sideBar.style.zIndex = "2";
        hamburguer.style.transform = "rotate(90deg)";
    }
}