/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPage\": () => (/* binding */ contactPage)\n/* harmony export */ });\nconst contactPage = () => {\n    const content = document.querySelector('#content');\n    \n    const home = document.createElement('div'); \n    home.setAttribute('class', 'home');\n\n\n    const info = document.createElement('div');\n    info.setAttribute('class', 'info');\n    home.appendChild(info);\n\n    const hoursDiv = document.createElement('div');\n    const hours= document.createTextNode(\"Hours\");\n    hoursDiv.appendChild(hours);\n    hoursDiv.setAttribute('class', 'hours');\n    info.appendChild(hoursDiv);\n\n    const daysDiv = document.createElement('div');\n    const days= document.createTextNode(\"Monday - Friday\");\n    daysDiv.appendChild(days);\n    daysDiv.setAttribute('class', 'contactTxt');\n    info.appendChild(daysDiv);\n\n    const timeDiv = document.createElement('div');\n    const time= document.createTextNode(\"7AM - 2PM\");\n    timeDiv.appendChild(time);\n    timeDiv.setAttribute('class', 'contactTxt');\n    info.appendChild(timeDiv);\n\n    const locationDiv = document.createElement('div');\n    const location= document.createTextNode(\"Berkley, CA\");\n    locationDiv.appendChild(location);\n    locationDiv.setAttribute('class', 'contactTxt');\n    info.appendChild(locationDiv);\n\n\n    const m2 = document.createElement('div');\n    const homeMessage2 = document.createTextNode(\"Coffee Break\");\n    m2.appendChild(homeMessage2);\n    m2.setAttribute('class', 'm2');\n    home.appendChild(m2);\n\n    return home;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contactPage.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\nconst homePage = () => {\n    const content = document.querySelector('#content');\n\n    const home = document.createElement('div'); \n    home.setAttribute('class', 'home');\n\n\n    const m1 = document.createElement('div');\n    const homeMessage1 = document.createTextNode(\"Need Energy?\");\n    m1.appendChild(homeMessage1);\n    m1.setAttribute('class', 'm1');\n    home.appendChild(m1);\n\n    const m2 = document.createElement('div');\n    const homeMessage2 = document.createTextNode(\"Coffee Break\");\n    m2.appendChild(homeMessage2);\n    m2.setAttribute('class', 'm2');\n    home.appendChild(m2);\n\n    const image = document.createElement('img');\n    image.setAttribute('src', 'img/coffee.jpeg');\n    home.appendChild(image);\n\n    \n    return home;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n\n\n\n\n//Default Page\ncontent.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_0__.homePage)());\n\n(function changeTab() {\n\n    const content = document.getElementById('content');\n    const homeBtn = document.getElementById('homeTab');\n    const menuBtn = document.getElementById('menuTab');\n    const contactBtn = document.getElementById('contactTab');\n     \n    \n    function homeLink() {\n        reset();\n        content.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_0__.homePage)());\n    }\n    \n    \n    function menuLink() {\n        reset();\n        content.appendChild((0,_menuPage__WEBPACK_IMPORTED_MODULE_1__.menuPage)());\n    }\n    \n    function contactLink() {\n        reset();\n        content.appendChild((0,_contactPage__WEBPACK_IMPORTED_MODULE_2__.contactPage)());\n    }\n    \n    \n    function reset() {\n        content.innerHTML = '';\n    }\n    \n    \n    homeBtn.addEventListener('click', homeLink);\n    menuBtn.addEventListener('click', menuLink);\n    contactBtn.addEventListener('click', contactLink);\n\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\nconst menuPage = () => {\n    const content = document.querySelector('#content');\n    \n    const home = document.createElement('div'); \n    home.setAttribute('class', 'home');\n\n    const m1 = document.createElement('div');\n    const homeMessage1 = document.createTextNode(\"Need Energy?\");\n    m1.appendChild(homeMessage1);\n    m1.setAttribute('class', 'm1');\n    home.appendChild(m1);\n\n    const grid = document.createElement('div');\n    grid.setAttribute('class', 'grid');\n    home.appendChild(grid);\n\n    const item1 = document.createElement('div'); \n    item1.setAttribute('class', 'item1');\n    grid.appendChild(item1);\n\n    const affogato = document.createElement('img');\n    affogato.setAttribute('src', 'img/affogato.jpeg');\n    affogato.style.height = \"100%\";\n    affogato.style.width = \"100%\";\n    affogato.style.borderRadius = \"0.25rem\";\n    affogato.style.border = \"0.25rem solid #3a5e52\";\n    item1.appendChild(affogato);\n\n    \n    const item2 = document.createElement('div'); \n    item2.setAttribute('class', 'item2');\n    grid.appendChild(item2);\n\n    const iced= document.createElement('img');\n    iced.setAttribute('src', 'img/iced.jpeg');\n    iced.style.height = \"100%\";\n    iced.style.width = \"100%\";\n    iced.style.borderRadius = \"0.25rem\";\n    iced.style.border = \"0.25rem solid #3a5e52\";\n    item2.appendChild(iced);\n\n    const item3 = document.createElement('div'); \n    item3.setAttribute('class', 'item3');\n    grid.appendChild(item3);\n\n    const latte= document.createElement('img');\n    latte.setAttribute('src', 'img/latte.jpeg');\n    latte.style.height = \"100%\";\n    latte.style.width = \"100%\";\n    latte.style.borderRadius = \"0.25rem\";\n    latte.style.border = \"0.25rem solid #3a5e52\";\n    item3.appendChild(latte);\n\n    const item4 = document.createElement('div'); \n    item4.setAttribute('class', 'item4');\n    grid.appendChild(item4);\n\n    const espresso= document.createElement('img');\n    espresso.setAttribute('src', 'img/espresso.jpeg');\n    espresso.style.height = \"100%\";\n    espresso.style.width = \"100%\";\n    espresso.style.borderRadius = \"0.25rem\";\n    espresso.style.border = \"0.25rem solid #3a5e52\";\n    item4.appendChild(espresso);\n\n    return home;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menuPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;