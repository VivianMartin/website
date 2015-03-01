(function() {
    "use strict";

    angular.module('gum.blog').
        controller('BlogCtrl', BlogCtrl);

    BlogCtrl.$inject = ['$stateParams', 'latestEntry'];

    function BlogCtrl($stateParams, latestEntry) {
        var vm = this;

        vm.latestEntry = latestEntry;
        vm.params = $stateParams;
    }
})
();