"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeContext = exports.sizes = exports.themes = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var themes = {
  "default": 'default',
  dark: 'dark'
};
exports.themes = themes;
var sizes = {
  xsmall: 'xsmall',
  small: 'small',
  medium: 'medium',
  large: 'large'
};
exports.sizes = sizes;

var ThemeContext = _react["default"].createContext({
  theme: themes["default"],
  size: sizes.medium
});

exports.ThemeContext = ThemeContext;
