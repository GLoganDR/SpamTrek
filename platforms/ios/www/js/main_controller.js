(function(){
  'use strict';

  angular.module('SpamTrek')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
  //  var game  = null,
      var timer = null;

    resetClock();

    document.addEventListener('deviceready', function(){
    //  game = new Game();
    });

    window.addEventListener('gameover', function(){
      cancelTimer();
    });

    function startClock(){
      resetClock();
      cancelTimer();
      timer = $interval(function(){
        $scope.clock++;
      }, 1000);
    }

    function resetClock(){
      $scope.clock = 0;
    }

    function cancelTimer(){
      $interval.cancel(timer);
    }

    $scope.stop = function(){
      cancelTimer();
      resetClock();
    };

    $scope.start = function(){
    //  game.start();
      startClock();
    };
  }]);
})();
