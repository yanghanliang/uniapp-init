<template>
  <view class="chat">
    <view class="chat-title">欢迎您尝试24h!!!</view>
    <view class="chat-content">
      24h为您提供在线聊天的功能 ，与其他聊天软件的区别在于，
      24h比较矫情，规则为当一方发起聊天消息后，在24小时内没有得到答复，
      将自动解除聊天关系，并删除聊天记录，创建者起初将24h时意为：让互相珍惜的人更加珍惜，
      保持联系，让不合适的人缓解尴尬，归还人海。
    </view>
    <view class="chat-content">
      24h是创建者在一个夜黑风高的夜晚，突发奇想的一种尝试，如有不妥之处，还请见谅，
      若您能提供宝贵的意见，由衷感谢！！
    </view>
    <view class="chat-content">
      创建者认为：文字是最能打动人心的一种方式，故此暂不添加发送图片的功能（这并不是创建者比较菜，忽悠大家，嘿嘿！），
      功能持续开发中，请大家尽情期待！
    </view>

    <view class="chat-button" @click="handlerNext">Go</view>
  </view>
</template>

<script>
export default {
  name: 'Synopsis',
  methods: {
	handlerNext() {
		this.$emit('next');
	}
  }
}
</script>

<style lang="scss">
.chat {
  padding: 0 10px;
  .chat-title {
    font-size: $h1;
    color: $color-title
  }

  .chat-content {
    text-indent: 20px;
    color: $color-des;
    line-height: 26px;
    margin-top: 10px;
  }

  .chat-button {
    padding: 10px 15px;
    border: 1px solid #000;
    border-radius: 20px;
    text-align: center;
    width: 80%;
    left: 50%;
    bottom: 15px;
    position: fixed;
    transform: translate(-50%, -50%);
  }
}
</style>