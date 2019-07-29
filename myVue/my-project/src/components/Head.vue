<template>
	<div class="header">
		<nav class="top-nav bg">
			<div class="layui-container">
				<a href="#" class="top-logo">
						<img src="../../static/images/icon/moon.png" alt="Moon">
					</a>
				<ul class="layui-nav nav-main">
					<li class="layui-nav-item layui-this"><a href="/">Home</a></li>
					<li class="layui-nav-item "><a href="">Game</a></li>
					<li class="layui-nav-item "><a href="">Animation</a></li>
					<li class="layui-nav-item "><a href="">Music</a></li>
					<li class="layui-nav-item">
					<a href="javascript:;">other</a>
					<dl class="layui-nav-child">
						<dd><a href="">one</a></dd>
						<dd><a href="">two</a></dd>
						<dd><a href="">three</a></dd>
					</dl>
					</li>
					<li class="layui-nav-item"><a href="">Community</a></li>
				</ul>
				<ul class="layui-nav nav-login ">
					<li class="layui-nav-item">
						<a href="" class="iconfont icon-icon_geren"></a>
					</li>
					<li class="layui-nav-item"><a href="#">登录</a></li>
					<li class="layui-nav-item"><a href="">注册</a></li>
					<li class="layui-nav-item"><button class="layui-btn" v-on:click="testClick()">click</button></li>
				</ul>
			</div>
			<div class="layui-row">
				<!-- 滚动条 -->
				<div class="layui-progress layui-progress-big layui-bg-cyan" lay-filter="demo" lay-showPercent="true">
					<div class="layui-progress-bar layui-bg-red" lay-percent="0%"></div>
				</div>
			</div>
		</nav>
	</div>
</template>
<script>

export default {
	name: 'myHeader',
	data () {
		return {
			hello: 'hahaha'
		}
	},
	mounted () {
		layui.use(['jquery', 'layer', 'element'], function () {
			let $ = layui.$
			let layer = layui.layer
			let element = layui.element
		})
	},
	methods: {
    testClick: function () {
			layui.use(['jquery', 'layer', 'element'], function () {
			let $ = layui.$
			let layer = layui.layer
			let element = layui.element
			var con1 = $('#content')
			console.log(con1)
			layer.msg('test')
			var con = document.getElementById('content')
			// con.style.background = '#66ccff'
			var n = 0
			var timer = setInterval(function () {
				n++
				element.progress('demo', n * 10 + '%')
				console.log(n)
				if (n >= 10) {
				clearInterval(timer)
				}
			}, 1000)
		})
	}
  }
}

</script>
<style>
	.header{
		margin:0;
		padding:0;
		width: 100%;
		height: 80px;
		/*background: url('../../static/images/flowers/17.png');*/
		background-size: cover;
		text-align: none;
	}
/*头部*/
	.top-nav{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		width: 100%;
		height: 60px;
	}
	.top-logo{
		position: absolute;
		top: 4px;
		left: 25px;
	}
	#top-img{
		background: url("../../static/images/flowers/2.png") repeat-x;
		background-size: cover;
		height: 240px;
	}
	.layui-nav{
		padding:0;
	}
	.nav-main{
		margin-left: 100px;
		background: none;
	}
	.bg, .top-nav{
		background: #a5329b99;
	}
	.bg .layui-this:after,.bg .layui-nav-bar{
		background: #66ccff;
	}
	.nav-login{
		position: absolute;
		top:0;
		right: 15px;
		background: none;
	}
	.nav-login .layui-nav-bar{
		display: none;
	}
	.nav-login .layui-nav-item a {
		padding:0 10px;
	}
	.icon-icon_geren{
		font-size: 32px;
	}
	.area-one{
		height: 600px;
	}
	.area-one .layui-tab .layui-tab-title li{
		background: #ea54dd;
	}
	.area-one .layui-tab .layui-tab-title .layui-this{
		background: #66ccff;
	}
	.itemChange-img{
		width:100%;
	}
</style>
