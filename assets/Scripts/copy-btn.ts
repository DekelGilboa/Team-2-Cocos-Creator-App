import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('copy_btn')
export class copy_btn extends Component {
    start() {
        this.node.on(
          Node.EventType.MOUSE_DOWN,
          () => {
            console.log("copy btn is clicked");
          },
          this
        );
    }
}

