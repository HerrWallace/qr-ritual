exports.id = 871;
exports.ids = [871];
exports.modules = {

/***/ 1474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2782);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const Form = ({
  Input,
  children,
  fields,
  valid: {
    register,
    formState: {
      errors
    }
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_1___default().form),
    children: [fields.map((val, ind) => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Input, {
        className: val.className,
        title: val.title,
        placeholder: val.placeholder,
        register: register(val.name, val.valid),
        errors: errors[val.name],
        password: val === null || val === void 0 ? void 0 : val.password,
        data: val.data,
        type: val.type
      }, ind);
    }), children]
  });
};

/***/ }),

/***/ 4496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ AlertWrapper),
/* harmony export */   "o": () => (/* binding */ useAlertContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
  isShow: false,
  isSuccess: false,
  text: ''
};
const AlertContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function AlertWrapper({
  children
}) {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(AlertContext.Provider, {
    value: {
      state,
      setState
    },
    children: children
  });
}
function useAlertContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AlertContext);
}

/***/ }),

/***/ 9257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C1": () => (/* binding */ required),
/* harmony export */   "Do": () => (/* binding */ email),
/* harmony export */   "hT": () => (/* binding */ date)
/* harmony export */ });
const required = {
  required: {
    value: true,
    message: "Обязательное поле"
  }
};
const email = {
  pattern: {
    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Не верный email"
  }
};
const date = {
  pattern: {
    value: /\d{4}-\d{2}-\d{2}$/,
    message: "Не верный email"
  }
};

/***/ }),

/***/ 2782:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "style_form__2bvTl"
};


/***/ })

};
;