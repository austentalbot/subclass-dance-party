// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.left = left;
  this.top = top;
  this.step();
  this.setPosition(top, left);
};

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
