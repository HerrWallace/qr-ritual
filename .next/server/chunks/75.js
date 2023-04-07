"use strict";
exports.id = 75;
exports.ids = [75];
exports.modules = {

/***/ 5953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zu": () => (/* binding */ loginReq),
/* harmony export */   "yp": () => (/* binding */ registerReq),
/* harmony export */   "Nl": () => (/* binding */ logoutReq),
/* harmony export */   "xm": () => (/* binding */ restorePassReq),
/* harmony export */   "Nj": () => (/* binding */ getRecoverCodeReq),
/* harmony export */   "b$": () => (/* binding */ verifyEmailReq),
/* harmony export */   "fY": () => (/* binding */ getVk),
/* harmony export */   "YZ": () => (/* binding */ entryVkReq),
/* harmony export */   "A": () => (/* binding */ getGoogle),
/* harmony export */   "Nc": () => (/* binding */ entryGoogleReq)
/* harmony export */ });
/* unused harmony export refreshReq */
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4314);

const loginReq = data => _index__WEBPACK_IMPORTED_MODULE_0__/* .default.post */ .Z.post('users/login/', data);
const registerReq = data => _index__WEBPACK_IMPORTED_MODULE_0__/* .default.post */ .Z.post("users/register/", data);
const refreshReq = () => axios.post("token/refresh/");
const logoutReq = refresh => _index__WEBPACK_IMPORTED_MODULE_0__/* .default.post */ .Z.post('users/logout/', {
  refresh
});
const restorePassReq = data => _index__WEBPACK_IMPORTED_MODULE_0__/* .default.post */ .Z.post('user/change_pwd/', {
  user: data
});
const getRecoverCodeReq = email => _index__WEBPACK_IMPORTED_MODULE_0__/* .default.post */ .Z.post('forgot_password/', {
  email
});
const verifyEmailReq = hash => _index__WEBPACK_IMPORTED_MODULE_0__/* .default.post */ .Z.post('verify_email/', {
  hash
});
const getVk = () => _index__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get('oauth/vk/');
const entryVkReq = code => _index__WEBPACK_IMPORTED_MODULE_0__/* .default.post */ .Z.post('oauth/vk/', {
  code
});
const getGoogle = () => _index__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get('oauth/google/');
const entryGoogleReq = code => _index__WEBPACK_IMPORTED_MODULE_0__/* .default.post */ .Z.post('oauth/google/', {
  code
});

/***/ }),

/***/ 4314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7841);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1384);
/* harmony import */ var _utils_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5506);




 // const defaultUrl = 'https://riqr-v1.herokuapp.com/api/';

const defaultUrl = 'https://ritual-4kgh.onrender.com/api/';
const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  withCredentials: true,
  baseURL: defaultUrl
});
instance.interceptors.request.use(config => {
  const token = (0,_utils_cookies__WEBPACK_IMPORTED_MODULE_4__/* .getCookie */ .ej)('access');

  if (token) {
    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }

  return config;
});
instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  var _error$response;

  if (((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 403) {
    _redux_store__WEBPACK_IMPORTED_MODULE_3__/* .store.dispatch */ .h.dispatch((0,_redux_actions_auth__WEBPACK_IMPORTED_MODULE_2__/* .deAuthenticateAction */ .jA)());
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/');
  }

  return Promise.reject(error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ 7841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jA": () => (/* binding */ deAuthenticateAction),
/* harmony export */   "tg": () => (/* binding */ entryVk),
/* harmony export */   "Ff": () => (/* binding */ entryGoogle),
/* harmony export */   "x4": () => (/* binding */ login),
/* harmony export */   "z2": () => (/* binding */ register),
/* harmony export */   "lm": () => (/* binding */ verifyEmail),
/* harmony export */   "kS": () => (/* binding */ logout)
/* harmony export */ });
/* unused harmony exports authenticateAction, vkAction, googleAction, restoreState, restore */
/* harmony import */ var _utils_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5506);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5953);
/* harmony import */ var _constants_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9513);




