System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, _dec, _class, _crd, ccclass, property, main, getArrayOf5RandomLocations;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9fb5edRh1pCcIpYsjtKCDKh", "main", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("main", main = (_dec = ccclass("main"), _dec(_class = class main extends Component {
        start() {
          this.node.children.forEach(child => {
            child.active = false;
          });
          this.node.getChildByName("start_screen").active = true;
        }

        update(deltaTime) {}

      }) || _class));

      _export("getArrayOf5RandomLocations", getArrayOf5RandomLocations = () => {
        var startLocations = [];

        for (var i = 0; i < 5; i++) {
          var x = Math.floor(Math.random() * 300) - 150; // Random x coordinate between -150 and 150

          var y = Math.floor(Math.random() * 500) + 250; // Random y coordinate between 250 and 750

          startLocations.push(new Vec3(x, y));
        }

        return startLocations;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cf18285226cbb3772b10f5a5f2a30eeeb7a693de.js.map