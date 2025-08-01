import "./style.css";
import food1Image from "./assets/menu/food1.png";
import burgerImage from "./assets/menu/burger.png";
import pastaImage from "./assets/menu/pasta.png";
import pizzaImage from "./assets/menu/pizza.png";

const content = document.getElementById("content");

function home() {
    content.innerHTML = "";

    const welcomeSpace = document.createElement("div");
    welcomeSpace.classList.add("welcome-space");
    welcomeSpace.innerHTML = `
        <h2>Welcome to our restaurant</h2>
        <p>We are a restaurant that serves the best food in the world.</p>
    `;
    content.appendChild(welcomeSpace);

    const restaurantInfoCards = document.createElement("div");
    restaurantInfoCards.classList.add("restaurant-info-cards");
    restaurantInfoCards.innerHTML = `
        <div class="restaurant-info-card">
            <h3>Location</h3>
            <p>123 Main St, Anytown, USA</p>
        </div>
        <div class="restaurant-info-card">
            <h3>Hours</h3>
            <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
        </div>
    `;
    content.appendChild(restaurantInfoCards);

}

function menu() {
    content.innerHTML = "";
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.innerHTML = `
        <h2>Menu</h2>
        <p>We have a variety of food and drinks to choose from.</p>
    `;
    content.appendChild(menu);

    // Crear el contenedor del carrusel
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");

    // Crear botones de navegación
    const prevButton = document.createElement("button");
    prevButton.innerHTML = "&#10094;"; // Flecha izquierda
    prevButton.classList.add("carousel-button", "prev");

    const nextButton = document.createElement("button");
    nextButton.innerHTML = "&#10095;"; // Flecha derecha
    nextButton.classList.add("carousel-button", "next");

    // Importar todas las imágenes del menú dinámicamente
    const menuImages = [];
    let currentImageIndex = 0;

    // Función para mostrar la imagen actual
    function showImage(index) {
        if (menuImages.length > 0) {
            carousel.querySelectorAll('img').forEach(img => img.style.display = 'none');
            menuImages[index].style.display = 'block';
        }
    }

    // Event listeners para los botones
    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + menuImages.length) % menuImages.length;
        showImage(currentImageIndex);
    });

    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % menuImages.length;
        showImage(currentImageIndex);
    });

    // Agregar botones al carrusel
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);

    function createMenuImage(src) {
        const menuImage = document.createElement("img");
        menuImage.src = src;
        menuImages.push(menuImage);
        carousel.appendChild(menuImage);
    }

    // Intentar importar las imágenes
    try {
        createMenuImage(food1Image);
        createMenuImage(burgerImage);
        createMenuImage(pastaImage);
        createMenuImage(pizzaImage);

        showImage(0); // Mostrar la primera imagen
    } catch (error) {
        console.error("Error cargando las imágenes del menú:", error);
    }

    content.appendChild(carousel);
}

function contact() {
    content.innerHTML = "";
    const contactSpace = document.createElement("div");
    contactSpace.classList.add("contact-space");
    contactSpace.innerHTML = `
        <h2>Contact Us</h2>
        <p>We are a restaurant that serves the best food in the world.</p>
    `;
    content.appendChild(contactSpace);

    const contactForm = document.createElement("form");
    contactForm.classList.add("contact-form");
    contactForm.innerHTML = `
        <input type="text" placeholder="Name" required>
        <input type="email" placeholder="Email" required>
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Submit</button>
    `;
    
    // Agregar event listener al formulario
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        handleContact();
    });
    
    content.appendChild(contactForm);
}

function handleContact() {
    const form = document.querySelector('.contact-form');
    const formData = new FormData(form);
    
    // Obtener los valores del formulario
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // Validar que todos los campos estén llenos
    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos');
        return;
    }
    
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    
    form.reset();
}

export { home, menu, contact };