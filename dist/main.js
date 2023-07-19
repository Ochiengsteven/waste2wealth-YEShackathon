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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Roboto', sans-serif;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n/* styling sign up sign in */\r\n#signup,\r\n#signin,\r\n#order,\r\n#rwds {\r\n  width: 100%;\r\n  max-height: 100vh;\r\n  display: none;\r\n}\r\n\r\n#landing-page {\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  list-style: none;\r\n}\r\n\r\nnav ul li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 80px;\r\n  height: 40px;\r\n  margin-right: 20px;\r\n  background: #0063da;\r\n  border-radius: 40px 20px;\r\n}\r\n\r\nnav ul li a {\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  height: 10vh;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 5%;\r\n}\r\n\r\n.signup-intro,\r\n.signin-intro {\r\n  margin-top: 20vh;\r\n  padding-left: 5%;\r\n  margin-bottom: 5vh;\r\n}\r\n\r\n.signup-intro h3,\r\n.signin-intro h3 {\r\n  font-size: 1.6rem;\r\n  font-weight: 600;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.signup-intro p,\r\n.signin-intro p {\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n  color: #030101;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  padding: 0 5% 0 5%;\r\n}\r\n\r\ninput,\r\nbutton {\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  width: 100%;\r\n  height: 50px;\r\n  border: none;\r\n  border-radius: 4px;\r\n}\r\n\r\nlabel {\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n  color: #030101;\r\n}\r\n\r\ninput {\r\n  padding-left: 10px;\r\n  background-color: #fff;\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n  color: #030101;\r\n  margin-top: 10px;\r\n}\r\n\r\nbutton {\r\n  margin-top: 50px;\r\n  padding: 5px 10px;\r\n  background: #030101;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.forgot {\r\n  margin-top: 20px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.forgot a {\r\n  font-size: 1.1rem;\r\n  font-weight: 500;\r\n  color: #030101;\r\n  text-align: center;\r\n}\r\n\r\n.error-message {\r\n  width: 100%;\r\n  text-align: center;\r\n  padding-top: 10px;\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n  color: red;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.backpage {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 20px;\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n  color: #030101;\r\n  margin-bottom: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.backpage p {\r\n  margin-left: 10px;\r\n}\r\n\r\n/* styling landing page */\r\n.about {\r\n  width: 100%;\r\n  max-height: 80vh;\r\n  padding: 0 5%;\r\n}\r\n\r\n.stats {\r\n  width: 100%;\r\n  height: 20vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  margin-top: 4vh;\r\n}\r\n\r\n.stats h4 {\r\n  font-size: 1.8rem;\r\n  font-weight: 600;\r\n  margin-bottom: 20px;\r\n  color: #a8cd66;\r\n}\r\n\r\n.stats p {\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  color: #030101;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.stat-1 {\r\n  margin-bottom: 20px;\r\n  display: flex;\r\n}\r\n\r\n.stat-1 p {\r\n  margin-right: 60px;\r\n}\r\n\r\n.title-story {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 2vh;\r\n}\r\n\r\n.title-story h3 {\r\n  font-size: 1.8rem;\r\n  font-weight: 600;\r\n\r\n  /* margin-bottom: 20px; */\r\n  padding: 0 2% 0 2%;\r\n}\r\n\r\n.title-story span {\r\n  border: 2px solid #030101;\r\n  width: 20px;\r\n}\r\n\r\n.story-content {\r\n  padding-top: 2vh;\r\n}\r\n\r\n.story-content h5 {\r\n  font-size: 1.9rem;\r\n  font-weight: 600;\r\n  margin-bottom: 20px;\r\n  color: #797470;\r\n}\r\n\r\n.story-content p {\r\n  font-size: 1.1rem;\r\n  font-weight: 500;\r\n  color: #030101;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.join {\r\n  width: 100%;\r\n  height: 15vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  margin-top: 4vh;\r\n  background: #0063da;\r\n  border-top-left-radius: 15px;\r\n  border-top-right-radius: 15px;\r\n}\r\n\r\n.join button {\r\n  padding: 5px 7px;\r\n  background: none;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  border: 2px solid #fff;\r\n  width: 110px;\r\n  margin-left: 3%;\r\n  margin-bottom: 10%;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.join-btn {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n/* account styling */\r\n#account {\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: none;\r\n}\r\n\r\n.blue {\r\n  width: 100%;\r\n  height: 25vh;\r\n  background: #0063da;\r\n  border-bottom-left-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  z-index: -1;\r\n  pointer-events: none;\r\n}\r\n\r\n.account-nav {\r\n  width: 100%;\r\n  height: 5vh;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 5%;\r\n  position: absolute;\r\n  top: 5px;\r\n  color: #fff;\r\n}\r\n\r\n.faqs {\r\n  width: 80px;\r\n  height: 30px;\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n  border-radius: 10px;\r\n}\r\n\r\n.faqs img {\r\n  width: 22px;\r\n  height: 22px;\r\n  margin-right: 8px;\r\n}\r\n\r\n.faqs h3 {\r\n  font-size: 1.1rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.welcome {\r\n  width: 100%;\r\n  height: 10vh;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 5%;\r\n  position: absolute;\r\n  top: 5vh;\r\n  color: #fff;\r\n}\r\n\r\n.welcome h3 {\r\n  font-size: 1.9rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.welcome p {\r\n  font-size: 1.1rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.points img {\r\n  width: 30px;\r\n  height: 30px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.welcome img:nth-child(1) {\r\n  margin: 0 10px 0 0;\r\n}\r\n\r\n.points {\r\n  width: 90%;\r\n  height: 14vh;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 0 5% 0 5%;\r\n  padding: 0 5%;\r\n  position: absolute;\r\n  top: 18vh;\r\n  background: #fff;\r\n  border-radius: 15px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.points h3 {\r\n  font-size: 1.8rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.points p {\r\n  font-size: 1.1rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.points span {\r\n  font-size: 1.1rem;\r\n  font-weight: 500;\r\n  color: #888;\r\n}\r\n\r\n.pts-icon {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.cards {\r\n  width: 95%;\r\n  height: 20vh;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 0 5% 0 5%;\r\n  padding: 0 5% 0 0;\r\n  position: absolute;\r\n  top: 35vh;\r\n}\r\n\r\n.card {\r\n  width: 45%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 5%;\r\n  background: #fff;\r\n  border-radius: 15px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.cards :nth-child(1) {\r\n  margin-right: 10px !important;\r\n}\r\n\r\n.level {\r\n  width: 90%;\r\n  height: 12vh;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 0 5% 0 5%;\r\n  padding: 0 5%;\r\n  position: absolute;\r\n  top: 58vh;\r\n  background: #fff;\r\n  border-radius: 15px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.infos {\r\n  display: flex;\r\n  padding-bottom: 5px;\r\n  align-items: center;\r\n}\r\n\r\n.infos h3 {\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n  margin-right: 6px;\r\n}\r\n\r\n.infos p {\r\n  font-size: 1.1rem;\r\n  font-weight: 500;\r\n  color: #888;\r\n}\r\n\r\n/* style confirm order page */\r\n.map {\r\n  width: 100%;\r\n  height: 75vh;\r\n}\r\n\r\n.map img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.navico {\r\n  width: 100%;\r\n  height: 8vh;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 5%;\r\n  position: absolute;\r\n  top: 5px;\r\n}\r\n\r\n.navico-1,\r\n.navico-2,\r\n.navico-4 {\r\n  height: 65%;\r\n  width: 50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: #fff;\r\n  border-radius: 10px;\r\n}\r\n\r\n.confirm {\r\n  width: 100%;\r\n  height: 45vh;\r\n  position: absolute;\r\n  top: 55vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0 5%;\r\n  background: #fff;\r\n  border-top-left-radius: 25px;\r\n  border-top-right-radius: 25px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.location,\r\n.date {\r\n  width: 100%;\r\n  height: 12vh;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.date {\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.location h3,\r\n.date h3 {\r\n  font-size: 1.4rem;\r\n  font-weight: 600;\r\n  margin-left: 6px;\r\n}\r\n\r\n.location p,\r\n.date p {\r\n  font-size: 1.1rem;\r\n  font-weight: 500;\r\n  color: #888;\r\n  margin-left: 6px;\r\n}\r\n\r\n.confirm img {\r\n  width: 30px;\r\n  height: 30px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.confirm-2 button {\r\n  width: 100%;\r\n  font-size: 1.2rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: #0063da;\r\n  border-radius: 15px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n/* add */\r\n#menu {\r\n  background: #fff;\r\n  width: 40vw;\r\n  height: 20vh;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 100;\r\n  border-bottom-left-radius: 15px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n#close-icon {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 5px;\r\n  cursor: pointer;\r\n  font-size: 1.8rem;\r\n}\r\n\r\n.settings {\r\n  display: flex;\r\n  flex-direction: column-reverse;\r\n  align-items: center;\r\n  list-style: none;\r\n  color: #030101;\r\n}\r\n\r\n.settings ul {\r\n  padding: 25px 0 0 10px;\r\n}\r\n\r\n.settings li {\r\n  margin: 10px 0;\r\n  list-style: none;\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n}\r\n\r\n/* start */\r\n.menuItems {\r\n  display: flex;\r\n  /* padding-top: 15%; */\r\n  list-style: none;\r\n}\r\n\r\n.menu {\r\n  font-family: Inter, sans-serif;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #505f79;\r\n}\r\n\r\n.settings {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  font-family: sans-serif;\r\n  /* padding: 15px; */\r\n}\r\n\r\n.settings #mainMenu {\r\n  display: flex;\r\n}\r\n\r\n.settings #mainMenu li a {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  color: #505f79;\r\n  font-weight: 600;\r\n  line-height: 44px;\r\n}\r\n\r\n.settings #mainMenu li a:hover {\r\n  color: #009879;\r\n  transform: scale(1.1);\r\n  transition: 0.2s;\r\n}\r\n\r\n.settings .openMenu {\r\n  display: none;\r\n  font-size: 2rem;\r\n  /* margin: 20px; */\r\n  cursor: pointer;\r\n}\r\n\r\n.closeMenu {\r\n  color: #67798e;\r\n}\r\n\r\n.settings #mainMenu .closeMenu {\r\n  display: none;\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .settings #mainMenu {\r\n    height: 25vh;\r\n    border-radius: 20px 0 0 20px;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 45%;\r\n    right: 0;\r\n    z-index: 10;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    background: #fff;\r\n    transition:  1s ease;\r\n    display: none;\r\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n  .settings #mainMenu .closeMenu {\r\n    display: block;\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 20px;\r\n  }\r\n\r\n  .settings .openMenu {\r\n    display: block;\r\n  }\r\n\r\n  .menuItems {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .fa-bars:before, .fa-navicon:before {\r\n    content: \"\\\\f0c9\";\r\n    padding: 0;\r\n    margin: 0;\r\n    position: absolute;\r\n    right: 3%;\r\n    top: 3%;\r\n}\r\n}\r\n/* end */\r\n\r\n.With-title {\r\n  width: 100%;\r\n  height: 10vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0 5%;\r\n  position: absolute;\r\n  top: 5vh;\r\n  color: #ebe7e7;\r\n  text-align: center;\r\n}\r\n\r\n.With-title h3 {\r\n  font-size: 1.9rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.remove-m {\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 40vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.blnce {\r\n  font-size: 2.5rem;\r\n  font-weight: 800;\r\n}\r\n\r\n@media (min-width: 420px) {\r\n  .join {\r\n    position: absolute;\r\n    bottom: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-top: 50px;\r\n  }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://waste2wealth/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://waste2wealth/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://waste2wealth/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://waste2wealth/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://waste2wealth/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://waste2wealth/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://waste2wealth/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://waste2wealth/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://waste2wealth/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://waste2wealth/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_signIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/signIn.js */ \"./src/modules/signIn.js\");\n/* harmony import */ var _modules_renderLogin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderLogin.js */ \"./src/modules/renderLogin.js\");\n/* harmony import */ var _modules_pickup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/pickup.js */ \"./src/modules/pickup.js\");\n/* harmony import */ var _assets_arrow_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/arrow.png */ \"./src/assets/arrow.png\");\n/* harmony import */ var _assets_back_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/back.png */ \"./src/assets/back.png\");\n/* harmony import */ var _assets_question_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/question.png */ \"./src/assets/question.png\");\n/* harmony import */ var _assets_settings_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/settings.png */ \"./src/assets/settings.png\");\n/* harmony import */ var _assets_reload_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/reload.png */ \"./src/assets/reload.png\");\n/* harmony import */ var _assets_notification_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/notification.png */ \"./src/assets/notification.png\");\n/* harmony import */ var _assets_star_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/star.png */ \"./src/assets/star.png\");\n/* harmony import */ var _assets_earnings_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/earnings.png */ \"./src/assets/earnings.png\");\n/* harmony import */ var _assets_gift_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/gift.png */ \"./src/assets/gift.png\");\n/* harmony import */ var _assets_next_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/next.png */ \"./src/assets/next.png\");\n/* harmony import */ var _assets_rank_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/rank.png */ \"./src/assets/rank.png\");\n/* harmony import */ var _assets_map_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/map.jpg */ \"./src/assets/map.jpg\");\n/* harmony import */ var _assets_gps_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/gps.png */ \"./src/assets/gps.png\");\n/* harmony import */ var _assets_black_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/black.png */ \"./src/assets/black.png\");\n/* harmony import */ var _assets_location_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/location.png */ \"./src/assets/location.png\");\n/* harmony import */ var _assets_date_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/date.png */ \"./src/assets/date.png\");\n/* eslint-disable no-alert */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst arrowIcon = new Image();\narrowIcon.src = _assets_arrow_png__WEBPACK_IMPORTED_MODULE_4__;\nconst questionIcon = new Image();\nquestionIcon.src = _assets_question_png__WEBPACK_IMPORTED_MODULE_6__;\nconst questionDiv = document.querySelector('.faqs');\nquestionDiv.appendChild(questionIcon);\n\nconst reloadIcon = new Image();\nreloadIcon.src = _assets_reload_png__WEBPACK_IMPORTED_MODULE_8__;\n\nconst notificationIcon = new Image();\nnotificationIcon.src = _assets_notification_png__WEBPACK_IMPORTED_MODULE_9__;\n\nconst settingsIcon = new Image();\nsettingsIcon.src = _assets_settings_png__WEBPACK_IMPORTED_MODULE_7__;\nsettingsIcon.classList.add('openMenu');\nconst settingsDiv = document.querySelector('.settings');\nsettingsDiv.appendChild(settingsIcon);\n\nconst joinbtn = document.querySelector('.join-btn');\njoinbtn.appendChild(arrowIcon);\n\n// add display pages functions\ndocument.getElementById('signin-btn').addEventListener('click', _modules_renderLogin_js__WEBPACK_IMPORTED_MODULE_2__.signInClick);\ndocument.getElementById('signup-btn').addEventListener('click', _modules_renderLogin_js__WEBPACK_IMPORTED_MODULE_2__.signUpClick);\ndocument.querySelector('.join-btn').addEventListener('click', _modules_renderLogin_js__WEBPACK_IMPORTED_MODULE_2__.signUpClick);\ndocument.getElementById('link-signup').addEventListener('click', _modules_renderLogin_js__WEBPACK_IMPORTED_MODULE_2__.signUpClick);\ndocument.getElementById('link-signin').addEventListener('click', _modules_renderLogin_js__WEBPACK_IMPORTED_MODULE_2__.signInClick);\n\ndocument.getElementById('signin-form').addEventListener('submit', (event) => {\n  event.preventDefault(); // Prevent form submission\n\n  // Clear any existing error messages and error styling\n  const errorMessages = document.getElementsByClassName('error-message');\n  while (errorMessages.length > 0) {\n    errorMessages[0].remove();\n  }\n  document.getElementById('password').classList.remove('error');\n\n  (0,_modules_signIn_js__WEBPACK_IMPORTED_MODULE_1__.handleSignIn)();\n});\n\nlet users = [];\n\ndocument.getElementById('signup-form').addEventListener('submit', (event) => {\n  event.preventDefault(); // Prevent form submission\n\n  // Get form values\n  const name = document.getElementById('name').value;\n  const email = document.getElementById('email').value;\n  const password = document.getElementById('password').value;\n\n  // Validate form fields\n  if (name === '' || email === '' || password === '') {\n    alert('Please fill in all required fields.');\n    return;\n  }\n\n  // Get existing users from local storage or initialize an empty array\n  users = JSON.parse(localStorage.getItem('users')) || [];\n\n  // Check if the email already exists\n  const existingUser = users.find((u) => u.email === email);\n  if (existingUser) {\n    alert('This email is already registered.');\n    return;\n  }\n\n  // Create user object\n  const user = {\n    name,\n    email,\n    password,\n  };\n\n  // Add the new user to the array\n  users.push(user);\n\n  // Save the updated user array to local storage\n  localStorage.setItem('users', JSON.stringify(users));\n\n  // Clear form fields\n  document.getElementById('name').value = '';\n  document.getElementById('email').value = '';\n  document.getElementById('password').value = '';\n\n  alert('Registration successful!');\n});\n\n// go back to landing page\nconst backpageDiv1 = document.querySelector('#login-back');\nconst backp = document.createElement('p');\nbackp.innerHTML = 'Back';\nconst backIcon = new Image();\nbackIcon.src = _assets_back_png__WEBPACK_IMPORTED_MODULE_5__;\nbackpageDiv1.appendChild(backIcon);\nbackpageDiv1.appendChild(backp);\n\nconst backpageDiv2 = document.getElementById('signup-back');\nbackpageDiv2.appendChild(backIcon);\nbackpageDiv2.appendChild(backp);\n\nbackpageDiv1.addEventListener('click', _modules_renderLogin_js__WEBPACK_IMPORTED_MODULE_2__.landingClick);\nbackpageDiv2.addEventListener('click', _modules_renderLogin_js__WEBPACK_IMPORTED_MODULE_2__.landingClick);\n\n// render welcome note\nconst welcomeDiv = document.querySelector('.welcome');\nwelcomeDiv.innerHTML = `<div class=\"welcome-note\">\n                         <p>Welcome</p>\n                         <h3>Steven</h3>\n                        </div>\n                        <div class=\"icons-welcome\"></div>`;\nconst iconsDiv = document.querySelector('.icons-welcome');\niconsDiv.appendChild(reloadIcon);\niconsDiv.appendChild(notificationIcon);\n\n// render user points\nconst pointsDiv = document.querySelector('.pts-icon');\nconst starIcon = new Image();\nstarIcon.src = _assets_star_png__WEBPACK_IMPORTED_MODULE_10__;\npointsDiv.appendChild(starIcon);\npointsDiv.innerHTML += '<p>Points</p>';\n\n// render cards\nconst earningsIcon = new Image();\nearningsIcon.src = _assets_earnings_png__WEBPACK_IMPORTED_MODULE_11__;\nconst giftIcon = new Image();\ngiftIcon.src = _assets_gift_png__WEBPACK_IMPORTED_MODULE_12__;\nconst nextIcon = new Image();\nnextIcon.src = _assets_next_png__WEBPACK_IMPORTED_MODULE_13__;\nconst cards = [\n  {\n    img: earningsIcon.src,\n    title: 'Earn',\n    next: nextIcon.src,\n    id: 'earn',\n  },\n  {\n    img: giftIcon.src,\n    title: 'Withdraw',\n    next: nextIcon.src,\n    id: 'withdraw-card',\n  },\n];\n\nconst cardsDiv = document.querySelector('.cards');\ncards.forEach((card) => {\n  cardsDiv.innerHTML += `<div class=\"card\" id=\"${card.id}\">\n                            <div class=\"icon\">\n                              <img src=${card.img} alt=\"earnings\" />\n                              <h3>${card.title}</h3>\n                            </div>\n                            <div class=\"next\">\n                              <img src=${card.next} alt=\"next\" />\n                            </div>\n                          </div>`;\n});\n\n// render levels\nconst rankIcon = new Image();\nrankIcon.src = _assets_rank_png__WEBPACK_IMPORTED_MODULE_14__;\nconst levelsDiv = document.querySelector('.level');\nlevelsDiv.innerHTML = `<div class=\"icon\">\n                            <img src=${rankIcon.src} alt=\"star\" />\n                        </div>\n                        <div>\n                          <div class=\"infos\">\n                            <h3>Bronze</h3><p>(Level 1)</p>\n                          </div>\n                          <div>\n                            <p>1000 points to Silver</p>\n                            <progress id=\"progress-bar\" value=\"2000\" max=\"3000\" style=\"height: 4px; background-color: green;\"></progress>\n                          </div>\n                        </div>\n                        <div class=\"next\">\n                          <img src=${nextIcon.src} alt=\"next\" />\n                        </div>`;\n\n// render map\nconst mapDiv = document.querySelector('.map');\nconst mapImg = new Image();\nmapImg.src = _assets_map_jpg__WEBPACK_IMPORTED_MODULE_15__;\nmapDiv.appendChild(mapImg);\n\n// render gps\nconst gpsDiv = document.querySelector('.navico-2');\nconst gpsImg = new Image();\ngpsImg.src = _assets_gps_png__WEBPACK_IMPORTED_MODULE_16__;\ngpsDiv.appendChild(gpsImg);\n\n// render black\nconst blackDiv = document.querySelector('.navico-1');\nconst blackImg = new Image();\nblackImg.src = _assets_black_png__WEBPACK_IMPORTED_MODULE_17__;\nblackDiv.appendChild(blackImg);\n\nconst blackDiv2 = document.querySelector('.navico-4');\nblackDiv2.appendChild(blackImg);\n\n// render location and date\nconst locationDiv = document.querySelector('#location');\nconst dateDiv = document.querySelector('#date');\nconst locationImg = new Image();\nlocationImg.src = _assets_location_png__WEBPACK_IMPORTED_MODULE_18__;\nlocationDiv.appendChild(locationImg);\nconst dateImg = new Image();\ndateImg.src = _assets_date_png__WEBPACK_IMPORTED_MODULE_19__;\ndateDiv.appendChild(dateImg);\n\n// render earnings navigations\nblackDiv.addEventListener('click', _modules_pickup_js__WEBPACK_IMPORTED_MODULE_3__.backpickClick);\nblackDiv2.addEventListener('click', _modules_pickup_js__WEBPACK_IMPORTED_MODULE_3__.backwithdrawClick);\nconst orderDiv = document.querySelector('#earn');\norderDiv.addEventListener('click', _modules_pickup_js__WEBPACK_IMPORTED_MODULE_3__.pickUpClick);\n\n// settings\nconst mainMenu = document.querySelector('#mainMenu');\nconst closeMenu = document.querySelector('.closeMenu');\nconst openMenu = document.querySelector('.openMenu');\nconst dashboard = document.querySelector('a[href=\"#dashboard\"]');\nconst history = document.querySelector('a[href=\"#history\"]');\n\nfunction show() {\n  mainMenu.style.display = 'flex';\n  mainMenu.style.top = '0';\n}\n\nfunction close() {\n  mainMenu.style.top = '-100%';\n}\n\nfunction logOut() {\n  mainMenu.style.top = '-100%';\n  (0,_modules_renderLogin_js__WEBPACK_IMPORTED_MODULE_2__.landingClick)();\n}\n\nopenMenu.addEventListener('click', show);\ncloseMenu.addEventListener('click', close);\ndashboard.addEventListener('click', close);\nhistory.addEventListener('click', logOut);\n\n// render withdraw\nconst withdrawDiv = document.querySelector('#withdraw-card');\nwithdrawDiv.addEventListener('click', _modules_pickup_js__WEBPACK_IMPORTED_MODULE_3__.withdrawClick);\n\n\n//# sourceURL=webpack://waste2wealth/./src/index.js?");

