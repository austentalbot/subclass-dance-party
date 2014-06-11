var HoverDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('hoverdancer');
};

HoverDancer.prototype = Object.create(Dancer.prototype);
HoverDancer.prototype.constructor =  HoverDancer;
HoverDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  //specific color dancer behavior
};

