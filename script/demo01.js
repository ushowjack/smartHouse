/**
 * Created by ushow on 2017/4/23.
 */
var ES = {
    legend: function legend(data, xlegen="center", ylegen="20") {

        var legend = {
            show: sheet.isCase(),
            itemWidth: 35,
            textStyle: {
                fontSize: 20,
            },
            // x: xlegen || 'center'
            // ,
            data: data
        };

        return legend;
    }
}
sheet.ES.legend(data,);