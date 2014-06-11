var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blue');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor =  BlinkyDancer;
BlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('white');
};

var ColorDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  //this.$node = $('<span><div class="pacman p0"></div><div class="pacman p1"></div></span>');
  this.$node.removeClass('dancer');
  this.$node.addClass('pos-rel');
  this.$node.html('<div class="pacman p0"></div><div class="pacman p1"></div>');
  //this.$node.setPosition(top, left);
};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor =  ColorDancer;
ColorDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  //specific color dancer behavior
};

var HoverDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('hoverdancer');
  this.$node.removeClass('dancer');
  this.$node.addClass('pos-rel');
  this.$node.html('<img class="hoverimage0" src="img/fade_ghost1.png"></img><img class="hoverimage1" src="img/fade_ghost2.png"></img>');
};

HoverDancer.prototype = Object.create(Dancer.prototype);
HoverDancer.prototype.constructor =  HoverDancer;
HoverDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  //specific color dancer behavior
};


var ShapeDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('shape');
  var fruits = ['pear', 'apple', 'strawberry', 'cherry'];
  var fruit = fruits[Math.floor(Math.random()*fruits.length)];
  this.$node.addClass(fruit);
};

ShapeDancer.prototype = Object.create(Dancer.prototype);
ShapeDancer.prototype.constructor =  ShapeDancer;
ShapeDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};


var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.coordinates;
  this.$node.addClass('movingdancer');
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor =  MovingDancer;
MovingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.findNeighbor();

};

MovingDancer.prototype.findNeighbor=function() {
  //loop through all dancers
  // ignore own coordinates
  // calculate distance from self using pythagorean a^2+b^2=c^2
  // move incrementally to .01 away from closest
  var min;
  for (var i = 0; i < window.dancers.length;i++){
    var dancer = window.dancers[i];
    // console.log(dancer.left, this.left, dancer.top, this.top);
    var distance = Math.sqrt(Math.pow(dancer.left - this.left, 2) + Math.pow(dancer.top - this.top, 2));
    if ( distance < min || min === undefined){
      this.coordinates = [dancer.left, dancer.top];
      min = distance;
    }
  }
};
