window.onload = function () {
   const active = document.getElementById('click');
   console.log(active); 
   active.onclick = function () {
    active.classList.toggle ('header__burger-active')
    // if(activ.classList.contains('header__burger-active')) {
    //     activ.classList.remove('header__burger-active')
    //     } else {
    //     activ.classList.add('header__burger-active');
    //     }
    }
}  