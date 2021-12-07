"use strict";
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