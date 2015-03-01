
(function() {
    "use strict";

    angular.module('gum.app', ['gum.nav', 'gum.blog', 'ui.router'])
        .config(ConfigFn)
        .run(RunFn)
        .controller('MainCtrl', MainCtrl);

    ConfigFn.$inject = ['$stateProvider', '$urlRouterProvider'];

    function ConfigFn($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'app/home.html',
            controller: 'MainCtrl as main'
        });

        $stateProvider.state('about', {
            url: '/about',
            templateUrl: 'app/about/about.html'
        });
    }

    RunFn.$inject = ['$rootScope', '$log'];

    function RunFn($rootScope, $log) {
        $rootScope.$on('$stateChangeError', function(event, toState, toParams) {
            $log.warn('Error changing state to: ' + toState + ' ' + event);
        });

        $rootScope.$on('$stateNotFound', function(event, toState) {
            $log.warn('State not found: ' + toState);
        })
    }

    function MainCtrl() {
        this.hello = 'angularjs hello world!';
    }
})();

