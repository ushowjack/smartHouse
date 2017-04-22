/**
 * Created with ES6.
 * User: Ushow Jack/youshoujie@tomee.cn
 * Date: 2017/4/17
 * Time: 11:21
 */
"use strict"
f = (a, b) => {
    a *= 2;
    b *= 3;
    return a + b;
};

let bar = function () {
    name = 'apple';
    get = () => {
        //this.name = 'ccc';
        return this.name;
    }
}
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}