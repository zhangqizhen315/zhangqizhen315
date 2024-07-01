<template>
  <Navbar />
  <div class="work">
    <div class="wrapper">
      <div class="header" :class="{show : myData.isShow >= 1}">
        <h1>我的项目</h1>
      </div>
      <div class="projects" :class="{show : myData.isShow >=2 }">
        <div 
          class="project"
          v-for="(p, i) in myData.projects"
          :key="i"
        >
          <div class="title">
            {{p.title}}
          </div>
          <div class="banner">
            <img :src="p.img" alt="">
          </div>
          <div class="describe">
            {{p.description}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useStore} from 'vuex'
import {reactive} from 'vue'
import Navbar from './Navbar.vue'
// 以上引入模块


const store = useStore()
const myData = reactive({
  projects: [],
  isShow: 0
})
myData.projects = store.state.aboutMe.projects
// 以上定义数据

setTimeout(function () {
  myData.isShow++
}, 800)
setTimeout(function () {
  myData.isShow++
}, 1600)
// 以上定义方法


</script>

<style scoped lang="less">
@import '../../less/normal.less';
* {
  box-sizing: border-box;
}
.work {
  background-color: @bgcPrim;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: end;
  .wrapper {
    padding: 0 1vw;
    @media screen {
      @media (min-width: 780px) {
        width: 70vw;
      }
      @media (max-width: 780px) {
        margin-top: 10vh;
        width: 98vw;
      }
    }

    .header {
      font-size: 30px;
      height: 5vh;
      margin: 20px 0;
      border-bottom: 1px solid @textPrim;
      text-align: center;
      opacity: 0;
      transition: opacity .8s ease-in-out;
      &.show {
        opacity: 1;
      }
    }
    .projects {
      display: flex;
      flex-wrap: wrap;
      opacity: 0;
      transition: opacity .8s ease-in-out;
      &.show {
        opacity: 1;
      }
      .project {
        position: relative;
        z-index: 1;
        @media screen {
          @media (max-width: 1500px){
            width: 60vw;
          }
          @media (max-width: 780px){
            width: 90vw;
            margin: 30px 0;
          }
        }
        width: 30vw;
        margin: 30px;
        .banner {
          img {
            @media (max-width: 1500px) {
              width: 60vw;
            }
            @media (max-width: 780px) {
              width: 90vw;
              border-radius: 0px
            }
            width: 30vw;
            border-radius: 30px
          }
        }
        .title {
          position: absolute;
          @media screen {
            @media (max-width: 780px){
              position: static;
              border-radius: 30px 30px 0 0;
            }
          }
          top: 0;
          line-height: 60px;
          text-align: center;
          background-color: rgba(0, 0, 0, .5);
          width: 100%;
          border-radius: 30px;
          color: @bgcPrim;
          font-size: 24px;
        }
        .describe {
          position: absolute;
          @media screen {
            @media (max-width: 780px) {
              position: static;
            }
          }
          bottom: 0px;
          width: 100%;
          background-color: rgba(131, 136, 124, .8);
          padding: 30px;
          border-radius: 0 0 30px 30px;
          color: @bgcPrim;
          line-height: 1.5;
          font-size: 18px;
        }

      }
    }
  }
}

</style>




















