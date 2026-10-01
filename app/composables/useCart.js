// Shared cart state. Swap the internals for API calls later; components won't need to change.
export const useCart = () => {
  // Seeded with 2 demo lines so the header badge shows "2" like the Stitch design.
  // Use [] once you connect a real cart.
  const items = useState('cart-items', () => [
    { id: 'kinetic-01-low', name: 'KINETIC-01 LOW', price: 340, qty: 1 },
    { id: 'structural-hoodie', name: 'STRUCTURAL HOODIE', price: 220, qty: 1 },
  ]);

  const count = computed(() =>
    items.value.reduce((sum, item) => sum + item.qty, 0),
  );
  const total = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.qty, 0),
  );

  function add(product) {
    const line = items.value.find((item) => item.id === product.id);
    if (line) {
      line.qty++;
    } else {
      items.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: 1,
      });
    }
  }

  function remove(id) {
    items.value = items.value.filter((item) => item.id !== id);
  }

  function clear() {
    items.value = [];
  }

  return { items, count, total, add, remove, clear };
};