/***/ }),

/***/ "./src/modules/pickup.js":
/*!*******************************!*\
  !*** ./src/modules/pickup.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   backpickClick: () => (/* binding */ backpickClick),\n/* harmony export */   backwithdrawClick: () => (/* binding */ backwithdrawClick),\n/* harmony export */   pickUpClick: () => (/* binding */ pickUpClick),\n/* harmony export */   withdrawClick: () => (/* binding */ withdrawClick)\n/* harmony export */ });\nfunction pickUpClick() {\n  const landingPage = document.getElementById('landing-page');\n  const signInPage = document.getElementById('signin');\n  const signUpPage = document.getElementById('signup');\n  const accountPage = document.getElementById('account');\n  const pickPage = document.getElementById('order');\n\n  landingPage.style.display = 'none';\n  signInPage.style.display = 'none';\n  signUpPage.style.display = 'none';\n  accountPage.style.display = 'none';\n  pickPage.style.display = 'block';\n}\n\nfunction backpickClick() {\n  const landingPage = document.getElementById('landing-page');\n  const signInPage = document.getElementById('signin');\n  const signUpPage = document.getElementById('signup');\n  const accountPage = document.getElementById('account');\n  const pickPage = document.getElementById('order');\n\n  landingPage.style.display = 'none';\n  signInPage.style.display = 'none';\n  signUpPage.style.display = 'none';\n  accountPage.style.display = 'block';\n  pickPage.style.display = 'none';\n}\n\nfunction withdrawClick() {\n  const landingPage = document.getElementById('landing-page');\n  const signInPage = document.getElementById('signin');\n  const signUpPage = document.getElementById('signup');\n  const accountPage = document.getElementById('account');\n  const pickPage = document.getElementById('order');\n  const withdrawPage = document.getElementById('rwds');\n\n  landingPage.style.display = 'none';\n  signInPage.style.display = 'none';\n  signUpPage.style.display = 'none';\n  accountPage.style.display = 'none';\n  pickPage.style.display = 'none';\n  withdrawPage.style.display = 'block';\n}\n\nfunction backwithdrawClick() {\n  const landingPage = document.getElementById('landing-page');\n  const signInPage = document.getElementById('signin');\n  const signUpPage = document.getElementById('signup');\n  const accountPage = document.getElementById('account');\n  const pickPage = document.getElementById('order');\n  const withdrawPage = document.getElementById('rwds');\n\n  landingPage.style.display = 'none';\n  signInPage.style.display = 'none';\n  signUpPage.style.display = 'none';\n  accountPage.style.display = 'block';\n  pickPage.style.display = 'none';\n  withdrawPage.style.display = 'none';\n}\n\n//# sourceURL=webpack://waste2wealth/./src/modules/pickup.js?");

