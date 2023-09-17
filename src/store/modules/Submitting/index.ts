import { defineStore } from 'pinia';
import { SubmittingState } from '@/store/modules/Submitting/types';

const useSubmittingStore = defineStore('submitting', {
  state: (): SubmittingState => ({
    submitting: false,
  }),
  getters: {
    getSubmitting(): boolean {
      return this.submitting;
    },
  },

  actions: {
    setSubmitting(submitting: boolean) {
      this.submitting = submitting;
    },

    resetSubmitting() {
      this.$reset();
    },
  },
});

export default useSubmittingStore;
