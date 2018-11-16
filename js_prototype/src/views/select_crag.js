const PubSub = require('../helpers/pub_sub');

const SelectCrag = function(cragInfo){
    this.cragInfo = cragInfo;
}

SelectCrag.prototype.bindEvents = function(){
    const selectCrag = document.querySelector('#select-crag');    
    selectCrag.addEventListener("change", (event) => {
        const metLocationId = event.target.value;
        PubSub.publish("SelectCrag:met-location-id", metLocationId);        
    });
}

SelectCrag.prototype.populateSelectCrag = function(){
    const selectCrag = document.querySelector('#select-crag');
    this.cragInfo.forEach( (crag) => {
        const selectCragOption = document.createElement("option");
        selectCragOption.value = crag.metLocationId;
        selectCragOption.textContent = crag.name;
        selectCrag.appendChild(selectCragOption);
    });
}

module.exports = SelectCrag;