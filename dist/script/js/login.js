/**
 * Created with ES6.
 * User: Ushow Jack/youshoujie@tomee.cn
 * Date: 2017/4/12
 * Time: 10:15
 */
"use strict";

//由于myForEach不是原生的遍历器，要把类数组转成数组

var inputElem = document.querySelectorAll("input");
Array.prototype.myForEach.apply(FormUtil.setPlaceholder, inputElem);
//# sourceMappingURL=login.js.map
