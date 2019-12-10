<template>
<div id="tmi" :class="{show: isShow, hidden: !isShow}">
	tmi
</div>
</template>

<script>
export default {
	name: 'TMI',
	props: {
		show: String
	},
	data() {
		return {
			id: 'tmi',
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