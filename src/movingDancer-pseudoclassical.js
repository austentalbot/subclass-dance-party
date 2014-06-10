var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.coordinates
  this.$node.addClass('movingcolor');
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
