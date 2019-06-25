import axios from 'axios'

const origin = process.env.ORIGIN,
    pathRoot = process.env.PATH_ROOT;

export default {
    get: get,
    post: post
}

function get(url, params) {
    return send('GET', url, params);
}

function post(url, params, data) {
    return send('POST', url, params, data);
}

function send(method, url, params, data) {
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: url,
            baseURL: origin + pathRoot,
            params: params,
            data: data,
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        }).then(function (res) {
            if (res.data.status) {
                resolve(res.data.data);
            } else {
                reject(res.data);
                console.log(res.data.msg);
                appVue.$message(res.data.msg || '网络接口错误');
            }
        }).catch(function (error) {
            reject(error);
            console.log(error);
            if (error && error.response && error.response.status >= 500 && error.response.status < 600) {
                appVue.$message('服务器错误，请联系工程师处理！');
            } else {
                appVue.$message('网络错误，请检查网络连接！');
            }
        });
    }).catch((res) => {
        console.log(res.msg);
        return res;
    });
}

