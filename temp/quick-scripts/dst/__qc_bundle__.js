
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/主页面');
require('./assets/Scripts/游戏界面');
require('./assets/Scripts/素材册');
require('./assets/Scripts/节点生成');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/素材册.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab15cgw29lMKql7/Qs/skXu', '素材册');
// Scripts/素材册.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    type1: cc.Node,
    type2: cc.Node,
    type3: cc.Node,
    type4: cc.Node,
    type5: cc.Node,
    type6: cc.Node,
    sucai1: cc.Node,
    sucai2: cc.Node,
    sucai3: cc.Node,
    sucai4: cc.Node,
    sucai5: cc.Node,
    sucai6: cc.Node,
    click: cc.SpriteFrame,
    unclick: cc.SpriteFrame
  },
  onLoad: function onLoad() {
    this.type1.getComponent(cc.Button).enabled = false;
  },
  btn1: function btn1() {
    this.type1.getComponent(cc.Button).enabled = false;
    this.type2.getComponent(cc.Button).enabled = true;
    this.type3.getComponent(cc.Button).enabled = true;
    this.type4.getComponent(cc.Button).enabled = true;
    this.type5.getComponent(cc.Button).enabled = true;
    this.type6.getComponent(cc.Button).enabled = true;
    this.type1.getComponent(cc.Button).normalSprite = this.click;
    this.type2.getComponent(cc.Button).normalSprite = this.unclick;
    this.type3.getComponent(cc.Button).normalSprite = this.unclick;
    this.type4.getComponent(cc.Button).normalSprite = this.unclick;
    this.type5.getComponent(cc.Button).normalSprite = this.unclick;
    this.type6.getComponent(cc.Button).normalSprite = this.unclick;
    this.sucai1.active = true;
    this.sucai2.active = false;
    this.sucai3.active = false;
    this.sucai4.active = false;
    this.sucai5.active = false;
    this.sucai6.active = false;
  },
  btn2: function btn2() {
    this.type1.getComponent(cc.Button).enabled = true;
    this.type2.getComponent(cc.Button).enabled = false;
    this.type3.getComponent(cc.Button).enabled = true;
    this.type4.getComponent(cc.Button).enabled = true;
    this.type5.getComponent(cc.Button).enabled = true;
    this.type6.getComponent(cc.Button).enabled = true;
    this.type1.getComponent(cc.Button).normalSprite = this.unclick;
    this.type2.getComponent(cc.Button).normalSprite = this.click;
    this.type3.getComponent(cc.Button).normalSprite = this.unclick;
    this.type4.getComponent(cc.Button).normalSprite = this.unclick;
    this.type5.getComponent(cc.Button).normalSprite = this.unclick;
    this.type6.getComponent(cc.Button).normalSprite = this.unclick;
    this.sucai1.active = false;
    this.sucai2.active = true;
    this.sucai3.active = false;
    this.sucai4.active = false;
    this.sucai5.active = false;
    this.sucai6.active = false;
  },
  btn3: function btn3() {
    this.type1.getComponent(cc.Button).enabled = true;
    this.type2.getComponent(cc.Button).enabled = true;
    this.type3.getComponent(cc.Button).enabled = false;
    this.type4.getComponent(cc.Button).enabled = true;
    this.type5.getComponent(cc.Button).enabled = true;
    this.type6.getComponent(cc.Button).enabled = true;
    this.type1.getComponent(cc.Button).normalSprite = this.unclick;
    this.type2.getComponent(cc.Button).normalSprite = this.unclick;
    this.type3.getComponent(cc.Button).normalSprite = this.click;
    this.type4.getComponent(cc.Button).normalSprite = this.unclick;
    this.type5.getComponent(cc.Button).normalSprite = this.unclick;
    this.type6.getComponent(cc.Button).normalSprite = this.unclick;
    this.sucai1.active = false;
    this.sucai2.active = false;
    this.sucai3.active = true;
    this.sucai4.active = false;
    this.sucai5.active = false;
    this.sucai6.active = false;
  },
  btn4: function btn4() {
    this.type1.getComponent(cc.Button).enabled = true;
    this.type2.getComponent(cc.Button).enabled = true;
    this.type3.getComponent(cc.Button).enabled = true;
    this.type4.getComponent(cc.Button).enabled = false;
    this.type5.getComponent(cc.Button).enabled = true;
    this.type6.getComponent(cc.Button).enabled = true;
    this.type1.getComponent(cc.Button).normalSprite = this.unclick;
    this.type2.getComponent(cc.Button).normalSprite = this.unclick;
    this.type3.getComponent(cc.Button).normalSprite = this.unclick;
    this.type4.getComponent(cc.Button).normalSprite = this.click;
    this.type5.getComponent(cc.Button).normalSprite = this.unclick;
    this.type6.getComponent(cc.Button).normalSprite = this.unclick;
    this.sucai1.active = false;
    this.sucai2.active = false;
    this.sucai3.active = false;
    this.sucai4.active = true;
    this.sucai5.active = false;
    this.sucai6.active = false;
  },
  btn5: function btn5() {
    this.type1.getComponent(cc.Button).enabled = true;
    this.type2.getComponent(cc.Button).enabled = true;
    this.type3.getComponent(cc.Button).enabled = true;
    this.type4.getComponent(cc.Button).enabled = true;
    this.type5.getComponent(cc.Button).enabled = false;
    this.type6.getComponent(cc.Button).enabled = true;
    this.type1.getComponent(cc.Button).normalSprite = this.unclick;
    this.type2.getComponent(cc.Button).normalSprite = this.unclick;
    this.type3.getComponent(cc.Button).normalSprite = this.unclick;
    this.type4.getComponent(cc.Button).normalSprite = this.unclick;
    this.type5.getComponent(cc.Button).normalSprite = this.click;
    this.type6.getComponent(cc.Button).normalSprite = this.unclick;
    this.sucai1.active = false;
    this.sucai2.active = false;
    this.sucai3.active = false;
    this.sucai4.active = false;
    this.sucai5.active = true;
    this.sucai6.active = false;
  },
  btn6: function btn6() {
    this.type1.getComponent(cc.Button).enabled = true;
    this.type2.getComponent(cc.Button).enabled = true;
    this.type3.getComponent(cc.Button).enabled = true;
    this.type4.getComponent(cc.Button).enabled = true;
    this.type5.getComponent(cc.Button).enabled = true;
    this.type6.getComponent(cc.Button).enabled = false;
    this.type1.getComponent(cc.Button).normalSprite = this.unclick;
    this.type2.getComponent(cc.Button).normalSprite = this.unclick;
    this.type3.getComponent(cc.Button).normalSprite = this.unclick;
    this.type4.getComponent(cc.Button).normalSprite = this.unclick;
    this.type5.getComponent(cc.Button).normalSprite = this.unclick;
    this.type6.getComponent(cc.Button).normalSprite = this.click;
    this.sucai1.active = false;
    this.sucai2.active = false;
    this.sucai3.active = false;
    this.sucai4.active = false;
    this.sucai5.active = false;
    this.sucai6.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xc57Sg5p2Q5YaMLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidHlwZTEiLCJOb2RlIiwidHlwZTIiLCJ0eXBlMyIsInR5cGU0IiwidHlwZTUiLCJ0eXBlNiIsInN1Y2FpMSIsInN1Y2FpMiIsInN1Y2FpMyIsInN1Y2FpNCIsInN1Y2FpNSIsInN1Y2FpNiIsImNsaWNrIiwiU3ByaXRlRnJhbWUiLCJ1bmNsaWNrIiwib25Mb2FkIiwiZ2V0Q29tcG9uZW50IiwiQnV0dG9uIiwiZW5hYmxlZCIsImJ0bjEiLCJub3JtYWxTcHJpdGUiLCJhY3RpdmUiLCJidG4yIiwiYnRuMyIsImJ0bjQiLCJidG41IiwiYnRuNiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBQ0osRUFBRSxDQUFDSyxJQUREO0FBRVJDLElBQUFBLEtBQUssRUFBQ04sRUFBRSxDQUFDSyxJQUZEO0FBR1JFLElBQUFBLEtBQUssRUFBQ1AsRUFBRSxDQUFDSyxJQUhEO0FBSVJHLElBQUFBLEtBQUssRUFBQ1IsRUFBRSxDQUFDSyxJQUpEO0FBS1JJLElBQUFBLEtBQUssRUFBQ1QsRUFBRSxDQUFDSyxJQUxEO0FBTVJLLElBQUFBLEtBQUssRUFBQ1YsRUFBRSxDQUFDSyxJQU5EO0FBUVJNLElBQUFBLE1BQU0sRUFBQ1gsRUFBRSxDQUFDSyxJQVJGO0FBU1JPLElBQUFBLE1BQU0sRUFBQ1osRUFBRSxDQUFDSyxJQVRGO0FBVVJRLElBQUFBLE1BQU0sRUFBQ2IsRUFBRSxDQUFDSyxJQVZGO0FBV1JTLElBQUFBLE1BQU0sRUFBQ2QsRUFBRSxDQUFDSyxJQVhGO0FBWVJVLElBQUFBLE1BQU0sRUFBQ2YsRUFBRSxDQUFDSyxJQVpGO0FBYVJXLElBQUFB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LEVBQW1DRyxZQUFuQyxHQUFrRCxLQUFLTixPQUF2RDtBQUNBLFNBQUtYLEtBQUwsQ0FBV2EsWUFBWCxDQUF3QnJCLEVBQUUsQ0FBQ3NCLE1BQTNCLEVBQW1DRyxZQUFuQyxHQUFrRCxLQUFLTixPQUF2RDtBQUNBLFNBQUtWLEtBQUwsQ0FBV1ksWUFBWCxDQUF3QnJCLEVBQUUsQ0FBQ3NCLE1BQTNCLEVBQW1DRyxZQUFuQyxHQUFrRCxLQUFLTixPQUF2RDtBQUNBLFNBQUtULEtBQUwsQ0FBV1csWUFBWCxDQUF3QnJCLEVBQUUsQ0FBQ3NCLE1BQTNCLEVBQW1DRyxZQUFuQyxHQUFrRCxLQUFLUixLQUF2RDtBQUVBLFNBQUtOLE1BQUwsQ0FBWWUsTUFBWixHQUFxQixLQUFyQjtBQUNBLFNBQUtkLE1BQUwsQ0FBWWMsTUFBWixHQUFxQixLQUFyQjtBQUNBLFNBQUtiLE1BQUwsQ0FBWWEsTUFBWixHQUFxQixLQUFyQjtBQUNBLFNBQUtaLE1BQUwsQ0FBWVksTUFBWixHQUFxQixLQUFyQjtBQUNBLFNBQUtYLE1BQUwsQ0FBWVcsTUFBWixHQUFxQixLQUFyQjtBQUNBLFNBQUtWLE1BQUwsQ0FBWVUsTUFBWixHQUFxQixJQUFyQjtBQUNIO0FBNUpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHR5cGUxOmNjLk5vZGUsXHJcbiAgICAgICAgdHlwZTI6Y2MuTm9kZSxcclxuICAgICAgICB0eXBlMzpjYy5Ob2RlLFxyXG4gICAgICAgIHR5cGU0OmNjLk5vZGUsXHJcbiAgICAgICAgdHlwZTU6Y2MuTm9kZSxcclxuICAgICAgICB0eXBlNjpjYy5Ob2RlLFxyXG5cclxuICAgICAgICBzdWNhaTE6Y2MuTm9kZSxcclxuICAgICAgICBzdWNhaTI6Y2MuTm9kZSxcclxuICAgICAgICBzdWNhaTM6Y2MuTm9kZSxcclxuICAgICAgICBzdWNhaTQ6Y2MuTm9kZSxcclxuICAgICAgICBzdWNhaTU6Y2MuTm9kZSxcclxuICAgICAgICBzdWNhaTY6Y2MuTm9kZSxcclxuXHJcbiAgICAgICAgY2xpY2s6Y2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgdW5jbGljazpjYy5TcHJpdGVGcmFtZSxcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy50eXBlMS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgIH0sXHJcblxyXG4gICAgYnRuMSgpe1xyXG4gICAgICAgIHRoaXMudHlwZTEuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy50eXBlMi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudHlwZTMuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICB0aGlzLnR5cGU0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy50eXBlNS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudHlwZTYuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICB0aGlzLnR5cGUxLmdldENvbXBvbmVudChjYy5CdXR0b24pLm5vcm1hbFNwcml0ZSA9IHRoaXMuY2xpY2tcclxuICAgICAgICB0aGlzLnR5cGUyLmdldENvbXBvbmVudChjYy5CdXR0b24pLm5vcm1hbFNwcml0ZSA9IHRoaXMudW5jbGlja1xyXG4gICAgICAgIHRoaXMudHlwZTMuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikubm9ybWFsU3ByaXRlID0gdGhpcy51bmNsaWNrXHJcbiAgICAgICAgdGhpcy50eXBlNC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5ub3JtYWxTcHJpdGUgPSB0aGlzLnVuY2xpY2tcclxuICAgICAgICB0aGlzLnR5cGU1LmdldENvbXBvbmVudChjYy5CdXR0b24pLm5vcm1hbFNwcml0ZSA9IHRoaXMudW5jbGlja1xyXG4gICAgICAgIHRoaXMudHlwZTYuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikubm9ybWFsU3ByaXRlID0gdGhpcy51bmNsaWNrXHJcblxyXG4gICAgICAgIHRoaXMuc3VjYWkxLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnN1Y2FpMi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc3VjYWkzLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zdWNhaTQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnN1Y2FpNS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc3VjYWk2LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9LFxyXG5cclxuICAgIGJ0bjIoKXtcclxuICAgICAgICB0aGlzLnR5cGUxLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy50eXBlMi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLnR5cGUzLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy50eXBlNC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudHlwZTUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICB0aGlzLnR5cGU2LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy50eXBlMS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5ub3JtYWxTcHJpdGUgPSB0aGlzLnVuY2xpY2tcclxuICAgICAgICB0aGlzLnR5cGUyLmdldENvbXBvbmVudChjYy5CdXR0b24pLm5vcm1hbFNwcml0ZSA9IHRoaXMuY2xpY2tcclxuICAgICAgICB0aGlzLnR5cGUzLmdldENvbXBvbmVudChjYy5CdXR0b24pLm5vcm1hbFNwcml0ZSA9IHRoaXMudW5jbGlja1xyXG4gICAgICAgIHRoaXMudHlwZTQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikubm9ybWFsU3ByaXRlID0gdGhpcy51bmNsaWNrXHJcbiAgICAgICAgdGhpcy50eXBlNS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5ub3JtYWxTcHJpdGUgPSB0aGlzLnVuY2xpY2tcclxuICAgICAgICB0aGlzLnR5cGU2LmdldENvbXBvbmVudChjYy5CdXR0b24pLm5vcm1hbFNwcml0ZSA9IHRoaXMudW5jbGlja1xyXG5cclxuICAgICAgICB0aGlzLnN1Y2FpMS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc3VjYWkyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnN1Y2FpMy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc3VjYWk0LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zdWNhaTUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnN1Y2FpNi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfSxcclxuXHJcbiAgICBidG4zKCl7XHJcbiAgICAgICAgdGhpcy50eXBlMS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudHlwZTIuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICB0aGlzLnR5cGUzLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudHlwZTQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICB0aGlzLnR5cGU1LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy50eXBlNi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudHlwZTEuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikubm9ybWFsU3ByaXRlID0gdGhpcy51bmNsaWNrXHJcbiAgICAgICAgdGhpcy50eXBlMi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5ub3JtYWxTcHJpdGUgPSB0aGlzLnVuY2xpY2tcclxuICAgICAgICB0aGlzLnR5cGUzLmdldENvbXBvbmVudChjYy5CdXR0b24pLm5vcm1hbFNwcml0ZSA9IHRoaXMuY2xpY2tcclxuICAgICAgICB0aGlzLnR5cGU0LmdldENvbXBvbmVudChjYy5CdXR0b24pLm5vcm1hbFNwcml0ZSA9IHRoaXMudW5jbGlja1xyXG4gICAgICAgIHRoaXMudHlwZTUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikubm9ybWFsU3ByaXRlID0gdGhpcy51bmNsaWNrXHJcbiAgICAgICAgdGhpcy50eXBlNi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5ub3JtYWxTcHJpdGUgPSB0aGlzLnVuY2xpY2tcclxuXHJcbiAgICAgICAgdGhpcy5zdWNhaTEuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnN1Y2FpMi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc3VjYWkzLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnN1Y2FpNC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc3VjYWk1LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zdWNhaTYuYWN0aXZlID0gZmFsc2VcclxuICAgIH0sXHJcblxyXG4gICAgYnRuNCgpe1xyXG4gICAgICAgIHRoaXMudHlwZTEuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICB0aGlzLnR5cGUyLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy50eXBlMy5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudHlwZTQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy50eXBlNS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudHlwZTYuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICB0aGlzLnR5cGUxLmdldENvbXBvbmVudChjYy5CdXR0b24pLm5vcm1hbFNwcml0ZSA9IHRoaXMudW5jbGlja1xyXG4gICAgICAgIHRoaXMudHlwZTIuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikubm9ybWFsU3ByaXRlID0gdGhpcy51bmNsaWNrXHJcbiAgICAgICAgdGhpcy50eXBlMy5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5ub3JtYWxTcHJpdGUgPSB0aGlzLnVuY2xpY2tcclxuICAgICAgICB0aGlzLnR5cGU0LmdldENvbXBvbmVudChjYy5CdXR0b24pLm5vcm1hbFNwcml0ZSA9IHRoaXMuY2xpY2tcclxuICAgICAgICB0aGlzLnR5cGU1LmdldENvbXBvbmVudChjYy5CdXR0b24pLm5vcm1hbFNwcml0ZSA9IHRoaXMudW5jbGlja1xyXG4gICAgICAgIHRoaXMudHlwZTYuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikubm9ybWFsU3ByaXRlID0gdGhpcy51bmNsaWNrXHJcblxyXG4gICAgICAgIHRoaXMuc3VjYWkxLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zdWNhaTIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnN1Y2FpMy5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc3VjYWk0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnN1Y2FpNS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc3VjYWk2LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICB9LFxyXG5cclxuICAgIGJ0bjUoKXtcclxuICAgICAgICB0aGlzLnR5cGUxLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy50eXBlMi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudHlwZTMuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICB0aGlzLnR5cGU0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy50eXBlNS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLnR5cGU2LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy50eXBlMS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5ub3JtYWxTcHJpdGUgPSB0aGlzLnVuY2xpY2tcclxuICAgICAgICB0aGlzLnR5cGUyLmdldENvbXBvbmVudChjYy5CdXR0b24pLm5vcm1hbFNwcml0ZSA9IHRoaXMudW5jbGlja1xyXG4gICAgICAgIHRoaXMudHlwZTMuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikubm9ybWFsU3ByaXRlID0gdGhpcy51bmNsaWNrXHJcbiAgICAgICAgdGhpcy50eXBlNC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5ub3JtYWxTcHJpdGUgPSB0aGlzLnVuY2xpY2tcclxuICAgICAgICB0aGlzLnR5cGU1LmdldENvbXBvbmVudChjYy5CdXR0b24pLm5vcm1hbFNwcml0ZSA9IHRoaXMuY2xpY2tcclxuICAgICAgICB0aGlzLnR5cGU2LmdldENvbXBvbmVudChjYy5CdXR0b24pLm5vcm1hbFNwcml0ZSA9IHRoaXMudW5jbGlja1xyXG5cclxuICAgICAgICB0aGlzLnN1Y2FpMS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc3VjYWkyLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zdWNhaTMuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnN1Y2FpNC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc3VjYWk1LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnN1Y2FpNi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgfSxcclxuXHJcbiAgICBidG42KCl7XHJcbiAgICAgICAgdGhpcy50eXBlMS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudHlwZTIuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICB0aGlzLnR5cGUzLmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy50eXBlNC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudHlwZTUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICB0aGlzLnR5cGU2LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudHlwZTEuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikubm9ybWFsU3ByaXRlID0gdGhpcy51bmNsaWNrXHJcbiAgICAgICAgdGhpcy50eXBlMi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5ub3JtYWxTcHJpdGUgPSB0aGlzLnVuY2xpY2tcclxuICAgICAgICB0aGlzLnR5cGUzLmdldENvbXBvbmVudChjYy5CdXR0b24pLm5vcm1hbFNwcml0ZSA9IHRoaXMudW5jbGlja1xyXG4gICAgICAgIHRoaXMudHlwZTQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikubm9ybWFsU3ByaXRlID0gdGhpcy51bmNsaWNrXHJcbiAgICAgICAgdGhpcy50eXBlNS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5ub3JtYWxTcHJpdGUgPSB0aGlzLnVuY2xpY2tcclxuICAgICAgICB0aGlzLnR5cGU2LmdldENvbXBvbmVudChjYy5CdXR0b24pLm5vcm1hbFNwcml0ZSA9IHRoaXMuY2xpY2tcclxuXHJcbiAgICAgICAgdGhpcy5zdWNhaTEuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnN1Y2FpMi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc3VjYWkzLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zdWNhaTQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLnN1Y2FpNS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc3VjYWk2LmFjdGl2ZSA9IHRydWVcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/节点生成.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8fd154lBilN8bYsj1D7ts/M', '节点生成');
// Scripts/节点生成.js

"use strict";

window.canva = -3;
window.finish = 0;
cc.Class({
  "extends": cc.Component,
  properties: {
    delete_button: {
      "default": null,
      type: cc.SpriteFrame
    },
    scale_button: {
      "default": null,
      type: cc.SpriteFrame
    },
    far_lable: cc.Node,
    mid_lable: cc.Node,
    near_lable: cc.Node,
    sprite11: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_11: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite12: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_12: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite13: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_13: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite14: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_14: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite15: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_15: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite16: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_16: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite17: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_17: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite18: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_18: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite21: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_21: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite22: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_22: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite23: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_23: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite24: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_24: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite25: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_25: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite31: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_31: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite32: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_32: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite33: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_33: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite34: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_34: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite35: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_35: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite41: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_41: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite42: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_42: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite43: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_43: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite44: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_44: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite45: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_45: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite46: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_46: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite47: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_47: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite48: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_48: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite49: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_49: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite410: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_410: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite51: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_51: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite52: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_52: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite53: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_53: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite54: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_54: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite55: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_55: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite56: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_56: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite57: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_57: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite58: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_58: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite59: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_59: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite61: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_61: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite62: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_62: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite63: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_63: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite64: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_64: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite65: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_65: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite66: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_66: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite67: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_67: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite68: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_68: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite69: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_69: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite610: {
      "default": null,
      type: cc.SpriteFrame
    },
    sprite_610: {
      "default": null,
      type: cc.SpriteFrame
    }
  },
  far_canva: function far_canva() {
    canva = -3;
    this.far_lable.active = true;
    var word_animation = this.far_lable.getComponent(cc.Animation);
    var clips = word_animation.getClips();
    word_animation.play(clips[0].name);
    var temp_lable = this.label1;
    setTimeout(function () {
      temp_lable.active = false;
    }, 1100);
  },
  middle_canva: function middle_canva() {
    canva = -2;
    this.mid_lable.active = true;
    var word_animation = this.mid_lable.getComponent(cc.Animation);
    var clips = word_animation.getClips();
    word_animation.play(clips[0].name);
    var temp_lable = this.mid_lable;
    setTimeout(function () {
      temp_lable.active = false;
    }, 1100);
  },
  near_canva: function near_canva() {
    canva = -1;
    this.near_lable.active = true;
    var word_animation = this.near_lable.getComponent(cc.Animation);
    var clips = word_animation.getClips();
    word_animation.play(clips[0].name);
    var temp_lable = this.near_lable;
    setTimeout(function () {
      temp_lable.active = false;
    }, 1100);
  },
  control: function control(node, node_1) {
    finish += 1;

    if (canva == -3) {
      node.zIndex = -3;
    } else if (canva == -2) {
      node.zIndex = -2;
    } else if (canva == -1) {
      node.zIndex = -1;
    } //控制图层


    var delete_node = new cc.Node('button'); //先解决两个按钮

    var delete_sprite = delete_node.addComponent(cc.Sprite);
    var delete_button = delete_node.addComponent(cc.Button);
    delete_sprite.spriteFrame = this.delete_button;
    delete_node.parent = node_1;
    var delete_x = node_1.width / 2;
    var delete_y = node_1.height / 2;
    delete_node.setPosition(delete_x, delete_y);
    delete_button.node.on('click', function (button) {
      node.destroy();
      finish -= 1;
    });
    var scale_node = new cc.Node('button');
    var scale_sprite = scale_node.addComponent(cc.Sprite);
    var scale_button = scale_node.addComponent(cc.Button);
    scale_sprite.spriteFrame = this.scale_button;
    scale_node.parent = node_1;
    var scale_x = node_1.width / 2;
    var scale_y = node_1.height / 2;
    scale_node.setPosition(scale_x, -scale_y); //缩放代码

    var dist = 0;
    var XXX = 0;
    var YYY = 0;
    scale_button.node.on(cc.Node.EventType.TOUCH_START, function (event) {
      // let node_position = node.position
      // node_scale = node.scale
      var touch_location = event.getLocation();
      var nodePos = node.convertToNodeSpaceAR(touch_location);
      var X = node.position.x; // console.log(X)

      var Y = node.position.y;
      var dist1 = cc.v2(X, Y).sub(nodePos).mag(); // 计算touch_start的触点与物体坐标的距离
      // cc.log(dist1)

      dist = dist1; //////

      XXX = touch_location.x;
      YYY = touch_location.y;
    });
    scale_button.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      //缩放代码
      var touch_location2 = event.getLocation();
      var nodePos = node.convertToNodeSpaceAR(touch_location2);
      var XX = node.position.x; // cc.log(XX)

      var YY = node.position.y;
      var dist2 = cc.v2(XX, YY).sub(nodePos).mag(); // 计算移动过程中的触点坐标与物体坐标的距离
      // cc.log(dist)
      // cc.log(dist2)
      // cc.log(dist)

      var rate = dist2 / dist; // 距离比值 
      // cc.log(rate)
      // 控制比值的最大不大于3，最小不小于0.5

      if (rate > 3) {
        rate = 3;
      } else if (rate <= 0.5) {
        rate = 0.5;
      }

      node.scale *= rate; //旋转代码
      // function getAngle(px, py, mx, my) {//获得人物中心和鼠标坐标连线，与y轴正半轴之间的夹角
      //     var x = Math.abs(px - mx);
      //     var y = Math.abs(py - my);
      //     var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      //     var cos = y / z;
      //     var radina = Math.acos(cos);//用反三角函数求弧度
      //     var angle = Math.floor(180 / (Math.PI / radina));//将弧度转换成角度
      //     // cc.log(angle)
      //     if (mx > px && my > py) {//鼠标在第四象限
      //         angle = 180 - angle;
      //     }
      //     if (mx == px && my > py) {//鼠标在y轴负方向上
      //         angle = 180;
      //     }
      //     if (mx > px && my == py) {//鼠标在x轴正方向上
      //         angle = 90;
      //     }
      //     if (mx < px && my > py) {//鼠标在第三象限
      //         angle = 180 + angle;
      //     }
      //     if (mx < px && my == py) {//鼠标在x轴负方向
      //         angle = 270;
      //     }
      //     if (mx < px && my < py) {//鼠标在第二象限
      //         angle = 360 - angle;
      //     }
      //     return angle;
      // }
      // node.angle = getAngle(XXX, YYY, touch_location2.x, touch_location2.y)
      // // node.angle = getAngle(XX, YY, touch_location2.x, touch_location2.y)
      // cc.log(XXX)
      // cc.log(YYY);
      // cc.log(touch_location2.x);
      // cc.log(touch_location2.y);
    });
    var enable = true;
    var timeArray = [];
    node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      //获取手指触点距离上一次点的信息
      var delta = event.getDelta(); //增加限定条件

      var minX = -node.parent.width / 2 + node.width / 2;
      var maxX = node.parent.width / 2 - node.width / 2;
      var minY = -node.parent.height / 2 + node.height / 2;
      var maxY = node.parent.height / 2 - node.height / 2;
      var moveX = node.x + delta.x;
      var moveY = node.y + delta.y; //控制移动范围

      if (moveX < minX) {
        moveX = minX;
      } else if (moveX > maxX) {
        moveX = maxX;
      }

      if (moveY < minY) {
        moveY = minY;
      } else if (moveY > maxY) {
        moveY = maxY;
      } //移动小车节点


      node.x = node.x + delta.x;
      node.y = node.y + delta.y;
    }); //当鼠标抬起的时候恢复状态

    node.on(cc.Node.EventType.TOUCH_END, function (event) {
      var date = new Date();
      var time = date.getTime();
      timeArray.push(time);

      if (timeArray.length > 1 && (timeArray[1] - timeArray[0]) / 1000 < 0.8) {
        timeArray = []; //1秒内未连续点击

        cc.log("双击");

        if (enable == true) {
          enable = false;
          node_1.active = false;
          finish -= 1;
          node.off(cc.Node.EventType.TOUCH_MOVE);
          cc.log("disable");
        } else {
          finish += 1;
          enable = true;
          node_1.active = true;
          node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var delta = event.getDelta(); //增加限定条件

            var minX = -node.parent.width / 2 + node.width / 2;
            var maxX = node.parent.width / 2 - node.width / 2;
            var minY = -node.parent.height / 2 + node.height / 2;
            var maxY = node.parent.height / 2 - node.height / 2;
            var moveX = node.x + delta.x;
            var moveY = node.y + delta.y; //控制移动范围

            if (moveX < minX) {
              moveX = minX;
            } else if (moveX > maxX) {
              moveX = maxX;
            }

            if (moveY < minY) {
              moveY = minY;
            } else if (moveY > maxY) {
              moveY = maxY;
            } //移动小车节点


            node.x = node.x + delta.x;
            node.y = node.y + delta.y;
          }); //当鼠标抬起的时候恢复状态

          cc.log("enable");
        }
      } else if (timeArray.length > 1 && (timeArray[1] - timeArray[0]) / 1000 > 0.8) {
        timeArray = [];
        timeArray.push(time);
      }
    });
  },
  create11: function create11() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite11;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_11;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create12: function create12() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite12;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_12;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create13: function create13() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite13;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_13;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create14: function create14() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite14;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_14;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create15: function create15() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite15;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_15;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create16: function create16() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite16;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_16;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create17: function create17() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite17;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_17;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create18: function create18() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite18;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_18;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create21: function create21() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite21;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_21;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create22: function create22() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite22;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_22;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create23: function create23() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite23;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_23;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create24: function create24() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite24;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_24;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create25: function create25() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite25;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_25;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create31: function create31() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite31;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_31;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create32: function create32() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite32;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_32;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create33: function create33() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite33;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_33;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create34: function create34() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite34;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_34;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create35: function create35() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite35;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_35;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create41: function create41() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite41;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_41;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create42: function create42() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite42;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_42;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create43: function create43() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite43;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_43;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create44: function create44() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite44;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_44;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create45: function create45() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite45;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_45;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create46: function create46() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite46;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_46;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create47: function create47() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite47;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_47;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create48: function create48() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite48;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_48;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create49: function create49() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite49;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_49;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create410: function create410() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite410;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_410;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create51: function create51() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite51;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_51;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create52: function create52() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite52;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_52;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create53: function create53() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite53;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_53;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create54: function create54() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite54;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_54;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create55: function create55() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite55;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_55;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create56: function create56() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite56;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_56;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create57: function create57() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite57;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_57;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create58: function create58() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite58;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_58;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create59: function create59() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite59;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_59;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create61: function create61() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite61;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_61;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create62: function create62() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite62;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_62;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create63: function create63() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite63;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_63;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create64: function create64() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite64;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_64;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create65: function create65() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite65;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_65;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create66: function create66() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite66;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_66;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create67: function create67() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite67;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_67;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create68: function create68() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite68;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_68;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create69: function create69() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite69;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_69;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
  },
  create610: function create610() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite610;
    node.parent = this.node;
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp1 = node_1.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite_610;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xc6IqC54K555Sf5oiQLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImNhbnZhIiwiZmluaXNoIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkZWxldGVfYnV0dG9uIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwic2NhbGVfYnV0dG9uIiwiZmFyX2xhYmxlIiwiTm9kZSIsIm1pZF9sYWJsZSIsIm5lYXJfbGFibGUiLCJzcHJpdGUxMSIsInNwcml0ZV8xMSIsInNwcml0ZTEyIiwic3ByaXRlXzEyIiwic3ByaXRlMTMiLCJzcHJpdGVfMTMiLCJzcHJpdGUxNCIsInNwcml0ZV8xNCIsInNwcml0ZTE1Iiwic3ByaXRlXzE1Iiwic3ByaXRlMTYiLCJzcHJpdGVfMTYiLCJzcHJpdGUxNyIsInNwcml0ZV8xNyIsInNwcml0ZTE4Iiwic3ByaXRlXzE4Iiwic3ByaXRlMjEiLCJzcHJpdGVfMjEiLCJzcHJpdGUyMiIsInNwcml0ZV8yMiIsInNwcml0ZTIzIiwic3ByaXRlXzIzIiwic3ByaXRlMjQiLCJzcHJpdGVfMjQiLCJzcHJpdGUyNSIsInNwcml0ZV8yNSIsInNwcml0ZTMxIiwic3ByaXRlXzMxIiwic3ByaXRlMzIiLCJzcHJpdGVfMzIiLCJzcHJpdGUzMyIsInNwcml0ZV8zMyIsInNwcml0ZTM0Iiwic3ByaXRlXzM0Iiwic3ByaXRlMzUiLCJzcHJpdGVfMzUiLCJzcHJpdGU0MSIsInNwcml0ZV80MSIsInNwcml0ZTQyIiwic3ByaXRlXzQyIiwic3ByaXRlNDMiLCJzcHJpdGVfNDMiLCJzcHJpdGU0NCIsInNwcml0ZV80NCIsInNwcml0ZTQ1Iiwic3ByaXRlXzQ1Iiwic3ByaXRlNDYiLCJzcHJpdGVfNDYiLCJzcHJpdGU0NyIsInNwcml0ZV80NyIsInNwcml0ZTQ4Iiwic3ByaXRlXzQ4Iiwic3ByaXRlNDkiLCJzcHJpdGVfNDkiLCJzcHJpdGU0MTAiLCJzcHJpdGVfNDEwIiwic3ByaXRlNTEiLCJzcHJpdGVfNTEiLCJzcHJpdGU1MiIsInNwcml0ZV81MiIsInNwcml0ZTUzIiwic3ByaXRlXzUzIiwic3ByaXRlNTQiLCJzcHJpdGVfNTQiLCJzcHJpdGU1NSIsInNwcml0ZV81NSIsInNwcml0ZTU2Iiwic3ByaXRlXzU2Iiwic3ByaXRlNTciLCJzcHJpdGVfNTciLCJzcHJpdGU1OCIsInNwcml0ZV81OCIsInNwcml0ZTU5Iiwic3ByaXRlXzU5Iiwic3ByaXRlNjEiLCJzcHJpdGVfNjEiLCJzcHJpdGU2MiIsInNwcml0ZV82MiIsInNwcml0ZTYzIiwic3ByaXRlXzYzIiwic3ByaXRlNjQiLCJzcHJpdGVfNjQiLCJzcHJpdGU2NSIsInNwcml0ZV82NSIsInNwcml0ZTY2Iiwic3ByaXRlXzY2Iiwic3ByaXRlNjciLCJzcHJpdGVfNjciLCJzcHJpdGU2OCIsInNwcml0ZV82OCIsInNwcml0ZTY5Iiwic3ByaXRlXzY5Iiwic3ByaXRlNjEwIiwic3ByaXRlXzYxMCIsImZhcl9jYW52YSIsImFjdGl2ZSIsIndvcmRfYW5pbWF0aW9uIiwiZ2V0Q29tcG9uZW50IiwiQW5pbWF0aW9uIiwiY2xpcHMiLCJnZXRDbGlwcyIsInBsYXkiLCJuYW1lIiwidGVtcF9sYWJsZSIsImxhYmVsMSIsInNldFRpbWVvdXQiLCJtaWRkbGVfY2FudmEiLCJuZWFyX2NhbnZhIiwiY29udHJvbCIsIm5vZGUiLCJub2RlXzEiLCJ6SW5kZXgiLCJkZWxldGVfbm9kZSIsImRlbGV0ZV9zcHJpdGUiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJCdXR0b24iLCJzcHJpdGVGcmFtZSIsInBhcmVudCIsImRlbGV0ZV94Iiwid2lkdGgiLCJkZWxldGVfeSIsImhlaWdodCIsInNldFBvc2l0aW9uIiwib24iLCJidXR0b24iLCJkZXN0cm95Iiwic2NhbGVfbm9kZSIsInNjYWxlX3Nwcml0ZSIsInNjYWxlX3giLCJzY2FsZV95IiwiZGlzdCIsIlhYWCIsIllZWSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiZXZlbnQiLCJ0b3VjaF9sb2NhdGlvbiIsImdldExvY2F0aW9uIiwibm9kZVBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwiWCIsInBvc2l0aW9uIiwieCIsIlkiLCJ5IiwiZGlzdDEiLCJ2MiIsInN1YiIsIm1hZyIsIlRPVUNIX01PVkUiLCJ0b3VjaF9sb2NhdGlvbjIiLCJYWCIsIllZIiwiZGlzdDIiLCJyYXRlIiwic2NhbGUiLCJlbmFibGUiLCJ0aW1lQXJyYXkiLCJkZWx0YSIsImdldERlbHRhIiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsIm1vdmVYIiwibW92ZVkiLCJUT1VDSF9FTkQiLCJkYXRlIiwiRGF0ZSIsInRpbWUiLCJnZXRUaW1lIiwicHVzaCIsImxlbmd0aCIsImxvZyIsIm9mZiIsImNyZWF0ZTExIiwic3AxIiwiY3JlYXRlMTIiLCJjcmVhdGUxMyIsImNyZWF0ZTE0IiwiY3JlYXRlMTUiLCJjcmVhdGUxNiIsImNyZWF0ZTE3IiwiY3JlYXRlMTgiLCJjcmVhdGUyMSIsImNyZWF0ZTIyIiwiY3JlYXRlMjMiLCJjcmVhdGUyNCIsImNyZWF0ZTI1IiwiY3JlYXRlMzEiLCJjcmVhdGUzMiIsImNyZWF0ZTMzIiwiY3JlYXRlMzQiLCJjcmVhdGUzNSIsImNyZWF0ZTQxIiwiY3JlYXRlNDIiLCJjcmVhdGU0MyIsImNyZWF0ZTQ0IiwiY3JlYXRlNDUiLCJjcmVhdGU0NiIsImNyZWF0ZTQ3IiwiY3JlYXRlNDgiLCJjcmVhdGU0OSIsImNyZWF0ZTQxMCIsImNyZWF0ZTUxIiwiY3JlYXRlNTIiLCJjcmVhdGU1MyIsImNyZWF0ZTU0IiwiY3JlYXRlNTUiLCJjcmVhdGU1NiIsImNyZWF0ZTU3IiwiY3JlYXRlNTgiLCJjcmVhdGU1OSIsImNyZWF0ZTYxIiwiY3JlYXRlNjIiLCJjcmVhdGU2MyIsImNyZWF0ZTY0IiwiY3JlYXRlNjUiLCJjcmVhdGU2NiIsImNyZWF0ZTY3IiwiY3JlYXRlNjgiLCJjcmVhdGU2OSIsImNyZWF0ZTYxMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxLQUFQLEdBQWUsQ0FBQyxDQUFo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QUNBOEQsSUFBQUEsR0FBRyxDQUFDNUQsV0FBSixHQUFrQixLQUFLeEIsVUFBdkI7QUFDQWlCLElBQUFBLE1BQU0sQ0FBQ1EsTUFBUCxHQUFnQlQsSUFBaEI7QUFDQUEsSUFBQUEsSUFBSSxDQUFDYyxXQUFMLENBQWlCLENBQWpCLEVBQW9CLENBQXBCO0FBRUEsU0FBS2YsT0FBTCxDQUFhQyxJQUFiLEVBQW1CQyxNQUFuQjtBQUNIO0FBaDZDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuY2FudmEgPSAtM1xyXG53aW5kb3cuZmluaXNoID0gMFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICAgICAgZGVsZXRlX2J1dHRvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjYWxlX2J1dHRvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBmYXJfbGFibGU6Y2MuTm9kZSxcclxuICAgICAgICBtaWRfbGFibGU6Y2MuTm9kZSxcclxuICAgICAgICBuZWFyX2xhYmxlOmNjLk5vZGUsXHJcblxyXG4gICAgICAgIHNwcml0ZTExOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlXzExOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlMTI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGVfMTI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGUxMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZV8xMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTE0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlXzE0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlMTU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGVfMTU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGUxNjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZV8xNjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTE3OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlXzE3OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlMTg6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGVfMTg6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGUyMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZV8yMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTIyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlXzIyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlMjM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGVfMjM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGUyNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZV8yNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTI1OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlXzI1OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlMzE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGVfMzE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGUzMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZV8zMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTMzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlXzMzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlMzQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGVfMzQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGUzNToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZV8zNToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTQxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlXzQxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlNDI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGVfNDI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGU0Mzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZV80Mzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTQ0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlXzQ0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlNDU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGVfNDU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGU0Njoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZV80Njoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTQ3OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlXzQ3OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlNDg6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGVfNDg6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGU0OToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZV80OToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTQxMDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZV80MTA6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGU1MToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZV81MToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTUyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlXzUyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlNTM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGVfNTM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGU1NDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZV81NDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTU1OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlXzU1OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlNTY6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGVfNTY6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGU1Nzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZV81Nzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTU4OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlXzU4OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlNTk6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGVfNTk6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGU2MToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZV82MToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTYyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlXzYyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlNjM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGVfNjM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGU2NDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZV82NDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTY1OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlXzY1OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlNjY6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGVfNjY6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGU2Nzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZV82Nzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZTY4OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlXzY4OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlNjk6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGVfNjk6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGU2MTA6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHJpdGVfNjEwOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBmYXJfY2FudmEoKSB7XHJcbiAgICAgICAgY2FudmEgPSAtM1xyXG5cclxuICAgICAgICB0aGlzLmZhcl9sYWJsZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHZhciB3b3JkX2FuaW1hdGlvbiA9IHRoaXMuZmFyX2xhYmxlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgICAgIHZhciBjbGlwcyA9IHdvcmRfYW5pbWF0aW9uLmdldENsaXBzKClcclxuICAgICAgICAgICAgd29yZF9hbmltYXRpb24ucGxheShjbGlwc1swXS5uYW1lKVxyXG4gICAgICAgICAgICB2YXIgdGVtcF9sYWJsZSA9IHRoaXMubGFiZWwxXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGVtcF9sYWJsZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9LCAxMTAwKTtcclxuICAgIH0sXHJcblxyXG4gICAgbWlkZGxlX2NhbnZhKCkge1xyXG4gICAgICAgIGNhbnZhID0gLTJcclxuXHJcbiAgICAgICAgdGhpcy5taWRfbGFibGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB2YXIgd29yZF9hbmltYXRpb24gPSB0aGlzLm1pZF9sYWJsZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgICAgICB2YXIgY2xpcHMgPSB3b3JkX2FuaW1hdGlvbi5nZXRDbGlwcygpXHJcbiAgICAgICAgICAgIHdvcmRfYW5pbWF0aW9uLnBsYXkoY2xpcHNbMF0ubmFtZSlcclxuICAgICAgICAgICAgdmFyIHRlbXBfbGFibGUgPSB0aGlzLm1pZF9sYWJsZVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRlbXBfbGFibGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgfSwgMTEwMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG5lYXJfY2FudmEoKSB7XHJcbiAgICAgICAgY2FudmEgPSAtMVxyXG5cclxuICAgICAgICB0aGlzLm5lYXJfbGFibGUuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB2YXIgd29yZF9hbmltYXRpb24gPSB0aGlzLm5lYXJfbGFibGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICAgICAgdmFyIGNsaXBzID0gd29yZF9hbmltYXRpb24uZ2V0Q2xpcHMoKVxyXG4gICAgICAgICAgICB3b3JkX2FuaW1hdGlvbi5wbGF5KGNsaXBzWzBdLm5hbWUpXHJcbiAgICAgICAgICAgIHZhciB0ZW1wX2xhYmxlID0gdGhpcy5uZWFyX2xhYmxlXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGVtcF9sYWJsZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9LCAxMTAwKTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIGNvbnRyb2wobm9kZSwgbm9kZV8xKSB7XHJcbiAgICAgICAgZmluaXNoICs9IDFcclxuXHJcbiAgICAgICAgaWYgKGNhbnZhID09IC0zKSB7XHJcbiAgICAgICAgICAgIG5vZGUuekluZGV4ID0gLTNcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2FudmEgPT0gLTIpIHtcclxuICAgICAgICAgICAgbm9kZS56SW5kZXggPSAtMlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjYW52YSA9PSAtMSkge1xyXG4gICAgICAgICAgICBub2RlLnpJbmRleCA9IC0xXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5o6n5Yi25Zu+5bGCXHJcblxyXG4gICAgICAgIHZhciBkZWxldGVfbm9kZSA9IG5ldyBjYy5Ob2RlKCdidXR0b24nKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5YWI6Kej5Yaz5Lik5Liq5oyJ6ZKuXHJcbiAgICAgICAgdmFyIGRlbGV0ZV9zcHJpdGUgPSBkZWxldGVfbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB2YXIgZGVsZXRlX2J1dHRvbiA9IGRlbGV0ZV9ub2RlLmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIGRlbGV0ZV9zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmRlbGV0ZV9idXR0b247XHJcbiAgICAgICAgZGVsZXRlX25vZGUucGFyZW50ID0gbm9kZV8xXHJcblxyXG4gICAgICAgIHZhciBkZWxldGVfeCA9IG5vZGVfMS53aWR0aCAvIDJcclxuICAgICAgICB2YXIgZGVsZXRlX3kgPSBub2RlXzEuaGVpZ2h0IC8gMlxyXG4gICAgICAgIGRlbGV0ZV9ub2RlLnNldFBvc2l0aW9uKGRlbGV0ZV94LCBkZWxldGVfeSk7XHJcbiAgICAgICAgZGVsZXRlX2J1dHRvbi5ub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uIChidXR0b24pIHtcclxuICAgICAgICAgICAgbm9kZS5kZXN0cm95KClcclxuICAgICAgICAgICAgZmluaXNoIC09IDFcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB2YXIgc2NhbGVfbm9kZSA9IG5ldyBjYy5Ob2RlKCdidXR0b24nKVxyXG4gICAgICAgIHZhciBzY2FsZV9zcHJpdGUgPSBzY2FsZV9ub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHZhciBzY2FsZV9idXR0b24gPSBzY2FsZV9ub2RlLmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHNjYWxlX3Nwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc2NhbGVfYnV0dG9uO1xyXG4gICAgICAgIHNjYWxlX25vZGUucGFyZW50ID0gbm9kZV8xXHJcblxyXG4gICAgICAgIHZhciBzY2FsZV94ID0gbm9kZV8xLndpZHRoIC8gMlxyXG4gICAgICAgIHZhciBzY2FsZV95ID0gbm9kZV8xLmhlaWdodCAvIDJcclxuICAgICAgICBzY2FsZV9ub2RlLnNldFBvc2l0aW9uKHNjYWxlX3gsIC1zY2FsZV95KTtcclxuXHJcblxyXG5cclxuICAgICAgICAvL+e8qeaUvuS7o+eggVxyXG4gICAgICAgIHZhciBkaXN0ID0gMFxyXG5cclxuICAgICAgICB2YXIgWFhYPTA7XHJcbiAgICAgICAgdmFyIFlZWT0wO1xyXG4gICAgICAgIHNjYWxlX2J1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIGxldCBub2RlX3Bvc2l0aW9uID0gbm9kZS5wb3NpdGlvblxyXG5cclxuICAgICAgICAgICAgLy8gbm9kZV9zY2FsZSA9IG5vZGUuc2NhbGVcclxuICAgICAgICAgICAgbGV0IHRvdWNoX2xvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgICAgICBsZXQgbm9kZVBvcyA9IG5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hfbG9jYXRpb24pXHJcbiAgICAgICAgICAgIGxldCBYID0gbm9kZS5wb3NpdGlvbi54XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coWClcclxuICAgICAgICAgICAgbGV0IFkgPSBub2RlLnBvc2l0aW9uLnlcclxuXHJcbiAgICAgICAgICAgIHZhciBkaXN0MSA9IGNjLnYyKFgsIFkpLnN1Yihub2RlUG9zKS5tYWcoKTsvLyDorqHnrpd0b3VjaF9zdGFydOeahOinpueCueS4jueJqeS9k+WdkOagh+eahOi3neemu1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coZGlzdDEpXHJcbiAgICAgICAgICAgIGRpc3QgPSBkaXN0MVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8vLy8vXHJcblxyXG4gICAgICAgICAgICBYWFg9dG91Y2hfbG9jYXRpb24ueDtcclxuICAgICAgICAgICAgWVlZPXRvdWNoX2xvY2F0aW9uLnk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHNjYWxlX2J1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy/nvKnmlL7ku6PnoIFcclxuICAgICAgICAgICAgbGV0IHRvdWNoX2xvY2F0aW9uMiA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgICAgICAgICAgbGV0IG5vZGVQb3MgPSBub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRvdWNoX2xvY2F0aW9uMilcclxuICAgICAgICAgICAgbGV0IFhYID0gbm9kZS5wb3NpdGlvbi54XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhYWClcclxuICAgICAgICAgICAgbGV0IFlZID0gbm9kZS5wb3NpdGlvbi55XHJcbiAgICAgICAgICAgIGxldCBkaXN0MiA9IGNjLnYyKFhYLCBZWSkuc3ViKG5vZGVQb3MpLm1hZygpOy8vIOiuoeeul+enu+WKqOi/h+eoi+S4reeahOinpueCueWdkOagh+S4jueJqeS9k+WdkOagh+eahOi3neemu1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coZGlzdClcclxuICAgICAgICAgICAgLy8gY2MubG9nKGRpc3QyKVxyXG4gICAgICAgICAgICAvLyBjYy5sb2coZGlzdClcclxuXHJcbiAgICAgICAgICAgIGxldCByYXRlID0gZGlzdDIgLyBkaXN0IC8vIOi3neemu+avlOWAvCBcclxuICAgICAgICAgICAgLy8gY2MubG9nKHJhdGUpXHJcbiAgICAgICAgICAgIC8vIOaOp+WItuavlOWAvOeahOacgOWkp+S4jeWkp+S6jjPvvIzmnIDlsI/kuI3lsI/kuo4wLjVcclxuICAgICAgICAgICAgaWYgKHJhdGUgPiAzKSB7XHJcbiAgICAgICAgICAgICAgICByYXRlID0gM1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJhdGUgPD0gMC41KSB7XHJcbiAgICAgICAgICAgICAgICByYXRlID0gMC41XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm9kZS5zY2FsZSAqPSByYXRlXHJcblxyXG5cclxuICAgICAgICAgICAgLy/ml4vovazku6PnoIFcclxuICAgICAgICAgICAgLy8gZnVuY3Rpb24gZ2V0QW5nbGUocHgsIHB5LCBteCwgbXkpIHsvL+iOt+W+l+S6uueJqeS4reW/g+WSjOm8oOagh+WdkOagh+i/nue6v++8jOS4jnnovbTmraPljYrovbTkuYvpl7TnmoTlpLnop5JcclxuICAgICAgICAgICAgLy8gICAgIHZhciB4ID0gTWF0aC5hYnMocHggLSBteCk7XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgeSA9IE1hdGguYWJzKHB5IC0gbXkpO1xyXG4gICAgICAgICAgICAvLyAgICAgdmFyIHogPSBNYXRoLnNxcnQoTWF0aC5wb3coeCwgMikgKyBNYXRoLnBvdyh5LCAyKSk7XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgY29zID0geSAvIHo7XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgcmFkaW5hID0gTWF0aC5hY29zKGNvcyk7Ly/nlKjlj43kuInop5Llh73mlbDmsYLlvKfluqZcclxuICAgICAgICAgICAgLy8gICAgIHZhciBhbmdsZSA9IE1hdGguZmxvb3IoMTgwIC8gKE1hdGguUEkgLyByYWRpbmEpKTsvL+WwhuW8p+W6pui9rOaNouaIkOinkuW6plxyXG4gICAgICAgICAgICAvLyAgICAgLy8gY2MubG9nKGFuZ2xlKVxyXG5cclxuICAgICAgICAgICAgLy8gICAgIGlmIChteCA+IHB4ICYmIG15ID4gcHkpIHsvL+m8oOagh+WcqOesrOWbm+ixoemZkFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGFuZ2xlID0gMTgwIC0gYW5nbGU7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgaWYgKG14ID09IHB4ICYmIG15ID4gcHkpIHsvL+m8oOagh+WcqHnovbTotJ/mlrnlkJHkuIpcclxuICAgICAgICAgICAgLy8gICAgICAgICBhbmdsZSA9IDE4MDtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICAgICBpZiAobXggPiBweCAmJiBteSA9PSBweSkgey8v6byg5qCH5ZyoeOi9tOato+aWueWQkeS4ilxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGFuZ2xlID0gOTA7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgaWYgKG14IDwgcHggJiYgbXkgPiBweSkgey8v6byg5qCH5Zyo56ys5LiJ6LGh6ZmQXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYW5nbGUgPSAxODAgKyBhbmdsZTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICAgICBpZiAobXggPCBweCAmJiBteSA9PSBweSkgey8v6byg5qCH5ZyoeOi9tOi0n+aWueWQkVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGFuZ2xlID0gMjcwO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gICAgIGlmIChteCA8IHB4ICYmIG15IDwgcHkpIHsvL+m8oOagh+WcqOesrOS6jOixoemZkFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGFuZ2xlID0gMzYwIC0gYW5nbGU7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gYW5nbGU7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBub2RlLmFuZ2xlID0gZ2V0QW5nbGUoWFhYLCBZWVksIHRvdWNoX2xvY2F0aW9uMi54LCB0b3VjaF9sb2NhdGlvbjIueSlcclxuXHJcbiAgICAgICAgICAgIC8vIC8vIG5vZGUuYW5nbGUgPSBnZXRBbmdsZShYWCwgWVksIHRvdWNoX2xvY2F0aW9uMi54LCB0b3VjaF9sb2NhdGlvbjIueSlcclxuXHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhYWFgpXHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhZWVkpO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2codG91Y2hfbG9jYXRpb24yLngpO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2codG91Y2hfbG9jYXRpb24yLnkpO1xyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB2YXIgZW5hYmxlID0gdHJ1ZVxyXG4gICAgICAgIHZhciB0aW1lQXJyYXkgPSBbXVxyXG5cclxuICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy/ojrflj5bmiYvmjIfop6bngrnot53nprvkuIrkuIDmrKHngrnnmoTkv6Hmga9cclxuICAgICAgICAgICAgbGV0IGRlbHRhID0gZXZlbnQuZ2V0RGVsdGEoKTtcclxuICAgICAgICAgICAgLy/lop7liqDpmZDlrprmnaHku7ZcclxuICAgICAgICAgICAgbGV0IG1pblggPSAtbm9kZS5wYXJlbnQud2lkdGggLyAyICsgbm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIGxldCBtYXhYID0gbm9kZS5wYXJlbnQud2lkdGggLyAyIC0gbm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIGxldCBtaW5ZID0gLW5vZGUucGFyZW50LmhlaWdodCAvIDIgKyBub2RlLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgIGxldCBtYXhZID0gbm9kZS5wYXJlbnQuaGVpZ2h0IC8gMiAtIG5vZGUuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgbGV0IG1vdmVYID0gbm9kZS54ICsgZGVsdGEueDtcclxuICAgICAgICAgICAgbGV0IG1vdmVZID0gbm9kZS55ICsgZGVsdGEueTtcclxuICAgICAgICAgICAgLy/mjqfliLbnp7vliqjojIPlm7RcclxuICAgICAgICAgICAgaWYgKG1vdmVYIDwgbWluWCkge1xyXG4gICAgICAgICAgICAgICAgbW92ZVggPSBtaW5YO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1vdmVYID4gbWF4WCkge1xyXG4gICAgICAgICAgICAgICAgbW92ZVggPSBtYXhYO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtb3ZlWSA8IG1pblkpIHtcclxuICAgICAgICAgICAgICAgIG1vdmVZID0gbWluWTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtb3ZlWSA+IG1heFkpIHtcclxuICAgICAgICAgICAgICAgIG1vdmVZID0gbWF4WTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+enu+WKqOWwj+i9puiKgueCuVxyXG4gICAgICAgICAgICBub2RlLnggPSBub2RlLnggKyBkZWx0YS54O1xyXG4gICAgICAgICAgICBub2RlLnkgPSBub2RlLnkgKyBkZWx0YS55O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8v5b2T6byg5qCH5oqs6LW355qE5pe25YCZ5oGi5aSN54q25oCBXHJcblxyXG5cclxuXHJcbiAgICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgIHZhciB0aW1lID0gZGF0ZS5nZXRUaW1lKClcclxuICAgICAgICAgICAgdGltZUFycmF5LnB1c2godGltZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHRpbWVBcnJheS5sZW5ndGggPiAxICYmICh0aW1lQXJyYXlbMV0gLSB0aW1lQXJyYXlbMF0pIC8gMTAwMCA8IDAuOCkge1xyXG4gICAgICAgICAgICAgICAgdGltZUFycmF5ID0gW107Ly8x56eS5YaF5pyq6L+e57ut54K55Ye7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLlj4zlh7tcIilcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZW5hYmxlID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVfMS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaCAtPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSlcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJkaXNhYmxlXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmaW5pc2ggKz0gMVxyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICBub2RlXzEuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZWx0YSA9IGV2ZW50LmdldERlbHRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5aKe5Yqg6ZmQ5a6a5p2h5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtaW5YID0gLW5vZGUucGFyZW50LndpZHRoIC8gMiArIG5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4WCA9IG5vZGUucGFyZW50LndpZHRoIC8gMiAtIG5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWluWSA9IC1ub2RlLnBhcmVudC5oZWlnaHQgLyAyICsgbm9kZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4WSA9IG5vZGUucGFyZW50LmhlaWdodCAvIDIgLSBub2RlLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlWCA9IG5vZGUueCArIGRlbHRhLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlWSA9IG5vZGUueSArIGRlbHRhLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5o6n5Yi256e75Yqo6IyD5Zu0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlWCA8IG1pblgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVYID0gbWluWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb3ZlWCA+IG1heFgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVYID0gbWF4WDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW92ZVkgPCBtaW5ZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlWSA9IG1pblk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW92ZVkgPiBtYXhZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlWSA9IG1heFk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/np7vliqjlsI/ovaboioLngrlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS54ID0gbm9kZS54ICsgZGVsdGEueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS55ID0gbm9kZS55ICsgZGVsdGEueTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvL+W9k+m8oOagh+aKrOi1t+eahOaXtuWAmeaBouWkjeeKtuaAgVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcImVuYWJsZVwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aW1lQXJyYXkubGVuZ3RoID4gMSAmJiAodGltZUFycmF5WzFdIC0gdGltZUFycmF5WzBdKSAvIDEwMDAgPiAwLjgpIHtcclxuICAgICAgICAgICAgICAgIHRpbWVBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGltZUFycmF5LnB1c2godGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZTExKCkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGUxMTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB2YXIgbm9kZV8xID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlXzEuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVfMTE7XHJcbiAgICAgICAgbm9kZV8xLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sKG5vZGUsIG5vZGVfMSlcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlMTIoKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZTEyO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHZhciBub2RlXzEgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGVfMS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZV8xMjtcclxuICAgICAgICBub2RlXzEucGFyZW50ID0gbm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wobm9kZSwgbm9kZV8xKVxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGUxMygpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICBub2RlLnNjYWxlID0gMC41O1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlMTM7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdmFyIG5vZGVfMSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZV8xLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlXzEzO1xyXG4gICAgICAgIG5vZGVfMS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbChub2RlLCBub2RlXzEpXHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZTE0KCkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGUxNDtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB2YXIgbm9kZV8xID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlXzEuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVfMTQ7XHJcbiAgICAgICAgbm9kZV8xLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sKG5vZGUsIG5vZGVfMSlcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlMTUoKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZTE1O1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHZhciBub2RlXzEgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGVfMS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZV8xNTtcclxuICAgICAgICBub2RlXzEucGFyZW50ID0gbm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wobm9kZSwgbm9kZV8xKVxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGUxNigpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICBub2RlLnNjYWxlID0gMC41O1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlMTY7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdmFyIG5vZGVfMSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZV8xLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlXzE2O1xyXG4gICAgICAgIG5vZGVfMS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbChub2RlLCBub2RlXzEpXHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZTE3KCkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGUxNztcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB2YXIgbm9kZV8xID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlXzEuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVfMTc7XHJcbiAgICAgICAgbm9kZV8xLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sKG5vZGUsIG5vZGVfMSlcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlMTgoKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZTE4O1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHZhciBub2RlXzEgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGVfMS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZV8xODtcclxuICAgICAgICBub2RlXzEucGFyZW50ID0gbm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wobm9kZSwgbm9kZV8xKVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgY3JlYXRlMjEoKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZTIxO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHZhciBub2RlXzEgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGVfMS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZV8yMTtcclxuICAgICAgICBub2RlXzEucGFyZW50ID0gbm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wobm9kZSwgbm9kZV8xKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZTIyKCkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGUyMjtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB2YXIgbm9kZV8xID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlXzEuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVfMjI7XHJcbiAgICAgICAgbm9kZV8xLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sKG5vZGUsIG5vZGVfMSlcclxuICAgIH0sXHJcbiAgICBjcmVhdGUyMygpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICBub2RlLnNjYWxlID0gMC41O1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlMjM7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdmFyIG5vZGVfMSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZV8xLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlXzIzO1xyXG4gICAgICAgIG5vZGVfMS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbChub2RlLCBub2RlXzEpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlMjQoKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZTI0O1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHZhciBub2RlXzEgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGVfMS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZV8yNDtcclxuICAgICAgICBub2RlXzEucGFyZW50ID0gbm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wobm9kZSwgbm9kZV8xKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZTI1KCkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGUyNTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB2YXIgbm9kZV8xID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlXzEuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVfMjU7XHJcbiAgICAgICAgbm9kZV8xLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sKG5vZGUsIG5vZGVfMSlcclxuICAgIH0sXHJcbiAgICBjcmVhdGUzMSgpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICBub2RlLnNjYWxlID0gMC41O1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlMzE7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdmFyIG5vZGVfMSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZV8xLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlXzMxO1xyXG4gICAgICAgIG5vZGVfMS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbChub2RlLCBub2RlXzEpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlMzIoKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZTMyO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHZhciBub2RlXzEgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGVfMS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZV8zMjtcclxuICAgICAgICBub2RlXzEucGFyZW50ID0gbm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wobm9kZSwgbm9kZV8xKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZTMzKCkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGUzMztcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB2YXIgbm9kZV8xID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlXzEuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVfMzM7XHJcbiAgICAgICAgbm9kZV8xLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sKG5vZGUsIG5vZGVfMSlcclxuICAgIH0sXHJcbiAgICBjcmVhdGUzNCgpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICBub2RlLnNjYWxlID0gMC41O1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlMzQ7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdmFyIG5vZGVfMSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZV8xLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlXzM0O1xyXG4gICAgICAgIG5vZGVfMS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbChub2RlLCBub2RlXzEpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlMzUoKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZTM1O1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHZhciBub2RlXzEgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGVfMS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZV8zNTtcclxuICAgICAgICBub2RlXzEucGFyZW50ID0gbm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wobm9kZSwgbm9kZV8xKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZTQxKCkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGU0MTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB2YXIgbm9kZV8xID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlXzEuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVfNDE7XHJcbiAgICAgICAgbm9kZV8xLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sKG5vZGUsIG5vZGVfMSlcclxuICAgIH0sXHJcbiAgICBjcmVhdGU0MigpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICBub2RlLnNjYWxlID0gMC41O1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlNDI7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdmFyIG5vZGVfMSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZV8xLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlXzQyO1xyXG4gICAgICAgIG5vZGVfMS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbChub2RlLCBub2RlXzEpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlNDMoKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZTQzO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHZhciBub2RlXzEgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGVfMS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZV80MztcclxuICAgICAgICBub2RlXzEucGFyZW50ID0gbm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wobm9kZSwgbm9kZV8xKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZTQ0KCkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGU0NDtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB2YXIgbm9kZV8xID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlXzEuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVfNDQ7XHJcbiAgICAgICAgbm9kZV8xLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sKG5vZGUsIG5vZGVfMSlcclxuICAgIH0sXHJcbiAgICBjcmVhdGU0NSgpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICBub2RlLnNjYWxlID0gMC41O1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlNDU7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdmFyIG5vZGVfMSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZV8xLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlXzQ1O1xyXG4gICAgICAgIG5vZGVfMS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbChub2RlLCBub2RlXzEpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlNDYoKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZTQ2O1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHZhciBub2RlXzEgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGVfMS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZV80NjtcclxuICAgICAgICBub2RlXzEucGFyZW50ID0gbm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wobm9kZSwgbm9kZV8xKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZTQ3KCkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGU0NztcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB2YXIgbm9kZV8xID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlXzEuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVfNDc7XHJcbiAgICAgICAgbm9kZV8xLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sKG5vZGUsIG5vZGVfMSlcclxuICAgIH0sXHJcbiAgICBjcmVhdGU0OCgpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICBub2RlLnNjYWxlID0gMC41O1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlNDg7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdmFyIG5vZGVfMSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZV8xLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlXzQ4O1xyXG4gICAgICAgIG5vZGVfMS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbChub2RlLCBub2RlXzEpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlNDkoKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZTQ5O1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHZhciBub2RlXzEgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGVfMS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZV80OTtcclxuICAgICAgICBub2RlXzEucGFyZW50ID0gbm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wobm9kZSwgbm9kZV8xKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZTQxMCgpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICBub2RlLnNjYWxlID0gMC41O1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlNDEwO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHZhciBub2RlXzEgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGVfMS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZV80MTA7XHJcbiAgICAgICAgbm9kZV8xLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sKG5vZGUsIG5vZGVfMSlcclxuICAgIH0sXHJcbiAgICBjcmVhdGU1MSgpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICBub2RlLnNjYWxlID0gMC41O1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlNTE7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdmFyIG5vZGVfMSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZV8xLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlXzUxO1xyXG4gICAgICAgIG5vZGVfMS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbChub2RlLCBub2RlXzEpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlNTIoKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZTUyO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHZhciBub2RlXzEgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGVfMS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZV81MjtcclxuICAgICAgICBub2RlXzEucGFyZW50ID0gbm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wobm9kZSwgbm9kZV8xKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZTUzKCkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGU1MztcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB2YXIgbm9kZV8xID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlXzEuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVfNTM7XHJcbiAgICAgICAgbm9kZV8xLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sKG5vZGUsIG5vZGVfMSlcclxuICAgIH0sXHJcbiAgICBjcmVhdGU1NCgpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICBub2RlLnNjYWxlID0gMC41O1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlNTQ7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdmFyIG5vZGVfMSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZV8xLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlXzU0O1xyXG4gICAgICAgIG5vZGVfMS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbChub2RlLCBub2RlXzEpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlNTUoKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZTU1O1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHZhciBub2RlXzEgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGVfMS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZV81NTtcclxuICAgICAgICBub2RlXzEucGFyZW50ID0gbm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wobm9kZSwgbm9kZV8xKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZTU2KCkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGU1NjtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB2YXIgbm9kZV8xID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlXzEuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVfNTY7XHJcbiAgICAgICAgbm9kZV8xLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sKG5vZGUsIG5vZGVfMSlcclxuICAgIH0sXHJcbiAgICBjcmVhdGU1NygpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICBub2RlLnNjYWxlID0gMC41O1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlNTc7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdmFyIG5vZGVfMSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZV8xLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlXzU3O1xyXG4gICAgICAgIG5vZGVfMS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbChub2RlLCBub2RlXzEpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlNTgoKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZTU4O1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHZhciBub2RlXzEgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGVfMS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZV81ODtcclxuICAgICAgICBub2RlXzEucGFyZW50ID0gbm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wobm9kZSwgbm9kZV8xKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZTU5KCkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGU1OTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB2YXIgbm9kZV8xID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlXzEuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVfNTk7XHJcbiAgICAgICAgbm9kZV8xLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sKG5vZGUsIG5vZGVfMSlcclxuICAgIH0sXHJcbiAgICBjcmVhdGU2MSgpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICBub2RlLnNjYWxlID0gMC41O1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlNjE7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdmFyIG5vZGVfMSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZV8xLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlXzYxO1xyXG4gICAgICAgIG5vZGVfMS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbChub2RlLCBub2RlXzEpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlNjIoKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZTYyO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHZhciBub2RlXzEgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGVfMS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZV82MjtcclxuICAgICAgICBub2RlXzEucGFyZW50ID0gbm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wobm9kZSwgbm9kZV8xKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZTYzKCkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGU2MztcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB2YXIgbm9kZV8xID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlXzEuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVfNjM7XHJcbiAgICAgICAgbm9kZV8xLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sKG5vZGUsIG5vZGVfMSlcclxuICAgIH0sXHJcbiAgICBjcmVhdGU2NCgpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICBub2RlLnNjYWxlID0gMC41O1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlNjQ7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdmFyIG5vZGVfMSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZV8xLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlXzY0O1xyXG4gICAgICAgIG5vZGVfMS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbChub2RlLCBub2RlXzEpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlNjUoKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZTY1O1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHZhciBub2RlXzEgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGVfMS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZV82NTtcclxuICAgICAgICBub2RlXzEucGFyZW50ID0gbm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wobm9kZSwgbm9kZV8xKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZTY2KCkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGU2NjtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB2YXIgbm9kZV8xID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlXzEuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVfNjY7XHJcbiAgICAgICAgbm9kZV8xLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sKG5vZGUsIG5vZGVfMSlcclxuICAgIH0sXHJcbiAgICBjcmVhdGU2NygpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICBub2RlLnNjYWxlID0gMC41O1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlNjc7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdmFyIG5vZGVfMSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZV8xLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlXzY3O1xyXG4gICAgICAgIG5vZGVfMS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbChub2RlLCBub2RlXzEpXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlNjgoKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZTY4O1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHZhciBub2RlXzEgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGVfMS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZV82ODtcclxuICAgICAgICBub2RlXzEucGFyZW50ID0gbm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wobm9kZSwgbm9kZV8xKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZTY5KCkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGU2OTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB2YXIgbm9kZV8xID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlXzEuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVfNjk7XHJcbiAgICAgICAgbm9kZV8xLnBhcmVudCA9IG5vZGU7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sKG5vZGUsIG5vZGVfMSlcclxuICAgIH0sXHJcbiAgICBjcmVhdGU2MTAoKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICB2YXIgc3AxID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcDEuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZTYxMDtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG5cclxuICAgICAgICB2YXIgbm9kZV8xID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIHZhciBzcDEgPSBub2RlXzEuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVfNjEwO1xyXG4gICAgICAgIG5vZGVfMS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbChub2RlLCBub2RlXzEpXHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/游戏界面.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8c44cahgAZLZZ5ValsBUPUV', '游戏界面');
// Scripts/游戏界面.js

