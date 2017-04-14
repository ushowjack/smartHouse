/**
 * Created by ushow jack on 2017/4/5.
 */
"use strict"

var gulp = require("gulp"),
    rename = require("gulp-rename"),
    cleancss = require("gulp-clean-css"),
    //less需要插件
    less = require("gulp-less"),
    autoprefixer = require("gulp-autoprefixer"),
    sourcemaps = require("gulp-sourcemaps"),
    uglify = require("gulp-uglify"),
    changed = require("gulp-changed"),
    clean = require("gulp-clean"), // 文件清理
    plumber = require("gulp-plumber"),//异常处理插件，不会中断打包
    babel = require("gulp-babel"),//引入es6编译插件
    imagemin = require("gulp-imagemin");


//jsBabel 只是对JavaScript文件进行编译，最后导出看编译的效果，没有实际意义
//方便学习和查编译是够存在问题时使用
gulp.task("jsBabel", function () {
    return gulp.src(["script/**/*.js", "!script/dep/**/*"], {base: "script"})
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ["es2015"]
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist/script/js/"));
});

//jsUglify 对JavaScript文件进行编译，并且压缩文件，在此避免压缩依赖压缩文件
//是项目最终需要引入的文件。
gulp.task("jsUglify", function () {
    return gulp.src(["script/**/*.js", "!script/dep/**/*"], {base: "script"})
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ["es2015"]
        }))
        .pipe(uglify().on("error", function (e) {
            console.log(e)
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist/script/"));
});

gulp.task("jsminLoad", function () {
    return gulp.src("script/dep/*", {base: "script"})
        .pipe(gulp.dest("dist/script/"));
});

//打包less文件
gulp.task("lessMin", function () {
    return gulp.src(["style/*.less", "style/**/*.less", "!style/mixins/*.less"], {base: 'style'})
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer({
            browsers: [">5%"],
            cascade: true, //是否美化属性值 默认：true
            remove: true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest("dist/style/css/"));
});

//打包css文件

gulp.task("cssMin", function () {
    return gulp.src(["style/*.{less,css}", "style/**/*.{less,css}", "!style/mixins/*.less"], {base: 'style'})
        .pipe(plumber())
        .pipe(less())
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: [">5%"],
            cascade: true, //是否美化属性值 默认：true
            remove: true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(cleancss({compatibility: "ie8"}))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist/style/"))
});


//监视js
gulp.task("jsWatch", function () {
    gulp.watch("script/**/**", ["jsUglify"]);
});
gulp.task("babelWatch", function () {
    gulp.watch("script/**/**", ["jsBabel"]);
});

//监视less
gulp.task("lessWatch", function () {
    gulp.watch(["style/*.{less,css}", "style/**/*.{less,css}", "!style/mixins/*.less"], ["lessMin"]);
});
//监视css
gulp.task("cssWatch", function () {
    gulp.watch(["style/*.{less,css}", "style/**/*.{less,css}", "!style/mixins/*.less"], ["cssMin"]);
});


//为解决删除文件时无法在打包文件处删除的问题，先将style下面所有文件删除，再重新打包一次，不推荐使用，只是用来玩一下
gulp.task("clean", function () {
    return gulp.src("dist/*", {read: false})
        .pipe(clean());
});

gulp.task("testImagemin", function () {
    gulp.src("image/*.{png,jpg,gif,ico}")
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest("dist/image"));
});

gulp.task("build", ["jsUglify", "jsBabel", "jsminLoad", "cssMin", "lessMin"]);
gulp.task("deepBuild", ["jsUglify", "jsBabel", "jsminLoad", "cssMin", "lessMin", "testImagemin"]);
gulp.task("watch", ["jsWatch", "cssWatch", "babelWatch", "lessWatch"]);