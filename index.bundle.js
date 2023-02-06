"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./magic.jpeg */ "./src/magic.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Modern+Antiqua&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n  --main-light: #68aaec;\n  --main-dark: rgb(17, 1, 24);\n  --main-text: #e0a3e0;\n  --main-title: #e0a3e0;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody{\n  font-family: 'Modern Antiqua';\n  box-sizing: border-box;\n  background-color: var(--main-dark);\n  letter-spacing: 1px;\n}\n\n#content{\n  min-height: 100vh;\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  font-size: 18px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 300px;\n  justify-content: space-between;\n}\n\n.header, .footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--main-title);\n  background-color: var(--main-dark);\n}\n\n.header{\n  padding: 20px;\n  height: min-content;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\nbutton {\n  font-family: \"Modern Antiqua\";\n  font-size: 20px;\n  color: var(--main-text);\n  background-color: var(--main-dark);\n}\n\n.tabs{\n  display: flex;\n  gap: 20px;\n}\n.tab{\n  border: 1px solid var(--main-light);\n  padding: 10px;\n}\n.selected-tab{\n  border: 5px solid var(--main-light);\n}\n\n.name{\n  font-size: 64px;\n  font-weight: 700;\n}\n\n.footer{\n  height: 40px;\n}\n\n.main{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 50px;\n}\n\n.main-item{\n  text-align: center;\n  height: fit-content;\n  width: fit-content;\n  max-width: 500px;\n  padding: 50px;\n  font-size: 20px;\n  color: var(--main-text);\n  background-color: var(--main-dark);\n  border-radius: 25px;\n}\n\n.menu{\n  display: flex; \n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n\n.menu-item{\n  padding: 25px;\n  display: grid;\n  place-content: center;\n  place-items: center;\n  grid: \"name price\" 50px\n        \"img img\" 300px\n        \"desc desc\" 100px\n        / minmax(200px, 1fr) minmax(200px, 1fr);\n}\n.menu-item-name{\n  grid-area: name;\n  justify-self: left;\n}\n.menu-item-price{\n  grid-area: price;\n  justify-self: right;\n}\n.menu-item-img{\n  grid-area: img;\n}\n.menu-item-img img{\n  height: 300px;\n}\n.menu-item-desc{\n  grid-area: desc;\n}\n\n.contact{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.contact-item{\n  text-align: left;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,qBAAqB;EACrB,2BAA2B;EAC3B,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B,sBAAsB;EACtB,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,mDAA+B;EAC/B,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,wBAAwB;EACxB,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,6BAA6B;EAC7B,eAAe;EACf,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,mCAAmC;EACnC,aAAa;AACf;AACA;EACE,mCAAmC;AACrC;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB;;;+CAG6C;AAC/C;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;AACf;AACA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,gBAAgB;AAClB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Modern+Antiqua&display=swap');\n\n:root{\n  --main-light: #68aaec;\n  --main-dark: rgb(17, 1, 24);\n  --main-text: #e0a3e0;\n  --main-title: #e0a3e0;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody{\n  font-family: 'Modern Antiqua';\n  box-sizing: border-box;\n  background-color: var(--main-dark);\n  letter-spacing: 1px;\n}\n\n#content{\n  min-height: 100vh;\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  font-size: 18px;\n  background: url('./magic.jpeg');\n  background-size: 300px;\n  justify-content: space-between;\n}\n\n.header, .footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--main-title);\n  background-color: var(--main-dark);\n}\n\n.header{\n  padding: 20px;\n  height: min-content;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\nbutton {\n  font-family: \"Modern Antiqua\";\n  font-size: 20px;\n  color: var(--main-text);\n  background-color: var(--main-dark);\n}\n\n.tabs{\n  display: flex;\n  gap: 20px;\n}\n.tab{\n  border: 1px solid var(--main-light);\n  padding: 10px;\n}\n.selected-tab{\n  border: 5px solid var(--main-light);\n}\n\n.name{\n  font-size: 64px;\n  font-weight: 700;\n}\n\n.footer{\n  height: 40px;\n}\n\n.main{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 50px;\n}\n\n.main-item{\n  text-align: center;\n  height: fit-content;\n  width: fit-content;\n  max-width: 500px;\n  padding: 50px;\n  font-size: 20px;\n  color: var(--main-text);\n  background-color: var(--main-dark);\n  border-radius: 25px;\n}\n\n.menu{\n  display: flex; \n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n\n.menu-item{\n  padding: 25px;\n  display: grid;\n  place-content: center;\n  place-items: center;\n  grid: \"name price\" 50px\n        \"img img\" 300px\n        \"desc desc\" 100px\n        / minmax(200px, 1fr) minmax(200px, 1fr);\n}\n.menu-item-name{\n  grid-area: name;\n  justify-self: left;\n}\n.menu-item-price{\n  grid-area: price;\n  justify-self: right;\n}\n.menu-item-img{\n  grid-area: img;\n}\n.menu-item-img img{\n  height: 300px;\n}\n.menu-item-desc{\n  grid-area: desc;\n}\n\n.contact{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.contact-item{\n  text-align: left;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHoursInfo() {
  const hours = document.createElement('div');
  hours.classList.add('main-item', 'contact-item');
  hours.innerHTML = `Hours<br><br>
  Monday: 6pm - 2am<br>
  Tuesday: 6pm - 2am<br>
  Wednesday: 6pm - 2am<br>
  Thursday: 6pm - 2am<br>
  Friday: 6pm - 2am<br>
  Saturday: 6pm - 2am<br>
  Sunday: 6pm - 2am`;
  return hours;
}

