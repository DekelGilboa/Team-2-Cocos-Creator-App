import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('conversion_btn')
export class conversion_btn extends Component {
    start() {
        this.node.on(
          Node.EventType.MOUSE_DOWN,
          () => {
            console.log("conversion is clicked");
          },
          this
        );
    }

}

