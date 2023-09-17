import { defineStore } from 'pinia';
import { message } from 'ant-design-vue';
import { toRaw } from 'vue';
import { ChartState } from './types';
import { ChartControllerService } from '../../../../generated';
import useOptionStore from '../Option';

const useChartStore = defineStore('chart', {
  state: (): ChartState => ({
    chartId: undefined,
    genChart: undefined,
    genResult: undefined,
  }),
  getters: {
    getChartId(): number | undefined {
      return this.chartId;
    },
    getGenChart(): string | undefined {
      return this.genChart;
    },
    getGenResult(): string | undefined {
      return this.genResult;
    },
  },

  actions: {
    setChart(chart: ChartState) {
      this.chartId = chart.chartId;
      this.genChart = chart.genChart;
      this.genResult = chart.genResult;
    },
    // Get user's information
    async genChartByAiUsingPost(data: any) {
      const optionStore = useOptionStore();
      await ChartControllerService.genChartByAiUsingPost(
        data.file,
        data.chartType,
        data.goal,
        data.name
      )
        .then((res) => {
          if (!res) {
            message.error('分析失败');
          } else {
            message.success('分析成功');
            const chartOption = JSON.parse(res.genChart ?? '');
            if (!chartOption) {
              throw new Error('图表代码解析错误');
            } else {
              this.setChart(res);
              optionStore.setOption(chartOption);
            }
          }
        })
        .catch((error) => {});
      console.log(toRaw(optionStore.getOption));
    },
    resetChart() {
      this.$reset();
    },
  },
});

export default useChartStore;
