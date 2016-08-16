var movieApp = angular.module('movieApp.controllers', [])

movieApp.controller('MainController', ['$scope', function($scope) {

}])

movieApp.controller('SearchController', ['$scope', '$location', '$http','$routeParams', function($scope, $location, $http , $routeParams){
  var movieSearchParam = $location.search();
  var searchQuery = first(movieSearchParam);

  $scope.searchMovieDB = function(viewObj){
    $http.get('http://www.omdbapi.com/?s='+ viewObj).then(function(data){
        console.log(data.data.Search);
        $scope.movieData = data.data.Search;
      });
  }

  if(searchQuery != null || searchQuery != undefined){
    $scope.searchMovieDB(searchQuery);
  }

    function first(obj) {
        for (var a in obj) return a;
    }
}])

movieApp.controller('GetMovieController', function($scope, $location, $http , $routeParams){
  var movieSearchParam = $location.search();
  var searchQuery = first(movieSearchParam);

  $http.get('http://www.omdbapi.com/?i=' + searchQuery).then(function(data){
    $scope.specificMovie = data.data;
    console.log($scope.specificMovie);
  })


  function first(obj) {
      for (var a in obj) return a;
  }
})
 // ['$scope', '$location', '$http','$routeParams',/ TODO: ASk ABOUT THIS!!!
