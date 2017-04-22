/**
 * Created with ES6.
 * User: Ushow Jack/youshoujie@tomee.cn
 * Date: 2017/4/12
 * Time: 10:15
 */
"use strict";

//由于myForEach不是原生的遍历器，要把类数组转成数组

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var inputElem = [].concat(_toConsumableArray(document.querySelectorAll("input")));
//Array.prototype.forEach.apply(FormUtil.setPlaceholder,inputElem);
inputElem.forEach(FormUtil.setPlaceholder);

//添加captcha的点击事件
var captchaIMG = document.querySelector("img[alt='captcha']");
captchaIMG.onclick = function () {
    return captchaIMG.src = Timestamp(captchaIMG.src);
};

//the input[name='captcha'] add a keyUp event to check the captcha
var captchaInput = document.querySelector("input[name='captcha']");

captchaInput.onkeyup = function () {
    var msg = document.querySelector(".forget>span");
    if (captchaInput.value.length >= 4) {
        //创建XMLHttpRequest对象
        var xhr = AJAXFn.createXHR();
        var url = URL + "/captcha/captcha/" + captchaInput.value;
        //url = AJAXFn.addURLParam(url,"captcha",captchaInput.value);
        //配置XMLHttpRequest对象
        //console.log(url);
        xhr.open("get", url, true);
        //设置回调函数
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var responseText = JSON.parse(xhr.responseText);
                if (responseText.status === "101201") {
                    msg.innerText = "验证码输入正确";
                    msg.className = "success";
                } else {
                    msg.innerText = "验证码输入错误";
                    msg.className = "warn";
                }
            }
        };
        //发送请求
        xhr.send(null);
    } else {
        msg.innerText = "";
    }
};

//Add the form check to jump to the main web page
var loginBtn = document.querySelector("#login");
loginBtn.onclick = function () {
    captchaIMG.src = Timestamp(captchaIMG.src);
    var msg = document.querySelector(".forget>span");
    if (serialize.checkForm()) {
        var xhr = AJAXFn.createXHR();
        var inputArr = [].concat(_toConsumableArray(document.querySelectorAll("input")));
        var url = URL + "/logincheck";

        xhr.open("post", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var responseText = JSON.parse(xhr.responseText);
                console.log(responseText);
                if (responseText.status === '101100') {
                    msg.innerText = responseText.msg;
                    msg.className = "warn";
                }
            }
        };
        console.log(serialize.serializeInput(inputArr));
        xhr.send(serialize.serializeInput(inputArr));
    }
};
//# sourceMappingURL=login.js.map
