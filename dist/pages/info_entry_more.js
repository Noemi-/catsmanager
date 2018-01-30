'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoEntryMore = function (_wepy$page) {
  _inherits(InfoEntryMore, _wepy$page);

  function InfoEntryMore() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InfoEntryMore);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InfoEntryMore.__proto__ || Object.getPrototypeOf(InfoEntryMore)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '补充信息录入'
    }, _this.components = {
      toast: _wepyComToast2.default
    }, _this.mixins = [_test2.default], _this.data = {}, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InfoEntryMore, [{
    key: 'onLoad',
    value: function onLoad() {
      var base64 = require('./../assets/images/base64.js');
      this.icon60 = base64.icon60;
    }
  }]);

  return InfoEntryMore;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(InfoEntryMore , 'pages/info_entry_more'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9fZW50cnlfbW9yZS5qcyJdLCJuYW1lcyI6WyJJbmZvRW50cnlNb3JlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJ0b2FzdCIsIm1peGlucyIsImRhdGEiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJtZXRob2RzIiwiZXZlbnRzIiwiYmFzZTY0IiwicmVxdWlyZSIsImljb242MCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBSWJDLE0sR0FBUyxnQixRQUVUQyxJLEdBQU8sRSxRQUVQQyxRLEdBQVc7QUFDVEMsU0FEUyxpQkFDRjtBQUNMLGVBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDRDtBQUhRLEssUUFNWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTLEU7Ozs7OzZCQUVBO0FBQ1AsVUFBSUMsU0FBU0MsUUFBUSx5QkFBUixDQUFiO0FBQ0EsV0FBS0MsTUFBTCxHQUFjRixPQUFPRSxNQUFyQjtBQUNEOzs7O0VBekJ3QyxlQUFLQyxJOztrQkFBM0JmLGEiLCJmaWxlIjoiaW5mb19lbnRyeV9tb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvRW50cnlNb3JlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6KGl5YWF5L+h5oGv5b2V5YWlJ1xuICAgIH07XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIHRvYXN0OiBUb2FzdFxuICAgIH07XG5cbiAgICBtaXhpbnMgPSBbdGVzdE1peGluXTtcblxuICAgIGRhdGEgPSB7fTtcblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgbm93ICgpIHtcbiAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXG4gICAgICB9XG4gICAgfTtcblxuICAgIG1ldGhvZHMgPSB7fTtcblxuICAgIGV2ZW50cyA9IHt9O1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgbGV0IGJhc2U2NCA9IHJlcXVpcmUoJy4uL2Fzc2V0cy9pbWFnZXMvYmFzZTY0JylcbiAgICAgIHRoaXMuaWNvbjYwID0gYmFzZTY0Lmljb242MFxuICAgIH07XG4gIH1cbiJdfQ==