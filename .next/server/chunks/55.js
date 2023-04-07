exports.id = 55;
exports.ids = [55];
exports.modules = {

/***/ 4055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9226);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5187);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_icons_exite_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8616);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4544);
/* harmony import */ var _contexts_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3205);
/* harmony import */ var _constants_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3321);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7841);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);











const routers = [{
  title: "Как это работает?",
  url: "/info/how-it-works"
}, {
  title: "Контакты",
  url: "/info/contacts"
}];
const Navbar = () => {
  const modal = (0,_contexts_modals__WEBPACK_IMPORTED_MODULE_4__/* .useModalContext */ .v)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const isLoggedIn = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.auth.isLoggedIn);

  const handleOpen = () => modal === null || modal === void 0 ? void 0 : modal.setModal({
    name: _constants_modal__WEBPACK_IMPORTED_MODULE_8__/* .AUTH */ .Bp,
    isShow: true,
    tabId: 'auth'
  });

  const handleLogout = () => dispatch((0,_redux_actions_auth__WEBPACK_IMPORTED_MODULE_6__/* .logout */ .kS)());

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("header", {
    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navbar),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Container, {
      className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navbar_content),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_3__/* .Logo */ .T, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navbar_items),
        children: routers.map((val, ind) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
            href: val.url,
            children: val.title
          }, ind);
        })
      }), isLoggedIn ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.ButtonGroup, {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_9___default().btn_group),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: "outline-light",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
            href: "/cabinet",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
              className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_9___default().link),
              children: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: "outline-light",
          onClick: handleLogout,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
            src: _public_icons_exite_svg__WEBPACK_IMPORTED_MODULE_1__/* .default.src */ .Z.src
          })
        })]
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Button, {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_9___default().link),
        variant: "outline-light",
        onClick: handleOpen,
        children: "\u0412\u0445\u043E\u0434"
      })]
    })
  });
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

/***/ 3205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ ModalWrapper),
/* harmony export */   "v": () => (/* binding */ useModalContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
  isShow: false,
  name: '',
  pageIdDelete: undefined
};
const ModalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function ModalWrapper({
  children
}) {
  const {
    0: state,
    1: setModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(ModalContext.Provider, {
    value: {
      state,
      setModal
    },
    children: children
  });
}
function useModalContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ModalContext);
}

/***/ }),

/***/ 8616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/public/icons/exite.37757b112889c23a5222bd6b9ed8884b.svg","height":22,"width":23});

/***/ }),

/***/ 5187:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar_content": "style_navbar_content__3lOMI",
	"navbar_items": "style_navbar_items__vwoRJ",
	"navbar": "style_navbar__3p85E",
	"link": "style_link__1jkZj",
	"btn_group": "style_btn_group__284es"
};


/***/ })

};
;