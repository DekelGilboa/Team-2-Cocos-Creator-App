import { _decorator, Component, Node, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("main")
export class main extends Component {
  start() {
    this.node.children.forEach((child) => {
      child.active = false;
    });
    this.node.getChildByName("start_screen").active = true;
    this.node.getChildByName("conversion-btn").active = true;
  }

  update(deltaTime: number) {}
}
export const getArrayOf5RandomLocations = () => {
  const startLocations = [];
  for (let i = 0; i < 5; i++) {
    const x = Math.floor(Math.random() * 300) - 150; // Random x coordinate between -150 and 150
    const y = Math.floor(Math.random() * 500) + 250; // Random y coordinate between 250 and 750
    startLocations.push(new Vec3(x, y));
  }
  return startLocations;
};
