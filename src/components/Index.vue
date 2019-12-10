<template>
<div id="index">
	<div id="intro" :class="{show: showPage('intro'), hidden: !showPage('intro')}">
		<intro-comp/>
		<tetris-comp/>
    	<div class="change">
    		<a href="#" @click="changePage('main')">->go skip</a>
    	</div>
    </div>
    <div id="main" :class="{show: showPage('main'), hidden: !showPage('main')}" style="padding-top: 70px;">
    	<head-comp :show="show" v-on:changeContent="changeContent"/>
    	<div id="content">
    		<info-comp :show="show"/>
    		<port-comp :show="show"/>
    		<tmi-comp :show="show"/>
    	</div>
		<div class="change">
    		<a href="#" @click="changePage('intro')">->go intro</a>
    	</div>
    </div>
</div>
</template>

<script>
import Tetris from '@/components/Tetris'
import Introduction from '@/components/Introduction'
import Header from '@/components/Header'
import Information from '@/components/Information'
import Portfolio from '@/components/Portfolio'
import TMI from '@/components/TMI'

export default {
	name: 'Index',
	components: {
		tetrisComp:	Tetris,
		introComp:	Introduction,
		headComp:	Header,
		infoComp:	Information,
		portComp:	Portfolio,
		tmiComp:	TMI
	},
	data() {
		return {
			page: "intro",
			show: null
		}
	},
	methods: {
		showPage: function(id){
			if(id == this.page){
				return true;
			}else{
				return false;
			}
		},
		changePage: function(go){
			this.page = go;
			if(go == 'main'){
				this.show = 'info'
			}
		},
		changeContent: function(show){
			this.show = show
		}
	}
}
</script>

<style>
#index, #index > div {
	width: 100%;
	height: 100%;
}
.change {
	position: relative;
	bottom: 30px;
	margin: 5px;
	float: right;
}
</style>