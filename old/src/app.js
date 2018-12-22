const ForeCast = require('./models/forecast');
const SelectCrag = require('./views/select_crag');
const CragInfo = require('./models/crag_info');
const DisplayCragInfo = require('./views/display_crag_info');

document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript loaded");

    const cragInfoDiv = document.querySelector('#crag-info')
    const displayCragInfo = new DisplayCragInfo(cragInfoDiv);
    displayCragInfo.bindEvents();
    
    const forecast = new ForeCast();
    forecast.bindEvents();

    const selectCrag = new SelectCrag(CragInfo);
    selectCrag.populateSelectCrag();
    selectCrag.bindEvents();
    
});
