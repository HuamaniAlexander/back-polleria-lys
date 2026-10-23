export function generateOrderNumber() {
  return 'LS-' + Math.floor(1000 + Math.random() * 9000);
}

export function formatCodigoPedido(id) {
  if (!id) return '';
  const str = String(id).trim();
  if (str.length >= 20 && str.includes('-')) {
    return `Pedido #${str.slice(0, 8).toUpperCase()}`;
  }
  if (str.startsWith('Pedido') || str.startsWith('LS-') || str.startsWith('#')) {
    return str;
  }
  return `Pedido #${str}`;
}
