<template>
  <div id="nav-bar" :class="toggleNav">
    <div class="container clearfix">
      <div class="logo">
        <a href="#"><img :src="logoImg" alt="logo"></a>     
      </div>
      <div class="nav-main-ms">
        <i class="iconfont icon-listzhuanhuan"></i>
        <ul class="nav-child">
          <li>
            <router-link to="/home">HOME</router-link>
          </li>
          <li>
            <router-link to="/portfolio">PORTFOLIO</router-link>
          </li>
          <li v-for="item in navList"><a :href="item.url" target="_blank">{{item.title}}</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
        <ul class="nav-main clearfix">
          <li>
            <router-link to="/home">HOME</router-link>
          </li>
          <li>
            <router-link to="/portfolio">PORTFOLIO</router-link>
          </li>
          <li v-for="item in navList"><a :href="item.url" target="_blank">{{item.title}}</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        show: true,
        show2: false,
        logoImg: './src/assets/logo.png',
        navList: [{
            title: 'RESUME',
            url: 'src/assets/赵力群-前端工程师.pdf'
          },
          {
            title: 'BLOG',
            url: 'http://blog.leanote.com/690257072@qq.com'
          }
        ]
      }
    },
    computed: {
      toggleNav: function() {
        return {
          'nav-bar-collapse': this.show
        }
      }
    },
    mounted() {
      var _this = this;
      window.addEventListener('scroll', function() {
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        if(top != 0) {
          _this.show = false;
        } else {
          _this.show = true;
        }
      })
    }
  }
</script>