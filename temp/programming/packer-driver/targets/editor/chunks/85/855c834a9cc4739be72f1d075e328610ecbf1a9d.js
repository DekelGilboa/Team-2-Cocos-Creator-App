System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _class, _crd, ccclass, property, banana_btn;

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

      _cclegacy._RF.push({}, "afff41SA5dInbAtllsbUwP9", "banana_btn", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("banana_btn", banana_btn = (_dec = ccclass("banana_btn"), _dec(_class = class banana_btn extends Component {
        start() {
          this.node.on(Node.EventType.MOUSE_DOWN, () => {
            console.log("banana_btn clicked");
            this.displayBananaGame();
          }, this);
        }

        update(deltaTime) {}

        displayBananaGame() {
          console.log("displayBananaGame");
          const startScreen = this.node.parent;
          const mainNode = startScreen.parent;
          const bananaGame = mainNode.getChildByName("banana_game");
          bananaGame.active = true;
          bananaGame.children[5].children[0] = bananaGame.children[0];
          bananaGame.children[5].children[1] = bananaGame.children[1];
          bananaGame.children[5].children[2] = bananaGame.children[2];
          bananaGame.children[5].children[3] = bananaGame.children[3];
          bananaGame.children[5].children[4] = bananaGame.children[4];
          startScreen.active = false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=855c834a9cc4739be72f1d075e328610ecbf1a9d.js.map