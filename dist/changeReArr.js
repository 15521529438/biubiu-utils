/**
 * Created by Administrator on 2018/3/9.
 */
/**
 *
 * @desc 数组去重
 * @param {Array} arr
 * @return []
 */
function changeReArr(arr) {
    return [...new Set(arr)]//利用...扩展运算符将set中的值遍历出来重新定义一个数组,...是利用for...of遍历的
}
module.exports = changeReArr;