function createAddressInfo() {
  const address = document.createElement('div');
  address.classList.add('main-item', 'address', 'contact-item');
  address.innerHTML = 'Address<br><br>444 Wicca Way<br>East Magia, Sector QX<br>Free Cities';
  return address;
}

function createPhoneInfo() {
  const phone = document.createElement('div');
  phone.classList.add('main-item', 'contact-item');
  phone.innerHTML = 'Phone<br><br>333-9090-5732';
  return phone;
}

function createEmailInfo() {
  const email = document.createElement('div');
  email.classList.add('main-item', 'contact-item');
  email.innerHTML = 'Email<br><br>EyeOfNewt@hermes.com';
  return email;
}

function createContactInfo() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const hours = createHoursInfo();
  contact.appendChild(hours);

  const address = createAddressInfo();
  contact.appendChild(address);

  const phone = createPhoneInfo();
  contact.appendChild(phone);

  const email = createEmailInfo();
  contact.appendChild(email);

  return contact;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactInfo);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHomeInfo() {
  const description = document.createElement('div');
  description.classList.add('main-item');
  description.innerHTML = 'If a Shakespearean orphan were given even the tiniest taste of '
  + 'any one of our world famous specials, it\'d probably combust spontaneously.<br><br> '
  + 'Want a magical night out with a loved one? A nostalgic reunion with old friends? '
  + 'Need to impress a potential business partner with your culinary fearlessness? '
  + 'Eye of Newt has something for everybody!<br><br> Led by a master witch, scion of an ancient '
  + 'and storied family of infamous magical prowess, our restaurant will enchant your tastebuds '
  + 'and leave you craving more';

  return description;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomeInfo);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/init.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





function initialize() {
  (0,_init__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_menu__WEBPACK_IMPORTED_MODULE_2__.createMenuObjects)();
  const main = document.querySelector('.main');
  const homeTab = document.getElementById('home-tab');
  homeTab.classList.add('selected-tab');
  main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
}

function removeSelectedTab() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab) => tab.classList.remove('selected-tab'));
}

function addTabListeners() {
  const main = document.querySelector('.main');

  const homeTab = document.getElementById('home-tab');
  homeTab.addEventListener('click', () => {
    removeSelectedTab();
    homeTab.classList.add('selected-tab');
    if (main.lastChild) main.removeChild(main.lastChild);
    main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
  });
  const menuTab = document.getElementById('menu-tab');
  menuTab.addEventListener('click', () => {
    removeSelectedTab();
    menuTab.classList.add('selected-tab');
    if (main.lastChild) main.removeChild(main.lastChild);
    main.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__.createMenuInfo)());
  });

  const contactTab = document.getElementById('contact-tab');
  contactTab.addEventListener('click', () => {
    removeSelectedTab();
    contactTab.classList.add('selected-tab');
    if (main.lastChild) main.removeChild(main.lastChild);
    main.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])());
  });
}

