

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
        type: 'spline'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            formatter: function () {
                return this.value + '°';
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: 'PTI',
       
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 23.3, 18.3, 13.9, 9.6]

    }, {
        name: 'PMLN',
        data: [ 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
});

//#################################################
// Daily Popularity 

var Pakistan = [-4, -71.5, 10];
var Punjab = [49.9, -71.5, 16];
var Sindh = [49.9, 71.5, 10];
var KPK = [49.9, 71.5, 10];
var Balochistan = [49.9, 71.5, 10];

Highcharts.chart('columnChartPakistan', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['PTI', 'PMLN', 'PPP']
    },
    credits: {
        enabled: false
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
    series: [{
        name: 'Pakistan',
        data: Pakistan
    }, {
        name: 'Punajb',
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