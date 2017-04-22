/**
 * Created with ES6.
 * User: Ushow Jack/youshoujie@tomee.cn
 * Date: 2017/4/21
 * Time: 14:11
 */
"use strict"
let sidebar = [
    {
        mainlist: "wanggebi", sublist: [
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"}
    ]
    },
    {
        mainlist: "wanggebi", sublist: [
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"}
    ]
    },
    {
        mainlist: "wanggebi"
    },
    {
        mainlist: "wanggebi", sublist: [
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"}
    ]
    },
    {
        mainlist: "wanggebi", sublist: [
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"}
    ]
    },
    {
        mainlist: "wanggebi"
    },
    {
        mainlist: "wanggebi", sublist: [
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"}
    ]
    },
    {
        mainlist: "wanggebi", sublist: [
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"}
    ]
    },
    {
        mainlist: "wanggebi"
    },
    {
        mainlist: "wanggebi", sublist: [
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"}
    ]
    },
    {
        mainlist: "wanggebi", sublist: [
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"}
    ]
    },
    {
        mainlist: "wanggebi"
    },
    {
        mainlist: "wanggebi", sublist: [
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"}
    ]
    },
    {
        mainlist: "wanggebi", sublist: [
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"}
    ]
    },
    {
        mainlist: "wanggebi"
    },
    {
        mainlist: "wanggebi", sublist: [
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"},
        {name: "wangxiaobi"}
    ]
    },
];

const sidebarComponent = new Vue({
    el: '.side-bar',
    template: `
         <div class="side-bar">
            <ul class="mainmenu">
                <li class="mainlist" v-for="(item,index) in sidebar">
                    <a :href="'#' + item.mainlist">{{item.mainlist}}</a>
                    <ul class="submenu" v-if="item.sublist">
                        <li class="sublist" v-for="(subItem,index) in item.sublist">
                            <a :href="'#'+subItem.name">{{subItem.name}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    `,
    data: {
        'sidebar': sidebar
    },
});
