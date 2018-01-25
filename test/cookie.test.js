describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            biubiuUtils.setCookie('test', 'getTestValue')
        })
        it(`biubiuUtils.getCookie('test', 'getTestValue') should return true`, function () {
            assert(biubiuUtils.getCookie('test') === 'getTestValue')
        })
        after(function () {
            biubiuUtils.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            biubiuUtils.setCookie('test', 'removeTestValue')
        })
        it(`biubiuUtils.removeCookie('test') should return false`, function () {
            biubiuUtils.removeCookie('test')
            assert.notEqual(biubiuUtils.getCookie('test') === 'removeTestValue')
        })
    })

    describe('#setCookie()', function () {
        it(`biubiuUtils.getCookie('test', 'setCookie') should return true`, function () {
            biubiuUtils.setCookie('test', 'setCookie')
            assert(biubiuUtils.getCookie('test') === 'setCookie')
        })
        after(function () {
            biubiuUtils.removeCookie('test')
        })
    })
})