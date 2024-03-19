import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("peache_btn")
export class peache_btn extends Component {
  start() {
    this.node.on(
      Node.EventType.MOUSE_DOWN,
      () => {
        console.log("peache_btn clicked");
        this.displayPeacheGame();
      },
      this
    );
  }

  update(deltaTime: number) {}
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
}
