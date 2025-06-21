document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");

  // auto-detect category from URL
  const category = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

  fetchProducts(category).then(products => {
    if (products.length === 0) {
      productList.innerHTML = "<p>No products found.</p>";
      return;
    }

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <button onclick="openForm('${product.name}', '${product.price}')">Buy Now</button>
      `;

      productList.appendChild(card);
    });
  });

  // Form submit handler
  const form = document.getElementById("orderForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const product = document.getElementById("orderProduct").value;
    const name = document.getElementById("orderName").value;
    const phone = document.getElementById("orderPhone").value;
    const address = document.getElementById("orderAddress").value;

    const message = `Order Details:\n\nProduct: ${product}\nName: ${name}\nPhone: ${phone}\nAddress: ${address}`;
    alert(message); // Later you can send this via WhatsApp or Email
    closeForm();
  });
});

// Show form
function openForm(name, price) {
  const modal = document.getElementById("orderModal");
  document.getElementById("orderProduct").value = `${name} - ${price}`;
  modal.style.display = "flex";
}

// Hide form
function closeForm() {
  document.getElementById("orderModal").style.display = "none";
}
