requirejs.config({
	baseUrl : "http://localhost:9999/",
	paths : {
		"vali" : "scripts/libs/jquery.validate",
		"jquery" : "scripts/libs/jquery-2.0.3",
		"sw" : "scripts/libs/swiper",
		"jq.cookie" : "scripts/libs/jquery.cookie",
		"bootstrap" : "scripts/libs/bootstrap",
		"jquery.ui" : "static/scripts/jquery-ui",
		"css" : "scripts/libs/css",  //加载CSS文件的插件
		"template" : "scripts/libs/template-web",
	},
	shim : {
		"jq.cookie" : {
			deps : ["jquery"]
		},
		"sw" : {
			deps : ["css!styles/swiper.css"]
			//引入css文件
			//文件位置是编译后的 scss文件已经变成css文件了
		},
		"bootstrap" : {
			deps : [
				"jquery",
				"css!styles/bootstrap.css"
			]
		}
	}
})