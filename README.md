## 微信小程序开发
* author： fanghl

------ 
本项目是总结微信小程序开发的流程和封装方法，方便小程序的二次开发，框架使用 wepy1.7.x，语法为类 Vue，项目涵盖了工具方法、异步请求封装、日志封装、MD5加密、图片上传、支付等开箱即用的方法，以及一些页面效果的实现，比如聊天框等。


### 技术点  
* wepy 
* async/await
* MD5
* ES6

### 架构  

参考 wepy 官网的案例即可  https://tencent.github.io/wepy/document.html#/ 

### How to run  

* install dependencies
> npm install  

* serve with hot reload 
> wepy build --watch 

### possible problem 

本地未安装 wepy-cli 环境
* npm install wepy-cli -g

-----

> 小程序开发的几乎所有方面本项目已经具备了，本项目侧重点是开箱即用的封装方法，业务逻辑不是重点。本项目的架构来自于一个成熟的线上小程序，该小程序日活在5-10万。当然只是封装架构，这里不存在真实业务逻辑。如果您有更好的意见，请积极issue一起交流。