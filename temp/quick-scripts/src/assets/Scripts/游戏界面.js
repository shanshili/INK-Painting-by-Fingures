"use strict";
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