module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      props = await fetch(`/_next/data${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/devices.tsx":
/*!***************************!*\
  !*** ./pages/devices.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DevicesPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Navbar */ "./src/Navbar.tsx");
/* harmony import */ var _src_MidiDevicesPane__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/MidiDevicesPane */ "./src/MidiDevicesPane.tsx");
var _jsxFileName = "C:\\code\\sightreader\\performer\\pages\\devices.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  containerRoot: {
    paddingTop: theme.spacing(3)
  }
}));
function DevicesPage() {
  const classes = useStyles();
  const {
    0: anchorEl,
    1: setAnchorEl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const open = Boolean(anchorEl);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_src_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
    maxWidth: "md",
    className: classes.containerRoot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_src_MidiDevicesPane__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })));
}

/***/ }),

/***/ "./src/Client/Client.ts":
/*!******************************!*\
  !*** ./src/Client/Client.ts ***!
  \******************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _ygoe_msgpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ygoe/msgpack */ "@ygoe/msgpack");
/* harmony import */ var _ygoe_msgpack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ygoe_msgpack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Commands_Command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Commands/Command */ "./src/Client/Commands/Command.ts");




class Client {
  constructor() {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "socket", void 0);
  }

  get Socket() {
    return this.socket;
  }

  async connect() {
    if (true) {
      return;
    }

    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
      window.client = this;
      this.socket = new WebSocket(`ws://${location.host}:55367`);
      console.log("Opening websocket connection...");

      this.socket.onerror = event => {
        console.error("[Websocket] Errored:", event);
      };

      this.socket.onclose = event => {
        console.log("[Websocket] Closed:", event);
      };

      this.socket.onopen = event => {
        console.log("[Websocket] Opened:", event);
        resolve();
      };

      this.socket.onmessage = async event => {
        var message = _ygoe_msgpack__WEBPACK_IMPORTED_MODULE_2___default.a.deserialize((await new Response(event.data).arrayBuffer()));
        var command = _Commands_Command__WEBPACK_IMPORTED_MODULE_3__["EnumerateMidiDevicesResponse"].FromMessagePack(message);
        console.log("[Websocket] Received:", message);
      };
    });
  }

}

/***/ }),

/***/ "./src/Client/Commands/Command.ts":
/*!****************************************!*\
  !*** ./src/Client/Commands/Command.ts ***!
  \****************************************/
