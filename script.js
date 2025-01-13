// Fungsi untuk mengubah visibilitas dropdown
function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

// Sembunyikan dropdown ketika mengklik di luar
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

// Fungsionalitas carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Transisi otomatis carousel setiap 5 detik
setInterval(() => {
    changeSlide(1);
}, 5000); // Ganti slide setiap 5 detik
