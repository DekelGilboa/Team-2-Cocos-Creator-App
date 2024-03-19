System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, UITransform, director, Canvas, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, bird;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
      director = _cc.director;
      Canvas = _cc.Canvas;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "87aeew8G/dMqYbuEHs+y6b7", "bird", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'UITransform', 'director', 'Canvas']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("bird", bird = (_dec = ccclass("bird"), _dec2 = property({
        type: Node,
        tooltip: "First bird"
      }), _dec3 = property({
        type: Node,
        tooltip: "Second bird"
      }), _dec4 = property({
        type: Node,
        tooltip: "Third bird"
      }), _dec5 = property({
        type: Node,
        tooltip: "Fourth bird"
      }), _dec6 = property({
        type: Node,
        tooltip: "Fifth bird"
      }), _dec(_class = (_class2 = class bird extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bird1", _descriptor, this);

          _initializerDefineProperty(this, "bird2", _descriptor2, this);

          _initializerDefineProperty(this, "bird3", _descriptor3, this);

          _initializerDefineProperty(this, "bird4", _descriptor4, this);

          _initializerDefineProperty(this, "bird5", _descriptor5, this);

          //make temporary starting locations
          this.tempStartLocation1 = new Vec3();
          this.tempStartLocation2 = new Vec3();
          this.tempStartLocation3 = new Vec3();
          this.tempStartLocation4 = new Vec3();
          this.tempStartLocation5 = new Vec3();
          //get the gamespeeds
          this.gameSpeed = 300;
        }

        onLoad() {
          this.startUp();
        }

        startUp() {
          const tempStartLocation1 = new Vec3(150, 700);
          const tempStartLocation2 = new Vec3(0, 640);
          const tempStartLocation3 = new Vec3(-150, 720);
          const tempStartLocation4 = new Vec3(-20, 600);
          const tempStartLocation5 = new Vec3(100, 570);
          this.bird1.setPosition(tempStartLocation1);
          this.bird2.setPosition(tempStartLocation2);
          this.bird3.setPosition(tempStartLocation3);
          this.bird4.setPosition(tempStartLocation4);
          this.bird5.setPosition(tempStartLocation5);
        }

        update(deltaTime) {
          const birdWidth1 = this.bird1.getComponent(UITransform).height;
          const birdWidth2 = this.bird2.getComponent(UITransform).height;
          const birdWidth3 = this.bird3.getComponent(UITransform).height;
          const birdWidth4 = this.bird4.getComponent(UITransform).height;
          const birdWidth5 = this.bird5.getComponent(UITransform).height; // Get speed of birds

          this.gameSpeed = 120; // Place real location data into temp locations

          this.tempStartLocation1 = this.bird1.position;
          this.tempStartLocation2 = this.bird2.position;
          this.tempStartLocation3 = this.bird3.position;
          this.tempStartLocation4 = this.bird4.position;
          this.tempStartLocation5 = this.bird5.position; // Get speed and subtract location on Y axis

          this.tempStartLocation1.y -= this.gameSpeed * deltaTime;
          this.tempStartLocation2.y -= this.gameSpeed * deltaTime;
          this.tempStartLocation3.y -= this.gameSpeed * deltaTime;
          this.tempStartLocation4.y -= this.gameSpeed * deltaTime;
          this.tempStartLocation5.y -= this.gameSpeed * deltaTime; // Apply updated positions

          this.bird1.setPosition(this.tempStartLocation1);
          this.bird2.setPosition(this.tempStartLocation2);
          this.bird3.setPosition(this.tempStartLocation3);
          this.bird4.setPosition(this.tempStartLocation4);
          this.bird5.setPosition(this.tempStartLocation5); // Check if each bird has moved off screen, and if so, reset its position to the top edge of the screen

          const scene = director.getScene();
          const canvas = scene.getComponentInChildren(Canvas);

          if (this.tempStartLocation1.y <= 0 - birdWidth1) {
            this.tempStartLocation1.y = 550;
          }

          if (this.tempStartLocation2.y <= 0 - birdWidth2) {
            this.tempStartLocation2.y = 620;
          }

          if (this.tempStartLocation3.y <= 0 - birdWidth3) {
            this.tempStartLocation3.y = 740;
          }

          if (this.tempStartLocation4.y <= 0 - birdWidth4) {
            this.tempStartLocation4.y = 710;
          }

          if (this.tempStartLocation5.y <= 0 - birdWidth5) {
            this.tempStartLocation5.y = 590;
          } // Apply updated positions


          this.bird1.setPosition(this.tempStartLocation1);
          this.bird2.setPosition(this.tempStartLocation2);
          this.bird3.setPosition(this.tempStartLocation3);
          this.bird4.setPosition(this.tempStartLocation4);
          this.bird5.setPosition(this.tempStartLocation5);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bird1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bird2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bird3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bird4", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bird5", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=da1216752a3e0946009818ba7d2605a81a51cad1.js.map