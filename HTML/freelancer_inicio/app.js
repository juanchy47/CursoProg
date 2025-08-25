export function formatPrice(price, currency = 'ARS') {
  const symbol = currency === 'ARS' ? '$' : '€';
  return `${symbol}${(price / 100).toLocaleString('es-AR', { minimumFractionDigits: 2 })}`;
}

function validatePhone(phone) {
  return /^[0-9]{8,15}$/.test(phone);
}

function loadCart() {
  try {
    const savedCart = localStorage.getItem('restaurant-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (e) {
    return [];
  }
}

function createMenuCard(item) {
  // Devuelve el HTML para una tarjeta de producto
}

function renderCategory(category) {
  // Renderiza todos los productos de una categoría
}