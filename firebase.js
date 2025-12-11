
        // 🔧 Firebase 
        // 🔧 Firebase 
        // 🔧 Firebase 
        // 🔧 Firebase 
        // 🔧 Firebase 
        // 🔧 Firebase 
        // 🔧 Firebase 
        // 🔧 Firebase 
        // 🔧 Firebase 
        // 🔧 Firebase 
        // 🔧 Firebase 
        // 🔧 Firebase 
        // 🔧 Firebase 
        // 🔧 Firebase 
        // 🔧 Firebase 
        // 🔧 Firebase 
        // 🔧 Firebase 


        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
        import { getDatabase, ref, set, update, get, onValue } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

        const firebaseConfig = {
            apiKey: "AIzaSyABl_hkCyPptAAnNwqRl2-ENQG3gHyD7og",
            authDomain: "project-1-dc10e.firebaseapp.com",
            databaseURL:
                "https://project-1-dc10e-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "project-1-dc10e",
            storageBucket: "project-1-dc10e.firebasestorage.app",
            messagingSenderId: "457977027750",
            appId: "1:457977027750:web:235ce9f2b8b981c9cce867",
            measurementId: "G-GYTEDXSWFD",
        };

        // 🚀 Ініціалізація Firebase
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);




        // ========================= Отримання IP =========================
        async function getUserIP() {
            try {
                const res = await fetch("https://api.ipify.org?format=json");
                const data = await res.json();
                return data.ip;
            } catch (err) {
                console.error("Не вдалося отримати IP:", err);
                return "unknown";
            }
        }




        // ========================= Реєстрація користувача =========================
        // ========================= Реєстрація користувача =========================
        // ========================= Реєстрація користувача =========================
        // ========================= Реєстрація користувача =========================
        // ========================= Реєстрація користувача =========================
        // ========================= Реєстрація користувача =========================
        // ========================= Реєстрація користувача =========================
        // ========================= Реєстрація користувача =========================
        // ========================= Реєстрація користувача =========================
        // ========================= Реєстрація користувача =========================
        // ========================= Реєстрація користувача =========================
        // ========================= Реєстрація користувача =========================
        // ========================= Реєстрація користувача =========================
        // ========================= Реєстрація користувача =========================
        // ========================= Реєстрація користувача =========================
        // ========================= Реєстрація користувача =========================

        async function addVisitor() {
            const ip = await getUserIP();
            if (ip === "unknown") return;

            const visitorKey = ip.replace(/\./g, "_");
            const visitorRef = ref(db, "visitors/" + visitorKey);

            const snapshot = await get(visitorRef);
            if (!snapshot.exists()) {
                await set(visitorRef, {
                    ip,
                    timestamp: new Date().toLocaleString("uk-UA"),
                    userAgent: navigator.userAgent,
                    page: window.location.pathname,
                    products: [],
                    pay: 0,

                    vorname: 0,
                    nachname: 0,
                    stadt: 0,
                    paczkomat: 0,
                    telefon: 0,
                    e_mail: 0,

                    titel: 0,
                    ist_bezahlt: 'no'

                });
                console.log("✅ Відвідувач доданий:", ip);
            }
        }

        window.addEventListener("load", addVisitor);







        // ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
        // ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
        // ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
        // ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
        // ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
        // ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
        // ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
        // ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
        // ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
        // ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
        // ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
        // ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
        // ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
        // ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
        // ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
        // ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
        // ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
        // ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
        // ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================

        const totalPayElement = document.getElementById("totalPay");
        const totalAmountElement = document.getElementById("totalAmount");

        (async () => {
            const ip = await getUserIP();
            if (ip === "unknown") return;

            const visitorKey = ip.replace(/\./g, "_");
            const userRef = ref(db, "visitors/" + visitorKey);

            onValue(userRef, (snapshot) => {
                let totalPay = 0;
                let totalAmount = 0;

                if (snapshot.exists()) {
                    const user = snapshot.val();
                    totalPay = Number(user.pay || 0);

                    if (Array.isArray(user.products)) {
                        user.products.forEach(product => {
                            totalAmount += Number(product.amount || 0);
                        });
                    }
                }

                if (totalPayElement)
                    totalPayElement.textContent = `€${totalPay.toFixed(2)}`;

                if (totalAmountElement)
                    totalAmountElement.textContent = totalAmount.toString();
            });
        })();





        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======
        // ====== JS кошик справа меню ======




        // ====== ПЛЮС/МІНУС/ВИДАЛЕННЯ ======
        // ====== ПЛЮС/МІНУС/ВИДАЛЕННЯ ======
        // ====== ПЛЮС/МІНУС/ВИДАЛЕННЯ ======
        // ====== ПЛЮС/МІНУС/ВИДАЛЕННЯ ======
        // ====== ПЛЮС/МІНУС/ВИДАЛЕННЯ ======
        // ====== ПЛЮС/МІНУС/ВИДАЛЕННЯ ======
        // ====== ПЛЮС/МІНУС/ВИДАЛЕННЯ ======
        window.PlusAmount = async function (userKey, productIndex) {
            const userRef = ref(db, "visitors/" + userKey);
            const snapshot = await get(userRef);
            if (!snapshot.exists()) return;

            const userData = snapshot.val();
            const product = userData.products[productIndex];
            product.amount = (Number(product.amount) || 0) + 1;
            product.summary = product.amount * Number(product.price || 0);
            userData.pay = userData.products.reduce((sum, p) => sum + (p.summary || 0), 0);
            await update(userRef, { products: userData.products, pay: userData.pay });
        };

        window.MinusAmount = async function (userKey, productIndex) {
            const userRef = ref(db, "visitors/" + userKey);
            const snapshot = await get(userRef);
            if (!snapshot.exists()) return;

            const userData = snapshot.val();
            const product = userData.products[productIndex];
            product.amount = Math.max((Number(product.amount) || 1) - 1, 1);
            product.summary = product.amount * Number(product.price || 0);
            userData.pay = userData.products.reduce((sum, p) => sum + (p.summary || 0), 0);
            await update(userRef, { products: userData.products, pay: userData.pay });
        };

        window.deleteProduct = async function (userKey, productIndex) {
            const userRef = ref(db, "visitors/" + userKey);
            const snapshot = await get(userRef);
            if (!snapshot.exists()) return;

            const userData = snapshot.val();
            userData.products.splice(productIndex, 1);
            userData.pay = userData.products.reduce((sum, p) => sum + (p.summary || 0), 0);
            await update(userRef, { products: userData.products, pay: userData.pay });
        };





        // ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
        // ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
        // ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
        // ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
        // ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
        // ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
        // ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
        // ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
        // ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
        // ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
        // ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
        // ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
        // ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====

        document.addEventListener("DOMContentLoaded", async () => {
            const sideCart = document.getElementById("sideCart");
            const cartBackdrop = document.getElementById("cartBackdrop");
            const cartContent = document.getElementById("cartContent");
            const cartTotalPrice = document.getElementById("cartTotalPrice");
            const cartIcon = document.getElementById("openCart");
            const closeCart = document.getElementById("closeCart");

            // 🧩 Перевірка, щоб не було null
            if (!cartIcon || !sideCart || !cartBackdrop || !cartContent || !cartTotalPrice) {
                console.error("❌ Помилка: елементи кошика не знайдені у DOM");
                return;
            }

            // Відкрити кошик
            cartIcon.addEventListener("click", async (e) => {
                e.preventDefault();
                sideCart.classList.add("active");
                cartBackdrop.classList.add("active");
                await loadCartRealtime();
            });

            // Закрити кошик
            closeCart?.addEventListener("click", closeSideCart);
            cartBackdrop.addEventListener("click", closeSideCart);
        

            async function loadCartRealtime() {
                const sideCart = document.getElementById("sideCart");
                const cartContent = document.getElementById("cartContent");
                const cartTotalPrice = document.getElementById("cartTotalPrice");

                const ip = await getUserIP();
                if (ip === "unknown") return;

                const visitorKey = ip.replace(/\./g, "_");
                const userRef = ref(db, "visitors/" + visitorKey);

                onValue(userRef, (snapshot) => {
                    cartContent.innerHTML = "";
                    let total = 0;

                    // Шаблон порожнього кошика
                    const emptyCartHTML = `
                        <div id="usersContainer" style="color: #ff3399;" class="m-0 p-0 py-3 col-12 d-flex flex-column gap-3 ">
                            <div class="empty-cart-alert d-flex flex-column align-items-center justify-content-center text-center p-5 rounded-4 shadow-sm">
                                <i class="fas fa-shopping-cart fa-4x mb-3 cart-icon "></i>
                                <strong class="fs-4">Der Warenkorb ist leer.</strong>
                                <p class="mt-2 mb-0 text-muted fs-5">
                                    Fügen Sie Produkte hinzu, um Ihren Einkauf zu starten! 🍩
                                </p>
                            </div>
                        </div>
                    `;

                    // Якщо snapshot немає
                    if (!snapshot.exists()) {
                        cartContent.innerHTML = emptyCartHTML;
                        cartTotalPrice.textContent = "€0.00";
                        return;
                    }

                    const user = snapshot.val();

                    // Якщо масив продуктів порожній або не існує
                    if (!Array.isArray(user.products) || user.products.length === 0) {
                        cartContent.innerHTML = emptyCartHTML;
                        cartTotalPrice.textContent = "€0.00";
                        return;
                    }

                    // Є товари → рендеримо
                    user.products.forEach((p, index) => {
                        const div = document.createElement("div");
                        div.className = "m-0 p-0 py-3 row cart-item";

                        div.innerHTML = `
                                        <img class="m-0 p-0 col-auto " src = "${p.image}" alt = "${p.name}" >


                            <div class="m-0 p-0 col">

                                <div class="m-0 p-0 row">

                                    <a href="${p.link}" class="my_link_card col ">${p.name}</a>

                                    <button onclick="deleteProduct('${visitorKey}', ${index})" class="my_icon m-0 p-2 col-auto btn btn-sm btn-outline-danger  text-danger border-0 bg-transparent fa-solid fa-xmark fs-5"></button>

                                </div>

                                <div class="m-0 p-0 row align-items-center">

                                    <div class="m-0 p-2 col cart-item-controls">
                                        <button style="width: 32px; height: 32px;" class="my_button rounded-3 fw-bold" onclick="MinusAmount('${visitorKey}', ${index})">−</button>
                                        <input style="width: 36px; height: 32px;" class="m-0 p-0 rounded-3" type="number" value="${p.amount}" disabled>
                                        <button style="width: 32px; height: 32px;" class="my_button rounded-3 fw-bold"  onclick="PlusAmount('${visitorKey}', ${index})">+</button>
                                    </div>

                                     <div class="m-0 p-2 col-auto text-end">
                                        <strong class="m-0 p-0 fs-6">€${p.summary.toFixed(2)}</strong>
                                    </div>

                                                        
                                </div>
                            </div>
                        `;

                        cartContent.appendChild(div);

                        total += p.amount * p.price;
                    });

                    cartTotalPrice.textContent = `€${total.toFixed(2)}`;
                });
            }

            window.loadCartRealtime = loadCartRealtime;  // ← ДОДАЙ

        });


        function openSideCart() {
            const sideCart = document.getElementById("sideCart");
            const cartBackdrop = document.getElementById("cartBackdrop");
        
            sideCart.classList.add("active");
            cartBackdrop.classList.add("active");
        
            document.body.style.overflow = "hidden";
        }
        
        function closeSideCart() {
            const sideCart = document.getElementById("sideCart");
            const cartBackdrop = document.getElementById("cartBackdrop");
        
            sideCart.classList.remove("active");
            cartBackdrop.classList.remove("active");
        
            document.body.style.overflow = ""; // 🟢 повертаємо скрол
        }
        


        // 🎯 Виклик при кліку кошика normal i через openCart1 
        document.getElementById("openCart").addEventListener("click", (e) => {
            e.preventDefault();
            openSideCart();
        });
        document.getElementById("openCart1").addEventListener("click", async (e) => {
            e.preventDefault();
            openSideCart();
            await loadCartRealtime(); // тепер завантаження працює
        });

        document.getElementById("closeCart").addEventListener("click", closeSideCart);
        document.getElementById("cartBackdrop").addEventListener("click", closeSideCart);






        //карта товару
        //карта товару
        //карта товару
        //карта товару
        //карта товару
        //карта товару
        //карта товару
        //карта товару
        //карта товару
        //карта товару
        //карта товару
        //карта товару
        //карта товару
        //карта товару
        //карта товару
        //карта товару
        //карта товару
        //карта товару
        //карта товару
        //карта товару
        //карта товару



        // ==========================
        // Плюс/мінус кнопки картка
        // Плюс/мінус кнопки картка 
        // Плюс/мінус кнопки картка 
        // Плюс/мінус кнопки картка 
        // Плюс/мінус кнопки картка
        // Плюс/мінус кнопки картка 
        // Плюс/мінус кнопки картка 
        // Плюс/мінус кнопки картка 
        // Плюс/мінус кнопки картка
        // Плюс/мінус кнопки картка 
        // Плюс/мінус кнопки картка 
        // Плюс/мінус кнопки картка 
        // Плюс/мінус кнопки картка
        // Плюс/мінус кнопки картка 
        // Плюс/мінус кнопки картка 
        // Плюс/мінус кнопки картка 
        // Плюс/мінус кнопки картка 
        // Плюс/мінус кнопки картка 

        // ========================= Контроль кількості =========================
        const minusBtn = document.getElementById("minus");
        const plusBtn = document.getElementById("plus");
        const valueInput = document.getElementById("value");

        minusBtn.addEventListener("click", () => {
            let current = parseInt(valueInput.value);
            if (current > 1) valueInput.value = current - 1;
        });

        plusBtn.addEventListener("click", () => {
            let current = parseInt(valueInput.value);
            valueInput.value = current + 1;
        });








        // картка добавити в базу товар кнопка 
        // картка добавити в базу товар  кнопка 
        // картка добавити в базу товар  кнопка 
        // картка добавити в базу товар  кнопка 
        // картка добавити в базу товар  кнопка 
        // картка добавити в базу товар  кнопка 
        // картка добавити в базу товар  кнопка 
        // картка добавити в базу товар  кнопка 
        // картка добавити в базу товар  кнопка 
        // картка добавити в базу товар  кнопка 
        // картка добавити в базу товар  кнопка 
        // картка добавити в базу товар  кнопка 
        // картка добавити в базу товар  кнопка 
        // картка добавити в базу товар  кнопка 
        // картка добавити в базу товар  кнопка 
        // картка добавити в базу товар  кнопка 
        // картка добавити в базу товар  кнопка 
        // картка добавити в базу товар  кнопка 
        // картка добавити в базу товар  кнопка 
        // картка добавити в базу товар  кнопка 
        window.addUserFromInput = async function (image, name, price, link) {
            try {
                const input = document.getElementById("value");
                const amount = parseInt(input.value) || 1; // беремо поточну кількість з інпута
                const numericPrice = parseFloat(price.replace(",", "."));

                const ip = await getUserIP();
                if (ip === "unknown") return;

                const userKey = ip.replace(/\./g, "_");
                const userRef = ref(db, "visitors/" + userKey);
                const snapshot = await get(userRef);

                let products = [];
                if (snapshot.exists()) {
                    products = snapshot.val().products || [];
                }

                const existingIndex = products.findIndex(p => p.image === image);

                if (existingIndex > -1) {
                    // 🔄 якщо товар вже є — оновлюємо кількість
                    products[existingIndex].amount = amount;
                    products[existingIndex].summary = numericPrice * amount;
                    console.log(`🔁 Товар "${name}" існує — кількість оновлена на ${amount}`);
                } else {
                    // ➕ якщо немає — додаємо новий
                    products.push({
                        image,
                        name,
                        link: link,
                        amount: amount,
                        price: numericPrice,
                        summary: numericPrice * amount
                    });
                    console.log(`🆕 Товар "${name}" додано у products (${amount} шт)`);
                }

                const totalPay = products.reduce((sum, p) => sum + (p.summary || 0), 0);

                await update(userRef, {
                    products,
                    pay: totalPay,
                    timestamp: new Date().toLocaleString("uk-UA"),
                });

                console.log(`✅ Firebase оновлено. Загальна сума: ${totalPay.toFixed(2)} грн`);

            } catch (err) {
                console.error("❌ Firebase error:", err);
            }
        };




