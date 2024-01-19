<script>
  import { useContactsStore } from '@/stores/contactsStore';
  import { useRouter } from 'vue-router';
  import { useCallLogStore } from '@/stores/callLogStore';
  
  export default {
    setup() {
      const contactsStore = useContactsStore();
      const callLogStore = useCallLogStore();
      const router = useRouter();
  
      const goToAddContact = () => {
        router.push('/add-contact');
      };
  
      const makeCall = (number, name) => {
        callLogStore.logCall({ number, name, time: new Date().toLocaleString() });
      };
  
      return { contacts: contactsStore.contacts, goToAddContact, makeCall };
    }
  };
</script>

<template>
    <div>
      <h1>Liste de Contacts</h1>
      <ul>
        <li v-for="contact in contacts" :key="contact.number">
          {{ contact.name }} - {{ contact.number }}
          <button @click="makeCall(contact.number, contact.name)">📞</button>
        </li>
      </ul>
      <button @click="goToAddContact">+</button>
    </div>
  </template>
  
  <style>

  </style>
  