function run() {
  initialize();
  addTabListeners();
}

run();


/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* eslint-disable no-console */


function createWrapper() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  document.body.appendChild(content);
  return content;
}

function createTabs() {
  const list = document.createElement('div');
  list.classList.add('tabs');
  const tabs = [];
  for (let i = 0; i < 3; i++) {
    const item = document.createElement('button');
    item.classList.add('tab');
    list.appendChild(item);
    tabs.push(item);
  }
  tabs[0].innerHTML = 'Home';
  tabs[0].setAttribute('id', 'home-tab');
  tabs[1].innerHTML = 'Menu';
  tabs[1].setAttribute('id', 'menu-tab');
  tabs[2].innerHTML = 'Contact';
  tabs[2].setAttribute('id', 'contact-tab');
  return list;
}

function createHeadline() {
  const header = document.createElement('div');
  header.classList.add('header');

  const restaurantName = document.createElement('div');
  restaurantName.classList.add('name');
  restaurantName.innerHTML = 'Eye of Newt';
  header.appendChild(restaurantName);

  const tabs = createTabs();
  header.appendChild(tabs);
  return header;
}

function createFooter() {
  const footer = document.createElement('div');
  footer.classList.add('footer');
  const credit = document.createElement('div');
  credit.innerHTML = 'Made by matta628';
  credit.classList.add('credit');
  footer.appendChild(credit);
  return footer;
}

function buildInitPage() {
  const content = createWrapper();

  const headline = createHeadline();
  content.appendChild(headline);

  const mainInfo = document.createElement('div');
  mainInfo.classList.add('main');
  content.appendChild(mainInfo);

  const footer = createFooter();
  content.appendChild(footer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildInitPage);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuInfo": () => (/* binding */ createMenuInfo),
/* harmony export */   "createMenuObjects": () => (/* binding */ createMenuObjects)
/* harmony export */ });
/* harmony import */ var _chicken_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chicken.jpeg */ "./src/chicken.jpeg");
/* harmony import */ var _stew_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stew.jpeg */ "./src/stew.jpeg");
/* harmony import */ var _ceviche_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ceviche.jpeg */ "./src/ceviche.jpeg");




class MenuItem {
  constructor(name, img, price, desc) {
    this.name = name;
    this.img = img;
    this.desc = desc;
    this.price = price;
  }
}

const menuItems = [];

function createMenuObjects() {
  const foodImg1 = new Image();
  foodImg1.src = _chicken_jpeg__WEBPACK_IMPORTED_MODULE_0__;
  const foodImg2 = new Image();
  foodImg2.src = _stew_jpeg__WEBPACK_IMPORTED_MODULE_1__;
  const foodImg3 = new Image();
  foodImg3.src = _ceviche_jpeg__WEBPACK_IMPORTED_MODULE_2__;

  menuItems.push(new MenuItem(
    'Braised Elysian Pol',
    foodImg1,
    '7 Drakki',
    'Roasted over one of only two infinite fires in all the free cities, this exquisite pol has been '
    + 'seasoned to perfection, and infused with strengthening, yet delicious substances',
  ));
  menuItems.push(new MenuItem(
    'Cambrian Nox Stew',
    foodImg2,
    '8 Drakki',
    'The most ancient and renowned of our three specials, this stew will boost your health and '
    + 'stamina as the delicious meats warm and sate your stomach',
  ));
  menuItems.push(new MenuItem(
    'Sea of Klalia Mix',
    foodImg3,
    '10 Drakki',
    'Cooked with a concotion brewed over 7 nights, this seafood mix will open your mind\'s eye '
    + 'and give you a long lasting enhanced focus',
  ));
}

