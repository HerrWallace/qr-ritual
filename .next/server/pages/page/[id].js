(() => {
var exports = {};
exports.id = 333;
exports.ids = [333];
exports.modules = {

/***/ 565:
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
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./api/page.ts
var api_page = __webpack_require__(9592);
// EXTERNAL MODULE: ./utils/fromServer.js
var fromServer = __webpack_require__(1);
// EXTERNAL MODULE: ./components/Gallery/Transition/style.module.scss
var style_module = __webpack_require__(5581);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Gallery/Transition/index.tsx






const TransitionGallery = ({
  pictures,
  idGallery,
  videos
}) => {
  const router = (0,router_.useRouter)();

  const handlePageGallery = () => {
    router.push(`/page/gallery/${idGallery}`);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (style_module_default()).con,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (style_module_default()).gallery_con,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (style_module_default()).gallery,
        children: [pictures.map(picture => {
          return /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (style_module_default()).item,
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: (0,fromServer/* pathFromServer */.v)(picture.url)
            })
          }, picture.id);
        }), videos.map(video => {
          return /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (style_module_default()).item,
            children: /*#__PURE__*/jsx_runtime_.jsx("video", {
              src: (0,fromServer/* pathFromServer */.v)(video.url),
              controls: true,
              playsInline: true
            })
          }, video.id);
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (style_module_default()).hidden
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
      className: (style_module_default()).btn,
      onClick: handlePageGallery,
      children: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0433\u0430\u043B\u043B\u0435\u0440\u0435\u044E"
    })]
  });
};
// EXTERNAL MODULE: ./components/InfoPage/index.tsx
var InfoPage = __webpack_require__(791);
// EXTERNAL MODULE: ./components/Map/index.tsx + 1 modules
var Map = __webpack_require__(8106);
// EXTERNAL MODULE: ./components/Page/AboutPeople/style.module.scss
var AboutPeople_style_module = __webpack_require__(7597);
var AboutPeople_style_module_default = /*#__PURE__*/__webpack_require__.n(AboutPeople_style_module);
;// CONCATENATED MODULE: ./components/Page/AboutPeople/index.tsx



const AboutPeople = ({
  user
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (AboutPeople_style_module_default()).con,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
      className: (AboutPeople_style_module_default()).epitaph,
      children: ["\u2014 ", user.facts]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: (AboutPeople_style_module_default()).bio,
      children: user.biography
    })]
  });
};
;// CONCATENATED MODULE: external "moment"
const external_moment_namespaceObject = require("moment");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
// EXTERNAL MODULE: ./components/Page/Biography/style.module.scss
var Biography_style_module = __webpack_require__(915);
var Biography_style_module_default = /*#__PURE__*/__webpack_require__.n(Biography_style_module);
;// CONCATENATED MODULE: ./components/Page/Biography/index.tsx








__webpack_require__(3100);

const Biography = ({
  user
}) => {
  var _user$avatar;

  external_moment_default().locale('ru');
  const haveAvatar = (_user$avatar = user.avatar) !== null && _user$avatar !== void 0 && _user$avatar.url ? true : false;
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Row, {
    md: haveAvatar ? 2 : 1,
    xs: 1,
    className: (Biography_style_module_default()).row,
    children: haveAvatar ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Biography_style_module_default()).fio,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: user.name
          }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: user.surname
          }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: user.otchestvo
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
          className: (Biography_style_module_default()).biography,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "\u041C\u0435\u0441\u0442\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F:"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: user.place_of_birth
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "\u0434\u0430\u0442\u0430: "
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: external_moment_default()(user.date_of_birth).format('LL')
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "\u041C\u0435\u0441\u0442\u043E \u0441\u043C\u0435\u0440\u0442\u0438: "
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: user.place_of_death
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "\u0434\u0430\u0442\u0430: "
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: external_moment_default()(user.date_of_death).format('LL')
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "\u041D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C: "
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
              className: (Biography_style_module_default()).nationaly,
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                className: (Biography_style_module_default()).flag,
                src: (0,fromServer/* pathFromServer */.v)(user.nationality.icon)
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: [" ", user.nationality.name]
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
        className: (Biography_style_module_default()).col_image,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (0,fromServer/* pathFromServer */.v)(user.avatar.url),
          className: (Biography_style_module_default()).main_image
        })
      })]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Biography_style_module_default()).fio,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: user.name
        }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: user.surname
        }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: user.otchestvo
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Biography_style_module_default()).biography,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Biography_style_module_default()).biography_placeholder,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (Biography_style_module_default()).info_text,
              children: "\u041C\u0435\u0441\u0442\u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: "
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (Biography_style_module_default()).info_text,
              children: "\u0434\u0430\u0442\u0430: "
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (Biography_style_module_default()).info_text,
              children: "\u041C\u0435\u0441\u0442\u043E \u0441\u043C\u0435\u0440\u0442\u0438: "
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (Biography_style_module_default()).info_text,
              children: "\u0434\u0430\u0442\u0430: "
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: (Biography_style_module_default()).info_text,
              children: "\u041D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C: "
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Biography_style_module_default()).biography_data,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              children: user.place_of_birth
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: external_moment_default()(user.date_of_birth).format('LL')
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              children: user.place_of_death
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: external_moment_default()(user.date_of_death).format('LL')
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (Biography_style_module_default()).nationaly,
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              className: (Biography_style_module_default()).flag,
              src: (0,fromServer/* pathFromServer */.v)(user.nationality.icon)
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: [" ", user.nationality.name]
            })]
          })]
        })]
      })]
    })
  });
};
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./utils/files.js

