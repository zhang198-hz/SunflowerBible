# 网站导航

## 框架

<script setup>
    import {reactive} from 'vue'
    import Card from '../../components/card.vue'
    // 框架
    const frameWork=reactive([{
        id:1001,
        name:'vitePress',
        href:'https://vitepress.dev/zh/',
        image:'https://vitepress.dev/vitepress-logo-mini.png',
        text:'由 Vite 和 Vue 驱动的静态站点生成器'
    },{
        id:1002,
        name:'vue',
        href:'https://cn.vuejs.org/',
        image:'https://vuejs.org/images/logo.png',
        text:'易学易用，性能出色，适用场景丰富的 Web 前端框架。'
    },{
        id:1003,
        name:'uniapp',
        href:'https://uniapp.dcloud.net.cn/',
        image:'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon.png?v=1556263038788',
        text:'使用 Vue.js 开发所有前端应用的框架'
    }])
    // 构建工具
    const buildTools=reactive([{
        id:2001,
        name:'Vite',
        href:'https://cn.vitejs.dev/',
        image:'https://cn.vitejs.dev/logo.svg',
        text:'下一代的前端工具链'
    },{
        id:2002,
        name:'webpack ',
        href:'https://www.webpackjs.com/concepts/',
        image:'https://www.webpackjs.com/favicon.f326220248556af65f41.ico',
        text:'现代 JavaScript 应用程序的 静态模块打包工具。'
    },{
        id:2003,
        name:'rollup',
        href:'https://www.rollupjs.com/',
        image:'https://www.rollupjs.com/img/favicon.png',
        text:'JavaScript 的模块打包工具'
    }])

     // 状态管理
    const stateManagement=reactive([{
        id:8001,
        name:'pinia',
        href:'http://pinia.cc/',
        image:'http://pinia.cc/images/favicon.svg',
        text:'替代Vuex的存储库，它允许您跨组件/页面共享状态。'
    },{
        id:8002,
        name:'vuex',
        href:'https://vuex.vuejs.org/zh/',
        image:'https://vuejs.org/images/logo.png',
        text:'专为 Vue.js 应用程序开发的状态管理模式 + 库'
    }])

    // 仓库
    const warehouse=reactive([{
        id:3001,
        name:'gitee',
        href:'https://gitee.com/',
        image:'https://gitee.com/favicon.ico',
        text:'基于Git的代码托管平台'
    },{
        id:3001,
        name:'github',
        href:'https://github.com/',
        image:'https://github.githubassets.com/favicons/favicon.svg',
        text:'基于Git的代码托管平台'
    },])

    // 自定义UI组件
    const customElement=reactive([{
        id:4001,
        name:'UIverse',
        href:'https://uiverse.io/',
        image:'https://uiverse.io/apple-touch-icon.png',
        text:'任何项目的开源UI元素'
    },{
        id:4002,
        name:'codepen',
        href:'https://codepen.io/',
        image:'https://github.githubassets.com/favicons/favicon.svg',
        text:'基于Git的代码托管平台'
    },{
        id:4003,
        name:'element-plus',
        href:'https://element-plus.org/zh-CN/guide/design.html',
        image:'https://element-plus.org//apple-touch-icon.png',
        text:'基于 Vue 3，面向设计师和开发者的组件库'
    },{
        id:4004,
        name:'Avue',
        href:'https://www.avuejs.com/',
        image:'https://www.avuejs.com/images/logo.png',
        text:'前端搬砖神器,让数据驱动视图,更加贴合企业开发'
    },])
    // 界面设计
    const uiDesign=reactive([{
        id:5001,
        name:'即时设计',
        href:'https://js.design/home',
        image:'https://img.js.design/assets/webImg/favicon.ico',
        text:'可云端编辑的专业级 UI 设计工具'
    },{
        id:5002,
        name:'蓝湖',
        href:'https://lanhuapp.com/',
        image:'https://lanhuapp.com/cms/img/favicon.ico',
        text:'高效的产品设计协作平台'
    },{
        id:5003,
        name:'Pixso',
        href:'https://pixso.cn/',
        image:'https://cms.pixso.cn/images/favicon.ico',
        text:'产品设计协作一体化工具'
    },])
    // 图标
    const iconData=reactive([{
        id:6001,
        name:'iconfont',
        href:'https://www.iconfont.cn/',
        image:'//img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg',
        text:'国内功能很强大且图标内容很丰富的矢量图标库'
    }])
    // 社区资讯
    const communityData=reactive([{
        id:7001,
        name:'稀土掘金',
        href:'https://juejin.cn/',
        image:'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/apple-touch-icon.png',
        text:'面向全球中文开发者的技术内容分享与交流平台。'
    },{
        id:7002,
        name:'知乎',
        href:'https://www.zhihu.com/',
        image:'https://static.zhihu.com/heifetz/assets/apple-touch-icon-152.81060cab.png',
        text:'中文互联网高质量的问答社区和创作者聚集的原创内容平台'
    },])
</script>

<card :dataList="frameWork" />

## 构建工具

<card :dataList="buildTools" />



## 状态管理

<card :dataList="stateManagement" />



## 仓库

<card :dataList="warehouse" />

## 自定义UI

<card :dataList="customElement" />

## 界面设计

<card :dataList="uiDesign" />

## 图标库

<card :dataList="iconData" />

## 社区

<card :dataList="communityData" />