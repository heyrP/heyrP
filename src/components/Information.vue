<template>
<div id="info" :class="{show: isShow, hidden: !isShow}">
	<div id="profile" class="panel panel-default">
		<div class="panel-heading">
			<h3>Profile</h3>
		</div>
		<div class="panel-body">
			<div id="my-photo">
				<span class="thumbnail">
					<img alt="사진" src="http://placehold.it/120x160">
				</span>
			</div>
			<div id="my-info">
				<div v-for="item in profileList">
					<label class="control-label">{{item.key}}</label>
					<span>
						<p class="form-control-static">{{item.value}}</p>
					</span>
				</div>
			</div>
		</div>
	</div>
	<div id="history" class="panel panel-default">
		<div class="panel-heading">
			<h3>History</h3>
		</div>
		<div class="panel-body">
			<div v-for="item in historyList">
				<label>{{item.date}}</label>
				<span>
					<p v-for="sub in item.sub">{{sub}}</p>
				</span>
			</div>
		</div>
	</div>
</div>
</template>

<script>
var profileList = [
	{key: 'Name',		value: '박혜림'},
	{key: 'Birth',		value: '1993.12.14'},
	{key: 'E-Mail',		value: 'gotothe1214@gmail.com'},
	{key: 'Address',	value: '경기도 의왕 거주'},
	{key: 'Degree',		value: '안양대학교 정보통신공학과 학사'}
]

var historyList = [
	{date: '2009.03 - 2010.03',	sub: ['진선여자고등학교 입학']},
	{date: '2010.03 - 2012.02',	sub: ['백영고등학교 전입', '백영고등학교 졸업']},
	{date: '2012.03 - 2017.02',	sub: ['안양대학교 정보통신공학과']},
	{date: '2017.03 - ',	sub: ['유니메이션코리아 재직']},
	{date: '2009.03 - 2010.03',	sub: ['진선여자고등학교 입학']},
	{date: '2010.03 - 2012.02',	sub: ['백영고등학교 전입', '백영고등학교 졸업']},
	{date: '2012.03 - 2017.02',	sub: ['안양대학교 정보통신공학과']},
	{date: '2017.03 - ',	sub: ['유니메이션코리아 재직']},
	{date: '2009.03 - 2010.03',	sub: ['진선여자고등학교 입학']},
	{date: '2010.03 - 2012.02',	sub: ['백영고등학교 전입', '백영고등학교 졸업']},
	{date: '2012.03 - 2017.02',	sub: ['안양대학교 정보통신공학과']},
	{date: '2017.03 - ',	sub: ['유니메이션코리아 재직']},
	{date: '2009.03 - 2010.03',	sub: ['진선여자고등학교 입학']},
	{date: '2010.03 - 2012.02',	sub: ['백영고등학교 전입', '백영고등학교 졸업']},
	{date: '2012.03 - 2017.02',	sub: ['안양대학교 정보통신공학과']},
	{date: '2017.03 - ',	sub: ['유니메이션코리아 재직']},
	{date: '2009.03 - 2010.03',	sub: ['진선여자고등학교 입학']},
	{date: '2010.03 - 2012.02',	sub: ['백영고등학교 전입', '백영고등학교 졸업']},
	{date: '2012.03 - 2017.02',	sub: ['안양대학교 정보통신공학과']},
	{date: '2017.03 - ',	sub: ['유니메이션코리아 재직']},
	{date: '2009.03 - 2010.03',	sub: ['진선여자고등학교 입학']},
	{date: '2010.03 - 2012.02',	sub: ['백영고등학교 전입', '백영고등학교 졸업']},
	{date: '2012.03 - 2017.02',	sub: ['안양대학교 정보통신공학과']},
	{date: '2017.03 - ',	sub: ['유니메이션코리아 재직']}
]

export default {
	name: 'Information',
	props: {
		show: String
	},
	data() {
		return {
			id: 'info',
			isShow: false,
			profileList: profileList,
			historyList: historyList
		}
	},
	watch: {
		// show: function(newVal, oldVal){
		// 	console.log("new: ", newVal)
		// 	console.log("old: ", oldVal)
		// 	console.log("show: ", this.show)
		// }
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
#info #profile .panel-body > div {
	display: inline-block;
	margin: 10px;
}
#info #profile .panel-body #my-photo {
	width: 130px;
}
#info #profile .panel-body #my-info {
	vertical-align: top;
}
#info #profile .panel-body #my-info div label {
	width: 70px;
}
#info #profile .panel-body #my-info div span {
	display: inline-block;
}

#info #history .panel-body > div {
	margin: 10px;
}
#info #history .panel-body div label {
	width: 160px;
}
#info #history .panel-body div span {
	display: inline-block;
	vertical-align: top;
}

@media (max-width: 480px) {
	#info #profile .panel-body #my-photo {
		width: 100%;
	}
	#info #profile .panel-body #my-info {
		width: 100%;
	}
	#info #profile .panel-body #my-info div label {
		width: 100%;
		margin-bottom: 0;
	}
	#info #profile .panel-body #my-info div span {
		margin-left: 20px;
	}
	#info #profile .panel-body #my-info div span .form-control-static {
		padding-top: 0;
	}

	#info #history .panel-body div label {
		width: 100%;
		margin-bottom: 0;
	}
	#info #history .panel-body div span {
		margin-left: 20px;
	}
}
</style>