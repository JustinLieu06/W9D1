export default class Bird {
  constructor(dimensions){
    this.velocity = 0;
    this.dimensions = dimensions;
    this.x = 160;
    this.y = 320;
    this.gravity = 0.5;
  }
  drawBird(ctx) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, 40, 30);
  }

  animate(ctx) {
    this.move();
    this.drawBird(ctx);
  }

  move(){
    this.y += this.velocity;
    this.velocity += this.gravity;
  }
  
  flap() {
    this.velocity = -8;
  }
}