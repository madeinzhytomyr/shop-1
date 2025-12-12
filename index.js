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
const products = [
    {
        id: 1,
        name: "Star Wars",
        type: "Donut Geschenkbox",
        img: "/image/1a.webp",
        price: 45.75,
        original: 51.75,
        rating: 96,
        reviews: 235,
        link: "card_1.html",
    },
    {
        id: 2,
        name: "Racing",
        type: "Donut Geschenkbox",
        img: "/image/3a.webp",
        price: 45.75,
        original: 51.75,
        rating: 94,
        reviews: 185,
        link: "card_2.html",
    },
    {
        id: 3,
        name: "Minecraft",
        type: "Donut Geschenkbox",
        img: "/image/4a.webp",
        price: 45.75,
        original: 51.75,
        rating: 94,
        reviews: 153,
        link: "card_1.html",
    },
    {
        id: 4,
        name: "Fußball",
        type: "Donut Geschenkbox",
        img: "/image/8a.webp",
        price: 45.75,
        original: 51.75,
        rating: 94,
        reviews: 127,
        link: "card_1.html",
    },
    {
        id: 5,
        name: "Kinder Time",
        type: "Mini-Donut Geschenkbox",
        img: "/image/01a.webp",
        price: 49.75,
        original: 55.75,
        rating: 96,
        reviews: 235,
        link: "card_1.html",
    },
    {
        id: 6,
        name: "Filled with Love",
        type: "Mini-Donut Geschenkbox",
        img: "/image/03a.webp",
        price: 49.75,
        original: 55.75,
        rating: 94,
        reviews: 185,
        link: "card_1.html",
    },

    {
        id: 6,
        name: "Filled with Love",
        type: "Mini-Donut Geschenkbox",
        img: "/image/03a.webp",
        price: 49.75,
        original: 55.75,
        rating: 94,
        reviews: 185,
        link: "card_1.html",
    },

    {
        id: 8,
        name: "DT Classic",
        type: "Mini-Donut Geschenkbox",
        img: "/image/06a.webp",
        price: 49.75,
        original: 55.75,
        rating: 92,
        reviews: 125,
        link: "card_1.html",
    },


];

const productsContainer = document.getElementById("products_1");

function renderProducts(list) {
    productsContainer.innerHTML = "";
    list.forEach((product) => {
        const card = document.createElement("div");
        card.className = "m-0 p-2 col-10 col-sm-6 col-md-6 col-lg-4 col-xl-3 ";
        card.innerHTML = `

          <div  class="p-4 rounded-5  text-center"
            style="background:white; box-shadow: 0 15px 30px rgba(0,0,0,0.1); color:var(--bs-primary); border:3px solid var(--bs-primary);">

            <div class="icon-cir1cle mb-3 rounded-4 col-auto overflow-hidden">
              <img class="my_img_card m-0 p-0 w-100 rounded-4" src="${product.img}">
            </div>

            <h6 class="fw-bold m-0 pb-2">
                    ${product.name}
          </h6>
            
            <p class="m-0 small text-secondary pb-2">
              Für jede Feier – Donuts sind das süße Highlight.            </p>

              <!-- 💰 Ціна -->
              <div style="color: var(--bs-primary);" class="m-0 p-0 px-4 col-12 text-center   fw-bold rounded-4  pb-1">
                <span class="m-0 p-0 fs-5">€${product.price}</span>
                <span class="m-0 p-0 text-muted small fw-bold ps-1 ">/ 12 stück</span>
              </div>

            <a href="${product.link}" class="my_button mt-2 d-inline-block fs-6">
              In den Corb
            </a>
          </div>











         

        `;
        productsContainer.appendChild(card);
    });
}

// Ініціалізація
renderProducts(products);

// Плавна поява елементів при скролі
const fadeEls = document.querySelectorAll('[data-animate="fade-in"]');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    },
    { threshold: 0.2 }
);

fadeEls.forEach((el) => observer.observe(el));
if (window.innerWidth <= 768) {
    document
        .querySelectorAll("[data-tilt]")
        .forEach((el) => el.vanillaTilt && el.vanillaTilt.destroy());
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("faq-active");
        faqItems.forEach((other) => {
            if (other !== item) other.classList.remove("faq-active");
        });
    });
});
