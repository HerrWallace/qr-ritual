"use strict";
exports.id = 634;
exports.ids = [634];
exports.modules = {

/***/ 9592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 8106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ Map)
});

// EXTERNAL MODULE: external "react-yandex-maps"
var external_react_yandex_maps_ = __webpack_require__(1462);
;// CONCATENATED MODULE: ./public/icons/placemarker.svg
/* harmony default export */ const placemarker = ({"src":"/_next/static/image/public/icons/placemarker.aedba927f5f456d70b48b800c550e7a9.svg","height":55,"width":38});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Map/index.tsx



const Map = ({
  isForm = false,
  handleChange,
  coordinates = []
}) => {
  const handleClickMap = inst => {
    if (inst && isForm && handleChange) {
      inst.cursors.push('pointer');
      inst.events.add('click', e => {
        handleChange(e.get('coords'));
      });
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_yandex_maps_.YMaps, {
    query: {
      apikey: '31429c36-3280-488e-8552-058d0833ce7a',
      mode: 'release'
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_yandex_maps_.Map, {
      width: "100%",
      height: "400px",
      defaultState: {
        yandexMapAutoSwitch: true,
        maxZoom: 5,
        center: [55.75, 37.57],
        zoom: 9
      },
      instanceRef: handleClickMap,
      children: coordinates ? /*#__PURE__*/jsx_runtime_.jsx(external_react_yandex_maps_.Placemark, {
        options: {
          iconLayout: 'default#image',
          iconImageHref: placemarker.src,
          iconImageOffset: [-17, -38]
        },
        geometry: coordinates
      }) : null
    })
  });
};

/***/ }),

/***/ 1:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ pathFromServer)
/* harmony export */ });
const pathFromServer = val => {
  // return 'https://riqr-v1.herokuapp.com/' + val;
  return 'https://ritual-4kgh.onrender.com' + val;
};

/***/ })

};
;