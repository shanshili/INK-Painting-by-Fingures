"use strict";
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