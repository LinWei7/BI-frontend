<template>
  <a-form
    ref="formRef"
    :model="formData"
    class="form"
    :label-col-props="{ span: 8 }"
    :wrapper-col-props="{ span: 16 }"
  >
    <a-form-item
      field="userName"
      :label="$t('用户名')"
      :rules="[
        {
          required: true,
          message: $t('用户名输入错误'),
        },
      ]"
    >
      <a-input v-model="formData.userName" :placeholder="'请输入你的名称'" />
    </a-form-item>
    <a-form-item
      field="userProfile"
      :label="$t('个人简介')"
      :rules="[
        {
          maxLength: 200,
          message: '字数超过200字',
        },
      ]"
      row-class="keep-margin"
    >
      <a-textarea
        v-model="formData.userProfile"
        :placeholder="'请输入您的个人简介，字数最多不能超过200字。'"
      />
    </a-form-item>

    <a-form-item>
      <a-space>
        <a-button type="primary" @click="validate">
          {{ $t('保存') }}
        </a-button>
        <a-button type="secondary" @click="reset">
          {{ $t('重置') }}
        </a-button>
      </a-space>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { FormInstance } from '@arco-design/web-vue/es/form';
  import { BasicInfoModel } from '@/api/user-center';

  const formRef = ref<FormInstance>();
  const formData = ref<BasicInfoModel>({
    userName: '',
    userProfile: '',
  });
  const validate = async () => {
    const res = await formRef.value?.validate();
    if (!res) {
      // do some thing
      // you also can use html-type to submit
    }
  };
  const reset = async () => {
    await formRef.value?.resetFields();
  };
</script>

<style scoped lang="less">
  .form {
    width: 540px;
    margin: 0 auto;
  }
</style>
