describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`biubiuUtils.getExplore() should return "Chrome"`, function () {
            console.log(`Explore:${biubiuUtils.getExplore()}`)
            assert(/^Chrome:/.test(biubiuUtils.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`biubiuUtils.getOS() should return "windows"`, function () {
            console.log(`OS:${biubiuUtils.getOS()}`)
            assert(biubiuUtils.getOS() === 'windows' || biubiuUtils.getOS() === 'MacOSX' || biubiuUtils.getOS() === 'linux')
        });
    });
});