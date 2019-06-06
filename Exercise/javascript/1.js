/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-10-16 11:08:23
 * @version $Id$
 */
function test(){
	let n = 0;
	var a = Math.pow(4, 3);
	console.log(a);
}

function testButton1(){
	 // for (var i = 0;i<6;i++){
	 // 		setTimeout(function 																																																																																																																																																																																																																																													() {
	 // 			console.log(i);
	 // 			// body... 
	 // 		})
	 // }
	 let count = 0;
	 for (let l = 0; l<50; l++){
	 	for(let m = 0; m<100; m++){
	 		let s = 100-l-m;
	 		if ((l+m+s==100)&&(2*l+m+s/2) == 100) {
	 			count++;
	 			let as="大马："+l+" 中马:"+m+" 小马:"+s+"</br>";
	 			console.log(as);
	 			console.info(count)	
	 			
	 		}
	 	}
	 }
}

function testButton2(){
		for(var n = 100 ; n <1000 ; n++){
			let a = parseInt(n%1000/100);
			let b = parseInt(n%100/10);
			let c = parseInt(n%10);
			if (a*a*a+b*b*b+c*c*c == n) {
				console.log(n);
			}
		}
	
}
function testButton3(){
	var n = new Array();
	
}