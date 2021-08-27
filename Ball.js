class Ball{
  
  constructor(x, y, r){
    this.pos = createVector(x, y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.r = r;
    
  }
  
  force(force){
    this.acc.add(force);
  }
  
  move(){
    this.vel.add(this.acc);
    this.vel.limit(30);
    
    if(this.pos.y > height){
      this.vel.y -= 1;
      this.vel.y *= -1;
    }
    
    this.pos.add(this.vel);
    print(this.vel.y);
  }
  
  show(){
    strokeWeight(20);
    noFill();
    ellipse(this.pos.x, this.pos.y, this.r);
  }
}