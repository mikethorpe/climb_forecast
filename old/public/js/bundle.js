/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api_keys/met_office_key.js":
/*!****************************************!*\
  !*** ./src/api_keys/met_office_key.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const met_office_key = 'dcd639f3-7b7e-4456-a219-3761dcdd460c';\n\nmodule.exports = met_office_key;\n\n//# sourceURL=webpack:///./src/api_keys/met_office_key.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const ForeCast = __webpack_require__(/*! ./models/forecast */ \"./src/models/forecast.js\");\nconst SelectCrag = __webpack_require__(/*! ./views/select_crag */ \"./src/views/select_crag.js\");\nconst CragInfo = __webpack_require__(/*! ./models/crag_info */ \"./src/models/crag_info.js\");\nconst DisplayCragInfo = __webpack_require__(/*! ./views/display_crag_info */ \"./src/views/display_crag_info.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    console.log(\"JavaScript loaded\");\n\n    const cragInfoDiv = document.querySelector('#crag-info')\n    const displayCragInfo = new DisplayCragInfo(cragInfoDiv);\n    displayCragInfo.bindEvents();\n    \n    const forecast = new ForeCast();\n    forecast.bindEvents();\n\n    const selectCrag = new SelectCrag(CragInfo);\n    selectCrag.populateSelectCrag();\n    selectCrag.bindEvents();\n    \n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n    publish: function (channel, payload) {\n      const event = new CustomEvent(channel, {\n        detail: payload\n      });\n      document.dispatchEvent(event);\n    },\n  \n    subscribe: function (channel, callback) {\n      document.addEventListener(channel, callback);\n    }\n  };\n  \n  module.exports = PubSub;\n  \n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helper.js":
/*!***************************************!*\
  !*** ./src/helpers/request_helper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n    this.url = url;\n  }\n  \n  // TODO: replace this with a fetch()\n  RequestHelper.prototype.get = function (onComplete) {\n    const xhr = new XMLHttpRequest();\n    xhr.open('GET', this.url);\n    xhr.addEventListener('load', function() {\n      if (this.status !== 200) {\n        return;\n      }\n  \n      const data = JSON.parse(this.responseText);\n      onComplete(data);\n    });\n    xhr.send();\n  };\n  \n  module.exports = RequestHelper;\n  \n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/crag_info.js":
/*!*********************************!*\
  !*** ./src/models/crag_info.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const CragInfo = [\n    { \n        name: \"Aberdour - Hawkraig\",\n        metLocationId: 350013\n    }, \n    {\n        name: \"Rosyth Quarry\",\n        metLocationId: 322718\n    } \n]\n\nmodule.exports = CragInfo;\n\n//# sourceURL=webpack:///./src/models/crag_info.js?");

/***/ }),

/***/ "./src/models/forecast.js":
/*!********************************!*\
  !*** ./src/models/forecast.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Forecasts model\nconst MET_OFFICE_KEY = __webpack_require__(/*! ../api_keys/met_office_key */ \"./src/api_keys/met_office_key.js\");\nconst RequestHelper = __webpack_require__(/*! ../helpers/request_helper */ \"./src/helpers/request_helper.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\n\nconst Forecast = function(){\n    this.data = null;\n    this.metLocationId = null;\n}\n\nForecast.prototype.bindEvents = function(){\n    PubSub.subscribe('SelectCrag:met-location-id', (event) => {\n        this.metLocationId = event.detail;\n        this.getFiveDayThreeHrData();\n    })\n}\n\nForecast.prototype.getFiveDayThreeHrData = function(){\n    const url = `http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${this.metLocationId}?res=3hourly&key=${MET_OFFICE_KEY}`;\n    \n    console.log(url);\n    \n    const requestHelper = new RequestHelper(url);\n    this.data = requestHelper.get((data) => {\n        this.data = data.SiteRep;\n        PubSub.publish('Forecast:fiveday-threehour-data', this.data);  \n              \n    });\n    \n}\n\nmodule.exports = Forecast;\n\n//# sourceURL=webpack:///./src/models/forecast.js?");

