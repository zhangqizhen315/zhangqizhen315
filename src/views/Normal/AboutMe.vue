<template>
  <Navbar />
  <div class="aboutMe" >
    <div class="wrapper">
      <div 
        class="header"
        :class="{show : myData.isShow >= 1}"
      >
        <h2>
          <span>你好, 我是张启震</span>,
          一个{{myData.info.discribes.less}}
        </h2>
      </div>
      <div 
        class="banner"
        :class="{show: myData.isShow >= 2}"
      >
        <img :src="store.state.myHome1" alt="">
      </div>
      <div 
        class="main"
        :class="{show: myData.isShow >= 3}"
      >
        <div class="describe">
          <p
            v-for="(d, i) in myData.info.discribes.more"
            :key="i"
          >
            {{d}}
          </p>
        </div>
        <div class="work">
          <h3>工作经历</h3>
          <ul class="resume">
            <li
              v-for="(r, i) in myData.resume"
              :key="i"
            >
              <span>{{r.time}}</span>
              <span>{{r.company}}</span>
              <span>{{r.job}}</span>
            </li>
          </ul>
        </div>
        <div class="skill">
          <h3>技能</h3>
          <p class="descrieb">

          </p>
          <ul class="skill">
            <li
              v-for="(s, i) in myData.skill"
              :key="i"
            >
              <span>{{s.title}}</span>
              <ul class="content">
                <li
                  v-for="(c, i) in s.content"
                  :key="i"
                >
                  {{c}}
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="knowledge">
          <h3>知识体系</h3>
          <ul>
            <li
              v-for="(k, i) in myData.knowledge"
              :key="i"
            >
              {{k}}
            </li>
          </ul>
        </div>
      </div>
      <div 
        class="aside"
        :class="{show: myData.isShow >= 4}"
      >
        <ul class="base">
          <h3>基础信息</h3>
          <li>
            <span>姓名</span>
            <span>{{myData.info.name}}</span>
          </li>
          <li>
            <span>性别</span>
            <span>{{myData.info.gender}}</span>
          </li>
          <li>
            <span>年龄</span>
            <span>{{myData.info.age}}</span>
          </li>
          <li>
            <span>毕业学校</span>
            <span>{{myData.info.school}}</span>
          </li>
          <li>
            <span>学历</span>
            <span>{{myData.info.recode}}</span>
          </li>
          <li>
            <span>专业</span>
            <span>{{myData.info.subject}}</span>
          </li>
          <li>
            <span>出生地</span>
            <span>{{myData.info.descent}}</span>
          </li>
          <li>
            <span>现居地</span>
            <span>{{myData.info.address.city}}</span>
          </li>
          <li>
            <span>家庭</span>
            <span>{{myData.info.family}}</span>
          </li>
        </ul>
        <ul class="contact">
          <h3>联系方式</h3>
          <li
            v-for="(c, i) in myData.contact"
            :key="i"
          >
            <span>{{c.title}}: </span>
            <span>{{c.value}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive} from 'vue'
import {useStore} from 'vuex'
import Navbar from './Navbar.vue'
// 以上引入模块

const myData = reactive({
  info: {},
  discribes: {},
  contact: [],
  resume: [],
  skill: [],
  knowledge: [],
  isShow: 0
})

const store = useStore()
myData.info = store.state.aboutMe.info
myData.discribes = store.state.aboutMe.discribes
myData.contact = store.state.aboutMe.contact
myData.resume = store.state.aboutMe.resume
myData.skill = store.state.aboutMe.skill
myData.knowledge = store.state.aboutMe.knowledge
// 以上定义数据

setTimeout(function () {
  myData.isShow++
}, 600)
setTimeout(function () {
  myData.isShow++
}, 900)
setTimeout(function () {
  myData.isShow++
}, 1200)
setTimeout(function () {
  myData.isShow++
}, 1800)
// 以上定义方法
</script>

