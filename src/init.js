$(document).ready(function(){
  window.dancers = [];
  window.movingDancers=[];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    //different condition for MovingDancer
    if (dancerMakerFunctionName==='MovingDancer') {
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        3000
      );
      window.movingDancers.push(dancer);
    } else {
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
      //add new dancer to dancer array
      window.dancers.push(dancer);
    }

    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function() {
    for (var i=0; i<window.dancers.length; i++) {
      // window.dancers[i].css({'left': '0'});
      var dancer = window.dancers[i];
      dancer.setPosition(30, dancer.left);
    }
    for (var i=0; i<window.movingDancers.length; i++) {
      // window.dancers[i].css({'left': '0'});
      var movingDancer = window.movingDancers[i];
      movingDancer.setPosition(30, movingDancer.left);
      movingDancer.findNeighbor();
    }
  });


  // every x seconds, we readjust their coordinates
  setInterval(function(){
    for (var i = 0; i < window.movingDancers.length; i++){
      var movingDancer = window.movingDancers[i];
      var left = movingDancer.coordinates[0];
      var top = movingDancer.coordinates[1];
      movingDancer.setPosition(top+1, left+1);
    }
  }, 3000);
});

