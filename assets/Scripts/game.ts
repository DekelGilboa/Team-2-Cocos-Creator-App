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

   this.addListeners()
  }

  update(deltaTime: number) {
    
    if (!this.isGameOver) {
      // console.log("game is running");
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


      // set the life hearts in their location
      this.node.parent
        .getChildByName("lives")
        .children.forEach((item, index) => {

          // if lives are lost, hide hearts
          if (index > this.lifeCounter) {
            item.active = false;
          }

          // if there is no more life left call gameOver()
          if (this.lifeCounter < 0 && !this.isGameOver) {
            this.isGameOver = true;
            this.gameOver();
          }
        });
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
      //  When the back button is pressed it will call to backToHome()
      this.node.parent.parent
      .getChildByName("back-btn")
      .on(Node.EventType.MOUSE_DOWN, () => {
        console.log("back  clicked");
        this.backToHome();
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
      this.node.parent.parent.getChildByName("back-btn").active = true;
    });
  }


  //what to do when the game is starting.
  startGame() {
    this.resetVars()
    this.node.parent.parent.getChildByName("result").active = false;
    this.node.parent.parent.getChildByName("retry").active = false;
    this.node.parent.parent.getChildByName("back-btn").active = false;
  }


  // back to main menu && calls to resetVars()
  backToHome() {
    this.node.parent.parent.children.forEach((item) => {
      if (item.name == "start_screen" || item.name == "conversion-btn") {
        item.active = true; 
      } else {
        item.active = false;
      }
    });
    this.resetVars()
  }


  // reset game variables
  resetVars(){
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
    this.node.parent.parent.getChildByName("result").active = false;
    this.node.parent.parent.getChildByName("retry").active = false;
    console.log("game started");
  }

  // showing the result when game over
  showResult() {
    console.log("show result");
    const result = this.node.parent.parent.getChildByName("result");
    result.getComponent(Label).string +=
      "\nScore: " + this.currentScore 
    result.active = true;
  }
}
