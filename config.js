module.exports = {
    /**
     * v1.3
     * Ps:docker镜像版本 <= 此版本号
     */
    //=======================================必填===================================================
    //自定义服务端口
    PORT: 3000,
    //自定义请求api接口的token
    token: '',
    //日志群名称，机器人会把所有联系人发的消息转发到群(包括通过api接口的消息)，提前创建好群并拉机器人进群
    //(避免敏感消息泄露，群内请只有你和机器人)
    logGroup:'',
    //maiark短信登陆 
    maiarkUrl:''
}