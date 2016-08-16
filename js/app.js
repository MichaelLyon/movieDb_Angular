angular.module('movieApp', ['movieApp.controllers', 'movieApp.filters','movieApp.services', 'ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
    $routeProvider
      .otherwise({
        redirectTo: '/',
        controller: 'MainController'
      })
      .when('/search?', {
        templateUrl: 'views/search.html',
        controller: 'SearchController',
      })
      .when('/search/movie?:movieId',{
        templateUrl:'../views/movie.html',
        controller: 'GetMovieController'
      })
});
