<template>
	<view class="chat">
		<lazy webViewUrl="http://localhost:8080/webSocket"></lazy>
	</view>
</template>

<script>
export default {
  name: 'Chat',
};
</script>

<style lang="scss">
.chat {
	
}
</style>
