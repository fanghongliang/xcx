import wepy from 'wepy'
// import qiniuyun from '@/utils/qiniuUploader'

// const baseUrl = 'https://test.****.cn/wx/api//v1'
const baseUrl = 'https://*****/'

// 上传图片
const uploadImg = (imageURL, uptokenURL) => {
    return new Promise((resolve, reject) => {
        qiniuyun.upload(imageURL, (res) => {
            resolve(res);
        }, (error) => {
            reject(error)
        }, {
            region: 'ECN',
            domain: 'https://images.*****.cn',
            uptoken: uptokenURL
        })
    })
}
//请求
const wxRequest = async (params = {}, url, method,) => {
    let token = params.token || '';
        if (params.getToken) {
            token = wepy.getStorageSync('token')
        }
        let res = await wepy.request({
            url: url,
            method: method || 'GET',
            data: params.data || {},
            header: Object.assign({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `XqCircleToken ${token}`
            }, params.header || {})
        });
    return res
  }

module.exports = {
    wxRequest,
    baseUrl,
    uploadImg,
};
