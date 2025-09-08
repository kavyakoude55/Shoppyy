import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),

  getters: {
    itemCount: (state) =>
      state.items.reduce((sum, item) => sum + (item.quantity || 0), 0),

    totalPrice: (state) =>
      state.items.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      ),
  },

  actions: {
    addToCart(product) {
      const existing = this.items.find((i) => i.id === product.id);
      if (existing) {
        existing.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },

    increaseQuantity(id) {
      const item = this.items.find((i) => i.id === id);
      if (item) item.quantity++;
    },

    decreaseQuantity(id) {
      const item = this.items.find((i) => i.id === id);
      if (item) {
        if (item.quantity <= 1) this.removeFromCart(id);
        else item.quantity--;
      }
    },
  },
});
