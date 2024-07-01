<template>
  <div class="home">
    <div class="wrapper">
      <div class="hello outside">
        <div class="wrapper">
          <div class="logo">
            <img :src="store.state.avatar" alt="">
          </div>
          <p>
            你好, 我是<span class="name">{{myData.info.name}}</span>. 一个{{myData.info.discribes.less}}
          </p>
          <p>
            欢迎来到我的主页. 在这里你可以看到我的经历, 作品集和博客.
          </p>
          <p>
            <a href="mailto:zhangqizhen315@gmail.com" target="_blank">通过邮件联系我</a>, 或者继续向下看.
          </p>
          <div class="links">
            <a :href="myData.links.write" target="_blank">
              <font-awesome-icon :icon="['fas', 'blog']" />
            </a>
            <a :href="myData.links.project" target="_blank">
              <font-awesome-icon :icon="['fas', 'code-branch']" />
            </a>
          </div>
        </div>
      </div>
      <div class="aboutMe outside">
        <div class="wrapper">
          <div class="icon">
            <font-awesome-icon :icon="['fas', 'user-tie']" />
          </div>
          <h3>关于我</h3>
          <p>
            这是关于我的简单介绍.
          </p>
          <div class="content">
            <p
              v-for="(d, i) in myData.info.discribes.more"
              :key="i"
            >
              {{d}}
            </p>
          </div>
        </div>
      </div>
      <div class="resumes outside">
        <div class="wrapper">
          <div class="icon">
            <font-awesome-icon :icon="['fas', 'briefcase']" />
          </div>
          <h3>工作经历</h3>
          <div class="content">
            <div 
              class="resume"
              v-for="(r, i) in myData.resume"
              :key="i"
            >
              <span class="time">{{r.time}}</span>
              <span class="company">{{r.company}}</span>
              <span class="job">{{r.job}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="projects outside">
        <div class="wrapper">
          <div class="icon">
            <font-awesome-icon :icon="['fas', 'jet-fighter-up']"/>
          </div>
          <h3>项目经历</h3>
          <div class="content">
            <div
              class="project"
              v-for="(p, i) in myData.projects"
              :key="i"
            >
              <span class="title">{{p.title}}</span>
              <span class="description">{{p.description}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="skills outside">
        <div class="wrapper">
          <div class="icon">
            <font-awesome-icon :icon="['fas', 'bars']"/>
          </div>
          <h3>我的技能</h3>
          <div class="content">
            <div
              class="skill"
              v-for="(s, i) in myData.skills"
              :key="i"
            >
              <div class="title">{{s.title}}</div>
              <div class="contents">
                <div class="content"
                  v-for="(c, i) in s.content"
                  :key="i"
                >
                  {{c}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="knowledges outside">
        <div class="wrapper">
          <div class="icon">
            <font-awesome-icon :icon="['fas', 'book']"/>
          </div>
          <h3>专业知识</h3>
          <div class="content">
            <div
              class="knowledge"
              v-for="(k, i) in myData.knowledges"
              :key="i"
            >
              {{k}}
            </div>
          </div>
        </div>
      </div>
      <div class="contacts outside">
        <div class="wrapper">
          <div class="icon">
            <font-awesome-icon :icon="['fas', 'envelope']"/>
          </div>
          <h3>联系方式</h3>
          <div class="content">
            <div 
              class="contact"
              v-for="(c, i) in myData.contacts"
              :key="i"
            >
              <div class="title">{{c.title}}</div>
              <div class="value">{{c.value}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="wrapper">
          {{myData.footer.p1}} {{myData.footer.p2}} <a :href="myData.footer.csszen.r" target="_blank">{{myData.footer.csszen.t}}</a>. {{myData.footer.p3}}
          <div class="btns">
            <button @click="goProject">更多样式</button>
            <button @click="goGithub">github</button>
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
  info : {},
  resume: {},
  projects: {},
  skills: {},
  knowledges: {},
  contacts: {},
  links: {},
  footer: {}
  
})
const store = useStore()
myData.info = store.state.aboutMe.info
myData.resume = store.state.aboutMe.resume
myData.projects = store.state.aboutMe.projects
myData.skills = store.state.aboutMe.skill
myData.knowledges = store.state.aboutMe.knowledge
myData.contacts = store.state.aboutMe.contact
myData.links = store.state.aboutMe.links
myData.footer = store.state.project.description
const router= useRouter()
// 以上定义数据

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
.home {
  .wrapper {
    .outside {
      width: 100%;
      height: 100vh;
      @media screen {
        @media (max-width: 780px) {
          height: 100%;
        }
      }
      display: flex;
      align-items: center;
      justify-content: start;
      .wrapper {
        background-color: #fff;
        margin: 0 125px;
        position: relative;
        padding: 40px;
        font-size: 24px;
        line-height: 1.5;
        letter-spacing: 3px;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, .5);
        border-left: 50px solid #eeeeee;
        @media screen {
          @media (max-width: 780px){
            font-size: 18px;
            padding: 20px 20px;
            margin: 20px 20px;
          }
        }
        .icon {
          width: 80px;
          height: 80px;
          background-color: #eb613d;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 40px;
          border-radius: 50%;
          position: absolute;
          top: 50px;
          left: 0;
          transform: translateX(-100%);
          @media screen {
            @media (max-width: 780px){
              display: none;
            }
          }

        }
        p {
          font-size: 18px;
          padding-left: 25px;
        }
        .content {
          display: flex;
          flex-wrap: wrap;
          @media screen {
            @media (max-width: 780px){
              flex-direction: column;
              flex-wrap: nowrap;
            }
          }
          p,
          div {
            padding: 25px;
            font-size: 14px;
            width: 50%;
            @media screen {
              @media (max-width: 780px){
                width: 100%;
              }
            }
            display: flex;
            flex-direction: column;
            span:first-of-type{
              font-size:18px
            }
          }
        }
        h3 {
          padding-left: 25px;
          font-size: 50px;
        }
      }
    }
    .hello {
      background-image: url('../../assets/img/card/bg_01.png');
      .wrapper {
        padding: 80px;
        border: none;
        @media screen {
          @media (max-width: 780px){
            font-size: 18px;
            padding: 60px 20px 20px;
            margin: 80px 20px 20px;
          }
        }
        p {
          font-size: 30px;
          line-height: 1.5;
          letter-spacing: 3px;
          padding: 25px;
        }
        img {
          width: 120px;
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          margin: auto;
          transform: translateY( -50% );
          box-shadow: 5px 5px 10px rgba(0, 0, 0, .5);
        }
        .links {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center; 
          a {
            display: block;
            width: 60px;
            height: 60px;
            font-size: 30px;
            line-height: 60px;
            background-color: #000;
            color: #fff;
            text-align: center;
            border-radius: 50%;
            margin:0 20px;
            &:hover {
              background-color: #eb613e;
            }
          }
        }
        a {
          text-decoration: none;
          color: #eb613e;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .aboutMe {
      background-image: url('../../assets/img/card/bg_02.png');
    }
    .resumes {
      background-image: url('../../assets/img/card/bg_03.png');
    }
    .projects {
      background-image: url('../../assets/img/card/bg_04.png');
    }
    .outside.skills {
      background-image: url('../../assets/img/card/bg_05.png');
      .wrapper {
        .content{
          .skill {
            padding: 0 20px;
            .title {
              border-bottom: 3px solid #eeeeee;

            }
            .contents {
              width: 100%;
              flex-direction: row;              
              padding: 0;
              flex-wrap: wrap;
              div {
                flex:1;
                width: 100%;
                padding: 10px;
                margin: 10px;
                align-items: center;
                background-color: #e8c8ed;
                border-radius: 100px;
              }
            }
          }
        }
      }
    }
    .knowledges {
      background-image: url('../../assets/img/card/bg_06.png');
    }
    .contacts {
      background-image: url('../../assets/img/card/bg_07.png');
      .wrapper {
        @media screen {
          @media (max-width: 780px) {
            padding: 0;
          }
        }
        .contact {
          padding: 0;
          .value {
            padding: 0;
          }
          @media screen {
            @media (max-width: 780px) {
              padding: 0;

            }
          }
        }
      }
    }
    .footer {
      background-color: #000;
      color: #fff;
      line-height:1.5;
      font-size:18px;
      .wrapper {
        width: 90vw;
        margin: 0 auto;
        a {
          color: #fff;
          text-decoration: none;
        
        }
        .btns {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
      }

    }
  }
}
</style>





















