/**
 * Created with ES6.
 * User: Ushow Jack/youshoujie@tomee.cn
 * Date: 2017/4/21
 * Time: 14:11
 */
"use strict";

var sidebar = [{
    mainlist: "wanggebi", sublist: [{ name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }]
}, {
    mainlist: "wanggebi", sublist: [{ name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }]
}, {
    mainlist: "wanggebi"
}, {
    mainlist: "wanggebi", sublist: [{ name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }]
}, {
    mainlist: "wanggebi", sublist: [{ name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }]
}, {
    mainlist: "wanggebi"
}, {
    mainlist: "wanggebi", sublist: [{ name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }]
}, {
    mainlist: "wanggebi", sublist: [{ name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }]
}, {
    mainlist: "wanggebi"
}, {
    mainlist: "wanggebi", sublist: [{ name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }]
}, {
    mainlist: "wanggebi", sublist: [{ name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }]
}, {
    mainlist: "wanggebi"
}, {
    mainlist: "wanggebi", sublist: [{ name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }]
}, {
    mainlist: "wanggebi", sublist: [{ name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }]
}, {
    mainlist: "wanggebi"
}, {
    mainlist: "wanggebi", sublist: [{ name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }, { name: "wangxiaobi" }]
}];

var sidebarComponent = new Vue({
    el: '.side-bar',
    template: "\n         <div class=\"side-bar\">\n            <ul class=\"mainmenu\">\n                <li class=\"mainlist\" v-for=\"(item,index) in sidebar\">\n                    <a :href=\"'#' + item.mainlist\">{{item.mainlist}}</a>\n                    <ul class=\"submenu\" v-if=\"item.sublist\">\n                        <li class=\"sublist\" v-for=\"(subItem,index) in item.sublist\">\n                            <a :href=\"'#'+subItem.name\">{{subItem.name}}</a>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    ",
    data: {
        'sidebar': sidebar
    }
});
//# sourceMappingURL=sidebarComponent.js.map
