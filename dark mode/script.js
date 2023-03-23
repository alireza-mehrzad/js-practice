const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', () =>
{
    toggle.classList.toggle('bi-moon')
    
    if (toggle.classList.toggle('bi-brightness-high-fill'))
    {
        body.style.background = '#f1f1f1';
        body.style.color = '#333';
        body.style.transition = '2s';

    } else
    {
        body.style.background = '#333';
        body.style.color = '#f1f1f1';
        body.style.transition = '2s';

    }
})