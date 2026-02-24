function lang_menu() {
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
}


document.addEventListener('DOMContentLoaded', () => {
    const catalogue_button = document.querySelector('.catalogue-btn');
    const catalogue_menu = document.querySelector('.catalogue-menu');
    const overlay = document.querySelector('.menu-overlay');

    if (!catalogue_button || !catalogue_menu || !overlay) return;


    catalogue_button.addEventListener('click', (e) => {
        e.preventDefault();
        catalogue_button.classList.toggle('open');
        catalogue_menu.classList.toggle('open');
        overlay.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        const isClickInsideMenu = catalogue_menu.contains(e.target);
        const isClickOnButton = catalogue_button.contains(e.target);

        if (!isClickInsideMenu && !isClickOnButton) {
            catalogue_menu.classList.remove('open');
            catalogue_button.classList.remove('open');
            overlay.classList.remove('open');
        }
    });
    
    lang_menu();
});
