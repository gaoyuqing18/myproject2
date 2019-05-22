//判断一个字符串中是否包含特殊符号
function hasSpecial(str) {
	for (var i in str) {
		var asc = str.charCodeAt(i);
		if (!(asc >= 48 && asc <= 57 || asc >= 65 && asc <= 90 || asc >= 97 && asc <= 122)) {
			return true;
		}
	}
	return false;
}

//判断一个字符串中是否包含字母
function hasLetter(str) {
	for (var i in str) {
		var asc = str.charCodeAt(i);
		if ((asc >= 65 && asc <= 90 || asc >= 97 && asc <= 122)) {
			return true;
		}
	} 
	return false;
}

//判断一个字符串中是否包含数字
function hasNumber(str) {
	for (var i in str) {
		var asc = str.charCodeAt(i);
		if (asc >= 48 && asc <= 57) {
			return true;
		}
	} 
	return false;
}

function numberDoubled(n){
	n = n+"";
	return n.length==1?"0"+n:n;
}

function date2string(d, sp){
	
	sp = sp || "-";
	
	var year = d.getFullYear();
	var month = d.getMonth()+1;
	var date = d.getDate();
	var hour = d.getHours();
	var min = d.getMinutes();
	var sec = d.getSeconds();
	
	return year + sp + numberDoubled(month) + sp + date + " " + numberDoubled(hour) + ":" + numberDoubled(min) + ":" + numberDoubled(sec);
}

//判断某年份是否为闰年
function isLeapYear(year) {
	return year%400==0 || (year%4==0 && year%100!=0);
}

//获得某个月份的天数
function getDaysOfMonth(month){
	
}

//将字符串转换为日期   2019.08.24 
function string2date(str){
	if( hasLetter(str) ) {
		throw new Error("哥们儿，你写错了！！");
	}
	return new Date(str);
}

// 判断两个日期相差的天数
function betweenDates(d1, d2){
	var res = Math.abs(d1.getTime() - d2.getTime());
	return res/1000/60/60/24;
}

// 获得N天以后的日期
function getDateAfterNdays(n){
	var now = new Date();
	now.setDate( now.getDate()+n );
	return now;
}

//获取指定范围的随机数
function randomInt(a, b) {
	if(parseInt(a) != a || parseInt(b) != b) {
		throw new Error("请输入整数参数！！")
	}
	return Math.min(a,b)+ Math.floor(Math.random()*Math.abs(a-b))
}

//获取一个16进制的随机颜色
function randomColor(){
	var r = randomInt(0,255).toString(16);
	var g = randomInt(0,255).toString(16);
	var b = randomInt(0,255).toString(16);
	return "#"+ numberDoubled(r)+numberDoubled(g)+numberDoubled(b);
}

//获取非行内样式（兼容IE）
function getStyle(ele, prop) {
	if(ele.currentStyle) { //IE
		return ele.currentStyle[prop];
	} else { //标准
		return getComputedStyle(ele)[prop];
	}
}

// function $(id) {
// 	return document.getElementById(id);
// }

function getPagePos(ele){
	if(!ele) throw new Error("ele参数有问题，无法获取位置");
	var _left = ele.offsetLeft;
	var _top = ele.offsetTop;
	while(ele.offsetParent) {
		_left += ele.offsetParent.offsetLeft;
		_top += ele.offsetParent.offsetTop;
		ele = ele.offsetParent;
	}
	return {
		x : _left,
		y : _top
	};
}

function addCookie(key,value,days) {
	var now = new Date();
	now.setDate(now.getDate() + days);
	document.cookie = key+"="+value+"; expires="+now;
}

function getCookie(key) {
	var str = document.cookie; 
	if(!str) return null;
	
	var reg1 = new RegExp(key+"=([^;]+)$");
	var reg2 = new RegExp(key+"=([^;]+);");
	if(reg1.test(str)) {
		return str.match(reg1)[1];
	} else {
		return str.match(reg2)[1];
	}
}

function debounce(fn, delay) {
	let t = null;
	return function(){
		clearTimeout(t);
		t = setTimeout(()=>{
			fn()
		}, delay);
	}
}

function throttle(fn, duration) {
	let lasttime = 0;
	return function(){
		let now = new Date().getTime();
		if(now - lasttime > duration) {
			fn(arguments);
			lasttime = new Date().getTime();
		}
	}
}