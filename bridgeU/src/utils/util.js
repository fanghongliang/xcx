import md5 from './md5'

export function formatTime (beforetime) {
    const nowtimestamp = Date.parse(new Date())  // 当前时间戳
    const beforetimestamp = (new Date(beforetime)).getTime()
    let difValue = nowtimestamp - beforetimestamp
    const day = Math.floor(difValue / 1000 / 60 / 60 / 24) // 天
    difValue = difValue % (1000 * 60 * 60 * 24)
    const hour = Math.floor(difValue / 1000 / 60 / 60) // 小时
    difValue = difValue % (1000 * 60 * 60)
    const min = Math.floor(difValue / 1000 / 60) // 分钟
    difValue = difValue % (1000 * 60)
    const second = difValue / 1000
    if (day > 0) {
        return day + '天前'
    } else if (hour > 0) {
        return hour + '小时前'
    } else if (min > 0) {
        return min + '分钟前'
    } else {
        return second + '秒前'
    }
}

/**
 * 签名
 */
export function signPay (data) {
    let {
        appid,
        nonce_str,
        prepay_id,
        timeStamp
    } = data;
    let result = `appId=${appid}&nonceStr=${nonce_str}&package=prepay_id=${prepay_id}&signType=MD5&timeStamp=${timeStamp}&key=JbXAzDijmbdSUf87l3gz6fpf5NQQVgck`
    return md5.hex_md5(result);
}

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}