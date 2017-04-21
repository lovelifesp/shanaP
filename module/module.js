var app = angular.module("shanaMod",["ngRoute"]);

app.config(function($routeProvider,$locationProvider){
  $routeProvider
  .when("/",{
    controller:"portController",
    templateUrl:"views/home.html"
  })
  .when("/about",{
    controller:"portController",
    templateUrl:"views/about.html"
})
.when("/projects",{
  controller:"portController",
  templateUrl:"views/projects.html"
})
  .when("/contact",{
    controller:"portController",
    templateUrl:"views/contact.html"
})
  .otherwise({redirectTo:"/"});
  $locationProvider.hashPrefix("");
});
