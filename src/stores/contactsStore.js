import { defineStore } from 'pinia';

export const useContactsStore = defineStore('contacts', {
  state: () => ({
    contacts: []
  }),
  actions: {
    addContact(contact) {
      this.contacts.push(contact);
    }
  }
});
