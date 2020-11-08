<template>
    <div class="swiper">
        <div class="arrow left" @click="prev">
            <img src="../assets/images/leftArrow.png" alt="">
        </div>
        <div class="container">
            <slot name="container"></slot>
        </div>
        <div class="arrow right" @click="next">
            <img src="../assets/images/rightArrow.png" alt="">
        </div>
    </div>
</template>

<script>
  import {
    _throttle
  } from '@/utils/index.js'
    export default {
        name: 'Swiper',
        props:{
            listLength: Number,
            listIndex: Number
        },
        methods: {
            //切换城市,做函数节流处理
            prev: _throttle(function () {
                let index = this.listIndex
                let length = this.listLength
                index = index <= 0 ? length - 1 : --index
                this.$emit('changeCity',index)
            }, 500),
            next: _throttle(function () {
                let index = this.listIndex
                let length = this.listLength
                index = index >= length - 1 ? 0 : ++index
                this.$emit('changeCity',index)
            }, 500),
        }
    }
</script>

<style lang='less'>
    .swiper {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin-top: 30px;

        .arrow {
            width: 100px;

            img {
                width: 100%;
            }
        }

        .container {
            text-align: center;

            img {
                width: 160px;
                height: 160px;
            }
        }
    }
</style>