function updateTotal(price) {
  document.getElementById("total-price").innerText = `$${price.toFixed(2)} USD`;
}

function selectOption(el, price) {
  document.querySelectorAll(".option").forEach((opt) => {
    opt.classList.remove("active");
    opt.querySelector('input[type="radio"]').checked = false;
  });
  el.classList.add("active");
  el.querySelector('input[type="radio"]').checked = true;
  updateTotal(price);
}
