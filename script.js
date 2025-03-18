function toggleSubMenu(id) {
    var submenu = document.getElementById(id);
    if (submenu.style.display === "block") {
      submenu.style.display = "none";
    } else {
      submenu.style.display = "block";
    }
  }

function toggleSubMenu(id) {
  var submenu = document.getElementById(id);
  if (submenu.style.display === "block") {
    submenu.style.display = "none";
  } else {
    submenu.style.display = "block";
  }
}

function toggleSubMenu(id) {
  var submenu = document.getElementById(id);
  if (submenu.style.display === "block") {
    submenu.style.display = "none";
  } else {
    submenu.style.display = "block";
  }
}

function toggleSubMenu(id) {
  var submenu = document.getElementById(id);
  if (submenu.style.display === "block") {
    submenu.style.display = "none";
  } else {
    submenu.style.display = "block";
  }
}

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  } else {
    sidebar.classList.add("open");
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
}

let currentIndex = 0;
const images = document.querySelectorAll('.gallery-image');
const imageItems = document.querySelectorAll('.image-item');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('trigger');
const modalDescription = document.getElementById('modalDescription');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const closeBtn = document.querySelector('.close');
const galleryBtn = document.querySelector('.gallery-view-btn');

// Open modal when an image is clicked
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentIndex = index;
    modal.style.display = 'flex';
    modalImage.src = image.src;
    modalDescription.textContent = image.getAttribute('data-description'); // Show description in modal
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Navigate to previous image
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  modalImage.src = images[currentIndex].src;
  modalDescription.textContent = images[currentIndex].getAttribute('data-description'); // Update description
});

// Navigate to next image
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  modalImage.src = images[currentIndex].src;
  modalDescription.textContent = images[currentIndex].getAttribute('data-description'); // Update description
});

// Open the gallery view (you can add custom functionality for this button)
galleryBtn.addEventListener('click', () => {
  alert("Gallery view functionality can be added!");
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});



 let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slide");
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  slides.forEach((slide) => (slide.style.display = "none"));
  slides[slideIndex].style.display = "block";
}
 
// Auto-play slides every 5 seconds
 setInterval(() => {
  changeSlide(1);
}, 5000);
 

/* let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
}

// Function to move to the next slide when clicked
function nextSlide() {
    let slides = document.getElementsByClassName("mySlides");
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } // Wrap back to first slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
} */