/*! exports provided: Command, RequestResponse, EnumerateMidiDevicesRequest, EnumerateMidiDevicesResponse, SelectMidiDevicesRequest, SelectMidiDevicesResponse, EnumerateScoresRequest, EnumerateScoresResponse, LoadScoreRequest, LoadScoreResponse, SetScoreDisplayPositionRequest, SetScoreDisplayPositionResponse, SetPlaybackPositionRequest, SetPlaybackPositionResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestResponse", function() { return RequestResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumerateMidiDevicesRequest", function() { return EnumerateMidiDevicesRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumerateMidiDevicesResponse", function() { return EnumerateMidiDevicesResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMidiDevicesRequest", function() { return SelectMidiDevicesRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMidiDevicesResponse", function() { return SelectMidiDevicesResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumerateScoresRequest", function() { return EnumerateScoresRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumerateScoresResponse", function() { return EnumerateScoresResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadScoreRequest", function() { return LoadScoreRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadScoreResponse", function() { return LoadScoreResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetScoreDisplayPositionRequest", function() { return SetScoreDisplayPositionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetScoreDisplayPositionResponse", function() { return SetScoreDisplayPositionResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPlaybackPositionRequest", function() { return SetPlaybackPositionRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPlaybackPositionResponse", function() { return SetPlaybackPositionResponse; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");


let Command;

(function (Command) {
  Command[Command["EnumerateMidiDevices"] = 0] = "EnumerateMidiDevices";
  Command[Command["SelectMidiDevices"] = 1] = "SelectMidiDevices";
  Command[Command["EnumerateScores"] = 2] = "EnumerateScores";
  Command[Command["LoadScore"] = 3] = "LoadScore";
  Command[Command["SetScoreDisplayPosition"] = 4] = "SetScoreDisplayPosition";
  Command[Command["SetPlaybackPosition"] = 5] = "SetPlaybackPosition";
})(Command || (Command = {}));

let RequestResponse;

(function (RequestResponse) {
  RequestResponse[RequestResponse["Request"] = 0] = "Request";
  RequestResponse[RequestResponse["Response"] = 1] = "Response";
})(RequestResponse || (RequestResponse = {}));

class EnumerateMidiDevicesRequest {
  constructor() {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Command", Command.EnumerateMidiDevices);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Kind", RequestResponse.Request);
  }

}
class EnumerateMidiDevicesResponse {
  constructor(init) {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Command", Command.EnumerateMidiDevices);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Kind", RequestResponse.Request);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Error", "");

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "InputDeviceNames", []);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "OutputDeviceNames", []);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "EnabledInputDeviceNames", []);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "EnabledOutputDeviceNames", []);

    _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this, init);
  }

  static FromMessagePack(decoded) {
    return new EnumerateMidiDevicesResponse(decoded);
  }

}
class SelectMidiDevicesRequest {
  constructor(init) {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Command", Command.SelectMidiDevices);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Kind", RequestResponse.Request);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "InputDeviceNames", []);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "OutputDeviceNames", []);

    _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this, init);
  }

}
class SelectMidiDevicesResponse {
  constructor(init) {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Command", Command.SelectMidiDevices);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Kind", RequestResponse.Response);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Error", "");

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "InputDeviceNames", []);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "OutputDeviceNames", []);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "EnabledInputDeviceNames", []);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "EnabledOutputDeviceNames", []);

    _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this, init);
  }

  static FromMessagePack(decoded) {
    return new SelectMidiDevicesResponse(decoded);
  }

}
class EnumerateScoresRequest {
  constructor() {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Command", Command.EnumerateScores);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Kind", RequestResponse.Request);
  }

}
class EnumerateScoresResponse {
  constructor(init) {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Command", Command.EnumerateScores);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Kind", RequestResponse.Response);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Error", "");

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "FilePaths", []);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "ActiveScoreFilePath", "");

    _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this, init);
  }

  static FromMessagePack(decoded) {
    return new EnumerateScoresResponse(decoded);
  }

}
class LoadScoreRequest {
  constructor(init) {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Command", Command.LoadScore);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Kind", RequestResponse.Request);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "FilePath", "");

    _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this, init);
  }

}
class LoadScoreResponse {
  constructor(init) {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Command", Command.LoadScore);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Kind", RequestResponse.Response);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Error", "");

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Score", new Uint8Array(0));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "ActiveScoreFilePath", "");

    _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this, init);
  }

  static FromMessagePack(decoded) {
    return new LoadScoreResponse(decoded);
  }

}
class SetScoreDisplayPositionRequest {
  constructor(init) {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Command", Command.SetScoreDisplayPosition);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Kind", RequestResponse.Request);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "MeasureNumbers", []);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "GroupIndices", []);

    _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this, init);
  }

  static FromMessagePack(decoded) {
    return new SetScoreDisplayPositionRequest(decoded);
  }

}
class SetScoreDisplayPositionResponse {
  constructor(init) {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Command", Command.SetScoreDisplayPosition);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Kind", RequestResponse.Response);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Error", "");

    _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this, init);
  }

  static FromMessagePack(decoded) {
    return new SetScoreDisplayPositionResponse(decoded);
  }

}
class SetPlaybackPositionRequest {
  constructor(init) {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Command", Command.SetPlaybackPosition);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Kind", RequestResponse.Request);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "MeasureNumber", 0);

    _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this, init);
  }

}
class SetPlaybackPositionResponse {
  constructor(init) {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Command", Command.SetPlaybackPosition);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Kind", RequestResponse.Response);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "Error", "");

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "MeasureNumber", 0);

    _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(this, init);
  }

  static FromMessagePack(decoded) {
    return new SetPlaybackPositionResponse(decoded);
  }

}

/***/ }),

/***/ "./src/MidiDevicesPane.tsx":
/*!*********************************!*\
  !*** ./src/MidiDevicesPane.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MidiDevicesPane; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SightReaderClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SightReaderClient */ "./src/SightReaderClient.ts");
