
(function() {
    "use strict";

    angular.module('gum.app', [])
        .controller('MainCtrl', MainCtrl);

    function MainCtrl() {
        this.hello = 'angularjs hello world!';
    }
})();

