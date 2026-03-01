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




    const categoryTop = document.querySelector('.category-top');
    const sortSelect = document.querySelector('.sort-select');
    const sortBtn = sortSelect.querySelector('.sort-btn');
    const sortText = sortSelect.querySelector('.sort-text');
    const options = sortSelect.querySelectorAll('.sort-dropdown button');

    let lastScrollY = window.scrollY;

    /* сворачивание при скролле */
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScrollY && currentScroll > 50) {
            categoryTop.classList.add('collapsed');
        } else {
            categoryTop.classList.remove('collapsed');
        }

        lastScrollY = currentScroll;
    });

    /* открытие селектора */
    sortBtn.addEventListener('click', () => {
        sortSelect.classList.toggle('open');
    });

    /* выбор сортировки */
    options.forEach(option => {
        option.addEventListener('click', () => {
            options.forEach(o => o.classList.remove('active'));
            option.classList.add('active');

            sortText.textContent = option.textContent;
            sortSelect.classList.remove('open');

            console.log('Сортировка:', option.dataset.sort);
        });
    });

    /* закрытие по клику вне */
    document.addEventListener('click', (e) => {
        if (!sortSelect.contains(e.target)) {
            sortSelect.classList.remove('open');
        }
    });

    document.querySelectorAll('.filter-header').forEach(header => {
        header.addEventListener('click', () => {
            // Ищем родительский блок и переключаем ему класс collapsed
            const block = header.closest('.filter-block');
            block.classList.toggle('collapsed');
        });
    });

    
    
    lang_menu();
});
