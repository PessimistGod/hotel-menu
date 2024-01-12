const navbarMenu = document.getElementById("navbar-menu");

navbarMenu.innerHTML = `
<div class="nav-menu-container">
    <ul class="nav-menu-ul-container">
        <li class='nav-links ${currentUrl === '/menu.html'? 'active': ''}'><a href="/menu.html">View Menu Items</a></li>
        <li class='nav-links ${currentUrl === '/addMenuItem.html'? 'active': ''}'><a href="/addMenuItem.html">Add Menu Items</a></li>
        <li class='nav-links ${currentUrl === '/deleteMenuItem.html'? 'active': ''}'><a href="/deleteMenuItem.html">Delete Menu Items</a></li>
        <!-- <li class='nav-links ${currentUrl === '/editMenuItem.html'? 'active': ''}'><a href="/editMenuItem.html">Edit Menu Items</a></li> -->
    </ul>
</div>`;
