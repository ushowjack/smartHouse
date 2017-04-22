/**
 * Created with ES6.
 * User: Ushow Jack/youshoujie@tomee.cn
 * Date: 2017/4/13
 * Time: 15:03
 */
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var mainMenu = [].concat(_toConsumableArray(document.querySelectorAll(".mainlist>a")));

//Array.prototype.slice.call(mainMenu)
mainMenu.forEach(function (el, index) {
    el.onclick = function sideBarControl() {
        //返回开关状态,if opening return true,if close return false
        var control = function () {
            var opening = void 0;
            if ($(el).next().length) {
                opening = $(el).next()[0].className.indexOf("show") > -1;
            }
            return opening;
        }();
        //清除所有active
        Array.prototype.slice.call(document.querySelectorAll(".mainlist>a")).forEach(function (el) {
            removeClass(el, "active");
        });
        //remove active className from all of <a>
        //$(sublistLink).removeClass("active");

        //添加active类
        switchClassFn(el, "active");

        //把所有显示的隐藏
        $(".submenu.show").addClass("hidden").removeClass("show");

        //为了判断是否有子菜单防止报错
        var selfUl = $(el).next().length;

        //点击修改显示状态
        if (selfUl > 0) {
            if (!control) {
                $(el).next().removeClass("hidden").addClass("show");
            } else {
                $(el).next().addClass("hidden").removeClass("show");
            }
        }
    };
});

//when the sublist was active ,then set the submenu's className active（这么蹩脚的英文就是我自己写的）

var sublistLink = document.querySelectorAll(".sublist > a");
Array.prototype.slice.call(sublistLink).forEach(function (el) {
    el.onclick = function () {
        //remove active className from all of <a>
        $(sublistLink).removeClass("active");

        $(this).addClass("active");
    };
});
//# sourceMappingURL=persondoc.js.map
