(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

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

/***/ 2522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./constants/modal.ts
var constants_modal = __webpack_require__(3321);
// EXTERNAL MODULE: ./contexts/modals.tsx
var modals = __webpack_require__(3205);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/Forms/Form.tsx
var Form = __webpack_require__(1474);
// EXTERNAL MODULE: ./utils/validFields.js
var validFields = __webpack_require__(9257);
// EXTERNAL MODULE: ./components/Forms/Inputs/InputsModal/index.tsx + 1 modules
var InputsModal = __webpack_require__(1412);
// EXTERNAL MODULE: ./components/Breadcrumb/index.tsx
var Breadcrumb = __webpack_require__(3075);
// EXTERNAL MODULE: ./components/Forms/Auth/style.module.scss
var style_module = __webpack_require__(9261);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: ./components/Social/style.module.scss
var Social_style_module = __webpack_require__(8368);
var Social_style_module_default = /*#__PURE__*/__webpack_require__.n(Social_style_module);
;// CONCATENATED MODULE: ./public/icons/facebook.svg
/* harmony default export */ const facebook = ({"src":"/_next/static/image/public/icons/facebook.6ef78c30f1d4e64b494a23b92377943f.svg","height":18,"width":10});
;// CONCATENATED MODULE: ./public/icons/vk.svg
/* harmony default export */ const vk = ({"src":"/_next/static/image/public/icons/vk.6ec3def5d59558fe2293875bc77190cf.svg","height":12,"width":18});
;// CONCATENATED MODULE: ./public/icons/google.svg
/* harmony default export */ const google = ({"src":"/_next/static/image/public/icons/google.1358afe3b404e549a547e3958533ecb2.svg","height":17,"width":17});
;// CONCATENATED MODULE: ./public/icons/telegram.svg
/* harmony default export */ const telegram = ({"src":"/_next/static/image/public/icons/telegram.8fd1be75efd35d8e4ed12659cee20b3d.svg","height":15,"width":17});
// EXTERNAL MODULE: ./api/auth.ts
var auth = __webpack_require__(5953);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Social/index.tsx








const Social = () => {
  const router = (0,router_.useRouter)();

  const handleEntryFromVK = async () => {
    (0,auth/* getVk */.fY)().then(res => router.push(res.data.url));
  };

  const handleEntryFromGoogle = async () => {
    (0,auth/* getGoogle */.A)().then(res => router.push(res.data.url));
  };

  const socialNetworks = [{
    icon: facebook.src
  }, {
    icon: telegram.src
  }, {
    icon: vk.src,
    handleClick: handleEntryFromVK
  }, {
    icon: google.src,
    handleClick: handleEntryFromGoogle
  }];
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Social_style_module_default()).socials,
    children: socialNetworks.map((val, ind) => {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Social_style_module_default()).item,
        onClick: val.handleClick,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: val.icon
        })
      }, ind);
    })
  });
};
// EXTERNAL MODULE: ./components/Checkbox/index.tsx
var Checkbox = __webpack_require__(2379);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./redux/actions/auth.ts
var actions_auth = __webpack_require__(7841);
// EXTERNAL MODULE: ./contexts/alert.tsx
var contexts_alert = __webpack_require__(4496);
;// CONCATENATED MODULE: ./components/Forms/Auth/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const AuthForm = () => {
  const registerForm = (0,external_react_hook_form_.useForm)({
    reValidateMode: "onSubmit",
    mode: "onSubmit"
  });
  const loginForm = (0,external_react_hook_form_.useForm)();
  let {
    0: page,
    1: setPage
  } = (0,external_react_.useState)(0);
  let defaultPage = null;
  const {
    0: save,
    1: setSave
  } = (0,external_react_.useState)(false);
  const dispatch = (0,external_react_redux_.useDispatch)();
  const alert = (0,contexts_alert/* useAlertContext */.o)();
  const modal = (0,modals/* useModalContext */.v)();

  const handleRecover = () => modal.setModal({
    name: constants_modal/* RECOVER */.Ok,
    isShow: true
  });

  (0,external_react_.useEffect)(() => {
    const tabId = modal.state.tabId;

    if (!tabId) {
      return;
    }

    if (tabId === 'auth') {
      setPage(1);
      page = 1;
    } else {
      setPage(0);
      page = 0;
    }

    modal.setModal(x => _objectSpread(_objectSpread({}, x), {}, {
      tabId: undefined
    }));
  });

  const submitLogin = data => dispatch((0,actions_auth/* login */.x4)(data, alert));

  const submitRegister = data => dispatch((0,actions_auth/* register */.z2)(data, alert));

  const handleChangeForm = i => {
    setPage(i);
  };

  const fieldsReg = [{
    name: "username",
    placeholder: "Логин",
    valid: validFields/* required */.C1
  }, {
    name: "email",
    placeholder: "e-mail",
    valid: _objectSpread(_objectSpread({}, validFields/* required */.C1), validFields/* email */.Do)
  }, {
    name: "password",
    placeholder: "Пароль",
    valid: validFields/* required */.C1,
    password: true
  }, {
    name: "passwordCheck",
    placeholder: "Повторите пароль",
    valid: _objectSpread(_objectSpread({}, validFields/* required */.C1), {}, {
      validate: {
        check: v => {
          // registerForm.handleSubmit(()=>{});
          const password = registerForm.getValues('password');
          return v == password || "Пароли не совпадают";
        }
      }
    }),
    password: true
  }];
  const fieldsLog = [{
    name: "email",
    placeholder: "Логин или e-mail ",
    valid: validFields/* required */.C1
  }, {
    name: "password",
    placeholder: "Пароль",
    valid: validFields/* required */.C1,
    password: true
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Breadcrumb/* default */.Z, {
      onChange: handleChangeForm,
      defaultItem: page,
      selectedItem: page,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Breadcrumb/* default.Item */.Z.Item, {
        isActive: page === 0,
        children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
      }), /*#__PURE__*/jsx_runtime_.jsx(Breadcrumb/* default.Item */.Z.Item, {
        isActive: page === 1,
        children: "\u0412\u0445\u043E\u0434"
      })]
    }), page ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Social, {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (style_module_default()).or,
        children: "\u0438\u043B\u0438"
      })]
    }) : null, /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: !page ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(Form/* Form */.l, {
        valid: registerForm,
        fields: fieldsReg,
        Input: InputsModal/* InputModal */.f,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Checkbox/* Checkbox */.X, {
          active: save,
          onClick: () => setSave(!save),
          className: (style_module_default()).point,
          text: "\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D(-\u043D\u0430) \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
          onClick: registerForm.handleSubmit(submitRegister),
          className: external_classnames_default()((style_module_default()).btn, (style_module_default()).btn_group),
          children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"
        })]
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(Form/* Form */.l, {
        valid: loginForm,
        fields: fieldsLog,
        Input: InputsModal/* InputModal */.f,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Checkbox/* Checkbox */.X, {
          active: save,
          onClick: () => setSave(!save),
          className: (style_module_default()).point,
          textClass: (style_module_default()).remember_pass,
          pointClass: external_classnames_default()((style_module_default()).remember_point, {
            [(style_module_default()).remember_point_selected]: save
          }),
          text: "\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
          className: (style_module_default()).btn_group,
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
            xs: 6,
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
              onClick: loginForm.handleSubmit(submitLogin),
              className: (style_module_default()).btn,
              children: "\u0412\u043E\u0439\u0442\u0438"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
            xs: 6,
            className: (style_module_default()).password,
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: handleRecover,
              children: "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?"
            })
          })]
        })]
      })
    })]
  });
};
// EXTERNAL MODULE: ./components/Modals/Modal.tsx
var Modal = __webpack_require__(8900);
;// CONCATENATED MODULE: external "react-verification-input"
const external_react_verification_input_namespaceObject = require("react-verification-input");
var external_react_verification_input_default = /*#__PURE__*/__webpack_require__.n(external_react_verification_input_namespaceObject);
// EXTERNAL MODULE: ./components/Modals/RecoverModal/style.module.scss
var RecoverModal_style_module = __webpack_require__(39);
var RecoverModal_style_module_default = /*#__PURE__*/__webpack_require__.n(RecoverModal_style_module);
;// CONCATENATED MODULE: ./components/Modals/RecoverModal/RecoverModal.tsx










