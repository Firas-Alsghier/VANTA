export const useWishlist = () => {
  const ids = useState('wishlist-ids', () => []);

  const count = computed(() => ids.value.length);
  const has = (id) => ids.value.includes(id);

  function toggle(id) {
    ids.value = has(id)
      ? ids.value.filter((i) => i !== id)
      : [...ids.value, id];
  }

  return { ids, count, has, toggle };
};
