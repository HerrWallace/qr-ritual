(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{9592:function(e,t,n){"use strict";n.d(t,{CG:function(){return i},yz:function(){return s},zt:function(){return o},Jl:function(){return a},CT:function(){return c},Vi:function(){return l}});var r=n(4314),i=function(e){return r.Z.post("page/",e)},s=function(e){return r.Z.patch("page/",e)},o=function(e){return r.Z.get("page/",{params:e})},a=function(){return r.Z.get("nationalities/")},c=function(e){return r.Z.delete("page/",{params:{page:e}})},l=function(e){for(var t=new FormData,n=0;n<e.length;n++)t.append(n.toString(),e[n]);return r.Z.post("files/",t)}},9882:function(e,t,n){"use strict";n.d(t,{$:function(){return l}});var r=n(5475),i=n.n(r),s=n.p+"static/files/\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430_\u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438_RIQR (1).pdf",o=n.p+"static/files/\u0423\u0441\u043b\u043e\u0432\u0438\u044f_\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f_RIQR.pdf",a=n(4544),c=n(5893),l=function(){return(0,c.jsxs)("footer",{className:i().footer,children:[(0,c.jsx)(a.T,{color:"gray"}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("a",{href:s,download:!0,children:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"})," | ",(0,c.jsx)("a",{href:o,download:!0,children:"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"})]}),"\xa92022 RIQR & CO. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b."]}),(0,c.jsx)("div",{})]})}},791:function(e,t,n){"use strict";n.d(t,{O:function(){return c}});var r=n(682),i=n(9882),s=n(6162),o=n.n(s),a=n(5893),c=function(e){var t=e.text,n=e.title,s=e.children,c=e.paddingTop,l=void 0===c?"120px":c;return(0,a.jsxs)("div",{className:o().info,children:[(0,a.jsxs)("main",{style:{paddingTop:l},children:[t&&n?(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("p",{className:o().title,children:n}),(0,a.jsx)("pre",{className:o().content,children:Array.isArray(t)?t.map((function(e,t){return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:o().title_text,children:null===e||void 0===e?void 0:e.title}),(0,a.jsx)("p",{className:o().text_text,children:e.text}),(0,a.jsx)("br",{})]},t)})):t})]}):null,s?(0,a.jsx)(r.Z,{children:s}):null]}),(0,a.jsx)(i.$,{})]})}},4544:function(e,t,n){"use strict";n.d(t,{T:function(){return u}});var r=n(4501),i=n.n(r),s="/_next/static/image/public/images/logo.8eeecd5c1970ccb0faf0cfead36e4233.png",o=n(1664),a=n(4184),c=n.n(a),l=n(5893),u=function(e){var t=e.color,n=void 0===t?"white":t;return(0,l.jsxs)("div",{className:c()(i().logo,i()[n]),children:[(0,l.jsx)("img",{src:s}),(0,l.jsx)(o.default,{href:"/",children:"Ritual"})]})}},3484:function(e,t,n){"use strict";n.d(t,{D:function(){return c}});var r=n(4184),i=n.n(r),s=(n(7294),n(5920)),o=n.n(s),a=n(5893),c=function(e){var t=e.children,n=e.align,r=void 0===n?"start":n;return(0,a.jsx)("h1",{className:i()(o().title,o()[r]),children:t})}},2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var i,s=(i=n(7294))&&i.__esModule?i:{default:i},o=n(1063),a=n(4651),c=n(7426);var l={};function u(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,i=a.useRouter(),f=s.default.useMemo((function(){var t=o.resolveHref(i,e.href,!0),n=r(t,2),s=n[0],a=n[1];return{href:s,as:e.as?o.resolveHref(i,e.as):a||s}}),[i,e.href,e.as]),d=f.href,p=f.as,v=e.children,_=e.replace,h=e.shallow,g=e.scroll,x=e.locale;"string"===typeof v&&(v=s.default.createElement("a",null,v));var y=(t=s.default.Children.only(v))&&"object"===typeof t&&t.ref,m=c.useIntersection({rootMargin:"200px"}),j=r(m,2),N=j[0],b=j[1],w=s.default.useCallback((function(e){N(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,N]);s.default.useEffect((function(){var e=b&&n&&o.isLocalURL(d),t="undefined"!==typeof x?x:i&&i.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&u(i,d,p,{locale:t})}),[p,d,b,x,n,i]);var C={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,s,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[i?"replace":"push"](n,r,{shallow:s,locale:c,scroll:a}))}(e,i,d,p,_,h,g,x)},onMouseEnter:function(e){o.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(i,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof x?x:i&&i.locale,R=i&&i.isLocaleDomain&&o.getDomainLocale(p,E,i&&i.locales,i&&i.domainLocales);C.href=R||o.addBasePath(o.addLocale(p,E,i&&i.defaultLocale))}return s.default.cloneElement(t,C)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,c=i.useRef(),l=i.useState(!1),u=r(l,2),f=u[0],d=u[1],p=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,s=r.observer,o=r.elements;return o.set(e,t),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),a.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return i.useEffect((function(){if(!o&&!f){var e=s.requestIdleCallback((function(){return d(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[f]),[p,f]};var i=n(7294),s=n(3447),o="undefined"!==typeof IntersectionObserver;var a=new Map},234:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(5861),i=n(7757),s=n.n(i),o=n(1163),a=(n(7294),n(1945)),c=n(9592),l=n(1),u=n(9460),f=n.n(u),d=n(5893),p=function(e){var t=e.pictures,n=e.videos;return(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:f().title,children:"\u0424\u043e\u0442\u043e:"}),(0,d.jsx)("div",{className:f().gallery,children:t.length?t.map((function(e){return(0,d.jsx)("div",{className:f().item,children:(0,d.jsx)("img",{src:(0,l.v)(e.url)})},e.id)})):"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439 \u043d\u0435\u0442\u0443..."})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:f().title,children:"\u0412\u0438\u0434\u0435\u043e:"}),(0,d.jsx)("div",{className:f().gallery,children:n.length?n.map((function(e){return(0,d.jsx)("div",{className:f().item,children:(0,d.jsx)("video",{src:(0,l.v)(e.url),controls:!0,playsInline:!0})},e.id)})):"\u0412\u0438\u0434\u0435\u043e \u043d\u0435\u0442\u0443..."})]})]})},v=n(791),_=n(3484),h=function(e){var t=e.page,n=(0,o.useRouter)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(v.O,{paddingTop:"10px",children:[(0,d.jsx)(a.Z,{variant:"outline-light",onClick:function(){n.back()},children:"\u041d\u0430\u0437\u0430\u0434"}),(0,d.jsx)(_.D,{align:"center",children:"\u0413\u0430\u043b\u043b\u0435\u0440\u0435\u044f"}),(0,d.jsx)(p,{pictures:t.pictures,videos:t.videos})]})})};h.getInitialProps=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,(0,c.zt)({page:t.query.id}).then((function(e){n=e.data.page}));case 3:return e.abrupt("return",{page:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var g=h},1:function(e,t,n){"use strict";n.d(t,{v:function(){return r}});var r=function(e){return"https://ritual-4kgh.onrender.com"+e}},4147:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/gallery/[id]",function(){return n(234)}])},5475:function(e){e.exports={footer:"style_footer__2F7ob"}},9460:function(e){e.exports={item:"style_item__3dbX6",video:"style_video__29N6a",image:"style_image__rOyQF",title:"style_title__1Kf8n",gallery:"style_gallery__1HygP"}},6162:function(e){e.exports={info:"style_info__2uc8t",content:"style_content__23zyY",title:"style_title__1vnWC",title_text:"style_title_text__3w35F"}},4501:function(e){e.exports={logo:"style_logo__1OPv_",gray:"style_gray__bheLO"}},5920:function(e){e.exports={title:"style_title__1NYvy",start:"style_start__3t7QM",center:"style_center__lSIPU",end:"style_end__lvG92"}},1664:function(e,t,n){e.exports=n(2167)},682:function(e,t,n){"use strict";var r=n(4184),i=n.n(r),s=n(7294),o=n(600),a=n(5893);const c=s.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:r,...s},c)=>{const l=(0,o.vE)(e,"container"),u="string"===typeof t?`-${t}`:"-fluid";return(0,a.jsx)(n,{ref:c,...s,className:i()(r,t?`${l}${u}`:l)})}));c.displayName="Container",c.defaultProps={fluid:!1},t.Z=c}},function(e){e.O(0,[774,888,179],(function(){return t=4147,e(e.s=t);var t}));var t=e.O();_N_E=t}]);