
import { defineStore } from "pinia";

export const useWishlistStore = defineStore("wishlist", {
  state: () => ({
    items: [],
  }),
  getters: {
    itemCount: (state) => state.items.length,
  },
  actions: {
    addToWishList(product) {
      if (!this.items.find((item) => item.id === product.id)) {
        this.items.push(product);
      }
    },
    removeFromWishList(productId) {
      this.items = this.items.filter((item) => item.id !== productId);
    },
  },
});
