exports.id = 505;
exports.ids = [505];
exports.modules = {

/***/ 3075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8763);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Breadcrumb = ({
  children,
  onChange = () => {},
  defaultItem,
  selectedItem
}) => {
  const {
    0: activeEl,
    1: setActiveEl
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultItem);

  const handleClick = i => {
    onChange(i);
    setActiveEl(i);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default().breadcrumb),
    children: react__WEBPACK_IMPORTED_MODULE_1___default().Children.map(children, (child, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(child, {
      onClick: () => {
        handleClick(i);
      },
      isActive: typeof selectedItem === 'number' ? selectedItem === i : activeEl == i
    }))
  });
};

Breadcrumb.Item = ({
  children,
  isActive = false,
  onClick = () => {}
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    onClick: () => onClick(),
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()((_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default().item), {
      [(_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active)]: isActive
    }),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
      className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
      children: children
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);

/***/ }),

/***/ 8900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9226);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1020);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Modal = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Modal, _objectSpread(_objectSpread({}, props), {}, {
    size: "xl",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Modal.Body, {
      className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modal_container),
      children: props.children
    })
  }));
};

/***/ }),

/***/ 3321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fx": () => (/* binding */ MAILING),
/* harmony export */   "Bp": () => (/* binding */ AUTH),
/* harmony export */   "Qj": () => (/* binding */ PASSWORD),
/* harmony export */   "yY": () => (/* binding */ DELETE),
/* harmony export */   "I6": () => (/* binding */ PAY),
/* harmony export */   "BD": () => (/* binding */ PROMO_CODE),
/* harmony export */   "Jd": () => (/* binding */ REVIEW),
/* harmony export */   "Ok": () => (/* binding */ RECOVER)
/* harmony export */ });
/* unused harmony export CONFIRM */
const MAILING = 'MAILING';
const AUTH = 'AUTH';
const PASSWORD = 'PASSWORD';
const CONFIRM = 'CONFIRM';
const DELETE = 'DELETE';
const PAY = 'PAY';
const PROMO_CODE = 'PROMO_CODE';
const REVIEW = 'REVIEW';
const RECOVER = 'RECOVER';

/***/ }),

/***/ 8763:
/***/ ((module) => {

// Exports
module.exports = {
	"breadcrumb": "style_breadcrumb__3JTWX",
	"item": "style_item__1uY8T",
	"active": "style_active__1pACz",
	"title": "style_title__2zFcP"
};


/***/ }),

/***/ 1020:
/***/ ((module) => {

// Exports
module.exports = {
	"modal_container": "style_modal_container__zoYoQ"
};


/***/ })

};
;