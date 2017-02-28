import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
  portList: [
    {title: '百度下拉列表', intro: '基于 Vue 1.0 的百度下拉列表，有下拉提示列表功能，和上下键选择功能，回车键可以进行搜索',url: 'http://52muzi.applinzi.com/Vue/search-list/', shortcut: './src/assets/search-list.png'},
    {title: 'todolist', intro: '基于 Vue 2.0 的 todolist，leancloud 实现注册登录和存储用户数据的功能，todolist 有删除和已完成的选项', url: 'http://52muzi.applinzi.com/todolist/', shortcut: './src/assets/todolist.jpg'},
    {title: '轮播组件', intro: '用 jQuery 和 JS 原型构造函数模式封装了一套轮播组件，包括滚动轮播、全屏滚动轮播、渐变轮播等', url: 'http://52muzi.applinzi.com/Carousel-com/', shortcut: './src/assets/carousel.jpg'},
    {title: '移动端新闻站', intro: '基于 Vue2.0，结构分为 Nav、Footer、Home 等主板块，axios 进行数据交互并配置了 loading 效果', url: 'http://52muzi.applinzi.com/news-station', shortcut: './src/assets/news-station.png'},
    {title: 'HTML 5 音乐播放器', intro: '使用 HTML 5 的 audio 标签实现的 FM 音乐播放器，有开始、暂停、音量调节、歌曲进度功能，用数组保存上一首歌曲，但最多只保存一首', url: 'http://52muzi.applinzi.com/zPlayer/', shortcut: './src/assets/music.png'},
    {title: '瀑布流图片站', intro: '用 jQuery 的 ajax 方法和新浪相册 api 得到数据，拼装 DOM 并展示，通过懒加载监听 scroll 事件，实现无限懒加载的效果', url: 'http://52muzi.applinzi.com/Pinterest-com/', shortcut: './src/assets/pinterest.png'},
    {title: '企业页面', intro: '使用 RequireJS 模块化和 Gulp 打包的企业站页面，组件包括有:轮播、回到顶部、懒加载瀑布流、曝光组件等', url: 'http://52muzi.applinzi.com/site/requirejs-site/', shortcut: './src/assets/website.png'},
    {title: 'datepicker', intro: '使用 JS 原型和构造函数模式，通过 DOM 拼装和点击事件处理，封装成一个 datepicker，能够选择和查看日期', url: 'http://52muzi.applinzi.com/datepicker/', shortcut: './src/assets/datepicker.png'},
    {title: '3D 照片墙', intro: '通过 CSS 3 的 transition 和 transform 等属性，实现一个 3D 照片圆环，监听 mousemove 事件从而能够自由旋转圆环', url: 'http://52muzi.applinzi.com/3D-gallery/', shortcut: './src/assets/3Dgallery.png'},
    {title: '卡片简历', intro: '简单的卡片式简历，作品以卡片形式展现，简洁大方', url: 'http://52muzi.applinzi.com/resume/card-resume/', shortcut: './src/assets/card-resume.png'}
  ],
  portMsg: [
    {title: 'Ajax', content: [{url: 'http://52muzi.applinzi.com/%E4%BB%BB%E5%8A%A126/task26-3/', contentTitle: '加载更多'}, {url: 'http://52muzi.applinzi.com/%E4%BB%BB%E5%8A%A124/task24-1/', contentTitle: 'mock 数据'}, {url: 'http://52muzi.applinzi.com/%E4%BB%BB%E5%8A%A124/task24-3/', contentTitle: '表单验证'}]},
    {title: 'CSS', content: [{url: 'http://52muzi.applinzi.com/3D-gallery/', contentTitle: '3D 照片墙'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/css3/animate/index.html', contentTitle: 'CSS 3 动画'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/css3/gradient/index.html', contentTitle: 'CSS 3 渐变'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/css3/loading/index.html', contentTitle: 'loading'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/panel.html', contentTitle: '动态 panel'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/css3-circle.html', contentTitle: '动态圆环'}]},
    {title: '多栏布局', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/layout/BFC/index.html', contentTitle: 'BFC 布局'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/layout/double/index.html', contentTitle: '两栏布局'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/layout/three/index.html', contentTitle: '三栏布局'}]},
    {title: 'HTML 5', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/html5/drag/index.html', contentTitle: '拖拽标签'}, {url: 'http://52muzi.applinzi.com/zPlayer/', contentTitle: 'HTML 5 音乐播放器'}]},
    {title: 'JavaScript 组件', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/datepicker/index.html', contentTitle: 'datepicker'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/stickup/index.html', contentTitle: 'stickup'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/gotop/index.html', contentTitle: '回到顶部'}]},
    {title: 'tab 组件', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/tab/tab_product/index.html#', contentTitle: 'tab 切换 panel'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/tab/tab-demo/index.html', contentTitle: 'tab 组件'}]},
    {title: 'button 按钮组件', content: [{url: 'http://52muzi.applinzi.com/button/icon-button/', contentTitle: 'icon 按钮'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/button/press-button/index.html', contentTitle: 'press 按钮'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/button/css3-button/index.html', contentTitle: '浮字按钮'}, {url: 'http://52muzi.applinzi.com/button/sprite-button/', contentTitle: '雪碧图按钮'}]},
    {title: 'nav 导航组件', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/nav/sidebar/index.html', contentTitle: 'sidebar 侧边栏导航'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/nav/navbar/index.html', contentTitle: 'navbar 下拉导航'}]},
    {title: 'lazyload 懒加载组件', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/lazyload/index.html', contentTitle: '图片懒加载'}, {url: 'http://52muzi.applinzi.com/lazyload/', contentTitle: '无限懒加载'}]},
    {title: 'carousel 轮播组件', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/carousel/roll/index.html', contentTitle: '滚动轮播'}, {url: 'http://52muzi.applinzi.com/carousel/', contentTitle: '全屏滚动轮播'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/carousel/gradient/index.html', contentTitle: '渐变轮播'}]},
    {title: 'modal 模态框组件', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/modal/dialog-demo/index.html', contentTitle: '对话框'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/modal/dialog/index.html', contentTitle: '模态框'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/modal/tips/index.html', contentTitle: '提示框'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/modal/scale-pic/index.html', contentTitle: '图片放大框'}]},
    {title: 'pinterest 瀑布流组件', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/pinterest/demo/index.html', contentTitle: '瀑布流 demo'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/pinterest/lazyload-pist/index.html', contentTitle: '无限加载瀑布流'}]},
    {title: '原生 JS 函数库', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/func/Date/index.html', contentTitle: 'Date函数'}, {url: 'http://52muzi.applinzi.com/DOM/', contentTitle: '简单 DOM 操作'}]},
    {title: 'Vue.js', content: [{url: 'http://52muzi.applinzi.com/Vue/msg-board/', contentTitle: '简易留言板'}, {url: 'http://52muzi.applinzi.com/Vue/vuex-demo/', contentTitle: 'vuex-demo'}, {url: 'http://52muzi.applinzi.com/Vue/search-list/', contentTitle: '百度下拉列表'}]},
    {title: 'Vue 移动端新闻站', content: [{url: 'http://52muzi.applinzi.com/news-station/', contentTitle: 'Vue 今日头条'}]},
    {title: '简历页面', content: [{url: 'http://52muzi.applinzi.com/resume/card-resume/', contentTitle: '卡片简历'}, {url: 'http://52muzi.applinzi.com/resume/weibo-resume/', contentTitle: '长微博简历'}]},
    {title: '企业页面', content: [{url: 'http://52muzi.applinzi.com/site/pc-site/', contentTitle: '无响应式静态页面'}, {url: 'http://52muzi.applinzi.com/site/requirejs-site/', contentTitle: 'RequireJS 模块化页面'}, {url: 'http://52muzi.applinzi.com/site/gulp-site/', contentTitle: 'Gulp 增强页面'}]}
  ],
  blogList: [{
    title: '负边距 & 三栏布局',
    url: 'http://blog.leanote.com/post/690257072@qq.com/%E8%B4%9F%E8%BE%B9%E8%B7%9D%E3%80%81%E4%B8%89%E6%A0%8F%E5%B8%83%E5%B1%80'
    },
    {
      title: 'JS——继承',
      url: 'http://blog.leanote.com/post/690257072@qq.com/JS%E2%80%94%E2%80%94%E7%BB%A7%E6%89%BF'
    },
    {
      title: '同源策略、跨域、jsonp',
      url: 'http://blog.leanote.com/post/690257072@qq.com/%E5%90%8C%E6%BA%90%E7%AD%96%E7%95%A5%E3%80%81%E8%B7%A8%E5%9F%9F%E3%80%81jsonp'
    },
    {
      title: '浏览器兼容',
      url: 'http://blog.leanote.com/post/690257072@qq.com/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9'
    }
  ]
};
const getters = {
  portList(state) {
    return state.portList;
  },
  portMsg(state) {
    return state.portMsg;
  },
  blogList(state) {
    return state.blogList;
  }
};

export default new Vuex.Store({
  state,
  getters
});