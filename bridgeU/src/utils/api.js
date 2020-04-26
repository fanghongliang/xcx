import base from '@/utils/base'

//登录
const login = (params) => base.wxRequest(params, `${base.baseUrl}/login/`, 'POST')

module.export = {
    login,
}
