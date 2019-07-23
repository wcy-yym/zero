/**
 * 
 * @authors YYM
 * @date    2019-07-19 11:07:03
 * @version $Id$
 */
layui.use(['layer', 'form', 'element', 'laydate'], function(){
  var layer = layui.layer
  ,form = layui.form
  ,element = layui.element
  ,laydate = layui.laydate;

  laydate.render({
    elem: '#content-data' //指定元素
    ,position: 'static'
  	,change: function(value, date){ //监听日期被切换
    lay('.content-nowday').html(value);
  	}
  	,showBottom : false
  	,theme : '#66ccff'
  });

	$("#scrollbarBtn").on('click', function(){
		// element.progress('demo', '50%');
		console.log($(this).data());
		var n = 0;
		var timer = setInterval(function(){
			n++;
			element.progress('demo', n*10 + '%');
			console.log(n);
			if (n >= 10) {
			clearInterval(timer);
			}
		}, 1000);
		
	});

});

function alertClick(){
	console.log(layer);
	layer.tips('Click me!', "#alertBtn");
	layer.alert('alert!!!', {anim:6});
}
$("#msgBtn").on('click', function(){
	layer.msg('msg!!!', {icon:6}, {anim:6});
});
$("#shadeBtn").on('click',function(){
	layer.open({
		type: 0,
		shade:[0.2,'#66CCFF'],
		shadeClose: true,
		title: 'titleOrz',
		content: '<\div style="padding:20px;">my msg<\/div>',
		btn: ['yes', '按钮二', '按钮三'],
		yes: function(index, layero){
			console.log('btn111111');
		},
		btn2: function(index, layero){
			console.log('btn22222');
			return false
		},
		btn3: function(index, layero){
			console.log('btn3333333');
		},
	})
});
$("#tabBtn").on('click', function(){
	layer.tab({
	  area: ['600px', '300px'],
	  tab: [{
	    title: 'TAB1', 
	    content: '内容1'
	  }, {
	    title: 'TAB2', 
	    content: '内容2'
	  }, {
	    title: 'TAB3', 
	    content: '内容3'
	  }]
	});  
});
$("#photoBtn").on('click', function(){
	$.getJSON('./json/photo1.json', function(json, textStatus) {
		layer.photo({
			photos: json
		});
	});
	
});
