<template>
  <div class="project">
    <div class="wrapper">
      <div class="header">
        <div class="logo">
          <img :src="store.state.avatar" alt=""/>
        </div>
        <div class="description">
          这是一个用于学习 vue 的小项目. 项目的灵感来源于 <a href="http://www.csszengarden.com/tr/zh-cn/" target="_blank">css禅意花园</a>. 这个项目是通过不同的 vue 组件, 将同一套个人信息展示为不同样式. 以此来练习前端技术. 如果对该项目有更多的兴趣, 可以 <a href="https://github.com/zhangqizhen315/zhangqizhen315" target="_blank">访问该项目的 github </a> .
        </div>
      </div>
      <div class="main">
        <div class="wrapper">
          <div 
            class="project"
            v-for="(p, i) in myData.projects"
            :key="i"
          >
            <router-link :to="p.router">
              <div class="title">{{p.title}}</div>
              <div class="thumbnail">
                <img :src="p.imgUrl" alt=""/>
              </div>
              <div class="description">
                {{p.description}}
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="footer">
      
     </div>
    </div>
  </div>
</template>

<script setup>
import {reactive} from 'vue'
import {useStore} from 'vuex'
// 以上引入模块


const myData = reactive({
  projects : [],
  
})
const store = useStore()
myData.projects = store.state.project.projects
console.log(store.state.project.projects);
// 以上定义数据


// 以上定义方法


</script>

<style scoped lang="less">
* {
  box-sizing: border-box;
  a {
    color: #000;
    text-decoration: none;
    font-weight: 900;
    &:hover {
      text-decoration: underline;
    }
  }
}
.project {
  width: 100%;
  height: 100%;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .header {
        width: 80vw;
      .logo {
        padding: 50px;
        margin: 0 auto;
        text-align: center;
        border-bottom: 2px solid #000;
        img {
          width: 100px;
          border-radius: 50%;
        }
      }
      .description {
        line-height: 30px;
      }
    }
    .main {
      margin: 20px;
      .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 20vw);
        grid-gap: 5vw;
        .project {
          .title {
            font-size: 30px;
            text-align: center;
            line-height: 50px
          }
          .thumbnail {
            img {
            width: 100%; 
            }
          }
          .description {
            font-size: 18px;
            line-height: 1.5;
          }
        }
      }
    }
  }
}
</style>





















