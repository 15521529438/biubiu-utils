describe('Time API:', function () {
    describe('#formatPassTime()', function () {
        it(`biubiuUtils.formatPassTime(new Date().getTime() - 30000) === '"刚刚"' should return true`, function () {
            let time = new Date().getTime() - 30000
            assert(biubiuUtils.formatPassTime(time) === "刚刚")
        });

        it(`biubiuUtils.formatPassTime(new Date().getTime() - 70000) === '"1分钟前"' should return true`, function () {
            let time = new Date().getTime() - 70000
            assert(biubiuUtils.formatPassTime(time) === "1分钟前")
        });

        it(`biubiuUtils.formatPassTime(new Date().getTime() - 70000 * 60) === '"1小时前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60
            assert(biubiuUtils.formatPassTime(time) === "1小时前")
        });

        it(`biubiuUtils.formatPassTime(new Date().getTime() - 70000 * 60 * 24) === '"1天前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60 * 24
            assert(biubiuUtils.formatPassTime(time) === "1天前")
        });

        it(`biubiuUtils.formatPassTime(new Date().getTime() - 70000 * 60 * 24 * 30) === '"1个月前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60 * 24 * 30
            assert(biubiuUtils.formatPassTime(time) === "1个月前")
        });

        it(`biubiuUtils.formatPassTime(new Date().getTime() - 70000 * 60 * 24 * 30 * 12) === '"1年前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60 * 24 * 30 * 12
            assert(biubiuUtils.formatPassTime(time) === "1年前")
        });
    });

    describe('#formatRemainTime()', function () {
        it(`biubiuUtils.formatRemainTime(new Date().getTime() + oneSecond + oneMinute + oneHour + oneDay) === '"1天1小时1分钟1秒"' should return true`, function () {
            let time = new Date().getTime(),
                oneSecond = 1000,
                oneMinute = oneSecond * 60,
                oneHour = oneMinute * 60,
                oneDay = oneHour * 24;
            time = time + oneSecond + oneMinute + oneHour + oneDay
            assert(biubiuUtils.formatRemainTime(time) === "1天 1小时 1分钟 1秒")
        });
    });

    describe('#isSameDay()', function () {
        it(`biubiuUtils.isSameDay(new Date()) should return true`, function () {
            assert(biubiuUtils.isSameDay(new Date()) === true)
        });
        it(`biubiuUtils.isSameDay(new Date(), new Date(new Date().getTime() - 86400000)) should return false`, function () {
            assert(biubiuUtils.isSameDay(new Date(), new Date(new Date().getTime() - 86400000)) === false)
        });
    });

    describe('#obtainDate()', function () {
        it(`biubiuUtils.obtainDate('Fri Mar 09 2018 14:42:17 GMT+0800 (中国标准时间)') should return '2018-3-9 14:42:17'`, function () {
            assert(biubiuUtils.obtainDate('Fri Mar 09 2018 14:42:17 GMT+0800 (中国标准时间)') === '2018-3-9 14:42:17')
        });
    });
})