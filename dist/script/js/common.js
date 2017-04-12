/**
 * User: Ushow Jack/youshoujie@tomee.cn
 * Date: 2017/4/11
 * Time: 16:04
 */
"use strict";
/**
 * 处理forEach兼容性问题
 * @param callBack
 * @param context
 */

Array.prototype.forEach = function forEach(callBack, context) {
    typeof context === "undefined" ? context = window : null;

    if ("forEach" in Array.prototype) {
        this.forEach(callBack, context);
        return;
    }

    //->不兼容处理
    for (var i = 0; i < this.length; i++) {
        typeof callBack === "function" ? callBack.call(context, this[i], i, this) : null;
    }
};

/**
 *  * 来源：JavaScript高级程序设计，由Ushow改写
 * @type {{get: CookieUtil.get, set: CookieUtil.set, unset: CookieUtil.unset}}
 * @version 1.0
 */
var CookieUtil = {
    /**
     * 获取cookie值
     * @param name {string}
     * @returns {strung} 返回对应的值
     */
    get: function get(name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;

        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
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
    set: function set(_ref) {
        var name = _ref.name,
            value = _ref.value,
            expires = _ref.expires,
            path = _ref.path,
            domain = _ref.domain,
            secure = _ref.secure;

        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if (expires) {
            var now = Date.now();
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
    unset: function unset(_ref2) {
        var name = _ref2.name,
            path = _ref2.path,
            domain = _ref2.domain,
            secure = _ref2.secure;

        this.set({ name: name, value: "", path: path, domain: domain, secure: secure });
    }
};

/**
 * 表单方法集合
 * @type {{placeholderOff: FormUtil.placeholderOff, placeholderOn: FormUtil.placeholderOn}}
 */
var FormUtil = {
    /**
     * 用于绑定input的placeholder事件
     * @example inputElem.forEach(FormUtil.setPlaceholder)
     * @param el {DOM对象}
     * @version 1.0
     */
    placeholderOff: function placeholderOff(ev) {
        ev.target.val = ev.target.getAttribute("placeholder");
        ev.target.setAttribute("placeholder", "");
    },
    placeholderOn: function placeholderOn(ev) {
        ev.target.setAttribute("placeholder", ev.target.val);
    },
    setPlaceholder: function setPlaceholder(el) {
        el.onfocus = FormUtil.placeholderOff;
        el.onblur = FormUtil.placeholderOn;
    }
};
//# sourceMappingURL=common.js.map
