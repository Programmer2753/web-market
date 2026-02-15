const select = document.getElementById('language');
const wrapper = document.querySelector('.language-selection');

select.addEventListener('click', () => {
    wrapper.classList.toggle('open');
});

select.addEventListener('blur', () => {
    wrapper.classList.remove('open');
});

select.addEventListener('change', () => {
    wrapper.classList.remove('open');
});
