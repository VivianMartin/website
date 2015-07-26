describe('gum blog admin', function() {
    "use strict";

    var ctrl, $log;

    beforeEach(module('gum.blog.admin'));

    beforeEach(inject(function(_$controller_, _$log_) {
        ctrl = _$controller_;
        $log = _$log_;
    }));

    it('AdminCtrl should expose blogMsg', function() {
        var adminCtrl = ctrl('AdminCtrl', {
            '$stateParams': {},
            '$log': $log
        });
        expect(adminCtrl.blogMsg).toBeDefined();
    });
});