/* harmony import */ var _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Client/Commands/Command */ "./src/Client/Commands/Command.ts");
var _jsxFileName = "C:\\code\\sightreader\\performer\\src\\MidiDevicesPane.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  containerRoot: {
    padding: theme.spacing(1)
  },
  containerIo: {
    padding: theme.spacing(3, 2),
    background: theme.palette.primary.light,
    flexGrow: 1,
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  containerInput: {
    padding: theme.spacing(3, 2)
  },
  containerOutput: {
    padding: theme.spacing(3, 2)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1)
  }
}));
function MidiDevicesPane() {
  const classes = useStyles();
  const {
    0: midiDevices,
    1: setMidiDevices
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_6__["EnumerateMidiDevicesResponse"]());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _SightReaderClient__WEBPACK_IMPORTED_MODULE_5__["SightReaderClient"].Instance.EnumerateMidiDevices().then(midiDevices => {
      setMidiDevices(midiDevices);
    });
  }, []);

  const onInputDeviceChecked = toggledDeviceName => {
    _SightReaderClient__WEBPACK_IMPORTED_MODULE_5__["SightReaderClient"].Instance.SelectMidiDevices([toggledDeviceName], []).then(midiDevices => {
      setMidiDevices(midiDevices);
    });
  };

  const onOutputDeviceChecked = toggledDeviceName => {
    _SightReaderClient__WEBPACK_IMPORTED_MODULE_5__["SightReaderClient"].Instance.SelectMidiDevices([], [toggledDeviceName]).then(midiDevices => {
      setMidiDevices(midiDevices);
    });
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h5",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "MIDI Devices"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "subtitle1",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Changes made on this page apply instantly."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex",
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.containerIo, classes.containerOutput),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h6",
    component: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Inputs"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, midiDevices.InputDeviceNames.map((deviceName, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControlLabel"], {
    key: deviceName,
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      checked: !!midiDevices.EnabledInputDeviceNames[index],
      onChange: () => onInputDeviceChecked(deviceName),
      value: deviceName,
      color: "secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }),
    label: deviceName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.containerIo, classes.containerOutput),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h6",
    component: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Outputs"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, midiDevices.OutputDeviceNames.map((deviceName, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControlLabel"], {
    key: deviceName,
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      checked: !!midiDevices.EnabledOutputDeviceNames[index],
      onChange: () => onOutputDeviceChecked(deviceName),
      value: deviceName,
      color: "secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }),
    label: deviceName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }))))));
}

/***/ }),

/***/ "./src/Navbar.tsx":
/*!************************!*\
  !*** ./src/Navbar.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_SettingsInputSvideoTwoTone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/SettingsInputSvideoTwoTone */ "@material-ui/icons/SettingsInputSvideoTwoTone");
/* harmony import */ var _material_ui_icons_SettingsInputSvideoTwoTone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SettingsInputSvideoTwoTone__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_MenuBookTwoTone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/MenuBookTwoTone */ "@material-ui/icons/MenuBookTwoTone");
/* harmony import */ var _material_ui_icons_MenuBookTwoTone__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MenuBookTwoTone__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_TouchAppTwoTone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/TouchAppTwoTone */ "@material-ui/icons/TouchAppTwoTone");
/* harmony import */ var _material_ui_icons_TouchAppTwoTone__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_TouchAppTwoTone__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! screenfull */ "screenfull");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_FullscreenExitTwoTone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/FullscreenExitTwoTone */ "@material-ui/icons/FullscreenExitTwoTone");
/* harmony import */ var _material_ui_icons_FullscreenExitTwoTone__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FullscreenExitTwoTone__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_FullscreenTwoTone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/FullscreenTwoTone */ "@material-ui/icons/FullscreenTwoTone");
/* harmony import */ var _material_ui_icons_FullscreenTwoTone__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FullscreenTwoTone__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\code\\sightreader\\performer\\src\\Navbar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(t => ({
  activeIcon: {
    color: t.palette.secondary.contrastText
  },
  divider: {
    marginLeft: t.spacing(0)
  }
}));
function Navbar(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  const classes = useStyles();
  const {
    0: anchorEl,
    1: setAnchorEl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: isFullScreen,
    1: setFullScreen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(screenfull__WEBPACK_IMPORTED_MODULE_11___default.a.isEnabled && screenfull__WEBPACK_IMPORTED_MODULE_11___default.a.isFullscreen);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var fullScreenApi = screenfull__WEBPACK_IMPORTED_MODULE_11___default.a;

    if (isFullScreen && !fullScreenApi.isFullscreen) {
      fullScreenApi.request();
    } else if (!isFullScreen && fullScreenApi.isFullscreen) {
      fullScreenApi.exit();
    }
  }, [isFullScreen]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    "data-name": "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "dense",
    style: {
      height: 50
    },
    disableGutters: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, props.leftBarComponents ? props.leftBarComponents : null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: () => setFullScreen(!isFullScreen),
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, isFullScreen ? __jsx(_material_ui_icons_FullscreenExitTwoTone__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: classes.activeIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }) : __jsx(_material_ui_icons_FullscreenTwoTone__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
    orientation: "vertical",
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: handleMenu,
    color: "secondary",
    className: router.pathname === "/" ? classes.activeIcon : undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_material_ui_icons_TouchAppTwoTone__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/scores",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: handleMenu,
    color: "secondary",
    className: router.pathname === "/scores" ? classes.activeIcon : undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(_material_ui_icons_MenuBookTwoTone__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/devices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: handleMenu,
    color: "secondary",
    className: router.pathname === "/devices" ? classes.activeIcon : undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(_material_ui_icons_SettingsInputSvideoTwoTone__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })))))));
}
Navbar.defaultProps = {
  leftBarComponents: null
};

