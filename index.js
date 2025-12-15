/* ======== HEADER ======== */
/* ======== HEADER ======== */
/* ======== HEADER ======== */
/* ======== HEADER ======== */
/* ======== HEADER ======== */
/* ======== HEADER ======== */
/* ======== HEADER ======== */
/* ======== HEADER ======== */
/* ======== HEADER ======== */
/* ======== HEADER ======== */
/* ======== HEADER ======== */
/* ======== HEADER ======== */
/* ======== HEADER ======== */
/* ======== HEADER ======== */

const header = document.querySelector(".donut-header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/// CARD - IMAGE
/// CARD - IMAGE
/// CARD - IMAGE
/// CARD - IMAGE
/// CARD - IMAGE
/// CARD - IMAGE
/// CARD - IMAGE
/// CARD - IMAGE
/// CARD - IMAGE

const thumbs = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("mainImage");

thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        mainImage.src = thumb.src;
        thumbs.forEach((t) => t.classList.remove("active-thumb"));
        thumb.classList.add("active-thumb");
    });
});

////////////////////// зірочки ...........
////////////////////// зірочки ...........
////////////////////// зірочки ...........
////////////////////// зірочки ...........
////////////////////// зірочки ...........
////////////////////// зірочки ...........
////////////////////// зірочки ...........
////////////////////// зірочки ...........
////////////////////// зірочки ...........
////////////////////// зірочки ...........

document.querySelectorAll(".rating").forEach((ratingEl) => {
    const raw = ratingEl.getAttribute("data-rating");
    const value = parseFloat(raw);
    if (isNaN(value)) return;
    const percent = (Math.max(0, Math.min(5, value)) / 5) * 100;
    const filled = ratingEl.querySelector(".stars .filled");
    if (filled) {
        filled.style.setProperty("--fill", percent + "%");
        // для доступності: оновимо aria-label
        ratingEl.setAttribute("aria-label", `Рейтинг ${value} з 5`);
    }
});

/////////////////// кнопка пргрузити ще
/////////////////// кнопка пргрузити ще
/////////////////// кнопка пргрузити ще
/////////////////// кнопка пргрузити ще
/////////////////// кнопка пргрузити ще
/////////////////// кнопка пргрузити ще
/////////////////// кнопка пргрузити ще
/////////////////// кнопка пргрузити ще
/////////////////// кнопка пргрузити ще

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll("#products_1 > div");
    const loadMoreBtn = document.querySelector("#loadMoreBtn");
    let visible = 8; // скільки елементів показано спочатку

    // Спочатку показати тільки 8
    items.forEach((item, i) => {
        if (i >= visible) item.style.display = "none";
    });

    // Якщо елементів менше або рівно 8 — кнопку ховаємо одразу
    if (items.length <= visible) {
        loadMoreBtn.style.display = "none";
    }

    loadMoreBtn.addEventListener("click", function () {
        const nextVisible = visible + 8;
        for (let i = visible; i < nextVisible && i < items.length; i++) {
            items[i].style.display = "block";
            items[i].classList.add("fade-in");
        }
        visible = nextVisible;
        if (visible >= items.length) {
            loadMoreBtn.style.display = "none"; // ховаємо кнопку, коли все показано
        }
    });
});

// Робимо карусель для кожного продукту
// Робимо карусель для кожного продукту
// Робимо карусель для кожного продукту
// Робимо карусель для кожного продукту
// Робимо карусель для кожного продукту
// Робимо карусель для кожного продукту
// Робимо карусель для кожного продукту
// Робимо карусель для кожного продукту
// Робимо карусель для кожного продукту
// Робимо карусель для кожного продукту
document.querySelectorAll(".product-card").forEach((card) => {
    const images = card.querySelectorAll(".carousel-img");
    const dots = card.querySelectorAll(".dot");
    let index = 0;

    function updateImage(i) {
        images.forEach(
            (img, idx) => (img.style.display = idx === i ? "block" : "none")
        );
        dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
    }

    // Ініціалізація
    updateImage(index);

    // Клік по фото
    images.forEach((img) =>
        img.addEventListener("click", () => {
            index = (index + 1) % images.length;
            updateImage(index);
        })
    );

    // Клік по точках
    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            index = parseInt(dot.getAttribute("data-index"));
            updateImage(index);
        });
    });
});

// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
const burger = document.getElementById("burger-menu");
const closeBtn = document.getElementById("close-menu");
const navLinks = document.getElementById("nav-links");
const rounded = document.getElementById("rounded");

burger.addEventListener("click", () => {
    navLinks.classList.remove("d-none");
    navLinks.classList.add("d-block", "text-center", "w-100");
    burger.classList.add("d-none");
    closeBtn.classList.remove("d-none");
    rounded.classList.remove("rounded-0");
    rounded.classList.add("rounded-0");
});

closeBtn.addEventListener("click", () => {
    navLinks.classList.add("d-none");
    navLinks.classList.remove("d-block");
    burger.classList.remove("d-none");
    closeBtn.classList.add("d-none");
    rounded.classList.remove("rounded-0");
    rounded.classList.add("rounded-0");
});

