exports.id = 884;
exports.ids = [884];
exports.modules = {

/***/ 783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ CabinetNavbar)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4651);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9226);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_icons_exite_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8616);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4387);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4544);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7841);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _contexts_modals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3205);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const pages = [{
  title: "Мой аккаунт",
  pathname: '/cabinet'
}, {
  title: "Создать страницу",
  pathname: '/cabinet/create'
}, {
  title: "Мои страницы",
  pathname: '/cabinet/pages'
}, {
  title: "Техподдержка",
  pathname: '/cabinet/supporting'
}];
const routers = [{
  title: "Как это работает?",
  url: "/info/how-it-works"
}, {
  title: "Контакты",
  url: "/info/contacts"
}];
const CabinetNavbar = () => {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const modal = (0,_contexts_modals__WEBPACK_IMPORTED_MODULE_9__/* .useModalContext */ .v)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();

  const handleClick = path => router.push(path);

  const handleLogout = () => {
    dispatch((0,_redux_actions_auth__WEBPACK_IMPORTED_MODULE_7__/* .logout */ .kS)());
    router.push('/');
  };

  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    modal === null || modal === void 0 ? void 0 : modal.setModal(_objectSpread(_objectSpread({}, modal.state), {}, {
      isShow: false
    }));
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().navbar),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().navbar_content),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_5__/* .Logo */ .T, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().navbar_items),
          children: routers.map((val, ind) => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
              href: val.url,
              children: val.title
            }, ind);
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "outline-light",
          onClick: handleLogout,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("img", {
            src: _public_icons_exite_svg__WEBPACK_IMPORTED_MODULE_3__/* .default.src */ .Z.src
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().cabinet_navbar),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("ul", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().items),
        children: pages.map((val, ind) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("li", {
            onClick: () => handleClick(val.pathname),
            className: classnames__WEBPACK_IMPORTED_MODULE_0___default()({
              [(_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().active)]: val.pathname == router.pathname
            }),
            children: val.title
          }, ind);
        })
      })
    })]
  });
};

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

/***/ 4387:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "style_navbar__3Zx__",
	"navbar_content": "style_navbar_content__2NT2V",
	"navbar_items": "style_navbar_items__TRTqF",
	"cabinet_navbar": "style_cabinet_navbar__1pW6l",
	"items": "style_items___rvon",
	"active": "style_active__3x7Bi"
};


/***/ })

};
;