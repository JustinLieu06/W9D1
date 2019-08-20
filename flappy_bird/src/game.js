import Level from "./level.js";
import Bird from "./bird.js";

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
  }
   animate(){
     while(this.running === true){
       

     }
     
   }

   restart(){
     this.running = false;
     this.animate();
  }

  play(){
    this.running = true;
    this.animate();
  }
}