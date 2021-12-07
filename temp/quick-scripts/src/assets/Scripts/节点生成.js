"use strict";
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