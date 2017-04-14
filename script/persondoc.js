/**
 * Created with ES6.
 * User: Ushow Jack/youshoujie@tomee.cn
 * Date: 2017/4/13
 * Time: 15:03
 */
"use strict"

let mainMenu = document.querySelectorAll(".mainlist>a");
let submain = document.querySelectorAll(".submenu");

Array.prototype.slice.call(submain).myForEach(function (el) {
    switchClassFn(el, "hidden");
});
let control = [];

Array.prototype.slice.call(mainMenu).myForEach(function (el, index) {
    //设置开关
    console.log(control);
    control[index] = true;
    el.onclick = function () {
        //清除所有active
        Array.prototype.slice.call(document.querySelectorAll(".mainlist>a")).myForEach(function (el) {
            removeClass(el, "active");
        });
        //添加active类
        switchClassFn(el, "active");

        //把所有显示的隐藏
        $(".submenu.show").addClass("hidden").removeClass("show");

        //为了判断是否有子菜单防止报错
        let selfUl = $(el).next().length;
        //点击修改显示状态
        if (selfUl > 0) {
            if (control[index]) {
                $(el).next().removeClass("hidden").addClass("show");
                console.log(control[index]);
                control[index] = !control[index];
            } else {
                $(el).next().addClass("hidden").removeClass("show");
                console.log(control[index]);
                control[index] = !control[index];

            }
        }
    };
})

