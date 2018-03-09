/**
 * Created by Administrator on 2018/3/9.
 */
/**
 * @desc   日期格式化
 * @param  {time} 可选／默认值：当前时间
 * @return string
 * 注： ie不识别时间2017-01-01 只识别2017/01/01需注意
 */
function obtainDate (time) {
    let date;
    time ? date = new Date(time) : date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minu = date.getMinutes();
    let second = date.getSeconds();

    //判断是否满10
    let arr = [month, day, hours, minu, second];
    arr.forEach(item => {
        item < 10 ? "0" + item : item;
    })
    let endDate = year + '-' + arr[0] + '-' + arr[1] + ' ' + arr[2] + ':' + arr[3] + ':' + arr[4];
    return endDate;
}

module.exports = obtainDate