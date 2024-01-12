const navbar = document.getElementById("navbar-main");
let currentUrl = window.location.pathname;

if (currentUrl === "/" || currentUrl === "/index.html") {
  currentUrl = "/";
}

navbar.innerHTML = `
<div class="nav-container">
    <ul class="nav-ul-container">
        <div>
        <li class="nav-logo">Hotel Menu</li>
        </div>
        <div class="nav-flexContainer">
            <li class='nav-links 
            ${currentUrl === "/" ? "active" : ""}'>
            <a href="/">Home</a></li>
            <li class='nav-links 
            ${currentUrl === "/about.html" ? "active" : ""}'>
            <a href="/about.html">About</a></li>
            <li class='nav-links ${
              currentUrl === "/menu.html" ||
              currentUrl === "/addMenuItem.html" ||
              currentUrl === "/deleteMenuItem.html" ||
              currentUrl === "/editMenuItem.html" ? "active" : ""}'>
              <a href="/menu.html">Manage Menu</a></li>
            <li class='nav-links 
            ${currentUrl === "/table.html" ? "active" : ""}'>
            <a href="/table.html">Manage Tables</a></li>
        </div>
    </ul>
</div>`;
