function randNum(){
    return ((Math.floor( Math.random()* (1+40-20) ) ) + 20)* 1200;
}

function randNum2(){
    return ((Math.floor( Math.random()* (1+40-20) ) ) + 20) * 500;
}

function randNum3(){
    return ((Math.floor( Math.random()* (1+40-20) ) ) + 20) * 300;
}

function randNum4(){
    return ((Math.floor( Math.random()* (1+40-20) ) ) + 20) * 100;
}

$(document).ready(function(){

    /* ---------- Chart with points ---------- */
    if($("#facebookChart").length)
    {
        // statistic_eps_stat_device
        var likes = [[1, 5+randNum()], [2, 10+randNum()], [3, 15+randNum()], [4, 20+randNum()],[5, 25+randNum()],[6, 30+randNum()],[7, 35+randNum()],[8, 40+randNum()],[9, 45+randNum()],[10, 50+randNum()],[11, 55+randNum()],[12, 60+randNum()],[13, 65+randNum()],[14, 70+randNum()],[15, 75+randNum()],[16, 80+randNum()],[17, 85+randNum()],[18, 90+randNum()],[19, 85+randNum()],[20, 80+randNum()],[21, 75+randNum()],[22, 80+randNum()],[23, 75+randNum()],[24, 70+randNum()],[25, 65+randNum()],[26, 75+randNum()],[27,80+randNum()],[28, 85+randNum()],[29, 90+randNum()], [30, 95+randNum()]];

        var plot = $.plot($("#facebookChart"),
            [ { data: likes, label: "Fans"} ], {
                series: {
                    lines: { show: true,
                        lineWidth: 2,
                        fill: true, fillColor: { colors: [ { opacity: 0.5 }, { opacity: 0.2 } ] }
                    },
                    points: { show: true,
                        lineWidth: 2
                    },
                    shadowSize: 0
                },
                grid: { hoverable: true,
                    clickable: true,
                    tickColor: "#f9f9f9",
                    borderWidth: 0
                },
                colors: ["#3B5998"],
                xaxis: {ticks:6, tickDecimals: 0},
                yaxis: {ticks:3, tickDecimals: 0},
            });

        function showTooltip(x, y, contents) {
            $('<div id="tooltip">' + contents + '</div>').css( {
                position: 'absolute',
                display: 'none',
                top: y + 5,
                left: x + 5,
                border: '1px solid #fdd',
                padding: '2px',
                'background-color': '#dfeffc',
                opacity: 0.80
            }).appendTo("body").fadeIn(200);
        }

        var previousPoint = null;
        $("#facebookChart").bind("plothover", function (event, pos, item) {
            $("#x").text(pos.x.toFixed(2));
            $("#y").text(pos.y.toFixed(2));

            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;

                    $("#tooltip").remove();
                    var x = item.datapoint[0].toFixed(2),
                        y = item.datapoint[1].toFixed(2);

                    showTooltip(item.pageX, item.pageY,
                        item.series.label + " of " + x + " = " + y);
                }
            }
            else {
                $("#tooltip").remove();
                previousPoint = null;
            }
        });

    }

    function randNumTW(){
        return ((Math.floor( Math.random()* (1+40-20) ) ) + 20);
    }

    /* ---------- Chart with points ---------- */
    if($("#twitterChart").length)
    {
        var followers = [[1, 5+randNumTW()], [2, 10+randNumTW()], [3, 15+randNumTW()], [4, 20+randNumTW()],[5, 25+randNumTW()],[6, 30+randNumTW()],[7, 35+randNumTW()],[8, 40+randNumTW()],[9, 45+randNumTW()],[10, 50+randNumTW()],[11, 55+randNumTW()],[12, 60+randNumTW()],[13, 65+randNumTW()],[14, 70+randNumTW()],[15, 75+randNumTW()],[16, 80+randNumTW()],[17, 85+randNumTW()],[18, 90+randNumTW()],[19, 85+randNumTW()],[20, 80+randNumTW()],[21, 75+randNumTW()],[22, 80+randNumTW()],[23, 75+randNumTW()],[24, 70+randNumTW()],[25, 65+randNumTW()],[26, 75+randNumTW()],[27,80+randNumTW()],[28, 85+randNumTW()],[29, 90+randNumTW()], [30, 95+randNumTW()]];

        var plot = $.plot($("#twitterChart"),
            [ { data: followers, label: "Followers"} ], {
                series: {
                    lines: { show: true,
                        lineWidth: 2,
                        fill: true, fillColor: { colors: [ { opacity: 0.5 }, { opacity: 0.2 } ] }
                    },
                    points: { show: true,
                        lineWidth: 2
                    },
                    shadowSize: 0
                },
                grid: { hoverable: true,
                    clickable: true,
                    tickColor: "#f9f9f9",
                    borderWidth: 0
                },
                colors: ["#1BB2E9"],
                xaxis: {ticks:6, tickDecimals: 0},
                yaxis: {ticks:3, tickDecimals: 0},
            });

        function showTooltip(x, y, contents) {
            $('<div id="tooltip">' + contents + '</div>').css( {
                position: 'absolute',
                display: 'none',
                top: y + 5,
                left: x + 5,
                border: '1px solid #fdd',
                padding: '2px',
                'background-color': '#dfeffc',
                opacity: 0.80
            }).appendTo("body").fadeIn(200);
        }

        var previousPoint = null;
        $("#twitterChart").bind("plothover", function (event, pos, item) {
            $("#x").text(pos.x.toFixed(2));
            $("#y").text(pos.y.toFixed(2));

            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;

                    $("#tooltip").remove();
                    var x = item.datapoint[0].toFixed(2),
                        y = item.datapoint[1].toFixed(2);

                    showTooltip(item.pageX, item.pageY,
                        item.series.label + " of " + x + " = " + y);
                }
            }
            else {
                $("#tooltip").remove();
                previousPoint = null;
            }
        });

    }

    /* ---------- Chart with points ---------- */
    if($("#stats-chart").length)
    {
        var visitors = [[1, randNum()-10], [2, randNum()-10], [3, randNum()-10], [4, randNum()],[5, randNum()],[6, 4+randNum()],[7, 5+randNum()],[8, 6+randNum()],[9, 6+randNum()],[10, 8+randNum()],[11, 9+randNum()],[12, 10+randNum()],[13,11+randNum()],[14, 12+randNum()],[15, 13+randNum()],[16, 14+randNum()],[17, 15+randNum()],[18, 15+randNum()],[19, 16+randNum()],[20, 17+randNum()],[21, 18+randNum()],[22, 19+randNum()],[23, 20+randNum()],[24, 21+randNum()],[25, 14+randNum()],[26, 24+randNum()],[27,25+randNum()],[28, 26+randNum()],[29, 27+randNum()], [30, 31+randNum()]];

        var plot = $.plot($("#stats-chart"),
            [ { data: visitors, label: "visitors" } ], {
                series: {
                    lines: { show: true,
                        lineWidth: 3,
                        fill: true, fillColor: { colors: [ { opacity: 0.5 }, { opacity: 0.2 } ] }
                    },
                    points: { show: true },
                    shadowSize: 2
                },
                grid: { hoverable: true,
                    clickable: true,
                    tickColor: "#eee",
                    borderWidth: 0,
                },
                colors: ["#b1d3d4"],
                xaxis: {ticks:11, tickDecimals: 0},
                yaxis: {ticks:11, tickDecimals: 0},
            });

        function showTooltip(x, y, contents) {
            $('<div id="tooltip">' + contents + '</div>').css( {
                position: 'absolute',
                display: 'none',
                top: y + 5,
                left: x + 5,
                border: '1px solid #fdd',
                padding: '2px',
                'background-color': '#dfeffc',
                opacity: 0.80
            }).appendTo("body").fadeIn(200);
        }

        var previousPoint = null;
        $("#stats-chart").bind("plothover", function (event, pos, item) {
            $("#x").text(pos.x.toFixed(2));
            $("#y").text(pos.y.toFixed(2));

            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;

                    $("#tooltip").remove();
                    var x = item.datapoint[0].toFixed(2),
                        y = item.datapoint[1].toFixed(2);

                    showTooltip(item.pageX, item.pageY,
                        item.series.label + " of " + x + " = " + y);
                }
            }
            else {
                $("#tooltip").remove();
                previousPoint = null;
            }
        });



        $("#sincos").bind("plotclick", function (event, pos, item) {
            if (item) {
                $("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
                plot.highlight(item.series, item.datapoint);
            }
        });
    }



    /* ---------- Last Mostion Data ---------- */
    if($("#lastMotionData").length)
    {
        //var sin = [], cos = [];

        //for (var i = 0; i < 14; i += 0.5) {
        //	sin.push([i, Math.sin(i)/i]);
        //	cos.push([i, Math.cos(i)]);
        //}

        var accelerometer_x = getInitTimeChartData(14),
            accelerometer_y = getInitTimeChartData(14),
            accelerometer_z = getInitTimeChartData(14),
            gyroscope_x = getInitTimeChartData(14),
            gyroscope_y = getInitTimeChartData(14),
            gyroscope_z = getInitTimeChartData(14),
            rotation_x = getInitTimeChartData(14),
            rotation_y = getInitTimeChartData(14),
            rotation_z = getInitTimeChartData(14);


        var plot3 = $.plot($("#lastMotionData"),
            [
                { data: accelerometer_x, label: "accelerometer x"},
                { data: accelerometer_y, label: "accelerometer y"},
                { data: accelerometer_z, label: "accelerometer z"},
                { data: gyroscope_x, label: "gyroscope x"},
                { data: gyroscope_y, label: "gyroscope y"},
                { data: gyroscope_z, label: "gyroscope z"},
                { data: rotation_x, label: "rotation x"},
                { data: rotation_y, label: "rotation y"},
                { data: rotation_z, label: "rotation z"},
            ], {
                series: {
                    lines: { show: true,
                        lineWidth: 2,
                    },
                    points: { show: true },
                    shadowSize: 2
                },
                grid: { hoverable: true,
                    clickable: true,
                    tickColor: "#dddddd",
                    borderWidth: 0
                },
                yaxis: { min: -50, max: 50 },
                colors: ["#FA5833", "#2FABE9", "#00FF66", "#330000", "#993300", "#CC0033", "#CC9966", "#FF3399", "#FFCC00"]
            });

        // Update chart with data from the websocket
        socket.on('query_get_last_motion_data', function(data){

            // Fixup array
            accelerometer_x[0] = accelerometer_x;
            accelerometer_y[0] = accelerometer_y;
            accelerometer_z[0] = accelerometer_z;
            gyroscope_x[0] = gyroscope_x;
            gyroscope_y[0] = gyroscope_y;
            gyroscope_z[0] = gyroscope_z;
            rotation_x[0] = rotation_x;
            rotation_y[0] = rotation_y;
            rotation_z[0] = rotation_z;

            // Set new data
            accelerometer_x = updateTimeChartWithNewDataPoint(accelerometer_x, data.data.accelerometer_x);
            accelerometer_y = updateTimeChartWithNewDataPoint(accelerometer_y, data.data.accelerometer_y);
            accelerometer_z = updateTimeChartWithNewDataPoint(accelerometer_z, data.data.accelerometer_z);
            gyroscope_x = updateTimeChartWithNewDataPoint(gyroscope_x, data.data.gyroscope_x);
            gyroscope_y = updateTimeChartWithNewDataPoint(gyroscope_y, data.data.gyroscope_y);
            gyroscope_z = updateTimeChartWithNewDataPoint(gyroscope_z, data.data.gyroscope_z);
            rotation_x = updateTimeChartWithNewDataPoint(rotation_x, data.data.rotation_x);
            rotation_y = updateTimeChartWithNewDataPoint(rotation_y, data.data.rotation_y);
            rotation_z = updateTimeChartWithNewDataPoint(rotation_z, data.data.rotation_z);


            // Find max y axis
            var maxYAxis = 0;
            var tempMax = [];
            accelerometer_x[0] = accelerometer_x;
            accelerometer_y[0] = accelerometer_y;
            accelerometer_z[0] = accelerometer_z;
            gyroscope_x[0] = gyroscope_x;
            gyroscope_y[0] = gyroscope_y;
            gyroscope_z[0] = gyroscope_z;
            rotation_x[0] = rotation_x;
            rotation_y[0] = rotation_y;
            rotation_z[0] = rotation_z;
            tempMax.push(getMaxYAxis(accelerometer_x));
            tempMax.push(getMaxYAxis(accelerometer_x));
            tempMax.push(getMaxYAxis(accelerometer_x));
            tempMax.push(getMaxYAxis(gyroscope_x));
            tempMax.push(getMaxYAxis(gyroscope_y));
            tempMax.push(getMaxYAxis(gyroscope_z));
            tempMax.push(getMaxYAxis(rotation_x));
            tempMax.push(getMaxYAxis(rotation_y));
            tempMax.push(getMaxYAxis(rotation_z));
            for(var i=0; i < tempMax.length; i++){
                if(tempMax[i] > maxYAxis)
                    maxYAxis = tempMax[i];
            }
            // Find min y axis
            var minYAxis = 0;
            var tempMin = [];
            accelerometer_x[0] = accelerometer_x;
            accelerometer_y[0] = accelerometer_y;
            accelerometer_z[0] = accelerometer_z;
            gyroscope_x[0] = gyroscope_x;
            gyroscope_y[0] = gyroscope_y;
            gyroscope_z[0] = gyroscope_z;
            rotation_x[0] = rotation_x;
            rotation_y[0] = rotation_y;
            rotation_z[0] = rotation_z;
            tempMin.push(getMinYAxis(accelerometer_x));
            tempMin.push(getMinYAxis(accelerometer_x));
            tempMin.push(getMinYAxis(accelerometer_x));
            tempMin.push(getMinYAxis(gyroscope_x));
            tempMin.push(getMinYAxis(gyroscope_y));
            tempMin.push(getMinYAxis(gyroscope_z));
            tempMin.push(getMinYAxis(rotation_x));
            tempMin.push(getMinYAxis(rotation_y));
            tempMin.push(getMinYAxis(rotation_z));
            for(var i=0; i < tempMin.length; i++){
                if(tempMin[i] < minYAxis)
                    minYAxis = tempMin[i];
            }

            // Setup and re-draw y axis with max value in current chart
            plot3.getOptions().yaxes[0].max = maxYAxis+5;
            plot3.getOptions().yaxes[0].min = minYAxis-5;
            plot3.setupGrid();

            plot3.setData([
                { data: accelerometer_x, label: "accelerometer x"},
                { data: accelerometer_y, label: "accelerometer y"},
                { data: accelerometer_z, label: "accelerometer z"},
                { data: gyroscope_x, label: "gyroscope x"},
                { data: gyroscope_y, label: "gyroscope y"},
                { data: gyroscope_z, label: "gyroscope z"},
                { data: rotation_x, label: "rotation x"},
                { data: rotation_y, label: "rotation y"},
                { data: rotation_z, label: "rotation z"}
            ]);
            plot3.draw();

        });

        function showTooltip(x, y, contents) {
            $('<div id="tooltip">' + contents + '</div>').css( {
                position: 'absolute',
                display: 'none',
                top: y + 5,
                left: x + 5,
                border: '1px solid #fdd',
                padding: '2px',
                'background-color': '#dfeffc',
                opacity: 0.80
            }).appendTo("body").fadeIn(200);
        }

        var previousPoint = null;
        $("#lastMotionData").bind("plothover", function (event, pos, item) {
            $("#x").text(pos.x.toFixed(2));
            $("#y").text(pos.y.toFixed(2));

            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;

                    $("#tooltip").remove();
                    var x = item.datapoint[0].toFixed(2),
                        y = item.datapoint[1].toFixed(2);

                    showTooltip(item.pageX, item.pageY,
                        item.series.label + " of " + x + " = " + y);
                }
            }
            else {
                $("#tooltip").remove();
                previousPoint = null;
            }
        });



        $("#lastMotionData").bind("plotclick", function (event, pos, item) {
            if (item) {
                $("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
                plot3.highlight(item.series, item.datapoint);
            }
        });
    }

    /* ---------- Flot chart ---------- */
    if($("#flotchart").length)
    {
        var d1 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.25)
            d1.push([i, Math.sin(i)]);

        var d2 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.25)
            d2.push([i, Math.cos(i)]);

        var d3 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.1)
            d3.push([i, Math.tan(i)]);

        $.plot($("#flotchart"), [
            { label: "sin(x)",  data: d1},
            { label: "cos(x)",  data: d2},
            { label: "tan(x)",  data: d3}
        ], {
            series: {
                lines: { show: true },
                points: { show: true }
            },
            xaxis: {
                ticks: [0, [Math.PI/2, "\u03c0/2"], [Math.PI, "\u03c0"], [Math.PI * 3/2, "3\u03c0/2"], [Math.PI * 2, "2\u03c0"]]
            },
            yaxis: {
                ticks: 10,
                min: -2,
                max: 2
            },
            grid: {	tickColor: "#dddddd",
                borderWidth: 0
            },
            colors: ["#FA5833", "#2FABE9", "#FABB3D"]
        });
    }

    /* ---------- Stack chart ---------- */
    if($("#stackchart").length)
    {
        var d1 = [];
        for (var i = 0; i <= 10; i += 1)
            d1.push([i, parseInt(Math.random() * 30)]);

        var d2 = [];
        for (var i = 0; i <= 10; i += 1)
            d2.push([i, parseInt(Math.random() * 30)]);

        var d3 = [];
        for (var i = 0; i <= 10; i += 1)
            d3.push([i, parseInt(Math.random() * 30)]);

        var stack = 0, bars = true, lines = false, steps = false;

        function plotWithOptions() {
            $.plot($("#stackchart"), [ d1, d2, d3 ], {
                series: {
                    stack: stack,
                    lines: { show: lines, fill: true, steps: steps },
                    bars: { show: bars, barWidth: 0.6 },
                },
                colors: ["#FA5833", "#2FABE9", "#FABB3D"]
            });
        }

        plotWithOptions();

        $(".stackControls input").click(function (e) {
            e.preventDefault();
            stack = $(this).val() == "With stacking" ? true : null;
            plotWithOptions();
        });
        $(".graphControls input").click(function (e) {
            e.preventDefault();
            bars = $(this).val().indexOf("Bars") != -1;
            lines = $(this).val().indexOf("Lines") != -1;
            steps = $(this).val().indexOf("steps") != -1;
            plotWithOptions();
        });
    }

    /* ---------- Device chart ---------- */

    var data = [
        { label: "Desktop",  data: 73},
        { label: "Mobile",  data: 27}
    ];

    /* ---------- Donut chart ---------- */
    if($("#deviceChart").length)
    {
        $.plot($("#deviceChart"), data,
            {
                series: {
                    pie: {
                        innerRadius: 0.6,
                        show: true
                    }
                },
                legend: {
                    show: true
                },
                colors: ["#FA5833", "#2FABE9", "#FABB3D", "#78CD51"]
            });
    }

    var data = [
        { label: "iOS",  data: 20},
        { label: "Android",  data: 7},
        { label: "Linux",  data: 11},
        { label: "Mac OSX",  data: 14},
        { label: "Windows",  data: 48}
    ];

    /* ---------- Donut chart ---------- */
    if($("#osChart").length)
    {
        $.plot($("#osChart"), data,
            {
                series: {
                    pie: {
                        innerRadius: 0.6,
                        show: true
                    }
                },
                legend: {
                    show: true
                },
                colors: ["#FA5833", "#2FABE9", "#FABB3D", "#78CD51"]
            });
    }

    /* ---------- Pie chart ---------- */
    var data = [
        { label: "IE",  data: 12},
        { label: "Mobile",  data: 27},
        { label: "Safari",  data: 85},
        { label: "Opera",  data: 64},
        { label: "Firefox",  data: 90},
        { label: "Chrome",  data: 112}
    ];

    if($("#piechart").length)
    {
        $.plot($("#piechart"), data,
            {
                series: {
                    pie: {
                        show: true
                    }
                },
                grid: {
                    hoverable: true,
                    clickable: true
                },
                legend: {
                    show: false
                },
                colors: ["#FA5833", "#2FABE9", "#FABB3D", "#78CD51"]
            });

        function pieHover(event, pos, obj)
        {
            if (!obj)
                return;
            percent = parseFloat(obj.series.percent).toFixed(2);
            $("#hover").html('<span style="font-weight: bold; color: '+obj.series.color+'">'+obj.series.label+' ('+percent+'%)</span>');
        }
        $("#piechart").bind("plothover", pieHover);
    }

    /* ---------- Donut chart ---------- */
    if($("#donutchart").length)
    {
        $.plot($("#donutchart"), data,
            {
                series: {
                    pie: {
                        innerRadius: 0.5,
                        show: true
                    }
                },
                legend: {
                    show: false
                },
                colors: ["#FA5833", "#2FABE9", "#FABB3D", "#78CD51"]
            });
    }




    // we use an inline data source in the example, usually data would
    // be fetched from a server
    var data = [], totalPoints = 300;
    function getRandomData() {
        if (data.length > 0)
            data = data.slice(1);

        // do a random walk
        while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50;
            var y = prev + Math.random() * 10 - 5;
            if (y < 0)
                y = 0;
            if (y > 100)
                y = 100;
            data.push(y);
        }

        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]]);
        }

        return res;
    }

    // setup control widget
    var updateInterval = 1000;
    $("#updateInterval").val(updateInterval).change(function () {
        var v = $(this).val();
        if (v && !isNaN(+v)) {
            updateInterval = +v;
            if (updateInterval < 1)
                updateInterval = 1;
            if (updateInterval > 2000)
                updateInterval = 2000;
            $(this).val("" + updateInterval);
        }
    });


    /**
     * Builds initial array with the given number to build initial chart
     * before data comes back from the websocket call.
     *
     * @param {int} initialCount
     * @returns {Array}
     */
    function getInitTimeChartData(initialCount){
        var res = [];

        for(var i=1; i < initialCount; i++){
            res.push([i, 0]);
        }
        return res;
    }

    /**
     * Update entire chart array with the one new data point.
     *
     * @param {Array} chartData
     * @param {int} dataPoint
     * @returns {Array}
     */
    function updateTimeChartWithNewDataPoint(chartData, dataPoint){
        var res = [];

        //console.log(chartData[0][1][0]);
        //console.log(chartData[0][1][1]);

        // Push all but the first one into the output array
        for(var i=1; i < chartData[0].length; i++){
            //res.push([chartData[0][i][0], chartData[0][i][1]]);
            res.push([i, chartData[0][i][1]]);
        }

        // Last plot on the left
        res.push([chartData[0].length, dataPoint]);

        //console.log(res);

        return res;
    }

    /**
     * Find the max Y axis in the chartData
     *
     * @param {Array} chartData
     * @returns {number}
     */
    function getMaxYAxis(chartData){
        var max = 0;
        for(var i=1; i < chartData[0].length; i++){
            if(chartData[0][i][1] > max)
                max = chartData[0][i][1];
        }
        return max;
    }
    /**
     * Find the min Y axis in the chartData
     *
     * @param {Array} chartData
     * @returns {number}
     */
    function getMinYAxis(chartData){
        var min = 0;
        for(var i=1; i < chartData[0].length; i++){
            if(chartData[0][i][1] < min)
                min = chartData[0][i][1];
        }
        return min;
    }
    if($("#realtimechart").length)
    {
        var options = {
            series: { shadowSize: 1 },
            lines: { fill: true, fillColor: { colors: [ { opacity: 1 }, { opacity: 0.1 } ] }},
            yaxis: { min: 0, max: 1 },
            xaxis: { show: false },
            colors: ["#F4A506"],
            grid: {	tickColor: "#dddddd",
                borderWidth: 0
            }
        };

        var chartData = [getInitTimeChartData(299)];

        var plot = $.plot($("#realtimechart"), chartData, options);
        //var x = chartData;
        //console.log(x);
        socket.on('statistic_eps_stat_auth_token', function(data){

            chartData = [updateTimeChartWithNewDataPoint(chartData, data.data)];

            // Setup and re-draw y axis with max value in current chart
            plot.getOptions().yaxes[0].max = getMaxYAxis(chartData);
            plot.setupGrid();

            plot.setData(chartData);
            plot.draw();
        });
    }
    if($("#realTimeEPSDevice1").length)
    {
        var options = {
            series: { shadowSize: 1 },
            lines: { fill: true, fillColor: { colors: [ { opacity: 1 }, { opacity: 0.1 } ] }},
            yaxis: { min: 0, max: 1 },
            xaxis: { show: false },
            colors: ["#CC33CC"],
            grid: {	tickColor: "#dddddd",
                borderWidth: 0
            }
        };

        var chartData2 = [getInitTimeChartData(299)];

        var plot2 = $.plot($("#realTimeEPSDevice1"), chartData2, options);
        //var x = chartData;
        //console.log(x);
        socket.on('statistic_eps_stat_device', function(data){

            chartData2 = [updateTimeChartWithNewDataPoint(chartData2, data.data)];

            // Setup and re-draw y axis with max value in current chart
            plot2.getOptions().yaxes[0].max = getMaxYAxis(chartData2);
            plot2.setupGrid();

            plot2.setData(chartData2);
            plot2.draw();
        });
    }
});