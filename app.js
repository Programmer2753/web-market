function lang_menu() {
    const select = document.getElementById('language');
    const wrapper = document.querySelector('.language-selection');

    if (!select || !wrapper) return;

    select.addEventListener('mousedown', () => {
        wrapper.classList.add('open');
    });

    select.addEventListener('change', () => {
        wrapper.classList.remove('open');
    });

    select.addEventListener('blur', () => {
        wrapper.classList.remove('open');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        // --- APPLE ---
        { id: 1, category: "smartphones", brand: "Apple", name: "iPhone 17 Pro Max 256GB Black Titanium", newPrice: 1199.99, oldPrice: 1299.99, discount: "-8%", img: "images/i17pm.avif", onSale: true, condition: "new", memory: 256, ram: 12, battery: 4422, popularity: 100 },
        { id: 2, category: "smartphones", brand: "Apple", name: "iPhone 17 Air 128GB Ultra Thin", newPrice: 999.99, oldPrice: null, discount: null, img: "images/i17air.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 3150, popularity: 85 },
        { id: 3, category: "smartphones", brand: "Apple", name: "iPhone 16 Pro 128GB Desert Titanium", newPrice: 899.99, oldPrice: 999.99, discount: "-10%", img: "images/i16p.avif", onSale: true, condition: "new", memory: 128, ram: 8, battery: 3582, popularity: 92 },
        { id: 4, category: "smartphones", brand: "Apple", name: "iPhone 15 Pro 128GB (Б/У) Blue Titanium", newPrice: 549.99, oldPrice: 650.00, discount: "-15%", img: "images/i15p_used.avif", onSale: true, condition: "used", memory: 128, ram: 8, battery: 3274, popularity: 70 },
        { id: 5, category: "smartphones", brand: "Apple", name: "iPhone 17 Pro 256GB Titanium", newPrice: 1099.99, oldPrice: null, discount: null, img: "images/i17p.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 4300, popularity: 95 },
        { id: 6, category: "smartphones", brand: "Apple", name: "iPhone 17 128GB Black", newPrice: 899.99, oldPrice: null, discount: null, img: "images/i17.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 3900, popularity: 90 },
        { id: 7, category: "smartphones", brand: "Apple", name: "iPhone 16 Pro Max 256GB Titanium", newPrice: 999.99, oldPrice: 1099.99, discount: "-9%", img: "images/i16pm.avif", onSale: true, condition: "new", memory: 256, ram: 8, battery: 3600, popularity: 94 },
        { id: 8, category: "smartphones", brand: "Apple", name: "iPhone 16 Plus 128GB Blue", newPrice: 799.99, oldPrice: null, discount: null, img: "images/i16plus.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 4300, popularity: 88 },
        { id: 9, category: "smartphones", brand: "Apple", name: "iPhone 16e 128GB White", newPrice: 699.99, oldPrice: null, discount: null, img: "images/i16e.avif", onSale: false, condition: "new", memory: 128, ram: 6, battery: 4000, popularity: 80 },

        // --- SAMSUNG ---
        { id: 10, category: "smartphones", brand: "Samsung", name: "Galaxy S25 Ultra 512GB Titanium Gray", newPrice: 1249.99, oldPrice: 1399.99, discount: "-11%", img: "images/s25u.avif", onSale: true, condition: "new", memory: 512, ram: 12, battery: 5000, popularity: 98 },
        { id: 11, category: "smartphones", brand: "Samsung", name: "Galaxy Fold 7 Phantom Black", newPrice: 1799.99, oldPrice: null, discount: null, img: "images/fold7.avif", onSale: false, condition: "new", memory: 512, ram: 16, battery: 4600, popularity: 65 },
        { id: 12, category: "smartphones", brand: "Samsung", name: "Galaxy A56 5G 8/256GB Awesome Navy", newPrice: 449.99, oldPrice: 499.99, discount: "-10%", img: "images/a56.avif", onSale: true, condition: "new", memory: 256, ram: 8, battery: 5000, popularity: 88 },
        { id: 13, category: "smartphones", brand: "Samsung", name: "Galaxy S25 256GB Black", newPrice: 999.99, oldPrice: null, discount: null, img: "images/s25.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 4800, popularity: 92 },
        { id: 14, category: "smartphones", brand: "Samsung", name: "Galaxy S25+ 512GB Silver", newPrice: 1099.99, oldPrice: null, discount: null, img: "images/s25plus.avif", onSale: false, condition: "new", memory: 512, ram: 12, battery: 4900, popularity: 90 },
        { id: 15, category: "smartphones", brand: "Samsung", name: "Galaxy S24 Ultra 512GB Gray", newPrice: 999.99, oldPrice: 1199.99, discount: "-17%", img: "images/s24u.avif", onSale: true, condition: "new", memory: 512, ram: 12, battery: 5000, popularity: 96 },
        { id: 16, category: "smartphones", brand: "Samsung", name: "Galaxy Flip 7 256GB Purple", newPrice: 1049.99, oldPrice: null, discount: null, img: "images/flip7.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 3900, popularity: 84 },
        { id: 17, category: "smartphones", brand: "Samsung", name: "Galaxy A36 5G 8/128GB Black", newPrice: 329.99, oldPrice: null, discount: null, img: "images/a36.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 5000, popularity: 75 },

        // --- GOOGLE ---
        { id: 20, category: "smartphones", brand: "Google", name: "Pixel 10 Pro XL 256GB Obsidian", newPrice: 1099.99, oldPrice: null, discount: null, img: "images/p10pxl.avif", onSale: false, condition: "new", memory: 256, ram: 16, battery: 5100, popularity: 75 },
        { id: 21, category: "smartphones", brand: "Google", name: "Pixel 9a 128GB Porcelain", newPrice: 499.99, oldPrice: 549.99, discount: "-9%", img: "images/p9a.avif", onSale: true, condition: "new", memory: 128, ram: 8, battery: 4700, popularity: 82 },
        { id: 22, category: "smartphones", brand: "Google", name: "Pixel 10 Pro 256GB Obsidian", newPrice: 999.99, oldPrice: null, discount: null, img: "images/p10p.avif", onSale: false, condition: "new", memory: 256, ram: 16, battery: 5000, popularity: 88 },
        { id: 23, category: "smartphones", brand: "Google", name: "Pixel 9 Pro XL 256GB Hazel", newPrice: 949.99, oldPrice: null, discount: null, img: "images/p9pxl.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 5050, popularity: 87 },

        // --- XIAOMI / REDMI / POCO ---
        { id: 30, category: "smartphones", brand: "Xiaomi", name: "Xiaomi 15 Ultra 16/512GB Ceramic Black", newPrice: 1150.00, oldPrice: 1250.00, discount: "-8%", img: "images/x15u.avif", onSale: true, condition: "new", memory: 512, ram: 16, battery: 5500, popularity: 91 },
        { id: 31, category: "smartphones", brand: "Redmi", name: "Redmi Note 14 Pro+ 12/256GB Green", newPrice: 399.99, oldPrice: 450.00, discount: "-11%", img: "images/rn14p.avif", onSale: true, condition: "new", memory: 256, ram: 12, battery: 6200, popularity: 94 },
        { id: 32, category: "smartphones", brand: "POCO", name: "POCO F8 Pro 12/512GB Yellow", newPrice: 599.99, oldPrice: null, discount: null, img: "images/f8p.avif", onSale: false, condition: "new", memory: 512, ram: 12, battery: 5000, popularity: 89 },
        { id: 33, category: "smartphones", brand: "Xiaomi", name: "Xiaomi 15 12/256GB Black", newPrice: 699.99, oldPrice: null, discount: null, img: "images/x15.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 5200, popularity: 89 },
        { id: 34, category: "smartphones", brand: "Xiaomi", name: "Xiaomi 15T Pro 12/512GB Blue", newPrice: 849.99, oldPrice: null, discount: null, img: "images/x15tp.avif", onSale: false, condition: "new", memory: 512, ram: 12, battery: 5300, popularity: 86 },
        { id: 35, category: "smartphones", brand: "Redmi", name: "Redmi Note 14 8/128GB Black", newPrice: 249.99, oldPrice: null, discount: null, img: "images/rn14.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 5000, popularity: 83 },
        { id: 36, category: "smartphones", brand: "POCO", name: "POCO X7 Pro 12/256GB Black", newPrice: 429.99, oldPrice: null, discount: null, img: "images/x7p.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 5100, popularity: 90 },

        // --- MOTOROLA / NOTHING / OTHERS ---
        { id: 40, category: "smartphones", brand: "Motorola", name: "MOTO Razr 60 Ultra Hot Pink", newPrice: 899.99, oldPrice: 999.99, discount: "-10%", img: "images/razr60.avif", onSale: true, condition: "new", memory: 512, ram: 12, battery: 4200, popularity: 78 },
        { id: 41, category: "smartphones", brand: "Nothing", name: "Nothing Phone (3) 12/256GB Black", newPrice: 699.99, oldPrice: null, discount: null, img: "images/nothing3.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 5000, popularity: 86 },
        { id: 42, category: "smartphones", brand: "OnePlus", name: "OnePlus 15 16/256GB Emerald", newPrice: 799.99, oldPrice: 849.99, discount: "-6%", img: "images/op15.avif", onSale: true, condition: "new", memory: 256, ram: 16, battery: 5400, popularity: 93 },
        { id: 43, category: "smartphones", brand: "Motorola", name: "MOTO Edge 60 Pro 12/256GB Gray", newPrice: 649.99, oldPrice: null, discount: null, img: "images/edge60p.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 4600, popularity: 82 },
        { id: 44, category: "smartphones", brand: "OnePlus", name: "OnePlus 15R 12/256GB Black", newPrice: 699.99, oldPrice: null, discount: null, img: "images/op15r.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 5200, popularity: 88 },
        { id: 45, category: "smartphones", brand: "Nothing", name: "Nothing Phone (3a) Pro 12/256GB White", newPrice: 599.99, oldPrice: null, discount: null, img: "images/nothing3ap.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 5000, popularity: 84 },

        // --- LAPTOPS
        // --- APPLE LAPTOPS ---
        { id: 100, category: "laptops", brand: "Apple", name: "MacBook Air 15\" M2 512GB Silver", newPrice: 1299.99, oldPrice: 1399.99, discount: "-7%", img: "images/macbook_air15.avif", onSale: true, condition: "new", memory: 512, ram: 16, battery: 18, popularity: 95 },
        { id: 101, category: "laptops", brand: "Apple", name: "MacBook Pro 16\" M3 1TB Space Gray", newPrice: 2399.99, oldPrice: null, discount: null, img: "images/macbook_pro16.avif", onSale: false, condition: "new", memory: 1024, ram: 32, battery: 21, popularity: 98 },

        // --- WINDOWS LAPTOPS (ASUS) ---
        { id: 110, category: "laptops", brand: "ASUS", name: "ASUS ROG Strix G16 16\" 1TB Black", newPrice: 1599.99, oldPrice: 1799.99, discount: "-11%", img: "images/asus_rog_g16.avif", onSale: true, condition: "new", memory: 1024, ram: 32, battery: 8, popularity: 90 },
        { id: 111, category: "laptops", brand: "ASUS", name: "ASUS Vivobook 14\" 512GB Blue", newPrice: 799.99, oldPrice: null, discount: null, img: "images/asus_vivobook14.avif", onSale: false, condition: "new", memory: 512, ram: 16, battery: 10, popularity: 85 },

        // --- WINDOWS LAPTOPS (Acer) ---
        { id: 120, category: "laptops", brand: "Acer", name: "Acer Swift 3 14\" 512GB Silver", newPrice: 749.99, oldPrice: 899.99, discount: "-16%", img: "images/acer_swift3.avif", onSale: true, condition: "new", memory: 512, ram: 16, battery: 11, popularity: 82 },
        { id: 121, category: "laptops", brand: "Acer", name: "Acer Nitro 5 15\" 1TB Black", newPrice: 1149.99, oldPrice: null, discount: null, img: "images/acer_nitro5.avif", onSale: false, condition: "new", memory: 1024, ram: 16, battery: 9, popularity: 87 },

        // --- WINDOWS LAPTOPS (Lenovo) ---
        { id: 130, category: "laptops", brand: "Lenovo", name: "Lenovo ThinkPad X1 Carbon 14\" 1TB Black", newPrice: 1899.99, oldPrice: 2099.99, discount: "-10%", img: "images/lenovo_x1carbon.avif", onSale: true, condition: "new", memory: 1024, ram: 32, battery: 15, popularity: 92 },
        { id: 131, category: "laptops", brand: "Lenovo", name: "Lenovo IdeaPad 5 15\" 512GB Grey", newPrice: 699.99, oldPrice: null, discount: null, img: "images/lenovo_ideapad5.avif", onSale: false, condition: "new", memory: 512, ram: 8, battery: 10, popularity: 78 },

        // --- WINDOWS LAPTOPS (HP) ---
        { id: 140, category: "laptops", brand: "HP", name: "HP Spectre x360 13\" 512GB Silver", newPrice: 1249.99, oldPrice: 1399.99, discount: "-10%", img: "images/hp_spectre_x360.avif", onSale: true, condition: "new", memory: 512, ram: 16, battery: 12, popularity: 89 },
        { id: 141, category: "laptops", brand: "HP", name: "HP Pavilion 15\" 256GB Black", newPrice: 649.99, oldPrice: null, discount: null, img: "images/hp_pavilion15.avif", onSale: false, condition: "new", memory: 256, ram: 8, battery: 9, popularity: 81 },

        // --- WINDOWS LAPTOPS (Dell) ---
        { id: 150, category: "laptops", brand: "Dell", name: "Dell XPS 13 512GB Silver", newPrice: 1399.99, oldPrice: null, discount: null, img: "images/dell_xps13.avif", onSale: false, condition: "new", memory: 512, ram: 16, battery: 13, popularity: 88 },
        { id: 151, category: "laptops", brand: "Dell", name: "Dell G15 15\" 1TB Black", newPrice: 1199.99, oldPrice: 1299.99, discount: "-8%", img: "images/dell_g15.avif", onSale: true, condition: "new", memory: 1024, ram: 16, battery: 10, popularity: 86 }
    ];

    const gridElement = document.getElementById('products-grid');
    let currentCategory = gridElement ? gridElement.dataset.pageCategory : null;
    let currentSort = 'popular';

    function updateCounts() {
        if (!document.querySelector('.brand-checkbox')) return;

        const categoryProducts = currentCategory 
            ? products.filter(p => p.category === currentCategory) 
            : products;

        document.querySelectorAll('.brand-checkbox').forEach(cb => {
            const count = categoryProducts.filter(p => p.brand === cb.value).length;
            const item = cb.closest('.filter-item');
            if (item) {
                const countSpan = item.querySelector('.filter-count');
                if (countSpan) countSpan.textContent = count;
            }
        });

        const saleCheckbox = document.querySelector('.sale-checkbox');
        if (saleCheckbox) {
            const saleCount = categoryProducts.filter(p => p.onSale).length;
            const item = saleCheckbox.closest('.filter-item');
            if (item) {
                const countSpan = item.querySelector('.filter-count');
                if (countSpan) countSpan.textContent = saleCount;
            }
        }

        document.querySelectorAll('.memory-checkbox').forEach(cb => {
            const val = parseInt(cb.value);
            const count = categoryProducts.filter(p => p.memory === val).length;
            const item = cb.closest('.filter-grid-item');
            if (item) {
                const countSpan = item.querySelector('.grid-item-count');
                if (countSpan) countSpan.textContent = count;
            }
        });

        document.querySelectorAll('.ram-checkbox').forEach(cb => {
            const val = parseInt(cb.value);
            const count = categoryProducts.filter(p => p.ram === val).length;
            const item = cb.closest('.filter-grid-item');
            if (item) {
                const countSpan = item.querySelector('.grid-item-count');
                if (countSpan) countSpan.textContent = count;
            }
        });

        document.querySelectorAll('.battery-checkbox').forEach(cb => {
            const range = cb.value;
            const [min, max] = range.split('-');
            const count = categoryProducts.filter(p => {
                if (max === 'max') return p.battery >= parseInt(min);
                return p.battery >= parseInt(min) && p.battery <= parseInt(max);
            }).length;
            const item = cb.closest('.filter-item');
            if (item) {
                const countSpan = item.querySelector('.filter-count');
                if (countSpan) countSpan.textContent = count;
            }
        });
    }

    function saveFilters() {
        const saleCb = document.querySelector('.sale-checkbox');
        if (!saleCb) return;

        const filtersState = {
            brands: Array.from(document.querySelectorAll('.brand-checkbox:checked')).map(cb => cb.value),
            memory: Array.from(document.querySelectorAll('.memory-checkbox:checked')).map(cb => cb.value),
            ram: Array.from(document.querySelectorAll('.ram-checkbox:checked')).map(cb => cb.value),
            battery: Array.from(document.querySelectorAll('.battery-checkbox:checked')).map(cb => cb.value),
            sale: saleCb.checked,
            minPrice: document.querySelector('.min-price').value,
            maxPrice: document.querySelector('.max-price').value,
            sort: currentSort 
        };
        localStorage.setItem('phoneFilters', JSON.stringify(filtersState));
    }

    function handleUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryFromUrl = urlParams.get('category');
        const brandFromUrl = urlParams.get('brand');

        if (categoryFromUrl || brandFromUrl) {
            // При переходе из главного меню сбрасываем старые фильтры
            localStorage.removeItem('phoneFilters');
            
            // ВАЖНО: Обновляем категорию, ТОЛЬКО если она есть в URL. 
            // Иначе оставляем ту, что прочитали из HTML (data-page-category)
            if (categoryFromUrl) {
                currentCategory = categoryFromUrl;
            }

            // Сбрасываем и устанавливаем чекбоксы брендов
            document.querySelectorAll('.brand-checkbox').forEach(cb => cb.checked = false);
            if (brandFromUrl) {
                const targetCheckbox = document.querySelector(`.brand-checkbox[value="${brandFromUrl}"]`);
                if (targetCheckbox) targetCheckbox.checked = true;
            }

            // Очищаем URL, чтобы он стал красивым
            const cleanUrl = window.location.origin + window.location.pathname;
            window.history.replaceState({}, '', cleanUrl);
        }
    }

    function loadFilters() {
        const saved = localStorage.getItem('phoneFilters');
        const grid = document.getElementById('products-grid');
        
        if (!saved) {
            if (grid) updateGallery();
            return;
        }

        const state = JSON.parse(saved);

        const restoreCheckboxes = (selector, values) => {
            document.querySelectorAll(selector).forEach(cb => {
                if (values && values.includes(cb.value)) cb.checked = true;
            });
        };

        restoreCheckboxes('.brand-checkbox', state.brands);
        restoreCheckboxes('.memory-checkbox', state.memory);
        restoreCheckboxes('.ram-checkbox', state.ram);
        restoreCheckboxes('.battery-checkbox', state.battery);
        
        const saleCb = document.querySelector('.sale-checkbox');
        if (saleCb) saleCb.checked = state.sale;

        const minP = document.querySelector('.min-price');
        if (minP) minP.value = state.minPrice;

        const maxP = document.querySelector('.max-price');
        if (maxP) maxP.value = state.maxPrice;
        
        if (state.sort) {
            currentSort = state.sort;
            const activeOption = document.querySelector(`.sort-dropdown button[data-sort="${currentSort}"]`);
            if (activeOption) {
                const sortTxt = document.querySelector('.sort-text');
                if (sortTxt) sortTxt.textContent = activeOption.textContent;
                document.querySelectorAll('.sort-dropdown button').forEach(o => o.classList.remove('active'));
                activeOption.classList.add('active');
            }
        }
        if (grid) updateGallery();
    }

    document.querySelectorAll('.brand-checkbox, .memory-checkbox, .ram-checkbox, .battery-checkbox, .sale-checkbox')
        .forEach(el => el.addEventListener('change', updateGallery));

    const applyBtn = document.querySelector('.apply-btn');
    if (applyBtn) applyBtn.addEventListener('click', updateGallery);

    // --- КАТАЛОГ МЕНЮ ---
    const catalogue_button = document.querySelector('.catalogue-btn');
    const catalogue_menu = document.querySelector('.catalogue-menu');
    const overlay = document.querySelector('.menu-overlay');

    if (catalogue_button && catalogue_menu && overlay) {
        catalogue_button.addEventListener('click', (e) => {
            e.preventDefault();
            catalogue_button.classList.toggle('open');
            catalogue_menu.classList.toggle('open');
            overlay.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (!catalogue_menu.contains(e.target) && !catalogue_button.contains(e.target)) {
                catalogue_menu.classList.remove('open');
                catalogue_button.classList.remove('open');
                overlay.classList.remove('open');
            }
        });
    }

    // --- ШАПКА КАТЕГОРИИ И СОРТИРОВКА ---
    const categoryTop = document.querySelector('.category-top');
    const sortSelect = document.querySelector('.sort-select');

    if (categoryTop) {
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScrollY && currentScroll > 50) {
                categoryTop.classList.add('collapsed');
            } else {
                categoryTop.classList.remove('collapsed');
            }
            lastScrollY = currentScroll;
        });
    }

    if (sortSelect) {
        const sortBtn = sortSelect.querySelector('.sort-btn');
        const sortText = sortSelect.querySelector('.sort-text');
        const options = sortSelect.querySelectorAll('.sort-dropdown button');

        sortBtn.addEventListener('click', () => sortSelect.classList.toggle('open'));

        options.forEach(option => {
            option.addEventListener('click', () => {
                options.forEach(o => o.classList.remove('active'));
                option.classList.add('active');
                sortText.textContent = option.textContent;
                sortSelect.classList.remove('open');
                currentSort = option.dataset.sort;
                updateGallery();
            });
        });

        document.addEventListener('click', (e) => {
            if (!sortSelect.contains(e.target)) sortSelect.classList.remove('open');
        });
    }

    // Аккордеоны фильтров
    document.querySelectorAll('.filter-header').forEach(header => {
        header.addEventListener('click', () => {
            const block = header.closest('.filter-block');
            if (block) block.classList.toggle('collapsed');
        });
    });

    // --- РЕНДЕР ТОВАРОВ ---
    function renderProducts(productsToRender) {
        const grid = document.getElementById('products-grid');
        grid.innerHTML = ''; 

        productsToRender.forEach(product => {
            const priceClass = product.onSale ? 'price' : 'price-regular';
            const saleBadge = (product.onSale && product.discount) ? `<span class="sale-badge">${product.discount}</span>` : '';
            const oldPriceHtml = (product.onSale && product.oldPrice) ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : '';

            grid.innerHTML += `
                <div class="product-card">
                    <div class="product-image">
                        ${saleBadge}
                        <img src="${product.img}" alt="${product.name}">
                    </div>
                    <h3>${product.name}</h3>
                    <p class="${priceClass}">
                        ${oldPriceHtml}
                        <span class="new-price">$${product.newPrice.toFixed(2)}</span>
                    </p>
                    <button class="buy-btn">
                        <span>Buy</span>
                        <span class="icon">🛒</span>
                    </button>
                </div>
            `;
        });
    }
    

    // --- ОБНОВЛЕНИЕ ГАЛЕРЕИ ---
    function updateGallery() {
        const grid = document.getElementById('products-grid');
        if (!grid) return;

        const checkedBrands = Array.from(document.querySelectorAll('.brand-checkbox:checked')).map(cb => cb.value);
        const saleCb = document.querySelector('.sale-checkbox');
        const isSaleOnly = saleCb ? saleCb.checked : false;
        
        const minP = document.querySelector('.min-price');
        const maxP = document.querySelector('.max-price');
        const minPrice = minP ? (parseFloat(minP.value) || 0) : 0;
        const maxPrice = maxP ? (parseFloat(maxP.value) || Infinity) : Infinity;

        const checkedMemory = Array.from(document.querySelectorAll('.memory-checkbox:checked')).map(cb => parseInt(cb.value));
        const checkedRam = Array.from(document.querySelectorAll('.ram-checkbox:checked')).map(cb => parseInt(cb.value));
        const checkedBatteryRanges = Array.from(document.querySelectorAll('.battery-checkbox:checked')).map(cb => cb.value);

        // --- ВОТ ЗДЕСЬ ИЗМЕНЕНИЯ ---
        let filtered = products.filter(product => {
            // 1. Проверка категории (ВАЖНО: если currentCategory пустой, показываем все товары)
            const matchCategory = !currentCategory || product.category === currentCategory;

            // 2. Остальные фильтры
            const matchBrand = checkedBrands.length === 0 || checkedBrands.includes(product.brand);
            const matchSale = !isSaleOnly || product.onSale === true;
            const matchPrice = product.newPrice >= minPrice && product.newPrice <= maxPrice;
            const matchMemory = checkedMemory.length === 0 || checkedMemory.includes(product.memory);
            const matchRam = checkedRam.length === 0 || checkedRam.includes(product.ram);
            
            let matchBattery = true;
            if (checkedBatteryRanges.length > 0) {
                matchBattery = checkedBatteryRanges.some(range => {
                    const [min, max] = range.split('-');
                    const batteryVal = product.battery;
                    if (max === 'max') return batteryVal >= parseInt(min);
                    return batteryVal >= parseInt(min) && batteryVal <= parseInt(max);
                });
            }

            // Добавляем matchCategory в итоговый результат
            return matchCategory && matchBrand && matchSale && matchPrice && matchMemory && matchRam && matchBattery;
        });

        // Сортировка (оставляем как было)
        if (currentSort === 'cheap') {
            filtered.sort((a, b) => a.newPrice - b.newPrice);
        } else if (currentSort === 'expensive') {
            filtered.sort((a, b) => b.newPrice - a.newPrice);
        } else if (currentSort === 'popular') {
            filtered.sort((a, b) => b.popularity - a.popularity);
        }

        renderProducts(filtered);
        saveFilters(); 
    }

    document.addEventListener('change', (e) => {
        if (e.target.classList.contains('brand-checkbox')) {
            updateGallery();
        }
    });
    
    handleUrlParams();
    updateCounts();
    loadFilters();
    lang_menu();
});

