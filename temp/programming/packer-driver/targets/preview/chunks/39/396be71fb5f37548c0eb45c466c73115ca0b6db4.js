System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, UITransform, director, Label, getArrayOf5RandomLocations, _dec, _class, _class2, _crd, ccclass, game;

  function _reportPossibleCrUseOfgetArrayOf5RandomLocations(extras) {
    _reporterNs.report("getArrayOf5RandomLocations", "./main", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      director = _cc.director;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      getArrayOf5RandomLocations = _unresolved_2.getArrayOf5RandomLocations;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "87aeew8G/dMqYbuEHs+y6b7", "game", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'UITransform', 'director', 'Label']);

      ({
        ccclass
      } = _decorator);

      _export("game", game = (_dec = ccclass("game"), _dec(_class = (_class2 = class game extends Component {
        constructor() {
          super(...arguments);
          this.speed = 150;
          this.maxScore = 0;
          this.currentScore = 0;
          this.isEventAdded = false;
          this.gameSpeed = this.speed;
          this.lifeCounter = 3;
          this.missed = false;
          this.isGameOver = false;
          this.startLocations = [...(_crd && getArrayOf5RandomLocations === void 0 ? (_reportPossibleCrUseOfgetArrayOf5RandomLocations({
            error: Error()
          }), getArrayOf5RandomLocations) : getArrayOf5RandomLocations)()];
        }

        onLoad() {
          this.node.parent.parent.getChildByName("blue_bg").active = true;
          this.node.children.forEach((item, index) => {
            item.setPosition(this.startLocations[index]);
          });
          this.node.parent.parent.getChildByName("retry").on(Node.EventType.MOUSE_DOWN, () => {
            this.startGame();
          });
        }

        update(deltaTime) {
          if (!this.isGameOver) {
            // console.log("game is running");
            if (!this.isEventAdded && this.node.children.length > 4) {
              this.addListeners();
              this.isEventAdded = true;
            }

            var birdWidthArr = [0, 0, 0, 0, 0];
            var randomNumbers = [];

            for (var i = 0; i < 5; i++) {
              var randomNumber = Math.floor(Math.random() * (750 - 500 + 1)) + 500;
              randomNumbers.push(randomNumber);
            }

            var randomY = [...randomNumbers];
            this.node.children.forEach((item, index) => {
              birdWidthArr[index] = item.getComponent(UITransform).width;
              this.startLocations.push(this.node.children[index].position);
              this.startLocations[index].y -= this.gameSpeed * deltaTime;
              item.setPosition(this.startLocations[index]);

              if (this.startLocations[index].y <= 0 - birdWidthArr[index]) {
                this.startLocations[index].y = randomY[index];
                if (index != 4) this.lifeCounter--;
              }

              item.setPosition(this.startLocations[index]);
            });
            this.node.parent.getChildByName("lives").children.forEach((item, index) => {
              if (index > this.lifeCounter) {
                item.active = false;
              }

              if (this.lifeCounter < 0 && !this.isGameOver) {
                this.isGameOver = true;
                this.gameOver();
              }
            });

            if (this.node.parent.parent.getChildByName("retry").getComponent("retryBtn")["retryBtnClicked"]) {
              this.startGame();
              this.node.parent.parent.getChildByName("retry").getComponent("retryBtn")["retryBtnClicked"] = false;
            }
          }
        }

        addListeners() {
          game.moveUp = index => {
            var randomNumbers = [];

            for (var i = 0; i < 5; i++) {
              var randomNumber = Math.floor(Math.random() * (750 - 250 + 1)) + 500;
              randomNumbers.push(randomNumber);
            }

            var randomY = [...randomNumbers];
            this.startLocations[index].y = randomY[index];
          };

          var increaseSpeed = () => {
            this.gameSpeed += 10;
          };

          this.node.children.forEach((item, index) => {
            if (index == 4) {
              item.on(Node.EventType.MOUSE_DOWN, () => {
                game.moveUp(index);
                increaseSpeed();
                this.lifeCounter--;
              });
            } else {
              item.on(Node.EventType.MOUSE_DOWN, () => {
                game.moveUp(index);
                increaseSpeed();
                this.currentScore++;
              });
            }
          });
        }

        gameOver() {
          this.showResult();
          director.pause();
          this.node.children.forEach(item => {
            item.active = false;
            this.node.parent.parent.getChildByName("retry").active = true;
          });
        }

        startGame() {
          this.isGameOver = false;
          this.node.parent.getChildByName("lives").children.forEach(item => {
            item.active = true;
          });
          this.lifeCounter = 3;
          this.gameSpeed = this.speed;
          this.currentScore = 0;
          director.resume();
          this.node.children.forEach((item, index) => {
            item.active = true;
            game.moveUp(index);
          });
          this.node.parent.parent.getChildByName("result").getComponent(Label).string = "Result: ";
          this.node.parent.parent.getChildByName("result").active = false;
          this.node.parent.parent.getChildByName("retry").active = false;
          console.log("game started");
        }

        showResult() {
          console.log("show result");
          this.maxScore = Math.max(this.maxScore, this.currentScore);
          var result = this.node.parent.parent.getChildByName("result");
          result.getComponent(Label).string += "\nScore: " + this.currentScore + "\nHigh Score: " + this.maxScore;
          result.active = true;
        }

      }, _class2.moveUp = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=396be71fb5f37548c0eb45c466c73115ca0b6db4.js.map