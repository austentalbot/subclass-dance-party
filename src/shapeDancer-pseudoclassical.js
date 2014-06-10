var ShapeDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

ShapeDancer.prototype = Object.create(Dancer.prototype);
ShapeDancer.prototype.constructor =  ShapeDancer;
ShapeDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('shape');
};


