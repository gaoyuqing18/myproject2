
function ajax(options) {
	let defaults = { type : "get" };
	Object.assign(defaults, options);
	
	let xhr = null;
	if(window.VBArray) {
		xhr = new ActiveXObject("Msxml2.XMLHTTP");
	} else {
		xhr = new XMLHttpRequest();
	}
	
	xhr.open(defaults.type, defaults.url);
	xhr.onload = function(){
		defaults.success ? defaults.success( defaults.dataType=="json"?JSON.parse(xhr.response): xhr.response) : "";
	};
	if(defaults.type == "get") {
		xhr.send();
	}
	if(defaults.type == "post") {
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send(defaults.data);
	}
}
