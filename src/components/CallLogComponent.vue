<script>
  import { useCallLogStore } from '@/stores/callLogStore';
  
  export default {
    setup() {
      const callLogStore = useCallLogStore();
  
      const makeCall = (number, name) => {
        callLogStore.logCall({ number, name, time: new Date().toLocaleString() });
    
      };
  
      return { callLogs: callLogStore.callLogs, makeCall };
    }
  };
</script>

<template>
    <div>
      <h1>Journal d'Appels</h1>
      <ul>
        <li v-for="log in callLogs" :key="log.time">
          {{ log.name || log.number }} - {{ log.time }}
          <button @click="makeCall(log.number, log.name)">📞</button>
        </li>
      </ul>
    </div>
</template>
  
  <style>

  </style>
  