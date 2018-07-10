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
        text: 'Real Time Popularity Trends of Top 3 Political Parties of Pakisatn'
    },
    subtitle: {
        text: 'Source:  Twitter + Understanding'
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
	  
	  plotBands: {
      color: 'rgba(215, 255, 179, 0.57)',
      from: Date.UTC(2018, 7, 6),
      to: Date.UTC(2018, 8,6),
      type: 'datetime',
      label: { 
        text: '<i>Pana Verdict Announced by Court</i>',
        align: 'center',
        style: {
          fontSize: '12px',
          fontWeight: 'bold'
        },
        y: 30
      }
    },
  
	  
    	exporting: { enabled: false },  
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
        
        data: PTI_line,
		pointStart: Date.UTC(2018, 7, 6),
		pointInterval: 24 * 3600 * 1000 // one day

    }, {
        name: 'PMLN',
        data: PMLN_line,
		pointStart: Date.UTC(2018, 7, 6),
		pointInterval: 24 * 3600 * 1000 // one day
    },
    {
        name: 'PPP',
        data: PPP_line,
		pointStart: Date.UTC(2018, 7, 6),
		pointInterval: 24 * 3600 * 1000 // one day
    }
    ]
});

//#################################################
// Daily Popularity 

url="https://raw.githubusercontent.com/awaisrauf/graphs/master/prediction_code/results/graph_results/pakistan.json";

var request = new XMLHttpRequest();
request.open("GET", url, false);
request.send(null)
var Data = JSON.parse(request.response);

var Pakistan = Data["Pakistan"];
var Punjab = Data["Punjab"];
var Sindh = Data["Sindh"];
var KPK = Data["KPK"];
var Balochistan = Data["Balochistan"];

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