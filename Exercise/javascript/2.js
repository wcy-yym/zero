/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-10-29 14:01:51
 * @version $Id$
 */
	var sum = new Array(+$('#mytb thead tr td:not(:first-child)').length).fill(0);
	console.log(sum);
	$('#mytb tbody tr').each(function() {
    $(this).children('td:not(:first-child)').each(function() {
        var index = $(this).index() - 1;
        sum[index] += +$(this).text();
    });
	});
	$('#mytb #totalRow td:not(:first-child)').each(function() {
    	var index = $(this).index() - 1;
    	$(this).text(sum[index]);
	});
	$(function(){
		$("table tbody tr td").click(function(){
			var col = $(this).index();
		});
	}
		)
	$("#set").change(function(){
        var set = $("#set").val();
        var t = $("#a").text();
        console.log(t);
        $("#bj").submit(function(){
        });
    });
	window.onload = function(){
		// alert("win");
	}
	function check(){ 
		var value = document.getElementById("nbctr").value; 
		let reg=/^\d+$/; 
		if(reg.test(value)==true){ 
		alert("都是数字！通过"); 
		return true; }
		else{ alert("不是纯数字！失败！"); return false; 
		} 
}  
	function check(){ 
		var value = document.getElementById("nb1").value; 
		let reg=/^\d+$/; 
		if(reg.test(value)==true){ 
		alert("都是数字！通过"); 
		return true; }
		else{ alert("不是纯数字！失败！"); return false; 
		} 
}  
	var clean = function(){
		$('.clean').text('');
	}
	$( "#nbctr" ).bind( "change", function() {
	var re = /^\d{6}$/;
	let len = $('#nbctr').val();
	console.log(len);
	if(re.test(len) == true){
		alert('success');
	}
	else{
		alert('false');
	}
});
    // if( this.value.length == 6 ) {
    //     console.log('长度为6');
    //     alert("6位数字") 
    // }
    // else {
    // 	var nbc = $('#nbctr').val();
    // 	clean();
    // }
	$('#inputCheck').click(function() {
		/* Act on the event */		
		var a = $("#nbctr").val().length;
		console.log(a);
		alert(a);
	});
	let alertvalue = $('#alertClose').val();
	$('#alertCheck').click(function(){
		if (alertvalue == '通过') {
		alert(alertvalue);
		// window.close();
	}
	});
	$(document).ready(function() {
		let ac = $('#alertClose').val();
		if (ac == "通过") {
			$('#yj').text('应缴金额');
			$('#yjje').text('123');
			// alert('已通过绿色通道');
		}	
	});
	$('#btn01').click(function() {
		/* Act on the event */
		let str = 'adaa1ad23f\f45h6\\7hh8h9hhh';
		let reg = /\d+/g;
		let re = new RegExp('\\d', 'g');
		var n = str.match(reg);
		var nn = str.match(re);
		var m = str.match(/a/g);
		let old = /(1[5-9])|([2-3]\d)|(4[0-5])/;
		console.log(old.test('39'));
		console.log(n);
		console.log('nn:' + nn);
		console.log('m:'+ m);
	});
	let count = document.getElementsByTagName('p');
	var a = count[0].innerHTML;
	console.log('p1:'+ count.length);
	$('#boxleft').click(function(event) {
		/* Act on the event */
		alert("click left");
	});
	$('#boxright').click(function(event) {
		/* Act on the event */
		alert("click right");
	});
function checknum()
   {   
   	 var obj = document.getElementById('nc');
     if(/^\d+\.?\d{0,2}$/.test(obj.value)){
        obj.value = obj.value;
     }else{
        obj.value = obj.value.substring(0,obj.value.length-1);
     }     
   }
	$(document).ready(function() {
		var objgbtn = document.getElementById("#gbtn");
		var count = 0;
		var flag = null;
		var nb145 = $('#nb145').val();
		$("#btn145").click(function(){
			console.log('lll');
			for(var i =0 ; i<10; i++){
			if (i == (6||8||3)) {
			console.log(i);
		}
	}
		});
	});
