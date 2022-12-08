<template>
  <view class="webview">
    123
    <web-view :webview-styles="webviewStyles" :src="jumpUrl"></web-view>
  </view>
</template>

<script>
export default {
  name: 'test',
  props: {
    webViewUrl: {
      type: String,
    }
  },
  data() {
    return {
      webviewStyles: {
        progress: {
          color: '#FF3333',
        },
        width: '500px',
        height: '500px',
      },
    }
  },
  computed: {
    jumpUrl() {
      return this.webViewUrl || this.params?.webViewUrl || '';
    }
  },
}
</script>

<style>
</style>