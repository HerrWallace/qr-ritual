exports.id = 395;
exports.ids = [395];
exports.modules = {

/***/ 3353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ PageForm)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: ./api/page.ts
var page = __webpack_require__(9592);
// EXTERNAL MODULE: ./utils/fromServer.js
var fromServer = __webpack_require__(1);
// EXTERNAL MODULE: ./components/Checkbox/index.tsx
var Checkbox = __webpack_require__(2379);
// EXTERNAL MODULE: ./components/CarouselImages/style.module.scss
var style_module = __webpack_require__(4056);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./public/images/image_user.jpg
/* harmony default export */ const image_user = ({"src":"/_next/static/image/public/images/image_user.4f4a35efebc4b8740bcc40ca7cd15150.jpg","height":2126,"width":1535,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAAFP/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECEAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAH//xAAbEAACAQUAAAAAAAAAAAAAAAACAwQABRIyM//aAAgBAQABPwB9nlLix2AhhNLoOGtf/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/CarouselImages/index.tsx










const CarouselImage = ({
  images,
  setImages,
  mainImage,
  setMainImage
}) => {
  const inputRef = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => {
    var _inputRef$current;

    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.addEventListener('change', addImage);
    return () => {
      var _inputRef$current2;

      (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.removeEventListener('change', addImage);
    };
  });

  const handleClickImage = (ev, ind) => {
    if (ind == 0) {
      setImages([...images.slice(1, images.length), images[0]]);
    }
  };

  const addImage = async ev => {
    var _ev$target;

    await (0,page/* addImageReq */.Vi)((_ev$target = ev.target) === null || _ev$target === void 0 ? void 0 : _ev$target.files).then(res => {
      !images.length ? setMainImage(res.data[0].id) : null;
      setImages([...images, ...res.data]);
    });
  };

  const handleClickPoint = ind => setMainImage(ind);

  const handleAddImage = () => {
    var _inputRef$current3;

    return (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 ? void 0 : _inputRef$current3.click();
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [images[0] ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (style_module_default()).carousel,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (style_module_default()).carousel_items,
        children: images.map((val, ind) => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            style: {
              transform: `translate(${ind / (images.length - 1) * 15}px, ${ind / (images.length - 1) * 15}px)`,
              zIndex: 10 - ind
            },
            className: (style_module_default()).item,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (style_module_default()).block_point,
              children: [/*#__PURE__*/jsx_runtime_.jsx(Checkbox/* Checkbox */.X, {
                onClick: () => handleClickPoint(val.id),
                active: mainImage == val.id
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: (style_module_default()).set_main_photo,
                children: "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0433\u043B\u0430\u0432\u043D\u044B\u043C"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: (0,fromServer/* pathFromServer */.v)(val.url),
              onClick: ev => handleClickImage(ev, ind)
            })]
          }, val.id);
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (style_module_default()).width
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (style_module_default()).no_image,
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: image_user.src,
        alt: ""
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (style_module_default()).btn_group,
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        ref: inputRef,
        type: "file",
        multiple: true,
        style: {
          display: 'none'
        },
        accept: "image/*"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
        className: (style_module_default()).btn,
        onClick: handleAddImage,
        children: "\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u043E\u0442\u043E"
      })]
    })]
  });
};
// EXTERNAL MODULE: external "react-select/async"
var async_ = __webpack_require__(3947);
var async_default = /*#__PURE__*/__webpack_require__.n(async_);
// EXTERNAL MODULE: ./utils/validFields.js
var validFields = __webpack_require__(9257);
// EXTERNAL MODULE: ./components/Forms/Form.tsx
var Form = __webpack_require__(1474);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/Forms/Inputs/DefaultInput/style.module.scss
var DefaultInput_style_module = __webpack_require__(7423);
var DefaultInput_style_module_default = /*#__PURE__*/__webpack_require__.n(DefaultInput_style_module);
;// CONCATENATED MODULE: ./components/Forms/Inputs/DefaultInput/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const DefaultInput = ({
  placeholder = '',
  title = '',
  register = null,
  disabled = false,
  password = false,
  className = '',
  as = 'input',
  type = 'text'
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (DefaultInput_style_module_default()).field,
      children: [/*#__PURE__*/external_react_default().createElement(as, _objectSpread(_objectSpread({}, register), {}, {
        op: password ? "password" : null,
        className: external_classnames_default()(className, (DefaultInput_style_module_default()).field_input),
        autoComplete: "off",
        disabled,
        type,
        placeholder
      })), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: title
      })]
    })
  });
}; // React.createElement('select', {
//     ...register,
//     op: password ? "password": null,
//     className: csx( className, styles.field_input),
//     autoComplete: "off",
//     disabled: disabled,
//     placeholder: placeholder,
// }, data.map((val: any, ind: number)=> {
//     return (
//         <option value={ind} key={ind}>
//             <span><img src={pathFromServer(val.image)}/></span>
//             {val.name}
//         </option>
//     )
// }))
// EXTERNAL MODULE: ./components/Forms/Biography/style.module.scss
var Biography_style_module = __webpack_require__(3652);
var Biography_style_module_default = /*#__PURE__*/__webpack_require__.n(Biography_style_module);
;// CONCATENATED MODULE: ./components/Forms/Biography/index.tsx
function Biography_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Biography_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Biography_ownKeys(Object(source), true).forEach(function (key) { Biography_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Biography_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Biography_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const iconFlag = icon => ({
  display: 'flex',
  alignItems: 'center',
  ':after': {
    content: "''",
    height: 20,
    width: 20,
    display: 'inline-block',
    backgroundImage: `url(${(0,fromServer/* pathFromServer */.v)(icon)})`,
    backgroundSize: 20,
    marginLeft: 10
  }
});

const colourStyles = {
  option: (styles, {
    data
  }) => Biography_objectSpread(Biography_objectSpread({}, styles), iconFlag(data.icon)),
  singleValue: (styles, {
    data
  }) => Biography_objectSpread(Biography_objectSpread({}, styles), iconFlag(data.icon))
};
const BiographyForm = ({
  biographyForm,
  onChangeNational,
  defaultNationality
}) => {
  const filterOptions = nationalities => nationalities.map(national => ({
    value: national.id,
    label: national.name,
    icon: national.icon
  }));

  const loadOptions = (inputValue, callback) => {
    (0,page/* getNationalyReq */.Jl)().then(res => {
      callback(filterOptions(res.data.nationalities));
    });
  };

  const fieldsBio = [{
    name: "name",
    title: "Имя:",
    valid: validFields/* required */.C1
  }, {
    name: "surname",
    title: "Фамилия:",
    valid: validFields/* required */.C1
  }, {
    name: "otchestvo",
    title: "Отчество:",
    valid: validFields/* required */.C1
  }, {
    name: "place_of_birth",
    title: "Место рождения:",
    valid: validFields/* required */.C1
  }, {
    name: "place_of_death",
    title: "Место смерти:",
    valid: validFields/* required */.C1
  }, {
    name: "date_of_birth",
    title: "Дата рождения:",
    type: 'date',
    className: (Biography_style_module_default()).single_line_field,
    valid: Biography_objectSpread(Biography_objectSpread({}, validFields/* date */.hT), validFields/* required */.C1)
  }, {
    name: "date_of_death",
    title: "Дата смерти:",
    type: 'date',
    className: (Biography_style_module_default()).single_line_field,
    valid: Biography_objectSpread(Biography_objectSpread({}, validFields/* date */.hT), validFields/* required */.C1)
  }];
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Biography_style_module_default()).container,
    children: /*#__PURE__*/jsx_runtime_.jsx(Form/* Form */.l, {
      valid: biographyForm,
      fields: fieldsBio,
      Input: DefaultInput,
      children: /*#__PURE__*/jsx_runtime_.jsx((async_default()), {
        className: (Biography_style_module_default()).nationaly,
        placeholder: "\u041D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
        defaultValue: defaultNationality,
        cacheOptions: true,
        defaultOptions: true,
        onChange: onChangeNational,
        loadOptions: loadOptions,
        styles: colourStyles
      })
    })
  });
};
// EXTERNAL MODULE: ./components/Forms/PageForm/style.module.scss
var PageForm_style_module = __webpack_require__(9911);
var PageForm_style_module_default = /*#__PURE__*/__webpack_require__.n(PageForm_style_module);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./components/CarouselVideo/style.module.scss
var CarouselVideo_style_module = __webpack_require__(16);
var CarouselVideo_style_module_default = /*#__PURE__*/__webpack_require__.n(CarouselVideo_style_module);
// EXTERNAL MODULE: ./components/Loader/style.module.scss
var Loader_style_module = __webpack_require__(5744);
var Loader_style_module_default = /*#__PURE__*/__webpack_require__.n(Loader_style_module);
;// CONCATENATED MODULE: ./components/Loader/index.tsx




