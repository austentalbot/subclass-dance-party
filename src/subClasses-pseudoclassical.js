var BlinkyGhost = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('blue');
};

BlinkyGhost.prototype = Object.create(Dancer.prototype);
BlinkyGhost.prototype.constructor =  BlinkyGhost;
BlinkyGhost.prototype.step = function(){
  Dancer.prototype.step.call(this);
  //toggle back and forth between two colors
  this.$node.toggleClass('white');
};

var EatingPacman = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.removeClass('dancer');
  //need to set parent tag position relatively to keep from ending up in top-left corner
  this.$node.addClass('pos-rel');
  //create two divs which move simultaneously and independently
  //each div functions as separate lip
  this.$node.html('<div class="pacman p0"></div><div class="pacman p1"></div>');
};

EatingPacman.prototype = Object.create(Dancer.prototype);
EatingPacman.prototype.constructor =  EatingPacman;
EatingPacman.prototype.step = function(){
  Dancer.prototype.step.call(this);
};

var HoverGhost = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('hoverghost');
  this.$node.removeClass('dancer');
  //need to set parent tag position relatively to keep from ending up in top-left corner
  this.$node.addClass('pos-rel');
  //add two image tags which are stacked on each other; top image fades upon hover
  this.$node.html('<img class="hoverimage0" src="img/fade_ghost1.png"></img><img class="hoverimage1" src="img/fade_ghost2.png"></img>');
};

HoverGhost.prototype = Object.create(Dancer.prototype);
HoverGhost.prototype.constructor =  HoverGhost;
HoverGhost.prototype.step = function(){
  Dancer.prototype.step.call(this);
};


var MovingFruit = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('fruit');
  var fruits = ['pear', 'apple', 'strawberry', 'cherry'];
  var fruit = fruits[Math.floor(Math.random()*fruits.length)];
  this.$node.addClass(fruit);
};

MovingFruit.prototype = Object.create(Dancer.prototype);
MovingFruit.prototype.constructor =  MovingFruit;
MovingFruit.prototype.step = function(){
  Dancer.prototype.step.call(this);
};


var MovingGhost = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.coordinates;
  this.$node.addClass('movingghost');
};

MovingGhost.prototype = Object.create(Dancer.prototype);
MovingGhost.prototype.constructor =  MovingGhost;
MovingGhost.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.findNeighbor();

};

//find closest neighbor and move to that position
MovingGhost.prototype.findNeighbor=function() {
  var min;
  var dancer;
  var distance;
  for (var i = 0; i < window.dancers.length;i++){
    dancer = window.dancers[i];
    distance = Math.sqrt(Math.pow(dancer.left - this.left, 2) + Math.pow(dancer.top - this.top, 2));
    if (distance < min || min === undefined){
      this.coordinates = [dancer.left, dancer.top];
      min = distance;
    }
  }
};
