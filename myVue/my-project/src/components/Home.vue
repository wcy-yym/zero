<template>
	<div class="Home">
		<div>
			<myCarousel Carousel="Home"></myCarousel>
			<myContent></myContent>
		</div>
		<div>
			<router-link :to="{name: 'myGame'}"><h2 style="text-align: center;">run to Game world</h2></router-link>
			<router-link :to="{name: 'myAnimation'}"><h2 style="text-align: center;">run to Animation world</h2></router-link>
		</div>
	</div>
</template>

<script>
import myCarousel from './Carousel'
import myContent from './Content'
export default {
	name: 'Home',
	components: {
		myCarousel,
		myContent
	},
	data () {
		return {
		}
	}
}
</script>
