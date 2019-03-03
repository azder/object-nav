(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  /** Created by azder on 2019-03-02. */
  var VAL = Symbol();

  var nav = function nav(val) {
    return new Proxy(Object.assign(function () {
      return void 0;
    }, _defineProperty({}, VAL, val)), {
      apply: function apply(tar) {
        return Reflect.has(tar, VAL) ? tar[VAL] : tar;
      },
      get: function get(tar, key) {
        tar = Reflect.has(tar, VAL) ? tar[VAL] : tar;
        return nav(null === tar || void 0 === tar ? tar : tar[key]);
      }
    });
  }; // noinspection JSUnusedGlobalSymbols


  var _default = nav;
  _exports.default = _default;
});