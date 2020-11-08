<template>
  <div class="home">
    <WeatherItem v-for="(item,index) in wetherNumbers" :key='index' :cityList="cityList" />
  </div>
</template>

<script>
  import WeatherItem from '@/components/WeatherItem.vue'

  export default {
    name: 'Home',
    components: {
      WeatherItem
    },
    data() {
      return {
        cityList: [],
        wetherNumbers: 3
      }
    },
    mounted() {
      this.getCityList()
    },
    methods: {
      //获取城市列表
      async getCityList() {
        let result = await this.$axios.get('/apis/getCities')
        if (result.data.status == 200) {
            this.cityList = result.data.cityList
          } else {
            console.log('获取城市列表失败')
          }
      }
    }
  }
</script>

<style lang="less">
  .home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
</style>