function createMenuItemElements() {
  const elements = [];
  for (let i = 0; i < menuItems.length; i++) {
    const element = document.createElement('div');
    element.classList.add('menu-item', 'main-item');

    const name = document.createElement('div');
    name.classList.add('menu-item-name');
    name.innerHTML = menuItems[i].name;
    element.appendChild(name);

    const img = document.createElement('div');
    img.classList.add('menu-item-img');
    img.appendChild(menuItems[i].img);
    element.appendChild(img);

    const price = document.createElement('div');
    price.classList.add('menu-item-price');
    price.innerHTML = menuItems[i].price;
    element.appendChild(price);

    const desc = document.createElement('div');
    desc.classList.add('menu-item-desc');
    desc.innerHTML = menuItems[i].desc;
    element.appendChild(desc);

    elements.push(element);
  }
  return elements;
}

function createMenuInfo() {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  const menuItemElements = createMenuItemElements();
  for (let i = 0; i < menuItemElements.length; i++) {
    menu.appendChild(menuItemElements[i]);
  }

  return menu;
}




/***/ }),

/***/ "./src/ceviche.jpeg":
/*!**************************!*\
  !*** ./src/ceviche.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5260014095ff3b67c1c.jpeg";

/***/ }),

/***/ "./src/chicken.jpeg":
/*!**************************!*\
  !*** ./src/chicken.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48633c7797cdcc15bafe.jpeg";

/***/ }),

/***/ "./src/magic.jpeg":
/*!************************!*\
  !*** ./src/magic.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f6f5f1fc274cebc816c.jpeg";

/***/ }),

