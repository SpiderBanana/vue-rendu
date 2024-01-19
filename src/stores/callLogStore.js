import { defineStore } from 'pinia';

export const useCallLogStore = defineStore('callLog', {
  state: () => ({
    callLogs: []
  }),
  actions: {
    logCall(callDetails) {
      this.callLogs.push(callDetails);
    }
  }
});
