

var request = new XMLHttpRequest();
   request.open("GET", "https://raw.githubusercontent.com/awaisrauf/graphs/master/simple.json", false);
   request.send(null)
   var my_JSON_object = JSON.parse(request.response);
   
   console.log(my_JSON_object);
   var data1 = my_JSON_object["UrduTweets"];
   console.log(data1[1]);
   
// ########################################################
// Popularity History chart   
Highcharts.chart('container', {

    chart: {
        scrollablePlotArea: {
            minWidth: 700,
       
           
        }
       
    },
	exporting: { enabled: false },
    credits: {
    position: {
        align: 'left',
        verticalAlign: 'bottom',
        x: 10,
        y: -10
    }
},

    data: {
        csvURL: 'https://cdn.rawgit.com/highcharts/highcharts/' +
            '057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/analytics.csv',
        beforeParse: function (csv) {
            return csv.replace(/\n\n/g, '\n');
        }
    },

    title: {enabled: false},
      //  text: 'Daily sessions at www.highcharts.com'
    //},

   // subtitle: {
     //   text: 'Source: Google Analytics'
    //},

    xAxis: {
        tickInterval: 7 * 24 * 3600 * 1000, // one week
        tickWidth: 0,
        gridLineWidth: 1,
        labels: {
            align: 'left',
            x: 3,
            y: -3
        }
    },

    yAxis: [{ // left y axis
        title: {
            text: null
        },
        labels: {
            align: 'left',
            x: 3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }, { // right y axis
        linkedTo: 0,
        gridLineWidth: 0,
        opposite: true,
        title: {
            text: null
        },
        labels: {
            align: 'right',
            x: -3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }],

    legend: {
        align: 'left',
        verticalAlign: 'top',
        borderWidth: 0
    },

    tooltip: {
        shared: true,
        crosshairs: true
    },

    plotOptions: {
        series: {
            cursor: 'pointer',
            point: {
                events: {
                    click: function (e) {
                        hs.htmlExpand(null, {
                            pageOrigin: {
                                x: e.pageX || e.clientX,
                                y: e.pageY || e.clientY
                            },
                            headingText: this.series.name,
                            maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
                                this.y + ' sessions',
                            width: 200
                        });
                    }
                }
            },
            marker: {
                lineWidth: 1
            }
        }
    },

    series: [{
        name: 'All sessions',
        lineWidth: 4,
        marker: {
            radius: 4
        }
    }, {
        name: 'New users'
    }]
});

//#################################################
// Daily Popularity 

var Pakistan = [49.9, 71.5, 10];
var Punjab = [49.9, 71.5, 16];
var Sindh = [49.9, 71.5, 10];
var KPK = [49.9, 71.5, 10];
var Balochistan = [49.9, 71.5, 10];

Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Popularity Levels of Top 3 Political Parties'
    },
    subtitle: {
        text: 'As measured on July 10'
    },
    xAxis: {
        categories: [
            'PTI',
            'PMLN',
            'PPP'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Popularity (%)'
        }
    },
    exporting: { enabled: false },
    credits: {
    position: {
        align: 'left',
        verticalAlign: 'bottom',
        x: 10,
        y: -10
    }
},
    
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Pakistan',
        data: Pakistan

    }, {
        name: 'Punjab',
        data: Punjab

    }, {
        name: 'Sindh',
        data: Sindh

    }, 
    {
        name: 'KPK',
        data: KPK
    }, 
    {
        name: 'Balochistan',
        data: Balochistan
    }
    ]
});