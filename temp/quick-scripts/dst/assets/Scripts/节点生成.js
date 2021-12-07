
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