// Автоматично показує меню на десктопі
window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
        navLinks.classList.remove("d-none");
        burger.classList.add("d-none");
        closeBtn.classList.add("d-none");
    } else {
        navLinks.classList.add("d-none");
        burger.classList.remove("d-none");
    }
});

// Закриває бургер при кліку поза меню
document.addEventListener("click", (event) => {
    const header = document.querySelector("header");
    const isClickInside = header.contains(event.target);

    // Якщо клік поза хедером і меню відкрите
    if (
        !isClickInside &&
        window.innerWidth < 768 &&
        !navLinks.classList.contains("d-none")
    ) {
        navLinks.classList.add("d-none");
        burger.classList.remove("d-none");
        closeBtn.classList.add("d-none");
        rounded.classList.remove("rounded-pill");
        rounded.classList.add("rounded-5") ;
    }
});

// Закриває бургер при кліку на будь-яке посилання в меню
document.querySelectorAll("#nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
            navLinks.classList.add("d-none");
            burger.classList.remove("d-none");
            closeBtn.classList.add("d-none");
            rounded.classList.remove("rounded-5");
            rounded.classList.add("rounded-pill");
        }
    });
});

// карта продукту кожного
// карта продукту кожного
// карта продукту кожного
// карта продукту кожного
// карта продукту кожного
// карта продукту кожного
// карта продукту кожного
// карта продукту кожного
// карта продукту кожного



