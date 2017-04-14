/**
 * User: Ushow Jack/youshoujie@tomee.cn
 * Date: 2017/4/11
 * Time: 16:04
 */
"use strict"
/**
 * 处理forEach兼容性问题
 * @param callBack
 * @param context
 */
Array.prototype.myForEach = function myForEach(callBack, context) {
    typeof context === "undefined" ? context = window : null;

    if (Array.prototype.forEach === "Function") {
        this.forEach(callBack, context);
        return;
    }

    //->不兼容处理
    for (var i = 0; i < this.length; i++) {
        typeof callBack === "function" ? callBack.call(context, this[i], i, this) : null;
    }
};


/**
 * 获取当前时间方法
 *
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
function Timestamp(url) {

    let getTimestamp = GetDate();

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
//function multswitchClassFn(elems, className) {
//    let Arr = Array.prototype.slice.call(elems);
//    if (Arr.length > 0) {
//        Arr.myForEach(function (el) {
//            switchClassFn(el, className);
//        });
//    }else {
//        switchClassFn(elems, className);
//    }
//}