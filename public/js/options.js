var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();

function getChartOptions(range) {
    if (range == "Day") {

        var options = {
            'title': 'Last Updated ' + metaData["3. Last Refreshed"],
            //curveType: 'function',
            height: 400,
            legend: 'none',
            hAxis: {
                title: '',
                viewWindow: {
                    min: new Date(yyyy, mm, dd, 9, 30),
                    max: new Date(yyyy, mm, dd, 16),
                },
                gridlines: { 
                    count: 5,
                },
            },
            vAxis: {
                title: '',
                format: 'currency',
               /*  gridlines: { 
                    count: 4
                } */
            },
            legend: {
                position: 'right',
            }
        };
    } else if (range == "Week") {
        var options = {
            'title': 'Last Updated ' + metaData["3. Last Refreshed"],
            //curveType: 'function',
            height: 400,
            legend: 'none',
            hAxis: {
                title: '',
                viewWindow: {
                    min: new Date(yyyy, mm, dd - 9),
                    max: new Date(yyyy, mm, dd),
                },
                gridlines: { 
                    count: 8,
                },
            },
            vAxis: {
                title: '',
                format: 'currency',
               /*  gridlines: { 
                    count: 4
                } */
            },
            legend: {
                position: 'right',
            }
        };
    } else if (range == "Month") {
        var options = {
            'title': 'Last Updated ' + metaData["3. Last Refreshed"],
            //curveType: 'function',
            height: 400,
            legend: 'none',
            hAxis: {
                title: '',
                viewWindow: {
                    min: new Date(yyyy, mm - 1, dd),
                    max: new Date(yyyy, mm, dd),
                },
                gridlines: { 
                    count: 15
                }
            },
            vAxis: {
                title: '',
                format: 'currency',
               /*  gridlines: { 
                    count: 10,
                }, */
            },
            legend: {
                position: 'right',
            }
        };
    } else if (range == "Year") {
        var options = {
            'title': 'Last Updated ' + metaData["3. Last Refreshed"],
            height: 400,
            curveType: 'function',
            legend: 'none',
            hAxis: {
                title: '',
                viewWindow: {
                    min: new Date(yyyy - 1, mm, dd),
                    max: new Date(yyyy, mm, dd),
                },
                gridlines: { 
                    count: 12
                }
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
            height: 400,
            curveType: 'function',
            legend: 'none',
            hAxis: {
                title: '',
                gridlines: { 
                    count: 21
                }
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
