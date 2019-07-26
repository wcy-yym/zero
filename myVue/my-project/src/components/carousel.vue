<template>
	<div class="Carousel">
		<div class="layui-container">
			<div class="layui-row" style="text-align: center;">
				<h1>Carousel</h1>
			</div>
			<div class="layui-row">
				<div class="layui-carousel itemChange" id="itemChangeOne">
					<div carousel-item>
						<div><img src="../../static/images/flowers/1.png" alt="" class="itemChange-img"></div>
						<div><img src="../../static/images/flowers/28.png" alt="" class="itemChange-img"></div>
						<div><img src="../../static/images/flowers/7.png" alt="" class="itemChange-img"></div>
						<div><img src="../../static/images/flowers/17.png" alt="" class="itemChange-img"></div>
						<div><img src="../../static/images/flowers/52.png" alt="" class="itemChange-img"></div>
					</div>
			</div>
			</div>
			<div class="layui-row">
				<div class="layui-carousel itemChange" id="itemChangetwo">
					<div carousel-item>
						<div class="icTwo-imgBg" data-imgIndex="1"></div>
						<div class="icTwo-imgBg" data-imgIndex="2"></div>
						<div class="icTwo-imgBg" data-imgIndex="3"></div>
						<div class="icTwo-imgBg" data-imgIndex="4"></div>
					</div>
			</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Carousel',
		data () {
			return {
				a: 1
			}
		},
		mounted () {
			layui.use(['jquery', 'layer', 'element', 'carousel'], function () {
				let $ = layui.$
				let layer = layui.layer
				let element = layui.element
				let carousel = layui.carousel
				carousel.render({
					elem: '#itemChangeOne',
					width: '100%',
					height: '500px',
					interval: 2000,
					arrow: 'always',
					anim: 'default'
				})
				carousel.render({
					elem: '#itemChangetwo',
					width: '100%',
					height: '650px',
					interval: 3000,
					arrow: 'always',
					anim: 'default'
				})
			})
		},
		computed: {
		},
		methods: {
		}
	}
</script>
<style>
	.itemChange{
		margin: 20px 0;
	}
	#itemChangeOne .itemChange-img{
		width: 100%;
	}
	.icTwo-imgBg{
		background: url('../../static/images/flowers/28.png') no-repeat;
		background-size: cover;
	}
</style>
