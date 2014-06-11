$(document).ready(function(){
  window.dancers = [];
  window.movingGhosts=[];

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    //different condition for MovingGhost
    if (dancerMakerFunctionName==='MovingGhost') {
      //set random location and set refresh interval of 3 seconds
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        3000
      );
      window.movingGhosts.push(dancer);
    } else {
      //set random location and refresh interval
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
      window.dancers.push(dancer);
    }

    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function() {
    for (var i=0; i<window.dancers.length; i++) {
      var dancer = window.dancers[i];
      dancer.setPosition(30, dancer.left);
    }
    for (var i=0; i<window.movingGhosts.length; i++) {
      var movingGhost = window.movingGhosts[i];
      movingGhost.setPosition(30, movingGhost.left);
      movingGhost.findNeighbor();
    }
  });

  // every 3 seconds, we check and readjust the moving ghost coordinates to closest non-moving-ghost object
  setInterval(function(){
    for (var i = 0; i < window.movingGhosts.length; i++){
      var movingGhost = window.movingGhosts[i];
      var left = movingGhost.coordinates[0];
      var top = movingGhost.coordinates[1];
      movingGhost.setPosition(top+1, left+1);
    }
  }, 3000);
});

