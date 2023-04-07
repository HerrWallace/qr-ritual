(() => {
var exports = {};
exports.id = 500;
exports.ids = [500];
exports.modules = {

/***/ 862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: ./api/page.ts
var api_page = __webpack_require__(9592);
// EXTERNAL MODULE: ./components/Forms/PageForm/index.tsx + 6 modules
var PageForm = __webpack_require__(3353);
// EXTERNAL MODULE: ./components/Navbars/CabinetNavbar/index.tsx
var CabinetNavbar = __webpack_require__(783);
// EXTERNAL MODULE: ./components/Title/index.tsx
var Title = __webpack_require__(3484);
// EXTERNAL MODULE: ./contexts/alert.tsx
var contexts_alert = __webpack_require__(4496);
;// CONCATENATED MODULE: ./public/icons/back.svg
/* harmony default export */ const back = ({"src":"/_next/static/image/public/icons/back.88beaa4c0c095e2af4d36cbf0a01effe.svg","height":12,"width":12});
// EXTERNAL MODULE: ./pages/cabinet/update/style.module.scss
var style_module = __webpack_require__(1469);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/cabinet/update/[id].tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const Update = ({
  page,
  id
}) => {
  const alert = (0,contexts_alert/* useAlertContext */.o)();
  const router = (0,router_.useRouter)();

  const handleBack = () => router.back();

  const handleUpdatePage = data => {
    return (0,api_page/* updatePageReq */.yz)({
      page: _objectSpread(_objectSpread({}, data), {}, {
        id
      })
    }).then(res => {
      router.push('/cabinet/pages');
      alert.setState({
        isShow: true,
        isSuccess: true,
        text: 'Изменения успешно сохранены'
      });
    }).catch(() => {
      alert.setState({
        isShow: true,
        isSuccess: false,
        text: 'Не получилось изменить страницу'
      });
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(CabinetNavbar/* CabinetNavbar */.G, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        onClick: handleBack,
        className: (style_module_default()).btn,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: back.src
        }), "\u041D\u0430\u0437\u0430\u0434"]
      }), /*#__PURE__*/jsx_runtime_.jsx(Title/* Title */.D, {
        children: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043A\u0438"
      }), /*#__PURE__*/jsx_runtime_.jsx(PageForm/* PageForm */.a, {
        onSubmit: handleUpdatePage,
        page: page
      })]
    })]
  });
};

Update.getInitialProps = async ctx => {
  let page = {};
  await (0,api_page/* getPageReq */.zt)({
    page: ctx.query.id
  }).then(res => {
    page = res.data.page;
  });
  return {
    page,
    id: ctx.query.id
  };
};

/* harmony default export */ const _id_ = (Update);

/***/ }),

/***/ 1469:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "style_btn__1hA-U"
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

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 3947:
/***/ ((module) => {

"use strict";
module.exports = require("react-select/async");

/***/ }),

/***/ 9080:
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

/***/ }),

/***/ 1462:
/***/ ((module) => {

"use strict";
module.exports = require("react-yandex-maps");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,75,741,884,871,379,634,395], () => (__webpack_exec__(862)));
module.exports = __webpack_exports__;

})();