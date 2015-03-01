describe('gum blog admin', function() {
    "use strict";

    var ctrl;

    beforeEach(module('gum.blog.admin'));

    beforeEach(inject(function(_$controller_) {
        ctrl = _$controller_;
    }));

    it('AdminCtrl should expose blogMsg', function() {
        var adminCtrl = ctrl('AdminCtrl', {
            '$stateParams': {},
            '$log': {}
        });
        expect(adminCtrl.blogMsg).toBeDefined();
    });
});