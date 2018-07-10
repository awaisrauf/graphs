var url="https://raw.githubusercontent.com/awaisrauf/graphs/master/prediction_code/results/graph_results/pakistan.json";

var request = new XMLHttpRequest();
request.open("GET", url, false);
request.send(null)
var Data = JSON.parse(request.response);
   
   
   
   
// ########################################################
// Popularity History chart   

var PTI_line = Data["PTI Line"];
var PMLN_line = Data["PMLN Line"];
var PPP_line = Data["PPP Line"];

Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Popularity Levels of Top 3 Political Parties'
    },
    subtitle: {
        text: 'Real Time: From July 07'
    },
    xAxis: {
        title: {
            text: 'Popularity Level in %'
        },
        type: 'datetime',
    labels: {
      formatter: function() {
        return Highcharts.dateFormat('%a %d %b', this.value);
      }
    }
      
      },
    yAxis: {
        title: {
            text: 'Popularity Level in %'
        },
        labels: {
            formatter: function () {
                return this.value+ '%';
            }
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
        data: PTI_line,
    pointStart: Date.UTC(2018, 06, 07),
    pointInterval: 24 * 3600 * 1000 // one day

    }, {
        name: 'PMLN',
        data: PMLN_line,
    pointStart: Date.UTC(2018, 06, 07),
    pointInterval: 24 * 3600 * 1000 // one day
        }, 
       {
        name: 'PPP',
        data: PPP_line,
    pointStart: Date.UTC(2018, 06, 07),
    pointInterval: 24 * 3600 * 1000 // one day
        }
     ]
});

//#################################################
// Daily Popularity 

var Pakistan = Data["Pakistan"];
var Punjab = Data["Punjab"];
var Sindh = Data["Sindh"];
var KPK = Data["KPK"];
var Balochistan = Data["Balochistan"];

Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Popularity Levels of the day (10 July)'
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