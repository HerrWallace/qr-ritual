(() => {
var exports = {};
exports.id = 592;
exports.ids = [592];
exports.modules = {

/***/ 9592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CG": () => (/* binding */ createPageReq),
/* harmony export */   "yz": () => (/* binding */ updatePageReq),
/* harmony export */   "zt": () => (/* binding */ getPageReq),
/* harmony export */   "Y6": () => (/* binding */ getPagesReq),
/* harmony export */   "Jl": () => (/* binding */ getNationalyReq),
/* harmony export */   "CT": () => (/* binding */ deletePage),
/* harmony export */   "Vi": () => (/* binding */ addImageReq)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4314);

const createPageReq = data => _index__WEBPACK_IMPORTED_MODULE_0__/* .default.post */ .Z.post('page/', data);
const updatePageReq = data => _index__WEBPACK_IMPORTED_MODULE_0__/* .default.patch */ .Z.patch('page/', data);
const getPageReq = data => _index__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get('page/', {
  params: data
});
const getPagesReq = headers => _index__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get('user/pages/', {
  headers
});
const getNationalyReq = () => _index__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get('nationalities/');
const deletePage = page => _index__WEBPACK_IMPORTED_MODULE_0__/* .default.delete */ .Z.delete('page/', {
  params: {
    page
  }
});
const addImageReq = data => {
  const formData = new FormData();

  for (let i = 0; i < data.length; i++) {
    formData.append(i.toString(), data[i]);
  }

  return _index__WEBPACK_IMPORTED_MODULE_0__/* .default.post */ .Z.post('files/', formData);
};

/***/ }),

/***/ 3484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6021);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Title = ({
  children,
  align = "start"
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h1", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()((_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title), (_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[align]),
    children: children
  });
};

/***/ }),

/***/ 234:
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: ./api/page.ts
var api_page = __webpack_require__(9592);
// EXTERNAL MODULE: ./utils/fromServer.js
var fromServer = __webpack_require__(1);
// EXTERNAL MODULE: ./components/Gallery/style.module.scss
var style_module = __webpack_require__(5256);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Gallery/index.tsx





const Gallery = ({
  pictures,
  videos
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (style_module_default()).title,
        children: "\u0424\u043E\u0442\u043E:"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (style_module_default()).gallery,
        children: pictures.length ? pictures.map(picture => {
          return /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (style_module_default()).item,
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: (0,fromServer/* pathFromServer */.v)(picture.url)
            })
          }, picture.id);
        }) : "Фотографий нету..."
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (style_module_default()).title,
        children: "\u0412\u0438\u0434\u0435\u043E:"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (style_module_default()).gallery,
        children: videos.length ? videos.map(video => {
          return /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (style_module_default()).item,
            children: /*#__PURE__*/jsx_runtime_.jsx("video", {
              src: (0,fromServer/* pathFromServer */.v)(video.url),
              controls: true,
              playsInline: true
            })
          }, video.id);
        }) : "Видео нету..."
      })]
    })]
  });
};

/* harmony default export */ const components_Gallery = (Gallery);
// EXTERNAL MODULE: ./components/InfoPage/index.tsx
var InfoPage = __webpack_require__(791);
// EXTERNAL MODULE: ./components/Title/index.tsx
var Title = __webpack_require__(3484);
;// CONCATENATED MODULE: ./pages/page/gallery/[id].tsx











const PageGallery = ({
  page
}) => {
  const router = (0,router_.useRouter)();

  const handleCLickBack = () => {
    router.back();
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(InfoPage/* InfoPage */.O, {
      paddingTop: "10px",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
        variant: "outline-light",
        onClick: handleCLickBack,
        children: "\u041D\u0430\u0437\u0430\u0434"
      }), /*#__PURE__*/jsx_runtime_.jsx(Title/* Title */.D, {
        align: "center",
        children: "\u0413\u0430\u043B\u043B\u0435\u0440\u0435\u044F"
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Gallery, {
        pictures: page.pictures,
        videos: page.videos
      })]
    })
  });
};

PageGallery.getInitialProps = async ctx => {
  let page = {};
  await (0,api_page/* getPageReq */.zt)({
    page: ctx.query.id
  }).then(res => {
    page = res.data.page;
  });
  return {
    page
  };
};

/* harmony default export */ const _id_ = (PageGallery);

/***/ }),

/***/ 1:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ pathFromServer)
/* harmony export */ });
const pathFromServer = val => {
  // return 'https://riqr-v1.herokuapp.com/' + val;
  return 'https://ritual-4kgh.onrender.com' + val;
};

/***/ }),

/***/ 5256:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "style_item__3dbX6",
	"video": "style_video__29N6a",
	"image": "style_image__rOyQF",
	"title": "style_title__1Kf8n",
	"gallery": "style_gallery__1HygP"
};


/***/ }),

/***/ 6021:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "style_title__1NYvy",
	"start": "style_start__3t7QM",
	"center": "style_center__lSIPU",
	"end": "style_end__lvG92"
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
var __webpack_exports__ = __webpack_require__.X(0, [664,75,741,882,791], () => (__webpack_exec__(234)));
module.exports = __webpack_exports__;

})();