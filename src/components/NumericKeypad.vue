<script>
import { useKeypadStore } from '@/stores/keypadStore';
import { useContactsStore } from '@/stores/contactsStore';
import { useCallLogStore } from '@/stores/callLogStore';

export default {
    data() {
        return {
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            contactName: ''
        };
    },
    computed: {
        keypadStore() {
            return useKeypadStore();
        },
        contactsStore() {
            return useContactsStore();
        },
        callLogStore() {
            return useCallLogStore();
        }
    },
    watch: {
        'keypadStore.currentNumber'() {
            this.updateContactName();
        }
    },
    methods: {
        updateContactName() {
            const contact = this.contactsStore.contacts.find(c => c.number === this.keypadStore.currentNumber);
            this.contactName = contact ? contact.name : '';
        },
        pressKey(num) {
            if (this.keypadStore.currentNumber.length < 10) {
                this.keypadStore.updateNumber(this.keypadStore.currentNumber + num);
            }
        },
        makeCall() {
            if (this.keypadStore.currentNumber.length === 10) {
                this.callLogStore.logCall({
                    number: this.keypadStore.currentNumber,
                    name: this.contactName,
                    time: new Date().toLocaleString()
                });
                this.keypadStore.clearNumber();
            }
        },
        deleteLastDigit() {
            this.keypadStore.updateNumber(this.keypadStore.currentNumber.slice(0, -1));
        }
    }
};
</script>

<template>
    <div>
      <h1>Clavier Numérique</h1>
      <div>
        <div class="number-display">
          {{ keypadStore.currentNumber }}
        </div>
        <div v-if="contactName" class="contact-name">
          {{ contactName }}
        </div>
        <div class="keypad">
          <button v-for="num in numbers" :key="num" @click="pressKey(num)">{{ num }}</button>
          <button @click="deleteLastDigit">Supprimer</button>
          <button @click="makeCall">Appeler</button>
        </div>
      </div>
      <p v-if="keypadStore.currentNumber.length > 0 && keypadStore.currentNumber.length !== 10" class="error-message">
        Veuillez saisir un numéro valide
      </p>
    </div>
</template>

<style>
.keypad {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.keypad button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4%;
}

.number-display {
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
}

.contact-name {
  margin-top: 10px;
  font-size: 1.2em;
  color: green;
}

.error-message {
  color: red;
  font-size: 19px;
}
</style>