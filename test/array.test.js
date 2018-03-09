describe('Array API:', function () {

    describe('#arrayEqual()', function () {
        it(`biubiuUtils.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(biubiuUtils.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('biubiuUtils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(biubiuUtils.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`biubiuUtils.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(biubiuUtils.arrayEqual(arr, arr))
        });
    });

    describe('#isArray()', function () {
        it(`biubiuUtils.isArray(5) should return false`, function () {
            assert.notEqual(biubiuUtils.isArray(5))
        });
        it('biubiuUtils.isArray([1, 2, 3]) should return true', function () {
            assert(biubiuUtils.isArray([1, 2, 3]))
        });
    });

    describe('#changeReArr()', function () {
        it('biubiuUtils.changeReArr([1, 2, 3, 3, 2, 1]) should return [1, 2, 3]', function () {
            assert(biubiuUtils.changeReArr([1, 2, 3, 3, 2, 1]))
        });
    });
});