const Loader = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Loader_style_module_default()).lds_ring,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {})]
  });
};

/* harmony default export */ const components_Loader = (Loader);
;// CONCATENATED MODULE: ./components/CarouselVideo/index.tsx
function CarouselVideo_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function CarouselVideo_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CarouselVideo_ownKeys(Object(source), true).forEach(function (key) { CarouselVideo_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CarouselVideo_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CarouselVideo_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};
const CarouselVideo = ({
  videos,
  setVideos
}) => {
  const inputRef = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => {
    var _inputRef$current;

    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.addEventListener('change', addVideo);
    return () => {
      var _inputRef$current2;

      (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.removeEventListener('change', addVideo);
    };
  });

  const addVideo = async ev => {
    var _ev$target;

    const countFiles = ev.target.files.length;
    const emptyFiles = Array(countFiles).fill({
      isLoading: true
    });
    setVideos([...videos, ...emptyFiles]);
    await (0,page/* addImageReq */.Vi)((_ev$target = ev.target) === null || _ev$target === void 0 ? void 0 : _ev$target.files).then(res => {
      console.log(res.data);
      setVideos([...videos, ...res.data]); //
    }).catch(() => {
      setVideos(videos.filter(video => !(video !== null && video !== void 0 && video.isLoading)));
    });
  };

  const handleAddVideo = () => {
    var _inputRef$current3;

    return (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 ? void 0 : _inputRef$current3.click();
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (CarouselVideo_style_module_default()).carousel,
    children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), CarouselVideo_objectSpread(CarouselVideo_objectSpread({}, settings), {}, {
      children: videos.map((video, ind) => {
        if (video !== null && video !== void 0 && video.isLoading) {
          return /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (CarouselVideo_style_module_default()).item,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx(components_Loader, {})
            })
          }, ind);
        }

        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (CarouselVideo_style_module_default()).item,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (CarouselVideo_style_module_default()).content,
            children: /*#__PURE__*/jsx_runtime_.jsx("video", {
              src: (0,fromServer/* pathFromServer */.v)(video.url),
              controls: true
            })
          })
        }, video.id);
      })
    })), /*#__PURE__*/jsx_runtime_.jsx("input", {
      ref: inputRef,
      type: "file",
      multiple: true,
      style: {
        display: 'none'
      },
      accept: "video/*"
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
      onClick: handleAddVideo,
      className: (CarouselVideo_style_module_default()).btn_video + ' ' + (CarouselVideo_style_module_default()).btn,
      children: "\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0432\u0438\u0434\u0435\u043E"
    })]
  });
};
// EXTERNAL MODULE: ./components/Map/index.tsx + 1 modules
var Map = __webpack_require__(8106);
;// CONCATENATED MODULE: ./components/Forms/PageForm/index.tsx
function PageForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function PageForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PageForm_ownKeys(Object(source), true).forEach(function (key) { PageForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PageForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PageForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const PageForm = ({
  page,
  onSubmit
}) => {
  var _page$avatar;

  const biographyForm = (0,external_react_hook_form_.useForm)({
    defaultValues: page ? {
      'name': page.name,
      'otchestvo': page.otchestvo,
      'surname': page.surname,
      'date_of_birth': page.date_of_birth,
      'date_of_death': page.date_of_death,
      'place_of_birth': page.place_of_birth,
      'place_of_death': page.place_of_death
    } : undefined
  });
  const dataForm = (0,external_react_hook_form_.useForm)({
    defaultValues: page ? {
      'biography': page.biography,
      'facts': page.facts
    } : undefined
  });
  const {
    0: coords,
    1: setCoords
  } = (0,external_react_.useState)(page ? page.coords : []);
  const {
    0: nationality,
    1: setNationality
  } = (0,external_react_.useState)(page ? page.nationality.id : undefined);
  const {
    0: pictures,
    1: setPictures
  } = (0,external_react_.useState)(page ? page.pictures : []);
  const {
    0: videos,
    1: setVideos
  } = (0,external_react_.useState)(page ? page.videos : []);
  const {
    0: mainImage,
    1: setMainImage
  } = (0,external_react_.useState)(page ? (_page$avatar = page.avatar) === null || _page$avatar === void 0 ? void 0 : _page$avatar.id : 0);
  const {
    0: isSubmitting,
    1: setIsSubmitting
  } = (0,external_react_.useState)(false);

  const handleSubmit = data => {
    if (videos.some(x => x.isLoading)) {
      return;
    }

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    const picturesId = pictures.map(image => image.id);
    const videosId = videos.map(video => video.id);
    onSubmit(PageForm_objectSpread(PageForm_objectSpread(PageForm_objectSpread({}, data), dataForm.getValues()), {}, {
      coords,
      nationality,
      pictures: picturesId,
      videos: videosId,
      avatar: mainImage
    })).catch(() => setIsSubmitting(false));
  };

  const handleChangeNational = data => {
    setNationality(data.value);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
      lg: 2,
      xs: 1,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(CarouselImage, {
          images: pictures,
          setImages: setPictures,
          mainImage: mainImage,
          setMainImage: setMainImage
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
        children: /*#__PURE__*/jsx_runtime_.jsx(BiographyForm, {
          defaultNationality: page ? {
            value: page.nationality.id,
            label: page.nationality.name,
            icon: page.nationality.icon
          } : undefined,
          biographyForm: biographyForm,
          onChangeNational: handleChangeNational
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(CarouselVideo, {
      videos: videos,
      setVideos: setVideos
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
      className: (PageForm_style_module_default()).description_container,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
        xs: 12,
        md: 8,
        children: /*#__PURE__*/jsx_runtime_.jsx(DefaultInput, {
          as: "textarea",
          register: dataForm.register('biography'),
          className: (PageForm_style_module_default()).biography,
          title: "\u0411\u0438\u043E\u0433\u0440\u0430\u0444\u0438\u044F:",
          placeholder: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0431\u0438\u043E\u0433\u0440\u0430\u0444\u0438\u044E"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
        xs: 12,
        md: 4,
        children: /*#__PURE__*/jsx_runtime_.jsx(DefaultInput, {
          as: "textarea",
          register: dataForm.register('facts'),
          className: (PageForm_style_module_default()).facts,
          title: "\u042D\u043F\u0438\u0442\u0430\u0444\u0438\u044F:",
          placeholder: "\u041C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043A\u043E\u0440\u043E\u0442\u043A\u0443\u044E \u0438 \u0442\u0440\u043E\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u044D\u043F\u0438\u0442\u0430\u0444\u0438\u044E"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (PageForm_style_module_default()).map_container,
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u041E\u0442\u043C\u0435\u0442\u0438\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0435"
      }), /*#__PURE__*/jsx_runtime_.jsx(Map/* Map */.D, {
        isForm: true,
        handleChange: setCoords,
        coordinates: coords
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (PageForm_style_module_default()).send_container,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
        className: (PageForm_style_module_default()).btn_send,
        onClick: biographyForm.handleSubmit(handleSubmit),
        children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
      })
    })]
  });
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

/***/ 4056:
/***/ ((module) => {

// Exports
module.exports = {
	"carousel": "style_carousel__2S9Pv",
	"item": "style_item__21bJS",
	"point": "style_point__1ZKbO",
	"active": "style_active__1u2d6",
	"block_point": "style_block_point__32wEc",
	"width": "style_width__6BZo9",
	"btn_group": "style_btn_group__3RtcL",
	"btn": "style_btn__cbRtU",
	"no_image": "style_no_image__3ZrFI",
	"set_main_photo": "style_set_main_photo__14QrZ"
};


/***/ }),

/***/ 16:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "style_item__1hkZV",
	"content": "style_content__6INZ2",
	"carousel": "style_carousel__3HCNH",
	"btn": "style_btn__2rByh",
	"btn_video": "style_btn_video__3XnQ_"
};


/***/ }),

/***/ 3652:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "style_container__22ztX",
	"nationaly": "style_nationaly__3tEhm",
	"single_line_field": "style_single_line_field__1LFWd"
};


/***/ }),

/***/ 7423:
/***/ ((module) => {

// Exports
module.exports = {
	"field": "style_field__kYXMk",
	"field_input": "style_field_input__3K9BD",
	"icon": "style_icon__ySjZa"
};


/***/ }),

/***/ 9911:
/***/ ((module) => {

// Exports
module.exports = {
	"biography": "style_biography__26klx",
	"facts": "style_facts__2vSGN",
	"map_container": "style_map_container__2oNb6",
	"description_container": "style_description_container__1IZ5G",
	"send_container": "style_send_container__2ALaB",
	"btn_send": "style_btn_send__3rE7_"
};


/***/ }),

/***/ 5744:
/***/ ((module) => {

// Exports
module.exports = {
	"lds_ring": "style_lds_ring__9zx_k"
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


/***/ })

};
;