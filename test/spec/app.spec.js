describe('gum blog', function() {
    "use strict";

    var ctrl;

    beforeEach(module('gum.app'));

    beforeEach(inject(function(_$controller_) {
        ctrl = _$controller_;
    }));

    it('MainCtrl should say hello', function() {
        var mainCtrl = ctrl('MainCtrl');
        expect(mainCtrl).not.toBeNull();
        expect(mainCtrl.hello).not.toBeNull();
    });
});