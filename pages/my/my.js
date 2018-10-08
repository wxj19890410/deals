var app = getApp()
Page({
    data: {
        userInfo: {},
        userListInfo: [{
            icon: '../../images/iconfont-icontuan.png',
            text: '好友',
            isunread: true,
            unreadNum: 1
        }, {
            icon: '../../images/iconfont-dingdan.png',
            text: '完成的计划',
            isunread: true,
            unreadNum: 2
        }, {
            icon: '../../images/iconfont-card.png',
            text: '放弃的计划',
            isunread: false,
            unreadNum: 2
        }]
    },

    onLoad: function () {
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    }
})