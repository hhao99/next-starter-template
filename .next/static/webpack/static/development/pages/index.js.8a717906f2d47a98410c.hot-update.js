webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/vinlist.js":
/*!*******************************!*\
  !*** ./components/vinlist.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/mnt/d/code/node/rtm5/components/vinlist.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar VinList = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(VinList, _React$Component);\n\n  var _super = _createSuper(VinList);\n\n  function VinList(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, VinList);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      vin: '',\n      vin_list: ['lfv', 'wvw']\n    };\n    _this.handleVinChange = _this.handleVinChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.handleAddVin = _this.handleAddVin.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(VinList, [{\n    key: \"handleVinChange\",\n    value: function handleVinChange(e) {\n      this.setState({\n        vin: e.target.value\n      });\n    }\n  }, {\n    key: \"handleAddVin\",\n    value: function handleAddVin(e) {\n      vin_list = this.state.vin_list;\n      vin_list.push(this.state.vin);\n      this.setState({\n        vin_list: vin_list\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], {\n        id: \"vin\",\n        label: \"vin\",\n        value: this.state.vin,\n        onChange: this.handleVinChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 17\n        }\n      }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n        onClick: this.handleAddVin,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 17\n        }\n      }, \"add\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 17\n        }\n      }, __jsx(\"h3\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 21\n        }\n      }, \" Vin List\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"List\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }\n      }, this.state.vin_list.map(function (vin) {\n        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"ListItem\"], {\n          key: vin,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 25\n          }\n        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"ListItemText\"], {\n          primary: \"Vin \".concat(vin),\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 29\n          }\n        }));\n      }))));\n    }\n  }]);\n\n  return VinList;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VinList);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Zpbmxpc3QuanM/NzQ2ZiJdLCJuYW1lcyI6WyJWaW5MaXN0IiwicHJvcHMiLCJzdGF0ZSIsInZpbiIsInZpbl9saXN0IiwiaGFuZGxlVmluQ2hhbmdlIiwiYmluZCIsImhhbmRsZUFkZFZpbiIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHVzaCIsIm1hcCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0lBRU1BLE87Ozs7O0FBQ0YsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYztBQUNWQyxTQUFHLEVBQUUsRUFESztBQUVWQyxjQUFRLEVBQUUsQ0FBQyxLQUFELEVBQU8sS0FBUDtBQUZBLEtBQWQ7QUFJQSxVQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLHlHQUF2QjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIseUdBQXBCO0FBUGU7QUFRbEI7Ozs7b0NBQ2VFLEMsRUFBRztBQUNmLFdBQUtDLFFBQUwsQ0FBYztBQUNWTixXQUFHLEVBQUVLLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQURKLE9BQWQ7QUFHSDs7O2lDQUNZSCxDLEVBQUc7QUFDWkosY0FBUSxHQUFHLEtBQUtGLEtBQUwsQ0FBV0UsUUFBdEI7QUFDQUEsY0FBUSxDQUFDUSxJQUFULENBQWMsS0FBS1YsS0FBTCxDQUFXQyxHQUF6QjtBQUNBLFdBQUtNLFFBQUwsQ0FBYztBQUNWTCxnQkFBUSxFQUFFQTtBQURBLE9BQWQ7QUFHSDs7OzZCQUNRO0FBQUE7O0FBQ0wsYUFDSSxtRUFDSSxNQUFDLDJEQUFEO0FBQ0ksVUFBRSxFQUFDLEtBRFA7QUFFSSxhQUFLLEVBQUMsS0FGVjtBQUdJLGFBQUssRUFBRSxLQUFLRixLQUFMLENBQVdDLEdBSHRCO0FBSUksZ0JBQVEsRUFBRSxLQUFLRSxlQUpuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosRUFPSSxNQUFDLHdEQUFEO0FBQVEsZUFBTyxFQUFHLEtBQUtFLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSixFQVFJLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFFSSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxLQUFLTCxLQUFMLENBQVdFLFFBQVgsQ0FBb0JTLEdBQXBCLENBQXlCLFVBQUNWLEdBQUQ7QUFBQSxlQUN2QixNQUFDLDBEQUFEO0FBQVUsYUFBRyxFQUFFQSxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSSxNQUFDLDhEQUFEO0FBQWMsaUJBQU8sZ0JBQVNBLEdBQVQsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKLENBRHVCO0FBQUEsT0FBekIsQ0FERixDQUZKLENBUkosQ0FESjtBQXNCSDs7OztFQTdDaUJXLDRDQUFLLENBQUNDLFM7O0FBa0RiZixzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdmlubGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJveCwgQnV0dG9uICxUZXh0RmllbGQsIExpc3QsIExpc3RJdGVtLCBMaXN0SXRlbVRleHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmNsYXNzIFZpbkxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICB7XHJcbiAgICAgICAgICAgIHZpbjogJycsXHJcbiAgICAgICAgICAgIHZpbl9saXN0OiBbJ2xmdicsJ3d2dyddXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFuZGxlVmluQ2hhbmdlID0gdGhpcy5oYW5kbGVWaW5DaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuaGFuZGxlQWRkVmluID0gdGhpcy5oYW5kbGVBZGRWaW4uYmluZCh0aGlzKVxyXG4gICAgfVxyXG4gICAgaGFuZGxlVmluQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmluOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVBZGRWaW4oZSkge1xyXG4gICAgICAgIHZpbl9saXN0ID0gdGhpcy5zdGF0ZS52aW5fbGlzdFxyXG4gICAgICAgIHZpbl9saXN0LnB1c2godGhpcy5zdGF0ZS52aW4pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZpbl9saXN0OiB2aW5fbGlzdFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9J3ZpbidcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0ndmluJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZpbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVWaW5DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsgdGhpcy5oYW5kbGVBZGRWaW59PmFkZDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+IFZpbiBMaXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUudmluX2xpc3QubWFwKCAodmluKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17dmlufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17YFZpbiAke3Zpbn1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPil9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpbkxpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/vinlist.js\n");

/***/ })

})