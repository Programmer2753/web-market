const products = [
    // === SMARTPHONES & PHONES ===
    // Apple
    { id: 1, category: "smartphones", brand: "Apple", name: "iPhone 17 Pro Max 256GB Black Titanium", newPrice: 1199.99, oldPrice: 1299.99, discount: "-8%", img: "images/i17pm_black.avif", onSale: true, condition: "new", memory: 256, ram: 12, battery: 4422, popularity: 100 },
    { id: 2, category: "smartphones", brand: "Apple", name: "iPhone 17 Pro Max 512GB Natural Titanium", newPrice: 1399.99, oldPrice: null, discount: null, img: "images/i17pm_nat.avif", onSale: false, condition: "new", memory: 512, ram: 12, battery: 4422, popularity: 98 },
    { id: 3, category: "smartphones", brand: "Apple", name: "iPhone 17 Pro 128GB Desert Titanium", newPrice: 1099.99, oldPrice: null, discount: null, img: "images/i17p_desert.avif", onSale: false, condition: "new", memory: 128, ram: 12, battery: 3582, popularity: 95 },
    { id: 4, category: "smartphones", brand: "Apple", name: "iPhone 17 128GB Ultramarine", newPrice: 899.99, oldPrice: null, discount: null, img: "images/i17_ultra.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 3274, popularity: 90 },
    { id: 5, category: "smartphones", brand: "Apple", name: "iPhone 17 256GB Pink", newPrice: 999.99, oldPrice: null, discount: null, img: "images/i17_pink.avif", onSale: false, condition: "new", memory: 256, ram: 8, battery: 3274, popularity: 88 },
    { id: 6, category: "smartphones", brand: "Apple", name: "iPhone Air 128GB Silver", newPrice: 999.99, oldPrice: null, discount: null, img: "images/iair_silver.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 3150, popularity: 92 },
    { id: 7, category: "smartphones", brand: "Apple", name: "iPhone 16 Pro Max 256GB Black Titanium", newPrice: 949.99, oldPrice: 1099.99, discount: "-14%", img: "images/i16pm.avif", onSale: true, condition: "new", memory: 256, ram: 8, battery: 4685, popularity: 85 },
    { id: 8, category: "smartphones", brand: "Apple", name: "iPhone 16 Pro 128GB White Titanium", newPrice: 849.99, oldPrice: null, discount: null, img: "images/i16p.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 3582, popularity: 82 },
    { id: 9, category: "smartphones", brand: "Apple", name: "iPhone 16 Plus 128GB Teal", newPrice: 749.99, oldPrice: null, discount: null, img: "images/i16plus.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 4674, popularity: 80 },
    { id: 10, category: "smartphones", brand: "Apple", name: "iPhone 16 128GB Pink", newPrice: 649.99, oldPrice: 799.99, discount: "-19%", img: "images/i16.avif", onSale: true, condition: "new", memory: 128, ram: 8, battery: 3561, popularity: 84 },
    { id: 11, category: "smartphones", brand: "Apple", name: "iPhone 16e 128GB White", newPrice: 599.99, oldPrice: null, discount: null, img: "images/i16e.avif", onSale: false, condition: "new", memory: 128, ram: 6, battery: 3000, popularity: 75 },
    { id: 12, category: "smartphones", brand: "Apple", name: "iPhone 15 Pro Max 256GB Blue Titanium", newPrice: 799.99, oldPrice: 999.00, discount: "-20%", img: "images/i15pm.avif", onSale: true, condition: "used", memory: 256, ram: 8, battery: 4441, popularity: 70 },
    { id: 13, category: "smartphones", brand: "Apple", name: "iPhone 15 Pro 128GB Black Titanium", newPrice: 699.99, oldPrice: 850.00, discount: "-18%", img: "images/i15p.avif", onSale: true, condition: "used", memory: 128, ram: 8, battery: 3274, popularity: 68 },
    { id: 14, category: "smartphones", brand: "Apple", name: "iPhone 15 128GB Blue", newPrice: 549.99, oldPrice: null, discount: null, img: "images/i15.avif", onSale: false, condition: "used", memory: 128, ram: 6, battery: 3349, popularity: 65 },

    // Samsung
    { id: 15, category: "smartphones", brand: "Samsung", name: "Galaxy S25 Ultra 512GB Titanium Silver", newPrice: 1299.99, oldPrice: 1399.99, discount: "-100$", img: "images/s25u_silver.avif", onSale: true, condition: "new", memory: 512, ram: 12, battery: 5000, popularity: 99 },
    { id: 16, category: "smartphones", brand: "Samsung", name: "Galaxy S25 Ultra 1TB Titanium Black", newPrice: 1549.99, oldPrice: null, discount: null, img: "images/s25u_black.avif", onSale: false, condition: "new", memory: 1024, ram: 16, battery: 5000, popularity: 97 },
    { id: 17, category: "smartphones", brand: "Samsung", name: "Galaxy S25 256GB Onyx Black", newPrice: 899.99, oldPrice: null, discount: null, img: "images/s25_black.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 4000, popularity: 91 },
    { id: 18, category: "smartphones", brand: "Samsung", name: "Galaxy S25 Edge 256GB Silver", newPrice: 949.99, oldPrice: null, discount: null, img: "images/s25e.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 4300, popularity: 86 },
    { id: 19, category: "smartphones", brand: "Samsung", name: "Galaxy S25+ 512GB Marble Gray", newPrice: 1049.99, oldPrice: null, discount: null, img: "images/s25p.avif", onSale: false, condition: "new", memory: 512, ram: 12, battery: 4900, popularity: 89 },
    { id: 20, category: "smartphones", brand: "Samsung", name: "Galaxy S25 FE 128GB Graphite", newPrice: 649.99, oldPrice: 749.99, discount: "-13%", img: "images/s25fe.avif", onSale: true, condition: "new", memory: 128, ram: 8, battery: 4500, popularity: 82 },
    { id: 21, category: "smartphones", brand: "Samsung", name: "Galaxy S24 Ultra 256GB Titanium Blue", newPrice: 999.99, oldPrice: 1199.99, discount: "-17%", img: "images/s24u.avif", onSale: true, condition: "new", memory: 256, ram: 12, battery: 5000, popularity: 88 },
    { id: 22, category: "smartphones", brand: "Samsung", name: "Galaxy S24 128GB Amber Yellow", newPrice: 649.99, oldPrice: null, discount: null, img: "images/s24.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 4000, popularity: 80 },
    { id: 23, category: "smartphones", brand: "Samsung", name: "Galaxy S24 FE 128GB Mint", newPrice: 499.99, oldPrice: null, discount: null, img: "images/s24fe.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 4700, popularity: 78 },
    { id: 24, category: "smartphones", brand: "Samsung", name: "Galaxy Fold 7 512GB Phantom Silver", newPrice: 1849.99, oldPrice: null, discount: null, img: "images/fold7.avif", onSale: false, condition: "new", memory: 512, ram: 16, battery: 4600, popularity: 85 },
    { id: 25, category: "smartphones", brand: "Samsung", name: "Galaxy Flip 7 256GB Lavender", newPrice: 999.99, oldPrice: null, discount: null, img: "images/flip7.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 4000, popularity: 84 },
    { id: 26, category: "smartphones", brand: "Samsung", name: "Galaxy A56 5G 256GB Awesome Navy", newPrice: 449.99, oldPrice: 499.99, discount: "-50$", img: "images/a56.avif", onSale: true, condition: "new", memory: 256, ram: 8, battery: 5000, popularity: 90 },
    { id: 27, category: "smartphones", brand: "Samsung", name: "Galaxy A36 5G 128GB Awesome Iceblue", newPrice: 329.99, oldPrice: null, discount: null, img: "images/a36.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 5000, popularity: 81 },

    // Google
    { id: 28, category: "smartphones", brand: "Google", name: "Pixel 10 Pro XL 256GB Obsidian", newPrice: 1099.99, oldPrice: null, discount: null, img: "images/p10pxl_obs.avif", onSale: false, condition: "new", memory: 256, ram: 16, battery: 5100, popularity: 95 },
    { id: 29, category: "smartphones", brand: "Google", name: "Pixel 10 Pro 256GB Porcelain", newPrice: 999.99, oldPrice: null, discount: null, img: "images/p10p_porc.avif", onSale: false, condition: "new", memory: 256, ram: 16, battery: 5000, popularity: 92 },
    { id: 30, category: "smartphones", brand: "Google", name: "Pixel 10 128GB Rose", newPrice: 799.99, oldPrice: null, discount: null, img: "images/p10_rose.avif", onSale: false, condition: "new", memory: 128, ram: 12, battery: 4700, popularity: 88 },
    { id: 31, category: "smartphones", brand: "Google", name: "Pixel 10a 128GB Aloe", newPrice: 499.99, oldPrice: null, discount: null, img: "images/p10a.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 4600, popularity: 86 },
    { id: 32, category: "smartphones", brand: "Google", name: "Pixel 10 Pro Fold 512GB Obsidian", newPrice: 1799.99, oldPrice: null, discount: null, img: "images/p10fold.avif", onSale: false, condition: "new", memory: 512, ram: 16, battery: 4900, popularity: 83 },
    { id: 33, category: "smartphones", brand: "Google", name: "Pixel 9 Pro XL 256GB Hazel", newPrice: 899.99, oldPrice: 1049.99, discount: "-150$", img: "images/p9pxl.avif", onSale: true, condition: "new", memory: 256, ram: 12, battery: 5060, popularity: 82 },
    { id: 34, category: "smartphones", brand: "Google", name: "Pixel 9 Pro 128GB Obsidian", newPrice: 799.99, oldPrice: null, discount: null, img: "images/p9p.avif", onSale: false, condition: "new", memory: 128, ram: 12, battery: 4700, popularity: 80 },
    { id: 35, category: "smartphones", brand: "Google", name: "Pixel 9 128GB Peony", newPrice: 599.99, oldPrice: 749.99, discount: "-20%", img: "images/p9.avif", onSale: true, condition: "new", memory: 128, ram: 12, battery: 4700, popularity: 77 },
    { id: 36, category: "smartphones", brand: "Google", name: "Pixel 9a 128GB Porcelain", newPrice: 449.99, oldPrice: null, discount: null, img: "images/p9a.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 4700, popularity: 75 },

    // Xiaomi & Redmi
    { id: 37, category: "smartphones", brand: "Xiaomi", name: "Xiaomi 15 Ultra 512GB Black", newPrice: 1149.99, oldPrice: 1249.99, discount: "-100$", img: "images/x15u.avif", onSale: true, condition: "new", memory: 512, ram: 16, battery: 5500, popularity: 94 },
    { id: 38, category: "smartphones", brand: "Xiaomi", name: "Xiaomi 15T Pro 512GB Titan Gray", newPrice: 849.99, oldPrice: null, discount: null, img: "images/x15tp.avif", onSale: false, condition: "new", memory: 512, ram: 12, battery: 5300, popularity: 88 },
    { id: 39, category: "smartphones", brand: "Xiaomi", name: "Xiaomi 15T 256GB Black", newPrice: 649.99, oldPrice: null, discount: null, img: "images/x15t.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 5000, popularity: 85 },
    { id: 40, category: "smartphones", brand: "Xiaomi", name: "Xiaomi 15 256GB White", newPrice: 699.99, oldPrice: null, discount: null, img: "images/x15.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 5200, popularity: 87 },
    { id: 41, category: "smartphones", brand: "Redmi", name: "Redmi Note 14 Pro+ 256GB Green", newPrice: 389.99, oldPrice: 449.99, discount: "-60$", img: "images/rn14pp.avif", onSale: true, condition: "new", memory: 256, ram: 12, battery: 6200, popularity: 92 },
    { id: 42, category: "smartphones", brand: "Redmi", name: "Redmi Note 14 Pro 256GB Black", newPrice: 319.99, oldPrice: null, discount: null, img: "images/rn14p.avif", onSale: false, condition: "new", memory: 256, ram: 8, battery: 5500, popularity: 89 },
    { id: 43, category: "smartphones", brand: "Redmi", name: "Redmi Note 14 128GB Blue", newPrice: 239.99, oldPrice: null, discount: null, img: "images/rn14.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 5000, popularity: 84 },
    { id: 44, category: "smartphones", brand: "Redmi", name: "Redmi Note 14s 256GB Purple", newPrice: 279.99, oldPrice: null, discount: null, img: "images/rn14s.avif", onSale: false, condition: "new", memory: 256, ram: 8, battery: 5000, popularity: 80 },
    { id: 45, category: "smartphones", brand: "Redmi", name: "Redmi 15 128GB Gold", newPrice: 199.99, oldPrice: null, discount: null, img: "images/r15.avif", onSale: false, condition: "new", memory: 128, ram: 6, battery: 5000, popularity: 78 },

    // POCO & Others
    { id: 46, category: "smartphones", brand: "POCO", name: "POCO F8 Pro 512GB Yellow", newPrice: 599.99, oldPrice: null, discount: null, img: "images/f8p.avif", onSale: false, condition: "new", memory: 512, ram: 12, battery: 5000, popularity: 91 },
    { id: 47, category: "smartphones", brand: "POCO", name: "POCO F7 256GB Blue", newPrice: 429.99, oldPrice: 499.99, discount: "-70$", img: "images/f7.avif", onSale: true, condition: "new", memory: 256, ram: 8, battery: 5000, popularity: 86 },
    { id: 48, category: "smartphones", brand: "POCO", name: "POCO X7 Pro 256GB Grey", newPrice: 399.99, oldPrice: null, discount: null, img: "images/x7p.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 5100, popularity: 88 },
    { id: 49, category: "smartphones", brand: "POCO", name: "POCO X7 128GB Black", newPrice: 329.99, oldPrice: null, discount: null, img: "images/x7.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 5000, popularity: 83 },
    { id: 50, category: "smartphones", brand: "POCO", name: "POCO C85 128GB Green", newPrice: 139.99, oldPrice: null, discount: null, img: "images/c85.avif", onSale: false, condition: "new", memory: 128, ram: 6, battery: 5000, popularity: 75 },
    { id: 51, category: "smartphones", brand: "Motorola", name: "MOTO Razr 60 Ultra Hot Pink", newPrice: 899.99, oldPrice: 999.99, discount: "-100$", img: "images/razr60.avif", onSale: true, condition: "new", memory: 512, ram: 12, battery: 4200, popularity: 82 },
    { id: 52, category: "smartphones", brand: "Motorola", name: "MOTO Edge 70 512GB Black", newPrice: 749.99, oldPrice: null, discount: null, img: "images/edge70.avif", onSale: false, condition: "new", memory: 512, ram: 12, battery: 5000, popularity: 80 },
    { id: 53, category: "smartphones", brand: "Motorola", name: "MOTO Edge 60 Pro 256GB Silver", newPrice: 629.99, oldPrice: null, discount: null, img: "images/edge60p.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 4600, popularity: 79 },
    { id: 54, category: "smartphones", brand: "Motorola", name: "MOTO Edge 60 Fusion 256GB Blue", newPrice: 529.99, oldPrice: null, discount: null, img: "images/edge60f.avif", onSale: false, condition: "new", memory: 256, ram: 8, battery: 5000, popularity: 76 },
    { id: 55, category: "smartphones", brand: "OnePlus", name: "OnePlus 15 256GB Emerald Green", newPrice: 799.99, oldPrice: null, discount: null, img: "images/op15.avif", onSale: false, condition: "new", memory: 256, ram: 16, battery: 5400, popularity: 93 },
    { id: 56, category: "smartphones", brand: "OnePlus", name: "OnePlus 15R 256GB Iron Black", newPrice: 669.99, oldPrice: null, discount: null, img: "images/op15r.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 5200, popularity: 87 },
    { id: 57, category: "smartphones", brand: "OPPO", name: "OPPO Reno 14 256GB Nebula Silver", newPrice: 589.99, oldPrice: null, discount: null, img: "images/reno14.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 5000, popularity: 81 },
    { id: 58, category: "smartphones", brand: "OPPO", name: "OPPO A5 Pro 128GB Black", newPrice: 329.99, oldPrice: null, discount: null, img: "images/oppoa5.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 5000, popularity: 75 },
    { id: 59, category: "smartphones", brand: "Nothing", name: "Nothing Phone (3) 256GB Dark Grey", newPrice: 699.99, oldPrice: null, discount: null, img: "images/n3.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 5000, popularity: 89 },
    { id: 60, category: "smartphones", brand: "Nothing", name: "Nothing Phone (3a) Pro 256GB White", newPrice: 549.99, oldPrice: null, discount: null, img: "images/n3ap.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 5000, popularity: 85 },
    { id: 61, category: "smartphones", brand: "Nothing", name: "Nothing Phone (3a) 128GB Black", newPrice: 429.99, oldPrice: null, discount: null, img: "images/n3a.avif", onSale: false, condition: "new", memory: 128, ram: 8, battery: 5000, popularity: 84 },

    // === LAPTOPS & COMPUTER EQUIPMENT ===
    // Apple
    { id: 100, category: "laptops", brand: "Apple", name: "MacBook Air 13\" M3 16/256GB Starlight", newPrice: 1099.99, oldPrice: 1199.99, discount: "-100$", img: "images/mba13.avif", onSale: true, condition: "new", memory: 256, ram: 16, battery: 15, popularity: 95 },
    { id: 101, category: "laptops", brand: "Apple", name: "MacBook Air 15\" M3 16/512GB Space Grey", newPrice: 1399.99, oldPrice: null, discount: null, img: "images/mba15.avif", onSale: false, condition: "new", memory: 512, ram: 16, battery: 18, popularity: 93 },
    { id: 102, category: "laptops", brand: "Apple", name: "MacBook Pro 14\" M4 Pro 24/512GB Black", newPrice: 1999.99, oldPrice: null, discount: null, img: "images/mbp14.avif", onSale: false, condition: "new", memory: 512, ram: 24, battery: 18, popularity: 98 },
    { id: 103, category: "laptops", brand: "Apple", name: "MacBook Pro 16\" M4 Max 36/1TB Black", newPrice: 3499.99, oldPrice: null, discount: null, img: "images/mbp16.avif", onSale: false, condition: "new", memory: 1024, ram: 36, battery: 22, popularity: 96 },

    // Windows Laptops
    { id: 104, category: "laptops", brand: "ASUS", name: "ASUS ROG Zephyrus G16 OLED White (RTX 5070)", newPrice: 2499.99, oldPrice: 2699.99, discount: "-200$", img: "images/asus_rog.avif", onSale: true, condition: "new", memory: 1024, ram: 32, battery: 10, popularity: 92 },
    { id: 105, category: "laptops", brand: "Acer", name: "Acer Predator Helios Neo 16 i9-16900HX", newPrice: 1699.99, oldPrice: null, discount: null, img: "images/acer_pred.avif", onSale: false, condition: "new", memory: 1024, ram: 16, battery: 7, popularity: 88 },
    { id: 106, category: "laptops", brand: "Lenovo", name: "Lenovo Legion Pro 7i Gen 9 Black", newPrice: 2199.99, oldPrice: null, discount: null, img: "images/len_leg.avif", onSale: false, condition: "new", memory: 1024, ram: 32, battery: 8, popularity: 90 },
    { id: 107, category: "laptops", brand: "HP", name: "HP Omen 17 2026 Edition i7-RTX 5060", newPrice: 1549.99, oldPrice: 1749.99, discount: "-200$", img: "images/hp_omen.avif", onSale: true, condition: "new", memory: 1024, ram: 16, battery: 6, popularity: 85 },
    { id: 108, category: "laptops", brand: "Dell", name: "Dell XPS 14 2026 OLED Silver", newPrice: 1899.99, oldPrice: null, discount: null, img: "images/dell_xps.avif", onSale: false, condition: "new", memory: 512, ram: 16, battery: 12, popularity: 87 },
    { id: 109, category: "laptops", brand: "MSI", name: "MSI Stealth 16 AI Studio Black", newPrice: 2399.99, oldPrice: null, discount: null, img: "images/msi_st.avif", onSale: false, condition: "new", memory: 1024, ram: 32, battery: 9, popularity: 84 },
    { id: 110, category: "laptops", brand: "Gigabyte", name: "Gigabyte AORUS 16X (2026) RTX 5070", newPrice: 1999.99, oldPrice: null, discount: null, img: "images/gig_ao.avif", onSale: false, condition: "new", memory: 1024, ram: 32, battery: 7, popularity: 82 },

    // Tablets
    { id: 200, category: "tablets", brand: "Apple", name: "iPad Pro 13\" M4 OLED 256GB Wi-Fi Black", newPrice: 1299.99, oldPrice: null, discount: null, img: "images/ipad_pro.avif", onSale: false, condition: "new", memory: 256, ram: 8, battery: 10, popularity: 97 },
    { id: 201, category: "tablets", brand: "Samsung", name: "Galaxy Tab S10 Ultra 5G Grey", newPrice: 1149.99, oldPrice: 1249.99, discount: "-100$", img: "images/tab_s10.avif", onSale: true, condition: "new", memory: 512, ram: 12, battery: 14, popularity: 91 },
    { id: 202, category: "tablets", brand: "Xiaomi", name: "Xiaomi Pad 7 Pro 12/256GB Blue", newPrice: 489.99, oldPrice: null, discount: null, img: "images/x_pad7.avif", onSale: false, condition: "new", memory: 256, ram: 12, battery: 12, popularity: 88 },
    { id: 203, category: "tablets", brand: "Lenovo", name: "Lenovo Tab P12 with Pen Grey", newPrice: 349.99, oldPrice: 399.99, discount: "-50$", img: "images/len_tab.avif", onSale: true, condition: "new", memory: 128, ram: 8, battery: 11, popularity: 82 },

    // === TVs & MULTIMEDIA ===
    { id: 300, category: "tvs", brand: "Samsung", name: "Samsung Neo QLED 65\" 8K QN900D", newPrice: 3299.99, oldPrice: 3599.99, discount: "-300$", img: "images/tv_sams.avif", onSale: true, condition: "new", popularity: 92 },
    { id: 301, category: "tvs", brand: "LG", name: "LG OLED EVO C5 55\" 4K 144Hz", newPrice: 1749.99, oldPrice: null, discount: null, img: "images/tv_lg.avif", onSale: false, condition: "new", popularity: 97 },
    { id: 302, category: "tvs", brand: "Xiaomi", name: "Xiaomi TV Max 86\" Ultra HD", newPrice: 1099.99, oldPrice: 1299.99, discount: "-200$", img: "images/tv_xia.avif", onSale: true, condition: "new", popularity: 89 },
    { id: 303, category: "tvs", brand: "Philips", name: "Philips Ambilight TV 65\" OLED 4K", newPrice: 1999.99, oldPrice: null, discount: null, img: "images/tv_phi.avif", onSale: false, condition: "new", popularity: 88 },

    // === WATCHES & GADGETS ===
    { id: 400, category: "watches", brand: "Apple", name: "Apple Watch Ultra 3 Titanium/Orange Loop", newPrice: 799.99, oldPrice: null, discount: null, img: "images/awu3.avif", onSale: false, condition: "new", battery: 72, popularity: 99 },
    { id: 401, category: "watches", brand: "Apple", name: "Apple Watch Series 11 45mm Midnight", newPrice: 429.99, oldPrice: null, discount: null, img: "images/aws11.avif", onSale: false, condition: "new", battery: 36, popularity: 95 },
    { id: 402, category: "watches", brand: "Apple", name: "Apple Watch SE 3 40mm Starlight", newPrice: 249.99, oldPrice: null, discount: null, img: "images/awse3.avif", onSale: false, condition: "new", battery: 24, popularity: 90 },
    { id: 403, category: "watches", brand: "Samsung", name: "Galaxy Watch Ultra Black Space", newPrice: 649.99, oldPrice: null, discount: null, img: "images/gwu.avif", onSale: false, condition: "new", battery: 100, popularity: 93 },
    { id: 404, category: "watches", brand: "Samsung", name: "Galaxy Watch 8 Classic LTE 47mm", newPrice: 449.99, oldPrice: null, discount: null, img: "images/gw8c.avif", onSale: false, condition: "new", battery: 60, popularity: 89 },
    { id: 405, category: "watches", brand: "Samsung", name: "Galaxy Watch 8 44mm Silver", newPrice: 329.99, oldPrice: null, discount: null, img: "images/gw8.avif", onSale: false, condition: "new", battery: 60, popularity: 87 },
    { id: 406, category: "watches", brand: "Samsung", name: "Galaxy Watch 7 40mm Green", newPrice: 219.99, oldPrice: 299.99, discount: "-80$", img: "images/gw7.avif", onSale: true, condition: "new", battery: 40, popularity: 84 },
    { id: 407, category: "watches", brand: "Xiaomi", name: "Redmi Watch 5 Black", newPrice: 79.99, oldPrice: null, discount: null, img: "images/rw5.avif", onSale: false, condition: "new", battery: 400, popularity: 85 },
    { id: 408, category: "watches", brand: "Xiaomi", name: "Redmi Watch 5 Lite White", newPrice: 59.99, oldPrice: null, discount: null, img: "images/rw5l.avif", onSale: false, condition: "new", battery: 350, popularity: 82 },
    { id: 409, category: "watches", brand: "Xiaomi", name: "Redmi Watch 5 Active Blue", newPrice: 44.99, oldPrice: 59.99, discount: "-25%", img: "images/rw5a.avif", onSale: true, condition: "new", battery: 300, popularity: 80 },

    // === AUDIO, PHOTO & VIDEO ===
    // Earphones
    { id: 500, category: "apv", brand: "Apple", name: "AirPods Pro 3 (2026) with USB-C", newPrice: 249.99, oldPrice: null, discount: null, img: "images/airp3.avif", onSale: false, condition: "new", battery: 6, popularity: 100 },
    { id: 501, category: "apv", brand: "JBL", name: "JBL Tour Pro 3 Noise Cancelling Black", newPrice: 199.99, oldPrice: 249.99, discount: "-50$", img: "images/jbl_t3.avif", onSale: true, condition: "new", battery: 10, popularity: 91 },
    { id: 502, category: "apv", brand: "Samsung", name: "Galaxy Buds 4 Pro Silver", newPrice: 179.99, oldPrice: null, discount: null, img: "images/buds4p.avif", onSale: false, condition: "new", battery: 7, popularity: 89 },
    { id: 503, category: "apv", brand: "Xiaomi", name: "Xiaomi Buds 6 Pro Black", newPrice: 99.99, oldPrice: null, discount: null, img: "images/xbuds6.avif", onSale: false, condition: "new", battery: 8, popularity: 85 },
    { id: 504, category: "apv", brand: "Huawei", name: "Huawei FreeBuds Pro 4 Grey", newPrice: 159.99, oldPrice: 189.99, discount: "-30$", img: "images/fb4.avif", onSale: true, condition: "new", battery: 7, popularity: 83 },

    // Photo & Video
    { id: 505, category: "apv", brand: "DSLR", name: "Canon EOS 90D Body Black", newPrice: 1199.99, oldPrice: null, discount: null, img: "images/canon90.avif", onSale: false, condition: "new", popularity: 82 },
    { id: 506, category: "apv", brand: "Mirrorless", name: "Sony A7R VI Mirrorless Camera Body", newPrice: 3899.99, oldPrice: null, discount: null, img: "images/sony7r6.avif", onSale: false, condition: "new", popularity: 95 },
    { id: 507, category: "apv", brand: "Lenses", name: "Sony FE 24-70mm f/2.8 GM II Lens", newPrice: 2299.99, oldPrice: null, discount: null, img: "images/lens_sony.avif", onSale: false, condition: "new", popularity: 90 },
    { id: 508, category: "apv", brand: "Cameras", name: "Sony FX3 Cinema Line Camera", newPrice: 3499.99, oldPrice: null, discount: null, img: "images/sony_fx3.avif", onSale: false, condition: "new", popularity: 88 },
    { id: 509, category: "apv", brand: "Action cameras", name: "GoPro Hero 14 Black", newPrice: 449.99, oldPrice: 499.99, discount: "-50$", img: "images/gopro14.avif", onSale: true, condition: "new", popularity: 94 },
    { id: 510, category: "apv", brand: "Drones", name: "DJI Mavic 4 Pro Drone (2026)", newPrice: 1299.00, oldPrice: null, discount: null, img: "images/dji_m4.avif", onSale: false, condition: "new", battery: 45, popularity: 96 },

    // === GAMING ===
    { id: 600, category: "gaming", brand: "PlayStation", name: "PlayStation 5 Pro 2TB Edition", newPrice: 699.99, oldPrice: null, discount: null, img: "images/ps5pro.avif", onSale: false, condition: "new", memory: 2048, popularity: 100 },
    { id: 601, category: "gaming", brand: "Xbox", name: "Xbox Series X 2 - 2026 Refresh", newPrice: 599.99, oldPrice: null, discount: null, img: "images/xboxx2.avif", onSale: false, condition: "new", memory: 1024, popularity: 88 },
    { id: 602, category: "gaming", brand: "Gamepads", name: "DualSense Edge Wireless White", newPrice: 199.99, oldPrice: 219.99, discount: "-20$", img: "images/ds_edge.avif", onSale: true, condition: "new", popularity: 93 },
    { id: 603, category: "gaming", brand: "GamingHeadsets", name: "SteelSeries Arctis Nova Pro Wireless", newPrice: 349.99, oldPrice: null, discount: null, img: "images/steel.avif", onSale: false, condition: "new", popularity: 90 },
    { id: 604, category: "gaming", brand: "RacingWheels", name: "Logitech G923 Racing Wheel & Pedals", newPrice: 399.99, oldPrice: 449.99, discount: "-50$", img: "images/logi_wheel.avif", onSale: true, condition: "new", popularity: 85 },

    // === ACCESSORIES ===
    // For Smartphones
    { id: 700, category: "accesories", brand: "cases", name: "iPhone 17 Silicone Case with MagSafe", newPrice: 49.99, oldPrice: null, discount: null, img: "images/case_apple.avif", onSale: false, condition: "new", popularity: 92 },
    { id: 701, category: "accesories", brand: "chargers", name: "Anker 737 GaNPrime 120W Charger", newPrice: 89.99, oldPrice: 109.99, discount: "-20$", img: "images/anker120.avif", onSale: true, condition: "new", popularity: 94 },
    { id: 702, category: "accesories", brand: "cables", name: "Belkin USB-C to USB-C 240W 2m", newPrice: 24.99, oldPrice: null, discount: null, img: "images/bel_cable.avif", onSale: false, condition: "new", popularity: 88 },
    { id: 703, category: "accesories", brand: "powerBanks", name: "Samsung 25W Power Bank 20000mAh", newPrice: 59.99, oldPrice: 69.99, discount: "-10$", img: "images/sams_pb.avif", onSale: true, condition: "new", battery: 20000, popularity: 91 },

    // For Computers
    { id: 704, category: "accesories", brand: "externaldrives", name: "Samsung T9 Portable SSD 2TB", newPrice: 199.99, oldPrice: null, discount: null, img: "images/sams_t9.avif", onSale: false, condition: "new", memory: 2048, popularity: 96 },
    { id: 705, category: "accesories", brand: "usbhubs", name: "Satechi USB-C Multi-Port Adapter 8K", newPrice: 99.99, oldPrice: null, discount: null, img: "images/sat_hub.avif", onSale: false, condition: "new", popularity: 89 },
    { id: 706, category: "accesories", brand: "webcams", name: "Logitech MX Brio 4K Webcam", newPrice: 199.99, oldPrice: null, discount: null, img: "images/logi_web.avif", onSale: false, condition: "new", popularity: 85 },
    { id: 707, category: "accesories", brand: "keyboards", name: "Logitech G915 TKL Wireless Mechanical", newPrice: 199.99, oldPrice: null, discount: null, img: "images/logi_key.avif", onSale: false, condition: "new", popularity: 95 },
    { id: 708, category: "accesories", brand: "mice", name: "Razer DeathAdder V3 Pro White", newPrice: 149.99, oldPrice: null, discount: null, img: "images/razer_mouse.avif", onSale: false, condition: "new", popularity: 94 },
    { id: 709, category: "accesories", brand: "monitors", name: "Samsung Odyssey OLED G8 34\" 240Hz", newPrice: 1199.99, oldPrice: 1399.99, discount: "-200$", img: "images/sams_mon.avif", onSale: true, condition: "new", popularity: 96 }
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

document.addEventListener('DOMContentLoaded', () => {
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

        // --- 1. ЕСЛИ ТОВАРОВ НЕТ ---
        if (productsToRender.length === 0) {
            grid.innerHTML = `
                <div class="no-results">
                    <img src="images/search_icon.png" alt="Ничего не найдено" class="no-results-image">
                    <h3>Oops, nothing found</h3>
                    <p>There are no products matching your search criteria. Try changing your filters.</p>
                    <button class="reset-filters-btn">Clear filters</button>
                </div>
            `;

            // Оживляем кнопку сброса
            const resetBtn = grid.querySelector('.reset-filters-btn');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    // Снимаем все галочки
                    document.querySelectorAll('.brand-checkbox, .memory-checkbox, .ram-checkbox, .battery-checkbox, .sale-checkbox')
                        .forEach(cb => cb.checked = false);
                    
                    // Очищаем поля цен (если они есть)
                    const minP = document.querySelector('.min-price');
                    const maxP = document.querySelector('.max-price');
                    if (minP) minP.value = '';
                    if (maxP) maxP.value = '';

                    // Обновляем витрину и пересчитываем счетчики
                    updateGallery();
                    updateCounts();
                });
            }
            return; // Важно! Выходим из функции, чтобы код ниже не выполнялся
        }

        // --- 2. ЕСЛИ ТОВАРЫ ЕСТЬ (Твой оригинальный код) ---
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
                    <button class="buy-btn" data-id="${product.id}">
                        <span>Buy</span>
                        <span class="icon">🛒</span>
                    </button>
                </div>
            `;
        });
    }

    const cartBtn = document.querySelector('.cart-open-btn');
    const closeBtn = document.querySelector('.close-cart');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');

    function toggleCart() {
        cartSidebar?.classList.toggle('open');
        cartOverlay?.classList.toggle('open');
    }

    if (cartBtn) cartBtn.addEventListener('click', toggleCart);
    if (closeBtn) closeBtn.addEventListener('click', toggleCart);
    if (cartOverlay) cartOverlay.addEventListener('click', toggleCart);

    // Слушатель для кнопок "Buy" в сетке товаров
    const grid = document.getElementById('products-grid');
    if (grid) {
        grid.addEventListener('click', (e) => {
            const btn = e.target.closest('.buy-btn');
            if (btn) {
                const productId = parseInt(btn.dataset.id);
                window.addToCart(productId);
            }
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

    

    updateCartCounter();
    renderCart();
    
    handleUrlParams();
    updateCounts();
    loadFilters();
    lang_menu();
});
