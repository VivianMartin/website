describe('gum blog', function() {
    "use strict";

    var ctrl;

    beforeEach(module('gum.blog'));

    beforeEach(inject(function(_$controller_) {
        ctrl = _$controller_;
    }));

    it('BlogCtrl should expose latestEntry', function() {
        var blogCtrl = ctrl('BlogCtrl', {
            '$stateParams': {},
            'latestEntry': {}
        });
        expect(blogCtrl.latestEntry).toBeDefined();
    });
});