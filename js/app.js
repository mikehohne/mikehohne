angular.module("myBlog", ["ui.router"]).config(function($stateProvider, $urlRouterProvider){

  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "/templates/home.html"
  }).state("about", {
    url: "/about",
    templateUrl: "./templates/about.html"
  }).state("contact", {
    url: "/contact",
    templateUrl: "./templates/contact.html"
  }).state("lived", {
    url: "/lived",
    template: "<h1>{{lived}}</h1>"
  })
})
