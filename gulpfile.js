const gulp = require("gulp");
const webserver = require("gulp-webserver");
const express = require("express");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const csso = require("gulp-csso");
const autoprefixer = require("gulp-autoprefixer");
// const https = require("https");
//const http = require("http");
const fs = require("fs");


//想要用以前项目的package.json  删除node_modules package-lock.json 
//cmd 输入 npm install 重新安装读取package.json 生成删除的那两个文件


gulp.task("compileJS", () => {
    gulp.src("src/scripts/**/*.js")
        .pipe(babel({
            presets: ["@babel/env"]
        }))
        .pipe(uglify())
        .pipe(gulp.dest("dist/scripts"))
    gulp.src("src/pages/home/**/*.js")
        .pipe(babel({
            presets: ["@babel/env"]
        }))
        .pipe(uglify())
        .pipe(gulp.dest("dist/pages/home"))
    gulp.src("src/static/**/*").pipe(gulp.dest("dist/static"));
})

gulp.task("compileCSS", () => {
    gulp.src("src/styles/**/*.scss")
        .pipe(sass()) //转成css文件
        .pipe(autoprefixer())
        .pipe(csso()) //压缩css文件
        .pipe(gulp.dest("dist/styles"))
})

gulp.task("compileHTML", () => {
    gulp.src("src/pages/**/*.html")
        .pipe(gulp.dest("dist/pages"))
})



gulp.task("server", function () {
    //静态资源服务器 端口9999
    //cmd安装静态资源服务器 npm install gulp-webserver -D

    // webserver方法  浏览器地址栏直接写 http:localhost:8000/source路径 服务器会自动去找target路径
    gulp.src('dist')//读取dist是编译后可以运行的项目文件
        .pipe(webserver({
            port: 9999,
            livereload: true,
            //热重载 改了任何html js文件 不用手动刷新页面就可以显示出来
        }));
    //静态服务器实时监听文件有修改 就重新执行编译任务
    gulp.watch("src/pages/**/*.js", ["compileJS"]);
    gulp.watch("src/scripts/**/*.js", ["compileJS"]);
    gulp.watch("src/styles/**/*.scss", ["compileCSS"]);
    gulp.watch("src/pages/**/*.html", ["compileHTML"]);

    //动态接口代理服务器express /home相当于服务器接口
    //端口8000
    /*
    let app = express();
    app.get("/item", (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*"); //cors
        res.setHeader("Content-Type", "text/plain; charset=utf8");
        let proxy = https.request({ //代理服务器
            hostname: "https://www.purcotton.com",
            //req.hostname / req.ip：获取主机名和IP地址
            //请求要代理的服务器
            path: "/mall/CommodityList/getCommodityListForPage.ihtml",
            //req.path：获取请求路径         
            method: "get",
            headers: {
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*;q=0.8",
                "Accept-Encoding":"gzip, deflate, br",
                "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
                "Cache-Control": "no-cache",
                "Connection": "keep-alive",
                "Host": "www.purcotton.com",
                "Pragma": "no-cache",
                "Upgrade-Insecure-Requests": 1,
                "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36"
            }
        }, (response) => {
            response.pipe(res);
        });
        //res.send(res);
        proxy.end();
    res.end("gyg");
    })
    app.listen(8000);
    */
})

gulp.task("build", ["compileJS", "compileCSS", "compileHTML"]);
//buld任务 可以一次执行所有编译任务 项目一开始使用
//后期某个文件有变化 监听该文件的单个任务就会执行
// gulp.task("getjson", function(reqinfo, res){
// 	//请求数据库文件
// 	let data = fs.readFileSync(__dirname + "/static/json-data/items.json");
// 	// console.log(data);
// 	res.setHeader("Content-Type","text/plain; charset=utf8");

// 	res.write(data.toString());
// 	res.end();
// })