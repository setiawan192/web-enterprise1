// Inisialisasi AOS (Animation on Scroll)
AOS.init();

// Fungsi untuk toggle tema (dark/light mode)
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  // Menyimpan preferensi tema pengguna di localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  // Ubah ikon toggle tema
  const icon = document.querySelector(".theme-toggle");
  icon.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

// Cek tema yang disimpan di localStorage saat halaman dimuat
window.addEventListener("DOMContentLoaded", (event) => {
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    const icon = document.querySelector(".theme-toggle");
    icon.textContent = "☀️";  // Ganti ikon menjadi matahari jika tema gelap
  } else {
    document.body.classList.remove("dark-mode");
    const icon = document.querySelector(".theme-toggle");
    icon.textContent = "🌙";  // Ganti ikon menjadi bulan jika tema terang
  }
});
