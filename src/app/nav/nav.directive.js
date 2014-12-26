
(function() {
    "use strict";

    angular.module('gum.nav').directive('gumNav', NavDirective);

    function NavDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/nav/nav.html'
        }
    }
})();

