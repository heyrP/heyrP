<template>
<div id="tetris">
	<h2>TETRIS</h2>
	<div :style="{width: width * cellSize + 'px', height: height * cellSize + 'px'}" class="field">
		<div :style="{width: cellSize + 'px', height: cellSize + 'px'}" class="cell" style="background-color: red;"></div>
	</div>
	<div class="t-panel">
		<div class="panel-row next">
			<p class="panel-title">NEXT</p>
			<span class="br"></span>
			<span class="next-block"></span>
		</div>
		<div class="panel-row score">
			<p class="panel-title">SCORE</p>
			<span class="br"></span>
			<p class="panel-text">{{score}}</p>
		</div>
		<div class="panel-row level">
			<p class="panel-title">LEVEL</p>
			<span class="br"></span>
			<p class="panel-text">{{level}}</p>
		</div>
		<div class="panel-row controls">
			<button :click="play()" class="control-btn play-btn" type="button">PLAY</button>
			<button :click="stop()" class="control-btn stop-btn" type="button">STOP</button>
			<button :click="pause()" class="control-btn pause-btn" type="button">PAUSE</button>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'Tetris',
	data() {
		return {
			cellSize: 30,
        	width: 10,
        	height: 22,
			score: 0,
			level: 0,
			tickInterval: 0
		}
	},
	computed: {
		tickTime() { return Math.max(11 - this.level, 1) * 50 }
	},
	methods: {
		setTick() { this.tickInterval = setInterval(this.tick, this.tickTime) },
		clearTick() { this.tickInterval = clearInterval(this.tickInterval) },
		tick() { console.log(this.$refs) },
		play() { this.setTick() },
		stop() {},
		pause() {}
	}
}
</script>

<style>
#tetris {
	margin: 10px;

	display: inline-block;

	background-color: #ddd;
}
#tetris h2 {
	margin: 0;
	padding: 10px;

	background-color: rgba(255, 255, 255, 0.3);
}
#tetris > div {
	margin: 10px;

	display: inline-block;
	float: left;
}

#tetris .field {
	background-color: #333;
}

#tetris .t-panel {
	width: 150px;

	background-color: rgba(255, 255, 255, 0.3);
}
#tetris .t-panel .panel-row {
	width: 90%;
	margin: 5%;

	display: inline-block;

	background-color: #ddd;
}
#tetris .t-panel .panel-row .panel-title {
	margin: 10px;

	text-align: center;

	font-weight: bold;
}
#tetris .t-panel .panel-row .br {
	width: 100%;
	height: 1px;

	display: block;

	background-color: #fff;
}
#tetris .t-panel .panel-row .panel-text {
	margin: 10px;

	text-align: center;

	font-size: large;
}
#tetris .t-panel .panel-row .control-btn {
	width: 90%;
	margin: 5%;
	padding: 3%;
}
#tetris .t-panel .next .next-block {
	width: 100%;
	height: 100px;

	display: inline-block;

	background-color: #333;
}
</style>