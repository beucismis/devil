function updateReadingProgressBar() {
  const progressBar = document.querySelector(".reading-progress-bar");

  if (!progressBar) {
    return;
  }

  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = scrollPercent + "%";
}

window.addEventListener("scroll", updateReadingProgressBar);
