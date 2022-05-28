<template>
  <div class="main">
    <div class="wrapper">
      <div class="myName" :class="{isShow: myData.showId >= 1}">
        你好! 我是
        <router-link to='/normal/aboutMe'>
          <span>
            {{aboutMe.info.name}}
          </span>
        </router-link>
      </div>
      <div class="work" :class="{isShow: myData.showId >= 2}">
        我的工作是
        <router-link to='/normal/work'>
          {{aboutMe.info.job}}
        </router-link>
      </div>
      <div class="write" :class="{isShow: myData.showId >= 3}">
        我写过点
        <router-link to=''>
          小文章
        </router-link>
      </div>
      <div class="project" :class="{isShow: myData.showId >= 4}">
        也做点自己的
        <router-link to=''>
          小项目
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { reactive } from 'vue'
// 以上引入模块


const store = useStore()
const aboutMe = store.state.aboutMe
const myData = reactive({
  showId: 0
})
// 以上定义数据

setTimeout(function () {
  myData.showId = 1
}, 600)
setTimeout(function () {
  myData.showId = 2
}, 1200)
setTimeout(function () {
  myData.showId = 3
}, 1500)
setTimeout(function () {
  myData.showId = 4
}, 1800);
// 以上定义方法


</script>

<style scoped lang="less">
* {
  box-sizing: border-box;
}
.main {
  width: 100%;
  height: 100vh;
  background-color: #f2f6ed;
  display: flex;
  align-items: center;
  justify-content: end;

  .wrapper {
    width: 70vw;
    font-size: 4vw;
    padding: 5%;
    display: flex;
    flex-direction: column;
    font-family: myFontLight;

    div {
      padding-top: 24px;
      opacity: 0;
      transition: opacity .8s ease-in-out;
      &.isShow { opacity: 1;
      }
      a {
        font-family: myFontBold;
        color: #83837c;
        &:hover {
          color: #08a8e6;
        }
      }
    }
  }
}
</style>





















