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
});