<template>
  <div class="navbar" :class="{isShow : myData.isShow}">
    <div class="wrapper">
      <div class="top">
        <div class="logo">
          <router-link to="/normal">
            <img src="../../assets/me.jpg" alt="">
          </router-link>
        </div>
        <div class="navbtn">
          <font-awesome-icon :icon="['fas', 'bars']"  class="bars"  v-if="!myData.showMore" @click="myData.showMore = !myData.showMore"/>
          <font-awesome-icon :icon="['fas', 'xmark']" class="xmark" v-if="myData.showMore"  @click="myData.showMore = !myData.showMore"/>
        </div>
      </div>
      <div class="middle" :class="{showMore : myData.showMore}">
        <div class="describe">
          你好, 我是张启震, 互联网产品经理 / 古希腊哲学爱好者 / 天主教徒
        </div>
        <ul class="nav">
          <li><router-link to="/normal/aboutMe">关于我</router-link></li>
          <li><router-link to="/normal/work">作品集</router-link></li>
          <li><a href="https://zhangqizhen.cn/blog">博客</a></li>
          <li><a href="https://github.com/zhangqizhen315">项目</a></li>
        </ul>
      </div>
      <div class="footer" :class="{showMore : myData.showMore}">
        <div class="project">
          <div class="logo">
            <img src="../../assets/eye.png" alt="">
          </div>
          <div class="describe">
            <p>
              {{myData.project.p1}}
            </p>
            <p>
              {{myData.project.p2}}
              <a :href="myData.project.csszen.r" target="_blank">{{myData.project.csszen.t}}</a>.
            </p>
            <p>
              {{myData.project.p3}}
            </p>
            <div class="btns">
              <button @click="goProject">查看其它样式</button>
              <button @click="goGithub">github</button>
            </div>
          </div>
          <div class="bottom">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
// 以上引入模块


const myData = reactive({
  isShow: false,
  showMore: false,
  project: {}
})
const store = useStore()
const router= useRouter()
myData.project = store.state.project.description
// 以上定义数据

setTimeout(function() {
  myData.isShow = true
}, 1800)
function goProject(  ) {
  router.push('/project')
}
function goGithub(  ) {
  window.location.href="https://github.com/zhangqizhen315"
}
// 以上定义方法


</script>

<style scoped lang="less">
* {
  box-sizing: border-box;
}
.navbar {
  position: fixed;
  z-index: 9;
  opacity: 0;
  transition: opacity .8s ease-in-out;
  &.isShow {
    opacity: 1;
  }
}
.wrapper {
  background-color: #f2f6ed;
  position: absolute;
  font-size: 16px;
  .top {
    font-size: 30px;
  }
  .logo {
    img {
      height: 50px;
      border-radius: 50%;
    }
  }
  .describe {
    color: #83887c;
    font-family: myFontLight;
    text-align: center;
    line-height: 1.5;
  }
  a {
    font-family: myFontBold;
    color: #000;
    text-decoration: none;
    &:hover {
      color: #08a8e6;
    }
  }
  ul {
    padding: 8px;
    li {
      text-align: center;
      padding: 4px;
    }
  }
  .footer {
    .btns {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding:30px;
    }
  }
}

@media screen {
  @media (max-width: 780px) {
    .wrapper {
      width: 100vw;
      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 10vh;
        padding: 0 30px;
      }
      .middle {
        display: none;
        &.showMore {
          height: 30vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: start;
          border-bottom: 1px solid #83887c;
          .describe  {
            width: 80vw;
          }
        }
      }
      .footer {
        display:none;
        &.showMore {
          display:block;
          height: 60vh;
          .project {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            padding: 10px 20px;
            .describe {
              padding: 10px 20px;
              width: 80vw;
            }
          }
        }
      }
    }
  }
  @media (min-width: 780px) {
    .wrapper {
      height: 100vh;
      width: 30vw;
      border-right: 1px solid #83887c;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: 5vh 0;
      .top {
        .logo {
          img {
            height: 100px;
          }
        }
        .navbtn {
          display: none;
        }
      }
      .middle {
        flex:1;
        width: 235px;
      }
      .footer {
        .project {
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 235px;
        }
      }
    }
  }
}
</style>





















