describe('Regexp API:', function () {

    describe('#codeDegree()', function () {
        it('biubiuUtils.codeDegree("55122", 5, 6) should return false ', function () {
            assert.notEqual(biubiuUtils.codeDegree("55122", 5, 6))
        });
        it('biubiuUtils.codeDegree("aS22511515", 8, 10) should return true ', function () {
            assert(biubiuUtils.codeDegree("aS22511515", 8, 10))
        });
    });

    describe('#isDataStyle()', function () {
        it('biubiuUtils.isDataStyle("2017 01 24") should return false ', function () {
            assert.notEqual(biubiuUtils.isDateStyle("2017 01 24"))
        });
        it('biubiuUtils.isDataStyle("2017-01-24") should return true ', function () {
            assert(biubiuUtils.isDateStyle("2017-01-24"))
        });
    });

    describe('#isEmail()', function () {
        it('biubiuUtils.isEmail("leiquanlive.com") should return false ', function () {
            assert.notEqual(biubiuUtils.isEmail("leiquanlive.com"))
        });
        it('biubiuUtils.isEmail("leiquan@live.com") should return true ', function () {
            assert(biubiuUtils.isEmail("leiquan@live.com"))
        });
    });

    describe('#isIdCard()', function () {
        it('biubiuUtils.isIdCard("622224188203234033") should return true ', function () {
            assert(biubiuUtils.isIdCard("622224188203234033"))
        });
        it('biubiuUtils.isIdCard("zas224188203234033") should return false', function () {
            assert(!biubiuUtils.isIdCard("leiquan@live.com"))
        });
    });

    describe('#isPhoneNum()', function () {
        it('biubiuUtils.isPhoneNum("18882324234") should return true ', function () {
            assert(biubiuUtils.isPhoneNum("18882324234"))
        });
        it('biubiuUtils.isPhoneNum("8618882324234") should return true ', function () {
            assert(biubiuUtils.isPhoneNum("8618882324234"))
        });
        it('biubiuUtils.isPhoneNum("5534553") should return false', function () {
            assert(!biubiuUtils.isPhoneNum("5534553"))
        });
    });

    describe('#isUrl()', function () {
        it('biubiuUtils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(biubiuUtils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('biubiuUtils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(biubiuUtils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('biubiuUtils.isUrl("www.baidu.com") should return true', function () {
            assert(biubiuUtils.isUrl("www.baidu.com"))
        });
        it('biubiuUtils.isUrl("baidu.com") should return true', function () {
            assert(biubiuUtils.isUrl("baidu.com"))
        });
        it('biubiuUtils.isUrl("http://baiducom") should return false', function () {
            assert(!biubiuUtils.isUrl("http://baiducom"))
        });
    });

});