const RecoverModal = () => {
  const {
    0: id,
    1: setId
  } = (0,external_react_.useState)(0);
  const {
    0: code,
    1: setCode
  } = (0,external_react_.useState)("");
  const {
    0: pass,
    1: setPass
  } = (0,external_react_.useState)("");
  const modal = (0,modals/* useModalContext */.v)();

  const emailHandler = email => {
    (0,auth/* getRecoverCodeReq */.Nj)(email).then(res => {
      setId(res.data.user_id);
    });
  };

  (0,external_react_.useEffect)(() => {
    if (id && code && pass) {
      const request = {
        id,
        code,
        new_password: pass
      };
      (0,auth/* restorePassReq */.xm)(request).finally(() => modal.setModal({
        name: "",
        isShow: false
      }));
    }
  }, [id, code, pass]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Breadcrumb/* default */.Z, {
      defaultItem: 0,
      children: /*#__PURE__*/jsx_runtime_.jsx(Breadcrumb/* default.Item */.Z.Item, {
        children: "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(RecoverEnterEmail, {
      hidden: !!id,
      onSubmit: emailHandler
    }), /*#__PURE__*/jsx_runtime_.jsx(RecoverEnterCode, {
      hidden: !!code || !id,
      onSubmit: x => setCode(x)
    }), /*#__PURE__*/jsx_runtime_.jsx(RecoverEnterPassword, {
      hidden: !!pass || !code,
      onSubmit: x => setPass(x)
    })]
  });
};

