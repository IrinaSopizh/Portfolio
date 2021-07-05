const   hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElement = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
} );

closeElement.addEventListener('click', () => {
    menu.classList.remove('active')
} );

const   pct = document.querySelectorAll('.skills__progress_pct'),
        scale = document.querySelectorAll('.skills__progress_scale span');

pct.forEach( (item, i) => {
    scale[i].style.width = item.innerHTML;
});
