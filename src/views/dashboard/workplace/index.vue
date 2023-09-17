<template>
  <div class="container">
    <a-row class="grid-demo" :style="{ marginTop: '70px' }">
      <a-col :span="12">
        <div>
          <a-card
            :style="{ width: '720px', marginLeft: '70px' }"
            title="智能分析"
          >
            <a-form
              :model="form"
              :style="{ width: '600px' }"
              @submit="handleSubmit(form)"
            >
              <a-form-item field="goal" label="分析目标">
                <a-textarea
                  v-model="form.goal"
                  placeholder="请输入您的分析需求，比如：“分析网站用户的增长情况”"
                  allow-clear
                />
              </a-form-item>
              <a-form-item field="name" label="图表名称">
                <a-input v-model="form.name" placeholder="输入图表名称" />
              </a-form-item>
              <a-form-item field="chartType" label="图表类型">
                <a-select
                  v-model="form.chartType"
                  default-value="折线图"
                  placeholder="请选择图表类型"
                  allow-clear
                >
                  <a-option value="折线图">折线图</a-option>
                  <a-option value="柱状图">柱状图</a-option>
                  <a-option value="堆叠图">堆叠图</a-option>
                  <a-option value="饼图">饼图</a-option>
                  <a-option value="雷达图">雷达图</a-option>
                </a-select>
              </a-form-item>
              <a-form-item field="file" label="原始数据">
                <a-upload
                  action="http://localhost:8080/api/file/upload"
                  @success="uploadFile"
                />
              </a-form-item>
              <a-form-item>
                <a-button
                  type="primary"
                  html-type="submit"
                  :loading="submittingStore.submitting"
                  :disabled="submittingStore.submitting"
                  >提交
                </a-button>
                <a-button html-type="reset">重置</a-button>
              </a-form-item>
            </a-form>
          </a-card>
        </div>
      </a-col>
      <a-col :span="12">
        <a-row>
          <div>
            <a-card :style="{ width: '720px' }" title="分析结论">
              <div v-if="chartStore.getGenChart">{{
                chartStore.getGenResult
              }}</div>
            </a-card>
          </div>
        </a-row>
        <a-divider />
        <a-row>
          <div>
            <a-card
              :style="{ width: '720px', height: '720px' }"
              title="可视化图表"
            >
              <Chart
                :option="toRaw(optionStore.getOption)"
                :style="{ width: '500px', height: '500px' }"
            /></a-card>
          </div>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import { useChartStore } from '@/store';
  import useOptionStore from '@/store/modules/Option';
  import useSubmittingStore from '@/store/modules/Submitting';
  import { toRaw } from 'vue';

  const chartStore = useChartStore();
  const optionStore = useOptionStore();
  const submittingStore = useSubmittingStore();
  const toRowOption = toRaw(optionStore.getOption);

  const form = reactive({
    goal: '',
    name: '',
    chartType: '',
    file: [],
  });
  const uploadFile = (file: any) => {
    form.file = file.file;
  };
  const handleSubmit = async (data: any) => {
    console.log('🚀 ~ file: index.vue:96 ~ toRowOption:', toRowOption);
    if (submittingStore.submitting) {
      return;
    }
    submittingStore.setSubmitting(true);
    chartStore.setChart({
      chartId: undefined,
      genChart: undefined,
      genResult: undefined,
    });
    optionStore.setOption({ option: undefined });
    await chartStore.genChartByAiUsingPost(data);
    console.log(toRowOption);
    submittingStore.setSubmitting(false);
  };
</script>

<script lang="ts">
  export default {
    name: 'Dashboard', // If you want the include property of keep-alive to take effect, you must name the component
  };
</script>
