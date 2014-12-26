
(function() {
    "use strict";

    angular.module('gum.app', ['gum.nav'])
        .controller('MainCtrl', MainCtrl);

    function MainCtrl() {
        this.hello = 'angularjs hello world!';
    }
})();

