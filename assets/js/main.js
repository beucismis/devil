// Bu fonksiyon, sayfa kaydırıldığında çalışacak
function updateReadingProgressBar() {
  // İlerleme çubuğu elementini seçelim
  const progressBar = document.querySelector(".reading-progress-bar");

  // Eğer sayfada bu element yoksa, fonksiyonu sonlandır
  if (!progressBar) {
    return;
  }

  // Kullanıcının ne kadar aşağı kaydırdığını bulalım
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Sayfanın toplam kaydırılabilir yüksekliğini hesaplayalım
  // document.documentElement.scrollHeight: Sayfanın toplam yüksekliği
  // document.documentElement.clientHeight: Ekranın görünen yüksekliği
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // İlerleme yüzdesini hesaplayalım
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  // Çubuğun genişliğini (width) hesaplanan yüzdeye göre güncelleyelim
  progressBar.style.width = scrollPercent + "%";
}

// "scroll" olayını dinleyerek, her kaydırma hareketinde fonksiyonumuzu çalıştıralım
window.addEventListener("scroll", updateReadingProgressBar);
