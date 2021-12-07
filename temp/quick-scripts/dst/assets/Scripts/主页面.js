
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/主页面.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b70f3uiyxMLYdiMnqprYHg', '主页面');
// Scripts/主页面.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    base_canva: cc.Node,
    sound_on_button: cc.Node,
    sound_off_button: cc.Node,
    start_button: cc.Node
  },
  start: function start() {
    this.base_canva.getComponent(cc.AudioSource).play();
    cc.director.preloadScene("游戏界面");
  },
  // update (dt) {},
  start_game: function start_game() {
    var appear = this.base_canva.getComponent(cc.Animation);
    var clips = appear.getClips();
    appear.play(clips[1].name);
    setTimeout(function () {
      cc.director.loadScene("游戏界面");
    }, 800);
  },
  sound_off: function sound_off() {
    this.sound_on_button.active = false;
    this.sound_off_button.active = true;
    this.base_canva.getComponent(cc.AudioSource).pause();
  },
  sound_on: function sound_on() {
    this.sound_on_button.active = true;
    this.sound_off_button.active = false;
    this.base_canva.getComponent(cc.AudioSource).play();
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xc5Li76aG16Z2iLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmFzZV9jYW52YSIsIk5vZGUiLCJzb3VuZF9vbl9idXR0b24iLCJzb3VuZF9vZmZfYnV0dG9uIiwic3RhcnRfYnV0dG9uIiwic3RhcnQiLCJnZXRDb21wb25lbnQiLCJBdWRpb1NvdXJjZSIsInBsYXkiLCJkaXJlY3RvciIsInByZWxvYWRTY2VuZSIsInN0YXJ0X2dhbWUiLCJhcHBlYXIiLCJBbmltYXRpb24iLCJjbGlwcyIsImdldENsaXBzIiwibmFtZSIsInNldFRpbWVvdXQiLCJsb2FkU2NlbmUiLCJzb3VuZF9vZmYiLCJhY3RpdmUiLCJwYXVzZSIsInNvdW5kX29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFDSixFQUFFLENBQUNLLElBRE47QUFFUkMsSUFBQUEsZUFBZSxFQUFDTixFQUFFLENBQUNLLElBRlg7QUFHUkUsSUFBQUEsZ0JBQWdCLEVBQUNQLEVBQUUsQ0FBQ0ssSUFIWjtBQUlSRyxJQUFBQSxZQUFZLEVBQUNSLEVBQUUsQ0FBQ0s7QUFKUixHQUhQO0FBV0xJLEVBQUFBLEtBWEssbUJBV0k7QUFDTCxTQUFLTCxVQUFMLENBQWdCTSxZQUFoQixDQUE2QlYsRUFBRSxDQUFDVyxXQUFoQyxFQUE2Q0MsSUFBN0M7QUFDQVosSUFBQUEsRUFBRSxDQUFDYSxRQUFILENBQVlDLFlBQVosQ0FBeUIsTUFBekI7QUFDSCxHQWRJO0FBZ0JMO0FBR0FDLEVBQUFBLFVBbkJLLHdCQW1CTztBQUNSLFFBQUlDLE1BQU0sR0FBRyxLQUFLWixVQUFMLENBQWdCTSxZQUFoQixDQUE2QlYsRUFBRSxDQUFDaUIsU0FBaEMsQ0FBYjtBQUNBLFFBQUlDLEtBQUssR0FBR0YsTUFBTSxDQUFDRyxRQUFQLEVBQVo7QUFDQUgsSUFBQUEsTUFBTSxDQUFDSixJQUFQLENBQVlNLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0UsSUFBckI7QUFDQUMsSUFBQUEsVUFBVSxDQUFDLFlBQVk7QUFDbkJyQixNQUFBQSxFQUFFLENBQUNhLFFBQUgsQ0FBWVMsU0FBWixDQUFzQixNQUF0QjtBQUNILEtBRlMsRUFFUCxHQUZPLENBQVY7QUFJSCxHQTNCSTtBQStCTEMsRUFBQUEsU0EvQkssdUJBK0JNO0FBQ1AsU0FBS2pCLGVBQUwsQ0FBcUJrQixNQUFyQixHQUE4QixLQUE5QjtBQUNBLFNBQUtqQixnQkFBTCxDQUFzQmlCLE1BQXRCLEdBQStCLElBQS9CO0FBQ0EsU0FBS3BCLFVBQUwsQ0FBZ0JNLFlBQWhCLENBQTZCVixFQUFFLENBQUNXLFdBQWhDLEVBQTZDYyxLQUE3QztBQUNILEdBbkNJO0FBcUNMQyxFQUFBQSxRQXJDSyxzQkFxQ0s7QUFDTixTQUFLcEIsZUFBTCxDQUFxQmtCLE1BQXJCLEdBQThCLElBQTlCO0FBQ0EsU0FBS2pCLGdCQUFMLENBQXNCaUIsTUFBdEIsR0FBK0IsS0FBL0I7QUFDQSxTQUFLcEIsVUFBTCxDQUFnQk0sWUFBaEIsQ0FBNkJWLEVBQUUsQ0FBQ1csV0FBaEMsRUFBNkNDLElBQTdDO0FBQ0g7QUF6Q0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYmFzZV9jYW52YTpjYy5Ob2RlLFxyXG4gICAgICAgIHNvdW5kX29uX2J1dHRvbjpjYy5Ob2RlLFxyXG4gICAgICAgIHNvdW5kX29mZl9idXR0b246Y2MuTm9kZSxcclxuICAgICAgICBzdGFydF9idXR0b246Y2MuTm9kZSxcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmJhc2VfY2FudmEuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wbGF5KClcclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCLmuLjmiI/nlYzpnaJcIilcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG5cclxuICAgIHN0YXJ0X2dhbWUoKXtcclxuICAgICAgICB2YXIgYXBwZWFyID0gdGhpcy5iYXNlX2NhbnZhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgdmFyIGNsaXBzID0gYXBwZWFyLmdldENsaXBzKClcclxuICAgICAgICBhcHBlYXIucGxheShjbGlwc1sxXS5uYW1lKVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCLmuLjmiI/nlYzpnaJcIilcclxuICAgICAgICB9LCA4MDApO1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcblxyXG5cclxuICAgIHNvdW5kX29mZigpe1xyXG4gICAgICAgIHRoaXMuc291bmRfb25fYnV0dG9uLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zb3VuZF9vZmZfYnV0dG9uLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLmJhc2VfY2FudmEuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKS5wYXVzZSgpXHJcbiAgICB9LFxyXG5cclxuICAgIHNvdW5kX29uKCl7XHJcbiAgICAgICAgdGhpcy5zb3VuZF9vbl9idXR0b24uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuc291bmRfb2ZmX2J1dHRvbi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYmFzZV9jYW52YS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpLnBsYXkoKVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==