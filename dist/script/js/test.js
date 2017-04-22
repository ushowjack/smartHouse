/**
 * Created with ES6.
 * User: Ushow Jack/youshoujie@tomee.cn
 * Date: 2017/4/17
 * Time: 11:21
 */
"use strict";

f = function f(a, b) {
    a *= 2;
    b *= 3;
    return a + b;
};

var bar = function bar() {
    var _this = this;

    name = 'apple';
    get = function get() {
        //this.name = 'ccc';
        return _this.name;
    };
};
function foo() {
    var _this2 = this;

    setTimeout(function () {
        console.log('id:', _this2.id);
    }, 100);
}
//# sourceMappingURL=test.js.map
