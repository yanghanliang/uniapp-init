<template>
  <view class="content">
    <view class="nav">
      <view class="nav-item" v-for="(item, index) in navList" :key="index" @click="handlerClick(item)">
        {{ item.title }}
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {
      navList: [
        {
          title: 'blog',
          url: '/pages/webView/webView',
          params: {
            webViewUrl: 'https://www.baidu.com'
          }
        },
        {
          title: '24h',
          url: '/pages/makeFriends/index',
          params: {
            componentName: 'synopsis'
          }
        },
        {
          title: 'openInfo',
          url: '',
        },
        {
          title: 'develop',
          url: '',
        },
      ],
    }
  },
  methods: {
    handlerClick({ url, params }) {
      uni.navigateTo({
        url: `${url}${uni.$u.queryParams(params)}`
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  font-size: 100px;
  .nav {
    width: 80%;
    height: 80%;
    top: 50%;
    left: 50%;
    display: flex;
    flex-flow: wrap;
    position: absolute;
    align-items: center;
    border: 5px solid #478e9d;
    justify-content: space-between;
    transform: translate(-50%, -50%);
    box-shadow: 0px 1px 20px 19px #8eb3b3ba;
    background: linear-gradient(40deg, rgb(65, 26, 208), rgb(127, 74, 85));
    .nav-item {
      width: 50%;
      height: 50%;
      font-size: $h1;
      line-height: 100%;
      color: #000;
      display: flex;
      align-items: center;
      font-weight: bold;
      justify-content: center;

      &:nth-child(2) {
        border-left: 1px dashed #f13c3c;
        border-bottom: 1px dashed #f13c3c;

        @keyframes Effect1 {
          0% {
            border-color: red;
          }

          50% {
            border-color: #fff;
          }

          100% {
            border-color: blue;
          }
        }

        animation-name: Effect1;
        animation-duration: 5s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-direction: reverse;
      }

      &:nth-child(3) {
        border-radius: 20px;
        border-top: 1px solid #fff;
        border-right: 1px solid #fff;
      }
    }
  }
}
</style>
