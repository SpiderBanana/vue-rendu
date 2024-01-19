<script>
import { useContactsStore } from '@/stores/contactsStore';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const contactsStore = useContactsStore();
    const router = useRouter();
    const newContact = { name: '', number: '' };

    const addContact = () => {
      if (newContact.number.length === 10) {
        contactsStore.addContact({ ...newContact });
        newContact.name = '';
        newContact.number = '';
        router.push('/contacts');
      }
    };

    return { newContact, addContact };
  }
};
</script>

<template>
    <div class="form-container">
      <h1>Ajouter un Contact</h1>
      <form @submit.prevent="addContact" class="contact-form">
        <input v-model="newContact.name" type="text" placeholder="Nom" class="form-input" />
        <input v-model="newContact.number" type="tel" placeholder="Numéro" maxlength="10" class="form-input" />
        <button type="submit" class="form-button">Ajouter</button>
      </form>
    </div>
</template>

<style>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
}

.form-input {
  margin-bottom: 10px;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.form-button {
  padding: 10px;
  font-size: 18px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.form-button:hover {
  background-color: #45a049;
}
</style>