// Forecasts model
const MET_OFFICE_KEY = require('../api_keys/met_office_key');
const RequestHelper = require('../helpers/request_helper');
const PubSub = require('../helpers/pub_sub');

const Forecast = function(){
    this.data = null;
    this.metLocationId = null;
}

Forecast.prototype.bindEvents = function(){
    PubSub.subscribe('SelectCrag:met-location-id', (event) => {
        this.metLocationId = event.detail;
        this.getFiveDayThreeHrData();
    })
}

Forecast.prototype.getFiveDayThreeHrData = function(){
    const url = `http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${this.metLocationId}?res=3hourly&key=${MET_OFFICE_KEY}`;
    
    console.log(url);
    
    const requestHelper = new RequestHelper(url);
    this.data = requestHelper.get((data) => {
        this.data = data.SiteRep;
        PubSub.publish('Forecast:fiveday-threehour-data', this.data);  
              
    });
    
}

module.exports = Forecast;