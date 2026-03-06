const products = [
    // --- SMARTPHONES ---
    { id: 1, category: "smartphones", brand: "Apple", name: "iPhone 17 Pro Max 256GB Black Titanium", newPrice: 1199.99, oldPrice: 1299.99, discount: "-8%", img: "images/i17pm.avif", onSale: true, condition: "new", memory: 256, ram: 12, battery: 4422, popularity: 100 },
    { id: 2, category: "smartphones", brand: "Apple", name: "iPhone 17 Air 128GB Ultra Thin", newPrice: 999.99, oldPrice: null, discount: null, img: "images/i17air.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 3150, popularity: 85 },
    { id: 3, category: "smartphones", brand: "Apple", name: "iPhone 16 Pro 128GB Desert Titanium", newPrice: 899.99, oldPrice: 999.99, discount: "-10%", img: "images/i16p.avif", onSale: true, condition: "new", memory: 128, ram: 8, battery: 3582, popularity: 92 },
    { id: 4, category: "smartphones", brand: "Apple", name: "iPhone 15 Pro 128GB Blue Titanium", newPrice: 549.99, oldPrice: 650.00, discount: "-15%", img: "images/i15p_used.avif", onSale: true, condition: "used", memory: 128, ram: 8, battery: 3274, popularity: 70 },
    { id: 5, category: "smartphones", brand: "Apple", name: "iPhone 17 Pro 256GB Titanium", newPrice: 1099.99, oldPrice: null, discount: null, img: "images/i17p.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 4300, popularity: 95 },
    { id: 6, category: "smartphones", brand: "Apple", name: "iPhone 17 128GB Black", newPrice: 899.99, oldPrice: null, discount: null, img: "images/i17.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 3900, popularity: 90 },
    { id: 7, category: "smartphones", brand: "Apple", name: "iPhone 16 Pro Max 256GB Titanium", newPrice: 999.99, oldPrice: 1099.99, discount: "-9%", img: "images/i16pm.avif", onSale: true, condition: "new", memory: 256, ram: 8, battery: 3600, popularity: 94 },
    { id: 8, category: "smartphones", brand: "Apple", name: "iPhone 16 Plus 128GB Blue", newPrice: 799.99, oldPrice: null, discount: null, img: "images/i16plus.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 4300, popularity: 88 },
    { id: 9, category: "smartphones", brand: "Apple", name: "iPhone 16e 128GB White", newPrice: 699.99, oldPrice: null, discount: null, img: "images/i16e.avif", onSale: false, condition: "new", memory: 128, ram: 6, battery: 4000, popularity: 80 },
    { id: 10, category: "smartphones", brand: "Samsung", name: "Galaxy S25 Ultra 512GB Titanium Gray", newPrice: 1249.99, oldPrice: 1399.99, discount: "-11%", img: "images/s25u.avif", onSale: true, condition: "new", memory: 512, ram: 12, battery: 5000, popularity: 98 },
    { id: 11, category: "smartphones", brand: "Samsung", name: "Galaxy Fold 7 Phantom Black", newPrice: 1799.99, oldPrice: null, discount: null, img: "images/fold7.avif", onSale: false, condition: "new", memory: 512, ram: 16, battery: 4600, popularity: 65 },
    { id: 12, category: "smartphones", brand: "Samsung", name: "Galaxy A56 5G 8/256GB Awesome Navy", newPrice: 449.99, oldPrice: 499.99, discount: "-10%", img: "images/a56.avif", onSale: true, condition: "new", memory: 256, ram: 8, battery: 5000, popularity: 88 },
    { id: 13, category: "smartphones", brand: "Samsung", name: "Galaxy S25 256GB Black", newPrice: 999.99, oldPrice: null, discount: null, img: "images/s25.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 4800, popularity: 92 },
    { id: 14, category: "smartphones", brand: "Samsung", name: "Galaxy S25+ 512GB Silver", newPrice: 1099.99, oldPrice: null, discount: null, img: "images/s25plus.avif", onSale: false, condition: "new", memory: 512, ram: 12, battery: 4900, popularity: 90 },
    { id: 15, category: "smartphones", brand: "Samsung", name: "Galaxy S24 Ultra 512GB Gray", newPrice: 999.99, oldPrice: 1199.99, discount: "-17%", img: "images/s24u.avif", onSale: true, condition: "new", memory: 512, ram: 12, battery: 5000, popularity: 96 },
    { id: 16, category: "smartphones", brand: "Samsung", name: "Galaxy Flip 7 256GB Purple", newPrice: 1049.99, oldPrice: null, discount: null, img: "images/flip7.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 3900, popularity: 84 },
    { id: 17, category: "smartphones", brand: "Samsung", name: "Galaxy A36 5G 8/128GB Black", newPrice: 329.99, oldPrice: null, discount: null, img: "images/a36.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 5000, popularity: 75 },
    { id: 20, category: "smartphones", brand: "Google", name: "Pixel 10 Pro XL 256GB Obsidian", newPrice: 1099.99, oldPrice: null, discount: null, img: "images/p10pxl.avif", onSale: false, condition: "new", memory: 256, ram: 16, battery: 5100, popularity: 75 },
    { id: 21, category: "smartphones", brand: "Google", name: "Pixel 9a 128GB Porcelain", newPrice: 499.99, oldPrice: 549.99, discount: "-9%", img: "images/p9a.avif", onSale: true, condition: "new", memory: 128, ram: 8, battery: 4700, popularity: 82 },
    { id: 22, category: "smartphones", brand: "Google", name: "Pixel 10 Pro 256GB Obsidian", newPrice: 999.99, oldPrice: null, discount: null, img: "images/p10p.avif", onSale: false, condition: "new", memory: 256, ram: 16, battery: 5000, popularity: 88 },
    { id: 23, category: "smartphones", brand: "Google", name: "Pixel 9 Pro XL 256GB Hazel", newPrice: 949.99, oldPrice: null, discount: null, img: "images/p9pxl.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 5050, popularity: 87 },
    { id: 30, category: "smartphones", brand: "Xiaomi", name: "Xiaomi 15 Ultra 16/512GB Ceramic Black", newPrice: 1150.00, oldPrice: 1250.00, discount: "-8%", img: "images/x15u.avif", onSale: true, condition: "new", memory: 512, ram: 16, battery: 5500, popularity: 91 },
    { id: 31, category: "smartphones", brand: "Redmi", name: "Redmi Note 14 Pro+ 12/256GB Green", newPrice: 399.99, oldPrice: 450.00, discount: "-11%", img: "images/rn14p.avif", onSale: true, condition: "new", memory: 256, ram: 12, battery: 6200, popularity: 94 },
    { id: 32, category: "smartphones", brand: "POCO", name: "POCO F8 Pro 12/512GB Yellow", newPrice: 599.99, oldPrice: null, discount: null, img: "images/f8p.avif", onSale: false, condition: "new", memory: 512, ram: 12, battery: 5000, popularity: 89 },
    { id: 33, category: "smartphones", brand: "Xiaomi", name: "Xiaomi 15 12/256GB Black", newPrice: 699.99, oldPrice: null, discount: null, img: "images/x15.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 5200, popularity: 89 },
    { id: 34, category: "smartphones", brand: "Xiaomi", name: "Xiaomi 15T Pro 12/512GB Blue", newPrice: 849.99, oldPrice: null, discount: null, img: "images/x15tp.avif", onSale: false, condition: "new", memory: 512, ram: 12, battery: 5300, popularity: 86 },
    { id: 35, category: "smartphones", brand: "Redmi", name: "Redmi Note 14 8/128GB Black", newPrice: 249.99, oldPrice: null, discount: null, img: "images/rn14.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 5000, popularity: 83 },
    { id: 36, category: "smartphones", brand: "POCO", name: "POCO X7 Pro 12/256GB Black", newPrice: 429.99, oldPrice: null, discount: null, img: "images/x7p.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 5100, popularity: 90 },
    { id: 40, category: "smartphones", brand: "Motorola", name: "MOTO Razr 60 Ultra Hot Pink", newPrice: 899.99, oldPrice: 999.99, discount: "-10%", img: "images/razr60.avif", onSale: true, condition: "new", memory: 512, ram: 12, battery: 4200, popularity: 78 },
    { id: 41, category: "smartphones", brand: "Nothing", name: "Nothing Phone (3) 12/256GB Black", newPrice: 699.99, oldPrice: null, discount: null, img: "images/nothing3.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 5000, popularity: 86 },
    { id: 42, category: "smartphones", brand: "OnePlus", name: "OnePlus 15 16/256GB Emerald", newPrice: 799.99, oldPrice: 849.99, discount: "-6%", img: "images/op15.avif", onSale: true, condition: "new", memory: 256, ram: 16, battery: 5400, popularity: 93 },
    { id: 43, category: "smartphones", brand: "Motorola", name: "MOTO Edge 60 Pro 12/256GB Gray", newPrice: 649.99, oldPrice: null, discount: null, img: "images/edge60p.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 4600, popularity: 82 },
    { id: 44, category: "smartphones", brand: "OnePlus", name: "OnePlus 15R 12/256GB Black", newPrice: 699.99, oldPrice: null, discount: null, img: "images/op15r.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 5200, popularity: 88 },
    { id: 45, category: "smartphones", brand: "Nothing", name: "Nothing Phone (3a) Pro 12/256GB White", newPrice: 599.99, oldPrice: null, discount: null, img: "images/nothing3ap.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 5000, popularity: 84 },

    // --- LAPTOPS
    { id: 100, category: "laptops", brand: "Apple", name: "MacBook Air 15\" M2 512GB Silver", newPrice: 1299.99, oldPrice: 1399.99, discount: "-7%", img: "images/macbook_air15.avif", onSale: true, condition: "new", memory: 512, ram: 16, battery: 18, popularity: 95 },
    { id: 101, category: "laptops", brand: "Apple", name: "MacBook Pro 16\" M3 1TB Space Gray", newPrice: 2399.99, oldPrice: null, discount: null, img: "images/macbook_pro16.avif", onSale: false, condition: "new", memory: 1024, ram: 32, battery: 21, popularity: 98 },
    { id: 110, category: "laptops", brand: "ASUS", name: "ASUS ROG Strix G16 16\" 1TB Black", newPrice: 1599.99, oldPrice: 1799.99, discount: "-11%", img: "images/asus_rog_g16.avif", onSale: true, condition: "new", memory: 1024, ram: 32, battery: 8, popularity: 90 },
    { id: 111, category: "laptops", brand: "ASUS", name: "ASUS Vivobook 14\" 512GB Blue", newPrice: 799.99, oldPrice: null, discount: null, img: "images/asus_vivobook14.avif", onSale: false, condition: "new", memory: 512, ram: 16, battery: 10, popularity: 85 },
    { id: 120, category: "laptops", brand: "Acer", name: "Acer Swift 3 14\" 512GB Silver", newPrice: 749.99, oldPrice: 899.99, discount: "-16%", img: "images/acer_swift3.avif", onSale: true, condition: "new", memory: 512, ram: 16, battery: 11, popularity: 82 },
    { id: 121, category: "laptops", brand: "Acer", name: "Acer Nitro 5 15\" 1TB Black", newPrice: 1149.99, oldPrice: null, discount: null, img: "images/acer_nitro5.avif", onSale: false, condition: "new", memory: 1024, ram: 16, battery: 9, popularity: 87 },
    { id: 130, category: "laptops", brand: "Lenovo", name: "Lenovo ThinkPad X1 Carbon 14\" 1TB Black", newPrice: 1899.99, oldPrice: 2099.99, discount: "-10%", img: "images/lenovo_x1carbon.avif", onSale: true, condition: "new", memory: 1024, ram: 32, battery: 15, popularity: 92 },
    { id: 131, category: "laptops", brand: "Lenovo", name: "Lenovo IdeaPad 5 15\" 512GB Grey", newPrice: 699.99, oldPrice: null, discount: null, img: "images/lenovo_ideapad5.avif", onSale: false, condition: "new", memory: 512, ram: 8, battery: 10, popularity: 78 },
    { id: 140, category: "laptops", brand: "HP", name: "HP Spectre x360 13\" 512GB Silver", newPrice: 1249.99, oldPrice: 1399.99, discount: "-10%", img: "images/hp_spectre_x360.avif", onSale: true, condition: "new", memory: 512, ram: 16, battery: 12, popularity: 89 },
    { id: 141, category: "laptops", brand: "HP", name: "HP Pavilion 15\" 256GB Black", newPrice: 649.99, oldPrice: null, discount: null, img: "images/hp_pavilion15.avif", onSale: false, condition: "new", memory: 256, ram: 8, battery: 9, popularity: 81 },
    { id: 150, category: "laptops", brand: "Dell", name: "Dell XPS 13 512GB Silver", newPrice: 1399.99, oldPrice: null, discount: null, img: "images/dell_xps13.avif", onSale: false, condition: "new", memory: 512, ram: 16, battery: 13, popularity: 88 },
    { id: 151, category: "laptops", brand: "Dell", name: "Dell G15 15\" 1TB Black", newPrice: 1199.99, oldPrice: 1299.99, discount: "-8%", img: "images/dell_g15.avif", onSale: true, condition: "new", memory: 1024, ram: 16, battery: 10, popularity: 86 }
];



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

let cart = JSON.parse(localStorage.getItem('userCart')) || [];

// 2. Глобальные функции (выносим через window, чтобы работали onclick в HTML)
window.removeFromCart = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveAndRenderCart();
};

window.addToCart = function(productId) {
    // products берется из внешнего массива, который у тебя уже есть
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.newPrice,
            img: product.img,
            quantity: 1
        });
    }
    saveAndRenderCart();
    showToast(`Added: ${product.name}`);
};

// 3. Сохранение и обновление интерфейса
function saveAndRenderCart() {
    localStorage.setItem('userCart', JSON.stringify(cart));
    updateCartCounter();
    renderCart();
}

function updateCartCounter() {
    const countSpan = document.querySelector('.cart-count');
    if (countSpan) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        countSpan.textContent = totalItems;
        countSpan.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function renderCart() {
    const cartBody = document.querySelector('.cart-body');
    const totalAmountElement = document.querySelector('.total-amount');
    
    if (!cartBody) return;
    
    cartBody.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartBody.innerHTML = '<div style="text-align:center; padding: 50px; color: #888;">Cart is empty</div>';
    } else {
        cart.forEach(item => {
            total += item.price * item.quantity;
            cartBody.innerHTML += `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <span class="cart-item-price">$${item.price.toFixed(2)} (x${item.quantity})</span>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            `;
        });
    }

    if (totalAmountElement) {
        totalAmountElement.textContent = `$${total.toFixed(2)}`;
    }
    
    updateCartCounter();
}

function showToast(text) {
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.textContent = text;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}