/***/ }),

/***/ "./src/modules/renderLogin.js":
/*!************************************!*\
  !*** ./src/modules/renderLogin.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   landingClick: () => (/* binding */ landingClick),\n/* harmony export */   signInClick: () => (/* binding */ signInClick),\n/* harmony export */   signUpClick: () => (/* binding */ signUpClick)\n/* harmony export */ });\nfunction landingClick() {\n  const landingPage = document.getElementById('landing-page');\n  const signInPage = document.getElementById('signin');\n  const signUpPage = document.getElementById('signup');\n  const accountPage = document.getElementById('account');\n  const pickPage = document.getElementById('order');\n\n  landingPage.style.display = 'block';\n  signInPage.style.display = 'none';\n  signUpPage.style.display = 'none';\n  accountPage.style.display = 'none';\n  pickPage.style.display = 'none';\n}\n\nfunction signInClick() {\n  const landingPage = document.getElementById('landing-page');\n  const signInPage = document.getElementById('signin');\n  const signUpPage = document.getElementById('signup');\n  const accountPage = document.getElementById('account');\n  const pickPage = document.getElementById('order');\n\n  landingPage.style.display = 'none';\n  signInPage.style.display = 'block';\n  signUpPage.style.display = 'none';\n  accountPage.style.display = 'none';\n  pickPage.style.display = 'none';\n}\n\nfunction signUpClick() {\n  const landingPage = document.getElementById('landing-page');\n  const signInPage = document.getElementById('signin');\n  const signUpPage = document.getElementById('signup');\n  const accountPage = document.getElementById('account');\n  const pickPage = document.getElementById('order');\n\n  landingPage.style.display = 'none';\n  signInPage.style.display = 'none';\n  signUpPage.style.display = 'block';\n  accountPage.style.display = 'none';\n  pickPage.style.display = 'none';\n}\n\n\n//# sourceURL=webpack://waste2wealth/./src/modules/renderLogin.js?");

