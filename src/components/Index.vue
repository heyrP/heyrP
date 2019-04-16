<template>
<div>
	<div id="intro-page" class="hidden">
      <!-- <a href="#" @click="changePage">->skip</a> -->
    </div>
    <div id="content-page" class="show" style="padding-top: 70px;">
    	<head-comp v-on:changeContent="changeContent"/>
    	<div id="content">
    		<info-comp :show="show"/>
    		<intro-comp :show="show"/>
    		<port-comp :show="show"/>
    		<tmi-comp :show="show"/>
    	</div>

    	<!-- <a href="#" @click="changePage">->intro</a> -->
    </div>
</div>
</template>

<script>
import Header from '@/components/Header'
import Information from '@/components/Information'
import Introduction from '@/components/Introduction'
import Portfolio from '@/components/Portfolio'
import TMI from '@/components/TMI'

export default {
	name: 'Index',
	components: {
		headComp:	Header,
		infoComp:	Information,
		introComp:	Introduction,
		portComp:	Portfolio,
		tmiComp:	TMI
	},
	data() {
		return {
			show: "info"
		}
	},
	methods: {
		changeContent: function(show){
			this.show = show
		}
	}
}
</script>

<style>
</style>