document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products_2");
    const loadMoreBtn = document.getElementById("loadMoreProjects");
    if (!productsContainer || !loadMoreBtn) return;

    let visibleCount = 8;
    let iso;
    let currentFilter = "*";
    const products = [
        {
            id: 1,
            name: "Star Wars",
            descripton: "Середній термін доставки та обробки 7 робочих днів ",
            type: "Donut Geschenkbox",
            img: "/image/1a.webp",
            price: 45.75,
            original: 51.75,
            rating: 96,
            reviews: 235,
            link: "card_1.html",
            filter: "2024",
            category: "Новинка",
    
    
        },
        {
            id: 2,
            name: "Racing",
            descripton: "Середній термін доставки та обробки 7 робочих днів ",
            type: "Donut Geschenkbox",
            img: "/image/3a.webp",
            price: 45.75,
            original: 51.75,
            rating: 94,
            reviews: 185,
            link: "card_2.html",
            filter: "2024",
            category: "Новинка",
    
    
        },
        {
            id: 3,
            name: "Minecraft",
            descripton: "Середній термін доставки та обробки 7 робочих днів ",
            type: "Donut Geschenkbox",
            img: "/image/4a.webp",
            price: 45.75,
            original: 51.75,
            rating: 94,
            reviews: 153,
            link: "card_1.html",
            filter: "2024",
            category: "Новинка",
    
    
        },
        {
            id: 4,
            name: "Fußball",
            descripton: "Середній термін доставки та обробки 7 робочих днів ",
            type: "Donut Geschenkbox",
            img: "/image/8a.webp",
            price: 45.75,
            original: 51.75,
            rating: 94,
            reviews: 127,
            link: "card_1.html",
            filter: "2024",
            category: "Новинка",
    
    
        },
        {
            id: 5,
            name: "Kinder Time",
            descripton: "Середній термін доставки та обробки 7 робочих днів ",
            type: "Mini-Donut Geschenkbox",
            img: "/image/01a.webp",
            price: 49.75,
            original: 55.75,
            rating: 96,
            reviews: 235,
            link: "card_1.html",
            filter: "2024",
            category: "Новинка",
    
    
        },
        {
            id: 6,
            name: "Filled with Love",
            descripton: "Середній термін доставки та обробки 7 робочих днів ",
            type: "Mini-Donut Geschenkbox",
            img: "/image/03a.webp",
            price: 49.75,
            original: 55.75,
            rating: 94,
            reviews: 185,
            link: "card_1.html",
            filter: "2024",
            category: "Новинка",
    
    
        },
    
        {
            id: 7,
            name: "Filled with Love",
            descripton: "Середній термін доставки та обробки 7 робочих днів ",
            type: "Mini-Donut Geschenkbox",
            img: "/image/03a.webp",
            price: 49.75,
            original: 55.75,
            rating: 94,
            reviews: 185,
            link: "card_1.html",
            filter: "2024",
            category: "Новинка",
    
    
        },
    
        {
            id: 8,
            name: "DT Classic",
            descripton: "Середній термін доставки та обробки 7 робочих днів ",
            type: "Mini-Donut Geschenkbox",
            img: "/image/06a.webp",
            price: 49.75,
            original: 55.75,
            rating: 92,
            reviews: 125,
            link: "card_1.html",
            filter: "2024",
            category: "Новинка",
    
    
        },
    
        {
            id: 9,
            name: "DT Classic",
            descripton: "Середній термін доставки та обробки 7 робочих днів ",
            type: "Mini-Donut Geschenkbox",
            img: "/image/06a.webp",
            price: 49.75,
            original: 55.75,
            rating: 92,
            reviews: 125,
            link: "card_1.html",
            filter: "2024",
            category: "Передзамовлення",
    
    
        },
    ];

    function createCard(product) {
        const card = document.createElement("div");
        card.className = `m-0 p-2   col-10 col-sm-6 col-md-6 col-lg-4 col-xl-3 text-center portfolio-item filter-${product.filter}`;
        card.innerHTML = `


  <div href="${product.link}"  class="p-2 m-0  rounded-5  text-center"
            style="background:transparent; box-shadow: 0 15px 30px rgba(0,0,0,0.1); color:var(--bs-primary); bordeґr:3px solid var(--bs-primary);">

              <a href="${product.link}" class="m-0 p-0">

              <div class="icon-cir1cle mb-3 rounded-4 col-auto overflow-hidden">
              <img class="my_img_card m-0 p-0 w-100 rounded-4" src="${product.img}">

            <span class="project-category m-2 small fw-normal bg-primary ${
                                product.category === "Новинка"
                                    ? "bg-primary"
                                    : product.category === "Но1винка"
                                    ? "bg-danger"
                                    : ""
                            }">
                                ${product.category}
                            </span>
            </div>

            <h6 class="fw-bold m-0 pb-2">
                    ${product.name}
          </h6>
            
            <p class="m-0 small text-secondary pb-2">${product.descripton}</p>

              <!-- 💰 Ціна -->
              <div style="color: var(--bs-primary);" class="m-0 p-0 px-4 col-12 text-center   fw-bold rounded-4  pb-1">
                <span class="m-0 p-0 fs-4 text-white">₴</span>
                <span class="m-0 p-0 fs-5 text-white">${product.price}</span>
                <span class="m-0 p-0  small fw-bold ps-1 text-secondary fst-italic"> (в наявності)</span>
              </div>

            <a href="${product.link}" class="my_button  d-inline-block fs-6">
             Купити
            </a>

                        </a>

          </div>






            
        `;



        return card;
    }

    function updateLoadMoreButton() {
        const filteredProducts = products.filter(
            (p) =>
                currentFilter === "*" || `.filter-${p.filter}` === currentFilter
        );
        loadMoreBtn.style.display =
            filteredProducts.length > visibleCount &&
            filteredProducts.length > 8
                ? "inline-block"
                : "none";
    }

    function initIsotope() {
        imagesLoaded(productsContainer, function () {
            iso = new Isotope(productsContainer, {
                itemSelector: ".portfolio-item",
                layoutMode: "masonry",
                transitionDuration: "0.0s",
            });

            const filters = document.querySelectorAll(".portfolio-filters li");
            filters.forEach((filter) => {
                filter.addEventListener("click", function () {
                    filters.forEach((f) => f.classList.remove("filter-active"));
                    this.classList.add("filter-active");

                    currentFilter = this.getAttribute("data-filter");
                    visibleCount = 8;

                    // --- Очищаємо контейнер ---
                    const allItems =
                        productsContainer.querySelectorAll(".portfolio-item");
                    allItems.forEach((item) => item.remove());

                    // --- Додаємо перші 3 елементи фільтру ---
                    const filteredProducts = products.filter(
                        (p) =>
                            currentFilter === "*" ||
                            `.filter-${p.filter}` === currentFilter
                    );
                    const initialProducts = filteredProducts.slice(
                        0,
                        visibleCount
                    );
                    initialProducts.forEach((p) =>
                        productsContainer.appendChild(createCard(p))
                    );

                    // --- Оновлюємо Isotope ---
                    iso.reloadItems();
                    iso.arrange({ filter: currentFilter });

                    updateLoadMoreButton();
                });
            });

            updateLoadMoreButton();
        });
    }

    function renderInitial() {
        const initialProducts = products.slice(0, visibleCount);
        initialProducts.forEach((p) =>
            productsContainer.appendChild(createCard(p))
        );
        visibleCount = initialProducts.length;
        initIsotope();
    }

    function loadMore() {
        const filteredProducts = products.filter(
            (p) =>
                currentFilter === "*" || `.filter-${p.filter}` === currentFilter
        );
        const nextVisible = visibleCount + 4;
        const newCards = [];
        for (
            let i = visibleCount;
            i < nextVisible && i < filteredProducts.length;
            i++
        ) {
            const card = createCard(filteredProducts[i]);
            productsContainer.appendChild(card);
            newCards.push(card);
        }
        visibleCount = Math.min(nextVisible, filteredProducts.length);

        if (iso) {
            iso.appended(newCards);
            iso.layout();
        }

        updateLoadMoreButton();
    }

    loadMoreBtn.addEventListener("click", loadMore);
    renderInitial();
});



// faq
// faq
// faq
// faq
// faq
// faq
// faq
// faq
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      item.classList.toggle('active');
    });
  });