//input输入检测精确到两位小数的数字
	$( "#ipnb1" ).bind( "change", function(){
	var lenth = $("#ipnb1").val();
	var dj = document.getElementById('ipnb1').value;
	if(dj.length>0){
	if(/^\d+\.?\d{0,2}$/.test(dj) == false || /^\d+\.$/.test(dj) == true){
        alert('请输入正确的数字（只能精确到两位小数）');
      	$("#ipnb1").val('');
     }
 	}
	});
	$(".ipnb2").bind("change",function(){
		var a = document.getElementsByClassName("ipnb2");
		console.log(a);
			for(var i in a){
				if(/^\d*$/.test(a[i].value) == false){
					a[i].value=0;
				}
			}
	});
	function nb3(){
		let a = 50;
		let b = 30;
		let n = document.getElementById('ipnb3').value;
		console.log(n);
		if(n > 50){
			alert("error");
			document.getElementById('ipnb3').value="33";
		}
	}
	$.ajax({
		url: '/path/to/file',
		type: 'default GET (Other values: POST)',
		dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
		data: {param1: 'value1'},
		success:function(data){
		},
		error:function(){
		}
	});
	function tableClick(){
		alert("hahaha");
	}
	$("#mytb tbody tr td").click(function(event) {
		/* Act on the event */
		alert("laji");
	});
	$("#blkbox-btn01").click(function(event) {
		/* Act on the event */
		$("#blkbox-p1").parent().css({
			background : '#F33',
			color : '#000'
		});
	});
	function testBody1(){
		var a = 'abc';
		var b = 'vvv';
		$('#testBody1 span').text(a+b);
	}
	$(document).ready(function() {
		var myDate = new Date();
		var y = myDate.getFullYear();
		var m = myDate.getMonth()+1;
		var d = myDate.getDate();
		var dateNum = myDate.getDay();
		var dateIndex = new Array('日', '一', '二', '三', '四', '五', '六');
		var date = '星期' + dateIndex[dateNum];
		var today = y+'年' + m + '月' + d + '日 ' +  date;
		$('#testBody2-time').text(today);
	});
	document.getElementById('mytb').ondragstart = function(){
		return false;
	};
	// document.getElementById('xm').setAttribute('ondragstart','return false');
	function noDrag(){
					var xm = $("#xm");
					// var la = $("#la");
					console.log(this);
					this.ondragstart = function(){
					console.log('NoDrag');
					return false;
					};
			}
	noDrag();
	function replaceOne(){
		var i = $(".urlInput").val();
		var a = i.replace(/\？/g,"?");
		console.log(a);
		 $(".urlInput").val(a);
	}
	$(document).ready(function() {
		console.log('tdTest');
		// $('.tdtest').prev().text("辣鸡");
		// th.text('some text');
		$("#laBox").html('aaa');
		$("#laBox").append('姓名<input type="text">');
			// statement
		$("#selectImg").click(function(event) {
			/* Act on the event */
			if ($(".imgBox2").hasClass('showBox')) {
				$(".imgBox2").removeClass('showBox');
				$(".selectBox").remove();
			}else{
				$(".imgBox2").addClass('showBox');
				$(".imgBox2").append('<input type="checkbox" class="selectBox">');
			}
		});
		$(".imgBox2 div").click(function(event) {
			/* Act on the event */
			var id = $(this).siblings(".selectBox").is(':checked');
			if (id) {
				$(this).siblings(".selectBox").prop("checked", false);
			}else{
				$(this).siblings(".selectBox").prop("checked", true);
			}
		});
		$("#dlImg").click(function(){
			var list = [];
			var imgBox = document.querySelectorAll(".imgBox2");
			console.log(imgBox);
			$(".imgBox2").each(function() {
					if ($(this).find(".selectBox").is(':checked')) {
						var ipid = $(this).find(".boxId").val();
						list.push(ipid);
						console.log(ipid);
					}
			});
			if (list != '') {
				console.log(list);
			}else {
				if ($("#testCheck").is(':checked')) {
					$("#testCheck").prop('checked', false);
				}else {
					$("#testCheck").prop('checked', true);
				}
			}
		});
		console.log('textarea start');
		var text = $("#textArea1").text();
		$("#textArea1").click(function(event) {
			/* Act on the event */
			console.log(text);
			if(text == "欢迎"){
				$("#textArea1").text('');
				this.focus();
			}
		});
		$("#textArea1").blur(function(event) {
			/* Act on the event */
			if (text == "") {
				console.log('空');
				$("#textArea1").text("欢迎");
			}
		});
	});
function clickReNum(){
	console.log('clickReNum');
}
function chooseGet(){
	var chooseList = $(".choose-demo1 ul li");
	var chooseList2 = document.querySelectorAll(".choose-demo1 ul li");
	var a = $(chooseList[0]).attr('nbid');
	console.log(chooseList.length);
	console.log(a);
	var nbidList = [];
	for (var i = 0 ; i < chooseList.length; i++) {
		console.log(i);
		nbidList.push($(chooseList[i]).attr('nbid'));
		// statement
	}
	console.log(nbidList);
	window.open("http://www.baidu.com");
}
function scaleBox(){
	$("#tableBox").css('transform', 'scale(0.5)');
}

