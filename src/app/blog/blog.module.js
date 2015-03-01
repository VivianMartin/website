(function() {
    "use strict";

    angular.module('gum.blog', ['ui.router', 'gum.blog.admin']).
        config(BlogConfig);

    BlogConfig.$inject = ['$stateProvider'];

    function BlogConfig($stateProvider) {
        $stateProvider.state('blog', {
            abstract: true,
            url: '/blog',
            template: '<ui-view/>'
        });

        $stateProvider.state('blog.month', {
            url: '/:y/:m',
            templateUrl: 'app/blog/blog.html',
            controller: 'BlogCtrl as vm',
            resolve: {
                latestEntry: function() {
                    return 'All blogs in month';
                }
            }
        });

        $stateProvider.state('blog.default', {
            url: '/:y/:m/:d',
            templateUrl: 'app/blog/blog.html',
            controller: 'BlogCtrl as vm',
            resolve: {
                latestEntry: function() {
                    return 'LATEST PLACEHOLDER';
                }
            }
        });
    }
})();
