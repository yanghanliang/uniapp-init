<template>
  <view>
    <!-- <component :is="componentName"></component> -->
	<synopsis @next="handleStatusChange" v-if="status === 'synopsis'" />
	<chat v-if="status === 'chat'" />
  </view>
</template>

<script>
import Synopsis from './components/synopsis'
import Chat from './components/chat'
export default {
  name: 'makeFriends',
  components: {
	Chat,
    Synopsis,
  },
  computed: {
    componentName() {
      return this.params?.componentName || ''
    }
  },
  data() {
    return {
		status: 'synopsis',
    }
  },
  methods: {
	handleStatusChange() {
		this.status = 'chat'
	},
  },
}
</script>

<style>

</style>