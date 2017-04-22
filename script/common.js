/**
 * User: Ushow Jack/youshoujie@tomee.cn
 * Date: 2017/4/11
 * Time: 16:04
 */
"use strict"
/**
 * 处理Array.prototype兼容ie6~ie8问题
 */
if (typeof Array.prototype.forEach !== "function") {
    Array.prototype.forEach = function (fn, context) {
        for (let k = 0, length = this.length; k < length; k++) {
            if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, k)) {
                fn.call(context, this[k], k, this);
            }
        }
    };
}

if (typeof Array.prototype.map !== "function") {
    Array.prototype.map = function (fn, context) {
        let arr = [];
        if (typeof fn === "function") {
            for (let k = 0, length = this.length; k < length; k++) {
                arr.push(fn.call(context, this[k], k, this));
            }
        }
        return arr;
    };
}

if (typeof Array.prototype.filter !== "function") {
    Array.prototype.filter = function (fn, context) {
        let arr = [];
        if (typeof fn === "function") {
            for (let k = 0, length = this.length; k < length; k++) {
                fn.call(context, this[k], k, this) && arr.push(this[k]);
            }
        }
        return arr;
    };
}

if (typeof Array.prototype.some !== "function") {
    Array.prototype.some = function (fn, context) {
        let passed = false;
        if (typeof fn === "function") {
            for (let k = 0, length = this.length; k < length; k++) {
                if (passed === true) break;
                passed = !!fn.call(context, this[k], k, this);
            }
        }
        return passed;
    };
}

if (typeof Array.prototype.every !== "function") {
    Array.prototype.every = function (fn, context) {
        let passed = true;
        if (typeof fn === "function") {
            for (let k = 0, length = this.length; k < length; k++) {
                if (passed === false) break;
                passed = !!fn.call(context, this[k], k, this);
            }
        }
        return passed;
    };
}
if (typeof Array.prototype.reduce !== "function") {
    Array.prototype.reduce = function (callback, initialValue) {
        let previous = initialValue, k = 0, length = this.length;
        if (typeof initialValue === "undefined") {
            previous = this[0];
            k = 1;
        }

        if (typeof callback === "function") {
            for (k; k < length; k++) {
                this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
            }
        }
        return previous;
    };
}

if (typeof Array.from !== "function") {
    Array.from = function (arrayLike) {
        let Arr = Array.prototype.slice.call(arrayLike);
        return Arr;
    }
}


/**
 * 获取当前时间方法
 * @returns {string}
 * @constructor
 */
function GetDate() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let time = `${year}-${month}-${day} ${hours}:${min}:${sec}`;
    return time;
}
/**
 * 增加时间戳，解决浏览器缓存
 * @param url [string]
 * @returns {url}
 */
/**
 * version: 1.1  ushow jack
 *  to resolve the url add new timestamp but not delete the old timestamp
 */
function Timestamp(url) {

    let getTimestamp = GetDate();
    if (url.indexOf("timestamp") > -1) {
        url = url.substring(0, url.indexOf("timestamp") - 1);
    }
    if (url.indexOf("?") > -1) {
        url = `${url}&timestamp=${getTimestamp}`;
    } else {
        url = `${url}?timestamp=${getTimestamp}`;
    }
    return encodeURI(url);
}


/**
 *  * 来源：JavaScript高级程序设计，由Ushow改写
 * @type {{get: CookieUtil.get, set: CookieUtil.set, unset: CookieUtil.unset}}
 * @version 1.0
 */
let CookieUtil = {
    /**
     * 获取cookie值
     * @param name {string}
     * @returns {strung} 返回对应的值
     */
    get: function (name) {
        let cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;

        if (cookieStart > -1) {
            let cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd === -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }

        return cookieValue;
    },
    /**
     * 写入cookie方法
     * @param name{string}          键名
     * @param value{string/num}     键值
     * @param expires{int}          有效天数（默认浏览器关闭后清除）
     * @param path{string}          路径
     * @param domain{string}        域名（默认当前域名）
     * @param secure{boolean}       安全
     */
    set: function ({name, value, expires, path, domain, secure}) {
        let cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if (expires) {
            let now = Date.now();
            expires = new Date(now + expires * 86400000);
        }
        if (expires instanceof Date) {
            cookieText += "; expires=" + expires.toGMTString();
        }
        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }
        document.cookie = cookieText;
    },
    /**
     * 覆盖cookie函数
     * @param name{string}          键名
     * @param path{string}          路径
     * @param domain{string}        域名（默认当前域名）
     * @param secure{boolean}       安全
     */
    unset: function ({name, path, domain, secure}) {
        this.set({name: name, value: "", path: path, domain: domain, secure: secure});
    }
}

