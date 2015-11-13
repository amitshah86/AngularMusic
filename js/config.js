let config = function ($stateProvider) {

  $stateProvider
    .state('root',  {
      abstract: true, 
      templateUrl: './template/layout.tpl.html' 
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController', 
      templateUrl: '/template/home.tpl.html'
    })
    .state('root.about', {
      url: '/about',
      controller: 'AboutController',
      templateUrl: '/template/about.tpl.html'
    })
    .state('root.topTracks', {
      url: '/topTracks',
      controller: 'TopTracksController',
      templateUrl: '/template/topTracks.tpl.html'
    });


};

config.$inject = ['$stateProvider'];

export default config;