const RecoverEnterEmail = props => {
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)('');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    hidden: props.hidden,
    className: (RecoverModal_style_module_default()).content,
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u0447\u0442\u0443 \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0438\u0439\u0442\u0438 \u043A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F"
    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
      type: "text",
      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 E-mail",
      value: email,
      onChange: x => setEmail(x.target.value)
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: (RecoverModal_style_module_default()).btn,
      onClick: () => props.onSubmit(email),
      children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u0434"
    })]
  });
};

const RecoverEnterCode = props => {
  const {
    0: code,
    1: setCode
  } = (0,external_react_.useState)('');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    hidden: props.hidden,
    className: (RecoverModal_style_module_default()).content,
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u0438\u0448\u0435\u043B \u043D\u0430 \u043F\u043E\u0447\u0442\u0443"
    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_verification_input_default()), {
      placeholder: " ",
      validChars: "0-9",
      removeDefaultStyles: true,
      classNames: {
        container: `${(RecoverModal_style_module_default()).container}`,
        character: `${(RecoverModal_style_module_default()).character}`
      },
      value: code,
      onChange: value => setCode(value)
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: (RecoverModal_style_module_default()).btn,
      onClick: () => props.onSubmit(code),
      children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
    })]
  });
};

const RecoverEnterPassword = props => {
  const {
    0: pass,
    1: setPass
  } = (0,external_react_.useState)('');

  const onChange = e => setPass(e.target.value);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    hidden: props.hidden,
    className: (RecoverModal_style_module_default()).content,
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C"
    }), /*#__PURE__*/jsx_runtime_.jsx(InputsModal/* InputModal */.f, {
      register: {
        onChange,
        value: pass
      },
      placeholder: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
      password: true
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: (RecoverModal_style_module_default()).btn,
      onClick: () => props.onSubmit(pass),
      children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
    })]
  });
};
;// CONCATENATED MODULE: ./components/Modals/ModalAuth/index.tsx
function ModalAuth_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function ModalAuth_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ModalAuth_ownKeys(Object(source), true).forEach(function (key) { ModalAuth_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ModalAuth_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ModalAuth_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const ModalAuth = ({
  isMainPage = false
}) => {
  const modal = (0,modals/* useModalContext */.v)();

  const handleClose = () => {
    modal === null || modal === void 0 ? void 0 : modal.setModal(ModalAuth_objectSpread(ModalAuth_objectSpread({}, modal.state), {}, {
      isShow: false
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Modal/* Modal */.u, {
      show: (modal === null || modal === void 0 ? void 0 : modal.state.isShow) && (modal === null || modal === void 0 ? void 0 : modal.state.name) === constants_modal/* AUTH */.Bp,
      onHide: handleClose,
      centered: true,
      className: isMainPage ? "modal_auth" : null,
      children: /*#__PURE__*/jsx_runtime_.jsx(AuthForm, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(Modal/* Modal */.u, {
      show: (modal === null || modal === void 0 ? void 0 : modal.state.isShow) && (modal === null || modal === void 0 ? void 0 : modal.state.name) === constants_modal/* RECOVER */.Ok,
      onHide: handleClose,
      centered: true,
      className: isMainPage ? "modal_auth" : null,
      children: /*#__PURE__*/jsx_runtime_.jsx(RecoverModal, {})
    })]
  });
};
// EXTERNAL MODULE: ./redux/store.ts + 2 modules
var store = __webpack_require__(1384);
// EXTERNAL MODULE: ./components/Alert/style.module.scss
var Alert_style_module = __webpack_require__(3080);
var Alert_style_module_default = /*#__PURE__*/__webpack_require__.n(Alert_style_module);
;// CONCATENATED MODULE: ./components/Alert/index.tsx
function Alert_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Alert_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Alert_ownKeys(Object(source), true).forEach(function (key) { Alert_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Alert_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Alert_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Alert = () => {
  const alert = (0,contexts_alert/* useAlertContext */.o)();
  const {
    isShow,
    isSuccess,
    text
  } = alert === null || alert === void 0 ? void 0 : alert.state;
  (0,external_react_.useEffect)(() => {
    const timeout = setTimeout(() => {
      alert === null || alert === void 0 ? void 0 : alert.setState(Alert_objectSpread(Alert_objectSpread({}, alert.state), {}, {
        isShow: false
      }));
    }, 10000);
    return () => clearTimeout(timeout);
  }, [alert === null || alert === void 0 ? void 0 : alert.state.isShow]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()((Alert_style_module_default()).alert, {
      [(Alert_style_module_default()).active]: isShow,
      [(Alert_style_module_default()).success]: isSuccess
    }),
    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: text
    })
  });
};
;// CONCATENATED MODULE: ./pages/_app.tsx
const _excluded = ["session"];

function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














function MyApp(_ref) {
  let {
    Component,
    pageProps: {
      session
    }
  } = _ref,
      pageProps = _objectWithoutProperties(_ref.pageProps, _excluded);

  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(modals/* ModalWrapper */.A, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(contexts_alert/* AlertWrapper */.Y, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(ModalAuth, {
          isMainPage: router.pathname == '/'
        }), /*#__PURE__*/jsx_runtime_.jsx(Alert, {})]
      })
    })
  });
}