/***/ }),

/***/ "./src/modules/signIn.js":
/*!*******************************!*\
  !*** ./src/modules/signIn.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleSignIn: () => (/* binding */ handleSignIn)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\n/* eslint-disable no-use-before-define */\nfunction accountClick() {\n  const landingPage = document.getElementById('landing-page');\n  const signInPage = document.getElementById('signin');\n  const signUpPage = document.getElementById('signup');\n  const accountPage = document.getElementById('account');\n  const pickPage = document.getElementById('order');\n\n  landingPage.style.display = 'none';\n  signInPage.style.display = 'none';\n  signUpPage.style.display = 'none';\n  accountPage.style.display = 'block';\n  pickPage.style.display = 'none';\n}\n\nfunction handleSignIn() {\n  // Get form values\n  const email = document.getElementById('sign-in-email').value;\n  const password = document.getElementById('sign-in-password').value;\n\n  // Validate form fields\n  if (email.trim() === '') {\n    displayErrorMessage('Please fill in the email field.');\n    return;\n  }\n\n  if (password.trim() === '') {\n    displayErrorMessage('Please fill in the password field.');\n    return;\n  }\n\n  // Get existing users from local storage or initialize an empty array\n  const users = JSON.parse(localStorage.getItem('users')) || [];\n\n  // Find user by email\n  const user = users.find((u) => u.email === email);\n\n  if (!user) {\n    // Case: Email does not exist in local storage\n    displayErrorMessage('Please sign up to continue.');\n    return;\n  }\n\n  if (user.password === password) {\n    // Case: Correct email and password combination\n    // Redirect to dashboard section\n    accountClick();\n  } else {\n    // Case: Incorrect password\n    displayErrorMessage('Wrong password!');\n    document.getElementById('password').classList.add('error');\n  }\n}\n\nfunction displayErrorMessage(message) {\n  const errorDiv = document.createElement('div');\n  errorDiv.classList.add('error-message');\n  errorDiv.textContent = message;\n  const signInForm = document.getElementById('signin-form');\n\n  // Clear any existing error messages and error styling\n  const existingErrorDiv = signInForm.querySelector('.error-message');\n  if (existingErrorDiv) {\n    existingErrorDiv.remove();\n  }\n  document.getElementById('password').classList.remove('error');\n\n  signInForm.insertBefore(errorDiv, signInForm.lastElementChild);\n}\n\n\n\n\n//# sourceURL=webpack://waste2wealth/./src/modules/signIn.js?");

/***/ }),

