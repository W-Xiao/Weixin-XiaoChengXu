let placeholderArr = ["二手电动车","6plus","vivox9","vivox21","oppor15","iphonex","vivoy85","iphone7"]
let recommondArr = ["iphone6plus","苹果6plus","oppor11","二手电动车","苹果7","vivox20","6s",""]
let searchData = ""
let degree = 0
let inputArr = []

Page({
    data:{
        wxSearchData: '',
        placeholder:placeholderArr[Math.floor(Math.random()*8)],
        recommends:[
            {
                text:recommondArr[0]
            },
            {
                text:recommondArr[1]
            },
            {
                text:recommondArr[2]
            },
            {
                text:recommondArr[3]
            },
            {
                text:recommondArr[4]
            },
            {
                text:recommondArr[5]
            },
            {
                text:recommondArr[6]
            }
        ],
        searches:[]
    },
    // 获取用户输入值
    wxSearchInput(e) {
        this.setData({
            wxSearchData:e.detail.value
        })
        searchData = e.detail.value
    },

    // 添加输入内容
    wxSearchConfirm() {
        let lists = []
        inputArr[degree] = searchData
        this.setData({
            wxSearchData:'',
            placeholder:placeholderArr[Math.floor(Math.random()*8)]
        })
        degree ++
        for (let i = 0; i<inputArr.length; i++){
            lists.push({
                text: inputArr[i]
            })
        }
        this.setData({
            searches: lists.reverse()
        })
    },

    // 清除数据
    delate() {
        degree = 0
        inputArr = []
        searchData = ''
        this.setData({
            searches:null
        })
    }
})