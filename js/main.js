window.onload = function () {
    const nav = document.getElementById('nav');
    const body = document.querySelector('body');
    const lock = nav.querySelector('.header__nav-wrp');
    const burger = nav.querySelector('.header__burger');
    const main = document.querySelector('main');
    const button1 = main.querySelector('.main-request__button-request');
    const button2 = main.querySelector('.main-purpose__button-order');
    const button3 = main.querySelector('.main-marketing__request-button');
    const button4 = main.querySelector('.main-form__form-button');
    const button5 = body.querySelector('.popup-form__form-button');
    const popup = document.getElementById('pop-active');
    const acept = document.getElementById('accept');
    burger.onclick = function () {
        burger.classList.toggle('header__burger-active');
        lock.classList.toggle('header__nav-wrp-active');
        body.classList.toggle('body-lock')
    }
    button1.onclick = function () {
        popup.classList.add('popup-form__active')
    }
    button2.onclick = function () {
        popup.classList.add('popup-form__active')
    }
    button3.onclick = function () {
        popup.classList.add('popup-form__active')
    }
    button4.onclick = function () {
        acept.classList.add('popup-accept__container-active')
    }
    button5.onclick = function () {
        acept.classList.add('popup-accept__container-active')
    }
}  