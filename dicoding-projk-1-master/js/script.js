const daftarnav = document.querySelector(".daftar-nav");
document.querySelector("#nav-tap").addEventListener("click", () => {
  daftarnav.classList.toggle("active");
});

//Setelah daftar diklik, navbar akan disembunyikan menggunakan fungsi ini.
const navigasi = document.querySelectorAll(".navigasi");
const linkAction = () => {
  daftarnav.classList.remove("active");
};
navigasi.forEach((n) => n.addEventListener("click", linkAction));

//
const navtap = document.querySelectorAll(".nav-tap");

document.addEventListener("click", (e) => {
  if (!e.target.matches("#nav-tap, #nav-tap *")) {
    daftarnav.classList.remove("active");
  }
});

// Untuk dapat memberikan smooth scrolling ketika menekan daftar navigasi.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//Fungsi untuk menampilkan cuplikan manga ketika diklik.
const mangaPopup = document.querySelectorAll(".manga-img");

mangaPopup.forEach((div) => {
  div.addEventListener("click", () => {
    div.classList.toggle("popup");
  });
});
