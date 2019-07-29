<template>
	<div class="content">
		<div>
			<div class="layui-container">
				<div class="layui-row contentBlock contentBg">
					<div class="content-title">
						<b>Welcome</b>
					</div>
				</div>
				<div class="layui-row">
					<div class="layui-col-xs4 layui-col-sm12 layui-col-md4">
						111
					</div>
					<div class="layui-col-xs4 layui-col-sm12 layui-col-md4">
						222
					</div>
					<div class="layui-col-xs4 layui-col-sm12 layui-col-md4">
						333
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
	.contentBlock{
		margin: 50px 0;
		padding: 30px 0;
		width: 100%;
		height: 400px;
		text-align: center;
	}
	.contentBg{
		background: #66CCFF66;
	}
	.content-title{
		font-size: 32px;
		font-weight: bold;
		color: #EE5500AA;
	}
</style>
