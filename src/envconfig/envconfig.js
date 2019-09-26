let baseURL;
let imgUrl = '';
let appid ='';

appid =  process.env.NODE_ENV === 'development' ? 'wxd88c4701c3b24863' : 'wx394248922854ae74'
var origin = window.location.origin;
if (origin && origin.indexOf('https') >= 0) {
    baseURL = process.env.NODE_ENV === 'development' ? 'https://dev.im-dangdang.com' : 'https://app.im-dangdang.com'
} else {
    baseURL = process.env.NODE_ENV === 'development' ? 'http://dev.im-dangdang.com' : 'http://app.im-dangdang.com'
}

export default {imgUrl, baseURL,appid}
