onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // 🌹❤️ Hiệu ứng trái tim bay
  const heartsContainer = document.createElement("div");
  heartsContainer.className = "hearts";
  document.body.appendChild(heartsContainer);

  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heartsContainer.appendChild(heart);

    // Xóa trái tim sau 4 giây
    setTimeout(() => heart.remove(), 4000);
  }, 500);
};
