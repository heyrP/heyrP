<template>
<div id="port" :class="{show: isShow, hidden: !isShow}">
	portfolio
</div>
</template>

<script>
export default {
	name: 'Portfolio',
	props: {
		show: {
			type: String,
			default() {
				return 'info'
			}
		}
	},
	data() {
		return {
			id: 'port',
			isShow: false
		}
	},
	watch: {
		show: function(){
			if(this.id == this.show){
				this.isShow = true
			}else{
				this.isShow = false
			}
		}
	},
	methods: {
	}
}
</script>

<style>
</style>