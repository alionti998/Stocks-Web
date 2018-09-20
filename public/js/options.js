var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();

function getChartOptions(range) {
    if (range == "Day") {

        var options = {
            'title': 'Last Updated ' + metaData["3. Last Refreshed"],
            legend: 'none',
            hAxis: {
                title: '',
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
                position: 'right',
            }
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
