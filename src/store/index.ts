import { createPinia } from 'pinia';
import useAppStore from './modules/app';
import useUserStore from './modules/user';
import useTabBarStore from './modules/tab-bar';
import useChartStore from './modules/Chart';
import useSubmittingStore from './modules/Submitting';
import useOptionStore from './modules/Option';

const pinia = createPinia();

export {
  useAppStore,
  useUserStore,
  useTabBarStore,
  useChartStore,
  useSubmittingStore,
  useOptionStore,
};
export default pinia;
