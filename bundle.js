/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./index.html\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ \"./css/main.scss\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ \"./js/main.js\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);\n// if (window.location.hostname.includes(\"github.io\")) {\n//     __webpack_public_path__ = \"./\";\n//   }\n/*\r\n * This is the main entry point for Webpack, the compiler & dependency loader.\r\n * All files that are necessary for your web page and need to be 'watched' for changes should be included here!\r\n */\n\n// HTML Files\n\n\n// Stylesheets\n\n\n// Scripts\n\n\n//# sourceURL=webpack://mp1/./index.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

eval("/* Your JS here. */\nconsole.log('Hello World!');\nwindow.onscroll = function () {\n  updateHeader();\n};\n\n// // Get the header\nvar header = document.getElementById(\"header\");\nvar profileHeader = document.getElementById(\"profile\");\nvar interestsHeader = document.getElementById(\"interests\");\nvar projectsHeader = document.getElementById(\"projects\");\nvar demoHeader = document.getElementById(\"demo\");\nfunction updateHeader() {\n  if (window.scrollY > 0) {\n    header.classList.add(\"top\");\n  } else {\n    header.classList.remove(\"top\");\n  }\n  var currHeight = 60;\n  console.log(currHeight);\n  if (window.scrollY < 500) {\n    header.style.height = 74 + \"px\";\n    profileHeader.style.fontSize = 20 + \"px\";\n    interestsHeader.style.fontSize = 20 + \"px\";\n    projectsHeader.style.fontSize = 20 + \"px\";\n    demoHeader.style.fontSize = 20 + \"px\";\n  } else {\n    header.style.height = 60 + \"px\";\n    profileHeader.style.fontSize = 15 + \"px\";\n    interestsHeader.style.fontSize = 15 + \"px\";\n    projectsHeader.style.fontSize = 15 + \"px\";\n    demoHeader.style.fontSize = 15 + \"px\";\n  }\n  requestAnimationFrame(updateHeader);\n}\nupdateHeader();\nwindow.onscroll = function () {\n  updateNavBar();\n};\n// NAVBAR INDICATOR\nvar profileSection = document.getElementById(\"profileSection\");\nvar profilePosition = profileSection.getBoundingClientRect().top;\nvar interestSection = document.getElementById(\"interestSection\");\nvar interestPosition = interestSection.getBoundingClientRect().top;\nvar projectSection = document.getElementById(\"projectSection\");\nvar projectPosition = projectSection.getBoundingClientRect().top;\nvar videoSection = document.getElementById(\"videoSection\");\nvar videoPosition = videoSection.getBoundingClientRect().top;\nfunction updateNavBar() {\n  if (window.scrollY < interestPosition - 310) {\n    profileHeader.style.borderStyle = \"solid\";\n    interestsHeader.style.borderStyle = \"hidden\";\n    projectsHeader.style.borderStyle = \"hidden\";\n    demoHeader.style.borderStyle = \"hidden\";\n  } else if (window.scrollY < projectPosition - 310) {\n    profileHeader.style.borderStyle = \"hidden\";\n    interestsHeader.style.borderStyle = \"solid\";\n    projectsHeader.style.borderStyle = \"hidden\";\n    demoHeader.style.borderStyle = \"hidden\";\n  } else if (window.scrollY < videoPosition - 310) {\n    profileHeader.style.borderStyle = \"hidden\";\n    interestsHeader.style.borderStyle = \"hidden\";\n    projectsHeader.style.borderStyle = \"solid\";\n    demoHeader.style.borderStyle = \"hidden\";\n  } else {\n    profileHeader.style.borderStyle = \"hidden\";\n    interestsHeader.style.borderStyle = \"hidden\";\n    projectsHeader.style.borderStyle = \"hidden\";\n    demoHeader.style.borderStyle = \"solid\";\n  }\n  requestAnimationFrame(updateNavBar);\n}\n\n// Header Smooth Scrolling\nprofileHeader.addEventListener(\"click\", function () {\n  var yheight = window.scrollY;\n  var timer = setInterval(function () {\n    if (yheight > 5) {\n      window.scrollTo(0, yheight);\n      yheight = yheight - 24;\n    }\n  }, 1);\n});\ninterestsHeader.addEventListener(\"click\", function () {\n  var yheight = window.scrollY;\n  if (yheight < interestPosition - 150) {\n    var timer = setInterval(function () {\n      if (yheight < interestPosition - 150) {\n        window.scrollTo(0, yheight);\n        yheight = yheight + 24;\n      }\n    }, 1);\n  } else {\n    var timer = setInterval(function () {\n      if (yheight > interestPosition - 150) {\n        window.scrollTo(0, yheight);\n        yheight = yheight - 24;\n      }\n    }, 1);\n  }\n});\nprojectsHeader.addEventListener(\"click\", function () {\n  var yheight = window.scrollY;\n  if (yheight < projectPosition - 150) {\n    var timer = setInterval(function () {\n      if (yheight < projectPosition - 150) {\n        window.scrollTo(0, yheight);\n        yheight = yheight + 24;\n      }\n    }, 1);\n  } else {\n    var timer = setInterval(function () {\n      if (yheight > projectPosition - 150) {\n        window.scrollTo(0, yheight);\n        yheight = yheight - 24;\n      }\n    }, 1);\n  }\n});\ndemoHeader.addEventListener(\"click\", function () {\n  var yheight = window.scrollY;\n  if (yheight < videoPosition - 50) {\n    var timer = setInterval(function () {\n      if (yheight < videoPosition - 50) {\n        window.scrollTo(0, yheight);\n        yheight = yheight + 24;\n      }\n    }, 1);\n  }\n});\nvar nextSlide = document.querySelector(\".btn-next\");\nvar slides = document.querySelectorAll(\".slide\");\nvar curSlide = 0;\nvar maxSlide = slides.length - 1;\nnextSlide.addEventListener(\"click\", function () {\n  if (curSlide === maxSlide) {\n    curSlide = 0;\n  } else {\n    curSlide++;\n  }\n  slides.forEach(function (slide, indx) {\n    slide.style.transform = \"translateX(\".concat(100 * (indx - curSlide), \"%)\");\n  });\n});\nvar prevSlide = document.querySelector(\".btn-prev\");\nprevSlide.addEventListener(\"click\", function () {\n  if (curSlide === 0) {\n    curSlide = maxSlide;\n  } else {\n    curSlide--;\n  }\n  slides.forEach(function (slide, indx) {\n    slide.style.transform = \"translateX(\".concat(100 * (indx - curSlide), \"%)\");\n  });\n});\nvar modal = document.getElementById(\"mlModal\");\nvar btn = document.getElementById(\"mlBtn\");\nvar span = document.getElementById(\"mlClose\");\nbtn.onclick = function () {\n  console.log(\"btn click\");\n  modal.style.display = \"block\";\n};\nspan.onclick = function () {\n  console.log(\"span click\");\n  modal.style.display = \"none\";\n};\nvar modal1 = document.getElementById(\"dsModal\");\nvar btn1 = document.getElementById(\"dsBtn\");\nvar span1 = document.getElementById(\"dsClose\");\nbtn1.onclick = function () {\n  modal1.style.display = \"block\";\n  console.log(\"btn1 click\");\n};\nspan1.onclick = function () {\n  console.log(\"span1 click\");\n  modal1.style.display = \"none\";\n};\nvar modal2 = document.getElementById(\"wpModal\");\nvar btn2 = document.getElementById(\"wpBtn\");\nvar span2 = document.getElementById(\"wpClose\");\nbtn2.onclick = function () {\n  modal2.style.display = \"block\";\n  console.log(\"btn1 click\");\n};\nspan2.onclick = function () {\n  console.log(\"span1 click\");\n  modal2.style.display = \"none\";\n};\n\n//# sourceURL=webpack://mp1/./js/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://mp1/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://mp1/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://mp1/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \**********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../assets/background2.jpeg */ \"./assets/background2.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Your SCSS here. */\\n#header {\\n  margin: 0px;\\n  padding: 0px;\\n  z-index: 100;\\n  overflow-x: hidden;\\n  width: 100%;\\n  height: 74px;\\n  background-color: #2e4e67;\\n  color: #d0ca75;\\n  text-align: right;\\n  align-content: center;\\n  align-items: center;\\n}\\n\\n#headerTitle {\\n  color: white;\\n  text-align: left;\\n}\\n\\nfooter {\\n  padding-top: 50px;\\n  width: 100%;\\n  height: 150px;\\n  background-color: #2e4e67;\\n  align-items: center;\\n  text-align: center;\\n}\\n\\n.footerInfo {\\n  padding-left: 10vw;\\n  padding-right: 10vw;\\n}\\n\\n.email {\\n  color: white;\\n  font-size: large;\\n}\\n\\nhtml {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  background-attachment: fixed;\\n  background-repeat: no-repeat;\\n  background-position: center center;\\n  margin: 0px;\\n  padding: 0px;\\n  border: 0px;\\n}\\n\\n.body {\\n  margin: 0px;\\n  padding: 0px;\\n  border: 0px;\\n}\\n\\n.top {\\n  position: fixed;\\n  top: 0;\\n}\\n\\n.subHeader {\\n  display: inline-block;\\n  color: white;\\n  padding-right: 10px;\\n  padding-left: 10px;\\n  padding-top: 5px;\\n  padding-bottom: 5px;\\n  margin-top: 15px;\\n  margin-left: 10px;\\n  margin-right: 10px;\\n  border-radius: 10px;\\n  border-style: solid;\\n  background-color: #2e4e67;\\n  border-color: #346a92;\\n  font-size: 19px;\\n  cursor: pointer;\\n}\\n\\n#contact {\\n  margin-right: 20px;\\n}\\n\\n#interestSection {\\n  background-color: #ffffff;\\n  width: 100%;\\n  height: 600px;\\n  border-style: unset;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  opacity: 100%;\\n  flex-direction: column;\\n}\\n\\n#videoSection {\\n  background-color: #ffffff;\\n  width: 100%;\\n  height: 600px;\\n  border-style: unset;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  opacity: 100%;\\n  flex-direction: column;\\n  text-align: center;\\n  position: relative;\\n  top: 40px;\\n}\\n\\n#video {\\n  height: 65%;\\n  width: 65%;\\n}\\n\\n#strip4 {\\n  background-color: #ffffff;\\n  width: 100%;\\n  height: 600px;\\n  border-style: unset;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  opacity: 100%;\\n  background-color: #ffffff;\\n  width: 100%;\\n  height: 600px;\\n  border-style: unset;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  opacity: 100%;\\n}\\n\\n#strip3 {\\n  height: 100px;\\n}\\n\\n.card {\\n  margin-right: 14%;\\n  margin-left: 14%;\\n  margin-top: 5%;\\n  margin-bottom: 5%;\\n  padding: 20px;\\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\\n  text-align: center;\\n  align-content: center;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  min-height: 75vh;\\n  max-height: 100vh;\\n}\\n\\n.innerCard {\\n  background-color: #ffffff;\\n  border-radius: 30px;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  height: 60vh;\\n  width: 70vw;\\n}\\n\\n.circleContainer {\\n  margin-top: 20px;\\n  width: 20vh;\\n  height: 20vh;\\n  border-radius: 50%;\\n  overflow: hidden;\\n  background-color: #2e4e67;\\n  align-self: center;\\n}\\n\\nh1 {\\n  color: #2e4e67;\\n  padding-top: 30px;\\n  align-self: center;\\n}\\n\\nh3 {\\n  align-self: center;\\n}\\n\\n#profilepic {\\n  width: 100%;\\n  height: 100%;\\n  -o-object-fit: cover;\\n     object-fit: cover;\\n}\\n\\n.slider {\\n  width: 100%;\\n  height: 90%;\\n  position: relative;\\n  overflow: hidden;\\n  /* <===  */\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  border-radius: 15px;\\n}\\n\\n.slide {\\n  width: 86%;\\n  height: 100%;\\n  margin-left: 7%;\\n  margin-right: 7%;\\n  align-self: center;\\n  align-content: center;\\n  text-align: center;\\n  position: absolute;\\n  transition: all 0.5s;\\n}\\n\\n#titleSlide {\\n  z-index: 99;\\n  background-color: #ffffff;\\n}\\n\\n#div {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.slide img {\\n  width: 40vh;\\n  height: 40vh;\\n}\\n\\n.btn {\\n  position: absolute;\\n  width: 30px;\\n  height: 30px;\\n  padding: 10px;\\n  border: none;\\n  border-radius: 50%;\\n  z-index: 10px;\\n  cursor: pointer;\\n  background-color: #2e4e67;\\n  font-size: 18px;\\n  z-index: 100;\\n}\\n\\n.btn:active {\\n  transform: scale(1.1);\\n}\\n\\n.btn-prev {\\n  top: 45%;\\n  left: 2%;\\n}\\n\\n.btn-next {\\n  top: 45%;\\n  right: 2%;\\n}\\n\\n.fa {\\n  padding: 7px;\\n  font-size: 30px;\\n  width: 20px;\\n  height: 20px;\\n  text-align: center;\\n  display: flex;\\n  text-decoration: none;\\n  border-radius: 10%;\\n  background-color: #0077B5;\\n  color: white;\\n}\\n\\n#database {\\n  background-color: #898989;\\n  border-radius: 50%;\\n  font-size: 50px;\\n  width: 60px;\\n  height: 60px;\\n}\\n\\n#insta {\\n  background-color: #ea6989;\\n  margin-left: 5px;\\n}\\n\\n#github {\\n  color: #000;\\n  background-color: #ffffff;\\n  margin-left: 5px;\\n}\\n\\nh2 {\\n  margin-top: 0px;\\n  padding-top: 5px;\\n  color: white;\\n}\\n\\n.skill {\\n  padding-right: 4vw;\\n  padding-left: 4vw;\\n  margin-left: 1vw;\\n  margin-right: 1vw;\\n  margin-top: 80px;\\n  align-content: center;\\n  flex-direction: column;\\n  display: flex;\\n  align-self: center;\\n  align-items: center;\\n  border: 1px;\\n  border-style: groove;\\n  border-color: #2e4e67;\\n  background-color: #ffffff;\\n  border-radius: 5px;\\n  font-family: \\\"Courier New\\\", Courier, monospace;\\n  font-size: 14px;\\n}\\n\\n.circleIcon {\\n  padding-top: 15px;\\n  justify-content: center;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n#title {\\n  color: #2e4e67;\\n  font-family: \\\"Courier New\\\", Courier, monospace;\\n  font-size: 40px;\\n}\\n\\n.info {\\n  flex-direction: row;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.modal {\\n  display: none;\\n  position: fixed;\\n  z-index: 1;\\n  padding-top: 100px;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  background-color: black;\\n  background-color: rgba(0, 0, 0, 0.4);\\n}\\n\\n.modal-content {\\n  position: relative;\\n  background-color: #fefefe;\\n  margin: auto;\\n  padding: 0;\\n  border: 1px solid #888;\\n  width: 80%;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n  -webkit-animation-name: animatetop;\\n  -webkit-animation-duration: 0.4s;\\n  animation-name: animatetop;\\n  animation-duration: 0.4s;\\n}\\n\\n/* Add Animation */\\n@keyframes animatetop {\\n  from {\\n    top: -300px;\\n    opacity: 0;\\n  }\\n  to {\\n    top: 0;\\n    opacity: 1;\\n  }\\n}\\n/* The Close Button */\\n.close {\\n  color: white;\\n  float: right;\\n  font-size: 28px;\\n  font-weight: bold;\\n}\\n\\n.close:hover,\\n.close:focus {\\n  color: #000;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\n.modal-header {\\n  padding: 6px 16px;\\n  background-color: #2e4e67;\\n  color: white;\\n}\\n\\n.modal-body {\\n  padding: 2px 16px;\\n  font-size: large;\\n}\\n\\n#videoTitle {\\n  color: #2e4e67;\\n  font-family: \\\"Courier New\\\", Courier, monospace;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mp1/./css/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/profile.jpg */ \"./assets/profile.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/devicon.png */ \"./assets/devicon.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/videoPart3.mp4 */ \"./assets/videoPart3.mp4\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"utf-8\\\">\\r\\n    <meta http-equiv=\\\"x-ua-compatible\\\" content=\\\"ie=edge\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <title>MP1</title>\\r\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\\\">\\r\\n\\r\\n</head>\\r\\n<body>\\r\\n\\r\\n    <header id=\\\"header\\\">\\r\\n        <button class=\\\"subHeader\\\" id=\\\"profile\\\">Profile</button>\\r\\n        <button class=\\\"subHeader\\\" id=\\\"interests\\\">Interests</button>\\r\\n        <button class=\\\"subHeader\\\" id=\\\"projects\\\">Projects</button>\\r\\n        <button class=\\\"subHeader\\\" id=\\\"demo\\\">Demo</button>\\r\\n    </header>\\r\\n\\r\\n    <div id=\\\"profileSection\\\" class=\\\"card\\\">\\r\\n        <div class=\\\"innerCard\\\">\\r\\n            <div class=\\\"circleContainer\\\">\\r\\n                <img id=\\\"profilepic\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"> <!-- Ensure image exists -->\\r\\n            </div>\\r\\n            <h1>Connor Flynn ~ My Portfolio</h1>\\r\\n            <h3 id=\\\"centerNeed\\\">\\r\\n                Hello! My name is Connor and I am a Junior studying Computer Science at the \\r\\n                University of Illinois at Urbana-Champaign. I am an aspiring Software Developer \\r\\n                looking to make impacts in Full Stack Development.\\r\\n            </h3>\\r\\n        </div>\\r\\n    </div>\\r\\n\\r\\n    <div id=\\\"interestSection\\\">\\r\\n        <h1 id=\\\"title\\\"> My Interests </h1>\\r\\n        \\r\\n        <div class=\\\"info\\\">\\r\\n            <button id=\\\"mlBtn\\\" class=\\\"skill\\\">\\r\\n                <div class=\\\"circleIcon\\\">\\r\\n                    <i class=\\\"fa-solid fa-chart-line\\\"></i>\\r\\n                </div>\\r\\n                <h1> Machine Learning </h1>\\r\\n            </button>\\r\\n            <button id=\\\"dsBtn\\\" class=\\\"skill\\\">\\r\\n                <div class=\\\"circleIcon\\\">\\r\\n                    <i class=\\\"fa-solid fa-database\\\"></i>\\r\\n                </div>\\r\\n                <h1> Database Systems</h1>\\r\\n            </button>\\r\\n            <button id=\\\"wpBtn\\\" class=\\\"skill\\\">\\r\\n                <div class=\\\"circleIcon\\\">\\r\\n                    <i class=\\\"fa-solid fa-code\\\"></i>\\r\\n                </div>\\r\\n                <h1> Web Programming</h1>\\r\\n            </button>\\r\\n        </div>\\r\\n    </div>\\r\\n\\r\\n    <div id=\\\"projectSection\\\" class=\\\"card\\\">\\r\\n        <div class=\\\"innerCard\\\">\\r\\n            <div class=\\\"slider\\\">\\r\\n                <h1> My Projects </h1>\\r\\n                \\r\\n                <div class=\\\"slide\\\">\\r\\n                    <h1> UIUC Apartment Finder</h1>\\r\\n                    <p> Developed a Full stack web application that provided UIUC students with the ability to easily find apartments.</p>\\r\\n                </div>\\r\\n\\r\\n                <div class=\\\"slide\\\">\\r\\n                    <h1> Recipe Web Application</h1>\\r\\n                    <p> Developed a Web Application that allowed users to find recipes based on an image or manually entered ingredients.</p>\\r\\n                    <p> Utilized the Spoonacular API and Google Cloud Vision API.</p>\\r\\n                    <p> Used Django framework.</p>\\r\\n                    <a href=\\\"https://github.com/cflynn19/Cooking-Recipe-Web-Application\\\"> GitHub </a>\\r\\n                </div>\\r\\n\\r\\n                <div id=\\\"titleSlide\\\" class=\\\"slide\\\">\\r\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"> <!-- Ensure correct path -->\\r\\n                </div>\\r\\n\\r\\n                <button class=\\\"btn btn-next\\\"></button>\\r\\n                <button class=\\\"btn btn-prev\\\"></button>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n\\r\\n    <div id=\\\"videoSection\\\">\\r\\n        <h1 id=\\\"videoTitle\\\">Demo of Recipe Web Application</h1>\\r\\n        <video id=\\\"video\\\" controls>  \\r\\n            <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" type=\\\"video/mp4\\\">\\r\\n        </video>\\r\\n    </div>\\r\\n\\r\\n    <footer>\\r\\n        <div class=\\\"info\\\">\\r\\n            <div class=\\\"footerInfo\\\">\\r\\n                <h2> My Socials </h2>\\r\\n                <a href=\\\"https://www.linkedin.com/in/connor-flynn-253960228/\\\" class=\\\"fa-brands fa-linkedin\\\"></a>\\r\\n                <a href=\\\"https://github.com/cflynn19\\\" class=\\\"fa-brands fa-github\\\"></a>\\r\\n            </div>\\r\\n            <div class=\\\"footerInfo\\\">\\r\\n                <h2> Contact Me: </h2>\\r\\n                <a href=\\\"mailto:cjflynn2@illinois.edu\\\">cjflynn2@illinois.edu</a>\\r\\n            </div>\\r\\n        </div>\\r\\n    </footer>\\r\\n\\r\\n    \\r\\n</body>\\r\\n</html>\\r\\n\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://mp1/./index.html?");

/***/ }),

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://mp1/./css/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://mp1/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://mp1/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://mp1/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://mp1/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://mp1/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://mp1/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./assets/background2.jpeg":
/*!*********************************!*\
  !*** ./assets/background2.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"17782b21bf8f5c9e838c.jpeg\";\n\n//# sourceURL=webpack://mp1/./assets/background2.jpeg?");

/***/ }),

/***/ "./assets/videoPart3.mp4":
/*!*******************************!*\
  !*** ./assets/videoPart3.mp4 ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c1daaf39b69e3b0eb555.mp4\";\n\n//# sourceURL=webpack://mp1/./assets/videoPart3.mp4?");

/***/ }),

/***/ "./assets/devicon.png":
/*!****************************!*\
  !*** ./assets/devicon.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2943bc37c27793d80023.png\";\n\n//# sourceURL=webpack://mp1/./assets/devicon.png?");

/***/ }),

/***/ "./assets/profile.jpg":
/*!****************************!*\
  !*** ./assets/profile.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"84973a6a0915afa725b1.jpg\";\n\n//# sourceURL=webpack://mp1/./assets/profile.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;