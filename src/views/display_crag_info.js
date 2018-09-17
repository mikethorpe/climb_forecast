const PubSub = require('../helpers/pub_sub');

const DisplayCragInfo = function(container){
    this.measurementData = null;
    this.dataLabels = null;
    this.container = container;
}

DisplayCragInfo.prototype.bindEvents = function(){
    PubSub.subscribe('Forecast:fiveday-threehour-data', (event) => {
        this.measurementData = event.detail.DV;
        this.dataLabels = event.detail.Wx.Params;
        this.render();
    });
}

DisplayCragInfo.prototype.render = function(){
    console.log(this.measurementData);
    this.container.innerHTML = '';


    const table = document.createElement('table');
    this.container.appendChild(table)

    this.renderTableHead(table);
    this.renderTableData(table);
}

DisplayCragInfo.prototype.renderTableHead = function(table){
    const tableHeadRow = document.createElement('tr');
    table.appendChild(tableHeadRow);

    const tableHeadDate = document.createElement('th');
    tableHeadDate.textContent = 'Day';
    tableHeadRow.appendChild(tableHeadDate);

    const tableHeadTemp = document.createElement('th');
    tableHeadTemp.textContent = 'Temperature';
    tableHeadRow.appendChild(tableHeadTemp);

    const tableHeadRainProb = document.createElement('th');
    tableHeadRainProb.textContent = 'Probability of rain';
    tableHeadRow.appendChild(tableHeadRainProb);
}

DisplayCragInfo.prototype.renderTableData = function(table){
    console.log(this.measurementData);
    
    const todaysData = this.measurementData.Location.Period[0].Rep;
    this.renderTableRow(table, todaysData, "Today");

   console.log( todaysData);
   
    const tommorrowsData = this.measurementData.Location.Period[1].Rep;
    this.renderTableRow(table, tommorrowsData, "Tomorrow");
       
}

DisplayCragInfo.prototype.renderTableRow = function(table, dayData, day){
    
    dayData.forEach( (timePoint) => {
        const tableDataRow = document.createElement('tr');
        table.appendChild(tableDataRow);

        //day
        const dayData = document.createElement('td');
        dayData.textContent = day;
        tableDataRow.appendChild(dayData);

        //temperature
        const tempData = document.createElement('td');
        tempData.textContent = timePoint.T;
        tableDataRow.appendChild(tempData);

        //probability of rain
        const rainProbData = document.createElement('td');
        rainProbData.textContent = `${timePoint.Pp}%`;
        tableDataRow.appendChild(rainProbData);
    });
}

module.exports = DisplayCragInfo;