/* harmony default export */ const _app = (store/* wrapper.withRedux */.Y.withRedux(MyApp));

/***/ }),

/***/ 3080:
/***/ ((module) => {

// Exports
module.exports = {
	"alert": "style_alert__1VfHK",
	"active": "style_active__irmeu",
	"success": "style_success__2IFEe"
};


/***/ }),

/***/ 9261:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "style_btn__1GD_Y",
	"or": "style_or__2PeIz",
	"password": "style_password__35R6T",
	"point": "style_point__WW2f2",
	"remember_pass": "style_remember_pass__3rjuE",
	"remember_point": "style_remember_point__1Htys",
	"remember_point_selected": "style_remember_point_selected__35-OS",
	"btn_group": "style_btn_group__2kfSC"
};


/***/ }),

/***/ 39:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "style_content__2d9oW",
	"btn": "style_btn__1oNEB",
	"container": "style_container__1INLs",
	"character": "style_character__3fGyN"
};


/***/ }),

/***/ 8368:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "style_item__3_IhE",
	"socials": "style_socials__JVKU4"
};


/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 4058:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 6155:
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ 2744:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9226:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 2662:
/***/ ((module) => {

"use strict";
module.exports = require("react-hook-form");

/***/ }),

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7561:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 5176:
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ 5694:
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [75,871,379,505,412], () => (__webpack_exec__(2522)));
module.exports = __webpack_exports__;

})();