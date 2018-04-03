import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import uiBootstrap from 'angular-bootstrap-npm';
import {
  HomeController,
  AboutController,
  ResumeController,
  ActivitiesController,
  BlogController,
  TodoController,
  PageazController,
} from './controllers/controllers';

angular.module('myApp', [uirouter, ngResource, uiBootstrap]).config(routing);

routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function routing($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "/ngApp/views/home.html",
      controller: HomeController,
      controllerAs: "controller"
    })
    .state("about", {
      url: "/about",
      templateUrl: "/ngApp/views/about.html",
      controller: AboutController,
      controllerAs: "controller"
    })
    .state("resume", {
      url: "/resume",
      templateUrl: "/ngApp/views/resume.html",
      controller: ResumeController,
      controllerAs: "controller"
    })
    .state("activities", {
      url: "/activities",
      templateUrl: "/ngApp/views/activities.html",
      controller: ActivitiesController,
      controllerAs: "controller"
    })
    .state("blog", {
      url: "/blog",
      templateUrl: "/ngApp/views/blog.html",
      controller: BlogController,
      controllerAs: "controller"
    })
    .state("pageaz", {
      url: "/pageaz",
      templateUrl: "/ngApp/views/blog_posts/pageaz-032018.html",
      controller: PageazController,
      controllerAs: "controller"
    })
    .state("todo", {
      url: "/todo",
      templateUrl: "/ngApp/views/todo.html",
      controller: TodoController,
      controllerAs: "controller"
    })
    .state("notFound", {
      url: "/notFound",
      templateUrl: "/ngApp/views/notFound.html"
    });
  $urlRouterProvider.otherwise('/notFound');
  $locationProvider.html5Mode(true);
}