/***/ "./src/assets/arrow.png":
/*!******************************!*\
  !*** ./src/assets/arrow.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2585bda50d36292e7dbe.png\";\n\n//# sourceURL=webpack://waste2wealth/./src/assets/arrow.png?");

/***/ }),

/***/ "./src/assets/back.png":
/*!*****************************!*\
  !*** ./src/assets/back.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"72e47a76b9b5f2bbe22c.png\";\n\n//# sourceURL=webpack://waste2wealth/./src/assets/back.png?");

/***/ }),

/***/ "./src/assets/black.png":
/*!******************************!*\
  !*** ./src/assets/black.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5b2f853799afd629121c.png\";\n\n//# sourceURL=webpack://waste2wealth/./src/assets/black.png?");

/***/ }),

/***/ "./src/assets/date.png":
/*!*****************************!*\
  !*** ./src/assets/date.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"43b61fbe114b8c78f1e0.png\";\n\n//# sourceURL=webpack://waste2wealth/./src/assets/date.png?");

/***/ }),

/***/ "./src/assets/earnings.png":
/*!*********************************!*\
  !*** ./src/assets/earnings.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf37439a5b5e4b8f60eb.png\";\n\n//# sourceURL=webpack://waste2wealth/./src/assets/earnings.png?");

/***/ }),

