<template>
	<div class="Game">
		<div>
			<myCarousel Carousel="Game"></myCarousel>
			</div>
		<div style="text-align: center;">
			<h1 style="text-align: center;">game?</h1>
		
		</div>
		<div class="layui-container">
			
		</div>
	</div>
</template>

<script>
import myCarousel from './Carousel'
export default {
	name: 'Game',
	components: {
		myCarousel
	},
	data () {
		return {
			num: '1'
		}
	},
	methods: {
	}
}
</script>
