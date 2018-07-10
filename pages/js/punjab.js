var url="https://raw.githubusercontent.com/awaisrauf/graphs/master/prediction_code/results/graph_results/punjab.json";

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
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
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
            text: 'Popularity in %'
        },
        labels: {
            formatter: function () {
                return this.value + '%';
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
        
        data: PTI_line

    }, {
        name: 'PMLN',
        data: PMLN_line
    },
    {
        name: 'PPP',
        data: PPP_line
    }
    ]
});

//#################################################
// Daily Popularity 

var Punjab = Data["Punjab"];

Highcharts.chart('container1', {
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
    series: [ {
        name: 'Punajb',
        data: Punjab
    }
    
	
	]
});