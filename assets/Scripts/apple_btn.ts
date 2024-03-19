import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("apple_btn")
export class apple_btn extends Component {
  start() {
    this.node.on(
      Node.EventType.MOUSE_DOWN,
      () => {
        console.log("apple_btn clicked");
        this.displayAppleGame();
        this.node.parent.parent.getChildByName("blue_bg").active = true;
      },
      this
    );
  }

  update(deltaTime: number) {}
  displayAppleGame() {
    console.log("displayAppleGame");
    const startScreen = this.node.parent;
    const mainNode = startScreen.parent;
    const appleGame = mainNode.getChildByName("apple_game");
    appleGame.active = true;
    appleGame.children[5].children[0] = appleGame.children[0];
    appleGame.children[5].children[1] = appleGame.children[1];
    appleGame.children[5].children[2] = appleGame.children[2];
    appleGame.children[5].children[3] = appleGame.children[3];
    appleGame.children[5].children[4] = appleGame.children[4];
    startScreen.active = false;
  }
}
