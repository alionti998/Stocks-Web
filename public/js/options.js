
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth(); //January is 0!
var yyyy = today.getFullYear();

function getChartOptions(range) {
    if (range == "Day") {

        var options = {
            'title': 'Last Updated ' + metaData["3. Last Refreshed"]/* + " " + metaData["5. Time Zone"]*/,
            legend: 'none',
            hAxis: {
                title: '',
                //showTextEvery: 0,
                //slantedText: true,
                //slantedTextAngle: 90,
                //textPosition : 'in',
                //for intraday only
                viewWindow: {
                    min: new Date(yyyy, mm, dd, 9, 30),
                    max: new Date(yyyy, mm, dd, 16),
                },
            },
            vAxis: {
                title: '',
                format: 'currency',
            },
            legend: {
                //position: 'right', textStyle: {color: 'blue', fontSize: 16},
                position: 'right',
            }
            //legend:'none',

            //chartArea:{left:20,top:0,width:'50%',height:'50%'},
        };
    } else if (range == "Week") {
        var options = {
            'title': 'Last Updated ' + metaData["3. Last Refreshed"],
            legend: 'none',
            hAxis: {
                title: '',
                viewWindow: {
                    min: new Date(yyyy, mm, dd - 9),
                    max: new Date(yyyy, mm, dd),
                },
            },
            vAxis: {
                title: '',
                format: 'currency',
            },
            legend: {
                position: 'right',
            }
        };
    } else if (range == "Month") {
        var options = {
            'title': 'Last Updated ' + metaData["3. Last Refreshed"],
            legend: 'none',
            hAxis: {
                title: '',
                viewWindow: {
                    min: new Date(yyyy, mm - 1, dd),
                    max: new Date(yyyy, mm, dd),
                },
            },
            vAxis: {
                title: '',
                format: 'currency',
            },
            legend: {
                position: 'right',
            }
        };
    } else if (range == "Year") {
        var options = {
            'title': 'Last Updated ' + metaData["3. Last Refreshed"],
            legend: 'none',
            hAxis: {
                title: '',
                viewWindow: {
                    min: new Date(yyyy - 1, mm, dd),
                    max: new Date(yyyy, mm, dd),
                },
            },
            vAxis: {
                title: '',
                format: 'currency',
            },
            legend: {
                position: 'right',
            }
        };
    } else if (range == "Full") {
        var options = {
            'title': 'Last Updated ' + metaData["3. Last Refreshed"],
            legend: 'none',
            hAxis: {
                title: '',
            },
            vAxis: {
                title: '',
                format: 'currency',
            },
            legend: {
                position: 'right',
            }
        };
    }

    return options;
}
