"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _fs = _interopRequireDefault(require("fs"));

var _calculators = _interopRequireDefault(require("./calculators"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const multiplyProducts = (product, times) => {};

const calcLinen = inputPath => {
  const inputJson = JSON.parse(_fs.default.readFileSync(inputPath, 'utf-8'));
  const outputJson = inputJson.reduce((acc, productSpec) => {
    const productJson = (0, _calculators.default)(productSpec.type)(productSpec);
    const count = productSpec.count || 1;
    return acc.concat(count > 1 ? _lodash.default.times(count, _lodash.default.constant(productJson)) : productJson);
  }, []);
  console.log(outputJson); //console.log(_.flatten(outputJson));
};

var _default = calcLinen;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJtdWx0aXBseVByb2R1Y3RzIiwicHJvZHVjdCIsInRpbWVzIiwiY2FsY0xpbmVuIiwiaW5wdXRQYXRoIiwiaW5wdXRKc29uIiwiSlNPTiIsInBhcnNlIiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJvdXRwdXRKc29uIiwicmVkdWNlIiwiYWNjIiwicHJvZHVjdFNwZWMiLCJwcm9kdWN0SnNvbiIsInR5cGUiLCJjb3VudCIsImNvbmNhdCIsIl8iLCJjb25zdGFudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLE1BQU1BLGdCQUFnQixHQUFHLENBQUNDLE9BQUQsRUFBVUMsS0FBVixLQUFvQixDQUU1QyxDQUZEOztBQUlBLE1BQU1DLFNBQVMsR0FBSUMsU0FBRCxJQUFlO0FBQy9CLFFBQU1DLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQUdDLFlBQUgsQ0FBZ0JMLFNBQWhCLEVBQTJCLE9BQTNCLENBQVgsQ0FBbEI7QUFFQSxRQUFNTSxVQUFVLEdBQUdMLFNBQVMsQ0FBQ00sTUFBVixDQUFpQixDQUFDQyxHQUFELEVBQU1DLFdBQU4sS0FBc0I7QUFDeEQsVUFBTUMsV0FBVyxHQUFHLDBCQUFjRCxXQUFXLENBQUNFLElBQTFCLEVBQWdDRixXQUFoQyxDQUFwQjtBQUVBLFVBQU1HLEtBQUssR0FBR0gsV0FBVyxDQUFDRyxLQUFaLElBQXFCLENBQW5DO0FBQ0EsV0FBT0osR0FBRyxDQUFDSyxNQUFKLENBQVdELEtBQUssR0FBRyxDQUFSLEdBQVlFLGdCQUFFaEIsS0FBRixDQUFRYyxLQUFSLEVBQWVFLGdCQUFFQyxRQUFGLENBQVdMLFdBQVgsQ0FBZixDQUFaLEdBQXNEQSxXQUFqRSxDQUFQO0FBQ0QsR0FMa0IsRUFLaEIsRUFMZ0IsQ0FBbkI7QUFPQU0sRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlYLFVBQVosRUFWK0IsQ0FXL0I7QUFDRCxDQVpEOztlQWFlUCxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgZ2V0Q2FsY3VsYXRvciBmcm9tICcuL2NhbGN1bGF0b3JzJztcblxuY29uc3QgbXVsdGlwbHlQcm9kdWN0cyA9IChwcm9kdWN0LCB0aW1lcykgPT4ge1xuXG59O1xuXG5jb25zdCBjYWxjTGluZW4gPSAoaW5wdXRQYXRoKSA9PiB7XG4gIGNvbnN0IGlucHV0SnNvbiA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGlucHV0UGF0aCwgJ3V0Zi04JykpO1xuXG4gIGNvbnN0IG91dHB1dEpzb24gPSBpbnB1dEpzb24ucmVkdWNlKChhY2MsIHByb2R1Y3RTcGVjKSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdEpzb24gPSBnZXRDYWxjdWxhdG9yKHByb2R1Y3RTcGVjLnR5cGUpKHByb2R1Y3RTcGVjKTtcblxuICAgIGNvbnN0IGNvdW50ID0gcHJvZHVjdFNwZWMuY291bnQgfHwgMTtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChjb3VudCA+IDEgPyBfLnRpbWVzKGNvdW50LCBfLmNvbnN0YW50KHByb2R1Y3RKc29uKSkgOiBwcm9kdWN0SnNvbik7XG4gIH0sIFtdKTtcblxuICBjb25zb2xlLmxvZyhvdXRwdXRKc29uKTtcbiAgLy9jb25zb2xlLmxvZyhfLmZsYXR0ZW4ob3V0cHV0SnNvbikpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNhbGNMaW5lbjtcbiJdfQ==