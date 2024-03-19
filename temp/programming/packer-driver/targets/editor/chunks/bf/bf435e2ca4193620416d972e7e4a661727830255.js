System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _class, _crd, ccclass, property, peache_btn;

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

      _cclegacy._RF.push({}, "277a9Su5N9NNYEGNmSJAnlF", "peache_btn", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("peache_btn", peache_btn = (_dec = ccclass("peache_btn"), _dec(_class = class peache_btn extends Component {
        start() {
          this.node.on(Node.EventType.MOUSE_DOWN, () => {
            console.log("peache_btn clicked");
            this.displayPeacheGame();
          }, this);
        }

        update(deltaTime) {}

        displayPeacheGame() {
          console.log("displayPeacheGame");
          const startScreen = this.node.parent;
          const mainNode = startScreen.parent;
          const peacheGame = mainNode.getChildByName("peache_game");
          peacheGame.active = true;
          peacheGame.children[5].children[0] = peacheGame.children[0];
          peacheGame.children[5].children[1] = peacheGame.children[1];
          peacheGame.children[5].children[2] = peacheGame.children[2];
          peacheGame.children[5].children[3] = peacheGame.children[3];
          peacheGame.children[5].children[4] = peacheGame.children[4];
          startScreen.active = false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bf435e2ca4193620416d972e7e4a661727830255.js.map