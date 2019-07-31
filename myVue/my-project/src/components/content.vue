<template>
	<div class="content">
		<div>
			<div class="layui-container">
				<div class="layui-row contentBlock contentBg" style="">
					<div class="content-title">
						<h2><b>Welcome</b></h2>
						<p>Here, you will find somethings which are fun and interesting</p>
						<p>I hope you will enjoy it, have fun! </p>
					</div>
				</div>
				<div class="layui-row contentBlock contentBgTwo">
					<div class="layui-col-xs4 layui-col-sm12 layui-col-md4">
						<div class="smallBox">
							<a href="/#"><img src="../../static/images/flowers/23.png" alt="" height="270px" width="340px"></a>
							<span class="smallBox-tips">
								Here, you will find somethings which are fun and interestingHere, you will find somethings which are fun and interestingHere, you will find somethings which are fun and interesting
							</span>
						</div>
					</div>
					<div class="layui-col-xs4 layui-col-sm12 layui-col-md4">
						<div class="smallBox">
							<a href="/#"><img src="../../static/images/flowers/25.png" alt="" height="270px" width="340px"></a>
							<span class="smallBox-tips">news</span>
						</div>
					</div>
					<div class="layui-col-xs4 layui-col-sm12 layui-col-md4">
						<div class="smallBox">
							<a href="/#"><img src="../../static/images/flowers/22.png" alt="" height="270px" width="340px"></a>
							<span class="smallBox-tips">news</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'content',
	data () {
		return {

		}
	},
	mounted () {

	}
}
</script>
<style>
	*{
		margin: 0;
		padding: 0;
	}
	.content{
		color:#fff;
	}
	.contentBlock{
		margin: 50px 0;
		/*padding: 30px 0;*/
		width: 100%;
		height: 450px;
		text-align: center;
		/*box-sizing: border-box;*/
	}
	.contentBg{
		background: #66ccFF33;
	}
	.contentBgTwo{
		background: #ffffff99;
	}
	.content-title{
		position: relative;
		top: 50%;
		/*top:calc(50% - 66px);*/
		font-family: 'Microsoft Yahei';
		font-size: 28px;
		font-weight: bold;
		vertical-align:middle;
		transform:translateY(-50%);
		-webkit-transform:translateY(-50%);
		/*color: #EE5500AA;*/
	}
	.smallBox{
		margin-top:30px;
	}
	.smallBox .smallBox-tips{
		margin-top: 15px;
		display: block;
		height: 120px;
		line-height: 24px;
		overflow: hidden;
	}
</style>
