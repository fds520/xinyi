function data1(dt) {
    $("#xydEchartsTotoal").html(dt.dataJson1.data1.total);
    var dom = document.getElementById("xydEcharts");
    var myChart = echarts.init(dom);
    option = {
        color: ['#17b0ea'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0',
            right:'0',
            top: '0',
            bottom: '0'
        },
        xAxis : [
            {
                type : 'category',
                show:false
            }
        ],
        yAxis : [
            {
                type : 'value',
                show:false
            }
        ],
        series : [
            {
                type:'bar',
                barWidth: '60%',
                data:dt.dataJson1.data1.echarts
            }
        ]
    };
    myChart.setOption(option, true);

    // 图表自适应屏幕
    $(window).resize(function() {
        myChart.resize();
    });
}

function data2(dt) {
    $("#xyzEchartsTotal").html(dt.dataJson1.data2.total);
    var dom = document.getElementById("xyzEcharts");
    var myChart = echarts.init(dom);
    option = {
        color: ['#19f7f8'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0',
            right:'0',
            top: '0',
            bottom: '0'
        },
        xAxis : [
            {
                type : 'category',
                show:false
            }
        ],
        yAxis : [
            {
                type : 'value',
                show:false
            }
        ],
        series : [
            {
                type:'bar',
                barWidth: '60%',
                data:dt.dataJson1.data2.echarts
            }
        ]
    };
    myChart.setOption(option, true);

    // 图表自适应屏幕
    $(window).resize(function() {
        myChart.resize();
    });
}

function data3(dt) {
    $("#xyyEchartsTotal").html(dt.dataJson1.data3.total);
    var dom = document.getElementById("xyyEcharts");
    var myChart = echarts.init(dom);
    option = {
        color: ['#c16693'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0',
            right:'0',
            top: '0',
            bottom: '0'
        },
        xAxis : [
            {
                type : 'category',
                show:false
            }
        ],
        yAxis : [
            {
                type : 'value',
                show:false
            }
        ],
        series : [
            {
                type:'bar',
                barWidth: '60%',
                data:dt.dataJson1.data3.echarts
            }
        ]
    };
    myChart.setOption(option, true);

    // 图表自适应屏幕
    $(window).resize(function() {
        myChart.resize();
    });
}

function data4(dt) {
    $("#xyyouEchartsTotal").html(dt.dataJson1.data4.total);
    var dom = document.getElementById("xyyouEcharts");
    var myChart = echarts.init(dom);
    option = {
        color: ['#6fceb1'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0',
            right:'0',
            top: '0',
            bottom: '0'
        },
        xAxis : [
            {
                type : 'category',
                show:false
            }
        ],
        yAxis : [
            {
                type : 'value',
                show:false
            }
        ],
        series : [
            {
                type:'bar',
                barWidth: '60%',
                data:dt.dataJson1.data4.echarts
            }
        ]
    };
    myChart.setOption(option, true);

    // 图表自适应屏幕
    $(window).resize(function() {
        myChart.resize();
    });
}

