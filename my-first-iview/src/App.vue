<template>
  <div style="margin: 200px;">
    <!-- <Select v-model="model1" style="width:200px">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select> -->

    <!-- <Button type="primary">Primary</Button> -->

    <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
    <span>{{$t('message')}}</span>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        cityList: [{
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        model1: ''
      }
    }
  }
</script>