import axios from 'axios';
import envconfig from '@/envconfig/envconfig';

export default class Server {
    axios(method, url, params) {
        return new Promise((resolve, reject) => {//为什么要用2个promise？
            if(typeof params !== 'object') params = {};//如果params不是对象，给他赋一个空的对象

            let _option = params;

            //axios.request的配置数据
            _option = {
                // `method` 是创建请求时使用的方法
                method,
                // `url` 是用于请求的服务器 URL
                url,
                // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
                baseURL: envconfig.baseURL,
                // `transformRequest` 允许在向服务器发送前，修改请求数据
                // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
                // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
                transformRequest: [function (data) {
                  // 对 data 进行任意转换处理
                  return data;
                }],
                // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
                transformResponse: [function (data) {
                  // 对 data 进行任意转换处理
                  return data;
                }],
                // `headers` 是即将被发送的自定义请求头
                headers: null,
                // `withCredentials` 表示跨域请求时是否需要使用凭证，默认为false
                withCredentials: false,
                // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
                responseType: 'json', // 默认的
                // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
                validateStatus: function (status) {
                    return status >= 200 && status < 300; // 默认的
                },
                params: null, //这里参数为null，当我们使用实例的时候，实例里面的参数会自动覆盖这个null
                data: null,
                // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
                // 如果请求话费了超过 `timeout` 的时间，请求将被中断
                timeout: 30000,
                ...params
            }

            // promise的处理是放在then后面，里面放两个functions，第一个是成功的function，第二个是失败时候执行的function
            // promise后面 then前面用于放一些操作
            // axios.request（config）是axios的别名 当使用以上别名方法时，url，method和data等属性不用在config重复声明。
            //额外声明的配置将与实例配置合并
            axios.request(_option).then(res => {
                resolve(typeof res.data == 'object' ? res.data : JSON.parse(res.data))
            }, error => {
                if(error.response){//如果error里面给了信息，把错误信息展示出来
                    reject(error.response.data)
                }else {//如果没有，直接抛出错误
                    reject(error)
                }
            })

        })
    }
}
