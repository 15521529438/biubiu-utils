describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`biubiuUtils.getKeyName(13) should return "Enter"`, function () {
            assert(biubiuUtils.getKeyName(13) === 'Enter')
        });
    });

});