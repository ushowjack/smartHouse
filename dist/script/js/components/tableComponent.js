/**
 * Created with ES6.
 * User: Ushow Jack/youshoujie@tomee.cn
 * Date: 2017/4/21
 * Time: 11:43
 */
"use strict";
/**
 * data =  [
 *    [{val:1,sort:false},{val:1,sort:true},{val:1,sort:true},{val:1,sort:true}],
 *    [1,2,3,4],
 *    [1,2,3,4],
 *    [1,2,3,4],
 * ]
 * @param data
 */

var table = [[{ name: "gfawt", sort: true }, { name: "gfawt", sort: true }, { name: "gfawt", sort: false }], ["gfawt", "fewfgw", "gwgw"], ["gfawt", "fewfgw", "gwgw"], ["gfawt", "fewfgw", "gwgw"]];
var tableComponent = new Vue({
    el: '.table',
    template: "\n        <table class=\"table\">\n            <template v-for=\"(item,index) in table\">\n                <thead v-if=\"index === 0\">\n                    <tr>\n                        <th>#</th>\n                        <th v-for=\"(childrenItem,index) in item\">\n                            {{childrenItem.name}}\n                            <span v-if=\"childrenItem.sort\">/</span>\n                        </th>\n                    </tr>\n                </thead>\n                <tbody v-else>\n                    <tr>\n                        <td>{{index}}</td>\n                        <td v-for=\"(childrenItem,index) in item\">{{childrenItem}}</td>\n                    </tr>\n                </tbody>\n            </template>\n        </table>\n    ",
    data: {
        'table': table
    }

});
//# sourceMappingURL=tableComponent.js.map
