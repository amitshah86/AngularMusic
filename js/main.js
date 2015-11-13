import angular from 'angular';
import 'angular-ui-router';
import config from './config';
import HomeController from './controllers/home.controller';
import AboutController from './controllers/about.controller';
import TopTracksController from './controllers/topTracks.controller';


angular
.module('app', ['ui.router'])
.constant('SC', 'be08eeed7f9d59c21c09f68da2ce0731',)
.constant('PARSE', {
  URL:'https://api.parse.com/1/',
  CONFIG:{
      headers: {
        'X-Parse-Application-Id': 'ihCU6fcc1iwrMVUuyEgoXdvoDpcSbwfkQJ8FmKIZ',
        'X-Parse-REST-API-Key': 'beBt6M0DOl6EQoVQwJnckJE68MMktpQJBEyqIhZ5'
    }
  }
})
.config(config)
.controller('HomeController', HomeController)
.controller('AboutController', AboutController)
.controller('TopTracksController', TopTracksController);