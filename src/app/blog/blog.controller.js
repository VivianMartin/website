(function() {
    "use strict";

    angular.module('gum.blog').
        controller('BlogCtrl', BlogCtrl);

    BlogCtrl.$inject = ['$log', '$stateParams', 'latestEntry'];

    function BlogCtrl($log, $stateParams, latestEntry) {
        $log.log($stateParams);
        this.latestEntry = latestEntry;

        this.params = $stateParams;
    }
})
();