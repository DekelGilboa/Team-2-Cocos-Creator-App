System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, UITransform, _dec, _class, _crd, ccclass, bird;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "87aeew8G/dMqYbuEHs+y6b7", "bird", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'UITransform', 'director', 'Canvas']);

      ({
        ccclass
      } = _decorator);

      _export("bird", bird = (_dec = ccclass("bird"), _dec(_class = class bird extends Component {
        constructor(...args) {
          super(...args);
          this.startLocations = [new Vec3(150, 700), new Vec3(0, 640), new Vec3(-150, 720), new Vec3(-20, 600), new Vec3(100, 570)];
          this.gameSpeed = 300;
        }

        onLoad() {
          this.node.children.forEach((item, index) => {
            item.setPosition(this.startLocations[index]);
            console.log("pos: ", this.startLocations[index]);
            console.log("position: ", item.position);
          });
        }

        update(deltaTime) {
          const birdWidthArr = [0, 0, 0, 0, 0];
          this.gameSpeed = 120;
          const randomY = [550, 620, 740, 590, 710];
          this.node.children.forEach((item, index) => {
            birdWidthArr[index] = item.getComponent(UITransform).width;
            this.startLocations.push(this.node.children[index].position);
            this.startLocations[index].y -= this.gameSpeed * deltaTime;
            item.setPosition(this.startLocations[index]);

            if (this.startLocations[index].y <= 0 - birdWidthArr[index]) {
              this.startLocations[index].y = randomY[index];
            }

            item.setPosition(this.startLocations[index]);
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0292cc80ebbc3990dcf9356979bf2e471f5994ef.js.map