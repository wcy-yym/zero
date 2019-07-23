/**
 * 
 * @authors YYM
 * @date    2019-03-08 11:53:10
 * @version $v0.1$
 */

var vm = new Vue({
		el:'#app',
		data:{ 
			msg: 'hello',
			hello:'<b>Hello Every One</b>',
			numIn: "123",
		}
	})

	var a = 'lalala';
	var myDate = new Date();
	var dateNum = myDate.getDay();
	var dateIndex = new Array('日', '一', '二', '三', '四', '五', '六');
	var dateToday = '星期' + dateIndex[dateNum];

	Vue.component('hrDiv',{
			template: '<h1><hr></h1>'
		})

	var day2 = new Vue({
		el:"#app2",
		data:{
			msg:'day 2',
			hr:'<hr>',
			test: '今天是'+ dateToday,
			date: dateToday,
			site_abc:['a','b','c']
		}
	})
	
	var day3 = new Vue({
		el:"#app3",
		data:{
			box1:true,
			haha: '<b>haha</b>'
		}
	
	})
	var day4 = new Vue({
		el:"#app4",
		data:{
			game:[{
				id:1,
				name:"maple",
				price:88,
				count:0
			},
			{
				id:2,
				name:"devil",
				price:328,
				count:0
			},
			{
				id:3,
				name:"dragon",
				price:128,
				count:0
			},
			{
				id:4,
				name:"knight",
				price:38,
				count:0
			}
			]
		},
		methods:{
			totalPrice: function(){
				var talP = 0;
				var len = this.game;
				for(var i = 0 ;i < len.length ;i++){
					// console.log(i);
					talP += len[i].price * len[i].count;
					
				}
				console.log(talP);
				return talP;
			}
		}
	})
	
	var day5 =new Vue({
		el:"#app5",
		data:{
			hclick:"点一点H",
			funnydate: [],
			fruitPick: '',
			dateList:[{
				key:"星期一",
				value:"Monday"
			},{
				key:"星期二",
				value:"Tuseday"
			},{
				key:"星期三",
				value:"Wednesday"
			},{
				key:"星期四",
				value:"Thursday"
			},{
				key:"星期五",
				value:"Friday"
			},{
				key:"星期六",
				value:"Saturday"
			},{
				key:"星期日",
				value:"Sunday"
			}
			],
			datePick:"Monday"
		},
		methods:{
			hClick:function(){
				alert("No H !");
			}
		}
	})
	
	//注册一个tagName叫myBox的组件 template为HTML模板
	Vue.component('myBox',{
		template: '<h1>my-box!</h1>'
	})

	Vue.component('runoob', {
  		template: '<div><img src="images/flower/8.png" height="100px" width="100px" alt=""/></div>'
	})
	Vue.component('getName',{
		template:'<div><h1>{{msg}}</h1><button v-on:click="count++">You clicked me {{ count }} times.</button></div>',
		//data是一个函数
		data:function(){
			return {
				msg: 'lalala',
				count:0
			}
		}
	})
	Vue.component('changePic',{
		template: ' <div><img :src="url" height="120px" width="200px" alt=""/>{{pit}}<button v-on:click="pit++">切换</button></div> ',
		data:function(){
			var num = Math.floor(Math.random()*50)+1;
			console.log(num);
			return{
				pit: num,
				url: 'images/flower/'+ num +'.png'
				
			}
		}		
	})
	var Child = {
	  	template: '<h1>father!</h1>'
	}
	Vue.directive('focus',{
		inserted:function(el){
			console.log(el);
			el.focus()
		}
	})

	//注册tagName为sumbox的组件
	Vue.component('sumbox', {
		// template: ' <div>\
		// <table> \
  //   	<tr>\
  //   		<td><input type="text" class="inputNum" value="" placeholder="common!"></td>\
  //   		<td><input type="text" class="inputNum"></td>\
  //   		<td><input type="text" class="inputNum"></td>\
  //   		<td class="sum">sum</td>\
  //   	</tr>\
  //   	<tr>\
  //   		<td><input type="text" class="inputNum"></td>\
  //   		<td><input type="text" class="inputNum"></td>\
  //   		<td><input type="text" class="inputNum"></td>\
  //   		<td class="sum">sum</td>\
  //   	</tr>\
  //   </table>\
  //   <button>sum</button>\
  //   </div>',
  		template: "#temSumbox",
    	data: function(){
    		return{
    			number: {
    				a : '',
	    			b : '',
	    			c : ''
    			}
    			
    		}
    	},
    	methods:{
    		sumNum:function(){
    			console.log('sumNum');
    			let a = document.getElementById('temSumTable');
    			let sum = 0;
    			let numLong = this.number.length;

    			for (var i in this.number) {
    				console.log(parseInt(this.number[i]));
    				if (isNaN(parseInt(this.number[i])) == false) {
    				sum += parseInt(this.number[i]);
    				// statement
    				}
    			}
    			
    			console.log(this.number['a']);
    			return sum
    		}
    	} 
	})
// 创建根实例
	var day6 = new Vue({
		el:"#app6",
		directives:{
			//注册一个局部的指令
			alert:{
				bind:function(el){
					console.log('COME ON!');
				}
			},
			change:{
				bind:function(el,binding){
				console.log('bind');
				
				},
				inserted:function(el,binding){
				console.log('inserted');
				console.log(el);
				console.log(binding);
				// el.value=binding.value;
				},
				update:function(el,binding){
					console.log('update');
					console.log(el);
					console.log(binding);
					el.style.height = '500px';
					el.style.width = '800px';
				}

			}
		},
		components:{
			father:Child
		},
		data:{
			apple:"苹果",
			picNum: 2
		}
	})

