System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _class, _crd, ccclass, property, apple_btn;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e2d9U5/mdPqqYT0KZjTe3P", "apple_btn", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("apple_btn", apple_btn = (_dec = ccclass("apple_btn"), _dec(_class = class apple_btn extends Component {
        start() {
          this.node.on(Node.EventType.MOUSE_DOWN, () => {
            console.log("apple_btn clicked");
            this.displayAppleGame();
          }, this);
        }

        update(deltaTime) {}

        displayAppleGame() {
          console.log("displayAppleGame");
          var startScreen = this.node.parent;
          var mainNode = startScreen.parent;
          var appleGame = mainNode.getChildByName("apple_game");
          appleGame.active = true;
          startScreen.active = false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8344be9dc815c99c4d97b9e3720cb0cc5fada43b.js.map