const authenticateAction = data => {
  return {
    type: _constants_auth__WEBPACK_IMPORTED_MODULE_3__/* .default.AUTHENTICATE */ .Z.AUTHENTICATE,
    payload: data
  };
};
const deAuthenticateAction = () => {
  return {
    type: _constants_auth__WEBPACK_IMPORTED_MODULE_3__/* .default.DEAUTHENTICATE */ .Z.DEAUTHENTICATE
  };
};
const vkAction = user => {
  return {
    type: authContants.AUTHENTICATE_VK,
    payload: user
  };
};
const googleAction = user => {
  return {
    type: authContants.AUTHENTICATE_GOOGLE
  };
};
const restoreState = authState => {
  return {
    type: authContants.RESTORE_AUTH_STATE,
    payload: authState
  };
};
const entryVk = code => {
  return (dispatch, getState) => {
    const {
      isLoggedIn
    } = getState().auth;
    (0,_api_auth__WEBPACK_IMPORTED_MODULE_2__/* .entryVkReq */ .YZ)(code).then(res => {
      dispatch(deAuthenticateAction());
      dispatch(authenticateAction(res.data));
      next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/cabinet');
    }).catch(() => {
      if (isLoggedIn) {
        next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/cabinet');
      } else {
        dispatch(deAuthenticateAction());
        next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/');
      }
    });
  };
};
const entryGoogle = code => {
  return (dispatch, getState) => {
    const {
      isLoggedIn
    } = getState().auth;
    (0,_api_auth__WEBPACK_IMPORTED_MODULE_2__/* .entryGoogleReq */ .Nc)(code).then(res => {
      dispatch(deAuthenticateAction());
      dispatch(authenticateAction(res.data));
      next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/cabinet');
    }).catch(() => {
      if (isLoggedIn) {
        next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/cabinet');
      } else {
        dispatch(deAuthenticateAction());
        next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/');
      }
    });
  };
};
const login = (data, alert) => {
  return dispatch => {
    dispatch(deAuthenticateAction());
    (0,_api_auth__WEBPACK_IMPORTED_MODULE_2__/* .loginReq */ .zu)({
      user: data
    }).then(res => {
      dispatch(authenticateAction(res.data));
      alert.setState({
        isShow: true,
        isSuccess: true,
        text: 'Вы успешно вошли в аккаунт'
      });
      next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/cabinet');
    }).catch(() => {
      alert.setState({
        isShow: true,
        isSuccess: false,
        text: 'Не получилось войти в аккаунт'
      });
      next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/');
    });
  };
};
const register = (data, alert) => dispatch => {
  (0,_api_auth__WEBPACK_IMPORTED_MODULE_2__/* .registerReq */ .yp)({
    user: data
  }).then(res => {
    alert.setState({
      isShow: true,
      isSuccess: true,
      text: 'Подтведите e-mail на почте для завершения регистрации'
    });
    dispatch(deAuthenticateAction());
  }).catch(() => {
    alert.setState({
      isShow: true,
      isSuccess: false,
      text: 'Не получилось зарегистрироваться'
    });
    dispatch(deAuthenticateAction());
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/');
  });
};
const verifyEmail = hash => dispatch => {
  (0,_api_auth__WEBPACK_IMPORTED_MODULE_2__/* .verifyEmailReq */ .b$)(hash).then(res => {
    dispatch(deAuthenticateAction());
    dispatch(authenticateAction(res.data));
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/cabinet');
  }).catch(() => {
    // alert.setState({isShow: true, isSuccess: false, text: 'Не получилось зарегистрироваться'});
    dispatch(deAuthenticateAction());
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/');
  });
};
const logout = () => {
  return async (dispatch, getState) => {
    const refresh = (0,_utils_cookies__WEBPACK_IMPORTED_MODULE_0__/* .getCookie */ .ej)("refresh");

    if (refresh) {
      await (0,_api_auth__WEBPACK_IMPORTED_MODULE_2__/* .logoutReq */ .Nl)(refresh);
    }

    dispatch(deAuthenticateAction());
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/');
  };
};
const restore = savedState => {
  return dispatch => {
    dispatch(restoreState(savedState));
  };
};

/***/ }),