/**
 * 表单方法集合
 * @type {{placeholderOff: FormUtil.placeholderOff, placeholderOn: FormUtil.placeholderOn, setPlaceholder: FormUtil.setPlaceholder, placeholderPolyfill: FormUtil.placeholderPolyfill}}
 */
let FormUtil = {
    /**
     * 用于绑定input的placeholder事件
     * @example inputElem.forEach(FormUtil.setPlaceholder)
     * @param el {DOM对象}
     * @version 1.0
     */
    placeholderOff: function (ev) {
        ev.target.val = ev.target.getAttribute("placeholder");
        ev.target.setAttribute("placeholder", "");
    },
    placeholderOn: function (ev) {
        ev.target.setAttribute("placeholder", ev.target.val);
    },
    setPlaceholder: function (el) {
        el.onfocus = FormUtil.placeholderOff;
        el.onblur = FormUtil.placeholderOn;
    },
    /**
     * 解决IE9不能使用placeholder的问题，输入想使用placeholder的选择器
     * 设置对应input的标签的placeholder的值即可
     * @depend  jQuery
     * @example placeholderFn(".input-item");
     * @param elemName
     * @param css
     */
    placeholderPolyfill: function (elemName, css = {
        "color": "rgb(204, 204, 204)",
        "line-height": "40px",
        "font-size": "14px",
        "position": "absolute",
        "display": "inline",
        "top": 0,
        "left": 50,
        "z-index": 2
    }) {
        let inputItem = $(elemName);
        inputItem.each(function (index, element) {
            let placeholder = $(element).find("input").attr("placeholder");
            let txt = $(`<txt>${placeholder}</txt>`);
            txt.css(css);
            $(element).append(txt);
            $(element).find("input").focus(function () {
                txt.text("");
            });
            $(element).find("input").blur(function () {

                if (!this.value) {
                    txt.text(placeholder);
                }
            });
        });
    }
}


/**
 * 给指定单一元素添加类名的开关
 * @param el
 * @param className
 */
function switchClassFn(el, className) {
    let classNameAll = el.className;
    let nameIndex = classNameAll.indexOf(` ${className}`);
    if (nameIndex > -1) {
        classNameAll = classNameAll.replace(` ${className}`, "");
    } else {
        classNameAll += ` ${className}`;
    }
    return el.className = classNameAll;
}

/**
 * 清除类名
 * @param el
 * @param className
 */
function removeClass(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

}

//todo 写一个事件委托的函数
//let DOM = {
//    eventDepute,
//};

/**
 * * 兼容到IE7
 * @type {{createXHR: (()), addURLParam: ((url, name?, value?))}}
 */
let AJAXFn = {
    createXHR(){
        if (typeof XMLHttpRequest !== "undefined") {
            return new XMLHttpRequest();
        } else if (typeof ActiveXObject !== "undefined") {
            if (typeof createXHR.activeXString !== "undefined") {
                let versions = [
                        'Msxml2.XMLHTTP.5.0',
                        'Msxml2.XMLHTTP.4.0',
                        'Msxml2.XMLHTTP.3.0',
                        'Msxml2.XMLHTTP',
                        'Microsoft.XMLHTTP'],
                    i,
                    len;
                for (i = 0, len = versions.length; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        createXHR.activeXString = versions[i];
                        break;
                    } catch (ex) {
                        //    跳过
                    }
                }
            }
            return new ActiveXObject(createXHR.activeXString);
        } else {
            throw new Error("你的浏览器版本太旧，请及时更新！")
        }

    },
    addURLParam(url, name, value){
        url += (url.indexOf("?") == -1 ? "?" : "&");
        url += `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
        return url;
    }
}

let serialize = {
    serializeInput(elArr){
        let len = elArr.length,
            msg = [],
            i;
        for (i = 0; i < len; i++) {
            msg.push(`${encodeURIComponent(elArr[i].name)}=${encodeURIComponent(elArr[i].value)}`);
        }
        return msg.join("&");
    },
    checkForm(){
        let msg = document.querySelector(".forget>span");
        if (msg.className === "warn"){
            return false;
        }
        return true;
    }
}


