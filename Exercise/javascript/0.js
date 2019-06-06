/**
 * .
 * @authors Your Name (you@example.org)
 * @date    2019-03-15 16:35:50
 * @version $Id$
 */
 $("#answer").click(function(){
 	console.log('answer');

 	console.log('一、屏蔽身份证号码、手机号码，只保留后四位数字');
 	function qust1(){
 		var ipid = document.getElementById("question").value;
	 	console.log(ipid);
	 	if (ipid.length <= 4) {
	 		document.getElementById("display").innerHTML = ipid;
	 	}else{
	 		console.log('大于4');
	 		var ipidLong = ipid.length;
	 		var numberFour;
	 		console.log(ipid.substring(0,ipidLong-4));
	 		var a = ipid.substring(0,ipidLong-4);
	 		var b = ipid.substring(ipidLong-4,ipidLong);
	 		var ra = a.replace(/[0-9]/ig, '*');
	 		console.log(ra+b);
	 		document.getElementById('display').innerHTML = ra + b;
	 	}
 	}
 	qust1();

 	console.log('二、筛选出不同的数字');
 	function qust2(){
 		var number = [2,2,2,2,3,2,2,2,2];
 		var singleNumber;
 		
		// statement
		var sortArr = number.sort(function(a,b){
			return a - b;
		});
		console.log(sortArr);
		if (sortArr[0] == sortArr[1]) {
			singleNumber = sortArr[sortArr.length-1];
		}else{
			singleNumber = sortArr[0];
		}
		console.log(singleNumber);
 		
 		console.log("good answer")
 		// const stray = nums => nums.reduce((a, b) => a ^ b);
 		
 	}
 	qust2();
 	console.log('三、排序输出最大最小值')
	function qust3(){
		let number = "1 2 10 8 3";
		var nmbarr = number.split(' ');
		var numarr0 = [1,5,46,123,3];
		console.log(nmbarr);
		console.log(nmbarr.sort(function(a,b){
			return a - b;
		}));
	}
	qust3();
	console.log('四、字符串筛选出大写字符的序号');
	function qust4(){
		console.log(/[A-Z]/.test('G'));
		let str = $("#question").val();
		let strArr = str.split('');
		console.log(strArr);
		let n = [];
		for (let i in strArr) {
			// statement
			if(/[A-Z]/.test(strArr[i]) == true ){
				n.push(i);
			}
		}
		console.log(n);

		// var capitals = function (word) {
		//   return word.split('').reduce(function(memo, v, i) {
		//     return v === v.toUpperCase() ? memo.concat(i) : memo;
		//   }, []);
		// };
	}
	qust4();


 });
