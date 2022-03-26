window.onload = function () {
   const active = document.getElementById ('burger_active');
   const nav = document.getElementById ('nav_active')
   const lock = document.getElementById ('lock')
   console.log(active); 
   active.onclick = function () {
    active.classList.toggle ('header__burger-active')
    nav.classList.toggle ('header__nav-wrp-active')
    lock.classList.toggle ('body-lock')
    }
}  