const  trim = function(str) {
  return str.replace(/^(\s|\u00A0)+/, '').replace(/(\s|\u00A0)+$/, '')
}
const check = function() {
  // 是否为空
  function isNull(str) {
    if (trim(str).length == 0) return true
    else return false
  }
  // 是否为邮件
  function isEmail(str) {
    var reg = /^\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
    if (reg.test(trim(str))) return false
    else return true
  }
  // 是否为手机号
  function isPhone(str) {
    var a = /^1\d{10}$/, s = trim(str)
    if (a.test(s)) return false
    else return true
  }
  // 是否汉字
  function isCN(str) {
    var s = trim(str), reg = /^[\u4e00-\u9fa5]+$/
    if (reg.test(s)) return false
    else return true
  }
  // 是否密码
  function isPwd(str) {
    var reg = /^[A-Za-z0-9_-]+$/
    if (reg.test(trim(str))) return false
    else return true
  }
  // 是否为微信号
  function isWx(str) {
    var rex = /^[a-zA-Z\d_]{5,}$/
    if (rex.test(trim(str))) return false
    else return true
  }
  // 是否全为数字
  function isNum(num) {
    var rex = /^[0-9]+$/
    if (rex.test(trim(num))) return false
    else return true
  }
  // 是否全为热线电话
  function isHotline(num) {
    var rex = /^[0-9]([0-9]|-)*[0-9]$/
    if (rex.test(trim(num))) return false
    else return true
  }
  // 是否为钱数
  function isMoney(money) {
    var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    if (reg.test(money)) {
      // alert("正确~");
      return false
    } else {
      // alert("有误~");
      return true
    }
  }

  // 判断是否为url地址
  function isUrl(str) {
    var rex = /^(http|https){1}:\/\/[^\s]+$/
    if (rex.test(trim(str))) return false
    else return true
  }
}