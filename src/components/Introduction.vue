<template>
<div id="intro" :class="{show: isShow, hidden: !isShow}">
	intro
</div>
</template>

<script>
export default {
	name: 'Introduction',
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
			id: 'intro',
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