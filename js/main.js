window.onload = function () {
    const nav = document.getElementById('nav');
    const body = document.querySelector('body');
    const lock = nav.querySelector('.header__nav-wrp');
    const burger = nav.querySelector('.header__burger');
    burger.onclick = function () {
        burger.classList.toggle('header__burger-active');
        lock.classList.toggle('header__nav-wrp-active');
        body.classList.toggle('body-lock')
    }
}  