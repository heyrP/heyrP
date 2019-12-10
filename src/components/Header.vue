<template>
<div id="header">
	<nav class="navbar navbar-default navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">heyrP</a>
			</div>
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<head-list :show="show" v-on:changeContent="changeContent"/>
			</div>
		</div>
	</nav>
</div>
</template>

<script>
var headList = {
	template: `<ul class="nav navbar-nav navbar-right">
					<li v-for="(item, index) in navList" :class="{active: item.isActive}">
						<a href="#" @click="changeView(index)">{{item.value}}</a>
					</li>
				</ul>`,
	props: {
		show: String
	},
	data: function(){
		return {
			navList: navList
		}
	},
	watch: {
		show: function(){
			for(var i=0; i<this.navList.length; i++){
				if(this.show == this.navList[i].key){
					this.navList[i].isActive = true
				}else{
					this.navList[i].isActive = false
				}
			}
		}
	},
	methods: {
		changeView: function(index){
			// for(var i=0; i<this.navList.length; i++){
			// 	this.navList[i].isActive = false;
			// }
			// this.navList[index].isActive = true;
			this.$emit("changeContent", this.navList[index].key);
		}
	}
}

var navList = [
	{key: 'info',	value: 'Information',	isActive: false},
	// {key: 'intro',	value: 'Introduction',	isActive: false},
	{key: 'port',	value: 'Portfolio',		isActive: false},
	{key: 'tmi',	value: 'TMI',			isActive: false}
]

export default {
	name: 'Header',
	props: {
		show: String
	},
	components: {
		headList: headList
	},
	data() {
		return {
		}
	},
	methods: {
		changeContent: function(show){
			this.$emit("changeContent", show);
		}
	}
}
</script>

<style>
</style>