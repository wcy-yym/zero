<template>
	<div class="Carousel">
		<div class="layui-container">
			<div class="layui-row topTitle" style="text-align: center;">
				<h1 @click="imgRandom()">{{Carousel}}</h1>
			</div>
			<div class="layui-row">
				<div class="layui-carousel itemChange" id="itemChangetwo">
					<div carousel-item>
						<div class="icTwo-imgBg" data-imgIndex="1"></div>
						<div class="icTwo-imgBg" data-imgIndex="2"></div>
						<div class="icTwo-imgBg" data-imgIndex="3"></div>
						<div class="icTwo-imgBg" data-imgIndex="4"></div>
						<div class="icTwo-imgBg" data-imgIndex="5"></div>
					</div>
			</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Carousel',
		props: ['Carousel'],
		data () {
			return {
				num: 1
			}
		},
		mounted () {
			layui.use(['jquery', 'layer', 'element', 'carousel'], function () {
				var $ = layui.$
				var layer = layui.layer
				var element = layui.element
				var carousel = layui.carousel
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
			this.imgRandom()
		},
		computed: {
		},
		methods: {
			imgRandom: function () {
				let imgList = document.querySelectorAll('.icTwo-imgBg')
				for (let i = 0; i < imgList.length; i++) {
					let imgIndex = Math.floor(Math.random() * 50) + 1
					imgList[i].style.backgroundImage = 'url("../../static/images/flowers/' + imgIndex + '.png")'
					console.log(imgIndex)
				}
				console.log(this.Carousel);
				console.log(imgList)
				layer.msg('更换图片', {
					shade: [0.3, 'rgb(33, 33, 33)'],
					shadeClose: true,
					anim: 5,
					time: 1500
				})
			},
			gameBgRandom: function () {
				let imgList = document.querySelectorAll('.icTwo-imgBg')
				for (let i = 0; i < imgList.length; i++) {
					let imgIndex = Math.floor(Math.random() * 11) + 1
					imgList[i].style.backgroundImage = 'url("../../static/images/dota2/carousel/' + imgIndex + '.jpg")'
					console.log(imgIndex)
				}
				console.log(this.Carousel);
				console.log(imgList)
				layer.msg('更换图片', {
					shade: [0.3, 'rgb(33, 33, 33)'],
					shadeClose: true,
					anim: 5,
					time: 1500
				})
			}
		}
	}
</script>
<style>
	.topTitle{
		margin: 5px 0;
	}
	.topTitle h1{
		font-weight: bold;
	}
	.itemChange{
		margin: 20px 0;
	}
	#itemChangeOne .itemChange-img{
		width: 100%;
	}
	.icTwo-imgBg{
		background: url('../../static/images/flowers/28.png');
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
