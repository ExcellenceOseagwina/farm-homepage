const buttonMenu = document.querySelector('.menu-icon');
const hidden = document.querySelector('.red');

buttonMenu.addEventListener('click', function(){
    if (hidden.style.display === 'none') {
        hidden.style.display = 'block';
    }
    else
        hidden.style.display = 'none'
})