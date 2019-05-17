const gulp = require("gulp");
const webserver = require("gulp-webserver");
const express = require("express");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const csso = require("gulp-csso");
const autoprefixer = require("gulp-autoprefixer");
const https = require("https");
const http = require("http");


//想要用以前项目的package.json  删除node_modules package-lock.json 
//cmd 输入 npm install 重新安装读取package.json 生成删除的那两个文件


gulp.task("compileJS", ()=>{
	gulp.src("src/scripts/**/*.js")
		.pipe( babel({
			presets : ["@babel/env"]
		}) )
		.pipe( uglify() )
		.pipe( gulp.dest("dist/scripts") )
	gulp.src("src/pages/**/*.js")
		.pipe( babel({
			presets : ["@babel/env"]
		}) )
		.pipe( uglify() )
		.pipe( gulp.dest("dist/pages") )
	gulp.src("src/static/**/*").pipe( gulp.dest("dist/static") );
})

gulp.task("compileCSS", ()=> {
    gulp.src("src/styles/**/*.scss")
     .pipe( sass( )) //转成css文件
     .pipe( autoprefixer() )
     .pipe( csso() ) //压缩css文件
     .pipe( gulp.dest("dist/styles"))
})

gulp.task("compileHTML", ()=> {
    gulp.src("src/pages/**/*.html")
     .pipe( gulp.dest("dist/pages"))
})


gulp.task("server", function() {
    //静态资源服务器 端口9999
    //cmd安装静态资源服务器 npm install gulp-webserver -D
    gulp.src('dist')//读取dist是编译后可以运行的项目文件
     .pipe(webserver({
         port : 9999,
         livereload : true,
         //热重载 改了任何html js文件 不用手动刷新页面就可以显示出来
     }));
     //静态服务器实时监听文件有修改 就重新执行编译任务
     gulp.watch("src/pages/**/*.js", ["compileJS"]);
     gulp.watch("src/scripts/**/*.js", ["compileJS"]);
     gulp.watch("src/styles/**/*.scss", ["compileCSS"]);
     gulp.watch("src/pages/**/*.html", ["compileHTML"]);

    //动态接口代理服务器express /home相当于服务器接口
    //端口8000
     let app = express();
     app.get("/home", (req, res) => {
        res.setHeader("Access-Control-Allow-Origin","*"); //cors
		res.setHeader("Content-Type","text/plain; charset=utf8");
        let proxy = https.request({ //代理服务器
              hostname : "www.smartisan.com",
              //请求要代理的服务器
              path : "/product/shop_categories",
              method : "get"},(response) => {
                  response.pipe(res);
              });
              proxy.end();
        })
     app.listen(8000);
 })

 gulp.task("buld", ["compileJS","compileCSS","compileHTML"]);
//buld任务 可以一次执行所有编译任务 项目一开始使用
//后期某个文件有变化 监听该文件的单个任务就会执行