$(document).ready(function() {
  var box=document.querySelector(".content");
  var screen = document.querySelector(".screen");
  var ul = screen.children[0];
  var ullis = ul.children;
  var arrRight = document.querySelector("#boxright");
  var arrleft = document.querySelector("#boxleft");

  var pic = 0;
  var p1 = 0;
  var p2 = 0;
  var rpic = 0;
  var dst = 0;
  var sum = 0;
  var sum2 = 0;
  var timer;
  var scwidth = screen.offsetWidth;
  var lione = ullis.length;
  console.log('li原数量：'+lione);
  console.log('screen长度：'+scwidth);

//复制Li
  for(var n = 0 ; n< 10; n++){
    var cloneli = ullis[n].cloneNode(true);
    ul.appendChild(cloneli);
  }
  console.log('li个数：'+ullis.length);

//设置ul长度
  for(var n = 0; n<=ullis.length-1; n++){
        var lilen = ullis[n].offsetWidth;
        var lisum;
        // console.log('li:'+ullis[n].offsetWidth);
        if(n == 0){
          lisum = lilen;
      // console.log('one:'+lisum);
          ul.style.width = lisum + "px";
        }
        else{
      lisum = lisum + lilen +1;
          // console.log('one:'+lisum);
          ul.style.width = lisum + "px";
        }
   }
    console.log('ul:'+ul.offsetWidth);

//计算超出ul的img数量
for (var n = 0; n<ullis.length; n++){
    var imgwidth = ullis[n].offsetWidth;
    if (n == 0) {
      sum2 = imgwidth;
      rpic = n+1;
    }
    else{
      sum2 += imgwidth ;
      p2++;
    }
    if(sum2 > scwidth) {
      rpic = p2+1; 
      sum2 = 0;
      imgwidth = 0;
      p2 = 0;
      console.log('rpic:'+ rpic);
      break;
    }    
  }

//计算到第rpic图片的图片总和
for(var n = 0; n<rpic; n++){
  var lilen = ullis[n].offsetWidth;
  var lastpic;
  if(n == 0){
    lastpic = lilen;
    }
  else{
    lastpic += lilen ;
    }
   }

console.log('到第pic图片的图片总和:'+lastpic);
console.log('sum:' + sum);

//图片求和方法
function imgsum(l) {
  for(var n = 0; n<l; n++){
  var lilen = ullis[n].offsetWidth;
  var lastpic;
  if(n == 0){
    lastpic = lilen;
    }
  else{
    lastpic +=  lilen ;
    }
   }
   return lastpic
  // body... 
}
console.log('test');
console.log(imgsum(lione-1));

//默认轮播
function move(element){
  if (pic >= lione) {
    pic = 0;
    sum = 0;
    ul.style.left = -sum +'px';
  }
for (var n = 0; n<=pic; n++){
    var imgwidth = ullis[n].offsetWidth;
    if (n == 0) {
      sum = imgwidth;
    }
    else{
      sum += imgwidth ;
    }
  }
  $("#sul").animate({left: -sum});
  pic++;
  console.log('图片数量：'+ pic);
  console.log('sum:' + sum);
  }

//右箭头的切换
function rightmove(){

  for (var n = 0; n<ullis.length; n++){
    var imgwidth = ullis[n].offsetWidth;
    if (n == 0) {
      sum2 = imgwidth;
      p2 = n+1;
    }
    else{
      sum2 += imgwidth ;
      p2++;
    }
    // console.log(n);
    if(p2 == (rpic + lione +1)){
      sum = lastpic-scwidth;
      ul.style.left = -sum +'px';
      sum = imgsum(rpic+1)-scwidth;
       $("#sul").animate({left: -sum});
      p2 = rpic + 1;
      pic = 2;
      console.log('左图片：'+ pic);
      console.log('右图片:'+p2);
       console.log('sum:'+sum);
      break;
    }
    else{
    if(sum2 > (scwidth+sum)) {
      console.log('图片总和：'+sum2);
      dst = sum2-(scwidth+sum);
      pic++;
      sum += dst;
      // ul.style.left = -sum +'px';
      $("#sul").animate({left: -sum});
      console.log('左移动：'+ dst);
      console.log('sum:'+sum);
      console.log('左图片：'+ pic);
      console.log('右图片:'+p2);
      break;
    }
  }
  }        
}

//左箭头的切换
function leftmove(){
  console.log('已移动：'+sum);
  // console.log('左图片：'+ pic);
  // console.log('右图片:'+p2);
  if (pic == 0) {
    ul.style.left = -imgsum(lione) + 'px';
    // $("#sul").animate({left: -lastpic});
    sum = imgsum(lione-1);
    $("#sul").animate({left: -sum});
    pic = lione;
    console.log(pic);
  }
  else if (pic == 1){
    sum = 0;
    // ul.style.left = -sum +'px';
    $("#sul").animate({left: -sum});
  }
  else{
  for (var n = 0; n<pic-1 ; n++){
    var imgwidth = ullis[n].offsetWidth;
    if (n == 0) {
      sum = imgwidth;
    }
    else{
      sum += imgwidth ;
    }
  }

  $("#sul").animate({left: -sum});
  }
  pic--;
  console.log('图片数量：'+ pic);
  console.log('前'+parseInt(pic-1)+'张图片和：'+sum);
}

//自动轮播
  timer = setInterval(function(){
  // console.log('setSuccess')
    move();
    },1500)
// clearInterval(timer);

//鼠标经过盒子
  box.onmouseover=function(){
  //清除定时器
  clearInterval(timer);
  }

// 鼠标离开盒子
  box.onmouseleave=function(){
    // arr.style.display="none";
    timer=setInterval(function(){
      // leftmove();
      move();
    },1500)
  }

//点击右箭头
arrRight.onclick=function(){
  // console.log('click right');
  rightmove();
}

//点击左箭头
arrleft.onclick=function(){
  leftmove();
}

$('#start').click(function(){
  clearInterval(timer);
  move();
});
$('#stop').click(function(){
  clearInterval(timer);
});

});