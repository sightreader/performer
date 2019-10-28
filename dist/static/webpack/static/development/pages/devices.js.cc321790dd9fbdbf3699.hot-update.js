webpackHotUpdate("static\\development\\pages\\devices.js",{

/***/ "./src/Client/Client.ts":
/*!******************************!*\
  !*** ./src/Client/Client.ts ***!
  \******************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _ygoe_msgpack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ygoe/msgpack */ "./node_modules/@ygoe/msgpack/msgpack.js");
/* harmony import */ var _ygoe_msgpack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ygoe_msgpack__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Commands_Command__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Commands/Command */ "./src/Client/Commands/Command.ts");








var Client =
/*#__PURE__*/
function () {
  function Client() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Client);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "socket", void 0);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Client, [{
    key: "connect",
    value: function () {
      var _connect = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this = this;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (true) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                return _context2.abrupt("return", new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
                  window.client = _this;
                  _this.socket = new WebSocket("ws://".concat(location.host, ":55367"));
                  console.log("Opening websocket connection...");

                  _this.socket.onerror = function (event) {
                    console.error("[Websocket] Errored:", event);
                  };

                  _this.socket.onclose = function (event) {
                    console.log("[Websocket] Closed:", event);
                  };

                  _this.socket.onopen = function (event) {
                    console.log("[Websocket] Opened:", event);
                    resolve();
                  };

                  _this.socket.onmessage =
                  /*#__PURE__*/
                  function () {
                    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    /*#__PURE__*/
                    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
                      var message, command;
                      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.t0 = _ygoe_msgpack__WEBPACK_IMPORTED_MODULE_6___default.a;
                              _context.next = 3;
                              return new Response(event.data).arrayBuffer();

                            case 3:
                              _context.t1 = _context.sent;
                              message = _context.t0.deserialize.call(_context.t0, _context.t1);
                              command = _Commands_Command__WEBPACK_IMPORTED_MODULE_7__["EnumerateMidiDevicesResponse"].FromMessagePack(message);
                              console.log("[Websocket] Received:", message);

                            case 7:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x) {
                      return _ref.apply(this, arguments);
                    };
                  }();
                }));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function connect() {
        return _connect.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: "Socket",
    get: function get() {
      return this.socket;
    }
  }]);

  return Client;
}();

/***/ })

})
//# sourceMappingURL=devices.js.cc321790dd9fbdbf3699.hot-update.js.map