
//重置各个需要重置长宽 left top值
var scaleW = window.innerWidth/750;// 移动端用innerWidth
var scaleH = window.innerHeight/1206;
resizes = document.querySelectorAll('.resize');
for(var i = 0;i<resizes.length;i++){
	resizes[i].style.width = parseInt(getStyle(resizes[i],'width'))*scaleW+'px';
	resizes[i].style.left = parseInt(getStyle(resizes[i],'left'))*scaleW+'px';
	resizes[i].style.height = parseInt(getStyle(resizes[i],'height'))*scaleH+'px';
	resizes[i].style.top = parseInt(getStyle(resizes[i],'top'))*scaleH+'px';
}
function getStyle(obj,attr){
    var ie = !+"\v1";//简单判断ie6~8
 	if(attr=="backgroundPosition"){//IE6~8不兼容backgroundPosition写法，识别backgroundPositionX/Y
  		if(ie){        
   			return obj.currentStyle.backgroundPositionX +" "+obj.currentStyle.backgroundPositionY;
    	}
 	}
 	if(obj.currentStyle){
  		return obj.currentStyle[attr];
 	}
 	else{
  		return document.defaultView.getComputedStyle(obj,null)[attr];
 	}
}
var loadingtimer = null;
	loadingtimer = setInterval(function(){
		$('.loading').width(function(i,w){
			return w+1;
		});	
		$('.page1mark span').text(Math.ceil($('.loading').width()/window.innerWidth*100)+'%');
		if ($('.loading').width()>=window.innerWidth) {
			clearInterval(loadingtimer);
			$('.page1mark').hide();
			$('.page1mark span').text('');
			var swiper = new Swiper('.swiper-container', {
			    direction: 'vertical',
			    noSwiping:true,
			    resistanceRatio:0,
			    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			        swiperAnimateCache(swiper); //隐藏动画元素 
			        swiperAnimate(swiper); //初始化完成开始动画
			    }, 
			    onSlideChangeEnd: function(swiper){ 
			        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			        },
			});
			
	    };
   },1);
//swiper
var swiper1 = new Swiper('.swiper-container2', {
				nextButton: '.swiper-button-next',
			    prevButton: '.swiper-button-prev',
			    noSwiping:false,
			    //loop:true,//检测不到最后一个 左右控制键的颜色就不会变化
    
			});
// 预加载效果

	
	//音乐播放
	var musicindex = 0;
	$('.music_start').click(function(){
		musicindex++;
		if (musicindex/2%1) {
			$('audio')[0].pause();
		}else{
			$('audio')[0].play();
		}
		$(this).toggleClass('music_off');
	})
	var p3move = document.querySelectorAll('.p3move');
	var appear = document.querySelectorAll('.swiper-container2 .swiper-slide');
	var touch = document.querySelectorAll('.touch')[0];
	var box = document.querySelectorAll('.swiper-container2')[0];
	box.style.display = 'none';
	$('.p3move').on('click',function(ev){
		$(this).animate({
			opacity:'0',
		})
			var index = $('.p3move').index(this);
			swiper1._slideTo(index);
			$('.swiper-container2').show();
			ev.cancelBubble = true;
			
	})
	$('.appear').on('click',function(ev){
		$('.p3move').animate({
			opacity:'1',
		})
		$('.swiper-container2').hide();
		ev.cancelBubble = true;
		return false;
	})
	// 第5页点击出现
	var h = $('.dian').outerHeight();
	var w = $('.dian').outerWidth();
	$('.dian').click(function(){
		var dianindex = $(this).index('.dian');
		$('.produce').eq(dianindex).delay(500).css({
			transform: 'translateZ(12px)',
			opacity:1,
		})
		$('.del').click(function(){
			$('.produce').eq(dianindex).css({
				opacity:0,
				transform: 'scale(.1)'
			})
		})
	})


//流星1的滑动
var staroneTimer = null;
var startwoTimer = null;
var starthreeTimer = null;
var timer = null;
var timer1 = null;
var timer2 = null;
starone = document.querySelector('.流星');
startwo = document.querySelector('.流星2');
starthree = document.querySelector('.流星3')
slide = document.querySelectorAll('.swiper-slide');

	timer = setInterval(function(){
		starone.style.left = starone.offsetLeft-30+'px';
	starone.style.top = starone.offsetTop+10+'px';
	if (starone.offsetTop>=slide[0].offsetHeight+200) {

		starone.style.left = 600*scaleW+'px';
		starone.style.top = 500*scaleH+'px';
	}
	},35);

	timer1 = setInterval(function(){
		startwo.style.left = startwo.offsetLeft+25+'px';
	    startwo.style.top = startwo.offsetTop+5+'px';
	   if (startwo.offsetLeft>=slide[0].offsetLeft+1000) {

			startwo.style.left = -280*scaleW+'px';
			startwo.style.top = 0*scaleH+'px';
		}
		},35);

	timer2 = setInterval(function(){
		starthree.style.left = starthree.offsetLeft-25+'px';
	    starthree.style.top = starthree.offsetTop-10+'px';
	   if (starthree.offsetLeft<=-1000) {

			starthree.style.left = 600*scaleW+'px';
			starthree.style.top = 100*scaleH+'px';
		}
		},30);


//页脚图标
foot = document.querySelectorAll('.foot')[0];
var foottimer = null;
var tt = foot.offsetTop;
foottimer = setInterval(function(){
	var t = 0;
	var b = tt;
	var c = 1120*scaleH-tt;
	var d = 30;

	var footstimer = null;
	footstimer = setInterval(function(){
		t++;
		if (t>=d) {
			clearInterval(footstimer);
			
			foot.style.top = 1146*scaleH+'px';
		}
		foot.style.top = Tween.Cubic.easeOut(t,b,c,d)+'px';
	},30);
},1000);
	

