
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xc5ri45oiP55WM6Z2iLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImNvbnRyb2xfc3VjYWkiLCJjb250cm9sX3R1Y2VuZyIsInRpbWVzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiYXNlX25vZGUiLCJOb2RlIiwidHVjZW5nIiwic3VjYWkiLCJmaW5pc2hfY2FudmEiLCJiYWNrX2J1dHRvbiIsImJhY2tfYnV0dG9uMiIsImJhY2tfYnV0dG9uMyIsImJhY2tfY2FudmEiLCJiYWNrX2NhbnZhMiIsImZpbmlzaF9idXR0b24iLCJVSSIsImxhYmVsMSIsIkVkaXRCb3giLCJsYWJlbDIiLCJ6dW9waW5taW5nIiwic2h1bWluZyIsImJhb2N1bl9idXR0b24iLCJmZW54aWFuZ19idXR0b24iLCJsYWJsZTEiLCJzYXZlX2NhbnZhIiwiamlhb2NoZW5nIiwiamlhb2NoZW5nX3BpYyIsInNwcml0ZTExIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwic3ByaXRlXzExIiwiZGVsZXRlX2J1dHRvbiIsInNjYWxlX2J1dHRvbiIsImppYW9jaGVuZ19sYWJsZTAiLCJqaWFvY2hlbmdfbGFibGUxIiwiamlhb2NoZW5nX2xhYmxlMiIsImppYW9jaGVuZ19sYWJsZTMiLCJqaWFvY2hlbmdfbGFibGU0Iiwiamlhb2NoZW5nX2xhYmxlNSIsImppYW9jaGVuZ19sYWJsZTYiLCJqaWFvY2hlbmdfbGFibGU3Iiwib25Mb2FkIiwiZGVidWciLCJzZXREaXNwbGF5U3RhdHMiLCJwYXNzaXZlU2hhcmUiLCJnZXRXWFF1ZXJ5Iiwic3RhcnQiLCJhcHBlYXIiLCJnZXRDb21wb25lbnQiLCJBbmltYXRpb24iLCJjbGlwcyIsImdldENsaXBzIiwicGxheSIsIm5hbWUiLCJwYXVzZVN5c3RlbUV2ZW50cyIsImFjdGl2ZSIsInNldFRpbWVvdXQiLCJkaXNhcHBlYXIiLCJvbmNsaWNrRW50ZXIiLCJzdHJpbmcxIiwic3RyaW5nIiwiTGFiZWwiLCJzdHJpbmcyIiwicmVzdW1lU3lzdGVtRXZlbnRzIiwic2F2ZV9jYW52YV9BbmltYXRpb24iLCJiYWNrX2NvbmZpcm0iLCJiYWNrX2NvbmZpcm1fdHJ1ZSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiZmluaXNoIiwiYmFja19jb25maXJtX2ZhbHNlIiwic3VjYWlfY2hhbmdlIiwiZG93biIsInVwIiwidHVjZW5nX2NoYW5nZSIsInJpZ2h0IiwibGVmdCIsIlVJX2Rpc2FwcGVhciIsIndvcmRfYW5pbWF0aW9uIiwidGVtcF9sYWJsZSIsImNsb3NlX2ZpbmlzaCIsIlVJX2FwcGVhciIsImJhY2syIiwiZmluaXNoX2NhbnZhX0FuaW1hdGlvbiIsImJhY2tfY29uZmlybV9mYWxzZTIiLCJkaXNhcHBlYXIyIiwidGFrZVBob3RvIiwiYmFvY3VuX2J1dHRvbl9BbmltYXRpb24iLCJmZW54aWFuZ19idXR0b25fQW5pbWF0aW9uIiwiYmFja19idXR0b24yX0FuaW1hdGlvbiIsImJhY2tfYnV0dG9uM19BbmltYXRpb24iLCJsb2ciLCJ3eCIsImF1dGhvcml6ZSIsInNjb3BlIiwic3VjY2VzcyIsInJlcyIsInRlbXBGaWxlUGF0aCIsImNhbnZhcyIsInRvVGVtcEZpbGVQYXRoU3luYyIsIngiLCJ5IiwiZmlsZVR5cGUiLCJxdWFsaXR5Iiwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bSIsImZpbGVQYXRoIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJmYWlsIiwiY29uc29sZSIsInNlbGYiLCJiYWNrIiwiYWN0aXZlU2hhcmUiLCJpZCIsInVybCIsInNoYXJlQXBwTWVzc2FnZSIsImltYWdlVXJsSWQiLCJpbWFnZVVybCIsInNob3dTaGFyZU1lbnUiLCJvblNoYXJlQXBwTWVzc2FnZSIsInJhdyIsInF1ZXJ5Iiwib2JqZWN0IiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJzaGFyZU1zZyIsInNraXAiLCJzdGFydF9nYW1lIiwiQnV0dG9uIiwiZW5hYmxlZCIsImNvbnRyb2wiLCJub2RlIiwibm9kZV8xIiwiZGVsZXRlX25vZGUiLCJkZWxldGVfc3ByaXRlIiwiYWRkQ29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJwYXJlbnQiLCJkZWxldGVfeCIsIndpZHRoIiwiZGVsZXRlX3kiLCJoZWlnaHQiLCJzZXRQb3NpdGlvbiIsIm9uIiwiYnV0dG9uIiwiZGVzdHJveSIsInNjYWxlX25vZGUiLCJzY2FsZV9zcHJpdGUiLCJzY2FsZV94Iiwic2NhbGVfeSIsIm5vZGVfeCIsInBvc2l0aW9uIiwibm9kZV95Iiwic2NhbGUiLCJkaXN0IiwiWFhYIiwiWVlZIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJldmVudCIsInRvdWNoX2xvY2F0aW9uIiwiZ2V0TG9jYXRpb24iLCJub2RlUG9zIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJYIiwiWSIsImRpc3QxIiwidjIiLCJzdWIiLCJtYWciLCJUT1VDSF9NT1ZFIiwidG91Y2hfbG9jYXRpb24yIiwiWFgiLCJZWSIsImRpc3QyIiwicmF0ZSIsIlRPVUNIX0VORCIsImVuYWJsZSIsInRpbWVBcnJheSIsImRlbHRhIiwiZ2V0RGVsdGEiLCJtaW5YIiwibWF4WCIsIm1pblkiLCJtYXhZIiwibW92ZVgiLCJtb3ZlWSIsImRhdGUiLCJEYXRlIiwidGltZSIsImdldFRpbWUiLCJwdXNoIiwibGVuZ3RoIiwib2ZmIiwiY3JlYXRlIiwic3AxIiwiZ2V0Q2hpbGRCeU5hbWUiLCJzcDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxhQUFQLEdBQXVCLENBQXZCO0FBQ0FELE1BQU0sQ0FBQ0UsY0FBUCxHQUF3QixDQUF4QjtBQUNBRixNQUFNLENBQUNHLEtBQVAsR0FBZSxDQUFmO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVU7QUFDTkMsSUFBQUEsU0FBUyxFQUFFSixFQUFFLENBQUNLLElBRFI7QUFFTkMsSUFBQUEsTUFBTSxFQUFF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MVxyXG53aW5kb3cuY29udHJvbF90dWNlbmcgPSAwXHJcbndpbmRvdy50aW1lcyA9IDFcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJhc2Vfbm9kZTogY2MuTm9kZSxcclxuICAgICAgICB0dWNlbmc6IGNjLk5vZGUsXHJcbiAgICAgICAgc3VjYWk6IGNjLk5vZGUsXHJcbiAgICAgICAgZmluaXNoX2NhbnZhOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJhY2tfYnV0dG9uOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJhY2tfYnV0dG9uMjogY2MuTm9kZSxcclxuICAgICAgICBiYWNrX2J1dHRvbjM6IGNjLk5vZGUsXHJcbiAgICAgICAgYmFja19jYW52YTogY2MuTm9kZSxcclxuICAgICAgICBiYWNrX2NhbnZhMjogY2MuTm9kZSxcclxuICAgICAgICBmaW5pc2hfYnV0dG9uOiBjYy5Ob2RlLFxyXG4gICAgICAgIFVJOiBjYy5Ob2RlLFxyXG4gICAgICAgIGxhYmVsMTogY2MuRWRpdEJveCxcclxuICAgICAgICBsYWJlbDI6IGNjLkVkaXRCb3gsXHJcbiAgICAgICAgenVvcGlubWluZzogY2MuTm9kZSxcclxuICAgICAgICBzaHVtaW5nOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJhb2N1bl9idXR0b246IGNjLk5vZGUsXHJcbiAgICAgICAgZmVueGlhbmdfYnV0dG9uOiBjYy5Ob2RlLFxyXG4gICAgICAgIGxhYmxlMTogY2MuTm9kZSxcclxuICAgICAgICBzYXZlX2NhbnZhOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJhb2N1bl9idXR0b246IGNjLk5vZGUsXHJcbiAgICAgICAgZmVueGlhbmdfYnV0dG9uOiBjYy5Ob2RlLFxyXG4gICAgICAgIGppYW9jaGVuZzogY2MuTm9kZSxcclxuICAgICAgICBqaWFvY2hlbmdfcGljOiBjYy5Ob2RlLFxyXG4gICAgICAgIHNwcml0ZTExOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlXzExOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlX2J1dHRvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjYWxlX2J1dHRvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGppYW9jaGVuZ19sYWJsZTA6IGNjLk5vZGUsXHJcbiAgICAgICAgamlhb2NoZW5nX2xhYmxlMTogY2MuTm9kZSxcclxuICAgICAgICBqaWFvY2hlbmdfbGFibGUyOiBjYy5Ob2RlLFxyXG4gICAgICAgIGppYW9jaGVuZ19sYWJsZTM6IGNjLk5vZGUsXHJcbiAgICAgICAgamlhb2NoZW5nX2xhYmxlNDogY2MuTm9kZSxcclxuICAgICAgICBqaWFvY2hlbmdfbGFibGU1OiBjYy5Ob2RlLFxyXG4gICAgICAgIGppYW9jaGVuZ19sYWJsZTY6IGNjLk5vZGUsXHJcbiAgICAgICAgamlhb2NoZW5nX2xhYmxlNzogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZGVidWcuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnBhc3NpdmVTaGFyZSgpOyBcclxuICAgICAgICB0aGlzLmdldFdYUXVlcnkoKTtcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB2YXIgYXBwZWFyID0gdGhpcy5iYXNlX25vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICB2YXIgY2xpcHMgPSBhcHBlYXIuZ2V0Q2xpcHMoKVxyXG4gICAgICAgIGFwcGVhci5wbGF5KGNsaXBzWzBdLm5hbWUpXHJcbiAgICAgICAgdGhpcy5iYXNlX25vZGUucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSlcclxuICAgICAgICB0aGlzLmZpbmlzaF9idXR0b24uYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmJhY2tfYnV0dG9uLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgdmFyIGppYW9jaGVuZ19sYWJsZTAgPSB0aGlzLmppYW9jaGVuZ19sYWJsZTBcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgamlhb2NoZW5nX2xhYmxlMC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIHZhciBkaXNhcHBlYXIgPSBqaWFvY2hlbmdfbGFibGUwLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgICAgIHZhciBjbGlwcyA9IGRpc2FwcGVhci5nZXRDbGlwcygpXHJcbiAgICAgICAgICAgIGRpc2FwcGVhci5wbGF5KGNsaXBzWzBdLm5hbWUpXHJcbiAgICAgICAgfSwgMTIwMCk7XHJcbiAgICAgICAgdmFyIGppYW9jaGVuZ19sYWJsZTEgPSB0aGlzLmppYW9jaGVuZ19sYWJsZTFcclxuICAgICAgICB2YXIgamlhb2NoZW5nX2xhYmxlMCA9IHRoaXMuamlhb2NoZW5nX2xhYmxlMFxyXG4gICAgICAgIHZhciBqaWFvY2hlbmdfcGljID0gdGhpcy5qaWFvY2hlbmdfcGljXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGppYW9jaGVuZ19sYWJsZTEuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICBqaWFvY2hlbmdfbGFibGUwLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGppYW9jaGVuZ19waWMuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIH0sIDMyMDApO1xyXG4gICAgfSxcclxuICAgIG9uY2xpY2tFbnRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZmluaXNoX2NhbnZhLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgdGhpcy5zYXZlX2NhbnZhLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgdGhpcy5sYWJlbDEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgc3RyaW5nMSA9IHRoaXMubGFiZWwxLnN0cmluZztcclxuICAgICAgICB0aGlzLnp1b3Bpbm1pbmcuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzdHJpbmcxO1xyXG4gICAgICAgIHRoaXMubGFiZWwyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdmFyIHN0cmluZzIgPSB0aGlzLmxhYmVsMi5zdHJpbmc7XHJcbiAgICAgICAgdGhpcy5zaHVtaW5nLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RyaW5nMjtcclxuICAgICAgICB0aGlzLlVJLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB2YXIgZGlzYXBwZWFyID0gdGhpcy5maW5pc2hfY2FudmEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICB2YXIgY2xpcHMgPSBkaXNhcHBlYXIuZ2V0Q2xpcHMoKVxyXG4gICAgICAgIGRpc2FwcGVhci5wbGF5KGNsaXBzWzFdLm5hbWUpXHJcbiAgICAgICAgdmFyIHNhdmVfY2FudmEgPSB0aGlzLnNhdmVfY2FudmFcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2F2ZV9jYW52YS5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSlcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB0aGlzLnNhdmVfY2FudmEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgc2F2ZV9jYW52YV9BbmltYXRpb24gPSB0aGlzLnNhdmVfY2FudmEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICBzYXZlX2NhbnZhX0FuaW1hdGlvbi5wbGF5KCfkv53lrZjliIbkuqvmjInpkq7mta7njrAnKVxyXG4gICAgfSxcclxuICAgIGJhY2tfY29uZmlybSgpIHtcclxuICAgICAgICB0aGlzLmJhY2tfY2FudmEuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHZhciBhcHBlYXIgPSB0aGlzLmJhY2tfY2FudmEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICB2YXIgY2xpcHMgPSBhcHBlYXIuZ2V0Q2xpcHMoKVxyXG4gICAgICAgIGFwcGVhci5wbGF5KGNsaXBzWzBdLm5hbWUpXHJcbiAgICAgICAgdGhpcy5iYXNlX25vZGUucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSlcclxuICAgICAgICB0aGlzLmJhY2tfY2FudmEucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICB9LFxyXG4gICAgYmFja19jb25maXJtX3RydWUoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwi5Li76aG16Z2iXCIpXHJcbiAgICAgICAgZmluaXNoID0gMFxyXG4gICAgfSxcclxuICAgIGJhY2tfY29uZmlybV9mYWxzZSgpIHtcclxuICAgICAgICB2YXIgZGlzYXBwZWFyID0gdGhpcy5iYWNrX2NhbnZhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgdmFyIGNsaXBzID0gZGlzYXBwZWFyLmdldENsaXBzKClcclxuICAgICAgICBkaXNhcHBlYXIucGxheShjbGlwc1sxXS5uYW1lKVxyXG4gICAgICAgIHZhciBiYXNlX25vZGUgPSB0aGlzLmJhc2Vfbm9kZVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBiYXNlX25vZGUucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgdGhpcy5iYWNrX2NhbnZhLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICB9LFxyXG4gICAgc3VjYWlfY2hhbmdlKCkge1xyXG4gICAgICAgIGlmIChjb250cm9sX3N1Y2FpID09IDEpIHtcclxuICAgICAgICAgICAgdmFyIGRvd24gPSB0aGlzLnN1Y2FpLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgICAgIHZhciBjbGlwcyA9IGRvd24uZ2V0Q2xpcHMoKVxyXG4gICAgICAgICAgICBkb3duLnBsYXkoY2xpcHNbMF0ubmFtZSlcclxuICAgICAgICAgICAgY29udHJvbF9zdWNhaSA9IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB1cCA9IHRoaXMuc3VjYWkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICAgICAgdmFyIGNsaXBzID0gdXAuZ2V0Q2xpcHMoKVxyXG4gICAgICAgICAgICB1cC5wbGF5KGNsaXBzWzFdLm5hbWUpXHJcbiAgICAgICAgICAgIGNvbnRyb2xfc3VjYWkgPSAxXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHR1Y2VuZ19jaGFuZ2UoKSB7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xfdHVjZW5nID09IDEpIHtcclxuICAgICAgICAgICAgdmFyIHJpZ2h0ID0gdGhpcy50dWNlbmcuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICAgICAgdmFyIGNsaXBzID0gcmlnaHQuZ2V0Q2xpcHMoKVxyXG4gICAgICAgICAgICByaWdodC5wbGF5KGNsaXBzWzBdLm5hbWUpXHJcbiAgICAgICAgICAgIGNvbnRyb2xfdHVjZW5nID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGxlZnQgPSB0aGlzLnR1Y2VuZy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgICAgICB2YXIgY2xpcHMgPSBsZWZ0LmdldENsaXBzKClcclxuICAgICAgICAgICAgbGVmdC5wbGF5KGNsaXBzWzFdLm5hbWUpXHJcbiAgICAgICAgICAgIGNvbnRyb2xfdHVjZW5nID0gMVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmaW5pc2goKSB7XHJcbiAgICAgICAgaWYgKGZpbmlzaCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZV9ub2RlLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoX2NhbnZhLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoX2NhbnZhLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdmFyIGFwcGVhciA9IHRoaXMuZmluaXNoX2NhbnZhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgICAgIHZhciBjbGlwcyA9IGFwcGVhci5nZXRDbGlwcygpXHJcbiAgICAgICAgICAgIGFwcGVhci5wbGF5KGNsaXBzWzBdLm5hbWUpXHJcbiAgICAgICAgICAgIHZhciBVSV9kaXNhcHBlYXIgPSB0aGlzLlVJLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgICAgIHZhciBjbGlwcyA9IFVJX2Rpc2FwcGVhci5nZXRDbGlwcygpXHJcbiAgICAgICAgICAgIFVJX2Rpc2FwcGVhci5wbGF5KGNsaXBzWzFdLm5hbWUpXHJcbiAgICAgICAgICAgIHZhciBmaW5pc2hfY2FudmEgPSB0aGlzLmZpbmlzaF9jYW52YVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVJLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBmaW5pc2hfY2FudmEucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbDEuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB2YXIgd29yZF9hbmltYXRpb24gPSB0aGlzLmxhYmxlMS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgICAgICB2YXIgY2xpcHMgPSB3b3JkX2FuaW1hdGlvbi5nZXRDbGlwcygpXHJcbiAgICAgICAgICAgIHdvcmRfYW5pbWF0aW9uLnBsYXkoY2xpcHNbMF0ubmFtZSlcclxuICAgICAgICAgICAgdmFyIHRlbXBfbGFibGUgPSB0aGlzLmxhYmVsMVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRlbXBfbGFibGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgfSwgMTEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNsb3NlX2ZpbmlzaCgpIHtcclxuICAgICAgICB0aGlzLmJhc2Vfbm9kZS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKVxyXG4gICAgICAgIHRoaXMuZmluaXNoX2NhbnZhLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgdGhpcy5VSS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgdmFyIFVJX2FwcGVhciA9IHRoaXMuVUkuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICB2YXIgY2xpcHMgPSBVSV9hcHBlYXIuZ2V0Q2xpcHMoKVxyXG4gICAgICAgIFVJX2FwcGVhci5wbGF5KGNsaXBzWzBdLm5hbWUpXHJcbiAgICAgICAgdmFyIGRpc2FwcGVhciA9IHRoaXMuZmluaXNoX2NhbnZhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgdmFyIGNsaXBzID0gZGlzYXBwZWFyLmdldENsaXBzKClcclxuICAgICAgICBkaXNhcHBlYXIucGxheShjbGlwc1sxXS5uYW1lKVxyXG4gICAgICAgIHZhciBiYXNlX25vZGUgPSB0aGlzLmJhc2Vfbm9kZVxyXG4gICAgICAgIHZhciBmaW5pc2hfY2FudmEgPSB0aGlzLmZpbmlzaF9jYW52YVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmaW5pc2hfY2FudmEuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgYmFzZV9ub2RlLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHRoaXMuenVvcGlubWluZy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zaHVtaW5nLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcclxuICAgIH0sXHJcbiAgICBiYWNrMigpIHtcclxuICAgICAgICB0aGlzLmZpbmlzaF9jYW52YS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmluaXNoX2NhbnZhLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgdGhpcy5zYXZlX2NhbnZhLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgdmFyIGRpc2FwcGVhciA9IHRoaXMuc2F2ZV9jYW52YS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgIHZhciBjbGlwcyA9IGRpc2FwcGVhci5nZXRDbGlwcygpXHJcbiAgICAgICAgZGlzYXBwZWFyLnBsYXkoY2xpcHNbMV0ubmFtZSlcclxuICAgICAgICB2YXIgZmluaXNoX2NhbnZhX0FuaW1hdGlvbiA9IHRoaXMuZmluaXNoX2NhbnZhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgZmluaXNoX2NhbnZhX0FuaW1hdGlvbi5wbGF5KCfmta7njrAnKVxyXG4gICAgICAgIHZhciBmaW5pc2hfY2FudmEgPSB0aGlzLmZpbmlzaF9jYW52YVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmaW5pc2hfY2FudmEucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9LFxyXG4gICAgYmFja19jb25maXJtX2ZhbHNlMigpIHtcclxuICAgICAgICB2YXIgZGlzYXBwZWFyMiA9IHRoaXMuYmFja19jYW52YTIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICB2YXIgY2xpcHMgPSBkaXNhcHBlYXIyLmdldENsaXBzKClcclxuICAgICAgICBkaXNhcHBlYXIyLnBsYXkoY2xpcHNbMV0ubmFtZSlcclxuICAgICAgICB2YXIgYmFja19jYW52YTIgPSB0aGlzLmJhY2tfY2FudmEyXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGJhY2tfY2FudmEyLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgdGhpcy5zYXZlX2NhbnZhLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKVxyXG4gICAgfSxcclxuICAgIHRha2VQaG90bzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYmFvY3VuX2J1dHRvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHZhciBiYW9jdW5fYnV0dG9uX0FuaW1hdGlvbiA9IHRoaXMuYmFvY3VuX2J1dHRvbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgIGJhb2N1bl9idXR0b25fQW5pbWF0aW9uLnBsYXkoJ+S/neWtmOWIhuS6q+aMiemSrua2iOWksScpXHJcbiAgICAgICAgLy8gdGhpcy5HcmV5X0NhbnZhLmFjdGl2ZSA9IGZhbHNlIFxyXG4gICAgICAgIHRoaXMuZmVueGlhbmdfYnV0dG9uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdmFyIGZlbnhpYW5nX2J1dHRvbl9BbmltYXRpb24gPSB0aGlzLmZlbnhpYW5nX2J1dHRvbi5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxyXG4gICAgICAgIGZlbnhpYW5nX2J1dHRvbl9BbmltYXRpb24ucGxheSgn5L+d5a2Y5YiG5Lqr5oyJ6ZKu5raI5aSxJylcclxuICAgICAgICB0aGlzLmJhY2tfYnV0dG9uMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHZhciBiYWNrX2J1dHRvbjJfQW5pbWF0aW9uID0gdGhpcy5iYWNrX2J1dHRvbjIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICBiYWNrX2J1dHRvbjJfQW5pbWF0aW9uLnBsYXkoJ+i/lOWbnua2iOaVoycpXHJcbiAgICAgICAgdGhpcy5iYWNrX2J1dHRvbjMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgYmFja19idXR0b24zX0FuaW1hdGlvbiA9IHRoaXMuYmFja19idXR0b24zLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgYmFja19idXR0b24zX0FuaW1hdGlvbi5wbGF5KCfov5Tlm57mtojmlaMnKVxyXG4gICAgICAgIHRoaXMuc2F2ZV9jYW52YS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCIxMDBcIik7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd3ggPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd3guYXV0aG9yaXplKHtcclxuICAgICAgICAgICAgICAgIHNjb3BlOiAnc2NvcGUud3JpdGVQaG90b3NBbGJ1bScsICAgLy8g6ZyA6KaB6I635Y+W55u45YaM5p2D6ZmQXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBob3RvQXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyDojrflj5blvZPliY3lsY/luZXmiKrlm77vvIzlj4LmlbDlj4LnhafmlofmoaPoh6rlt7Horr5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWxlUGF0aCA9IGNhbnZhcy50b1RlbXBGaWxlUGF0aFN5bmMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlVHlwZTogJ2pwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHk6ICcxJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWwhuaIquWbvuS/neWtmOWIsOebuOWGjOS4rVxyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlUGF0aDogdGhpcy50ZW1wRmlsZVBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflt7Lkv53lrZjliLDnm7jlhownLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5Zu+54mH5L+d5a2Y5aSx6LSlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aOiOadg+Wksei0pScpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMjUwMCk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBiYW9jdW5fYnV0dG9uX0FuaW1hdGlvbi5wbGF5KCfkv53lrZjliIbkuqvmjInpkq7mta7njrAnKVxyXG4gICAgICAgICAgICBmZW54aWFuZ19idXR0b25fQW5pbWF0aW9uLnBsYXkoJ+S/neWtmOWIhuS6q+aMiemSrua1rueOsCcpXHJcbiAgICAgICAgICAgIGJhY2tfYnV0dG9uMl9BbmltYXRpb24ucGxheSgn6L+U5Zue5rWu546wJylcclxuICAgICAgICAgICAgYmFja19idXR0b24zX0FuaW1hdGlvbi5wbGF5KCfov5Tlm57mta7njrAnKVxyXG4gICAgICAgICAgICBzZWxmLnNhdmVfY2FudmEucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgfSwgNDAwMCk7XHJcbiAgICB9LFxyXG4gICAgYmFjaygpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCLkuLvpobXpnaJcIilcclxuICAgIH0sXHJcbiAgICBhY3RpdmVTaGFyZSgpIHtcclxuICAgICAgICAvLyDkuLvliqjliIbkuqvmjInpkq5cclxuICAgICAgICBpZiAodHlwZW9mIHd4ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpZCA9ICdUZUIxeXFUTlNkMnFhQ09LMUQrSmhnPT0nIC8vIOmAmui/hyBNUCDns7vnu5/lrqHmoLjnmoTlm77niYfnvJblj7dcclxuICAgICAgICB2YXIgdXJsID0gJ2h0dHBzOi8vbW1vY2dhbWUucXBpYy5jbi93ZWNoYXRnYW1lL2ppYmJkVVJoQzZrZzZ6TXZmNG1lVEozUUhVdUZQYzc5TmdtSTFpYTloUHgxQWRVSDVpY2dXRE9VUVFZc0pJbFpqaWNDLzAnIC8vIOmAmui/hyBNUCDns7vnu5/lrqHmoLjnmoTlm77niYflnLDlnYBcclxuICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICB0aXRsZTogJycsIC8v5YiG5Lqr5Y2h54mH5LiK55qE5qCH6aKYXHJcbiAgICAgICAgICAgIGltYWdlVXJsSWQ6IGlkLFxyXG4gICAgICAgICAgICBpbWFnZVVybDogdXJsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHBhc3NpdmVTaGFyZSgpIHtcclxuICAgICAgICAvLyDnm5HlkKzlsI/nqIvluo/lj7PkuIrop5Loj5zljZXnmoTjgIzovazlj5HjgI3mjInpkq5cclxuICAgICAgICBpZiAodHlwZW9mIHd4ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOaYvuekuuW9k+WJjemhtemdoueahOi9rOWPkeaMiemSrlxyXG4gICAgICAgIHd4LnNob3dTaGFyZU1lbnUoe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5byA5ZCv6KKr5Yqo6L2s5Y+R5oiQ5Yqf77yBJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5byA5ZCv6KKr5Yqo6L2s5Y+R5aSx6LSl77yBJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB3eC5vblNoYXJlQXBwTWVzc2FnZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+i/memHjOWGmeWIhuS6q+WNoeeJh+eahOagh+mimCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVVybDogY2MudXJsLnJhdygnaW1nLnBuZycpLCAgICAgICAgLy8g5YiG5Lqr5Zu+54mH6KaB5pS+5ZyoIHdlY2hhdGdhbWUvcmVzL3Jhdy1hc3NldHMg6Lev5b6E5LiLXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogJ3NoYXJlTXNnPScgKyAn5YiG5Lqr5Y2h54mH5LiK5omA5bim55qE5L+h5oGvJyAgLy8gcXVlcnnmnIDlpKfplb/luqYobGVuZ3RoKeS4ujIwNDhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldFdYUXVlcnkoKSB7XHJcbiAgICAgICAgLy8g5b2T5YW25LuW546p5a625LuO5YiG5Lqr5Y2h54mH5LiK54K55Ye76L+b5YWl5pe277yM6I635Y+WcXVlcnnlj4LmlbBcclxuICAgICAgICBpZiAodHlwZW9mIHd4ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvYmplY3QgPSB3eC5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xyXG4gICAgICAgIGxldCBzaGFyZU1zZyA9IG9iamVjdC5xdWVyeVsnc2hhcmVNc2cnXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzaGFyZU1zZyk7XHJcbiAgICAgICAgcmV0dXJuIHNoYXJlTXNnO1xyXG4gICAgfSxcclxuICAgIHNraXAoKSB7XHJcbiAgICAgICAgdGhpcy5qaWFvY2hlbmcuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmZpbmlzaF9idXR0b24uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYmFja19idXR0b24uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYmFzZV9ub2RlLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKVxyXG4gICAgICAgIHRpbWVzID0gMVxyXG4gICAgfSxcclxuICAgIHN0YXJ0X2dhbWUoKSB7XHJcbiAgICAgICAgaWYgKHRpbWVzID09IDYpIHtcclxuICAgICAgICAgICAgdGhpcy5qaWFvY2hlbmdfbGFibGU3LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICB2YXIgZGlzYXBwZWFyID0gdGhpcy5qaWFvY2hlbmdfbGFibGU3LmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgICAgIHZhciBjbGlwcyA9IGRpc2FwcGVhci5nZXRDbGlwcygpXHJcbiAgICAgICAgICAgIGRpc2FwcGVhci5wbGF5KGNsaXBzWzFdLm5hbWUpXHJcbiAgICAgICAgICAgIHZhciBqaWFvY2hlbmcgPSB0aGlzLmppYW9jaGVuZ1xyXG4gICAgICAgICAgICB2YXIgYmFzZV9ub2RlID0gdGhpcy5iYXNlX25vZGVcclxuICAgICAgICAgICAgdmFyIGZpbmlzaF9idXR0b24gPSB0aGlzLmZpbmlzaF9idXR0b25cclxuICAgICAgICAgICAgdmFyIGJhY2tfYnV0dG9uID0gdGhpcy5iYWNrX2J1dHRvblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGZpbmlzaF9idXR0b24uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYmFja19idXR0b24uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgamlhb2NoZW5nLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBiYXNlX25vZGUucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpXHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB0aW1lcyA9IDFcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29udHJvbChub2RlLCBub2RlXzEpIHtcclxuICAgICAgICB2YXIgZGVsZXRlX25vZGUgPSBuZXcgY2MuTm9kZSgnYnV0dG9uJylcclxuICAgICAgICB2YXIgZGVsZXRlX3Nwcml0ZSA9IGRlbGV0ZV9ub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHZhciBkZWxldGVfYnV0dG9uID0gZGVsZXRlX25vZGUuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgZGVsZXRlX3Nwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuZGVsZXRlX2J1dHRvbjtcclxuICAgICAgICBkZWxldGVfbm9kZS5wYXJlbnQgPSBub2RlXzFcclxuICAgICAgICB2YXIgZGVsZXRlX3ggPSBub2RlXzEud2lkdGggLyAyXHJcbiAgICAgICAgdmFyIGRlbGV0ZV95ID0gbm9kZV8xLmhlaWdodCAvIDJcclxuICAgICAgICBkZWxldGVfbm9kZS5zZXRQb3NpdGlvbihkZWxldGVfeCwgZGVsZXRlX3kpO1xyXG4gICAgICAgIGRlbGV0ZV9idXR0b24uZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgZGVsZXRlX2J1dHRvbi5ub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uIChidXR0b24pIHtcclxuICAgICAgICAgICAgbm9kZS5kZXN0cm95KClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHZhciBzY2FsZV9ub2RlID0gbmV3IGNjLk5vZGUoJ2J1dHRvbicpXHJcbiAgICAgICAgdmFyIHNjYWxlX3Nwcml0ZSA9IHNjYWxlX25vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgdmFyIHNjYWxlX2J1dHRvbiA9IHNjYWxlX25vZGUuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgc2NhbGVfc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5zY2FsZV9idXR0b247XHJcbiAgICAgICAgc2NhbGVfbm9kZS5wYXJlbnQgPSBub2RlXzFcclxuICAgICAgICB2YXIgc2NhbGVfeCA9IG5vZGVfMS53aWR0aCAvIDJcclxuICAgICAgICB2YXIgc2NhbGVfeSA9IG5vZGVfMS5oZWlnaHQgLyAyXHJcbiAgICAgICAgc2NhbGVfbm9kZS5zZXRQb3NpdGlvbihzY2FsZV94LCAtc2NhbGVfeSk7XHJcbiAgICAgICAgdmFyIG5vZGVfeCA9IG5vZGUucG9zaXRpb24ueFxyXG4gICAgICAgIHZhciBub2RlX3kgPSBub2RlLnBvc2l0aW9uLnlcclxuICAgICAgICB0aGlzLmppYW9jaGVuZ19sYWJsZTIucGFyZW50ID0gbm9kZVxyXG4gICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlMi5zY2FsZSA9IDIuMVxyXG4gICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlMi5zZXRQb3NpdGlvbihub2RlX3ggLSAzMDAsIG5vZGVfeSArIDQ1MClcclxuICAgICAgICB0aGlzLmppYW9jaGVuZ19sYWJsZTIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIC8v57yp5pS+5Luj56CBXHJcbiAgICAgICAgdmFyIGRpc3QgPSAwXHJcbiAgICAgICAgdmFyIFhYWCA9IDA7XHJcbiAgICAgICAgdmFyIFlZWSA9IDA7XHJcbiAgICAgICAgc2NhbGVfYnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdG91Y2hfbG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgICAgIGxldCBub2RlUG9zID0gbm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaF9sb2NhdGlvbilcclxuICAgICAgICAgICAgbGV0IFggPSBub2RlLnBvc2l0aW9uLnhcclxuICAgICAgICAgICAgbGV0IFkgPSBub2RlLnBvc2l0aW9uLnlcclxuICAgICAgICAgICAgdmFyIGRpc3QxID0gY2MudjIoWCwgWSkuc3ViKG5vZGVQb3MpLm1hZygpOy8vIOiuoeeul3RvdWNoX3N0YXJ055qE6Kem54K55LiO54mp5L2T5Z2Q5qCH55qE6Led56a7XHJcbiAgICAgICAgICAgIGRpc3QgPSBkaXN0MVxyXG4gICAgICAgICAgICBYWFggPSB0b3VjaF9sb2NhdGlvbi54O1xyXG4gICAgICAgICAgICBZWVkgPSB0b3VjaF9sb2NhdGlvbi55O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNjYWxlX2J1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvL+e8qeaUvuS7o+eggVxyXG4gICAgICAgICAgICBsZXQgdG91Y2hfbG9jYXRpb24yID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgICAgICBsZXQgbm9kZVBvcyA9IG5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hfbG9jYXRpb24yKVxyXG4gICAgICAgICAgICBsZXQgWFggPSBub2RlLnBvc2l0aW9uLnhcclxuICAgICAgICAgICAgbGV0IFlZID0gbm9kZS5wb3NpdGlvbi55XHJcbiAgICAgICAgICAgIGxldCBkaXN0MiA9IGNjLnYyKFhYLCBZWSkuc3ViKG5vZGVQb3MpLm1hZygpOy8vIOiuoeeul+enu+WKqOi/h+eoi+S4reeahOinpueCueWdkOagh+S4jueJqeS9k+WdkOagh+eahOi3neemu1xyXG4gICAgICAgICAgICBsZXQgcmF0ZSA9IGRpc3QyIC8gZGlzdCAvLyDot53nprvmr5TlgLwgXHJcbiAgICAgICAgICAgIC8vIOaOp+WItuavlOWAvOeahOacgOWkp+S4jeWkp+S6jjPvvIzmnIDlsI/kuI3lsI/kuo4wLjVcclxuICAgICAgICAgICAgaWYgKHJhdGUgPiAzKSB7XHJcbiAgICAgICAgICAgICAgICByYXRlID0gM1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJhdGUgPD0gMC41KSB7XHJcbiAgICAgICAgICAgICAgICByYXRlID0gMC41XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm9kZS5zY2FsZSAqPSByYXRlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2NhbGVfYnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRpbWVzID09IDQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlNS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5qaWFvY2hlbmdfbGFibGU2LnBhcmVudCA9IG5vZGVcclxuICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlNi5zY2FsZSA9IDIuMVxyXG4gICAgICAgICAgICAgICAgdGhpcy5qaWFvY2hlbmdfbGFibGU2LnNldFBvc2l0aW9uKG5vZGVfeCwgbm9kZV95ICsgNjAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5qaWFvY2hlbmdfbGFibGU2LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGRlbGV0ZV9idXR0b24uZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRpbWVzID0gNVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGVsZXRlX2J1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aW1lcyA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmppYW9jaGVuZ19sYWJsZTYuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlNy5zZXRQb3NpdGlvbigwLCAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5qaWFvY2hlbmdfbGFibGU3LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlNy5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHZhciBhcHBlYXIgPSB0aGlzLmppYW9jaGVuZ19sYWJsZTcuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICAgICAgICAgIHZhciBjbGlwcyA9IGFwcGVhci5nZXRDbGlwcygpXHJcbiAgICAgICAgICAgICAgICBhcHBlYXIucGxheShjbGlwc1swXS5uYW1lKVxyXG4gICAgICAgICAgICAgICAgdmFyIGppYW9jaGVuZ19sYWJsZTcgPSB0aGlzLmppYW9jaGVuZ19sYWJsZTdcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGppYW9jaGVuZ19sYWJsZTcuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGppYW9jaGVuZ19sYWJsZTcuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgdGltZXMgPSA2XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgZW5hYmxlID0gdHJ1ZVxyXG4gICAgICAgIHZhciB0aW1lQXJyYXkgPSBbXVxyXG4gICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W5omL5oyH6Kem54K56Led56a75LiK5LiA5qyh54K555qE5L+h5oGvXHJcbiAgICAgICAgICAgIGxldCBkZWx0YSA9IGV2ZW50LmdldERlbHRhKCk7XHJcbiAgICAgICAgICAgIC8v5aKe5Yqg6ZmQ5a6a5p2h5Lu2XHJcbiAgICAgICAgICAgIGxldCBtaW5YID0gLW5vZGUucGFyZW50LndpZHRoIC8gMiArIG5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgICAgICBsZXQgbWF4WCA9IG5vZGUucGFyZW50LndpZHRoIC8gMiAtIG5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgICAgICBsZXQgbWluWSA9IC1ub2RlLnBhcmVudC5oZWlnaHQgLyAyICsgbm9kZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICBsZXQgbWF4WSA9IG5vZGUucGFyZW50LmhlaWdodCAvIDIgLSBub2RlLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlWCA9IG5vZGUueCArIGRlbHRhLng7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlWSA9IG5vZGUueSArIGRlbHRhLnk7XHJcbiAgICAgICAgICAgIC8v5o6n5Yi256e75Yqo6IyD5Zu0XHJcbiAgICAgICAgICAgIGlmIChtb3ZlWCA8IG1pblgpIHtcclxuICAgICAgICAgICAgICAgIG1vdmVYID0gbWluWDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtb3ZlWCA+IG1heFgpIHtcclxuICAgICAgICAgICAgICAgIG1vdmVYID0gbWF4WDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobW92ZVkgPCBtaW5ZKSB7XHJcbiAgICAgICAgICAgICAgICBtb3ZlWSA9IG1pblk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobW92ZVkgPiBtYXhZKSB7XHJcbiAgICAgICAgICAgICAgICBtb3ZlWSA9IG1heFk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/np7vliqjlsI/ovaboioLngrlcclxuICAgICAgICAgICAgbm9kZS54ID0gbm9kZS54ICsgZGVsdGEueDtcclxuICAgICAgICAgICAgbm9kZS55ID0gbm9kZS55ICsgZGVsdGEueTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+W9k+m8oOagh+aKrOi1t+eahOaXtuWAmeaBouWkjeeKtuaAgVxyXG4gICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgIHZhciB0aW1lID0gZGF0ZS5nZXRUaW1lKClcclxuICAgICAgICAgICAgdGltZUFycmF5LnB1c2godGltZSk7XHJcbiAgICAgICAgICAgIGlmICh0aW1lcyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmppYW9jaGVuZ19sYWJsZTIuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlMy5wYXJlbnQgPSBub2RlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmppYW9jaGVuZ19sYWJsZTMuc2NhbGUgPSAyLjFcclxuICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlMy5zZXRQb3NpdGlvbihub2RlX3ggLSAzMDAsIG5vZGVfeSAtIDQ1MClcclxuICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlMy5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aW1lcyA9IDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGltZUFycmF5Lmxlbmd0aCA+IDEgJiYgKHRpbWVBcnJheVsxXSAtIHRpbWVBcnJheVswXSkgLyAxMDAwIDwgMC44KSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lQXJyYXkgPSBbXTsvLzHnp5LlhoXmnKrov57nu63ngrnlh7tcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuWPjOWHu1wiKVxyXG4gICAgICAgICAgICAgICAgaWYgKGVuYWJsZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICBub2RlXzEuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICBub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFKVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcImRpc2FibGVcIilcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGltZXMgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmppYW9jaGVuZ19sYWJsZTMuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qaWFvY2hlbmdfbGFibGU0LnBhcmVudCA9IG5vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qaWFvY2hlbmdfbGFibGU0LnNjYWxlID0gMi4xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlNC5zZXRQb3NpdGlvbihub2RlX3ggLSAzMDAsIG5vZGVfeSArIDYwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qaWFvY2hlbmdfbGFibGU0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXMgPSAzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVzID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qaWFvY2hlbmdfbGFibGU0LmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlNS5wYXJlbnQgPSBub2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlNS5zY2FsZSA9IDIuMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmppYW9jaGVuZ19sYWJsZTUuc2V0UG9zaXRpb24obm9kZV94LCBub2RlX3kgLSA2MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuamlhb2NoZW5nX2xhYmxlNS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlX2J1dHRvbi5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lcyA9IDRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVfMS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlbHRhID0gZXZlbnQuZ2V0RGVsdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/lop7liqDpmZDlrprmnaHku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1pblggPSAtbm9kZS5wYXJlbnQud2lkdGggLyAyICsgbm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhYID0gbm9kZS5wYXJlbnQud2lkdGggLyAyIC0gbm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtaW5ZID0gLW5vZGUucGFyZW50LmhlaWdodCAvIDIgKyBub2RlLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhZID0gbm9kZS5wYXJlbnQuaGVpZ2h0IC8gMiAtIG5vZGUuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVYID0gbm9kZS54ICsgZGVsdGEueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVZID0gbm9kZS55ICsgZGVsdGEueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/mjqfliLbnp7vliqjojIPlm7RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmVYIDwgbWluWCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVggPSBtaW5YO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vdmVYID4gbWF4WCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVggPSBtYXhYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlWSA8IG1pblkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVZID0gbWluWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb3ZlWSA+IG1heFkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVZID0gbWF4WTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+enu+WKqOWwj+i9puiKgueCuVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnggPSBub2RlLnggKyBkZWx0YS54O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnkgPSBub2RlLnkgKyBkZWx0YS55O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5b2T6byg5qCH5oqs6LW355qE5pe25YCZ5oGi5aSN54q25oCBXHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiZW5hYmxlXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGltZUFycmF5Lmxlbmd0aCA+IDEgJiYgKHRpbWVBcnJheVsxXSAtIHRpbWVBcnJheVswXSkgLyAxMDAwID4gMC44KSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRpbWVBcnJheS5wdXNoKHRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdmFyIHNwMSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3AxLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGUxMTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCLmlZnnqItcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiYXNlXCIpO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgdmFyIG5vZGVfMSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcclxuICAgICAgICB2YXIgc3AyID0gbm9kZV8xLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwMi5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlXzExO1xyXG4gICAgICAgIG5vZGVfMS5wYXJlbnQgPSBub2RlO1xyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sKG5vZGUsIG5vZGVfMSlcclxuICAgICAgICB0aGlzLmppYW9jaGVuZ19waWMuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB0aGlzLmppYW9jaGVuZ19sYWJsZTEuYWN0aXZlID0gZmFsc2VcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=