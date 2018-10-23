Page({
    data: {
        array: ['美国', '中国', '巴西', '日本'],
        objectArray: [
            {
                id: 0,
                name: '美国'
            },
            {
                id: 1,
                name: '中国'
            },
            {
                id: 2,
                name: '巴西'
            },
            {
                id: 3,
                name: '日本'
            }
        ],
        index: 0,
        multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
        objectMultiArray: [
            [
                {
                    id: 0,
                    name: '无脊柱动物'
                },
                {
                    id: 1,
                    name: '脊柱动物'
                }
            ], [
                {
                    id: 0,
                    name: '扁性动物'
                },
                {
                    id: 1,
                    name: '线形动物'
                },
                {
                    id: 2,
                    name: '环节动物'
                },
                {
                    id: 3,
                    name: '软体动物'
                },
                {
                    id: 3,
                    name: '节肢动物'
                }
            ], [
                {
                    id: 0,
                    name: '猪肉绦虫'
                },
                {
                    id: 1,
                    name: '吸血虫'
                }
            ]
        ],
        multiIndex: [0, 0, 0],
        date: '2016-09-01',
        time: '12:01'
    },
    bindMultiPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            multiIndex: e.detail.value
        })
    },
    formSubmit: function (e) {
        console.log(222)
        wx.chooseImage({
          success(res) {
            console.log(res)
            const tempFilePaths = res.tempFilePaths
            wx.uploadFile({
              url: '127.0.0.1:8083/user/upload', //仅为示例，非真实的接口地址
              filePath: tempFilePaths[0],
              name: 'file',
              formData: {
                'user': 'test'
              },
              success(res) {
                const data = res.data
                //do something
              }
            })
          }
        })
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
    }
})