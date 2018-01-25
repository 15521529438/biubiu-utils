describe('Class API:', function () {
    describe('#addClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`biubiuUtils.addClass($ele, 'test') should return true`, function () {
            biubiuUtils.addClass($ele, 'test')
            assert(biubiuUtils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#hasClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_hasClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_hasClass')
            biubiuUtils.addClass($ele, 'test')
        })
        it(`biubiuUtils.hasClass($ele, 'test') should return true`, function () {
            assert(biubiuUtils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#removeClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_removeClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_removeClass')
            biubiuUtils.addClass($ele, 'test')
        })
        it(`biubiuUtils.removeClass($ele, 'test') should return false`, function () {
            biubiuUtils.removeClass($ele, 'test')
            assert.notEqual(biubiuUtils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });
});