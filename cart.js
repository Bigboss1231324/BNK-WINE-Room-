function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // ตรวจสอบว่ามีสินค้าในตะกร้าหรือยัง
  const existingItem = cart.find(item => item.name === product.name);

  if (existingItem) {
    // ถ้ามีแล้ว ให้เพิ่มจำนวน
    existingItem.quantity += 1;
  } else {
    // ถ้ายังไม่มี ให้เพิ่มใหม่พร้อม quantity = 1
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`เพิ่ม ${product.name} เข้าตะกร้าเรียบร้อยแล้ว!`);
}
