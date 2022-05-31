import project1 from '@/assets/img/project/01-payment.jpg'
import project2 from '@/assets/img/project/02-flh.png'
import project3 from '@/assets/img/project/03-point1.jpg'
import project4 from '@/assets/img/project/04-card.png'
import project5 from '@/assets/img/project/05-hushenhecuang.png'
import project6 from '@/assets/img/project/06-au.png'
import project7 from '@/assets/img/project/07-caimu.png'
import project8 from '@/assets/img/project/08-rongZiPingTai.png'

export default {
  namespaced: true,
  state: {
    // 放数据
    info: {
      name: '张启震',
      gender: '男',
      age: 37,
      descent: '甘肃天水',
      recode: '本科',
      subject: '法学',
      school: '西北师大知行学院',
      family: '已婚',
      sertificate: '高级项目管理师',
      job: '互联网产品经理',
      hobby: '古希腊哲学',
      devotion: '天主教',
      address: {
        city: '无锡',
        street: '惠山区阳光 100 国际新城',
        number: '540-202'
      },
      discribes: {
        less: '互联网产品经理, 哲学爱好者, 天主教徒',
        more: [
          '欢迎来的我的主页. 我是张启震, 一个互联网产品经理, 哲学爱好者, 天主教徒.',
          '我 1985 年出生在甘肃天水, 2005 年就读于西北师大知行学院, 学习法学专业.',
          '2009 年毕业后, 从事过书店店员, 房产经纪人, 艺术品经纪人, 富媒体策划.',
          '2015 年定居无锡后一直从事互联网产品经理.'
        ]
      }
    },
    contact: [
      { title: '电话', value: '13585090883' },
      { title: '邮件', value: 'zhangqizhen315@gmail.com'},
      { title: '住址', value: '无锡市惠山区阳光 100 国际新城 540-202' },
      { title: '主页', value: 'zhangqizhen.cn' }
    ],
    skill: [
      { type: 'prototype', title: '原型工具', content: ['axure', 'figma'] },
      { type: 'process', title: '流程工具', content: ['processOn', 'viso', 'plantUML'] },
      { type: 'documents', title: '文档工具', content: ['ppt', 'excl', 'word'] },
      { type: 'fontend', title: '前端技术', content: ['html', 'css', 'javascript', 'vue'] },
      { type: 'other', title: '其它技术', content: ['git'] }
    ],
    knowledge: [
      'PMP 项目管理框架',
      '价值主张设计',
      '用研方法',
      '面向对象设计(OOAD & UML)',
      '敏捷方法'
    ],
    resume: [
      {
        time: '2021.09 - 至今',
        company: '江苏采木工业互联网科技有限公司',
        job: '产品经理'
      },
      {
        time: '2019.05 - 2021.09',
        company: '无锡华云数据技术服务有限公司',
        job: '产品经理'
      },
      {
        time: '2018.09 - 2019.03',
        company: '创略（上海）数据科技有限公司',
        job: '产品经理'
      },
      {
        time: '2018.03 - 2019.09',
        company: '沪深合创供应链管理公司',
        job: '产品经理'
      },
      {
        time: '2015.03 - 2018.03',
        company: '惠智（深圳）技术有限公司',
        job: '产品经理'
      },
      {
        time: '2012.06 - 2015.03',
        company: '视图腾（北京）科技有限公司',
        job: '富媒体策划'
      }
    ],
    projects: [
      {
        title: '海航采购钱包',
        description: '在海航 SRM 系统 (采购寻源系统) 基础上, 基于区块链实现支付功能. 实现的功能主要包括: 基础支付功能 (充值/提现/转账/支付), 基于支付功能采购风险控制功能 (扣款/冻结/解除/还源), 其他支撑性功能 (权限/职责/审批) 等.',
        img: project1
      },
      {
        title: '海航福利汇系统',
        description: '为海航 20 万员工提供弹性福利系统.',
        img: project2
      },
      {
        title: '海航微积分项目',
        description: '基于区块链技术, 实现积分跨系统交换/支付功能.',
        img: project3
      },
      {
        title: '积分卡券项目',
        description: '参考国处成功的积分运营模式 (drop/points), 结合区块链, 提供高效忠诚度计划与用户引流.',
        img: project4
      },
      {
        title: '海航供应链金融项目',
        description: '基于海航采购钱包项目实现的货款控制功能, 为上下游企业提供供应链金融风险控制.',
        img: project8
      },
      {
        title: '沪深供应链金融项目',
        description: '基于沪深控股集团的线下供应链体系, 实现线上的供应链金融业务. 系统主要业务为: 基础供应及采购业务, 应收账款融资业务.',
        img: project5
      },
      {
        title: '集成电路设计服务平台',
        description: '为集成电路设计企业提供私有云 IT 资源集成管理服务, 通过对私有云子系统的组件化, 配置化集成, 实现 IT 资源的持续集成和管理能力的持续改进.',
        img: project6
      },
      {
        title: '采木资讯供求撮合系统',
        description: '基于木材行业资讯平台提供木材供求撮合业务.',
        img: project7
      }
    ]
  },
  actions: {
    // 放提交动作, 两个参数 context, value. context 是上下方, 其中包含 commit
  },
  mutations: {
    // 修改数据, 两个参数 state, value. state 是本模块的数据
  },
  getters: {
    // 获取数据, 四个参数 state, getter, stateAll, getterAll. state 是当前模块的 state, stateAll 是所有模块的 state. getter 是本模块的所有 getters, getterAll 是所有模块的 getters
  }
}
