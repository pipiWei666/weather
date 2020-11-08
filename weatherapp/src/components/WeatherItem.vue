<template>
  <div class="weatherItem">
    <div class="weatherBox">
      <h3 class="cityName" v-if="cityList.length">{{city.cityName}}</h3>
      <Swiper :listLength="listLength" :listIndex="listIndex" @changeCity="changeIndex">
        <div slot="container">
          <img :src="weatherIcon" alt="">
        </div>
      </Swiper>
      <div v-if="weatherInformation.weather" class="weatherDetail">
        <div class="temperature">
          <div class="high">{{weatherInformation.hithTemperature | formatTemprature}}</div>
          <div class="low">{{weatherInformation.lowTemperature | formatTemprature}}</div>
        </div>
        <p class="weather">{{weatherInformation.weather}}</p>
      </div>
    </div>

  </div>
</template>

<script>
  import Swiper from "@/components/Swiper.vue"
  export default {
    name: 'WeatherItem',
    components: {
      Swiper
    },
    props: {
      cityList: {
        type: Array,
        default: function () {
          return [{
            id: 0,
            cityName: '武汉'
          }]
        }
      }
    },
    data() {
      return {
        //显示城市的下标索引
        listIndex: 0,
        weatherInformation: {}
      }
    },
    watch: {
      //cityList由空到有值时发起获取天气信息的请求
      cityList(val) {
        this.getWeatherInformation()
      }
    },
    computed: {
      // 城市列表的长度
      city: function () {
        return this.cityList[this.listIndex]
      },
      listLength: function () {
        if (!this.cityList) {
          return 0
        } else {
          return this.cityList.length
        }
      },
      //动态返回天气图片
      weatherIcon: function () {
        if (!this.weatherInformation) {
          return require('../assets/images/refresh.png')
        } else {
          switch (this.weatherInformation.weather) {
            case 'Sunny':
              return require('../assets/images/sunny.png')
              break;
            case 'Light Rain':
              return require('../assets/images/rain.png')
              break;
            case 'Thundershowers':
              return require('../assets/images/thunderStorm.png')
              break;
            case 'Cloudy':
              return require('../assets/images/cloudy.png')
              break;
            case 'Snow':
              return require('../assets/images/snow.png')
              break;

            default:
              return require('../assets/images/refresh.png')
              break;
          }
        }
      }
    },
    filters: {
      formatTemprature(value) {
        return value + "°"
      }
    },
    methods: {
      changeIndex(index) {
        this.listIndex = index
        this.getWeatherInformation()
      },
      async getWeatherInformation() {
        let cityId = this.city.id
        let result = await this.$axios.get('/apis/getWeatherInformation', {
          params: {
            cityId
          }
        })
        this.weatherInformation = result.data
      },
    }
  }
</script>

<style lang="less">
  .weatherItem {
    width: 100%;
    flex: 1;
    background: url('../assets/images/background.jpg') no-repeat;
    background-position: top left;
    background-size: 100% 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .weatherBox {
      width: 100%;
      padding: 30px 0;

      .cityName {
        width: 100%;
        text-align: center;
        font-size: 24px;
        color: #fff;
      }

      .weatherDetail {
        width: 100%;

        .temperature {
          width: 40%;
          display: flex;
          margin: auto;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          div {
            font-size: 30px;
            color: #fff;
          }
        }

        .weather {
          color: #fff;
          font-size: 36px;
          text-align: center;
        }
      }
    }
  }
</style>