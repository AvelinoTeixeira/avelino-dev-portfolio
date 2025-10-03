
  document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".skill-bar-fill");

  bars.forEach(bar => {
    const percentage = bar.getAttribute("data-percentage");
    bar.style.width = percentage + "%";

    // Mostra o valor animando
    let count = 0;
    const interval = setInterval(() => {
      if (count >= percentage) {
        clearInterval(interval);
      } else {
        count++;
        bar.textContent = count + "%";
      }
    }, 15); // velocidade da contagem
  });
});
