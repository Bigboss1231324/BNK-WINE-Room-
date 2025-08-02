// cart.js

// Add product to localStorage cart
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`เพิ่ม ${product.name} เข้าตะกร้าเรียบร้อยแล้ว!`);
}
