/**
 *
 * @desc 生成数字验证码
 * @param {num} 正数字
 * @return {string}
 */
function verify(num) {
    let verifyNum = Math.random().toFixed(num).slice(-num);
    return verifyNum;
}

module.exports = verify;