/***/ "./src/assets/gift.png":
/*!*****************************!*\
  !*** ./src/assets/gift.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1cfec42272614712a8d4.png\";\n\n//# sourceURL=webpack://waste2wealth/./src/assets/gift.png?");

/***/ }),

/***/ "./src/assets/gps.png":
/*!****************************!*\
  !*** ./src/assets/gps.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e9d91d1486b1efdc8fe4.png\";\n\n//# sourceURL=webpack://waste2wealth/./src/assets/gps.png?");

/***/ }),

/***/ "./src/assets/location.png":
/*!*********************************!*\
  !*** ./src/assets/location.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"744cb7ce01876d927968.png\";\n\n//# sourceURL=webpack://waste2wealth/./src/assets/location.png?");

/***/ }),

/***/ "./src/assets/map.jpg":
/*!****************************!*\
  !*** ./src/assets/map.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e44cd3aea51025c7081f.jpg\";\n\n//# sourceURL=webpack://waste2wealth/./src/assets/map.jpg?");

/***/ }),

/***/ "./src/assets/next.png":
/*!*****************************!*\
  !*** ./src/assets/next.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"54f495151aa6ddc74793.png\";\n\n//# sourceURL=webpack://waste2wealth/./src/assets/next.png?");

/***/ }),

/***/ "./src/assets/notification.png":
/*!*************************************!*\
  !*** ./src/assets/notification.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3ae6e3ba3ab9e0c87c1f.png\";\n\n//# sourceURL=webpack://waste2wealth/./src/assets/notification.png?");

/***/ }),

/***/ "./src/assets/question.png":
/*!*********************************!*\
  !*** ./src/assets/question.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ef8a21905b60de4afa64.png\";\n\n//# sourceURL=webpack://waste2wealth/./src/assets/question.png?");

/***/ }),

/***/ "./src/assets/rank.png":
/*!*****************************!*\
  !*** ./src/assets/rank.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"146f535b1b18c1a43d50.png\";\n\n//# sourceURL=webpack://waste2wealth/./src/assets/rank.png?");

/***/ }),

/***/ "./src/assets/reload.png":
/*!*******************************!*\
  !*** ./src/assets/reload.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8f7355b1fbf2142850ea.png\";\n\n//# sourceURL=webpack://waste2wealth/./src/assets/reload.png?");

/***/ }),

/***/ "./src/assets/settings.png":
/*!*********************************!*\
  !*** ./src/assets/settings.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5baa9dd8e718511cf1e8.png\";\n\n//# sourceURL=webpack://waste2wealth/./src/assets/settings.png?");

/***/ }),

/***/ "./src/assets/star.png":
/*!*****************************!*\
  !*** ./src/assets/star.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f659e95c1f12ff1def6a.png\";\n\n//# sourceURL=webpack://waste2wealth/./src/assets/star.png?");

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;