// 调试
$("#log").click(function(){
	console.log('test');
	// window.close();
	function objtest(){
		var obj = { 0: 'a', 3: 'b', 2: 'c' };
		console.log(Object.keys(obj));
		for (var i in obj) {
			console.log(i)
			// statement
		}
		var max = {
			'name':'marxwolf',  
	    	age:18,  
	    	'birth_month':'January',  
	    	'birth-month':18
	    }  
		console.log(max.name);  
		console.log(max['name']);  
		console.log(max.age);  
		console.log(max['age']);  
		console.log(max.birth_month);  
		console.log(max['birth-month']);
		var a = [];
		for (var i = 0; i < 10; i++) {
		  a[i] = function () {
		    console.log(i);
		  };
		}
		a[1]();
	}
	// objtest();
	function clearSpace(){
		console.log('去除前后空格');
		var name = " a b c ";
		var name2 = name.replace(/^\s+|\s+$/g,"");//去除前后空格
		console.log(name2);
	}
	// clearSpace();
	function numberSort(){
		console.log('排序输出最大最小值');
		let number = "1 2 10 8 3";
		var nmbarr = number.split(' ');
		var numarr0 = [1,5,46,123,3];
		console.log(nmbarr);
		console.log(nmbarr.sort(function(a,b){
			return a - b;
		}));
	}
	// numberSort();
	function highAndLow(numbers){
	  // ...
	  var numberArr = numbers.split(" ");
	  var l = numberArr.length;
	  var finalArr = numberArr.sort(function(a,b){
	      return a - b;
	    });
	  return finalArr[l-1]+' '+finalArr[0]; 
	}
	// highAndLow("1 3 92 32 6 8");
	var name1 = "wcy";
	// console.log("name: " +`${name1}`);
	function mathDemo(){
		console.log('Math方法');
		var a = 3,b = 4,c = 5,d = -2,e = 3.4;
		console.log(Math.abs(a * d));//abs() 取绝对值
		console.log(Math.pow(a,b));//pow(a,b) a的b次幂
		console.log(Math.floor(e));//floor() 返回小于或等于的整数 用于去掉整数后面的小数部分
		console.log(Math.random());//random() 随机生成0~1的数
	}
	// mathDemo();
	const prefixZero = (number, length) => {
		console.log(Array(length).join('0'));
    return (Array(length).join('0') + number).slice(-length);
	}
	// console.log(prefixZero(2356623,2));
	var a = $("#logBtn").val();
	function regTest(){
		var reg =  /^.*[~!@#\$%\^&\*\(\)_+\-\[\]\{\}\\\|\'\";:,\<\.\>\/\?\s+].*$/;
		var a1 = '123';
		console.log('testReg');
		console.log(reg.test(a1));
		if (reg.test(a1) == false) {
			 // alert("error");
		} 
	}
	// regTest();
	//正则判断6~10位 英文和数字
	function zzzz(){
		var reg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/
		var test = $("#logBtn").val();
		if(test.match(reg)){
			console.log('正确');
		}
		else{
			console.log('错误');
		}
	}
	// zzzz();
	function stopMethod(n){
		console.log('1');
		var a = 1;
		if (a == 0) {
			console.log('stop');
			return;
		}
		console.log('2');
		console.log('3');
		console.log('4');
	}
	// stopMethod();
	function getObject1(){
		var cglist = $("#cglist").val();
		var cgspan = $("#cgSpan").text();
	}
	// getObject1();
	function getInputDate(){
		$("#logBtn").val(2019-04-04);
	}
	// getInputDate();
	function getString(){
		var s = $("#logBtn").val();
		console.log(s);
		var ss = String(s).indexOf('.');
		console.log(ss);
	}
	// getString();
	function es6DemoOne(){
		let a = 1;
		a = 2;
		let {r,y} = {r:'red', y:'yellow'}
		console.log(r);
		let alarm = Symbol('biu');
		console.log(alarm);
		console.log('MapMapMapMapMapMapMap')
		let mapOne = new Map();
		// mapOne = {a:'aaa', b:'bbb', '苹果': 'apple'};
		let keyObj = {};
		let fruit = {}
		mapOne.set(keyObj, '冲鸭！');
		mapOne.set(fruit, '苹果');
		let f = mapOne.get(fruit);
		console.log(mapOne);
		console.log(f);
		console.log('SetSetSetSetSet')
		let mySet = new Set();
		mySet.add(1);
		let setList = [0, 1, 66];
		mySet.add(setList);
		console.log(mySet);
		let numList = [5, 43, 5, 11, 47, 33, 3, 33, 11];
		let setArr = new Set(numList);
		console.log(setArr);
		let arrSet = [...setArr];
		console.log(arrSet);

	}
	es6DemoOne();
	function copyDemo(){
		console.log('CopyCopyCopyCopyCopyCopy');
		let arrA = [0, 1, 2, 3, 4, 5];
		let arrB = arrA ;
		let a = 11;
		let b = a;
		a = 22;
		arrB[0] = 99;
		arrB[1] = 3;
		console.log(arrA,arrB);
		console.log(b);
	}
	copyDemo();
	function testTwo(){
		let log = document.getElementById("logBtn");
		let flag = log.hasOwnProperty('data');
		console.log(flag);
	}
	testTwo();

});
//调试结束

	function moveoverOne(){
		$("#logBtn").mouseover(function(event) {
			/* Act on the event */
			console.log(event);
		});
	}
	moveoverOne();
	function stringChange(){
		var s = ['1','3','5'];
		var n = s.map(Number);
		console.log('nVVVVVVVVVVVVVVV');
		console.log(n);
	}
	// stringChange();
function inputsl(){
		var sl = $("#slBox input[name='slslsl']");
		var reg = /[0-9]/
		var flag = true;
		for (var i=0; i< sl.length; i++) {
			// statement
			console.log(sl[i].value);
			if (sl[i].value == 0) {
				console.log('00000000');
				flag = false;
			}
		}
		console.log(flag);
	}
function BlogDemo01Btn(){
	console.log($("#BlogDemo01").text());
	console.log($("#BlogDemo01").html());
	console.log($("#inputBlog").val());
	$("#BlogDemo01").append("<b>def</b>");
}
//选择元素
function selectExcept(){
	var itemList = $(".item1").not("#ghost");
	console.log(itemList);
}
function smClick(){
	$("#myForm").submit();
}
// $.ajax({
// 	url: '',
// 	type: 'post',
// 	dataType: 'json',
// 	data: {cwSelectedIds: 'cwSelectedIds'},
// 	sucess:function(){
// 		submit();
// 	}
// });
function selectBox2(){
	$(".selectBox2-span").click(function(event) {
			console.log('click' + $(this).text());
			$(this).next(".sBox-li-ul").fadeToggle();
		});
}
selectBox2();
function NumberSelect( obj ){
            var e=obj.value;
            if(String(e).indexOf('.')>-1){ //判断有没有输入小数点
            }else{
                var p11 = /[^\d]/g;
                var p22 = /(\d{3})\d*$/g;
                var p44 = /(\d*)\60/g; //删除当我输入第七位的整数时候进行删除
                obj.value = obj.value.replace(p11, "");
            }
            var p1 = /[^\d\.]/g;   // 过滤非数字及小数点 /g :所有范围中过滤
            var p2 = /(\.\d{11})\d*$/g;
            var p4 = /(\.)(\d*)\1/g;
            obj.value = obj.value.replace(p1, "").replace(p2, "$1").replace(p4,"$1$2");
            obj.value=obj.value.replace(/[^0-9.]/g, '');
            var p5 = /\.+/g;   //多个点的话只取1个点，屏蔽1....234的情况
            obj.value = obj.value.replace(p5, ".");
            var p6 = /(\.+)(\d+)(\.+)/g; //屏蔽1....234.的情况
            obj.value = obj.value.replace(p6, "$1$2")// 屏蔽最后一位的.
}
function cytj(data){
	console.log('cyList');
	console.log($(data));
	var cylist = $(data).siblings('.cyid').val();
	console.log(cylist);
	var fjid = $("input[name='fjid']").val();
}
function slCheck(){
	var sl = document.getElementsByClassName('slCg');
	console.log('slVVVVVVVV');
	console.log(sl);
	// for (var i=0;i < sl.length; i++) {
	// 	// statement
	// 	console.log(i);
	// 	sl[i].addEventListener('keyup', function(){
	// 	console.log('keyup');
	// 	var a = parseInt($(this).val());
	// 	var b = parseInt($(this).siblings('.slMax').val());
	// 	console.log(a + "and" + b);
	// 	if (a > b) {
	// 		console.log("数量超出");
	// 	}
	// 	});
	// }
	$(".slCg").each(function(index, el) {
			console.log(index);
			console.log(el);
			this.addEventListener('keyup', function(){
			console.log('keyup');
			var a = parseInt($(this).val());
			var b = parseInt($(this).siblings('.slMax').val());
			console.log(a + "and" + b);
			if (a > b) {
				console.log("数量超出");
			}
			});
	});
}