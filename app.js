document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('language');
    const wrapper = document.querySelector('.language-selection');

    if (!select || !wrapper) return;

    // открытие списка
    select.addEventListener('mousedown', () => {
        wrapper.classList.add('open');
    });

    // выбор значения
    select.addEventListener('change', () => {
        wrapper.classList.remove('open');
    });

    // закрытие без выбора (клик мимо / ESC)
    select.addEventListener('blur', () => {
        wrapper.classList.remove('open');
    });
});
