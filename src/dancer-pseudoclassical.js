// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.left = left;
  this.top = top;
  //begin step function which calls itself
  this.step();
  this.setPosition(top, left);
};

//step function recalls itself after interval so as to repeat action
Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.left = left;
  this.top = top;
  this.$node.css(styleSettings);
};