<style scoped lang="less">
@import "../../less/normal.less";
* {
  box-sizing: border-box;
}
h3 {
  font-size: 24px;
  padding-top: 24px;
}
.aboutMe {
  background-color: @bgcPrim;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: end;
  .wrapper {
    @media screen {
      @media (min-width: 780px) {
        width: 70vw;
        padding-left: 4vw;
      }
      @media (max-width: 780px) {
        width: 100vw;
        padding: 0 2vw;
        margin-top: 10vh;
      }
    }
    .header {
      padding: 4vh 0;
      padding-right: 2vw;
      font-size: 30px;
      line-height: 1.5;
      opacity: 0;
      transition: opacity .8s ease-in-out;
      &.show{
        opacity: 1;
      }
    }
    .banner {
      opacity: 0;
      transition: opacity .8s ease-in-out;
      &.show{
        opacity: 1;
      }
      @media screen {
        @media (min-width: 780px){
          @bannerWidth: 60vw;
          @bannerHeight: @bannerWidth * 0.4;
          width: @bannerWidth;
          height: @bannerHeight;
          overflow: hidden;
          img {
            margin-top:-40%;
            width: 60vw;
          }
        }
        @media (max-width: 780px){
          @bannerWidth: 90vw;
          @bannerHeight: @bannerWidth * 0.4;
          width: @bannerWidth;
          height: @bannerHeight;
          overflow: hidden;
          img {
            margin-top:-40%;
            width: 90vw;
          }
        }
      }
    }
    .main {
      opacity: 0;
      transition: opacity .8s ease-in-out;
      &.show{
        opacity: 1;
      }
      @media screen {
        @media (min-width: 1200px){
          width: 50%;
          float: left;
          margin-right: 10px;

        }
        @media (min-width: 780px){
        }
      }
      .describe {
        font-size: 18px;
        line-height: 1.5;
        padding: 5px 0;
      }
      .work {
        ul {
          padding:12px 0;
          li{
            display: flex;
            flex-direction: column;
            font-size: 18px;
            line-height: 1.2;
            span {
              &:first-of-type{
                padding-top: 8px;
                background-color: @textPrim;
                color: @bgcPrim;
                margin: 5px 0;
                line-height: 2;
              }
              &:not(:first-of-type) {
                padding: 0 20px;
                border-left: 10px solid @textHover;
              }
            }
          }
        }
      }
      .skill {
        .skill {
          margin-top:24px;
          display: flex;
          justify-content: space-between;
          align-items: start;
          flex-wrap: wrap;
          li{
            width:50%;
            padding-right:10px;
            text-align: center;
            span {
              display: block;
              font-size: 20px;
              line-height:  2.5;
              background-color: @textPrim;
              color: @bgcPrim;
              border-radius: 8px;
            }

            ul {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              align-items: center;
              li {
                font-size: 16px;
                line-height: 1.5;
                padding: 8px 8px;
                text-align: center;
                background-color: @textHover;
                color: #fff;
                flex-basis: content;
                margin: 5px 2px;
                border-radius: 8px;
              }
            }
          }
        }
      }
      .knowledge {
        ul {
          margin: 10px 0;
          display: flex;
          flex-wrap: wrap;
          li {
            font-size: 16px;
            line-height: 1.5;
            padding: 8px 8px;
            border-radius: 8px;
            background-color: @textHover;
            color: #fff;
            margin:5px 5px;
          }
        }
      }
    }
    .aside {
      opacity: 0;
      transition: opacity .8s ease-in-out;
      &.show{
        opacity:1;
      }
      @media screen {
        @media (min-width: 1200px){
          position: sticky;
        }
      }
      font-size: 16px;
      float: left;
      top: 10px;
      .base {
        h3{
          margin-bottom: 20px;
        }
        li{
          line-height: 1.5;
          display: flex;
          align-items: center;
          border-bottom: 1px solid @textPrim;
          span {
            padding: 4px;
            &:first-of-type {
              width: 100px;
            }
          }
        }
      }
      .contact {
        h3 {
          margin-bottom: 20px;
        }
        li{
          line-height: 1.5;
          display: flex;
          align-items: center;
          border-bottom: 1px solid @textPrim;
          span {
            padding: 4px;
            &:first-of-type {
              width: 100px;
            }
          }
        }
      }
    }
  }
}
</style>



















