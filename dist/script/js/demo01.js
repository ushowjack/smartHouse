"use strict";

/**
 * Created by ushow on 2017/4/23.
 */
var ES = {
    legend: function legend(data) {
        var xlegen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "center";
        var ylegen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "20";


        var legend = {
            show: sheet.isCase(),
            itemWidth: 35,
            textStyle: {
                fontSize: 20
            },
            // x: xlegen || 'center'
            // ,
            data: data
        };

        return legend;
    }
};
sheet.ES.legend(data);
//# sourceMappingURL=demo01.js.map