/***/ "./src/stew.jpeg":
/*!***********************!*\
  !*** ./src/stew.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d294197aed70cd6f353c.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9tYWdpYy5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb2Rlcm4rQW50aXF1YSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAtLW1haW4tbGlnaHQ6ICM2OGFhZWM7XFxuICAtLW1haW4tZGFyazogcmdiKDE3LCAxLCAyNCk7XFxuICAtLW1haW4tdGV4dDogI2UwYTNlMDtcXG4gIC0tbWFpbi10aXRsZTogI2UwYTNlMDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5e1xcbiAgZm9udC1mYW1pbHk6ICdNb2Rlcm4gQW50aXF1YSc7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1kYXJrKTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbiNjb250ZW50e1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5oZWFkZXIsIC5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRpdGxlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZGFyayk7XFxufVxcblxcbi5oZWFkZXJ7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb2Rlcm4gQW50aXF1YVxcXCI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZGFyayk7XFxufVxcblxcbi50YWJze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG59XFxuLnRhYntcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tbGlnaHQpO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLnNlbGVjdGVkLXRhYntcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLW1haW4tbGlnaHQpO1xcbn1cXG5cXG4ubmFtZXtcXG4gIGZvbnQtc2l6ZTogNjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5mb290ZXJ7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5tYWlue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNTBweDtcXG59XFxuXFxuLm1haW4taXRlbXtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1kYXJrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi5tZW51e1xcbiAgZGlzcGxheTogZmxleDsgXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLm1lbnUtaXRlbXtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQ6IFxcXCJuYW1lIHByaWNlXFxcIiA1MHB4XFxuICAgICAgICBcXFwiaW1nIGltZ1xcXCIgMzAwcHhcXG4gICAgICAgIFxcXCJkZXNjIGRlc2NcXFwiIDEwMHB4XFxuICAgICAgICAvIG1pbm1heCgyMDBweCwgMWZyKSBtaW5tYXgoMjAwcHgsIDFmcik7XFxufVxcbi5tZW51LWl0ZW0tbmFtZXtcXG4gIGdyaWQtYXJlYTogbmFtZTtcXG4gIGp1c3RpZnktc2VsZjogbGVmdDtcXG59XFxuLm1lbnUtaXRlbS1wcmljZXtcXG4gIGdyaWQtYXJlYTogcHJpY2U7XFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbn1cXG4ubWVudS1pdGVtLWltZ3tcXG4gIGdyaWQtYXJlYTogaW1nO1xcbn1cXG4ubWVudS1pdGVtLWltZyBpbWd7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG4ubWVudS1pdGVtLWRlc2N7XFxuICBncmlkLWFyZWE6IGRlc2M7XFxufVxcblxcbi5jb250YWN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4uY29udGFjdC1pdGVte1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG1EQUErQjtFQUMvQixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsYUFBYTtBQUNmO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkI7OzsrQ0FHNkM7QUFDL0M7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vZGVybitBbnRpcXVhJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290e1xcbiAgLS1tYWluLWxpZ2h0OiAjNjhhYWVjO1xcbiAgLS1tYWluLWRhcms6IHJnYigxNywgMSwgMjQpO1xcbiAgLS1tYWluLXRleHQ6ICNlMGEzZTA7XFxuICAtLW1haW4tdGl0bGU6ICNlMGEzZTA7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keXtcXG4gIGZvbnQtZmFtaWx5OiAnTW9kZXJuIEFudGlxdWEnO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZGFyayk7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4jY29udGVudHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi9tYWdpYy5qcGVnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDMwMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaGVhZGVyLCAuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10aXRsZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWRhcmspO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9kZXJuIEFudGlxdWFcXFwiO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWRhcmspO1xcbn1cXG5cXG4udGFic3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcbi50YWJ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWxpZ2h0KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5zZWxlY3RlZC10YWJ7XFxuICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1tYWluLWxpZ2h0KTtcXG59XFxuXFxuLm5hbWV7XFxuICBmb250LXNpemU6IDY0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZm9vdGVye1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4ubWFpbntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5tYWluLWl0ZW17XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZGFyayk7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4ubWVudXtcXG4gIGRpc3BsYXk6IGZsZXg7IFxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi5tZW51LWl0ZW17XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkOiBcXFwibmFtZSBwcmljZVxcXCIgNTBweFxcbiAgICAgICAgXFxcImltZyBpbWdcXFwiIDMwMHB4XFxuICAgICAgICBcXFwiZGVzYyBkZXNjXFxcIiAxMDBweFxcbiAgICAgICAgLyBtaW5tYXgoMjAwcHgsIDFmcikgbWlubWF4KDIwMHB4LCAxZnIpO1xcbn1cXG4ubWVudS1pdGVtLW5hbWV7XFxuICBncmlkLWFyZWE6IG5hbWU7XFxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxufVxcbi5tZW51LWl0ZW0tcHJpY2V7XFxuICBncmlkLWFyZWE6IHByaWNlO1xcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXG59XFxuLm1lbnUtaXRlbS1pbWd7XFxuICBncmlkLWFyZWE6IGltZztcXG59XFxuLm1lbnUtaXRlbS1pbWcgaW1ne1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuLm1lbnUtaXRlbS1kZXNje1xcbiAgZ3JpZC1hcmVhOiBkZXNjO1xcbn1cXG5cXG4uY29udGFjdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuLmNvbnRhY3QtaXRlbXtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVIb3Vyc0luZm8oKSB7XG4gIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ21haW4taXRlbScsICdjb250YWN0LWl0ZW0nKTtcbiAgaG91cnMuaW5uZXJIVE1MID0gYEhvdXJzPGJyPjxicj5cbiAgTW9uZGF5OiA2cG0gLSAyYW08YnI+XG4gIFR1ZXNkYXk6IDZwbSAtIDJhbTxicj5cbiAgV2VkbmVzZGF5OiA2cG0gLSAyYW08YnI+XG4gIFRodXJzZGF5OiA2cG0gLSAyYW08YnI+XG4gIEZyaWRheTogNnBtIC0gMmFtPGJyPlxuICBTYXR1cmRheTogNnBtIC0gMmFtPGJyPlxuICBTdW5kYXk6IDZwbSAtIDJhbWA7XG4gIHJldHVybiBob3Vycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRkcmVzc0luZm8oKSB7XG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdtYWluLWl0ZW0nLCAnYWRkcmVzcycsICdjb250YWN0LWl0ZW0nKTtcbiAgYWRkcmVzcy5pbm5lckhUTUwgPSAnQWRkcmVzczxicj48YnI+NDQ0IFdpY2NhIFdheTxicj5FYXN0IE1hZ2lhLCBTZWN0b3IgUVg8YnI+RnJlZSBDaXRpZXMnO1xuICByZXR1cm4gYWRkcmVzcztcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGhvbmVJbmZvKCkge1xuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwaG9uZS5jbGFzc0xpc3QuYWRkKCdtYWluLWl0ZW0nLCAnY29udGFjdC1pdGVtJyk7XG4gIHBob25lLmlubmVySFRNTCA9ICdQaG9uZTxicj48YnI+MzMzLTkwOTAtNTczMic7XG4gIHJldHVybiBwaG9uZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRW1haWxJbmZvKCkge1xuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlbWFpbC5jbGFzc0xpc3QuYWRkKCdtYWluLWl0ZW0nLCAnY29udGFjdC1pdGVtJyk7XG4gIGVtYWlsLmlubmVySFRNTCA9ICdFbWFpbDxicj48YnI+RXllT2ZOZXd0QGhlcm1lcy5jb20nO1xuICByZXR1cm4gZW1haWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RJbmZvKCkge1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gIGNvbnN0IGhvdXJzID0gY3JlYXRlSG91cnNJbmZvKCk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoaG91cnMpO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBjcmVhdGVBZGRyZXNzSW5mbygpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gIGNvbnN0IHBob25lID0gY3JlYXRlUGhvbmVJbmZvKCk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQocGhvbmUpO1xuXG4gIGNvbnN0IGVtYWlsID0gY3JlYXRlRW1haWxJbmZvKCk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gIHJldHVybiBjb250YWN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0SW5mbztcbiIsImZ1bmN0aW9uIGNyZWF0ZUhvbWVJbmZvKCkge1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtYWluLWl0ZW0nKTtcbiAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ0lmIGEgU2hha2VzcGVhcmVhbiBvcnBoYW4gd2VyZSBnaXZlbiBldmVuIHRoZSB0aW5pZXN0IHRhc3RlIG9mICdcbiAgKyAnYW55IG9uZSBvZiBvdXIgd29ybGQgZmFtb3VzIHNwZWNpYWxzLCBpdFxcJ2QgcHJvYmFibHkgY29tYnVzdCBzcG9udGFuZW91c2x5Ljxicj48YnI+ICdcbiAgKyAnV2FudCBhIG1hZ2ljYWwgbmlnaHQgb3V0IHdpdGggYSBsb3ZlZCBvbmU/IEEgbm9zdGFsZ2ljIHJldW5pb24gd2l0aCBvbGQgZnJpZW5kcz8gJ1xuICArICdOZWVkIHRvIGltcHJlc3MgYSBwb3RlbnRpYWwgYnVzaW5lc3MgcGFydG5lciB3aXRoIHlvdXIgY3VsaW5hcnkgZmVhcmxlc3NuZXNzPyAnXG4gICsgJ0V5ZSBvZiBOZXd0IGhhcyBzb21ldGhpbmcgZm9yIGV2ZXJ5Ym9keSE8YnI+PGJyPiBMZWQgYnkgYSBtYXN0ZXIgd2l0Y2gsIHNjaW9uIG9mIGFuIGFuY2llbnQgJ1xuICArICdhbmQgc3RvcmllZCBmYW1pbHkgb2YgaW5mYW1vdXMgbWFnaWNhbCBwcm93ZXNzLCBvdXIgcmVzdGF1cmFudCB3aWxsIGVuY2hhbnQgeW91ciB0YXN0ZWJ1ZHMgJ1xuICArICdhbmQgbGVhdmUgeW91IGNyYXZpbmcgbW9yZSc7XG5cbiAgcmV0dXJuIGRlc2NyaXB0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lSW5mbztcbiIsImltcG9ydCBidWlsZEluaXRQYWdlIGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgY3JlYXRlSG9tZUluZm8gZnJvbSAnLi9ob21lJztcbmltcG9ydCB7IGNyZWF0ZU1lbnVPYmplY3RzLCBjcmVhdGVNZW51SW5mbyB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdEluZm8gZnJvbSAnLi9jb250YWN0JztcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgYnVpbGRJbml0UGFnZSgpO1xuICBjcmVhdGVNZW51T2JqZWN0cygpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLXRhYicpO1xuICBob21lVGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXRhYicpO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVJbmZvKCkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTZWxlY3RlZFRhYigpIHtcbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbiAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC10YWInKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhYkxpc3RlbmVycygpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5cbiAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLXRhYicpO1xuICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZVNlbGVjdGVkVGFiKCk7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC10YWInKTtcbiAgICBpZiAobWFpbi5sYXN0Q2hpbGQpIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5sYXN0Q2hpbGQpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZUluZm8oKSk7XG4gIH0pO1xuICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtdGFiJyk7XG4gIG1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVtb3ZlU2VsZWN0ZWRUYWIoKTtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXRhYicpO1xuICAgIGlmIChtYWluLmxhc3RDaGlsZCkgbWFpbi5yZW1vdmVDaGlsZChtYWluLmxhc3RDaGlsZCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51SW5mbygpKTtcbiAgfSk7XG5cbiAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LXRhYicpO1xuICBjb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZVNlbGVjdGVkVGFiKCk7XG4gICAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC10YWInKTtcbiAgICBpZiAobWFpbi5sYXN0Q2hpbGQpIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5sYXN0Q2hpbGQpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdEluZm8oKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBydW4oKSB7XG4gIGluaXRpYWxpemUoKTtcbiAgYWRkVGFiTGlzdGVuZXJzKCk7XG59XG5cbnJ1bigpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVdyYXBwZXIoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYnMoKSB7XG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGlzdC5jbGFzc0xpc3QuYWRkKCd0YWJzJyk7XG4gIGNvbnN0IHRhYnMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIHRhYnMucHVzaChpdGVtKTtcbiAgfVxuICB0YWJzWzBdLmlubmVySFRNTCA9ICdIb21lJztcbiAgdGFic1swXS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtdGFiJyk7XG4gIHRhYnNbMV0uaW5uZXJIVE1MID0gJ01lbnUnO1xuICB0YWJzWzFdLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS10YWInKTtcbiAgdGFic1syXS5pbm5lckhUTUwgPSAnQ29udGFjdCc7XG4gIHRhYnNbMl0uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LXRhYicpO1xuICByZXR1cm4gbGlzdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGxpbmUoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmVzdGF1cmFudE5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICByZXN0YXVyYW50TmFtZS5pbm5lckhUTUwgPSAnRXllIG9mIE5ld3QnO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuXG4gIGNvbnN0IHRhYnMgPSBjcmVhdGVUYWJzKCk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0YWJzKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICBjb25zdCBjcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3JlZGl0LmlubmVySFRNTCA9ICdNYWRlIGJ5IG1hdHRhNjI4JztcbiAgY3JlZGl0LmNsYXNzTGlzdC5hZGQoJ2NyZWRpdCcpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlZGl0KTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gYnVpbGRJbml0UGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGNyZWF0ZVdyYXBwZXIoKTtcblxuICBjb25zdCBoZWFkbGluZSA9IGNyZWF0ZUhlYWRsaW5lKCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG4gIGNvbnN0IG1haW5JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5JbmZvLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluSW5mbyk7XG5cbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRJbml0UGFnZTtcbiIsImltcG9ydCBGb29kSW1nMSBmcm9tICcuL2NoaWNrZW4uanBlZyc7XG5pbXBvcnQgRm9vZEltZzIgZnJvbSAnLi9zdGV3LmpwZWcnO1xuaW1wb3J0IEZvb2RJbWczIGZyb20gJy4vY2V2aWNoZS5qcGVnJztcblxuY2xhc3MgTWVudUl0ZW0ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpbWcsIHByaWNlLCBkZXNjKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmltZyA9IGltZztcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgfVxufVxuXG5jb25zdCBtZW51SXRlbXMgPSBbXTtcblxuZnVuY3Rpb24gY3JlYXRlTWVudU9iamVjdHMoKSB7XG4gIGNvbnN0IGZvb2RJbWcxID0gbmV3IEltYWdlKCk7XG4gIGZvb2RJbWcxLnNyYyA9IEZvb2RJbWcxO1xuICBjb25zdCBmb29kSW1nMiA9IG5ldyBJbWFnZSgpO1xuICBmb29kSW1nMi5zcmMgPSBGb29kSW1nMjtcbiAgY29uc3QgZm9vZEltZzMgPSBuZXcgSW1hZ2UoKTtcbiAgZm9vZEltZzMuc3JjID0gRm9vZEltZzM7XG5cbiAgbWVudUl0ZW1zLnB1c2gobmV3IE1lbnVJdGVtKFxuICAgICdCcmFpc2VkIEVseXNpYW4gUG9sJyxcbiAgICBmb29kSW1nMSxcbiAgICAnNyBEcmFra2knLFxuICAgICdSb2FzdGVkIG92ZXIgb25lIG9mIG9ubHkgdHdvIGluZmluaXRlIGZpcmVzIGluIGFsbCB0aGUgZnJlZSBjaXRpZXMsIHRoaXMgZXhxdWlzaXRlIHBvbCBoYXMgYmVlbiAnXG4gICAgKyAnc2Vhc29uZWQgdG8gcGVyZmVjdGlvbiwgYW5kIGluZnVzZWQgd2l0aCBzdHJlbmd0aGVuaW5nLCB5ZXQgZGVsaWNpb3VzIHN1YnN0YW5jZXMnLFxuICApKTtcbiAgbWVudUl0ZW1zLnB1c2gobmV3IE1lbnVJdGVtKFxuICAgICdDYW1icmlhbiBOb3ggU3RldycsXG4gICAgZm9vZEltZzIsXG4gICAgJzggRHJha2tpJyxcbiAgICAnVGhlIG1vc3QgYW5jaWVudCBhbmQgcmVub3duZWQgb2Ygb3VyIHRocmVlIHNwZWNpYWxzLCB0aGlzIHN0ZXcgd2lsbCBib29zdCB5b3VyIGhlYWx0aCBhbmQgJ1xuICAgICsgJ3N0YW1pbmEgYXMgdGhlIGRlbGljaW91cyBtZWF0cyB3YXJtIGFuZCBzYXRlIHlvdXIgc3RvbWFjaCcsXG4gICkpO1xuICBtZW51SXRlbXMucHVzaChuZXcgTWVudUl0ZW0oXG4gICAgJ1NlYSBvZiBLbGFsaWEgTWl4JyxcbiAgICBmb29kSW1nMyxcbiAgICAnMTAgRHJha2tpJyxcbiAgICAnQ29va2VkIHdpdGggYSBjb25jb3Rpb24gYnJld2VkIG92ZXIgNyBuaWdodHMsIHRoaXMgc2VhZm9vZCBtaXggd2lsbCBvcGVuIHlvdXIgbWluZFxcJ3MgZXllICdcbiAgICArICdhbmQgZ2l2ZSB5b3UgYSBsb25nIGxhc3RpbmcgZW5oYW5jZWQgZm9jdXMnLFxuICApKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW1FbGVtZW50cygpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nLCAnbWFpbi1pdGVtJyk7XG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tbmFtZScpO1xuICAgIG5hbWUuaW5uZXJIVE1MID0gbWVudUl0ZW1zW2ldLm5hbWU7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0taW1nJyk7XG4gICAgaW1nLmFwcGVuZENoaWxkKG1lbnVJdGVtc1tpXS5pbWcpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpY2UuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXByaWNlJyk7XG4gICAgcHJpY2UuaW5uZXJIVE1MID0gbWVudUl0ZW1zW2ldLnByaWNlO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpY2UpO1xuXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWRlc2MnKTtcbiAgICBkZXNjLmlubmVySFRNTCA9IG1lbnVJdGVtc1tpXS5kZXNjO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVzYyk7XG5cbiAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICB9XG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUluZm8oKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gIGNvbnN0IG1lbnVJdGVtRWxlbWVudHMgPSBjcmVhdGVNZW51SXRlbUVsZW1lbnRzKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW1FbGVtZW50c1tpXSk7XG4gIH1cblxuICByZXR1cm4gbWVudTtcbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlTWVudUluZm8sXG4gIGNyZWF0ZU1lbnVPYmplY3RzLFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==