"use strict";

var _properties;

window.control_sucai = 1;
window.control_tuceng = 0;
window.times = 1;
cc.Class({
  "extends": cc.Component,
  properties: (_properties = {
    base_node: cc.Node,
    tuceng: cc.Node,
    sucai: cc.Node,
    finish_canva: cc.Node,
    back_button: cc.Node,
    back_button2: cc.Node,
    back_button3: cc.Node,
    back_canva: cc.Node,
    back_canva2: cc.Node,
    finish_button: cc.Node,
    UI: cc.Node,
    label1: cc.EditBox,
    label2: cc.EditBox,
    zuopinming: cc.Node,
    shuming: cc.Node,
    baocun_button: cc.Node,
    fenxiang_button: cc.Node,
    lable1: cc.Node,
    save_canva: cc.Node
  }, _properties["baocun_button"] = cc.Node, _properties["fenxiang_button"] = cc.Node, _properties.jiaocheng = cc.Node, _properties.jiaocheng_pic = cc.Node, _properties.sprite11 = {
    "default": null,
    type: cc.SpriteFrame
  }, _properties.sprite_11 = {
    "default": null,
    type: cc.SpriteFrame
  }, _properties.delete_button = {
    "default": null,
    type: cc.SpriteFrame
  }, _properties.scale_button = {
    "default": null,
    type: cc.SpriteFrame
  }, _properties.jiaocheng_lable0 = cc.Node, _properties.jiaocheng_lable1 = cc.Node, _properties.jiaocheng_lable2 = cc.Node, _properties.jiaocheng_lable3 = cc.Node, _properties.jiaocheng_lable4 = cc.Node, _properties.jiaocheng_lable5 = cc.Node, _properties.jiaocheng_lable6 = cc.Node, _properties.jiaocheng_lable7 = cc.Node, _properties),
  onLoad: function onLoad() {
    cc.debug.setDisplayStats(false);
    this.passiveShare();
    this.getWXQuery();
  },
  start: function start() {
    var appear = this.base_node.getComponent(cc.Animation);
    var clips = appear.getClips();
    appear.play(clips[0].name);
    this.base_node.pauseSystemEvents(true);
    this.finish_button.active = false;
    this.back_button.active = false;
    var jiaocheng_lable0 = this.jiaocheng_lable0;
    setTimeout(function () {
      jiaocheng_lable0.active = true;
      var disappear = jiaocheng_lable0.getComponent(cc.Animation);
      var clips = disappear.getClips();
      disappear.play(clips[0].name);
    }, 1200);
    var jiaocheng_lable1 = this.jiaocheng_lable1;
    var jiaocheng_lable0 = this.jiaocheng_lable0;
    var jiaocheng_pic = this.jiaocheng_pic;
    setTimeout(function () {
      jiaocheng_lable1.active = true;
      jiaocheng_lable0.active = false;
      jiaocheng_pic.active = true;
    }, 3200);
  },
  onclickEnter: function onclickEnter() {
    this.finish_canva.pauseSystemEvents(true);
    this.save_canva.pauseSystemEvents(true);
    this.label1.active = true;
    var string1 = this.label1.string;
    this.zuopinming.getComponent(cc.Label).string = string1;
    this.label2.active = true;
    var string2 = this.label2.string;
    this.shuming.getComponent(cc.Label).string = string2;
    this.UI.active = true;
    var disappear = this.finish_canva.getComponent(cc.Animation);
    var clips = disappear.getClips();
    disappear.play(clips[1].name);
    var save_canva = this.save_canva;
    setTimeout(function () {
      save_canva.resumeSystemEvents(true);
    }, 1000);
    this.save_canva.active = true;
    var save_canva_Animation = this.save_canva.getComponent(cc.Animation);
    save_canva_Animation.play('保存分享按钮浮现');
  },
  back_confirm: function back_confirm() {
    this.back_canva.active = true;
    var appear = this.back_canva.getComponent(cc.Animation);
    var clips = appear.getClips();
    appear.play(clips[0].name);
    this.base_node.pauseSystemEvents(true);
    this.back_canva.resumeSystemEvents(true);
  },
  back_confirm_true: function back_confirm_true() {
    cc.director.loadScene("主页面");
    finish = 0;
  },
  back_confirm_false: function back_confirm_false() {
    var disappear = this.back_canva.getComponent(cc.Animation);
    var clips = disappear.getClips();
    disappear.play(clips[1].name);
    var base_node = this.base_node;
    setTimeout(function () {
      base_node.resumeSystemEvents(true);
    }, 1000);
    this.back_canva.pauseSystemEvents(true);
  },
  sucai_change: function sucai_change() {
    if (control_sucai == 1) {
      var down = this.sucai.getComponent(cc.Animation);
      var clips = down.getClips();
      down.play(clips[0].name);
      control_sucai = 0;
    } else {
      var up = this.sucai.getComponent(cc.Animation);
      var clips = up.getClips();
      up.play(clips[1].name);
      control_sucai = 1;
    }
  },
  tuceng_change: function tuceng_change() {
    if (control_tuceng == 1) {
      var right = this.tuceng.getComponent(cc.Animation);
      var clips = right.getClips();
      right.play(clips[0].name);
      control_tuceng = 0;
    } else {
      var left = this.tuceng.getComponent(cc.Animation);
      var clips = left.getClips();
      left.play(clips[1].name);
      control_tuceng = 1;
    }
  },
  finish: function (_finish) {
    function finish() {
      return _finish.apply(this, arguments);
    }

    finish.toString = function () {
      return _finish.toString();
    };

    return finish;
  }(function () {
    if (finish == 0) {
      this.base_node.pauseSystemEvents(true);
      this.finish_canva.pauseSystemEvents(true);
      this.finish_canva.active = true;
      var appear = this.finish_canva.getComponent(cc.Animation);
      var clips = appear.getClips();
      appear.play(clips[0].name);
      var UI_disappear = this.UI.getComponent(cc.Animation);
      var clips = UI_disappear.getClips();
      UI_disappear.play(clips[1].name);
      var finish_canva = this.finish_canva;
      setTimeout(function () {
        // UI.active = false
        finish_canva.resumeSystemEvents(true);
      }, 1000);
    } else {
      this.label1.active = true;
      var word_animation = this.lable1.getComponent(cc.Animation);
      var clips = word_animation.getClips();
      word_animation.play(clips[0].name);
      var temp_lable = this.label1;
      setTimeout(function () {
        temp_lable.active = false;
      }, 1100);
    }
  }),
  close_finish: function close_finish() {
    this.base_node.pauseSystemEvents(true);
    this.finish_canva.pauseSystemEvents(true);
    this.UI.active = true;
    var UI_appear = this.UI.getComponent(cc.Animation);
    var clips = UI_appear.getClips();
    UI_appear.play(clips[0].name);
    var disappear = this.finish_canva.getComponent(cc.Animation);
    var clips = disappear.getClips();
    disappear.play(clips[1].name);
    var base_node = this.base_node;
    var finish_canva = this.finish_canva;
    setTimeout(function () {
      finish_canva.active = false;
      base_node.resumeSystemEvents(true);
    }, 1000);
    this.zuopinming.getComponent(cc.Label).string = "";
    this.shuming.getComponent(cc.Label).string = "";
  },
  back2: function back2() {
    this.finish_canva.active = true;
    this.finish_canva.pauseSystemEvents(true);
    this.save_canva.pauseSystemEvents(true);
    var disappear = this.save_canva.getComponent(cc.Animation);
    var clips = disappear.getClips();
    disappear.play(clips[1].name);
    var finish_canva_Animation = this.finish_canva.getComponent(cc.Animation);
    finish_canva_Animation.play('浮现');
    var finish_canva = this.finish_canva;
    setTimeout(function () {
      finish_canva.resumeSystemEvents(true);
    }, 1000);
  },
  back_confirm_false2: function back_confirm_false2() {
    var disappear2 = this.back_canva2.getComponent(cc.Animation);
    var clips = disappear2.getClips();
    disappear2.play(clips[1].name);
    var back_canva2 = this.back_canva2;
    setTimeout(function () {
      back_canva2.active = false;
    }, 1000);
    this.save_canva.resumeSystemEvents(true);
  },
  takePhoto: function takePhoto() {
    this.baocun_button.active = true;
    var baocun_button_Animation = this.baocun_button.getComponent(cc.Animation);
    baocun_button_Animation.play('保存分享按钮消失'); // this.Grey_Canva.active = false 

    this.fenxiang_button.active = true;
    var fenxiang_button_Animation = this.fenxiang_button.getComponent(cc.Animation);
    fenxiang_button_Animation.play('保存分享按钮消失');
    this.back_button2.active = true;
    var back_button2_Animation = this.back_button2.getComponent(cc.Animation);
    back_button2_Animation.play('返回消散');
    this.back_button3.active = true;
    var back_button3_Animation = this.back_button3.getComponent(cc.Animation);
    back_button3_Animation.play('返回消散');
    this.save_canva.pauseSystemEvents(true);
    setTimeout(function () {
      var _this = this;

      cc.log("100");

      if (typeof wx === 'undefined') {
        return;
      }

      wx.authorize({
        scope: 'scope.writePhotosAlbum',
        // 需要获取相册权限
        success: function success(res) {
          // cc.audioEngine.playEffect(this.photoAudio, false);
          // 获取当前屏幕截图，参数参照文档自己设
          _this.tempFilePath = canvas.toTempFilePathSync({
            x: 0,
            y: 0,
            fileType: 'jpg',
            quality: '1'
          }); // 将截图保存到相册中

          wx.saveImageToPhotosAlbum({
            filePath: _this.tempFilePath,
            success: function success(res) {
              wx.showToast({
                title: '已保存到相册',
                icon: 'success',
                duration: 2000
              });
            },
            fail: function fail(res) {
              console.log(res);
              console.log('图片保存失败');
            }
          });
        },
        fail: function fail(res) {
          console.log('授权失败');
        }
      });
    }, 2500);
    var self = this;
    setTimeout(function () {
      baocun_button_Animation.play('保存分享按钮浮现');
      fenxiang_button_Animation.play('保存分享按钮浮现');
      back_button2_Animation.play('返回浮现');
      back_button3_Animation.play('返回浮现');
      self.save_canva.resumeSystemEvents(true);
    }, 4000);
  },
  back: function back() {
    cc.director.loadScene("主页面");
  },
  activeShare: function activeShare() {
    // 主动分享按钮
    if (typeof wx === 'undefined') {
      return;
    }

    var id = 'TeB1yqTNSd2qaCOK1D+Jhg=='; // 通过 MP 系统审核的图片编号

    var url = 'https://mmocgame.qpic.cn/wechatgame/jibbdURhC6kg6zMvf4meTJ3QHUuFPc79NgmI1ia9hPx1AdUH5icgWDOUQQYsJIlZjicC/0'; // 通过 MP 系统审核的图片地址

    wx.shareAppMessage({
      title: '',
      //分享卡片上的标题
      imageUrlId: id,
      imageUrl: url
    });
  },
  passiveShare: function passiveShare() {
    // 监听小程序右上角菜单的「转发」按钮
    if (typeof wx === 'undefined') {
      return;
    } // 显示当前页面的转发按钮


    wx.showShareMenu({
      success: function success(res) {
        console.log('开启被动转发成功！');
      },
      fail: function fail(res) {
        console.log(res);
        console.log('开启被动转发失败！');
      }
    });
    wx.onShareAppMessage(function () {
      return {
        title: '这里写分享卡片的标题',
        imageUrl: cc.url.raw('img.png'),
        // 分享图片要放在 wechatgame/res/raw-assets 路径下
        query: 'shareMsg=' + '分享卡片上所带的信息' // query最大长度(length)为2048

      };
    });
  },
  getWXQuery: function getWXQuery() {
    // 当其他玩家从分享卡片上点击进入时，获取query参数
    if (typeof wx === 'undefined') {
      return;
    }

    var object = wx.getLaunchOptionsSync();
    var shareMsg = object.query['shareMsg'];
    console.log(shareMsg);
    return shareMsg;
  },
  skip: function skip() {
    this.jiaocheng.active = false;
    this.finish_button.active = true;
    this.back_button.active = true;
    this.base_node.resumeSystemEvents(true);
    times = 1;
  },
  start_game: function start_game() {
    if (times == 6) {
      this.jiaocheng_lable7.getComponent(cc.Button).enabled = false;
      var disappear = this.jiaocheng_lable7.getComponent(cc.Animation);
      var clips = disappear.getClips();
      disappear.play(clips[1].name);
      var jiaocheng = this.jiaocheng;
      var base_node = this.base_node;
      var finish_button = this.finish_button;
      var back_button = this.back_button;
      setTimeout(function () {
        finish_button.active = true;
        back_button.active = true;
        jiaocheng.active = false;
        base_node.resumeSystemEvents(true);
      }, 1000);
      times = 1;
    }
  },
  control: function control(node, node_1) {
    var _this2 = this;

    var delete_node = new cc.Node('button');
    var delete_sprite = delete_node.addComponent(cc.Sprite);
    var delete_button = delete_node.addComponent(cc.Button);
    delete_sprite.spriteFrame = this.delete_button;
    delete_node.parent = node_1;
    var delete_x = node_1.width / 2;
    var delete_y = node_1.height / 2;
    delete_node.setPosition(delete_x, delete_y);
    delete_button.enabled = false;
    delete_button.node.on('click', function (button) {
      node.destroy();
    });
    var scale_node = new cc.Node('button');
    var scale_sprite = scale_node.addComponent(cc.Sprite);
    var scale_button = scale_node.addComponent(cc.Button);
    scale_sprite.spriteFrame = this.scale_button;
    scale_node.parent = node_1;
    var scale_x = node_1.width / 2;
    var scale_y = node_1.height / 2;
    scale_node.setPosition(scale_x, -scale_y);
    var node_x = node.position.x;
    var node_y = node.position.y;
    this.jiaocheng_lable2.parent = node;
    this.jiaocheng_lable2.scale = 2.1;
    this.jiaocheng_lable2.setPosition(node_x - 300, node_y + 450);
    this.jiaocheng_lable2.active = true; //缩放代码

    var dist = 0;
    var XXX = 0;
    var YYY = 0;
    scale_button.node.on(cc.Node.EventType.TOUCH_START, function (event) {
      var touch_location = event.getLocation();
      var nodePos = node.convertToNodeSpaceAR(touch_location);
      var X = node.position.x;
      var Y = node.position.y;
      var dist1 = cc.v2(X, Y).sub(nodePos).mag(); // 计算touch_start的触点与物体坐标的距离

      dist = dist1;
      XXX = touch_location.x;
      YYY = touch_location.y;
    });
    scale_button.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      //缩放代码
      var touch_location2 = event.getLocation();
      var nodePos = node.convertToNodeSpaceAR(touch_location2);
      var XX = node.position.x;
      var YY = node.position.y;
      var dist2 = cc.v2(XX, YY).sub(nodePos).mag(); // 计算移动过程中的触点坐标与物体坐标的距离

      var rate = dist2 / dist; // 距离比值 
      // 控制比值的最大不大于3，最小不小于0.5

      if (rate > 3) {
        rate = 3;
      } else if (rate <= 0.5) {
        rate = 0.5;
      }

      node.scale *= rate;
    });
    scale_button.node.on(cc.Node.EventType.TOUCH_END, function (event) {
      if (times == 4) {
        _this2.jiaocheng_lable5.active = false;
        _this2.jiaocheng_lable6.parent = node;
        _this2.jiaocheng_lable6.scale = 2.1;

        _this2.jiaocheng_lable6.setPosition(node_x, node_y + 600);

        _this2.jiaocheng_lable6.active = true;
        delete_button.enabled = true;
        times = 5;
      }
    });
    delete_button.node.on(cc.Node.EventType.TOUCH_END, function (event) {
      if (times == 5) {
        _this2.jiaocheng_lable6.active = false;

        _this2.jiaocheng_lable7.setPosition(0, 0);

        _this2.jiaocheng_lable7.active = true;
        _this2.jiaocheng_lable7.getComponent(cc.Button).enabled = false;

        var appear = _this2.jiaocheng_lable7.getComponent(cc.Animation);

        var clips = appear.getClips();
        appear.play(clips[0].name);
        var jiaocheng_lable7 = _this2.jiaocheng_lable7;
        setTimeout(function () {
          jiaocheng_lable7.active = true;
          jiaocheng_lable7.getComponent(cc.Button).enabled = true;
        }, 1000);
        times = 6;
      }
    });
    var enable = true;
    var timeArray = [];
    node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      //获取手指触点距离上一次点的信息
      var delta = event.getDelta(); //增加限定条件

      var minX = -node.parent.width / 2 + node.width / 2;
      var maxX = node.parent.width / 2 - node.width / 2;
      var minY = -node.parent.height / 2 + node.height / 2;
      var maxY = node.parent.height / 2 - node.height / 2;
      var moveX = node.x + delta.x;
      var moveY = node.y + delta.y; //控制移动范围

      if (moveX < minX) {
        moveX = minX;
      } else if (moveX > maxX) {
        moveX = maxX;
      }

      if (moveY < minY) {
        moveY = minY;
      } else if (moveY > maxY) {
        moveY = maxY;
      } //移动小车节点


      node.x = node.x + delta.x;
      node.y = node.y + delta.y;
    }); //当鼠标抬起的时候恢复状态

    node.on(cc.Node.EventType.TOUCH_END, function (event) {
      var date = new Date();
      var time = date.getTime();
      timeArray.push(time);

      if (times == 1) {
        _this2.jiaocheng_lable2.active = false;
        _this2.jiaocheng_lable3.parent = node;
        _this2.jiaocheng_lable3.scale = 2.1;

        _this2.jiaocheng_lable3.setPosition(node_x - 300, node_y - 450);

        _this2.jiaocheng_lable3.active = true;
        times = 2;
      }

      if (timeArray.length > 1 && (timeArray[1] - timeArray[0]) / 1000 < 0.8) {
        timeArray = []; //1秒内未连续点击

        cc.log("双击");

        if (enable == true) {
          enable = false;
          node_1.active = false;
          node.off(cc.Node.EventType.TOUCH_MOVE);
          cc.log("disable");

          if (times == 2) {
            _this2.jiaocheng_lable3.active = false;
            _this2.jiaocheng_lable4.parent = node;
            _this2.jiaocheng_lable4.scale = 2.1;

            _this2.jiaocheng_lable4.setPosition(node_x - 300, node_y + 600);

            _this2.jiaocheng_lable4.active = true;
            times = 3;
          }
        } else {
          if (times == 3) {
            _this2.jiaocheng_lable4.active = false;
            _this2.jiaocheng_lable5.parent = node;
            _this2.jiaocheng_lable5.scale = 2.1;

            _this2.jiaocheng_lable5.setPosition(node_x, node_y - 600);

            _this2.jiaocheng_lable5.active = true;
            scale_button.enabled = true;
            times = 4;
          }

          enable = true;
          node_1.active = true;
          node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var delta = event.getDelta(); //增加限定条件

            var minX = -node.parent.width / 2 + node.width / 2;
            var maxX = node.parent.width / 2 - node.width / 2;
            var minY = -node.parent.height / 2 + node.height / 2;
            var maxY = node.parent.height / 2 - node.height / 2;
            var moveX = node.x + delta.x;
            var moveY = node.y + delta.y; //控制移动范围

            if (moveX < minX) {
              moveX = minX;
            } else if (moveX > maxX) {
              moveX = maxX;
            }

            if (moveY < minY) {
              moveY = minY;
            } else if (moveY > maxY) {
              moveY = maxY;
            } //移动小车节点


            node.x = node.x + delta.x;
            node.y = node.y + delta.y;
          }); //当鼠标抬起的时候恢复状态

          cc.log("enable");
        }
      } else if (timeArray.length > 1 && (timeArray[1] - timeArray[0]) / 1000 > 0.8) {
        timeArray = [];
        timeArray.push(time);
      }
    });
  },
  create: function create() {
    var node = new cc.Node('Sprite');
    node.scale = 0.5;
    var sp1 = node.addComponent(cc.Sprite);
    sp1.spriteFrame = this.sprite11;
    node.parent = this.node.parent.getChildByName("教程").getChildByName("base");
    node.setPosition(0, 0);
    var node_1 = new cc.Node('Sprite');
    var sp2 = node_1.addComponent(cc.Sprite);
    sp2.spriteFrame = this.sprite_11;
    node_1.parent = node;
    node.setPosition(0, 0);
    this.control(node, node_1);
    this.jiaocheng_pic.active = false;
    this.jiaocheng_lable1.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xc5ri45oiP55WM6Z2iLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImNvbnRyb2xfc3VjYWkiLCJjb250cm9sX3R1Y2VuZyIsInRpbWVzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiYXNlX25vZGUiLCJOb2RlIiwidHVjZW5nIiwic3VjYWkiLCJmaW5pc2hfY2FudmEiLCJiYWNrX2J1dHRvbiIsImJhY2tfYnV0dG9uMiIsImJhY2tfYnV0dG9uMyIsImJhY2tfY2FudmEiLCJiYWNrX2NhbnZhMiIsImZpbmlzaF9idXR0b24iLCJVSSIsImxhYmVsMSIsIkVkaXRCb3giLCJsYWJlbDIiLCJ6dW9waW5taW5nIiwic2h1bWluZyIsImJhb2N1bl9idXR0b24iLCJmZW54aWFuZ19idXR0b24iLCJsYWJsZTEiLCJzYXZlX2NhbnZhIiwiamlhb2NoZW5nIiwiamlhb2NoZW5nX3BpYyIsInNwcml0ZTExIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwic3ByaXRlXzExIiwiZGVsZXRlX2J1dHRvbiIsInNjYWxlX2J1dHRvbiIsImppYW9jaGVuZ19sYWJsZTAiLCJqaWFvY2hlbmdfbGFibGUxIiwiamlhb2NoZW5nX2xhYmxlMiIsImppYW9jaGVuZ19sYWJsZTMiLCJqaWFvY2hlbmdfbGFibGU0Iiwiamlhb2NoZW5nX2xhYmxlNSIsImppYW9jaGVuZ19sYWJsZTYiLCJqaWFvY2hlbmdfbGFibGU3Iiwib25Mb2FkIiwiZGVidWciLCJzZXREaXNwbGF5U3RhdHMiLCJwYXNzaXZlU2hhcmUiLCJnZXRXWFF1ZXJ5Iiwic3RhcnQiLCJhcHBlYXIiLCJnZXRDb21wb25lbnQiLCJBbmltYXRpb24iLCJjbGlwcyIsImdldENsaXBzIiwicGxheSIsIm5hbWUiLCJwYXVzZVN5c3RlbUV2ZW50cyIsImFjdGl2ZSIsInNldFRpbWVvdXQiLCJkaXNhcHBlYXIiLCJvbmNsaWNrRW50ZXIiLCJzdHJpbmcxIiwic3RyaW5nIiwiTGFiZWwiLCJzdHJpbmcyIiwicmVzdW1lU3lzdGVtRXZlbnRzIiwic2F2ZV9jYW52YV9BbmltYXRpb24iLCJiYWNrX2NvbmZpcm0iLCJiYWNrX2NvbmZpcm1fdHJ1ZSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiZmluaXNoIiwiYmFja19jb25maXJtX2ZhbHNlIiwic3VjYWlfY2hhbmdlIiwiZG93biIsInVwIiwidHVjZW5nX2NoYW5nZSIsInJpZ2h0IiwibGVmdCIsIlVJX2Rpc2FwcGVhciIsIndvcmRfYW5pbWF0aW9uIiwidGVtcF9sYWJsZSIsImNsb3NlX2ZpbmlzaCIsIlVJX2FwcGVhciIsImJhY2syIiwiZmluaXNoX2NhbnZhX0FuaW1hdGlvbiIsImJhY2tfY29uZmlybV9mYWxzZTIiLCJkaXNhcHBlYXIyIiwidGFrZVBob3RvIiwiYmFvY3VuX2J1dHRvbl9BbmltYXRpb24iLCJmZW54aWFuZ19idXR0b25fQW5pbWF0aW9uIiwiYmFja19idXR0b24yX0FuaW1hdGlvbiIsImJhY2tfYnV0dG9uM19BbmltYXRpb24iLCJsb2ciLCJ3eCIsImF1dGhvcml6ZSIsInNjb3BlIiwic3VjY2VzcyIsInJlcyIsInRlbXBGaWxlUGF0aCIsImNhbnZhcyIsInRvVGVtcEZpbGVQYXRoU3luYyIsIngiLCJ5IiwiZmlsZVR5cGUiLCJxdWFsaXR5Iiwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bSIsImZpbGVQYXRoIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJmYWlsIiwiY29uc29sZSIsInNlbGYiLCJiYWNrIiwiYWN0aXZlU2hhcmUiLCJpZCIsInVybCIsInNoYXJlQXBwTWVzc2FnZSIsImltYWdlVXJsSWQiLCJpbWFnZVVybCIsInNob3dTaGFyZU1lbnUiLCJvblNoYXJlQXBwTWVzc2FnZSIsInJhdyIsInF1ZXJ5Iiwib2JqZWN0IiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJzaGFyZU1zZyIsInNraXAiLCJzdGFydF9nYW1lIiwiQnV0dG9uIiwiZW5hYmxlZCIsImNvbnRyb2wiLCJub2RlIiwibm9kZV8xIiwiZGVsZXRlX25vZGUiLCJkZWxldGVfc3ByaXRlIiwiYWRkQ29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJwYXJlbnQiLCJkZWxldGVfeCIsIndpZHRoIiwiZGVsZXRlX3kiLCJoZWlnaHQiLCJzZXRQb3NpdGlvbiIsIm9uIiwiYnV0dG9uIiwiZGVzdHJveSIsInNjYWxlX25vZGUiLCJzY2FsZV9zcHJpdGUiLCJzY2FsZV94Iiwic2NhbGVfeSIsIm5vZGVfeCIsInBvc2l0aW9uIiwibm9kZV95Iiwic2NhbGUiLCJkaXN0IiwiWFhYIiwiWVlZIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJldmVudCIsInRvdWNoX2xvY2F0aW9uIiwiZ2V0TG9jYXRpb24iLCJub2RlUG9zIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJYIiwiWSIsImRpc3QxIiwidjIiLCJzdWIiLCJtYWciLCJUT1VDSF9NT1ZFIiwidG91Y2hfbG9jYXRpb24yIiwiWFgiLCJZWSIsImRpc3QyIiwicmF0ZSIsIlRPVUNIX0VORCIsImVuYWJsZSIsInRpbWVBcnJheSIsImRlbHRhIiwiZ2V0RGVsdGEiLCJtaW5YIiwibWF4WCIsIm1pblkiLCJtYXhZIiwibW92ZVgiLCJtb3ZlWSIsImRhdGUiLCJEYXRlIiwidGltZSIsImdldFRpbWUiLCJwdXNoIiwibGVuZ3RoIiwib2ZmIiwiY3JlYXRlIiwic3AxIiwiZ2V0Q2hpbGRCeU5hbWUiLCJzcDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxhQUFQLEdBQXVCLENBQXZCO0FBQ0FELE1BQU0sQ0FBQ0UsY0FBUCxHQUF3QixDQUF4QjtBQUNBRixNQUFNLENBQUNHLEtBQVAsR0FBZSxDQUFmO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVU7QUFDTkMsSUFBQUEsU0FBUyxFQUFFSixFQUFFLENBQUNLLElBRFI7QUFFTkMsSUFBQUEsTUFBTSxFQUFFTixFQUFFLENBQUNLLElBRkw7QUFHTkUsSUFBQUEsS0FBSyxFQUFFUCxFQUFFLENBQUNLLElBSEo7QUFJTkcsSUFBQUEsWUFBWSxFQUFFUixFQUFFLENBQUNLLElBSlg7QUFLTkksSUFBQUEsV0FBVyxFQUFFVCxFQUFFLENBQUNLLElBTFY7QUFNTkssSUFBQUEsWUFBWSxFQUFFVixFQUFFLENBQUNLLElBTlg7QUFPTk0sSUFBQUEsWUFBWSxFQUFFWCxFQUFFLENBQUNLLElBUFg7QUFRTk8sSUFBQUEsVUFBVSxFQUFFWixFQUFFLENBQUNLLElBUlQ7QUFTTlEsSUFBQUEsV0FBVyxFQUFFYixFQUFFLENBQUNLLElBVFY7QUFVTlMsSUFBQUEsYUFBYSxFQUFFZCxFQUFFLENBQUNLLElBVlo7QUFXTlUsSUFBQUEsRUFBRSxFQUFFZixFQUFFLENBQUNLLElBWEQ7QUFZTlcsSUFBQUEsTUFBTSxFQUFFaEIsRUFBRSxDQUFDaUIsT0FaTDtBQWFOQyxJQUFBQSxNQUFNLEVBQUVsQixFQUFFLENBQUNpQixPQWJMO0FBY05FLElBQUFBLFVBQVUsRUFBRW5CLEVBQUUsQ0FBQ0ssSUFkVDtBQWVOZSxJQUFBQSxPQUFPLEVBQUVwQixFQUFFLENBQUNLLElBZk47QUFnQk5nQixJQUFBQSxhQUFhLEVBQUVyQixFQUFFLENBQUNLLElBaEJaO0FBaUJOaUIsSUFBQUEsZUFBZSxFQUFFdEIsRUFBRSxDQUFDSyxJQWpCZDtBQWtCTmtCLElBQUFBLE1BQU0sRUFBRXZCLEVBQUUsQ0FBQ0ssSUFsQkw7QUFtQk5tQixJQUFBQSxVQUFVLEVBQUV4QixFQUFFLENBQUNLO0FBbkJULG9DQW9CU0wsRUFBRSxDQUFDSyxJQXBCWixtQ0FxQldMLEVBQUUsQ0FBQ0ssSUFyQmQsY0FzQk5vQixTQXRCTSxHQXNCS3pCLEVBQUUsQ0FBQ0ssSUF0QlIsY0F1Qk5xQixhQXZCTSxHQXVCUzFCLEVBQUUsQ0FBQ0ssSUF2QlosY0F3Qk5zQixRQXhCTSxHQXdCSTtBQUNOLGVBQVMsSUFESDtBQUVOQyxJQUFBQSxJQUFJLEVBQUU1QixFQUFFLENBQUM2QjtBQUZILEdBeEJKLGNBNEJOQyxTQTVCTSxHQTRCSztBQUNQLGVBQVMsSUFERjtBQUVQRixJQUFBQSxJQUFJLEVBQUU1QixFQUFFLENBQUM2QjtBQUZGLEdBNUJMLGNBZ0NORSxhQWhDTSxHQWdDUztBQUNYLGVBQVMsSUFERTtBQUVYSCxJQUFBQSxJQUFJLEVBQUU1QixFQUFFLENBQUM2QjtBQUZFLEdBaENULGNBb0NORyxZQXBDTSxHQW9DUTtBQUNWLGVBQVMsSUFEQztBQUVWSixJQUFBQSxJQUFJLEVBQUU1QixFQUFFLENBQUM2QjtBQUZDLEdBcENSLGNBd0NOSSxnQkF4Q00sR0F3Q1lqQyxFQUFFLENBQUNLLElBeENmLGNBeUNONkIsZ0JBekNNLEdBeUNZbEMsRUFBRSxDQUFDSyxJQXpDZixjQTBDTjhCLGdCQTFDTSxHQTBDWW5DLEVBQUUsQ0FBQ0ssSUExQ2YsY0EyQ04rQixnQkEzQ00sR0EyQ1lwQyxFQUFFLENBQUNLLElBM0NmLGNBNENOZ0MsZ0JBNUNNLEdBNENZckMsRUFBRSxDQUFDSyxJQTVDZixjQTZDTmlDLGdCQTdDTSxHQTZDWXRDLEVBQUUsQ0FBQ0ssSUE3Q2YsY0E4Q05rQyxnQkE5Q00sR0E4Q1l2QyxFQUFFLENBQUNLLElBOUNmLGNBK0NObUMsZ0JBL0NNLEdBK0NZeEMsRUFBRSxDQUFDSyxJQS9DZixjQUZMO0FBbURMb0MsRUFBQUEsTUFuREssb0JBbURJO0FBQ0x6QyxJQUFBQSxFQUFFLENBQUMwQyxLQUFILENBQVNDLGVBQVQsQ0FBeUIsS0FBekI7QUFDQSxTQUFLQyxZQUFMO0FBQ0EsU0FBS0MsVUFBTDtBQUNILEdBdkRJO0FBd0RMQyxFQUFBQSxLQXhESyxtQkF3REc7QUFDSixRQUFJQyxNQUFNLEdBQUcsS0FBSzNDLFNBQUwsQ0FBZTRDLFlBQWYsQ0FBNEJoRCxFQUFFLENBQUNpRCxTQUEvQixDQUFiO0FBQ0EsUUFBSUMsS0FBSyxHQUFHSCxNQUFNLENBQUNJLFFBQVAsRUFBWjtBQUNBSixJQUFBQSxNQUFNLENBQUNLLElBQVAsQ0FBWUYsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRyxJQUFyQjtBQUNBLFNBQUtqRCxTQUFMLENBQWVrRCxpQkFBZixDQUFpQyxJQUFqQztBQUNBLFNBQUt4QyxhQUFMLENBQW1CeUMsTUFBbkIsR0FBNEIsS0FBNUI7QUFDQSxTQUFLOUMsV0FBTCxDQUFpQjhDLE1BQWpCLEdBQTBCLEtBQTFCO0FBQ0EsUUFBSXRCLGdCQUFnQixHQUFHLEtBQUtBLGdCQUE1QjtBQUNBdUIsSUFBQUEsVUFBVSxDQUFDLFlBQVk7QUFDbkJ2QixNQUFBQSxnQkFBZ0IsQ0FBQ3NCLE1BQWpCLEdBQTBCLElBQTFCO0FBQ0EsVUFBSUUsU0FBUyxHQUFHeEIsZ0JBQWdCLENBQUNlLFlBQWpCLENBQThCaEQsRUFBRSxDQUFDaUQsU0FBakMsQ0FBaEI7QUFDQSxVQUFJQyxLQUFLLEdBQUdPLFNBQVMsQ0FBQ04sUUFBVixFQUFaO0FBQ0FNLE1BQUFBLFNBQVMsQ0FBQ0wsSUFBVixDQUFlRixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNHLElBQXhCO0FBQ0gsS0FMUyxFQUtQLElBTE8sQ0FBVjtBQU1BLFFBQUluQixnQkFBZ0IsR0FBRyxLQUFLQSxnQkFBNUI7QUFDQSxRQUFJRCxnQkFBZ0IsR0FBRyxLQUFLQSxnQkFBNUI7QUFDQSxRQUFJUCxhQUFhLEdBQUcsS0FBS0EsYUFBekI7QUFDQThCLElBQUFBLFVBQVUsQ0FBQyxZQUFZO0FBQ25CdEIsTUFBQUEsZ0JBQWdCLENBQUNxQixNQUFqQixHQUEwQixJQUExQjtBQUNBdEIsTUFBQUEsZ0JBQWdCLENBQUNzQixNQUFqQixHQUEwQixLQUExQjtBQUNBN0IsTUFBQUEsYUFBYSxDQUFDNkIsTUFBZCxHQUF1QixJQUF2QjtBQUNILEtBSlMsRUFJUCxJQUpPLENBQVY7QUFLSCxHQTlFSTtBQStFTEcsRUFBQUEsWUFBWSxFQUFFLHdCQUFZO0FBQ3RCLFNBQUtsRCxZQUFMLENBQWtCOEMsaUJBQWxCLENBQW9DLElBQXBDO0FBQ0EsU0FBSzlCLFVBQUwsQ0FBZ0I4QixpQkFBaEIsQ0FBa0MsSUFBbEM7QUFDQSxTQUFLdEMsTUFBTCxDQUFZdUMsTUFBWixHQUFxQixJQUFyQjtBQUNBLFFBQUlJLE9BQU8sR0FBRyxLQUFLM0MsTUFBTCxDQUFZNEMsTUFBMUI7QUFDQSxTQUFLekMsVUFBTCxDQUFnQjZCLFlBQWhCLENBQTZCaEQsRUFBRSxDQUFDNkQsS0FBaEMsRUFBdUNELE1BQXZDLEdBQWdERCxPQUFoRDtBQUNBLFNBQUt6QyxNQUFMLENBQVlxQyxNQUFaLEdBQXFCLElBQXJCO0FBQ0EsUUFBSU8sT0FBTyxHQUFHLEtBQUs1QyxNQUFMLENBQVkwQyxNQUExQjtBQUNBLFNBQUt4QyxPQUFMLENBQWE0QixZQUFiLENBQTBCaEQsRUFBRSxDQUFDNkQsS0FBN0IsRUFBb0NELE1BQXBDLEdBQTZDRSxPQUE3QztBQUNBLFNBQUsvQyxFQUFMLENBQVF3QyxNQUFSLEdBQWlCLElBQWpCO0FBQ0EsUUFBSUUsU0FBUyxHQUFHLEtBQUtqRCxZQUFMLENBQWtCd0MsWUFBbEIsQ0FBK0JoRCxFQUFFLENBQUNpRCxTQUFsQyxDQUFoQjtBQUNBLFFBQUlDLEtBQUssR0FBR08sU0FBUyxDQUFDTixRQUFWLEVBQVo7QUFDQU0sSUFBQUEsU0FBUyxDQUFDTCxJQUFWLENBQWVGLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0csSUFBeEI7QUFDQSxRQUFJN0IsVUFBVSxHQUFHLEtBQUtBLFVBQXRCO0FBQ0FnQyxJQUFBQSxVQUFVLENBQUMsWUFBWTtBQUNuQmhDLE1BQUFBLFVBQVUsQ0FBQ3VDLGtCQUFYLENBQThCLElBQTlCO0FBQ0gsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdBLFNBQUt2QyxVQUFMLENBQWdCK0IsTUFBaEIsR0FBeUIsSUFBekI7QUFDQSxRQUFJUyxvQkFBb0IsR0FBRyxLQUFLeEMsVUFBTCxDQUFnQndCLFlBQWhCLENBQTZCaEQsRUFBRSxDQUFDaUQsU0FBaEMsQ0FBM0I7QUFDQWUsSUFBQUEsb0JBQW9CLENBQUNaLElBQXJCLENBQTBCLFVBQTFCO0FBQ0gsR0FuR0k7QUFvR0xhLEVBQUFBLFlBcEdLLDBCQW9HVTtBQUNYLFNBQUtyRCxVQUFMLENBQWdCMkMsTUFBaEIsR0FBeUIsSUFBekI7QUFDQSxRQUFJUixNQUFNLEdBQUcsS0FBS25DLFVBQUwsQ0FBZ0JvQyxZQUFoQixDQUE2QmhELEVBQUUsQ0FBQ2lELFNBQWhDLENBQWI7QUFDQSxRQUFJQyxLQUFLLEdBQUdILE1BQU0sQ0FBQ0ksUUFBUCxFQUFaO0FBQ0FKLElBQUFBLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZRixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNHLElBQXJCO0FBQ0EsU0FBS2pELFNBQUwsQ0FBZWtELGlCQUFmLENBQWlDLElBQWpDO0FBQ0EsU0FBSzFDLFVBQUwsQ0FBZ0JtRCxrQkFBaEIsQ0FBbUMsSUFBbkM7QUFDSCxHQTNHSTtBQTRHTEcsRUFBQUEsaUJBNUdLLCtCQTRHZTtBQUNoQmxFLElBQUFBLEVBQUUsQ0FBQ21FLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixLQUF0QjtBQUNBQyxJQUFBQSxNQUFNLEdBQUcsQ0FBVDtBQUNILEdBL0dJO0FBZ0hMQyxFQUFBQSxrQkFoSEssZ0NBZ0hnQjtBQUNqQixRQUFJYixTQUFTLEdBQUcsS0FBSzdDLFVBQUwsQ0FBZ0JvQyxZQUFoQixDQUE2QmhELEVBQUUsQ0FBQ2lELFNBQWhDLENBQWhCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHTyxTQUFTLENBQUNOLFFBQVYsRUFBWjtBQUNBTSxJQUFBQSxTQUFTLENBQUNMLElBQVYsQ0FBZUYsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRyxJQUF4QjtBQUNBLFFBQUlqRCxTQUFTLEdBQUcsS0FBS0EsU0FBckI7QUFDQW9ELElBQUFBLFVBQVUsQ0FBQyxZQUFZO0FBQ25CcEQsTUFBQUEsU0FBUyxDQUFDMkQsa0JBQVYsQ0FBNkIsSUFBN0I7QUFDSCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0EsU0FBS25ELFVBQUwsQ0FBZ0IwQyxpQkFBaEIsQ0FBa0MsSUFBbEM7QUFDSCxHQXpISTtBQTBITGlCLEVBQUFBLFlBMUhLLDBCQTBIVTtBQUNYLFFBQUkxRSxhQUFhLElBQUksQ0FBckIsRUFBd0I7QUFDcEIsVUFBSTJFLElBQUksR0FBRyxLQUFLakUsS0FBTCxDQUFXeUMsWUFBWCxDQUF3QmhELEVBQUUsQ0FBQ2lELFNBQTNCLENBQVg7QUFDQSxVQUFJQyxLQUFLLEdBQUdzQixJQUFJLENBQUNyQixRQUFMLEVBQVo7QUFDQXFCLE1BQUFBLElBQUksQ0FBQ3BCLElBQUwsQ0FBVUYsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRyxJQUFuQjtBQUNBeEQsTUFBQUEsYUFBYSxHQUFHLENBQWhCO0FBQ0gsS0FMRCxNQU1LO0FBQ0QsVUFBSTRFLEVBQUUsR0FBRyxLQUFLbEUsS0FBTCxDQUFXeUMsWUFBWCxDQUF3QmhELEVBQUUsQ0FBQ2lELFNBQTNCLENBQVQ7QUFDQSxVQUFJQyxLQUFLLEdBQUd1QixFQUFFLENBQUN0QixRQUFILEVBQVo7QUFDQXNCLE1BQUFBLEVBQUUsQ0FBQ3JCLElBQUgsQ0FBUUYsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRyxJQUFqQjtBQUNBeEQsTUFBQUEsYUFBYSxHQUFHLENBQWhCO0FBQ0g7QUFDSixHQXZJSTtBQXdJTDZFLEVBQUFBLGFBeElLLDJCQXdJVztBQUNaLFFBQUk1RSxjQUFjLElBQUksQ0FBdEIsRUFBeUI7QUFDckIsVUFBSTZFLEtBQUssR0FBRyxLQUFLckUsTUFBTCxDQUFZMEMsWUFBWixDQUF5QmhELEVBQUUsQ0FBQ2lELFNBQTVCLENBQVo7QUFDQSxVQUFJQyxLQUFLLEdBQUd5QixLQUFLLENBQUN4QixRQUFOLEVBQVo7QUFDQXdCLE1BQUFBLEtBQUssQ0FBQ3ZCLElBQU4sQ0FBV0YsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRyxJQUFwQjtBQUNBdkQsTUFBQUEsY0FBYyxHQUFHLENBQWpCO0FBQ0gsS0FMRCxNQU1LO0FBQ0QsVUFBSThFLElBQUksR0FBRyxLQUFLdEUsTUFBTCxDQUFZMEMsWUFBWixDQUF5QmhELEVBQUUsQ0FBQ2lELFNBQTVCLENBQVg7QUFDQSxVQUFJQyxLQUFLLEdBQUcwQixJQUFJLENBQUN6QixRQUFMLEVBQVo7QUFDQXlCLE1BQUFBLElBQUksQ0FBQ3hCLElBQUwsQ0FBVUYsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRyxJQUFuQjtBQUNBdkQsTUFBQUEsY0FBYyxHQUFHLENBQWpCO0FBQ0g7QUFDSixHQXJKSTtBQXNKTHVFLEVBQUFBLE1BdEpLO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdCQXNKSTtBQUNMLFFBQUlBLE1BQU0sSUFBSSxDQUFkLEVBQWlCO0FBQ2IsV0FBS2pFLFNBQUwsQ0FBZWtELGlCQUFmLENBQWlDLElBQWpDO0FBQ0EsV0FBSzlDLFlBQUwsQ0FBa0I4QyxpQkFBbEIsQ0FBb0MsSUFBcEM7QUFDQSxXQUFLOUMsWUFBTCxDQUFrQitDLE1BQWxCLEdBQTJCLElBQTNCO0FBQ0EsVUFBSVIsTUFBTSxHQUFHLEtBQUt2QyxZQUFMLENBQWtCd0MsWUFBbEIsQ0FBK0JoRCxFQUFFLENBQUNpRCxTQUFsQyxDQUFiO0FBQ0EsVUFBSUMsS0FBSyxHQUFHSCxNQUFNLENBQUNJLFFBQVAsRUFBWjtBQUNBSixNQUFBQSxNQUFNLENBQUNLLElBQVAsQ0FBWUYsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRyxJQUFyQjtBQUNBLFVBQUl3QixZQUFZLEdBQUcsS0FBSzlELEVBQUwsQ0FBUWlDLFlBQVIsQ0FBcUJoRCxFQUFFLENBQUNpRCxTQUF4QixDQUFuQjtBQUNBLFVBQUlDLEtBQUssR0FBRzJCLFlBQVksQ0FBQzFCLFFBQWIsRUFBWjtBQUNBMEIsTUFBQUEsWUFBWSxDQUFDekIsSUFBYixDQUFrQkYsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRyxJQUEzQjtBQUNBLFVBQUk3QyxZQUFZLEdBQUcsS0FBS0EsWUFBeEI7QUFDQWdELE1BQUFBLFVBQVUsQ0FBQyxZQUFZO0FBQ25CO0FBQ0FoRCxRQUFBQSxZQUFZLENBQUN1RCxrQkFBYixDQUFnQyxJQUFoQztBQUNILE9BSFMsRUFHUCxJQUhPLENBQVY7QUFJSCxLQWZELE1BZ0JLO0FBQ0QsV0FBSy9DLE1BQUwsQ0FBWXVDLE1BQVosR0FBcUIsSUFBckI7QUFDQSxVQUFJdUIsY0FBYyxHQUFHLEtBQUt2RCxNQUFMLENBQVl5QixZQUFaLENBQXlCaEQsRUFBRSxDQUFDaUQsU0FBNUIsQ0FBckI7QUFDQSxVQUFJQyxLQUFLLEdBQUc0QixjQUFjLENBQUMzQixRQUFmLEVBQVo7QUFDQTJCLE1BQUFBLGNBQWMsQ0FBQzFCLElBQWYsQ0FBb0JGLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0csSUFBN0I7QUFDQSxVQUFJMEIsVUFBVSxHQUFHLEtBQUsvRCxNQUF0QjtBQUNBd0MsTUFBQUEsVUFBVSxDQUFDLFlBQVk7QUFDbkJ1QixRQUFBQSxVQUFVLENBQUN4QixNQUFYLEdBQW9CLEtBQXBCO0FBQ0gsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdIO0FBQ0osR0FqTEk7QUFrTEx5QixFQUFBQSxZQWxMSywwQkFrTFU7QUFDWCxTQUFLNUUsU0FBTCxDQUFla0QsaUJBQWYsQ0FBaUMsSUFBakM7QUFDQSxTQUFLOUMsWUFBTCxDQUFrQjhDLGlCQUFsQixDQUFvQyxJQUFwQztBQUNBLFNBQUt2QyxFQUFMLENBQVF3QyxNQUFSLEdBQWlCLElBQWpCO0FBQ0EsUUFBSTBCLFNBQVMsR0FBRyxLQUFLbEUsRUFBTCxDQUFRaUMsWUFBUixDQUFxQmhELEVBQUUsQ0FBQ2lELFNBQXhCLENBQWhCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHK0IsU0FBUyxDQUFDOUIsUUFBVixFQUFaO0FBQ0E4QixJQUFBQSxTQUFTLENBQUM3QixJQUFWLENBQWVGLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0csSUFBeEI7QUFDQSxRQUFJSSxTQUFTLEdBQUcsS0FBS2pELFlBQUwsQ0FBa0J3QyxZQUFsQixDQUErQmhELEVBQUUsQ0FBQ2lELFNBQWxDLENBQWhCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHTyxTQUFTLENBQUNOLFFBQVYsRUFBWjtBQUNBTSxJQUFBQSxTQUFTLENBQUNMLElBQVYsQ0FBZUYsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRyxJQUF4QjtBQUNBLFFBQUlqRCxTQUFTLEdBQUcsS0FBS0EsU0FBckI7QUFDQSxRQUFJSSxZQUFZLEdBQUcsS0FBS0EsWUFBeEI7QUFDQWdELElBQUFBLFVBQVUsQ0FBQyxZQUFZO0FBQ25CaEQsTUFBQUEsWUFBWSxDQUFDK0MsTUFBYixHQUFzQixLQUF0QjtBQUNBbkQsTUFBQUEsU0FBUyxDQUFDMkQsa0JBQVYsQ0FBNkIsSUFBN0I7QUFDSCxLQUhTLEVBR1AsSUFITyxDQUFWO0FBSUEsU0FBSzVDLFVBQUwsQ0FBZ0I2QixZQUFoQixDQUE2QmhELEVBQUUsQ0FBQzZELEtBQWhDLEVBQXVDRCxNQUF2QyxHQUFnRCxFQUFoRDtBQUNBLFNBQUt4QyxPQUFMLENBQWE0QixZQUFiLENBQTBCaEQsRUFBRSxDQUFDNkQsS0FBN0IsRUFBb0NELE1BQXBDLEdBQTZDLEVBQTdDO0FBQ0gsR0FwTUk7QUFxTUxzQixFQUFBQSxLQXJNSyxtQkFxTUc7QUFDSixTQUFLMUUsWUFBTCxDQUFrQitDLE1BQWxCLEdBQTJCLElBQTNCO0FBQ0EsU0FBSy9DLFlBQUwsQ0FBa0I4QyxpQkFBbEIsQ0FBb0MsSUFBcEM7QUFDQSxTQUFLOUIsVUFBTCxDQUFnQjhCLGlCQUFoQixDQUFrQyxJQUFsQztBQUNBLFFBQUlHLFNBQVMsR0FBRyxLQUFLakMsVUFBTCxDQUFnQndCLFlBQWhCLENBQTZCaEQsRUFBRSxDQUFDaUQsU0FBaEMsQ0FBaEI7QUFDQSxRQUFJQyxLQUFLLEdBQUdPLFNBQVMsQ0FBQ04sUUFBVixFQUFaO0FBQ0FNLElBQUFBLFNBQVMsQ0FBQ0wsSUFBVixDQUFlRixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNHLElBQXhCO0FBQ0EsUUFBSThCLHNCQUFzQixHQUFHLEtBQUszRSxZQUFMLENBQWtCd0MsWUFBbEIsQ0FBK0JoRCxFQUFFLENBQUNpRCxTQUFsQyxDQUE3QjtBQUNBa0MsSUFBQUEsc0JBQXNCLENBQUMvQixJQUF2QixDQUE0QixJQUE1QjtBQUNBLFFBQUk1QyxZQUFZLEdBQUcsS0FBS0EsWUFBeEI7QUFDQWdELElBQUFBLFVBQVUsQ0FBQyxZQUFZO0FBQ25CaEQsTUFBQUEsWUFBWSxDQUFDdUQsa0JBQWIsQ0FBZ0MsSUFBaEM7QUFDSCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0gsR0FsTkk7QUFtTkxxQixFQUFBQSxtQkFuTkssaUNBbU5pQjtBQUNsQixRQUFJQyxVQUFVLEdBQUcsS0FBS3hFLFdBQUwsQ0FBaUJtQyxZQUFqQixDQUE4QmhELEVBQUUsQ0FBQ2lELFNBQWpDLENBQWpCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHbUMsVUFBVSxDQUFDbEMsUUFBWCxFQUFaO0FBQ0FrQyxJQUFBQSxVQUFVLENBQUNqQyxJQUFYLENBQWdCRixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNHLElBQXpCO0FBQ0EsUUFBSXhDLFdBQVcsR0FBRyxLQUFLQSxXQUF2QjtBQUNBMkMsSUFBQUEsVUFBVSxDQUFDLFlBQVk7QUFDbkIzQyxNQUFBQSxXQUFXLENBQUMwQyxNQUFaLEdBQXFCLEtBQXJCO0FBQ0gsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdBLFNBQUsvQixVQUFMLENBQWdCdUMsa0JBQWhCLENBQW1DLElBQW5DO0FBQ0gsR0E1Tkk7QUE2Tkx1QixFQUFBQSxTQUFTLEVBQUUscUJBQVk7QUFDbkIsU0FBS2pFLGFBQUwsQ0FBbUJrQyxNQUFuQixHQUE0QixJQUE1QjtBQUNBLFFBQUlnQyx1QkFBdUIsR0FBRyxLQUFLbEUsYUFBTCxDQUFtQjJCLFlBQW5CLENBQWdDaEQsRUFBRSxDQUFDaUQsU0FBbkMsQ0FBOUI7QUFDQXNDLElBQUFBLHVCQUF1QixDQUFDbkMsSUFBeEIsQ0FBNkIsVUFBN0IsRUFIbUIsQ0FJbkI7O0FBQ0EsU0FBSzlCLGVBQUwsQ0FBcUJpQyxNQUFyQixHQUE4QixJQUE5QjtBQUNBLFFBQUlpQyx5QkFBeUIsR0FBRyxLQUFLbEUsZUFBTCxDQUFxQjBCLFlBQXJCLENBQWtDaEQsRUFBRSxDQUFDaUQsU0FBckMsQ0FBaEM7QUFDQXVDLElBQUFBLHlCQUF5QixDQUFDcEMsSUFBMUIsQ0FBK0IsVUFBL0I7QUFDQSxTQUFLMUMsWUFBTCxDQUFrQjZDLE1BQWxCLEdBQTJCLElBQTNCO0FBQ0EsUUFBSWtDLHNCQUFzQixHQUFHLEtBQUsvRSxZQUFMLENBQWtCc0MsWUFBbEIsQ0FBK0JoRCxFQUFFLENBQUNpRCxTQUFsQyxDQUE3QjtBQUNBd0MsSUFBQUEsc0JBQXNCLENBQUNyQyxJQUF2QixDQUE0QixNQUE1QjtBQUNBLFNBQUt6QyxZQUFMLENBQWtCNEMsTUFBbEIsR0FBMkIsSUFBM0I7QUFDQSxRQUFJbUMsc0JBQXNCLEdBQUcsS0FBSy9FLFlBQUwsQ0FBa0JxQyxZQUFsQixDQUErQmhELEVBQUUsQ0FBQ2lELFNBQWxDLENBQTdCO0FBQ0F5QyxJQUFBQSxzQkFBc0IsQ0FBQ3RDLElBQXZCLENBQTRCLE1BQTVCO0FBQ0EsU0FBSzVCLFVBQUwsQ0FBZ0I4QixpQkFBaEIsQ0FBa0MsSUFBbEM7QUFDQUUsSUFBQUEsVUFBVSxDQUFDLFlBQVk7QUFBQTs7QUFDbkJ4RCxNQUFBQSxFQUFFLENBQUMyRixHQUFILENBQU8sS0FBUDs7QUFDQSxVQUFJLE9BQU9DLEVBQVAsS0FBYyxXQUFsQixFQUErQjtBQUMzQjtBQUNIOztBQUNEQSxNQUFBQSxFQUFFLENBQUNDLFNBQUgsQ0FBYTtBQUNUQyxRQUFBQSxLQUFLLEVBQUUsd0JBREU7QUFDMEI7QUFDbkNDLFFBQUFBLE9BQU8sRUFBRSxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2Q7QUFDQTtBQUNBLFVBQUEsS0FBSSxDQUFDQyxZQUFMLEdBQW9CQyxNQUFNLENBQUNDLGtCQUFQLENBQTBCO0FBQzFDQyxZQUFBQSxDQUFDLEVBQUUsQ0FEdUM7QUFFMUNDLFlBQUFBLENBQUMsRUFBRSxDQUZ1QztBQUcxQ0MsWUFBQUEsUUFBUSxFQUFFLEtBSGdDO0FBSTFDQyxZQUFBQSxPQUFPLEVBQUU7QUFKaUMsV0FBMUIsQ0FBcEIsQ0FIYyxDQVNkOztBQUNBWCxVQUFBQSxFQUFFLENBQUNZLHNCQUFILENBQTBCO0FBQ3RCQyxZQUFBQSxRQUFRLEVBQUUsS0FBSSxDQUFDUixZQURPO0FBRXRCRixZQUFBQSxPQUFPLEVBQUUsaUJBQUNDLEdBQUQsRUFBUztBQUNkSixjQUFBQSxFQUFFLENBQUNjLFNBQUgsQ0FBYTtBQUNUQyxnQkFBQUEsS0FBSyxFQUFFLFFBREU7QUFFVEMsZ0JBQUFBLElBQUksRUFBRSxTQUZHO0FBR1RDLGdCQUFBQSxRQUFRLEVBQUU7QUFIRCxlQUFiO0FBS0gsYUFScUI7QUFTdEJDLFlBQUFBLElBQUksRUFBRSxjQUFDZCxHQUFELEVBQVM7QUFDWGUsY0FBQUEsT0FBTyxDQUFDcEIsR0FBUixDQUFZSyxHQUFaO0FBQ0FlLGNBQUFBLE9BQU8sQ0FBQ3BCLEdBQVIsQ0FBWSxRQUFaO0FBQ0g7QUFacUIsV0FBMUI7QUFjSCxTQTFCUTtBQTJCVG1CLFFBQUFBLElBQUksRUFBRSxjQUFDZCxHQUFELEVBQVM7QUFDWGUsVUFBQUEsT0FBTyxDQUFDcEIsR0FBUixDQUFZLE1BQVo7QUFDSDtBQTdCUSxPQUFiO0FBK0JILEtBcENTLEVBb0NQLElBcENPLENBQVY7QUFxQ0EsUUFBSXFCLElBQUksR0FBRyxJQUFYO0FBQ0F4RCxJQUFBQSxVQUFVLENBQUMsWUFBWTtBQUNuQitCLE1BQUFBLHVCQUF1QixDQUFDbkMsSUFBeEIsQ0FBNkIsVUFBN0I7QUFDQW9DLE1BQUFBLHlCQUF5QixDQUFDcEMsSUFBMUIsQ0FBK0IsVUFBL0I7QUFDQXFDLE1BQUFBLHNCQUFzQixDQUFDckMsSUFBdkIsQ0FBNEIsTUFBNUI7QUFDQXNDLE1BQUFBLHNCQUFzQixDQUFDdEMsSUFBdkIsQ0FBNEIsTUFBNUI7QUFDQTRELE1BQUFBLElBQUksQ0FBQ3hGLFVBQUwsQ0FBZ0J1QyxrQkFBaEIsQ0FBbUMsSUFBbkM7QUFDSCxLQU5TLEVBTVAsSUFOTyxDQUFWO0FBT0gsR0F6Ukk7QUEwUkxrRCxFQUFBQSxJQTFSSyxrQkEwUkU7QUFDSGpILElBQUFBLEVBQUUsQ0FBQ21FLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixLQUF0QjtBQUNILEdBNVJJO0FBNlJMOEMsRUFBQUEsV0E3UksseUJBNlJTO0FBQ1Y7QUFDQSxRQUFJLE9BQU90QixFQUFQLEtBQWMsV0FBbEIsRUFBK0I7QUFDM0I7QUFDSDs7QUFDRCxRQUFJdUIsRUFBRSxHQUFHLDBCQUFULENBTFUsQ0FLMEI7O0FBQ3BDLFFBQUlDLEdBQUcsR0FBRyw0R0FBVixDQU5VLENBTTZHOztBQUN2SHhCLElBQUFBLEVBQUUsQ0FBQ3lCLGVBQUgsQ0FBbUI7QUFDZlYsTUFBQUEsS0FBSyxFQUFFLEVBRFE7QUFDSjtBQUNYVyxNQUFBQSxVQUFVLEVBQUVILEVBRkc7QUFHZkksTUFBQUEsUUFBUSxFQUFFSDtBQUhLLEtBQW5CO0FBS0gsR0F6U0k7QUEwU0x4RSxFQUFBQSxZQTFTSywwQkEwU1U7QUFDWDtBQUNBLFFBQUksT0FBT2dELEVBQVAsS0FBYyxXQUFsQixFQUErQjtBQUMzQjtBQUNILEtBSlUsQ0FLWDs7O0FBQ0FBLElBQUFBLEVBQUUsQ0FBQzRCLGFBQUgsQ0FBaUI7QUFDYnpCLE1BQUFBLE9BQU8sRUFBRSxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2RlLFFBQUFBLE9BQU8sQ0FBQ3BCLEdBQVIsQ0FBWSxXQUFaO0FBQ0gsT0FIWTtBQUlibUIsTUFBQUEsSUFBSSxFQUFFLGNBQUNkLEdBQUQsRUFBUztBQUNYZSxRQUFBQSxPQUFPLENBQUNwQixHQUFSLENBQVlLLEdBQVo7QUFDQWUsUUFBQUEsT0FBTyxDQUFDcEIsR0FBUixDQUFZLFdBQVo7QUFDSDtBQVBZLEtBQWpCO0FBU0FDLElBQUFBLEVBQUUsQ0FBQzZCLGlCQUFILENBQXFCLFlBQU07QUFDdkIsYUFBTztBQUNIZCxRQUFBQSxLQUFLLEVBQUUsWUFESjtBQUVIWSxRQUFBQSxRQUFRLEVBQUV2SCxFQUFFLENBQUNvSCxHQUFILENBQU9NLEdBQVAsQ0FBVyxTQUFYLENBRlA7QUFFcUM7QUFDeENDLFFBQUFBLEtBQUssRUFBRSxjQUFjLFlBSGxCLENBR2dDOztBQUhoQyxPQUFQO0FBS0gsS0FORDtBQU9ILEdBaFVJO0FBaVVMOUUsRUFBQUEsVUFqVUssd0JBaVVRO0FBQ1Q7QUFDQSxRQUFJLE9BQU8rQyxFQUFQLEtBQWMsV0FBbEIsRUFBK0I7QUFDM0I7QUFDSDs7QUFDRCxRQUFJZ0MsTUFBTSxHQUFHaEMsRUFBRSxDQUFDaUMsb0JBQUgsRUFBYjtBQUNBLFFBQUlDLFFBQVEsR0FBR0YsTUFBTSxDQUFDRCxLQUFQLENBQWEsVUFBYixDQUFmO0FBQ0FaLElBQUFBLE9BQU8sQ0FBQ3BCLEdBQVIsQ0FBWW1DLFFBQVo7QUFDQSxXQUFPQSxRQUFQO0FBQ0gsR0ExVUk7QUEyVUxDLEVBQUFBLElBM1VLLGtCQTJVRTtBQUNILFNBQUt0RyxTQUFMLENBQWU4QixNQUFmLEdBQXdCLEtBQXhCO0FBQ0EsU0FBS3pDLGFBQUwsQ0FBbUJ5QyxNQUFuQixHQUE0QixJQUE1QjtBQUNBLFNBQUs5QyxXQUFMLENBQWlCOEMsTUFBakIsR0FBMEIsSUFBMUI7QUFDQSxTQUFLbkQsU0FBTCxDQUFlMkQsa0JBQWYsQ0FBa0MsSUFBbEM7QUFDQWhFLElBQUFBLEtBQUssR0FBRyxDQUFSO0FBQ0gsR0FqVkk7QUFrVkxpSSxFQUFBQSxVQWxWSyx3QkFrVlE7QUFDVCxRQUFJakksS0FBSyxJQUFJLENBQWIsRUFBZ0I7QUFDWixXQUFLeUMsZ0JBQUwsQ0FBc0JRLFlBQXRCLENBQW1DaEQsRUFBRSxDQUFDaUksTUFBdEMsRUFBOENDLE9BQTlDLEdBQXdELEtBQXhEO0FBQ0EsVUFBSXpFLFNBQVMsR0FBRyxLQUFLakIsZ0JBQUwsQ0FBc0JRLFlBQXRCLENBQW1DaEQsRUFBRSxDQUFDaUQsU0FBdEMsQ0FBaEI7QUFDQSxVQUFJQyxLQUFLLEdBQUdPLFNBQVMsQ0FBQ04sUUFBVixFQUFaO0FBQ0FNLE1BQUFBLFNBQVMsQ0FBQ0wsSUFBVixDQUFlRixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNHLElBQXhCO0FBQ0EsVUFBSTVCLFNBQVMsR0FBRyxLQUFLQSxTQUFyQjtBQUNBLFVBQUlyQixTQUFTLEdBQUcsS0FBS0EsU0FBckI7QUFDQSxVQUFJVSxhQUFhLEdBQUcsS0FBS0EsYUFBekI7QUFDQSxVQUFJTCxXQUFXLEdBQUcsS0FBS0EsV0FBdkI7QUFDQStDLE1BQUFBLFVBQVUsQ0FBQyxZQUFZO0FBQ25CMUMsUUFBQUEsYUFBYSxDQUFDeUMsTUFBZCxHQUF1QixJQUF2QjtBQUNBOUMsUUFBQUEsV0FBVyxDQUFDOEMsTUFBWixHQUFxQixJQUFyQjtBQUNBOUIsUUFBQUEsU0FBUyxDQUFDOEIsTUFBVixHQUFtQixLQUFuQjtBQUNBbkQsUUFBQUEsU0FBUyxDQUFDMkQsa0JBQVYsQ0FBNkIsSUFBN0I7QUFDSCxPQUxTLEVBS1AsSUFMTyxDQUFWO0FBTUFoRSxNQUFBQSxLQUFLLEdBQUcsQ0FBUjtBQUNIO0FBQ0osR0FwV0k7QUFxV0xvSSxFQUFBQSxPQXJXSyxtQkFxV0dDLElBcldILEVBcVdTQyxNQXJXVCxFQXFXaUI7QUFBQTs7QUFDbEIsUUFBSUMsV0FBVyxHQUFHLElBQUl0SSxFQUFFLENBQUNLLElBQVAsQ0FBWSxRQUFaLENBQWxCO0FBQ0EsUUFBSWtJLGFBQWEsR0FBR0QsV0FBVyxDQUFDRSxZQUFaLENBQXlCeEksRUFBRSxDQUFDeUksTUFBNUIsQ0FBcEI7QUFDQSxRQUFJMUcsYUFBYSxHQUFHdUcsV0FBVyxDQUFDRSxZQUFaLENBQXlCeEksRUFBRSxDQUFDaUksTUFBNUIsQ0FBcEI7QUFDQU0sSUFBQUEsYUFBYSxDQUFDRyxXQUFkLEdBQTRCLEtBQUszRyxhQUFqQztBQUNBdUcsSUFBQUEsV0FBVyxDQUFDSyxNQUFaLEdBQXFCTixNQUFyQjtBQUNBLFFBQUlPLFFBQVEsR0FBR1AsTUFBTSxDQUFDUSxLQUFQLEdBQWUsQ0FBOUI7QUFDQSxRQUFJQyxRQUFRLEdBQUdULE1BQU0sQ0FBQ1UsTUFBUCxHQUFnQixDQUEvQjtBQUNBVCxJQUFBQSxXQUFXLENBQUNVLFdBQVosQ0FBd0JKLFFBQXhCLEVBQWtDRSxRQUFsQztBQUNBL0csSUFBQUEsYUFBYSxDQUFDbUcsT0FBZCxHQUF3QixLQUF4QjtBQUNBbkcsSUFBQUEsYUFBYSxDQUFDcUcsSUFBZCxDQUFtQmEsRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBVUMsTUFBVixFQUFrQjtBQUM3Q2QsTUFBQUEsSUFBSSxDQUFDZSxPQUFMO0FBQ0gsS0FGRDtBQUdBLFFBQUlDLFVBQVUsR0FBRyxJQUFJcEosRUFBRSxDQUFDSyxJQUFQLENBQVksUUFBWixDQUFqQjtBQUNBLFFBQUlnSixZQUFZLEdBQUdELFVBQVUsQ0FBQ1osWUFBWCxDQUF3QnhJLEVBQUUsQ0FBQ3lJLE1BQTNCLENBQW5CO0FBQ0EsUUFBSXpHLFlBQVksR0FBR29ILFVBQVUsQ0FBQ1osWUFBWCxDQUF3QnhJLEVBQUUsQ0FBQ2lJLE1BQTNCLENBQW5CO0FBQ0FvQixJQUFBQSxZQUFZLENBQUNYLFdBQWIsR0FBMkIsS0FBSzFHLFlBQWhDO0FBQ0FvSCxJQUFBQSxVQUFVLENBQUNULE1BQVgsR0FBb0JOLE1BQXBCO0FBQ0EsUUFBSWlCLE9BQU8sR0FBR2pCLE1BQU0sQ0FBQ1EsS0FBUCxHQUFlLENBQTdCO0FBQ0EsUUFBSVUsT0FBTyxHQUFHbEIsTUFBTSxDQUFDVSxNQUFQLEdBQWdCLENBQTlCO0FBQ0FLLElBQUFBLFVBQVUsQ0FBQ0osV0FBWCxDQUF1Qk0sT0FBdkIsRUFBZ0MsQ0FBQ0MsT0FBakM7QUFDQSxRQUFJQyxNQUFNLEdBQUdwQixJQUFJLENBQUNxQixRQUFMLENBQWNyRCxDQUEzQjtBQUNBLFFBQUlzRCxNQUFNLEdBQUd0QixJQUFJLENBQUNxQixRQUFMLENBQWNwRCxDQUEzQjtBQUNBLFNBQUtsRSxnQkFBTCxDQUFzQndHLE1BQXRCLEdBQStCUCxJQUEvQjtBQUNBLFNBQUtqRyxnQkFBTCxDQUFzQndILEtBQXRCLEdBQThCLEdBQTlCO0FBQ0EsU0FBS3hILGdCQUFMLENBQXNCNkcsV0FBdEIsQ0FBa0NRLE1BQU0sR0FBRyxHQUEzQyxFQUFnREUsTUFBTSxHQUFHLEdBQXpEO0FBQ0EsU0FBS3ZILGdCQUFMLENBQXNCb0IsTUFBdEIsR0FBK0IsSUFBL0IsQ0ExQmtCLENBMkJsQjs7QUFDQSxRQUFJcUcsSUFBSSxHQUFHLENBQVg7QUFDQSxRQUFJQyxHQUFHLEdBQUcsQ0FBVjtBQUNBLFFBQUlDLEdBQUcsR0FBRyxDQUFWO0FBQ0E5SCxJQUFBQSxZQUFZLENBQUNvRyxJQUFiLENBQWtCYSxFQUFsQixDQUFxQmpKLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRMEosU0FBUixDQUFrQkMsV0FBdkMsRUFBb0QsVUFBQ0MsS0FBRCxFQUFXO0FBQzNELFVBQUlDLGNBQWMsR0FBR0QsS0FBSyxDQUFDRSxXQUFOLEVBQXJCO0FBQ0EsVUFBSUMsT0FBTyxHQUFHaEMsSUFBSSxDQUFDaUMsb0JBQUwsQ0FBMEJILGNBQTFCLENBQWQ7QUFDQSxVQUFJSSxDQUFDLEdBQUdsQyxJQUFJLENBQUNxQixRQUFMLENBQWNyRCxDQUF0QjtBQUNBLFVBQUltRSxDQUFDLEdBQUduQyxJQUFJLENBQUNxQixRQUFMLENBQWNwRCxDQUF0QjtBQUNBLFVBQUltRSxLQUFLLEdBQUd4SyxFQUFFLENBQUN5SyxFQUFILENBQU1ILENBQU4sRUFBU0MsQ0FBVCxFQUFZRyxHQUFaLENBQWdCTixPQUFoQixFQUF5Qk8sR0FBekIsRUFBWixDQUwyRCxDQUtoQjs7QUFDM0NmLE1BQUFBLElBQUksR0FBR1ksS0FBUDtBQUNBWCxNQUFBQSxHQUFHLEdBQUdLLGNBQWMsQ0FBQzlELENBQXJCO0FBQ0EwRCxNQUFBQSxHQUFHLEdBQUdJLGNBQWMsQ0FBQzdELENBQXJCO0FBQ0gsS0FURDtBQVVBckUsSUFBQUEsWUFBWSxDQUFDb0csSUFBYixDQUFrQmEsRUFBbEIsQ0FBcUJqSixFQUFFLENBQUNLLElBQUgsQ0FBUTBKLFNBQVIsQ0FBa0JhLFVBQXZDLEVBQW1ELFVBQUNYLEtBQUQsRUFBVztBQUMxRDtBQUNBLFVBQUlZLGVBQWUsR0FBR1osS0FBSyxDQUFDRSxXQUFOLEVBQXRCO0FBQ0EsVUFBSUMsT0FBTyxHQUFHaEMsSUFBSSxDQUFDaUMsb0JBQUwsQ0FBMEJRLGVBQTFCLENBQWQ7QUFDQSxVQUFJQyxFQUFFLEdBQUcxQyxJQUFJLENBQUNxQixRQUFMLENBQWNyRCxDQUF2QjtBQUNBLFVBQUkyRSxFQUFFLEdBQUczQyxJQUFJLENBQUNxQixRQUFMLENBQWNwRCxDQUF2QjtBQUNBLFVBQUkyRSxLQUFLLEdBQUdoTCxFQUFFLENBQUN5SyxFQUFILENBQU1LLEVBQU4sRUFBVUMsRUFBVixFQUFjTCxHQUFkLENBQWtCTixPQUFsQixFQUEyQk8sR0FBM0IsRUFBWixDQU4wRCxDQU1iOztBQUM3QyxVQUFJTSxJQUFJLEdBQUdELEtBQUssR0FBR3BCLElBQW5CLENBUDBELENBT2xDO0FBQ3hCOztBQUNBLFVBQUlxQixJQUFJLEdBQUcsQ0FBWCxFQUFjO0FBQ1ZBLFFBQUFBLElBQUksR0FBRyxDQUFQO0FBQ0gsT0FGRCxNQUVPLElBQUlBLElBQUksSUFBSSxHQUFaLEVBQWlCO0FBQ3BCQSxRQUFBQSxJQUFJLEdBQUcsR0FBUDtBQUNIOztBQUNEN0MsTUFBQUEsSUFBSSxDQUFDdUIsS0FBTCxJQUFjc0IsSUFBZDtBQUNILEtBZkQ7QUFnQkFqSixJQUFBQSxZQUFZLENBQUNvRyxJQUFiLENBQWtCYSxFQUFsQixDQUFxQmpKLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRMEosU0FBUixDQUFrQm1CLFNBQXZDLEVBQWtELFVBQUNqQixLQUFELEVBQVc7QUFDekQsVUFBSWxLLEtBQUssSUFBSSxDQUFiLEVBQWdCO0FBQ1osUUFBQSxNQUFJLENBQUN1QyxnQkFBTCxDQUFzQmlCLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0EsUUFBQSxNQUFJLENBQUNoQixnQkFBTCxDQUFzQm9HLE1BQXRCLEdBQStCUCxJQUEvQjtBQUNBLFFBQUEsTUFBSSxDQUFDN0YsZ0JBQUwsQ0FBc0JvSCxLQUF0QixHQUE4QixHQUE5Qjs7QUFDQSxRQUFBLE1BQUksQ0FBQ3BILGdCQUFMLENBQXNCeUcsV0FBdEIsQ0FBa0NRLE1BQWxDLEVBQTBDRSxNQUFNLEdBQUcsR0FBbkQ7O0FBQ0EsUUFBQSxNQUFJLENBQUNuSCxnQkFBTCxDQUFzQmdCLE1BQXRCLEdBQStCLElBQS9CO0FBQ0F4QixRQUFBQSxhQUFhLENBQUNtRyxPQUFkLEdBQXdCLElBQXhCO0FBQ0FuSSxRQUFBQSxLQUFLLEdBQUcsQ0FBUjtBQUNIO0FBQ0osS0FWRDtBQVdBZ0MsSUFBQUEsYUFBYSxDQUFDcUcsSUFBZCxDQUFtQmEsRUFBbkIsQ0FBc0JqSixFQUFFLENBQUNLLElBQUgsQ0FBUTBKLFNBQVIsQ0FBa0JtQixTQUF4QyxFQUFtRCxVQUFDakIsS0FBRCxFQUFXO0FBQzFELFVBQUlsSyxLQUFLLElBQUksQ0FBYixFQUFnQjtBQUNaLFFBQUEsTUFBSSxDQUFDd0MsZ0JBQUwsQ0FBc0JnQixNQUF0QixHQUErQixLQUEvQjs7QUFDQSxRQUFBLE1BQUksQ0FBQ2YsZ0JBQUwsQ0FBc0J3RyxXQUF0QixDQUFrQyxDQUFsQyxFQUFxQyxDQUFyQzs7QUFDQSxRQUFBLE1BQUksQ0FBQ3hHLGdCQUFMLENBQXNCZSxNQUF0QixHQUErQixJQUEvQjtBQUNBLFFBQUEsTUFBSSxDQUFDZixnQkFBTCxDQUFzQlEsWUFBdEIsQ0FBbUNoRCxFQUFFLENBQUNpSSxNQUF0QyxFQUE4Q0MsT0FBOUMsR0FBd0QsS0FBeEQ7O0FBQ0EsWUFBSW5GLE1BQU0sR0FBRyxNQUFJLENBQUNQLGdCQUFMLENBQXNCUSxZQUF0QixDQUFtQ2hELEVBQUUsQ0FBQ2lELFNBQXRDLENBQWI7O0FBQ0EsWUFBSUMsS0FBSyxHQUFHSCxNQUFNLENBQUNJLFFBQVAsRUFBWjtBQUNBSixRQUFBQSxNQUFNLENBQUNLLElBQVAsQ0FBWUYsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRyxJQUFyQjtBQUNBLFlBQUliLGdCQUFnQixHQUFHLE1BQUksQ0FBQ0EsZ0JBQTVCO0FBQ0FnQixRQUFBQSxVQUFVLENBQUMsWUFBWTtBQUNuQmhCLFVBQUFBLGdCQUFnQixDQUFDZSxNQUFqQixHQUEwQixJQUExQjtBQUNBZixVQUFBQSxnQkFBZ0IsQ0FBQ1EsWUFBakIsQ0FBOEJoRCxFQUFFLENBQUNpSSxNQUFqQyxFQUF5Q0MsT0FBekMsR0FBbUQsSUFBbkQ7QUFDSCxTQUhTLEVBR1AsSUFITyxDQUFWO0FBSUFuSSxRQUFBQSxLQUFLLEdBQUcsQ0FBUjtBQUNIO0FBQ0osS0FoQkQ7QUFpQkEsUUFBSW9MLE1BQU0sR0FBRyxJQUFiO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0FoRCxJQUFBQSxJQUFJLENBQUNhLEVBQUwsQ0FBUWpKLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRMEosU0FBUixDQUFrQmEsVUFBMUIsRUFBc0MsVUFBQ1gsS0FBRCxFQUFXO0FBQzdDO0FBQ0EsVUFBSW9CLEtBQUssR0FBR3BCLEtBQUssQ0FBQ3FCLFFBQU4sRUFBWixDQUY2QyxDQUc3Qzs7QUFDQSxVQUFJQyxJQUFJLEdBQUcsQ0FBQ25ELElBQUksQ0FBQ08sTUFBTCxDQUFZRSxLQUFiLEdBQXFCLENBQXJCLEdBQXlCVCxJQUFJLENBQUNTLEtBQUwsR0FBYSxDQUFqRDtBQUNBLFVBQUkyQyxJQUFJLEdBQUdwRCxJQUFJLENBQUNPLE1BQUwsQ0FBWUUsS0FBWixHQUFvQixDQUFwQixHQUF3QlQsSUFBSSxDQUFDUyxLQUFMLEdBQWEsQ0FBaEQ7QUFDQSxVQUFJNEMsSUFBSSxHQUFHLENBQUNyRCxJQUFJLENBQUNPLE1BQUwsQ0FBWUksTUFBYixHQUFzQixDQUF0QixHQUEwQlgsSUFBSSxDQUFDVyxNQUFMLEdBQWMsQ0FBbkQ7QUFDQSxVQUFJMkMsSUFBSSxHQUFHdEQsSUFBSSxDQUFDTyxNQUFMLENBQVlJLE1BQVosR0FBcUIsQ0FBckIsR0FBeUJYLElBQUksQ0FBQ1csTUFBTCxHQUFjLENBQWxEO0FBQ0EsVUFBSTRDLEtBQUssR0FBR3ZELElBQUksQ0FBQ2hDLENBQUwsR0FBU2lGLEtBQUssQ0FBQ2pGLENBQTNCO0FBQ0EsVUFBSXdGLEtBQUssR0FBR3hELElBQUksQ0FBQy9CLENBQUwsR0FBU2dGLEtBQUssQ0FBQ2hGLENBQTNCLENBVDZDLENBVTdDOztBQUNBLFVBQUlzRixLQUFLLEdBQUdKLElBQVosRUFBa0I7QUFDZEksUUFBQUEsS0FBSyxHQUFHSixJQUFSO0FBQ0gsT0FGRCxNQUVPLElBQUlJLEtBQUssR0FBR0gsSUFBWixFQUFrQjtBQUNyQkcsUUFBQUEsS0FBSyxHQUFHSCxJQUFSO0FBQ0g7O0FBQ0QsVUFBSUksS0FBSyxHQUFHSCxJQUFaLEVBQWtCO0FBQ2RHLFFBQUFBLEtBQUssR0FBR0gsSUFBUjtBQUNILE9BRkQsTUFFTyxJQUFJRyxLQUFLLEdBQUdGLElBQVosRUFBa0I7QUFDckJFLFFBQUFBLEtBQUssR0FBR0YsSUFBUjtBQUNILE9BcEI0QyxDQXFCN0M7OztBQUNBdEQsTUFBQUEsSUFBSSxDQUFDaEMsQ0FBTCxHQUFTZ0MsSUFBSSxDQUFDaEMsQ0FBTCxHQUFTaUYsS0FBSyxDQUFDakYsQ0FBeEI7QUFDQWdDLE1BQUFBLElBQUksQ0FBQy9CLENBQUwsR0FBUytCLElBQUksQ0FBQy9CLENBQUwsR0FBU2dGLEtBQUssQ0FBQ2hGLENBQXhCO0FBQ0gsS0F4QkQsRUF2RmtCLENBZ0hsQjs7QUFDQStCLElBQUFBLElBQUksQ0FBQ2EsRUFBTCxDQUFRakosRUFBRSxDQUFDSyxJQUFILENBQVEwSixTQUFSLENBQWtCbUIsU0FBMUIsRUFBcUMsVUFBQ2pCLEtBQUQsRUFBVztBQUM1QyxVQUFJNEIsSUFBSSxHQUFHLElBQUlDLElBQUosRUFBWDtBQUNBLFVBQUlDLElBQUksR0FBR0YsSUFBSSxDQUFDRyxPQUFMLEVBQVg7QUFDQVosTUFBQUEsU0FBUyxDQUFDYSxJQUFWLENBQWVGLElBQWY7O0FBQ0EsVUFBSWhNLEtBQUssSUFBSSxDQUFiLEVBQWdCO0FBQ1osUUFBQSxNQUFJLENBQUNvQyxnQkFBTCxDQUFzQm9CLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0EsUUFBQSxNQUFJLENBQUNuQixnQkFBTCxDQUFzQnVHLE1BQXRCLEdBQStCUCxJQUEvQjtBQUNBLFFBQUEsTUFBSSxDQUFDaEcsZ0JBQUwsQ0FBc0J1SCxLQUF0QixHQUE4QixHQUE5Qjs7QUFDQSxRQUFBLE1BQUksQ0FBQ3ZILGdCQUFMLENBQXNCNEcsV0FBdEIsQ0FBa0NRLE1BQU0sR0FBRyxHQUEzQyxFQUFnREUsTUFBTSxHQUFHLEdBQXpEOztBQUNBLFFBQUEsTUFBSSxDQUFDdEgsZ0JBQUwsQ0FBc0JtQixNQUF0QixHQUErQixJQUEvQjtBQUNBeEQsUUFBQUEsS0FBSyxHQUFHLENBQVI7QUFDSDs7QUFDRCxVQUFJcUwsU0FBUyxDQUFDYyxNQUFWLEdBQW1CLENBQW5CLElBQXdCLENBQUNkLFNBQVMsQ0FBQyxDQUFELENBQVQsR0FBZUEsU0FBUyxDQUFDLENBQUQsQ0FBekIsSUFBZ0MsSUFBaEMsR0FBdUMsR0FBbkUsRUFBd0U7QUFDcEVBLFFBQUFBLFNBQVMsR0FBRyxFQUFaLENBRG9FLENBQ3JEOztBQUNmcEwsUUFBQUEsRUFBRSxDQUFDMkYsR0FBSCxDQUFPLElBQVA7O0FBQ0EsWUFBSXdGLE1BQU0sSUFBSSxJQUFkLEVBQW9CO0FBQ2hCQSxVQUFBQSxNQUFNLEdBQUcsS0FBVDtBQUNBOUMsVUFBQUEsTUFBTSxDQUFDOUUsTUFBUCxHQUFnQixLQUFoQjtBQUNBNkUsVUFBQUEsSUFBSSxDQUFDK0QsR0FBTCxDQUFTbk0sRUFBRSxDQUFDSyxJQUFILENBQVEwSixTQUFSLENBQWtCYSxVQUEzQjtBQUNBNUssVUFBQUEsRUFBRSxDQUFDMkYsR0FBSCxDQUFPLFNBQVA7O0FBQ0EsY0FBSTVGLEtBQUssSUFBSSxDQUFiLEVBQWdCO0FBQ1osWUFBQSxNQUFJLENBQUNxQyxnQkFBTCxDQUFzQm1CLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0EsWUFBQSxNQUFJLENBQUNsQixnQkFBTCxDQUFzQnNHLE1BQXRCLEdBQStCUCxJQUEvQjtBQUNBLFlBQUEsTUFBSSxDQUFDL0YsZ0JBQUwsQ0FBc0JzSCxLQUF0QixHQUE4QixHQUE5Qjs7QUFDQSxZQUFBLE1BQUksQ0FBQ3RILGdCQUFMLENBQXNCMkcsV0FBdEIsQ0FBa0NRLE1BQU0sR0FBRyxHQUEzQyxFQUFnREUsTUFBTSxHQUFHLEdBQXpEOztBQUNBLFlBQUEsTUFBSSxDQUFDckgsZ0JBQUwsQ0FBc0JrQixNQUF0QixHQUErQixJQUEvQjtBQUNBeEQsWUFBQUEsS0FBSyxHQUFHLENBQVI7QUFDSDtBQUNKLFNBYkQsTUFjSztBQUNELGNBQUlBLEtBQUssSUFBSSxDQUFiLEVBQWdCO0FBQ1osWUFBQSxNQUFJLENBQUNzQyxnQkFBTCxDQUFzQmtCLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0EsWUFBQSxNQUFJLENBQUNqQixnQkFBTCxDQUFzQnFHLE1BQXRCLEdBQStCUCxJQUEvQjtBQUNBLFlBQUEsTUFBSSxDQUFDOUYsZ0JBQUwsQ0FBc0JxSCxLQUF0QixHQUE4QixHQUE5Qjs7QUFDQSxZQUFBLE1BQUksQ0FBQ3JILGdCQUFMLENBQXNCMEcsV0FBdEIsQ0FBa0NRLE1BQWxDLEVBQTBDRSxNQUFNLEdBQUcsR0FBbkQ7O0FBQ0EsWUFBQSxNQUFJLENBQUNwSCxnQkFBTCxDQUFzQmlCLE1BQXRCLEdBQStCLElBQS9CO0FBQ0F2QixZQUFBQSxZQUFZLENBQUNrRyxPQUFiLEdBQXVCLElBQXZCO0FBQ0FuSSxZQUFBQSxLQUFLLEdBQUcsQ0FBUjtBQUNIOztBQUNEb0wsVUFBQUEsTUFBTSxHQUFHLElBQVQ7QUFDQTlDLFVBQUFBLE1BQU0sQ0FBQzlFLE1BQVAsR0FBZ0IsSUFBaEI7QUFDQTZFLFVBQUFBLElBQUksQ0FBQ2EsRUFBTCxDQUFRakosRUFBRSxDQUFDSyxJQUFILENBQVEwSixTQUFSLENBQWtCYSxVQUExQixFQUFzQyxVQUFDWCxLQUFELEVBQVc7QUFDN0MsZ0JBQUlvQixLQUFLLEdBQUdwQixLQUFLLENBQUNxQixRQUFOLEVBQVosQ0FENkMsQ0FFN0M7O0FBQ0EsZ0JBQUlDLElBQUksR0FBRyxDQUFDbkQsSUFBSSxDQUFDTyxNQUFMLENBQVlFLEtBQWIsR0FBcUIsQ0FBckIsR0FBeUJULElBQUksQ0FBQ1MsS0FBTCxHQUFhLENBQWpEO0FBQ0EsZ0JBQUkyQyxJQUFJLEdBQUdwRCxJQUFJLENBQUNPLE1BQUwsQ0FBWUUsS0FBWixHQUFvQixDQUFwQixHQUF3QlQsSUFBSSxDQUFDUyxLQUFMLEdBQWEsQ0FBaEQ7QUFDQSxnQkFBSTRDLElBQUksR0FBRyxDQUFDckQsSUFBSSxDQUFDTyxNQUFMLENBQVlJLE1BQWIsR0FBc0IsQ0FBdEIsR0FBMEJYLElBQUksQ0FBQ1csTUFBTCxHQUFjLENBQW5EO0FBQ0EsZ0JBQUkyQyxJQUFJLEdBQUd0RCxJQUFJLENBQUNPLE1BQUwsQ0FBWUksTUFBWixHQUFxQixDQUFyQixHQUF5QlgsSUFBSSxDQUFDVyxNQUFMLEdBQWMsQ0FBbEQ7QUFDQSxnQkFBSTRDLEtBQUssR0FBR3ZELElBQUksQ0FBQ2hDLENBQUwsR0FBU2lGLEtBQUssQ0FBQ2pGLENBQTNCO0FBQ0EsZ0JBQUl3RixLQUFLLEdBQUd4RCxJQUFJLENBQUMvQixDQUFMLEdBQVNnRixLQUFLLENBQUNoRixDQUEzQixDQVI2QyxDQVM3Qzs7QUFDQSxnQkFBSXNGLEtBQUssR0FBR0osSUFBWixFQUFrQjtBQUNkSSxjQUFBQSxLQUFLLEdBQUdKLElBQVI7QUFDSCxhQUZELE1BRU8sSUFBSUksS0FBSyxHQUFHSCxJQUFaLEVBQWtCO0FBQ3JCRyxjQUFBQSxLQUFLLEdBQUdILElBQVI7QUFDSDs7QUFDRCxnQkFBSUksS0FBSyxHQUFHSCxJQUFaLEVBQWtCO0FBQ2RHLGNBQUFBLEtBQUssR0FBR0gsSUFBUjtBQUNILGFBRkQsTUFFTyxJQUFJRyxLQUFLLEdBQUdGLElBQVosRUFBa0I7QUFDckJFLGNBQUFBLEtBQUssR0FBR0YsSUFBUjtBQUNILGFBbkI0QyxDQW9CN0M7OztBQUNBdEQsWUFBQUEsSUFBSSxDQUFDaEMsQ0FBTCxHQUFTZ0MsSUFBSSxDQUFDaEMsQ0FBTCxHQUFTaUYsS0FBSyxDQUFDakYsQ0FBeEI7QUFDQWdDLFlBQUFBLElBQUksQ0FBQy9CLENBQUwsR0FBUytCLElBQUksQ0FBQy9CLENBQUwsR0FBU2dGLEtBQUssQ0FBQ2hGLENBQXhCO0FBQ0gsV0F2QkQsRUFaQyxDQW9DRDs7QUFDQXJHLFVBQUFBLEVBQUUsQ0FBQzJGLEdBQUgsQ0FBTyxRQUFQO0FBQ0g7QUFDSixPQXhERCxNQXlESyxJQUFJeUYsU0FBUyxDQUFDYyxNQUFWLEdBQW1CLENBQW5CLElBQXdCLENBQUNkLFNBQVMsQ0FBQyxDQUFELENBQVQsR0FBZUEsU0FBUyxDQUFDLENBQUQsQ0FBekIsSUFBZ0MsSUFBaEMsR0FBdUMsR0FBbkUsRUFBd0U7QUFDekVBLFFBQUFBLFNBQVMsR0FBRyxFQUFaO0FBQ0FBLFFBQUFBLFNBQVMsQ0FBQ2EsSUFBVixDQUFlRixJQUFmO0FBQ0g7QUFDSixLQXpFRDtBQTBFSCxHQWhpQkk7QUFpaUJMSyxFQUFBQSxNQWppQkssb0JBaWlCSTtBQUNMLFFBQUloRSxJQUFJLEdBQUcsSUFBSXBJLEVBQUUsQ0FBQ0ssSUFBUCxDQUFZLFFBQVosQ0FBWDtBQUNBK0gsSUFBQUEsSUFBSSxDQUFDdUIsS0FBTCxHQUFhLEdBQWI7QUFDQSxRQUFJMEMsR0FBRyxHQUFHakUsSUFBSSxDQUFDSSxZQUFMLENBQWtCeEksRUFBRSxDQUFDeUksTUFBckIsQ0FBVjtBQUNBNEQsSUFBQUEsR0FBRyxDQUFDM0QsV0FBSixHQUFrQixLQUFLL0csUUFBdkI7QUFDQXlHLElBQUFBLElBQUksQ0FBQ08sTUFBTCxHQUFjLEtBQUtQLElBQUwsQ0FBVU8sTUFBVixDQUFpQjJELGNBQWpCLENBQWdDLElBQWhDLEVBQXNDQSxjQUF0QyxDQUFxRCxNQUFyRCxDQUFkO0FBQ0FsRSxJQUFBQSxJQUFJLENBQUNZLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7QUFDQSxRQUFJWCxNQUFNLEdBQUcsSUFBSXJJLEVBQUUsQ0FBQ0ssSUFBUCxDQUFZLFFBQVosQ0FBYjtBQUNBLFFBQUlrTSxHQUFHLEdBQUdsRSxNQUFNLENBQUNHLFlBQVAsQ0FBb0J4SSxFQUFFLENBQUN5SSxNQUF2QixDQUFWO0FBQ0E4RCxJQUFBQSxHQUFHLENBQUM3RCxXQUFKLEdBQWtCLEtBQUs1RyxTQUF2QjtBQUNBdUcsSUFBQUEsTUFBTSxDQUFDTSxNQUFQLEdBQWdCUCxJQUFoQjtBQUNBQSxJQUFBQSxJQUFJLENBQUNZLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7QUFDQSxTQUFLYixPQUFMLENBQWFDLElBQWIsRUFBbUJDLE1BQW5CO0FBQ0EsU0FBSzNHLGFBQUwsQ0FBbUI2QixNQUFuQixHQUE0QixLQUE1QjtBQUNBLFNBQUtyQixnQkFBTCxDQUFzQnFCLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0g7QUFoakJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5jb250cm9sX3N1Y2FpID0gMVxyXG53aW5kb3cuY29udHJvbF90dWNlbmcgPSAwXHJcbndpbmRvdy50aW1lcyA9IDFcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJhc2Vfbm9kZTogY2MuTm9kZSxcclxuICAgICAgICB0dWNlbmc6IGNjLk5vZGUsXHJcbiAgICAgICAgc3VjYWk6IGNjLk5vZGUsXHJcbiAgICAgICAgZmluaXNoX2NhbnZhOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJhY2tfYnV0dG9uOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJhY2tfYnV0dG9uMjogY2MuTm9kZSxcclxuICAgICAgICBiYWNrX2J1dHRvbjM6IGNjLk5vZGUsXHJcbiAgICAgICAgYmFja19jYW52YTogY2MuTm9kZSxcclxuICAgICAgICBiYWNrX2NhbnZhMjogY2MuTm9kZSxcclxuICAgICAgICBmaW5pc2hfYnV0dG9uOiBjYy5Ob2RlLFxyXG4gICAgICAgIFVJOiBjYy5Ob2RlLFxyXG4gICAgICAgIGxhYmVsMTogY2MuRWRpdEJveCxcclxuICAgICAgICBsYWJlbDI6IGNjLkVkaXRCb3gsXHJcbiAgICAgICAgenVvcGlubWluZzogY2MuTm9kZSxcclxuICAgICAgICBzaHVtaW5nOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJhb2N1bl9idXR0b246IGNjLk5vZGUsXHJcbiAgICAgICAgZmVueGlhbmdfYnV0dG9uOiBjYy5Ob2RlLFxyXG4gICAgICAgIGxhYmxlMTogY2MuTm9kZSxcclxuICAgICAgICBzYXZlX2NhbnZhOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJhb2N1bl9idXR0b246IGNjLk5vZGUsXHJcbiAgICAgICAgZmVueGlhbmdfYnV0dG9uOiBjYy5Ob2RlLFxyXG4gICAgICAgIGppYW9jaGVuZzogY2MuTm9kZSxcclxuICAgICAgICBqaWFvY2hlbmdfcGljOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNwcml0ZTExOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlXzExOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlX2J1dHRvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjYWxlX2J1dHRvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGppYW9jaGVuZ19sYWJsZTA6IGNjLk5vZGUsXHJcbiAgICAgICAgamlhb2NoZW5nX2xhYmxlMTogY2MuTm9kZSxcclxuICAgICAgICBqaWFvY2hlbmdfbGFibGUyOiBjYy5Ob2RlLFxyXG4gICAgICAgIGppYW9jaGVuZ19sYWJsZTM6IGNjLk5vZGUsXHJcbiAgICAgICAgamlhb2NoZW5nX2xhYmxlNDogY2MuTm9kZSxcclxuICAgICAgICBqaWFvY2hlbmdfbGFibGU1OiBjYy5Ob2RlLFxyXG4gICAgICAgIGppYW9jaGVuZ19sYWJsZTY6IGNjLk5vZGUsXHJcbiAgICAgICAgamlhb2NoZW5nX2xhYmxlNzogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnBhc3NpdmVTaGFyZSgpOyBcclxuICAgICAgICB0aGlzLmdldFdYUXVlcnkoKTtcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB2YXIgYXBwZWFyID0gdGhpcy5iYXNlX25vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICB2YXIgY2xpcHMgPSBhcHBlYXIuZ2V0Q2xpcHMoKVxyXG4gICAgICAgIGFwcGVhci5wbGF5KGNsaXBzWzBdLm5hbWUpXHJcbiAgICAgICAgdGhpcy5iYXNlX25vZGUucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSlcclxuICAgICAgICB0aGlzLmZpbmlzaF9idXR0b24uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmJhY2tfYnV0dG9uLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdmFyIGppYW9jaGVuZ19sYWJsZTAgPSB0aGlzLmppYW9jaGVuZ19sYWJsZTBcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgamlhb2NoZW5nX2xhYmxlMC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHZhciBkaXNhcHBlYXIgPSBqaWFvY2hlbmdfbGFibGUwLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgICAgIHZhciBjbGlwcyA9IGRpc2FwcGVhci5nZXRDbGlwcygpXHJcbiAgICAgICAgICAgIGRpc2FwcGVhci5wbGF5KGNsaXBzWzBdLm5hbWUpXHJcbiAgICAgICAgfSwgMTIwMCk7XHJcbiAgICAgICAgdmFyIGppYW9jaGVuZ19sYWJsZTEgPSB0aGlzLmppYW9jaGVuZ19sYWJsZTFcclxuICAgICAgICB2YXIgamlhb2NoZW5nX2xhYmxlMCA9IHRoaXMuamlhb2NoZW5nX2xhYmxlMFxyXG4gICAgICAgIHZhciBqaWFvY2hlbmdfcGljID0gdGhpcy5qaWFvY2hlbmdfcGljXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGppYW9jaGVuZ19sYWJsZTEuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBqaWFvY2hlbmdfbGFibGUwLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGppYW9jaGVuZ19waWMuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDMyMDApO1xyXG4gICAgfSxcclxuICAgIG9uY2xpY2tFbnRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZmluaXNoX2NhbnZhLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgdGhpcy5zYXZlX2NhbnZhLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgdGhpcy5sYWJlbDEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgc3RyaW5nMSA9IHRoaXMubGFiZWwxLnN0cmluZztcclxuICAgICAgICB0aGlzLnp1b3Bpbm1pbmcuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzdHJpbmcxO1xyXG4gICAgICAgIHRoaXMubGFiZWwyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdmFyIHN0cmluZzIgPSB0aGlzLmxhYmVsMi5zdHJpbmc7XHJcbiAgICAgICAgdGhpcy5zaHVtaW5nLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RyaW5nMjtcclxuICAgICAgICB0aGlzLlVJLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB2YXIgZGlzYXBwZWFyID0gdGhpcy5maW5pc2hfY2FudmEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICB2YXIgY2xpcHMgPSBkaXNhcHBlYXIuZ2V0Q2xpcHMoKVxyXG4gICAgICAgIGRpc2FwcGVhci5wbGF5KGNsaXBzWzFdLm5hbWUpXHJcbiAgICAgICAgdmFyIHNhdmVfY2FudmEgPSB0aGlzLnNhdmVfY2FudmFcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2F2ZV9jYW52YS5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSlcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB0aGlzLnNhdmVfY2FudmEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgc2F2ZV9jYW52YV9BbmltYXRpb24gPSB0aGlzLnNhdmVfY2FudmEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICBzYXZlX2NhbnZhX0FuaW1hdGlvbi5wbGF5KCfkv53lrZjliIbkuqvmjInpkq7mta7njrAnKVxyXG4gICAgfSxcclxuICAgIGJhY2tfY29uZmlybSgpIHtcclxuICAgICAgICB0aGlzLmJhY2tfY2FudmEuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHZhciBhcHBlYXIgPSB0aGlzLmJhY2tfY2FudmEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICB2YXIgY2xpcHMgPSBhcHBlYXIuZ2V0Q2xpcHMoKVxyXG4gICAgICAgIGFwcGVhci5wbGF5KGNsaXBzWzBdLm5hbWUpXHJcbiAgICAgICAgdGhpcy5iYXNlX25vZGUucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSlcclxuICAgICAgICB0aGlzLmJhY2tfY2FudmEucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICB9LFxyXG4gICAgYmFja19jb25maXJtX3RydWUoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwi5Li76aG16Z2iXCIpXHJcbiAgICAgICAgZmluaXNoID0gMFxyXG4gICAgfSxcclxuICAgIGJhY2tfY29uZmlybV9mYWxzZSgpIHtcclxuICAgICAgICB2YXIgZGlzYXBwZWFyID0gdGhpcy5iYWNrX2NhbnZhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgdmFyIGNsaXBzID0gZGlzYXBwZWFyLmdldENsaXBzKClcclxuICAgICAgICBkaXNhcHBlYXIucGxheShjbGlwc1sxXS5uYW1lKVxyXG4gICAgICAgIHZhciBiYXNlX25vZGUgPSB0aGlzLmJhc2Vfbm9kZVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBiYXNlX25vZGUucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgdGhpcy5iYWNrX2NhbnZhLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICB9LFxyXG4gICAgc3VjYWlfY2hhbmdlKCkge1xyXG4gICAgICAgIGlmIChjb250cm9sX3N1Y2FpID09IDEpIHtcclxuICAgICAgICAgICAgdmFyIGRvd24gPSB0aGlzLnN1Y2FpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgICAgIHZhciBjbGlwcyA9IGRvd24uZ2V0Q2xpcHMoKVxyXG4gICAgICAgICAgICBkb3duLnBsYXkoY2xpcHNbMF0ubmFtZSlcclxuICAgICAgICAgICAgY29udHJvbF9zdWNhaSA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB1cCA9IHRoaXMuc3VjYWkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICAgICAgdmFyIGNsaXBzID0gdXAuZ2V0Q2xpcHMoKVxyXG4gICAgICAgICAgICB1cC5wbGF5KGNsaXBzWzFdLm5hbWUpXHJcbiAgICAgICAgICAgIGNvbnRyb2xfc3VjYWkgPSAxXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHR1Y2VuZ19jaGFuZ2UoKSB7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xfdHVjZW5nID09IDEpIHtcclxuICAgICAgICAgICAgdmFyIHJpZ2h0ID0gdGhpcy50dWNlbmcuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICAgICAgdmFyIGNsaXBzID0gcmlnaHQuZ2V0Q2xpcHMoKVxyXG4gICAgICAgICAgICByaWdodC5wbGF5KGNsaXBzWzBdLm5hbWUpXHJcbiAgICAgICAgICAgIGNvbnRyb2xfdHVjZW5nID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGxlZnQgPSB0aGlzLnR1Y2VuZy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgICAgICB2YXIgY2xpcHMgPSBsZWZ0LmdldENsaXBzKClcclxuICAgICAgICAgICAgbGVmdC5wbGF5KGNsaXBzWzFdLm5hbWUpXHJcbiAgICAgICAgICAgIGNvbnRyb2xfdHVjZW5nID0gMVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmaW5pc2goKSB7XHJcbiAgICAgICAgaWYgKGZpbmlzaCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZV9ub2RlLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoX2NhbnZhLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoX2NhbnZhLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdmFyIGFwcGVhciA9IHRoaXMuZmluaXNoX2NhbnZhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgICAgIHZhciBjbGlwcyA9IGFwcGVhci5nZXRDbGlwcygpXHJcbiAgICAgICAgICAgIGFwcGVhci5wbGF5KGNsaXBzWzBdLm5hbWUpXHJcbiAgICAgICAgICAgIHZhciBVSV9kaXNhcHBlYXIgPSB0aGlzLlVJLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgICAgIHZhciBjbGlwcyA9IFVJX2Rpc2FwcGVhci5nZXRDbGlwcygpXHJcbiAgICAgICAgICAgIFVJX2Rpc2FwcGVhci5wbGF5KGNsaXBzWzFdLm5hbWUpXHJcbiAgICAgICAgICAgIHZhciBmaW5pc2hfY2FudmEgPSB0aGlzLmZpbmlzaF9jYW52YVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVJLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBmaW5pc2hfY2FudmEucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbDEuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB2YXIgd29yZF9hbmltYXRpb24gPSB0aGlzLmxhYmxlMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgICAgICB2YXIgY2xpcHMgPSB3b3JkX2FuaW1hdGlvbi5nZXRDbGlwcygpXHJcbiAgICAgICAgICAgIHdvcmRfYW5pbWF0aW9uLnBsYXkoY2xpcHNbMF0ubmFtZSlcclxuICAgICAgICAgICAgdmFyIHRlbXBfbGFibGUgPSB0aGlzLmxhYmVsMVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRlbXBfbGFibGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgfSwgMTEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNsb3NlX2ZpbmlzaCgpIHtcclxuICAgICAgICB0aGlzLmJhc2Vfbm9kZS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKVxyXG4gICAgICAgIHRoaXMuZmluaXNoX2NhbnZhLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgdGhpcy5VSS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdmFyIFVJX2FwcGVhciA9IHRoaXMuVUkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICB2YXIgY2xpcHMgPSBVSV9hcHBlYXIuZ2V0Q2xpcHMoKVxyXG4gICAgICAgIFVJX2FwcGVhci5wbGF5KGNsaXBzWzBdLm5hbWUpXHJcbiAgICAgICAgdmFyIGRpc2FwcGVhciA9IHRoaXMuZmluaXNoX2NhbnZhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgdmFyIGNsaXBzID0gZGlzYXBwZWFyLmdldENsaXBzKClcclxuICAgICAgICBkaXNhcHBlYXIucGxheShjbGlwc1sxXS5uYW1lKVxyXG4gICAgICAgIHZhciBiYXNlX25vZGUgPSB0aGlzLmJhc2Vfbm9kZVxyXG4gICAgICAgIHZhciBmaW5pc2hfY2FudmEgPSB0aGlzLmZpbmlzaF9jYW52YVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmaW5pc2hfY2FudmEuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgYmFzZV9ub2RlLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHRoaXMuenVvcGlubWluZy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zaHVtaW5nLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcclxuICAgIH0sXHJcbiAgICBiYWNrMigpIHtcclxuICAgICAgICB0aGlzLmZpbmlzaF9jYW52YS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmluaXNoX2NhbnZhLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgdGhpcy5zYXZlX2NhbnZhLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgdmFyIGRpc2FwcGVhciA9IHRoaXMuc2F2ZV9jYW52YS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgIHZhciBjbGlwcyA9IGRpc2FwcGVhci5nZXRDbGlwcygpXHJcbiAgICAgICAgZGlzYXBwZWFyLnBsYXkoY2xpcHNbMV0ubmFtZSlcclxuICAgICAgICB2YXIgZmluaXNoX2NhbnZhX0FuaW1hdGlvbiA9IHRoaXMuZmluaXNoX2NhbnZhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgZmluaXNoX2NhbnZhX0FuaW1hdGlvbi5wbGF5KCfmta7njrAnKVxyXG4gICAgICAgIHZhciBmaW5pc2hfY2FudmEgPSB0aGlzLmZpbmlzaF9jYW52YVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmaW5pc2hfY2FudmEucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9LFxyXG4gICAgYmFja19jb25maXJtX2ZhbHNlMigpIHtcclxuICAgICAgICB2YXIgZGlzYXBwZWFyMiA9IHRoaXMuYmFja19jYW52YTIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICB2YXIgY2xpcHMgPSBkaXNhcHBlYXIyLmdldENsaXBzKClcclxuICAgICAgICBkaXNhcHBlYXIyLnBsYXkoY2xpcHNbMV0ubmFtZSlcclxuICAgICAgICB2YXIgYmFja19jYW52YTIgPSB0aGlzLmJhY2tfY2FudmEyXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGJhY2tfY2FudmEyLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgdGhpcy5zYXZlX2NhbnZhLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKVxyXG4gICAgfSxcclxuICAgIHRha2VQaG90bzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYmFvY3VuX2J1dHRvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHZhciBiYW9jdW5fYnV0dG9uX0FuaW1hdGlvbiA9IHRoaXMuYmFvY3VuX2J1dHRvbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgIGJhb2N1bl9idXR0b25fQW5pbWF0aW9uLnBsYXkoJ+S/neWtmOWIhuS6q+aMiemSrua2iOWksScpXHJcbiAgICAgICAgLy8gdGhpcy5HcmV5X0NhbnZhLmFjdGl2ZSA9IGZhbHNlIFxyXG4gICAgICAgIHRoaXMuZmVueGlhbmdfYnV0dG9uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdmFyIGZlbnhpYW5nX2J1dHRvbl9BbmltYXRpb24gPSB0aGlzLmZlbnhpYW5nX2J1dHRvbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgIGZlbnhpYW5nX2J1dHRvbl9BbmltYXRpb24ucGxheSgn5L+d5a2Y5YiG5Lqr5oyJ6ZKu5raI5aSxJylcclxuICAgICAgICB0aGlzLmJhY2tfYnV0dG9uMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHZhciBiYWNrX2J1dHRvbjJfQW5pbWF0aW9uID0gdGhpcy5iYWNrX2J1dHRvbjIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICBiYWNrX2J1dHRvbjJfQW5pbWF0aW9uLnBsYXkoJ+i/lOWbnua2iOaVoycpXHJcbiAgICAgICAgdGhpcy5iYWNrX2J1dHRvbjMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgYmFja19idXR0b24zX0FuaW1hdGlvbiA9IHRoaXMuYmFja19idXR0b24zLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgYmFja19idXR0b24zX0FuaW1hdGlvbi5wbGF5KCfov5Tlm57mtojmlaMnKVxyXG4gICAgICAgIHRoaXMuc2F2ZV9jYW52YS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCIxMDBcIik7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd3ggPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd3guYXV0aG9yaXplKHtcclxuICAgICAgICAgICAgICAgIHNjb3BlOiAnc2NvcGUud3JpdGVQaG90b3NBbGJ1bScsICAgLy8g6ZyA6KaB6I635Y+W55u45YaM5p2D6ZmQXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBob3RvQXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyDojrflj5blvZPliY3lsY/luZXmiKrlm77vvIzlj4LmlbDlj4LnhafmlofmoaPoh6rlt7Horr5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWxlUGF0aCA9IGNhbnZhcy50b1RlbXBGaWxlUGF0aFN5bmMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlVHlwZTogJ2pwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHk6ICcxJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWwhuaIquWbvuS/neWtmOWIsOebuOWGjOS4rVxyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlUGF0aDogdGhpcy50ZW1wRmlsZVBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflt7Lkv53lrZjliLDnm7jlhownLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5Zu+54mH5L+d5a2Y5aSx6LSlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aOiOadg+Wksei0pScpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMjUwMCk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBiYW9jdW5fYnV0dG9uX0FuaW1hdGlvbi5wbGF5KCfkv53lrZjliIbkuqvmjInpkq7mta7njrAnKVxyXG4gICAgICAgICAgICBmZW54aWFuZ19idXR0b25fQW5pbWF0aW9uLnBsYXkoJ+S/neWtmOWIhuS6q+aMiemSrua1rueOsCcpXHJcbiAgICAgICAgICAgIGJhY2tfYnV0dG9uMl9BbmltYXRpb24ucGxheSgn6L+U5Zue5rWu546wJylcclxuICAgICAgICAgICAgYmFja19idXR0b24zX0FuaW1hdGlvbi5wbGF5KCfov5Tlm57mta7njrAnKVxyXG4gICAgICAgICAgICBzZWxmLnNhdmVfY2FudmEucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgfSwgNDAwMCk7XHJcbiAgICB9LFxyXG4gICAgYmFjaygpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCLkuLvpobXpnaJcIilcclxuICAgIH0sXHJcbiAgICBhY3RpdmVTaGFyZSgpIHtcclxuICAgICAgICAvLyDkuLvliqjliIbkuqvmjInpkq5cclxuICAgICAgICBpZiAodHlwZW9mIHd4ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpZCA9ICdUZUIxeXFUTlNkMnFhQ09LMUQrSmhnPT0nIC8vIOmAmui/hyBNUCDns7vnu5/lrqHmoLjnmoTlm77niYfnvJblj7dcclxuICAgICAgICB2YXIgdXJsID0gJ2h0dHBzOi8vbW1vY2dhbWUucXBpYy5jbi93ZWNoYXRnYW1lL2ppYmJkVVJoQzZrZzZ6TXZmNG1lVEozUUhVdUZQYzc5TmdtSTFpYTloUHgxQWRVSDVpY2dXRE9VUVFZc0pJbFpqaWNDLzAnIC8vIOmAmui/hyBNUCDns7vnu5/lrqHmoLjnmoTlm77niYflnLDlnYBcclxuICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICB0aXRsZTogJycsIC8v5YiG5Lqr5Y2h54mH5LiK55qE5qCH6aKYXHJcbiAgICAgICAgICAgIGltYWdlVXJsSWQ6IGlkLFxyXG4gICAgICAgICAgICBpbWFnZVVybDogdXJsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHBhc3NpdmVTaGFyZSgpIHtcclxuICAgICAgICAvLyDnm5HlkKzlsI/nqIvluo/lj7PkuIrop5Loj5zljZXnmoTjgIzovazlj5HjgI3mjInpkq5cclxuICAgICAgICBpZiAodHlwZW9mIHd4ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOaYvuekuuW9k+WJjemhtemdoueahOi9rOWPkeaMiemSrlxyXG4gICAgICAgIHd4LnNob3dTaGFyZU1lbnUoe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5byA5ZCv6KKr5Yqo6L2s5Y+R5oiQ5Yqf77yBJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5byA5ZCv6KKr5Yqo6L2s5Y+R5aSx6LSl77yBJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB3eC5vblNoYXJlQXBwTWVzc2FnZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+i/memHjOWGmeWIhuS6q+WNoeeJh+eahOagh+mimCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVVybDogY2MudXJsLnJhdygnaW1nLnBuZycpLCAgICAgICAgLy8g5YiG5Lqr5Zu+54mH6KaB5pS+5ZyoIHdlY2hhdGdhbWUvcmVzL3Jhdy1hc3NldHMg6Lev5b6E5LiLXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogJ3NoYXJlTXNnPScgKyAn5YiG5Lqr5Y2h54mH5LiK5omA5bim55qE5L+h5oGvJyAgLy8gcXVlcnnmnIDlpKfplb/luqYobGVuZ3RoKeS4ujIwNDhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldFdYUXVlcnkoKSB7XHJcbiAgICAgICAgLy8g5b2T5YW25LuW546p5a625LuO5YiG5Lqr5Y2h54mH5LiK54K55Ye76L+b5YWl5pe277yM6I635Y+WcXVlcnnlj4LmlbBcclxuICAgICAgICBpZiAodHlwZW9mIHd4ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvYmplY3QgPSB3eC5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xyXG4gICAgICAgIGxldCBzaGFyZU1zZyA9IG9iamVjdC5xdWVyeVsnc2hhcmVNc2cnXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzaGFyZU1zZyk7XHJcbiAgICAgICAgcmV0dXJuIHNoYXJlTXNnO1xyXG4gICAgfSxcclxuICAgIHNraXAoKSB7XHJcbiAgICAgICAgdGhpcy5qaWFvY2hlbmcuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmZpbmlzaF9idXR0b24uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYmFja19idXR0b24uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYmFzZV9ub2RlLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKVxyXG4gICAgICAgIHRpbWVzID0gMVxyXG4gICAgfSxcclxuICAgIHN0YXJ0X2dhbWUoKSB7XHJcbiAgICAgICAgaWYgKHRpbWVzID09IDYpIHtcclxuICAgICAgICAgICAgdGhpcy5qaWFvY2hlbmdfbGFibGU3LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICB2YXIgZGlzYXBwZWFyID0gdGhpcy5qaWFvY2hlbmdfbGFibGU3LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgICAgIHZhciBjbGlwcyA9IGRpc2FwcGVhci5nZXRDbGlwcygpXHJcbiAgICAgICAgICAgIGRpc2FwcGVhci5wbGF5KGNsaXBzWzFdLm5hbWUpXHJcbiAgICAgICAgICAgIHZhciBqaWFvY2hlbmcgPSB0aGlzLmppYW9jaGVuZ1xyXG4gICAgICAgICAgICB2YXIgYmFzZV9ub2RlID0gdGhpcy5iYXNlX25vZGVcclxuICAgICAgICAgICAgdmFyIGZpbmlzaF9idXR0b24gPSB0aGlzLmZpbmlzaF9idXR0b25cclxuICAgICAgICAgICAgdmFyIGJhY2tfYnV0dG9uID0gdGhpcy5iYWNrX2J1dHRvblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGZpbmlzaF9idXR0b24uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYmFja19idXR0b24uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgamlhb2NoZW5nLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBiYXNlX25vZGUucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB0aW1lcyA9IDFcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29udHJvbChub2RlLCBub2RlXzEpIHtcclxuICAgICAgICB2YXIgZGVsZXRlX25vZGUgPSBuZXcgY2MuTm9kZSgnYnV0dG9uJylcclxuICAgICAgICB2YXIgZGVsZXRlX3Nwcml0ZSA9IGRlbGV0ZV9ub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHZhciBkZWxldGVfYnV0dG9uID0gZGVsZXRlX25vZGUuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgZGVsZXRlX3Nwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuZGVsZXRlX2J1dHRvbjtcclxuICAgICAgICBkZWxldGVfbm9kZS5wYXJlbnQgPSBub2RlXzFcclxuICAgICAgICB2YXIgZGVsZXRlX3ggPSBub2RlXzEud2lkdGggLyAyXHJcbiAgICAgICAgdmFyIGRlbGV0ZV95ID0gbm9kZV8xLmhlaWdodCAvIDJcclxuICAgICAgICBkZWxldGVfbm9kZS5zZXRQb3NpdGlvbihkZWxldGVfeCwgZGVsZXRlX3kpO1xyXG4gICAgICAgIGRlbGV0ZV9idXR0b24uZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgZGVsZXRlX2J1dHRvbi5ub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uIChidXR0b24pIHtcclxuICAgICAgICAgICAgbm9kZS5kZXN0cm95KClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHZhciBzY2FsZV9ub2RlID0gbmV3IGNjLk5vZGUoJ2J1dHRvbicpXHJcbiAgICAgICAgdmFyIHNjYWxlX3Nwcml0ZSA9IHNjYWxlX25vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgdmFyIHNjYWxlX2J1dHRvbiA9IHNjYWxlX25vZGUuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgc2NhbGVfc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5zY2FsZV9idXR0b247XHJcbiAgICAgICAgc2NhbGVfbm9kZS5wYXJlbnQgPSBub2RlXzFcclxuICAgICAgICB2YXIgc2NhbGVfeCA9IG5vZGVfMS53aWR0aCAvIDJcclxuICAgICAgICB2YXIgc2NhbGVfeSA9IG5vZGVfMS5oZWlnaHQgLyAyXHJcbiAgICAgICAgc2NhbGVfbm9kZS5zZXRQb3NpdGlvbihzY2FsZV94LCAtc2NhbGVfeSk7XHJcbiAgICAgICAgdmFyIG5vZGVfeCA9IG5vZGUucG9zaXRpb24ueFxyXG4gICAgICAgIHZhciBub2RlX3kgPSBub2RlLnBvc2l0aW9uLnlcclxuICAgICAgICB0aGlzLmppYW9jaGVuZ19sYWJsZTIucGFyZW50ID0gbm9kZVxyXG4gICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlMi5zY2FsZSA9IDIuMVxyXG4gICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlMi5zZXRQb3NpdGlvbihub2RlX3ggLSAzMDAsIG5vZGVfeSArIDQ1MClcclxuICAgICAgICB0aGlzLmppYW9jaGVuZ19sYWJsZTIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIC8v57yp5pS+5Luj56CBXHJcbiAgICAgICAgdmFyIGRpc3QgPSAwXHJcbiAgICAgICAgdmFyIFhYWCA9IDA7XHJcbiAgICAgICAgdmFyIFlZWSA9IDA7XHJcbiAgICAgICAgc2NhbGVfYnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdG91Y2hfbG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgICAgIGxldCBub2RlUG9zID0gbm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaF9sb2NhdGlvbilcclxuICAgICAgICAgICAgbGV0IFggPSBub2RlLnBvc2l0aW9uLnhcclxuICAgICAgICAgICAgbGV0IFkgPSBub2RlLnBvc2l0aW9uLnlcclxuICAgICAgICAgICAgdmFyIGRpc3QxID0gY2MudjIoWCwgWSkuc3ViKG5vZGVQb3MpLm1hZygpOy8vIOiuoeeul3RvdWNoX3N0YXJ055qE6Kem54K55LiO54mp5L2T5Z2Q5qCH55qE6Led56a7XHJcbiAgICAgICAgICAgIGRpc3QgPSBkaXN0MVxyXG4gICAgICAgICAgICBYWFggPSB0b3VjaF9sb2NhdGlvbi54O1xyXG4gICAgICAgICAgICBZWVkgPSB0b3VjaF9sb2NhdGlvbi55O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNjYWxlX2J1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvL+e8qeaUvuS7o+eggVxyXG4gICAgICAgICAgICBsZXQgdG91Y2hfbG9jYXRpb24yID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgICAgICBsZXQgbm9kZVBvcyA9IG5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hfbG9jYXRpb24yKVxyXG4gICAgICAgICAgICBsZXQgWFggPSBub2RlLnBvc2l0aW9uLnhcclxuICAgICAgICAgICAgbGV0IFlZID0gbm9kZS5wb3NpdGlvbi55XHJcbiAgICAgICAgICAgIGxldCBkaXN0MiA9IGNjLnYyKFhYLCBZWSkuc3ViKG5vZGVQb3MpLm1hZygpOy8vIOiuoeeul+enu+WKqOi/h+eoi+S4reeahOinpueCueWdkOagh+S4jueJqeS9k+WdkOagh+eahOi3neemu1xyXG4gICAgICAgICAgICBsZXQgcmF0ZSA9IGRpc3QyIC8gZGlzdCAvLyDot53nprvmr5TlgLwgXHJcbiAgICAgICAgICAgIC8vIOaOp+WItuavlOWAvOeahOacgOWkp+S4jeWkp+S6jjPvvIzmnIDlsI/kuI3lsI/kuo4wLjVcclxuICAgICAgICAgICAgaWYgKHJhdGUgPiAzKSB7XHJcbiAgICAgICAgICAgICAgICByYXRlID0gM1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJhdGUgPD0gMC41KSB7XHJcbiAgICAgICAgICAgICAgICByYXRlID0gMC41XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm9kZS5zY2FsZSAqPSByYXRlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2NhbGVfYnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRpbWVzID09IDQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlNS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5qaWFvY2hlbmdfbGFibGU2LnBhcmVudCA9IG5vZGVcclxuICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlNi5zY2FsZSA9IDIuMVxyXG4gICAgICAgICAgICAgICAgdGhpcy5qaWFvY2hlbmdfbGFibGU2LnNldFBvc2l0aW9uKG5vZGVfeCwgbm9kZV95ICsgNjAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5qaWFvY2hlbmdfbGFibGU2LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRlbGV0ZV9idXR0b24uZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRpbWVzID0gNVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGVsZXRlX2J1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aW1lcyA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmppYW9jaGVuZ19sYWJsZTYuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlNy5zZXRQb3NpdGlvbigwLCAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5qaWFvY2hlbmdfbGFibGU3LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlNy5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHZhciBhcHBlYXIgPSB0aGlzLmppYW9jaGVuZ19sYWJsZTcuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICAgICAgICAgIHZhciBjbGlwcyA9IGFwcGVhci5nZXRDbGlwcygpXHJcbiAgICAgICAgICAgICAgICBhcHBlYXIucGxheShjbGlwc1swXS5uYW1lKVxyXG4gICAgICAgICAgICAgICAgdmFyIGppYW9jaGVuZ19sYWJsZTcgPSB0aGlzLmppYW9jaGVuZ19sYWJsZTdcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGppYW9jaGVuZ19sYWJsZTcuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGppYW9jaGVuZ19sYWJsZTcuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgdGltZXMgPSA2XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgZW5hYmxlID0gdHJ1ZVxyXG4gICAgICAgIHZhciB0aW1lQXJyYXkgPSBbXVxyXG4gICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W5omL5oyH6Kem54K56Led56a75LiK5LiA5qyh54K555qE5L+h5oGvXHJcbiAgICAgICAgICAgIGxldCBkZWx0YSA9IGV2ZW50LmdldERlbHRhKCk7XHJcbiAgICAgICAgICAgIC8v5aKe5Yqg6ZmQ5a6a5p2h5Lu2XHJcbiAgICAgICAgICAgIGxldCBtaW5YID0gLW5vZGUucGFyZW50LndpZHRoIC8gMiArIG5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgICAgICBsZXQgbWF4WCA9IG5vZGUucGFyZW50LndpZHRoIC8gMiAtIG5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgICAgICBsZXQgbWluWSA9IC1ub2RlLnBhcmVudC5oZWlnaHQgLyAyICsgbm9kZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICBsZXQgbWF4WSA9IG5vZGUucGFyZW50LmhlaWdodCAvIDIgLSBub2RlLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlWCA9IG5vZGUueCArIGRlbHRhLng7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlWSA9IG5vZGUueSArIGRlbHRhLnk7XHJcbiAgICAgICAgICAgIC8v5o6n5Yi256e75Yqo6IyD5Zu0XHJcbiAgICAgICAgICAgIGlmIChtb3ZlWCA8IG1pblgpIHtcclxuICAgICAgICAgICAgICAgIG1vdmVYID0gbWluWDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtb3ZlWCA+IG1heFgpIHtcclxuICAgICAgICAgICAgICAgIG1vdmVYID0gbWF4WDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobW92ZVkgPCBtaW5ZKSB7XHJcbiAgICAgICAgICAgICAgICBtb3ZlWSA9IG1pblk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobW92ZVkgPiBtYXhZKSB7XHJcbiAgICAgICAgICAgICAgICBtb3ZlWSA9IG1heFk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/np7vliqjlsI/ovaboioLngrlcclxuICAgICAgICAgICAgbm9kZS54ID0gbm9kZS54ICsgZGVsdGEueDtcclxuICAgICAgICAgICAgbm9kZS55ID0gbm9kZS55ICsgZGVsdGEueTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+W9k+m8oOagh+aKrOi1t+eahOaXtuWAmeaBouWkjeeKtuaAgVxyXG4gICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgIHZhciB0aW1lID0gZGF0ZS5nZXRUaW1lKClcclxuICAgICAgICAgICAgdGltZUFycmF5LnB1c2godGltZSk7XHJcbiAgICAgICAgICAgIGlmICh0aW1lcyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmppYW9jaGVuZ19sYWJsZTIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlMy5wYXJlbnQgPSBub2RlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmppYW9jaGVuZ19sYWJsZTMuc2NhbGUgPSAyLjFcclxuICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlMy5zZXRQb3NpdGlvbihub2RlX3ggLSAzMDAsIG5vZGVfeSAtIDQ1MClcclxuICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlMy5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aW1lcyA9IDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGltZUFycmF5Lmxlbmd0aCA+IDEgJiYgKHRpbWVBcnJheVsxXSAtIHRpbWVBcnJheVswXSkgLyAxMDAwIDwgMC44KSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lQXJyYXkgPSBbXTsvLzHnp5LlhoXmnKrov57nu63ngrnlh7tcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuWPjOWHu1wiKVxyXG4gICAgICAgICAgICAgICAgaWYgKGVuYWJsZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICBub2RlXzEuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICBub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFKVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcImRpc2FibGVcIilcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGltZXMgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmppYW9jaGVuZ19sYWJsZTMuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qaWFvY2hlbmdfbGFibGU0LnBhcmVudCA9IG5vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qaWFvY2hlbmdfbGFibGU0LnNjYWxlID0gMi4xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlNC5zZXRQb3NpdGlvbihub2RlX3ggLSAzMDAsIG5vZGVfeSArIDYwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qaWFvY2hlbmdfbGFibGU0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXMgPSAzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVzID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qaWFvY2hlbmdfbGFibGU0LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlNS5wYXJlbnQgPSBub2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlNS5zY2FsZSA9IDIuMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmppYW9jaGVuZ19sYWJsZTUuc2V0UG9zaXRpb24obm9kZV94LCBub2RlX3kgLSA2MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlNS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlX2J1dHRvbi5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lcyA9IDRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVfMS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlbHRhID0gZXZlbnQuZ2V0RGVsdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/lop7liqDpmZDlrprmnaHku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1pblggPSAtbm9kZS5wYXJlbnQud2lkdGggLyAyICsgbm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhYID0gbm9kZS5wYXJlbnQud2lkdGggLyAyIC0gbm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtaW5ZID0gLW5vZGUucGFyZW50LmhlaWdodCAvIDIgKyBub2RlLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhZID0gbm9kZS5wYXJlbnQuaGVpZ2h0IC8gMiAtIG5vZGUuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVYID0gbm9kZS54ICsgZGVsdGEueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVZID0gbm9kZS55ICsgZGVsdGEueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/mjqfliLbnp7vliqjojIPlm7RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmVYIDwgbWluWCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVggPSBtaW5YO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vdmVYID4gbWF4WCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVggPSBtYXhYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlWSA8IG1pblkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVZID0gbWluWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb3ZlWSA+IG1heFkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVZID0gbWF4WTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+enu+WKqOWwj+i9puiKgueCuVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnggPSBub2RlLnggKyBkZWx0YS54O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnkgPSBub2RlLnkgKyBkZWx0YS55O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5b2T6byg5qCH5oqs6LW355qE5pe25YCZ5oGi5aSN54q25oCBXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiZW5hYmxlXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGltZUFycmF5Lmxlbmd0aCA+IDEgJiYgKHRpbWVBcnJheVsxXSAtIHRpbWVBcnJheVswXSkgLyAxMDAwID4gMC44KSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRpbWVBcnJheS5wdXNoKHRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGUxMTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCLmlZnnqItcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgdmFyIG5vZGVfMSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICB2YXIgc3AyID0gbm9kZV8xLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMi5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlXzExO1xyXG4gICAgICAgIG5vZGVfMS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sKG5vZGUsIG5vZGVfMSlcclxuICAgICAgICB0aGlzLmppYW9jaGVuZ19waWMuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmppYW9jaGVuZ19sYWJsZTEuYWN0aXZlID0gZmFsc2VcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
