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

  //everytime the game updates, move the game items 
  update(deltaTime: number) {
    
    if (!this.isGameOver) {

      if (!this.isEventAdded && this.node.children.length > 4) {
        this.addListeners();
        this.isEventAdded = true;
      }

    // Creating an array for the items width
      const itemsWidthArr = [0, 0, 0, 0, 0];

      // Creating an array of random values ​​for the location of the items
      const randomNumbers = [];
      for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * (750 - 500 + 1)) + 500;
        randomNumbers.push(randomNumber);
      }

      const randomY = [...randomNumbers];

      this.node.children.forEach((item, index) => {
        itemsWidthArr[index] = item.getComponent(UITransform).width;
        this.startLocations.push(this.node.children[index].position);

         //update location 
        this.startLocations[index].y -= this.gameSpeed * deltaTime;


        // if item went out of bounds return it to the top
        if (this.startLocations[index].y <= 0 - itemsWidthArr[index]) {
          this.startLocations[index].y = randomY[index];
          // If it's not the bomb Take life off
          if (index != 4) this.lifeCounter--;
        }

        // set the items in current location 
        item.setPosition(this.startLocations[index]);
      });


      // set the life hearts in thier location
      this.node.parent
        .getChildByName("lives")
        .children.forEach((item, index) => {

          // if lives are lost, hide hearts
          if (index > this.lifeCounter) {
            item.active = false;
          }

          // if there is no more life left call gameover()
          if (this.lifeCounter < 0 && !this.isGameOver) {
            this.isGameOver = true;
            this.gameOver();
          }
        });

        // if retry Butoon Clicked call startGame() and hide the retry Butoon
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

/* If the item were pressed call moveUp() increaseSpeed() The score will go up,
But if it's the bomb the lifeCounter will go down
*/
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

  // when the game over, show result and pause the game 
  gameOver() {
    this.showResult();
    director.pause();
    this.node.children.forEach((item) => {
      // revealed the retry button and hide the game item
      item.active = false;
      this.node.parent.parent.getChildByName("retry").active = true;
    });
  }


  //what to do when the game is starting.
  startGame() {
    this.isGameOver = false;

    //  revealed  the game item
    this.node.parent.getChildByName("lives").children.forEach((item) => {
      item.active = true;
    });
    this.lifeCounter = 3;
    this.gameSpeed = this.speed;
    this.currentScore = 0;

    //run  the game 
    director.resume();

    // set teh game item in their location
    this.node.children.forEach((item, index) => {
      item.active = true;
      game.moveUp(index);
    });

  
    this.node.parent.parent
      .getChildByName("result")
      .getComponent(Label).string = "Result: ";

      // hide the retry button and result 
    this.node.parent.parent.getChildByName("result").active = false;
    this.node.parent.parent.getChildByName("retry").active = false;
  }


 //show the score results when the game ends.
  showResult() {
    console.log("show result");
    this.maxScore = Math.max(this.maxScore, this.currentScore);
    const result = this.node.parent.parent.getChildByName("result");
    result.getComponent(Label).string +=
      "\nScore: " + this.currentScore + "\nHigh Score: " + this.maxScore;
    result.active = true;
  }
}
