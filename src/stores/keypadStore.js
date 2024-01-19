import { defineStore } from 'pinia';

export const useKeypadStore = defineStore('keypad', {
  state: () => ({
    currentNumber: ''
  }),
  actions: {
    updateNumber(number) {
      this.currentNumber = number;
    },
    clearNumber() {
      this.currentNumber = '';
    }
  }
});
