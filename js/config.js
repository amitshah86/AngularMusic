let config = function ($stateProvider) {

  $stateProvider
    .state('root',  {
      abstract: true, 
      templateUrl: './template/layout.tpl.html' 
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController', 
      templateUrl: './template/home.tpl.html'
    });


};

config.$inject = ['$stateProvider'];

export default config;