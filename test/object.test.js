describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual biubiuUtils.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, biubiuUtils.deepClone(person))
        });

        it(`person === biubiuUtils.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, biubiuUtils.deepClone(person))
        });
    });

    describe('#isEmptyObject()', function () {
        it(`biubiuUtils.isEmptyObject({}) should return true`, function () {
            assert(biubiuUtils.deepClone({}))
        });

        it(`biubiuUtils.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(biubiuUtils.isEmptyObject({
                one: 1
            }))
        });

        it(`biubiuUtils.isEmptyObject([]) should return false`, function () {
            assert.notEqual(biubiuUtils.isEmptyObject([]))
        });
    });
})