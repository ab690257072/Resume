import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
  portList: [
    {title: '百度下拉列表',url: 'http://52muzi.applinzi.com/Vue/search-list/', shortcut: './src/assets/search-list.png'},
    {title: '企业页面',url: 'http://52muzi.applinzi.com/site/requirejs-site/', shortcut: './src/assets/website.png'},
    {title: '卡片简历',url: 'http://52muzi.applinzi.com/resume/card-resume/', shortcut: './src/assets/card-resume.png'},
    {title: 'datepicker',url: 'http://ocx7m1fc8.bkt.clouddn.com/datepicker/index.html', shortcut: './src/assets/datepicker.png'},
    {title: '移动端新闻站',url: 'http://52muzi.applinzi.com/news-station', shortcut: './src/assets/news-station.png'},
    {title: '轮播组件',url: 'http://ocx7m1fc8.bkt.clouddn.com/carousel/gradient/index.html', shortcut: './src/assets/carousel.png'},
    {title: '瀑布流图片站',url: 'http://ocx7m1fc8.bkt.clouddn.com/pinterest/lazyload-pist/index.html', shortcut: './src/assets/pinterest.png'},
    {title: 'tab筛选产品',url: 'http://ocx7m1fc8.bkt.clouddn.com/tab/tab_product/index.html#', shortcut: './src/assets/product.png'},
    {title: '3D照片墙',url: 'http://52muzi.applinzi.com/3D-gallery/', shortcut: './src/assets/3Dgallery.png'},
    {title: 'todolist',url: 'http://52muzi.applinzi.com/todolist/', shortcut: './src/assets/todolist.png'},
    {title: '表单验证',url: 'http://52muzi.applinzi.com/%E4%BB%BB%E5%8A%A124/task24-3/', shortcut: './src/assets/validation.png'},
    {title: 'H5音乐播放器',url: 'http://52muzi.applinzi.com/zPlayer/', shortcut: './src/assets/music.png'}
  ],
  portMsg: [
    {title: 'Ajax', content: [{url: 'http://52muzi.applinzi.com/%E4%BB%BB%E5%8A%A126/task26-3/', contentTitle: '加载更多'}, {url: 'http://52muzi.applinzi.com/%E4%BB%BB%E5%8A%A124/task24-1/', contentTitle: 'mock数据'}, {url: 'http://52muzi.applinzi.com/%E4%BB%BB%E5%8A%A124/task24-3/', contentTitle: '表单验证'}]},
    {title: 'CSS', content: [{url: 'http://52muzi.applinzi.com/3D-gallery/', contentTitle: '3D照片墙'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/css3/animate/index.html', contentTitle: 'CSS3动画'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/css3/gradient/index.html', contentTitle: 'CSS3渐变'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/css3/loading/index.html', contentTitle: 'loading'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/panel.html', contentTitle: '动态panel'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/css3-circle.html', contentTitle: '动态圆环'}]},
    {title: '多栏布局', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/layout/BFC/index.html', contentTitle: 'BFC布局'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/layout/double/index.html', contentTitle: '两栏布局'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/layout/three/index.html', contentTitle: '三栏布局'}]},
    {title: 'HTML5', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/html5/drag/index.html', contentTitle: '拖拽标签'}, {url: 'http://52muzi.applinzi.com/zPlayer/', contentTitle: 'H5音乐播放器'}]},
    {title: 'JavaScript组件', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/datepicker/index.html', contentTitle: 'datepicker'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/stickup/index.html', contentTitle: 'stickup'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/gotop/index.html', contentTitle: '回到顶部'}]},
    {title: 'tab组件', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/tab/tab_product/index.html#', contentTitle: 'tab切换panel'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/tab/tab-demo/index.html', contentTitle: 'tab组件'}]},
    {title: 'button按钮组件', content: [{url: 'http://52muzi.applinzi.com/button/icon-button/', contentTitle: 'icon按钮'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/button/press-button/index.html', contentTitle: 'press按钮'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/button/css3-button/index.html', contentTitle: '浮字按钮'}, {url: 'http://52muzi.applinzi.com/button/sprite-button/', contentTitle: '雪碧图按钮'}]},
    {title: 'nav导航组件', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/nav/sidebar/index.html', contentTitle: 'sidebar侧边栏导航'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/nav/navbar/index.html', contentTitle: 'navbar下拉导航'}]},
    {title: 'lazyload懒加载组件', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/lazyload/index.html', contentTitle: '图片懒加载'}, {url: 'http://52muzi.applinzi.com/lazyload/', contentTitle: '无限懒加载'}]},
    {title: 'carousel轮播组件', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/carousel/roll/index.html', contentTitle: '滚动轮播'}, {url: 'http://52muzi.applinzi.com/carousel/', contentTitle: '全屏滚动轮播'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/carousel/gradient/index.html', contentTitle: '渐变轮播'}]},
    {title: 'modal模态框组件', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/modal/dialog-demo/index.html', contentTitle: '对话框'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/modal/dialog/index.html', contentTitle: '模态框'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/modal/tips/index.html', contentTitle: '提示框'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/modal/scale-pic/index.html', contentTitle: '图片放大框'}]},
    {title: 'pinterest瀑布流组件', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/pinterest/demo/index.html', contentTitle: '瀑布流demo'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/pinterest/lazyload-pist/index.html', contentTitle: '无限加载瀑布流'}]},
    {title: '原生JS函数库', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/func/Date/index.html', contentTitle: 'Date函数'}, {url: 'http://52muzi.applinzi.com/DOM/', contentTitle: '简单DOM操作'}]},
    {title: 'Vue', content: [{url: 'http://52muzi.applinzi.com/Vue/msg-board/', contentTitle: '简易留言板'}, {url: 'http://52muzi.applinzi.com/Vue/vuex-demo/', contentTitle: 'vuex-demo'}, {url: 'http://52muzi.applinzi.com/Vue/search-list/', contentTitle: '百度下拉列表'}]},
    {title: 'Vue移动端新闻站', content: [{url: 'http://52muzi.applinzi.com/news-station/', contentTitle: 'Vue今日头条'}]},
    {title: '简历页面', content: [{url: 'http://52muzi.applinzi.com/resume/card-resume/', contentTitle: '卡片简历'}, {url: 'http://52muzi.applinzi.com/resume/weibo-resume/', contentTitle: '长微博简历'}]},
    {title: '企业页面', content: [{url: 'http://52muzi.applinzi.com/site/pc-site/', contentTitle: '无响应式静态页面'}, {url: 'http://52muzi.applinzi.com/site/requirejs-site/', contentTitle: 'require模块化页面'}, {url: 'http://52muzi.applinzi.com/site/gulp-site/', contentTitle: 'gulp增强页面'}]}
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
  ],
  skillList: ['Vue.js', 'JS/JQuery', 'Ajax', 'HTML/CSS']
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
  },
  skillList(state) {
    return state.skillList;
  }
};

export default new Vuex.Store({
  state,
  getters
});