/***/ }),

/***/ "./src/views/display_crag_info.js":
/*!****************************************!*\
  !*** ./src/views/display_crag_info.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\n\nconst DisplayCragInfo = function(container){\n    this.measurementData = null;\n    this.dataLabels = null;\n    this.container = container;\n}\n\nDisplayCragInfo.prototype.bindEvents = function(){\n    PubSub.subscribe('Forecast:fiveday-threehour-data', (event) => {\n        this.measurementData = event.detail.DV;\n        this.dataLabels = event.detail.Wx.Params;\n        this.render();\n    });\n}\n\nDisplayCragInfo.prototype.render = function(){\n    console.log(this.measurementData);\n    this.container.innerHTML = '';\n\n\n    const table = document.createElement('table');\n    this.container.appendChild(table)\n\n    this.renderTableHead(table);\n    this.renderTableData(table);\n}\n\nDisplayCragInfo.prototype.renderTableHead = function(table){\n    const tableHeadRow = document.createElement('tr');\n    table.appendChild(tableHeadRow);\n\n    const tableHeadDate = document.createElement('th');\n    tableHeadDate.textContent = 'Day';\n    tableHeadRow.appendChild(tableHeadDate);\n\n    const tableHeadTemp = document.createElement('th');\n    tableHeadTemp.textContent = 'Temperature';\n    tableHeadRow.appendChild(tableHeadTemp);\n\n    const tableHeadRainProb = document.createElement('th');\n    tableHeadRainProb.textContent = 'Probability of rain';\n    tableHeadRow.appendChild(tableHeadRainProb);\n}\n\nDisplayCragInfo.prototype.renderTableData = function(table){\n    console.log(this.measurementData);\n    \n    const todaysData = this.measurementData.Location.Period[0].Rep;\n    this.renderTableRow(table, todaysData, \"Today\");\n\n   console.log( todaysData);\n   \n    const tommorrowsData = this.measurementData.Location.Period[1].Rep;\n    this.renderTableRow(table, tommorrowsData, \"Tomorrow\");\n       \n}\n\nDisplayCragInfo.prototype.renderTableRow = function(table, dayData, day){\n    \n    dayData.forEach( (timePoint) => {\n        const tableDataRow = document.createElement('tr');\n        table.appendChild(tableDataRow);\n\n        //day\n        const dayData = document.createElement('td');\n        dayData.textContent = day;\n        tableDataRow.appendChild(dayData);\n\n        //temperature\n        const tempData = document.createElement('td');\n        tempData.textContent = timePoint.T;\n        tableDataRow.appendChild(tempData);\n\n        //probability of rain\n        const rainProbData = document.createElement('td');\n        rainProbData.textContent = `${timePoint.Pp}%`;\n        tableDataRow.appendChild(rainProbData);\n    });\n}\n\nmodule.exports = DisplayCragInfo;\n\n//# sourceURL=webpack:///./src/views/display_crag_info.js?");

/***/ }),

/***/ "./src/views/select_crag.js":
/*!**********************************!*\
  !*** ./src/views/select_crag.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\n\nconst SelectCrag = function(cragInfo){\n    this.cragInfo = cragInfo;\n}\n\nSelectCrag.prototype.bindEvents = function(){\n    const selectCrag = document.querySelector('#select-crag');    \n    selectCrag.addEventListener(\"change\", (event) => {\n        const metLocationId = event.target.value;\n        PubSub.publish(\"SelectCrag:met-location-id\", metLocationId);        \n    });\n}\n\nSelectCrag.prototype.populateSelectCrag = function(){\n    const selectCrag = document.querySelector('#select-crag');\n    this.cragInfo.forEach( (crag) => {\n        const selectCragOption = document.createElement(\"option\");\n        selectCragOption.value = crag.metLocationId;\n        selectCragOption.textContent = crag.name;\n        selectCrag.appendChild(selectCragOption);\n    });\n}\n\nmodule.exports = SelectCrag;\n\n//# sourceURL=webpack:///./src/views/select_crag.js?");

/***/ })

/******/ });