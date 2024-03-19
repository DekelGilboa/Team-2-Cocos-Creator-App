import {
  _decorator,
  Component,
  Node,
  Vec3,
  UITransform,
  director,
  Label,
} from "cc";
const { ccclass } = _decorator;
import { getArrayOf5RandomLocations } from "./main";

@ccclass("game")
export class game extends Component {

  readonly speed: number = 150;

  maxScore: number = 0;
  currentScore: number = 0;
  isEventAdded: boolean = false;
  gameSpeed: number = this.speed;
  lifeCounter: number = 3;
  missed: boolean = false;
  isGameOver: boolean = false;

  // get random starting position for the game items 
  public startLocations = [...getArrayOf5RandomLocations()];

  static moveUp: any;

  onLoad() {
    this.node.parent.parent.getChildByName("blue_bg").active = true;

    // Set the initial positions of all child nodes (the items like apples, banana...) based on the startLocations array
    this.node.children.forEach((item, index) => {
      item.setPosition(this.startLocations[index]);
    });

   //get listener started
    this.addListeners()
  }

  update(deltaTime: number) {
    
    if (!this.isGameOver) {
      if (!this.isEventAdded && this.node.children.length > 4) {
        this.addListeners();
        this.isEventAdded = true;
      }
      const birdWidthArr = [0, 0, 0, 0, 0];

      const randomNumbers = [];
      for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * (750 - 500 + 1)) + 500;
        randomNumbers.push(randomNumber);
      }
      const randomY = [...randomNumbers];
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
      this.node.parent
        .getChildByName("lives")
        .children.forEach((item, index) => {
          if (index > this.lifeCounter) {
            item.active = false;
          }
          if (this.lifeCounter < 0 && !this.isGameOver) {
            this.isGameOver = true;
            this.gameOver();
          }
        });
      if (
        this.node.parent.parent
          .getChildByName("retry")
          .getComponent("retryBtn")["retryBtnClicked"]
      ) {
        this.startGame();
        this.node.parent.parent
          .getChildByName("retry")
          .getComponent("retryBtn")["retryBtnClicked"] = false;
      }
    }
  }

  addListeners() {
    game.moveUp = (index: number) => {
      const randomNumbers = [];
      for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * (750 - 250 + 1)) + 500;
        randomNumbers.push(randomNumber);
      }
      const randomY = [...randomNumbers];
      this.startLocations[index].y = randomY[index];
    };
    const increaseSpeed = () => {
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

    //  When the retry button is pressed it will call to startGame()
    this.node.parent.parent
      .getChildByName("retry")
      .on(Node.EventType.MOUSE_DOWN, () => {
        this.startGame();
      });
  }

  gameOver() {
    this.showResult();
    director.pause();
    this.node.children.forEach((item) => {
      item.active = false;
      this.node.parent.parent.getChildByName("retry").active = true;
    });
  }

  startGame() {
    this.isGameOver = false;
    this.node.parent.getChildByName("lives").children.forEach((item) => {
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
    this.node.parent.parent
      .getChildByName("result")
      .getComponent(Label).string = "Result: ";
    this.node.parent.parent.getChildByName("result").active = false;
    this.node.parent.parent.getChildByName("retry").active = false;
    console.log("game started");
  }

  showResult() {
    console.log("show result");
    this.maxScore = Math.max(this.maxScore, this.currentScore);
    const result = this.node.parent.parent.getChildByName("result");
    result.getComponent(Label).string +=
      "\nScore: " + this.currentScore + "\nHigh Score: " + this.maxScore;
    result.active = true;
  }
}
