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
            this.node.parent.parent.getChildByName("blue_bg").active = true;
          }, this);
        }

        update(deltaTime) {}

        displayAppleGame() {
          console.log("displayAppleGame");
          var startScreen = this.node.parent;
          var mainNode = startScreen.parent;
          var appleGame = mainNode.getChildByName("apple_game");
          appleGame.active = true;
          appleGame.children[5].children[0] = appleGame.children[0];
          appleGame.children[5].children[1] = appleGame.children[1];
          appleGame.children[5].children[2] = appleGame.children[2];
          appleGame.children[5].children[3] = appleGame.children[3];
          appleGame.children[5].children[4] = appleGame.children[4];
          startScreen.active = false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b6a735a3623ec0a9d3d9d7b740b7b690b8dddef4.js.map