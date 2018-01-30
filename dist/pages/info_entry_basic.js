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

var InfoEntryBasic = function (_wepy$page) {
  _inherits(InfoEntryBasic, _wepy$page);

  function InfoEntryBasic() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InfoEntryBasic);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InfoEntryBasic.__proto__ || Object.getPrototypeOf(InfoEntryBasic)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '基本信息录入'
    }, _this.components = {
      toast: _wepyComToast2.default
    }, _this.mixins = [_test2.default], _this.data = {}, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InfoEntryBasic, [{
    key: 'onLoad',
    value: function onLoad() {
      var base64 = require('./../assets/images/base64.js');
      this.icon60 = base64.icon60;
    }
  }]);

  return InfoEntryBasic;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(InfoEntryBasic , 'pages/info_entry_basic'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9fZW50cnlfYmFzaWMuanMiXSwibmFtZXMiOlsiSW5mb0VudHJ5QmFzaWMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsInRvYXN0IiwibWl4aW5zIiwiZGF0YSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJldmVudHMiLCJiYXNlNjQiLCJyZXF1aXJlIiwiaWNvbjYwIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGM7Ozs7Ozs7Ozs7Ozs7O3NNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsTSxHQUFTLGdCLFFBRVRDLEksR0FBTyxFLFFBRVBDLFEsR0FBVztBQUNUQyxTQURTLGlCQUNGO0FBQ0wsZUFBTyxDQUFDLElBQUlDLElBQUosRUFBUjtBQUNEO0FBSFEsSyxRQU1YQyxPLEdBQVUsRSxRQUVWQyxNLEdBQVMsRTs7Ozs7NkJBRUE7QUFDUCxVQUFJQyxTQUFTQyxRQUFRLHlCQUFSLENBQWI7QUFDQSxXQUFLQyxNQUFMLEdBQWNGLE9BQU9FLE1BQXJCO0FBQ0Q7Ozs7RUF6QnlDLGVBQUtDLEk7O2tCQUE1QmYsYyIsImZpbGUiOiJpbmZvX2VudHJ5X2Jhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvRW50cnlCYXNpYyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WfuuacrOS/oeaBr+W9leWFpSdcbiAgICB9O1xuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICB0b2FzdDogVG9hc3RcbiAgICB9O1xuXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl07XG5cbiAgICBkYXRhID0ge307XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIG5vdyAoKSB7XG4gICAgICAgIHJldHVybiArbmV3IERhdGUoKVxuICAgICAgfVxuICAgIH07XG5cbiAgICBtZXRob2RzID0ge307XG5cbiAgICBldmVudHMgPSB7fTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGxldCBiYXNlNjQgPSByZXF1aXJlKCcuLi9hc3NldHMvaW1hZ2VzL2Jhc2U2NCcpXG4gICAgICB0aGlzLmljb242MCA9IGJhc2U2NC5pY29uNjBcbiAgICB9O1xuICB9XG4iXX0=