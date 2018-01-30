'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _constant = require('./utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/home', 'pages/mine', 'pages/index', 'pages/info_entry_basic', 'pages/info_entry_cats', 'pages/info_entry_more'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '猫管家',
        navigationBarTextStyle: 'black',
        backgroundColor: '#eee'
      },
      tabBar: {
        color: '#7A7E83',
        selectedColor: '#c55e44',
        borderStyle: 'black',
        backgroundColor: '#ffffff',
        list: [{
          pagePath: 'pages/home',
          text: '首页',
          iconPath: 'images/icon_home.png',
          selectedIconPath: 'images/icon_home_active.png'
        }, {
          pagePath: 'pages/index',
          text: '商城',
          iconPath: 'images/icon_shop_cart.png',
          selectedIconPath: 'images/icon_shop_cart_active.png'
        }, {
          pagePath: 'pages/mine',
          text: '我的',
          iconPath: 'images/icon_info.png',
          selectedIconPath: 'images/icon_info_active.png'
        }]
      },
      debug: true
    };
    _this.globalData = {
      userInfo: null,
      appid: 'wx4327967162a53671',
      secret: ''
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      var that = this;

      //    //用户信息
      //    let userSpecialInfo = wepy.getStorageSync(USER_SPECICAL_INFO) || {};
      //
      //    // 用户普通信息
      //    let userInfo = wepy.getStorageSync(USER_INFO) || {};
      //
      //    //如果信息过期
      //    if ((!userSpecialInfo.openid || (userSpecialInfo.expires_in || Date.now()) < (Date.now() + 600)) && (!userInfo.nickName)) {
      //      let res = await wepy.login();
      //
      //      if (res.code) {
      //        let d = that.globalData; //这里存储了appid、secret、token串    
      //        //存储userInfo 
      //        let c = await wepy.getUserInfo();
      //        wepy.setStorageSync(USER_INFO, c.userInfo);
      //
      //        //存储系统信息 
      //        let systemInfo = wepy.getSystemInfoSync();
      //        wepy.setStorageSync(SYSTEM_INFO, systemInfo);
      //
      //        wxJsCode2Session({
      //          query: {
      //            jsCode: res.code,
      //            nickName: c.userInfo.nickName
      //          }
      //        }).then(resp => {
      //          var rlt = resp.data;
      //          console.log("wxJsCode2Session..." + JSON.stringify(rlt));
      //          if (rlt.result) {
      //            var data = rlt.data;
      //            if (data.openid) {
      //              let obj = {};
      //              obj.openid = data.openid;
      //              obj.expires_in = Date.now() + data.expires_in;
      //              //存储openid 
      //              wepy.setStorageSync(USER_SPECICAL_INFO, obj);
      //            }
      //          } else {
      //            let obj = {};
      //            obj.openid = "oeuj50KHMqsh5kYZYWQJuwmY5yG0";
      //            obj.expires_in = "7200";
      //            //存储openid 
      //            wepy.setStorageSync(USER_SPECICAL_INFO, obj);
      //          }
      //        });
      //
      //        let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
      //
      //      } else {
      //        console.log('获取用户登录态失败！' + res.errMsg)
      //      }
    }
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJib3JkZXJTdHlsZSIsImxpc3QiLCJwYWdlUGF0aCIsInRleHQiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJkZWJ1ZyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsImFwcGlkIiwic2VjcmV0IiwidXNlIiwidGhhdCIsImNiIiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7O0FBMERFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUFqRGZBLE1BaURlLEdBakROO0FBQ1BDLGFBQU8sQ0FDTCxZQURLLEVBRUwsWUFGSyxFQUdMLGFBSEssRUFJTCx3QkFKSyxFQUtMLHVCQUxLLEVBTUwsdUJBTkssQ0FEQTtBQVNQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsS0FIbEI7QUFJTkMsZ0NBQXdCLE9BSmxCO0FBS05DLHlCQUFpQjtBQUxYLE9BVEQ7QUFnQlBDLGNBQVE7QUFDTkMsZUFBTyxTQUREO0FBRU5DLHVCQUFlLFNBRlQ7QUFHTkMscUJBQWEsT0FIUDtBQUlOSix5QkFBaUIsU0FKWDtBQUtOSyxjQUFNLENBQ0o7QUFDRUMsb0JBQVUsWUFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLHNCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQURJLEVBTUQ7QUFDREgsb0JBQVUsYUFEVDtBQUVEQyxnQkFBTSxJQUZMO0FBR0RDLG9CQUFVLDJCQUhUO0FBSURDLDRCQUFrQjtBQUpqQixTQU5DLEVBV0Q7QUFDREgsb0JBQVUsWUFEVDtBQUVEQyxnQkFBTSxJQUZMO0FBR0RDLG9CQUFVLHNCQUhUO0FBSURDLDRCQUFrQjtBQUpqQixTQVhDO0FBTEEsT0FoQkQ7QUF3Q1BDLGFBQU87QUF4Q0EsS0FpRE07QUFBQSxVQU5mQyxVQU1lLEdBTkY7QUFDWEMsZ0JBQVUsSUFEQztBQUVYQyxhQUFPLG9CQUZJO0FBR1hDLGNBQVE7QUFIRyxLQU1FOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFdBQVQ7QUFIYTtBQUlkOzs7OytCQUVVO0FBQ1QsVUFBSUMsT0FBTyxJQUFYOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNHOzs7Z0NBRVdDLEUsRUFBSTtBQUNkLFVBQU1ELE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS0wsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNEO0FBQ0QscUJBQUtNLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1pKLGVBQUtMLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCUSxJQUFJUixRQUEvQjtBQUNBSyxnQkFBTUEsR0FBR0csSUFBSVIsUUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBM0gwQixlQUFLUyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcbmltcG9ydCB7XG4gIFVTRVJfU1BFQ0lDQUxfSU5GTyxcbiAgVVNFUl9JTkZPLFxuICBTWVNURU1fSU5GTyxcbiAgQUREUkVTU19JRCxcbiAgU0VMX0NMQVNTX0NPREVcbn0gZnJvbSBcIi4vdXRpbHMvY29uc3RhbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL2hvbWUnLFxuICAgICAgJ3BhZ2VzL21pbmUnLFxuICAgICAgJ3BhZ2VzL2luZGV4JyxcbiAgICAgICdwYWdlcy9pbmZvX2VudHJ5X2Jhc2ljJyxcbiAgICAgICdwYWdlcy9pbmZvX2VudHJ5X2NhdHMnLFxuICAgICAgJ3BhZ2VzL2luZm9fZW50cnlfbW9yZSdcbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnjKvnrqHlrrYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnXG4gICAgfSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIGNvbG9yOiAnIzdBN0U4MycsXG4gICAgICBzZWxlY3RlZENvbG9yOiAnI2M1NWU0NCcsXG4gICAgICBib3JkZXJTdHlsZTogJ2JsYWNrJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgbGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9ob21lJyxcbiAgICAgICAgICB0ZXh0OiAn6aaW6aG1JyxcbiAgICAgICAgICBpY29uUGF0aDogJ2ltYWdlcy9pY29uX2hvbWUucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL2ljb25faG9tZV9hY3RpdmUucG5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9pbmRleCcsXG4gICAgICAgICAgdGV4dDogJ+WVhuWfjicsXG4gICAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvaWNvbl9zaG9wX2NhcnQucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL2ljb25fc2hvcF9jYXJ0X2FjdGl2ZS5wbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL21pbmUnLFxuICAgICAgICAgIHRleHQ6ICfmiJHnmoQnLFxuICAgICAgICAgIGljb25QYXRoOiAnaW1hZ2VzL2ljb25faW5mby5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdpbWFnZXMvaWNvbl9pbmZvX2FjdGl2ZS5wbmcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIGRlYnVnOiB0cnVlXG4gIH07XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbCxcbiAgICBhcHBpZDogJ3d4NDMyNzk2NzE2MmE1MzY3MScsXG4gICAgc2VjcmV0OiAnJ1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKTtcbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcblxuLy8gICAgLy/nlKjmiLfkv6Hmga9cbi8vICAgIGxldCB1c2VyU3BlY2lhbEluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgfHwge307XG4vL1xuLy8gICAgLy8g55So5oi35pmu6YCa5L+h5oGvXG4vLyAgICBsZXQgdXNlckluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfSU5GTykgfHwge307XG4vL1xuLy8gICAgLy/lpoLmnpzkv6Hmga/ov4fmnJ9cbi8vICAgIGlmICgoIXVzZXJTcGVjaWFsSW5mby5vcGVuaWQgfHwgKHVzZXJTcGVjaWFsSW5mby5leHBpcmVzX2luIHx8IERhdGUubm93KCkpIDwgKERhdGUubm93KCkgKyA2MDApKSAmJiAoIXVzZXJJbmZvLm5pY2tOYW1lKSkge1xuLy8gICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5sb2dpbigpO1xuLy9cbi8vICAgICAgaWYgKHJlcy5jb2RlKSB7XG4vLyAgICAgICAgbGV0IGQgPSB0aGF0Lmdsb2JhbERhdGE7IC8v6L+Z6YeM5a2Y5YKo5LqGYXBwaWTjgIFzZWNyZXTjgIF0b2tlbuS4ssKgwqDCoMKgXG4vLyAgICAgICAgLy/lrZjlgqh1c2VySW5mb8KgXG4vLyAgICAgICAgbGV0IGMgPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKCk7XG4vLyAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYyhVU0VSX0lORk8sIGMudXNlckluZm8pO1xuLy9cbi8vICAgICAgICAvL+WtmOWCqOezu+e7n+S/oeaBr8KgXG4vLyAgICAgICAgbGV0IHN5c3RlbUluZm8gPSB3ZXB5LmdldFN5c3RlbUluZm9TeW5jKCk7XG4vLyAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYyhTWVNURU1fSU5GTywgc3lzdGVtSW5mbyk7XG4vL1xuLy8gICAgICAgIHd4SnNDb2RlMlNlc3Npb24oe1xuLy8gICAgICAgICAgcXVlcnk6IHtcbi8vICAgICAgICAgICAganNDb2RlOiByZXMuY29kZSxcbi8vICAgICAgICAgICAgbmlja05hbWU6IGMudXNlckluZm8ubmlja05hbWVcbi8vICAgICAgICAgIH1cbi8vICAgICAgICB9KS50aGVuKHJlc3AgPT4ge1xuLy8gICAgICAgICAgdmFyIHJsdCA9IHJlc3AuZGF0YTtcbi8vICAgICAgICAgIGNvbnNvbGUubG9nKFwid3hKc0NvZGUyU2Vzc2lvbi4uLlwiICsgSlNPTi5zdHJpbmdpZnkocmx0KSk7XG4vLyAgICAgICAgICBpZiAocmx0LnJlc3VsdCkge1xuLy8gICAgICAgICAgICB2YXIgZGF0YSA9IHJsdC5kYXRhO1xuLy8gICAgICAgICAgICBpZiAoZGF0YS5vcGVuaWQpIHtcbi8vICAgICAgICAgICAgICBsZXQgb2JqID0ge307XG4vLyAgICAgICAgICAgICAgb2JqLm9wZW5pZCA9IGRhdGEub3BlbmlkO1xuLy8gICAgICAgICAgICAgIG9iai5leHBpcmVzX2luID0gRGF0ZS5ub3coKSArIGRhdGEuZXhwaXJlc19pbjtcbi8vICAgICAgICAgICAgICAvL+WtmOWCqG9wZW5pZMKgXG4vLyAgICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8sIG9iaik7XG4vLyAgICAgICAgICAgIH1cbi8vICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgIGxldCBvYmogPSB7fTtcbi8vICAgICAgICAgICAgb2JqLm9wZW5pZCA9IFwib2V1ajUwS0hNcXNoNWtZWllXUUp1d21ZNXlHMFwiO1xuLy8gICAgICAgICAgICBvYmouZXhwaXJlc19pbiA9IFwiNzIwMFwiO1xuLy8gICAgICAgICAgICAvL+WtmOWCqG9wZW5pZMKgXG4vLyAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPLCBvYmopO1xuLy8gICAgICAgICAgfVxuLy8gICAgICAgIH0pO1xuLy9cbi8vICAgICAgICBsZXQgdXJsID0gJ2h0dHBzOi8vYXBpLndlaXhpbi5xcS5jb20vc25zL2pzY29kZTJzZXNzaW9uP2FwcGlkPScgKyBkLmFwcGlkICsgJyZzZWNyZXQ9JyArIGQuc2VjcmV0ICsgJyZqc19jb2RlPScgKyByZXMuY29kZSArICcmZ3JhbnRfdHlwZT1hdXRob3JpemF0aW9uX2NvZGUnO1xuLy9cbi8vICAgICAgfSBlbHNlIHtcbi8vICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W55So5oi355m75b2V5oCB5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpXG4vLyAgICAgIH1cbiAgfVxuXG4gIGdldFVzZXJJbmZvKGNiKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgfVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19