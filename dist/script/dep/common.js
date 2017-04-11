/**
 * User: Ushow Jack/youshoujie@tomee.cn
 * Date: 2017/4/11
 * Time: 16:04
 */
"use strict"

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