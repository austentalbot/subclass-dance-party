var ColorDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor =  ColorDancer;
ColorDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  //specific color dancer behavior
  this.$node.toggleClass('color');
};

