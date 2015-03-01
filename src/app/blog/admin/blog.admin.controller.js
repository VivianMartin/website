(function() {
    "use strict";

    angular.module('gum.blog.admin').
        controller('AdminCtrl', AdminCtrl);

    AdminCtrl.$inject = ['$log', '$stateParams'];

    function AdminCtrl($log, $stateParams) {
        var vm = this;

        vm.params = $stateParams;
        vm.submit = submit;
        vm.blogMsg = {
            date: new Date(),
            heading: "",
            content: ""
        };

        function submit() {
            $log.log(vm.blogMsg.heading);
            $log.log(vm.blogMsg.content);
            $log.log(vm.blogMsg.date);
        }
    }
})
();