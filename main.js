//search

// Ambil elemen yang dibutuhkan
const searchIcon = document.getElementById('search-icon'); // Ikon pencarian
const searchBox = document.querySelector('.search-box'); // Elemen kotak pencarian

// Tambahkan event listener untuk ikon pencarian
searchIcon.addEventListener('click', () => {
    // Toggle kelas 'active' pada search box
    searchBox.classList.toggle('active');
});

// Swiper
var swiper = new Swiper(".services", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //Treatment