const downloadFile = async (url, fileName) => {
  const link = document.createElement("a");
  const path = URL.createObjectURL(await (await fetch((0,fromServer/* pathFromServer */.v)(url))).blob());
  link.setAttribute("href", path);
  link.setAttribute("download", fileName);
  link.click();
};
// EXTERNAL MODULE: ./components/QrCode/style.module.scss
var QrCode_style_module = __webpack_require__(6549);
var QrCode_style_module_default = /*#__PURE__*/__webpack_require__.n(QrCode_style_module);
;// CONCATENATED MODULE: ./components/QrCode/index.tsx







const QrCode = ({
  qrCodes
}) => {
  const codeOne = (0,external_react_.useRef)(null);
  const codeTwo = (0,external_react_.useRef)(null);

  const handleDownload = () => {
    qrCodes.forEach(code => {
      downloadFile(code.url, `qr_code${code.id}.png`);
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (QrCode_style_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
      ref: codeOne,
      href: (0,fromServer/* pathFromServer */.v)(qrCodes[0].url),
      download: true
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      ref: codeTwo,
      href: (0,fromServer/* pathFromServer */.v)(qrCodes[1].url),
      download: true
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      className: (QrCode_style_module_default()).qr_code,
      src: (0,fromServer/* pathFromServer */.v)(qrCodes[1].url)
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
      onClick: handleDownload,
      children: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C QR-\u043A\u043E\u0434"
    })]
  });
};
// EXTERNAL MODULE: ./pages/page/style.module.scss
var page_style_module = __webpack_require__(3835);
var page_style_module_default = /*#__PURE__*/__webpack_require__.n(page_style_module);
;// CONCATENATED MODULE: ./pages/page/[id].tsx















const Page = ({
  page,
  id
}) => {
  const router = (0,router_.useRouter)();
  const isLoggedIn = (0,external_react_redux_.useSelector)(state => state.auth.isLoggedIn);

  const handleBack = () => {
    if (isLoggedIn) {
      router.back();
    }

    return;
  };

  const haveMedia = page.pictures.length || page.videos.length;
  console.log(haveMedia);
  console.log(page);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(InfoPage/* InfoPage */.O, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
        className: (page_style_module_default()).button,
        variant: "outline-light",
        onClick: handleBack,
        children: "\u041D\u0430\u0437\u0430\u0434"
      }), /*#__PURE__*/jsx_runtime_.jsx(Biography, {
        user: page
      }), /*#__PURE__*/jsx_runtime_.jsx(AboutPeople, {
        user: page
      }), haveMedia && /*#__PURE__*/jsx_runtime_.jsx(TransitionGallery, {
        pictures: page.pictures,
        videos: page.videos,
        idGallery: id
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: (page_style_module_default()).map_title,
          children: "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0435:"
        }), /*#__PURE__*/jsx_runtime_.jsx(Map/* Map */.D, {
          coordinates: page === null || page === void 0 ? void 0 : page.coords
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(QrCode, {
        qrCodes: page.qr_code
      })]
    })
  });
};

Page.getInitialProps = async ctx => {
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

/* harmony default export */ const _id_ = (Page);

/***/ }),

/***/ 5581:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "style_item__1okBZ",
	"gallery": "style_gallery__3jtGo",
	"gallery_con": "style_gallery_con__1iCKo",
	"hidden": "style_hidden__14l92",
	"btn": "style_btn__3b9mV",
	"con": "style_con__2Xdob"
};


/***/ }),

/***/ 7597:
/***/ ((module) => {

// Exports
module.exports = {
	"con": "style_con__36bE6",
	"epitaph": "style_epitaph__1V0c6",
	"bio": "style_bio__2y_jN"
};


/***/ }),

/***/ 915:
/***/ ((module) => {

// Exports
module.exports = {
	"main_image": "style_main_image__1_6wF",
	"info_text": "style_info_text__2aJQI",
	"fio": "style_fio__ZxaT1",
	"biography_placeholder": "style_biography_placeholder__QSkBB",
	"biography_data": "style_biography_data__lqgIU",
	"biography": "style_biography__3e-jO",
	"row": "style_row__kZgOO",
	"col_image": "style_col_image__2Y2_9",
	"nationaly": "style_nationaly__1ZZ_K",
	"flag": "style_flag__3cRlU"
};


/***/ }),

/***/ 6549:
/***/ ((module) => {

// Exports
module.exports = {
	"qr_code": "style_qr_code__1A20j",
	"container": "style_container__3flbk"
};


/***/ }),

/***/ 3835:
/***/ ((module) => {

// Exports
module.exports = {
	"map_title": "style_map_title__21aXk",
	"button": "style_button__2tju7"
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

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("moment/locale/ru");

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

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,75,741,882,791,634], () => (__webpack_exec__(565)));
module.exports = __webpack_exports__;

})();