/***/ }),

/***/ "./src/SightReaderClient.ts":
/*!**********************************!*\
  !*** ./src/SightReaderClient.ts ***!
  \**********************************/
/*! exports provided: SightReaderClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SightReaderClient", function() { return SightReaderClient; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _Client_Client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Client/Client */ "./src/Client/Client.ts");
/* harmony import */ var _ygoe_msgpack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ygoe/msgpack */ "@ygoe/msgpack");
/* harmony import */ var _ygoe_msgpack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ygoe_msgpack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Client/Commands/Command */ "./src/Client/Commands/Command.ts");






class SightReaderClient {
  constructor() {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "verovio", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "client", new _Client_Client__WEBPACK_IMPORTED_MODULE_3__["Client"]());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "score", "");

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "onSetScoreDisplayPositionRequested", () => {});
  }

  static get Instance() {
    return SightReaderClient.instance;
  }

  async setSetScoreDisplayPositionRequestedCallback(onSetScoreDisplayPositionRequested) {
    this.onSetScoreDisplayPositionRequested = onSetScoreDisplayPositionRequested;
  }

  async getVerovio() {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a((resolve, reject) => {
      if (!this.verovio) {
        this.verovio = new window.verovio.toolkit();
      }

      resolve(this.verovio);
    });
  }

  async setupScore(verovioOptions) {
    return this.getVerovio().then(verovio => {
      var options = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        font: "Bravura",
        slurThickness: 0.3,
        spacingNonLinear: 0.7,
        stemWidth: 0.3,
        svgViewBox: true,
        noHeader: true,
        noFooter: true,
        svgBoundingBoxes: false,
        breaks: "auto",
        pageMarginBottom: 0,
        pageMarginLeft: 10,
        pageMarginRight: 0,
        pageMarginTop: 0,
        scale: 1000
      }, verovioOptions);

      console.log("Setting up Verovio with options:", options);
      this.verovio.setOptions(options);
      verovio.loadData(this.score);
    });
  }

  async renderScore(pageNumber) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a((resolve, reject) => {
      return this.getVerovio().then(verovio => {
        console.log("verovio.rendertsvg:", verovio);
        window.verovio3 = verovio;
        resolve(verovio.renderToSVG(pageNumber));
      });
    });
  }

  get Score() {
    return this.score;
  }

  setScore(score) {
    this.score = new TextDecoder("utf-8").decode(score);
  }

  async connectCheck() {
    if (!this.client.Socket || this.client.Socket.readyState !== this.client.Socket.OPEN) {
      await this.client.connect();
      this.addMessageHandlerForSetScoreDisplayPosition();
    }
  }

  addMessageHandlerForSetScoreDisplayPosition() {
    var self = this;

    async function onResponse(event) {
      const buffer = await new Response(event.data).arrayBuffer();
      var message = _ygoe_msgpack__WEBPACK_IMPORTED_MODULE_4___default.a.deserialize(buffer);

      if (message.Command !== _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["Command"].SetScoreDisplayPosition && message.Kind !== _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["RequestResponse"].Request) {
        return;
      }

      if (typeof self.onSetScoreDisplayPositionRequested === "function") {
        var command = _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["SetScoreDisplayPositionRequest"].FromMessagePack(message);
        self.onSetScoreDisplayPositionRequested(command);
      }
    }

    console.log("Adding message handler for set score display position...");
    this.client.Socket.addEventListener("message", onResponse);
  }

  async EnumerateMidiDevices() {
    return this.SendRequest(new _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["EnumerateMidiDevicesRequest"](), _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["Command"].SelectMidiDevices, _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["EnumerateMidiDevicesResponse"]);
  }

  async SelectMidiDevices(inputDeviceNames, outputDeviceNames) {
    return this.SendRequest(new _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["SelectMidiDevicesRequest"]({
      InputDeviceNames: inputDeviceNames,
      OutputDeviceNames: outputDeviceNames
    }), _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["Command"].SelectMidiDevices, _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["SelectMidiDevicesResponse"]);
  }

  async EnumerateScores() {
    return this.SendRequest(new _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["EnumerateScoresRequest"](), _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["Command"].EnumerateScores, _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["EnumerateScoresResponse"]);
  }

  async LoadScore(scoreFilePath) {
    var command = new _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["LoadScoreRequest"]();
    command.FilePath = scoreFilePath;
    return this.SendRequest(command, _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["Command"].LoadScore, _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["LoadScoreResponse"]);
  }

  ConstructCommandResponse(instance, message) {
    switch (instance.constructor) {
      case _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["EnumerateMidiDevicesResponse"]:
        return _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["EnumerateMidiDevicesResponse"].FromMessagePack(message);

      case _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["SelectMidiDevicesResponse"]:
        return _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["SelectMidiDevicesResponse"].FromMessagePack(message);

      case _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["EnumerateScoresResponse"]:
        return _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["EnumerateScoresResponse"].FromMessagePack(message);

      case _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["LoadScoreResponse"]:
        return _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["LoadScoreResponse"].FromMessagePack(message);

      default:
        console.error("Unable to construct command response for (instance, message):", instance, message);
        break;
    }
  }

  async SendRequest(requestCommand, command, ResponseType) {
    await this.connectCheck();
    var self = this;
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a((resolve, reject) => {
      async function onResponse(event) {
        const buffer = await new Response(event.data).arrayBuffer();
        var message = _ygoe_msgpack__WEBPACK_IMPORTED_MODULE_4___default.a.deserialize(buffer);

        if (message.Command !== command && message.Kind !== _Client_Commands_Command__WEBPACK_IMPORTED_MODULE_5__["RequestResponse"].Response) {
          return;
        }

        self.client.Socket.removeEventListener("message", onResponse);
        resolve(self.ConstructCommandResponse(new ResponseType(), message));
      }

      this.client.Socket.addEventListener("message", onResponse);
      console.log("[Socket -> Peer] Sending:", requestCommand);
      this.client.Socket.send(_ygoe_msgpack__WEBPACK_IMPORTED_MODULE_4___default.a.serialize(requestCommand));
    });
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(SightReaderClient, "instance", new SightReaderClient());

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/devices.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\code\sightreader\performer\pages\devices.tsx */"./pages/devices.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/FullscreenExitTwoTone":
/*!***********************************************************!*\
  !*** external "@material-ui/icons/FullscreenExitTwoTone" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FullscreenExitTwoTone");

/***/ }),

/***/ "@material-ui/icons/FullscreenTwoTone":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/FullscreenTwoTone" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FullscreenTwoTone");

/***/ }),

/***/ "@material-ui/icons/MenuBookTwoTone":
/*!*****************************************************!*\
  !*** external "@material-ui/icons/MenuBookTwoTone" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MenuBookTwoTone");

/***/ }),

/***/ "@material-ui/icons/SettingsInputSvideoTwoTone":
/*!****************************************************************!*\
  !*** external "@material-ui/icons/SettingsInputSvideoTwoTone" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SettingsInputSvideoTwoTone");

/***/ }),

/***/ "@material-ui/icons/TouchAppTwoTone":
/*!*****************************************************!*\
  !*** external "@material-ui/icons/TouchAppTwoTone" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/TouchAppTwoTone");

/***/ }),

/***/ "@ygoe/msgpack":
/*!********************************!*\
  !*** external "@ygoe/msgpack" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ygoe/msgpack");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "screenfull":
/*!*****************************!*\
  !*** external "screenfull" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("screenfull");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=devices.js.map