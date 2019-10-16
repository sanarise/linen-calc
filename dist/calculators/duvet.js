"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fabricTypes = _interopRequireDefault(require("../../data/fabric-types.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = json => {
  return {
    type: 'duvet',
    along: json.width,
    across: json.height
  };
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWxjdWxhdG9ycy9kdXZldC5qcyJdLCJuYW1lcyI6WyJqc29uIiwidHlwZSIsImFsb25nIiwid2lkdGgiLCJhY3Jvc3MiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUVnQkEsSUFBRCxJQUFVO0FBQ3ZCLFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFLE9BREQ7QUFFTEMsSUFBQUEsS0FBSyxFQUFFRixJQUFJLENBQUNHLEtBRlA7QUFHTEMsSUFBQUEsTUFBTSxFQUFFSixJQUFJLENBQUNLO0FBSFIsR0FBUDtBQUtELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmFicmljVHlwZXMgZnJvbSAnLi4vLi4vZGF0YS9mYWJyaWMtdHlwZXMuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IChqc29uKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ2R1dmV0JyxcbiAgICBhbG9uZzoganNvbi53aWR0aCxcbiAgICBhY3Jvc3M6IGpzb24uaGVpZ2h0XG4gIH07XG59O1xuIl19