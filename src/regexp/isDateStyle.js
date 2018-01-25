/**
 *
 * @desc   判断是否基本日期格式
 * @param  {String}    str
 * @return {Boolean}
 *
 * Demo:
 * isDatePoint(2018.01.24, false)   true
 * isDatePoint(2018-01-24, false)   true
 * isDatePoint(2018年01月24日, false)   true
 */
function isDateStyle(str) {
    return /^(^(\d{4}|\d{2})(\-|\/|\.)\d{1,2}\3\d{1,2}$)|(^\d{4}年\d{1,2}月\d{1,2}日$)$/.test(str);
}

module.exports = isDateStyle;