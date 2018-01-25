/**
 *
 * @desc   判断密码强度
 * @param  {String, min, max}    {str, 开始长度， 结束长度}
 * @return {Boolean}
 *
 * 密码的强度必须是包含大小写字母和数字的组合，不能使用特殊字符，长度在min-max之间。
 */
function codeDegree(str, min, max) {
    return  new RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{" + min + "," + max + "}$").test(str);
}

module.exports = codeDegree;