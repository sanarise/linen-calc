"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pillow = _interopRequireDefault(require("./pillow"));

var _sheet = _interopRequireDefault(require("./sheet"));

var _duvet = _interopRequireDefault(require("./duvet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productCalcs = {
  pillow: _pillow.default,
  sheet: _sheet.default,
  duvet: _duvet.default
};

var _default = productType => {
  const calculator = productCalcs[productType];

  if (!calculator) {
    throw new Error(`Unknown product type: "${productType}"`);
  }

  return calculator;
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYWxjdWxhdG9ycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0Q2FsY3MiLCJwaWxsb3ciLCJjYWxjUGlsbG93Iiwic2hlZXQiLCJjYWxjU2hlZXQiLCJkdXZldCIsImNhbGNEdXZldCIsInByb2R1Y3RUeXBlIiwiY2FsY3VsYXRvciIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNQSxZQUFZLEdBQUc7QUFDbkJDLEVBQUFBLE1BQU0sRUFBRUMsZUFEVztBQUVuQkMsRUFBQUEsS0FBSyxFQUFFQyxjQUZZO0FBR25CQyxFQUFBQSxLQUFLLEVBQUVDO0FBSFksQ0FBckI7O2VBTWdCQyxXQUFELElBQWlCO0FBQzlCLFFBQU1DLFVBQVUsR0FBR1IsWUFBWSxDQUFDTyxXQUFELENBQS9COztBQUNBLE1BQUksQ0FBQ0MsVUFBTCxFQUFpQjtBQUNmLFVBQU0sSUFBSUMsS0FBSixDQUFXLDBCQUF5QkYsV0FBWSxHQUFoRCxDQUFOO0FBQ0Q7O0FBQ0QsU0FBT0MsVUFBUDtBQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2FsY1BpbGxvdyBmcm9tICcuL3BpbGxvdyc7XG5pbXBvcnQgY2FsY1NoZWV0IGZyb20gJy4vc2hlZXQnO1xuaW1wb3J0IGNhbGNEdXZldCBmcm9tICcuL2R1dmV0JztcblxuY29uc3QgcHJvZHVjdENhbGNzID0ge1xuICBwaWxsb3c6IGNhbGNQaWxsb3csXG4gIHNoZWV0OiBjYWxjU2hlZXQsXG4gIGR1dmV0OiBjYWxjRHV2ZXQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCAocHJvZHVjdFR5cGUpID0+IHtcbiAgY29uc3QgY2FsY3VsYXRvciA9IHByb2R1Y3RDYWxjc1twcm9kdWN0VHlwZV07XG4gIGlmICghY2FsY3VsYXRvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBwcm9kdWN0IHR5cGU6IFwiJHtwcm9kdWN0VHlwZX1cImApO1xuICB9XG4gIHJldHVybiBjYWxjdWxhdG9yO1xufTtcbiJdfQ==