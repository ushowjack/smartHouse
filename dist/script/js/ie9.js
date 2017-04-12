/**
 * Created with ES6.
 * User: Ushow Jack/youshoujie@tomee.cn
 * Date: 2017/4/12
 * Time: 17:48
 */
"use strict";

window.onload = function () {

    var placeholderFn = function placeholderFn(elemName) {
        var css = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            "color": "rgb(204, 204, 204)",
            "line-height": "40px",
            "font-size": "14px",
            "display": "inline",
            "position": "absolute",
            "top": 0,
            "left": 50,
            "z-index": 2
        };

        var inputItem = $(elemName);
        inputItem.each(function (index, element) {
            var placeholder = $(element).find("input").attr("placeholder");
            var txt = $("<txt>" + placeholder + "</txt>");
            txt.css(css);
            $(element).append(txt);
            $(element).find("input").focus(function () {
                txt.text("");
            });
            $(element).find("input").blur(function () {
                //alert(this.value);
                if (!this.value) {
                    txt.text(placeholder);
                }
            });
        });
    };
    placeholderFn(".input-item");
};
//# sourceMappingURL=ie9.js.map
