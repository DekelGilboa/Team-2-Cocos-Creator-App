import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("banana_btn")
export class banana_btn extends Component {
  start() {
    this.node.on(
      Node.EventType.MOUSE_DOWN,
      () => {
        console.log("banana_btn clicked");
        this.displayBananaGame();
      },
      this
    );
  }

  update(deltaTime: number) {}
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
}