function data7(dt) {
    $("#enterpriseCount").html(dt.dataJson2.enterpriseCount);
    $("#serviceCount").html(dt.dataJson2.serviceCount);
    $("#money").html(dt.dataJson2.money);
    var dom = document.getElementById("xydEcharts2");
    var myChart = echarts.init(dom);
    option = {
        title: {
            text: dt.dataJson2.data1.value,
            subtext: dt.dataJson2.data1.title,
            x: 'center',
            y: '27%',
            textStyle: {
                fontWeight: 'normal',
                color: '#bae6dc',
                fontSize: '13'
            },
            subtextStyle: {
                fontSize: 11,
                color: '#51fdc3'
            }
        },
        color: ['rgba(16, 31, 26, 0.85)'],
        legend: {
            show: false,
            itemGap: 12,
            data: ['01', '02']
        },

        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['65%', '78%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: true,
            data: [{
                value: dt.dataJson2.data1.value,
                name: '50',
                itemStyle: {
                    normal: {
                        color: { // 完成的圆环的颜色
                            colorStops: [{
                                offset: 0,
                                color: '#ed6be7' // 0% 处的颜色 ed6be7
                            }, {
                                offset: 1,
                                color: '#8454f4' // 100% 处的颜色
                            }]
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '02',
                value: dt.dataJson2.data1.default
            }]
        }]
    };
    myChart.setOption(option, true);
}

function data8(dt) {
    var dom = document.getElementById("xyzEcharts2");
    var myChart = echarts.init(dom);
    option = {
        title: {
            text: dt.dataJson2.data2.value,
            subtext: dt.dataJson2.data2.title,
            x: 'center',
            y: '27%',
            textStyle: {
                fontWeight: 'normal',
                color: '#bae6dc',
                fontSize: '13'
            },
            subtextStyle: {
                fontSize: 11,
                color: '#51fdc3'
            }
        },
        color: ['rgba(16, 31, 26, 0.85)'],
        legend: {
            show: false,
            itemGap: 12,
            data: ['01', '02']
        },

        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['63%', '75%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: true,
            data: [{
                value: dt.dataJson2.data2.value,
                name: '50',
                itemStyle: {
                    normal: {
                        color: { // 完成的圆环的颜色
                            colorStops: [{
                                offset: 0,
                                color: '#57edcb' // 0% 处的颜色 6efafb
                            }, {
                                offset: 1,
                                color: '#6ab9f0' // 100% 处的颜色
                            }]
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '02',
                value: dt.dataJson2.data2.default
            }]
        }]
    };
    myChart.setOption(option, true);
}

function data9(dt) {
    var dom = document.getElementById("xyyEcharts2");
    var myChart = echarts.init(dom);
    option = {
        title: {
            text: dt.dataJson2.data3.value,
            subtext: dt.dataJson2.data3.title,
            x: 'center',
            y: '27%',
            textStyle: {
                fontWeight: 'normal',
                color: '#bae6dc',
                fontSize: '13'
            },
            subtextStyle: {
                fontSize: 11,
                color: '#51fdc3'
            }
        },
        color: ['rgba(16, 31, 26, 0.85)'],
        legend: {
            show: false,
            itemGap: 12,
            data: ['01', '02']
        },

        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['63%', '75%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: true,
            data: [{
                value: dt.dataJson2.data3.value,
                name: '50',
                itemStyle: {
                    normal: {
                        color: { // 完成的圆环的颜色
                            colorStops: [{
                                offset: 0,
                                color: '#fbf452' // 0% 处的颜色 6efafb
                            }, {
                                offset: 1,
                                color: '#7ffc72' // 100% 处的颜色
                            }]
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '02',
                value: dt.dataJson2.data3.default
            }]
        }]
    };
    myChart.setOption(option, true);
}

function data10(dt) {
    var dom = document.getElementById("xyyouEcharts2");
    var myChart = echarts.init(dom);
    option = {
        title: {
            text: dt.dataJson2.data4.value,
            subtext: dt.dataJson2.data4.title,
            x: 'center',
            y: '27%',
            textStyle: {
                fontWeight: 'normal',
                color: '#bae6dc',
                fontSize: '13'
            },
            subtextStyle: {
                fontSize: 11,
                color: '#51fdc3'
            }
        },
        color: ['rgba(16, 31, 26, 0.85)'],
        legend: {
            show: false,
            itemGap: 12,
            data: ['01', '02']
        },

        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['63%', '75%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: true,
            data: [{
                value: dt.dataJson2.data4.value,
                name: '50',
                itemStyle: {
                    normal: {
                        color: { // 完成的圆环的颜色
                            colorStops: [{
                                offset: 0,
                                color: '#ed5779' // 0% 处的颜色 6efafb
                            }, {
                                offset: 1,
                                color: '#ef9e6a' // 100% 处的颜色
                            }]
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '02',
                value: dt.dataJson2.data4.default
            }]
        }]
    };
    myChart.setOption(option, true);
}

function data13(dt) {
    var dom = document.getElementById("ptjrqsEcharts");
    var myChart = echarts.init(dom);
    option = {
        textStyle : {
            color : "#0E8863"
        },
        legend : {
            show : true,
            textStyle:{
                color:'#fff3f3'
            },
            icon:'rect',
            right:'0',
            itemWidth:17,
            itemHeight: 10
        },
        tooltip : {
            trigger : 'axis',
        },
        grid : {
            height : "75%",
            y : '15%', // y:坐标轴顶端与边框的距离
            x : '10%', // x:坐标轴左边与边框的距离
            x2 : '5%', // x2:坐标轴右边与边框的距离
            y2 : '10%', // y2:坐标轴底端与边框的距离
            left: '0',
            containLabel: true
        },
        xAxis : {
            type : 'category',
            data : ['8月','9月','10月','11月','12月','1月','2月','3月','4月','5月','6月','7月','8月'],
            axisLabel : {
                interval : 0
            }
        },
        yAxis : [ {
            type : 'value',
            splitLine : {
                lineStyle : {
                    color : "#252f43" // 刻度线颜色
                }
            }
        } ],
        series : [ {
            name : dt.dataJson3.dataName[0],
            type : 'line',
            smooth : true,
            itemStyle : {
                normal : {
                    color : "#d13c62"/*#5b9bd5*/
                }
            },
            areaStyle : {
                normal : {
                    color : {
                        x : 0,
                        y : 0,
                        x2 : 0,
                        y2 : 1,
                        colorStops : [ {
                            offset : 1,
                            color : '#16111D'
                        }, {
                            offset : 0,
                            color : '#d13c62'
                        } ],
                    }
                }
            },
            data : dt.dataJson3.data1
        }, {
            name : dt.dataJson3.dataName[1],
            type : 'line',
            smooth : true,
            itemStyle : {
                normal : {
                    color : "#a669af"
                }
            },
            areaStyle : {
                normal : {
                    color : {
                        x : 0,
                        y : 0,
                        x2 : 0,
                        y2 : 1,
                        colorStops : [ {
                            offset : 1,
                            color : '#16111D'
                        }, {
                            offset : 0,
                            color : '#a669af'
                        } ],
                    }
                }
            },
            data : dt.dataJson3.data2
        },
            {
                name : dt.dataJson3.dataName[2],
                type : 'line',
                smooth : true,
                itemStyle : {
                    normal : {
                        color : "#0e8863"
                    }
                },
                areaStyle : {
                    normal : {
                        color : {
                            x : 0,
                            y : 0,
                            x2 : 0,
                            y2 : 1,
                            colorStops : [ {
                                offset : 1,
                                color : '#16111D'
                            }, {
                                offset : 0,
                                color : '#0e8863'
                            } ],
                        }
                    }
                },
                data : dt.dataJson3.data3
            },
            {
                name : dt.dataJson3.dataName[3],
                type : 'line',
                smooth : true,
                itemStyle : {
                    normal : {
                        color : "#98982b"
                    }
                },
                areaStyle : {
                    normal : {
                        color : {
                            x : 0,
                            y : 0,
                            x2 : 0,
                            y2 : 1,
                            colorStops : [ {
                                offset : 1,
                                color : '#16111D'
                            }, {
                                offset : 0,
                                color : '#98982b'
                            } ],
                        }
                    }
                },
                data : dt.dataJson3.data4
            },
            {
                name : dt.dataJson3.dataName[4],
                type : 'line',
                smooth : true,
                itemStyle : {
                    normal : {
                        color : "#4472c4"
                    }
                },
                areaStyle : {
                    normal : {
                        color : {
                            x : 0,
                            y : 0,
                            x2 : 0,
                            y2 : 1,
                            colorStops : [ {
                                offset : 1,
                                color : '#16111D'
                            }, {
                                offset : 0,
                                color : '#4472c4'
                            } ],
                        }
                    }
                },
                data : dt.dataJson3.data5
            }]
    };

    myChart.setOption(option, true);
}

$.ajax({
    type:'get',
    url:'json/enterpriseDemo.json',
    dataType:'json',
    success:function(result){
        console.log(result);
        $("#total").text(result.dataJson1.total);

        var htmlList = '';
        result.dataJson1.creditService.forEach(function (name) {
            htmlList += "<li>\n" +
                "                            <i class=\"iconfont icon-fangdichanjianzhu\"></i>" + name.key + "<span class=\"other\"><span\n" +
                "                                class=\"num\">" + name.value + "</span><span class=\"unit\">次</span></span>\n" +
                "                        </li>";
        })
        $("#credit").html(htmlList);

        result.dataJson1.map.forEach(function (company, index) {
            $("#company" + index).html(company);
        });

        data1(result);
        data2(result);
        data3(result);
        data4(result);
        data7(result);
        data8(result);
        data9(result);
        data10(result);
        data13(result);

        $('.infoService').liMarquee({
            direction: 'up',
            drag: false, // 禁止拖动
            runshort: false,
            scrollamount: 20
        });
    }
});
