import wepy from 'wepy'

export default class commonMixin extends wepy.mixin{
    // 本地存储
    saveData(k, v){
        wepy.setStorage({
            key: k,
            data: v
        })
    }
    saveDataS(k, v){
        wepy.setStorageSync(k, v || '')
    }
    getDataS(k){
        let res = wepy.getStorageSync(k);
        return res
    }
    // 图片预览
    preImg(c, u){
        wepy.previewImage({
            current: c,
            urls: u
        })
    }
    // 提示框
    toast(title,icon,dura){
        wepy.showToast({
            title: title,
            icon: icon,
            duration: dura || 1500
        })
    }
    //页面滚动
    pageScro(num){
        wepy.pageScrollTo({
            scrollTop: num,
            duration: 0
        });
    }
    // 页面跳转
    nav(url){
        this.$navigate({
            url: url
        })
    }
    swi(url){
        wepy.switchTab({
            url: url
        })
    }
    log() {
        const show = true
        if (show) {
            console.log(`[${new Date().Format("yyyy-MM-dd hh:mm:ss")}] `, ...arguments)
        }
    }
    // showModal
    modal(data) {
		wx.showModal({
			content: data.content,
			showCancel: data.cancel || false,
			confirmText: data.confirm || '知道了',
		})
    }   
    //粘贴板
    setClipboardData(data, succFun) {
        wx.setClipboardData({
            data,
            success(res) {
                wx.getClipboardData({
                    success (res) {
                        succFun
                    }
                })
            }
        }) 
    }
    // 页面顶部title 
    setNavTitle(title) {
        wx.setNavigationBarTitle({
            title: title
        })
    }
    //跳转小程序
    navToMini(appId) {
        wx.navigateToMiniProgram({
            appId,
        })
    }
    //加载框
    loading(title) {
        wx.showLoading({
            title: title || "加载中..."
        })
    }
    //隐藏加载框
    hideLoading() {
        wx.hideLoading({})
    }
    //返回上一个页面
    navBack() {
        wx.navigateBack({})
    }
}