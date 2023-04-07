exports.id = 412;
exports.ids = [412];
exports.modules = {

/***/ 1412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ InputModal)
});

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/Forms/Inputs/InputsModal/style.module.scss
var style_module = __webpack_require__(297);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./public/icons/eye.svg
/* harmony default export */ const eye = ({"src":"/_next/static/image/public/icons/eye.ef6560aa97ca02d4f1f12a7fccf4aa81.svg","height":13,"width":17});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Forms/Inputs/InputsModal/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const InputModal = ({
  placeholder,
  register,
  errors,
  password = false
}) => {
  const {
    0: check,
    1: setCheck
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (style_module_default()).field,
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread(_objectSpread({
        placeholder: placeholder,
        op: password ? "password" : null
      }, register), {}, {
        className: external_classnames_default()((style_module_default()).field_input, {
          [(style_module_default()).error]: errors === null || errors === void 0 ? void 0 : errors.message,
          [(style_module_default()).active]: check
        }),
        autoComplete: password ? "off" : "on"
      })), errors ? /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: errors.message
      }) : null, password ? /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: (style_module_default()).eyes,
        onClick: () => setCheck(!check),
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: eye.src
        })
      }) : null]
    })
  });
};

/***/ }),

/***/ 297:
/***/ ((module) => {

// Exports
module.exports = {
	"field": "style_field__3kwOL",
	"field_input": "style_field_input__1CYwS",
	"error": "style_error__2tmQn",
	"active": "style_active__2kNI7",
	"eyes": "style_eyes__3m8nj"
};


/***/ })

};
;