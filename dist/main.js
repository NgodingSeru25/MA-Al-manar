const burgerMenu = document.querySelector("#burgerMenu");
const navbarMenu = document.querySelector("#navbarMenu");

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("burger-active");
  navbarMenu.classList.toggle("hidden");
});

const image = document.querySelector(".image");

let mulaiImage = false,
  imagePageX,
  imageScrollKiri;

image.addEventListener("mousedown", (e) => {
  mulaiImage = true;
  imagePageX = e.pageX;
  imageScrollKiri = image.scrollLeft; // Menyimpan posisi scroll awal
});

image.addEventListener("mousemove", (e) => {
  if (!mulaiImage) return; // Jika mouse tidak ditekan, tidak melakukan apapun
  e.preventDefault(); // Mencegah pemilihan teks
  let posisi = e.pageX - imagePageX; // Menghitung posisi baru
  image.scrollLeft = imageScrollKiri - posisi; // Update posisi scroll
});

image.addEventListener("mouseup", () => {
  mulaiImage = false; // Setel flag saat mouse dilepas
});

image.addEventListener("mouseleave", () => {
  mulaiImage = false; // Setel flag saat mouse keluar dari area gambar
});
