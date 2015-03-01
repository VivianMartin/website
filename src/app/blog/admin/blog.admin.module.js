(function() {
    "use strict";

    angular.module('gum.blog.admin', ['ui.router', 'textAngular']).
        config(BlogAdminConfig);

    BlogAdminConfig.$inject = ['$stateProvider', '$provide'];

    function BlogAdminConfig($stateProvider, $provide) {
        $stateProvider.state('blog.admin', {
            url: '/admin',
            templateUrl: 'app/blog/admin/admin.html',
            controller: 'AdminCtrl as vm',
            resolve: {

            }
        });

        // text editor config
        $provide.decorator('taOptions', ['$delegate', function(taOptions) {
            taOptions.toolbar = [
                ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'pre', 'quote','insertLink'],
                ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear']
            ];

            return taOptions;
        }]);
    }
})();
