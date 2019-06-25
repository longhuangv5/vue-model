import http from './http'

export default {
    getList: getList,
}

function getList(data) {
    return http.get('list', data);
}