/***/ 9513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const auth = {
  AUTHENTICATE: 'AUTHENTICATE',
  DEAUTHENTICATE: 'DEAUTHENTICATE',
  RESTORE_AUTH_STATE: 'RESTORE_AUTH_STATE',
  AUTHENTICATE_VK: 'AUTHENTICATE_VK',
  AUTHENTICATE_GOOGLE: 'AUTHENTICATE_GOOGLE',
  AUTHENTICATE_TELEGRAM: 'AUTHENTICATE_TELEGRAM',
  AUTHENTICATE_FACEBOOK: 'AUTHENTICATE_FACEBOOK'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);

/***/ }),

/***/ 1384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ store),
  "Y": () => (/* binding */ wrapper)
});

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(7561);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(2744);
// EXTERNAL MODULE: ./utils/cookies.ts
var cookies = __webpack_require__(5506);
// EXTERNAL MODULE: ./redux/constants/auth.ts
var auth = __webpack_require__(9513);
;// CONCATENATED MODULE: ./redux/reducers/auth.ts


let initialState = {};

if (typeof localStorage !== "undefined") {
  const authToken = (0,cookies/* getCookie */.ej)('access');
  const refreshToken = (0,cookies/* getCookie */.ej)('refresh');

  if (authToken && refreshToken) {
    initialState = {
      isLoggedIn: true,
      access: authToken,
      refresh: refreshToken
    };
  } else {
    initialState = {
      isLoggedIn: false,
      access: '',
      refresh: '',
      user: {}
    };
  }
} else {
  initialState = {
    isLoggedIn: false,
    access: '',
    refresh: '',
    user: {}
  };
}

const auth_auth = (state = initialState, action) => {
  switch (action.type) {
    case auth/* default.DEAUTHENTICATE */.Z.DEAUTHENTICATE:
      (0,cookies/* remCookie */.gh)("access");
      (0,cookies/* remCookie */.gh)("refresh");
      return {
        isLoggedIn: false
      };

    case auth/* default.AUTHENTICATE */.Z.AUTHENTICATE:
      const authObj = {
        isLoggedIn: true,
        access: action.payload.access,
        refresh: action.payload.refresh
      };
      console.log(action.payload.access);
      console.log(action.payload.refresh);
      (0,cookies/* setCookie */.d8)("access", action.payload.access);
      (0,cookies/* setCookie */.d8)("refresh", action.payload.refresh);
      return authObj;

    case auth/* default.RESTORE_AUTH_STATE */.Z.RESTORE_AUTH_STATE:
      return {
        isLoggedIn: true,
        user: action.payload.user
      };

    default:
      return state;
  }
};

/* harmony default export */ const reducers_auth = (auth_auth);
;// CONCATENATED MODULE: ./redux/reducers/index.ts


/* harmony default export */ const reducers = ((0,external_redux_.combineReducers)({
  auth: reducers_auth
}));
// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__(5176);
// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(5694);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);
;// CONCATENATED MODULE: ./redux/store.ts




 // create a makeStore function

const store = (0,external_redux_.createStore)(reducers, {}, (0,external_redux_devtools_extension_.composeWithDevTools)((0,external_redux_.applyMiddleware)((external_redux_thunk_default()))));

const initStore = context => store; // export an assembled wrapper


const wrapper = (0,external_next_redux_wrapper_.createWrapper)(initStore, {
  debug: true
});

/***/ }),

/***/ 5506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d8": () => (/* binding */ setCookie),
/* harmony export */   "gh": () => (/* binding */ remCookie),
/* harmony export */   "ej": () => (/* binding */ getCookie)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

const setCookie = (name, data) => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default().set(name, data.value, {
    expires: data.expires
  });
};
const remCookie = name => js_cookie__WEBPACK_IMPORTED_MODULE_0___default().remove(name);
const getCookie = (key, req) => {
  return  false ? 0 : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => {
  return cookie.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!(req !== null && req !== void 0 && req.headers.cookie)) {
    return undefined;
  }

  const rawCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${key}=`));

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split('=')[1];
};

/***/ })

};
;