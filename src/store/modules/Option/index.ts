import { defineStore } from 'pinia';
import { OptionState } from '@/store/modules/Option/types';

const useOptionStore = defineStore('option', {
  state: (): OptionState => ({
    option: undefined,
  }),
  getters: {
    getOption(): any | undefined {
      return this.option;
    },
  },

  actions: {
    setOption(option: OptionState) {
      this.option = option;
    },

    resetOption() {
      this.$reset();
    },
  },
});

export default useOptionStore;
