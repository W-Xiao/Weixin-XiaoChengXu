//index.js
//获取应用实例
let page = 0
let j = 0
let scrollTop = 0 
let reqlocked = false
let returnTop = true
let returnTop2 = true
let giftLeftDitance = 0 
let numArr = [187623,218883,165432,187642,134462]
let imgArr = 
[
  "http://www.gether.cn/zhuanzhuan/image/user-image/user-image1.jpg",
  "http://www.gether.cn/zhuanzhuan/image/user-image/user-image2.jpg"
]
let imgArr2 = [
  "http://www.gether.cn/zhuanzhuan/image/user-image/user-image3.jpg",
  "http://www.gether.cn/zhuanzhuan/image/user-image/user-image4.jpg",
  "http://www.gether.cn/zhuanzhuan/image/user-image/user-image5.jpg"
]
let imgArr3 = [
  "http://www.gether.cn/zhuanzhuan/image/user-image/user-image6.jpg",
  "http://www.gether.cn/zhuanzhuan/image/user-image/user-image7.jpg"
]
let price = [
  "¥860-1507",
  "¥880-1600",
  "¥999-2200"
]
var app = getApp()
var QQMapWx = require('../../qqmap-wx-jssdk1.0/qqmap-wx-jssdk.js')
var qqmapsdk;
Page({
  data: {
    loadingboxs:[],
    currentTab: 0,
    state:0,
    topNum: 0,
    freetopNum: 0,
    personNum:"",
    adressName:"",
    sellBoxState:1,
    sellBoxHide:0,
    thhBottomTab:0,
    thhBottomCommodity:1,
    giftMenuHide: false,
    thhBottomTab2:0,
    gift: 0,
    giftLeft: "80rpx",
    giftFixeLeft:"600rpx",
    isHideLoadMore:true,
    returnTop: true,
    returnTop2: true,
    giftMessageImg: "/image/gift/index/heart.png",
    giftMessageText: 0,
    phonePay:price[Math.round(Math.random()*3)],
    menus:[
      {
        "url":"http://www.gether.cn/zhuanzhuan/image/indexMenu1.png",
        "name":"消息"
      },
      {
        "url":"http://www.gether.cn/zhuanzhuan/image/indexMenu2.png",
        "name":"我发布的"
      },
      {
        "url":"http://www.gether.cn/zhuanzhuan/image/indexMenu3.png",
        "name":"我卖出的"
      },
      {
        "url":"http://www.gether.cn/zhuanzhuan/image/indexMenu4.png",
        "name":"我买到的"
      },
      {
        "url":"http://www.gether.cn/zhuanzhuan/image/indexMenu5.png",
        "name":"我的免费领"
      },
      {
        "url":"http://www.gether.cn/zhuanzhuan/image/indexMenu6.png",
        "name":"更多"
      }
    ],
    topIcons:[
      {
        "Fn":"/pages/sellPages/sellFirst/sellFirst",
        "css":"out-sell-menu-go",
        "cs1":"cs1",
        "text":"领红包",
        "cs2":"bg1",
        "img":"http://www.gether.cn/zhuanzhuan/image/sellMenu1.png",
        "name":"二手换钱"
      },
      {
        "Fn":"/pages/sellPages/sellSecond/sellSecond",
        "css":"out-sell-menu-go-hid",
        "cs1":"cs2",
        "text":"",
        "cs2":"bg2",
        "img":"http://www.gether.cn/zhuanzhuan/image/sellMenu2.png",
        "name":"旧手机换钱"
      },
      {
        "Fn":"/pages/sellPages/sellThird/sellThird",
        "css":"out-sell-menu-go-hid",
        "cs1":"cs3",
        "text":"",
        "cs2":"bg3",
        "img":"http://www.gether.cn/zhuanzhuan/image/sellMenu3.png",
        "name":"旧衣回收"
      },
      {
        "Fn":"/pages/sellPages/sellFouth/sellFouth",
        "css":"out-sell-menu-go-hid",
        "cs1":"cs4",
        "text":"",
        "cs2":"bg4",
        "img":"http://www.gether.cn/zhuanzhuan/image/sellMenu4.png",
        "name":"旧书换钱"
      }
    ],
    sliderImgs:[
      {
        "img":"http://www.gether.cn/zhuanzhuan/image/engineer-image/engineer1.jpg",
      },
      {
        "img":"http://www.gether.cn/zhuanzhuan/image/engineer-image/engineer2.jpg",
      },
      {
        "img":"http://www.gether.cn/zhuanzhuan/image/engineer-image/engineer3.jpg",
      }
    ],
    sellBoxs:[
      {
        "Lname":"卖二手数码",
        "Lnum":"83.5万人求买",
        "Limg":"http://www.gether.cn/zhuanzhuan/image/best-sell/sell-2.png",
        "Rname":"卖旧衣服",
        "Rnum":"69.3万人求买",
        "Rimg":"http://www.gether.cn/zhuanzhuan/image/best-sell/sell-3.png",
      },
      {
        "Lname":"卖家用电器",
        "Lnum":"60.8万人求买",
        "Limg":"http://www.gether.cn/zhuanzhuan/image/best-sell/sell-1.png",
        "Rname":"卖母婴用品",
        "Rnum":"90.4万人求买",
        "Rimg":"http://www.gether.cn/zhuanzhuan/image/best-sell/sell-6.png",
      },
      {
        "Lname":"卖家具",
        "Lnum":"40.9万人求买",
        "Limg":"http://www.gether.cn/zhuanzhuan/image/best-sell/sell-4.png",
        "Rname":"卖闲置美妆",
        "Rnum":"50.9万人求买",
        "Rimg":"http://www.gether.cn/zhuanzhuan/image/best-sell/sell-5.png",
      }
    ],
    topIconOuts:[
      {
        "src":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone.png",
        "css":"thh-top-icon-out-left1",
        "text1":"已验机手机",
        "text2":"官方质保 当天发货"
      },
      {
        "src":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book.png",
        "css":"thh-top-icon-out-left2",
        "text1":"自营二手书",
        "text2":"消毒塑封 京东5折"
      }
    ],
    thhBottomBoxPhoneTopics:
    [
      {
        "text":"苹果"
      },
      {
        "text":"小米"
      },
      {
        "text":"华为"
      },
      {
        "text":"oppo"
      },
      {
        "text":"vivo"
      },
      {
        "text":"魅族"
      },
      {
        "text":"三星"
      }
    ],
    thhBottomBoxPhoneBoxs:
    [
      {
        thhBottomBoxLines:
        [
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/13.png",
                "phone":"iPhone6",
                "price":"635"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/5.png",
                "phone":"iPhone7",
                "price":"1893"
              }
            ],
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/12.png",
                "phone":"iPhoneX",
                "price":"4792"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/7.png",
                "phone":"iPhone8 Plus",
                "price":"3644"
              }
            ]
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/11.png",
                "phone":"iPhone7 Plus",
                "price":"2556"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/4.png",
                "phone":"iPhone6s",
                "price":"695"
              }
            ]
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/6.png",
                "phone":"iPhone6s Plus",
                "price":"1094"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/8.png",
                "phone":"iPhone8",
                "price":"3032"
              }
            ]
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/6.png",
                "phone":"iPhone SE",
                "price":"567"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/13.png",
                "phone":"iPhone5s",
                "price":"695"
              }
            ]
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/13.png",
                "phone":"iPhone6 Plus",
                "price":"788"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/1.png",
                "phone":"iPhone5c",
                "price":"91"
              }
            ]
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/9.png",
                "phone":"iPhone5",
                "price":"134"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/3.png",
                "phone":"iPhone4s",
                "price":"49"
              }
            ]
          },
        ],
        thhBottomBoxLineTwos:[
          {
            "css":"",
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/6.png",
            "phone":"iPhone",
            "price":"1000",
            "text":"苹果手机"
          }
        ]
      },
      {
        thhBottomBoxLines:
        [
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/xiaomi/1.png",
                "phone":"小米1",
                "price":"635"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/xiaomi/2.png",
                "phone":"小米2",
                "price":"1893"
              }
            ],
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/xiaomi/3.png",
                "phone":"小米3",
                "price":"4792"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/xiaomi/4.png",
                "phone":"小米4",
                "price":"3644"
              }
            ]
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/xiaomi/5.png",
                "phone":"小米5",
                "price":"2556"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/xiaomi/6.png",
                "phone":"小米6",
                "price":"695"
              }
            ]
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/xiaomi/7.png",
                "phone":"小米7",
                "price":"1094"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/xiaomi/8.png",
                "phone":"小米8",
                "price":"3032"
              }
            ]
          },
        ],
        thhBottomBoxLineTwos:[
          {
            "css":"",
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/xiaomi/9.png",
            "phone":"小米9",
            "price":"593",
            "text":"小米手机"
          }
        ]
      },
      {
        thhBottomBoxLines:
        [
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/huawei/1.png",
                "phone":"华为1",
                "price":"635"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/huawei/2.png",
                "phone":"华为2",
                "price":"1893",
              }
            ],
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/huawei/3.png",
                "phone":"华为3",
                "price":"4792"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/huawei/4.png",
                "phone":"华为4",
                "price":"3644"
              }
            ]
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/huawei/5.png",
                "phone":"华为5",
                "price":"2556"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/huawei/6.png",
                "phone":"华为6",
                "price":"695"
              }
            ]
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/huawei/7.png",
                "phone":"华为7",
                "price":"1094"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/huawei/8.png",
                "phone":"华为8",
                "price":"3032"
              }
            ]
          },
        ],
        thhBottomBoxLineTwos:[
          {
            "css":"",
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/huawei/8.png",
            "phone":"华为9",
            "price":"593",
            "text":"华为手机"
          }
        ]
      },
      {
        thhBottomBoxLines:
        [
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/oppo/1.png",
                "phone":"oppo1",
                "price":"635"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/oppo/2.png",
                "phone":"oppo2",
                "price":"1893"
              }
            ],
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/oppo/3.png",
                "phone":"oppo3",
                "price":"4792"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/oppo/4.png",
                "phone":"oppo4",
                "price":"3644"
              }
            ]
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/oppo/5.png",
                "phone":"oppo5",
                "price":"2556"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/oppo/6.png",
                "phone":"oppo6",
                "price":"695"
              }
            ]
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/oppo/7.png",
                "phone":"oppo7",
                "price":"1094"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/oppo/8.png",
                "phone":"oppo8",
                "price":"3032"
              }
            ]
          },
        ],
        thhBottomBoxLineTwos:[
          {
            "css":"",
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/oppo/1.png",
            "phone":"oppo9",
            "price":"593",
            "text":"oppo手机"
          }
        ]
      },
      {
        thhBottomBoxLines:
        [
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/vivo/1.png",
                "phone":"vivo1",
                "price":"635"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/vivo/2.png",
                "phone":"vivo2",
                "price":"1893"
              }
            ],
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/vivo/3.png",
                "phone":"vivo3",
                "price":"4792"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/vivo/4.png",
                "phone":"vivo4",
                "price":"3644"
              }
            ]
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/vivo/5.png",
                "phone":"vivo5",
                "price":"2556"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/vivo/6.png",
                "phone":"vivo6",
                "price":"695"
              }
            ]
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/vivo/7.png",
                "phone":"vivo7",
                "price":"1094"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/vivo/8.png",
                "phone":"vivo8",
                "price":"3032"
              }
            ]
          },
        ],
        thhBottomBoxLineTwos:[
          {
            "css":"",
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/vivo/9.png",
            "phone":"vivo9",
            "price":"593",
            "text":"vivo手机"
          }
        ]
      },
      {
        thhBottomBoxLines:
        [
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/meizu/1.png",
                "phone":"魅族1",
                "price":"635"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/meizu/2.png",
                "phone":"魅族2",
                "price":"1893"
              }
            ],
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/meizu/3.png",
                "phone":"魅族3",
                "price":"4792"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/meizu/4.png",
                "phone":"魅族4",
                "price":"3644"
              }
            ]
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/meizu/5.png",
                "phone":"魅族5",
                "price":"2556"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/meizu/6.jpg",
                "phone":"魅族6",
                "price":"695"
              }
            ]
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/meizu/7.png",
                "phone":"魅族7",
                "price":"1094"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/meizu/8.png",
                "phone":"魅族8",
                "price":"3032"
              }
            ]
          },
        ],
        thhBottomBoxLineTwos:[
          {
            "css":"",
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/meizu/9.png",
            "phone":"魅族9",
            "price":"593",
            "text":"魅族手机"
          }
        ]
      },
      {
        thhBottomBoxLines:
        [
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/sanxing/1.png",
                "phone":"三星1",
                "price":"635"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/sanxing/2.png",
                "phone":"三星2",
                "price":"1893"
              }
            ],
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/sanxing/3.png",
                "phone":"三星3",
                "price":"4792"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/sanxing/4.png",
                "phone":"三星4",
                "price":"3644"
              }
            ]
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/sanxing/5.jpeg",
                "phone":"三星5",
                "price":"2556"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/sanxing/6.jpeg",
                "phone":"三星6",
                "price":"695"
              }
            ]
          },
          {
            divs:
            [
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/sanxing/7.jpeg",
                "phone":"三星7",
                "price":"1094"
              },
              {
                "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/sanxing/8.jpeg",
                "phone":"三星8",
                "price":"3032"
              }
            ]
          },
        ],
        thhBottomBoxLineTwos:[
          {
            "css":"",
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/sanxing/9.jpeg",
            "phone":"三星9",
            "price":"593",
            "text":"三星手机"
          }
        ]
      },
    ],
    thhBottomPhoneName2s:[
      {
        "text":"文学小说"
      },
      {
        "text":"经管励志"
      },
      {
        "text":"童书教育"
      },
      {
        "text":"人文社科"
      },
      {
        "text":"科技科普"
      },
      {
        "text":"生活艺术"
      },
      {
        "text":"教材教辅"
      }
    ],
    thhBottomBoxBooks:[
      {
        thhBottomBoxBooksTopBoxs:
        [
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/wxxs/1.png",
            "text":"青春文学"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/wxxs/2.png",
            "text":"名家随笔"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/wxxs/3.png",
            "text":"社会"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/wxxs/4.png",
            "text":"推理悬疑"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/wxxs/5.png",
            "text":"言情"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/wxxs/6.png",
            "text":"动漫"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/wxxs/7.png",
            "text":"外国文学"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/wxxs/8.png",
            "text":"全部文学"
          },
        ],
      },
      {
        thhBottomBoxBooksTopBoxs:
        [
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/jglz/1.png",
            "text":"成功励志"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/jglz/2.png",
            "text":"管理"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/jglz/3.png",
            "text":"投资理财"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/jglz/4.png",
            "text":"经济"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/jglz/5.png",
            "text":"电子商务"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/jglz/6.png",
            "text":"人际交往"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/jglz/7.png",
            "text":"会计"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/jglz/8.png",
            "text":"全部经管"
          },
        ],
      },
      {
        thhBottomBoxBooksTopBoxs:
        [
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/tsjy/1.png",
            "text":"绘本"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/tsjy/2.png",
            "text":"儿童文学"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/tsjy/3.png",
            "text":"亲子教育"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/tsjy/4.png",
            "text":"育儿早教"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/tsjy/5.png",
            "text":"孕产胎教"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/tsjy/6.png",
            "text":"少儿英语"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/tsjy/7.png",
            "text":"科普百科"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/tsjy/8.png",
            "text":"全部童书"
          },
        ],
      },
      {
        thhBottomBoxBooksTopBoxs:
        [
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/rwsk/1.png",
            "text":"历史"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/rwsk/2.png",
            "text":"心理学"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/rwsk/3.png",
            "text":"哲学"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/rwsk/4.png",
            "text":"社会科学"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/rwsk/5.png",
            "text":"宗教"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/rwsk/6.png",
            "text":"政治"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/rwsk/7.png",
            "text":"军事"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/rwsk/8.png",
            "text":"法律"
          },
        ],
      },
      {
        thhBottomBoxBooksTopBoxs:
        [
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/kjkp/1.png",
            "text":"全部社科"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/kjkp/2.png",
            "text":"计算机与..."
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/kjkp/3.png",
            "text":"建筑"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/kjkp/4.png",
            "text":"医学"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/kjkp/5.png",
            "text":"科普读物"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/kjkp/6.png",
            "text":"自然科学"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/kjkp/7.png",
            "text":"工业技术"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/kjkp/8.png",
            "text":"农林科学"
          },
        ],
      },
      {
        thhBottomBoxBooksTopBoxs:
        [
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/shys/1.png",
            "text":"全部科普"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/shys/2.png",
            "text":"艺术"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/shys/3.png",
            "text":"美食烹饪"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/shys/4.png",
            "text":"旅游指南"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/shys/5.png",
            "text":"养生保健"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/shys/6.png",
            "text":"摄影"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/shys/7.png",
            "text":"家居装修"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/shys/8.png",
            "text":"手工DIY"
          },
        ],
      },
      {
        thhBottomBoxBooksTopBoxs:
        [
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/jcjp/1.png",
            "text":"中小学教辅"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/jcjp/2.png",
            "text":"教材"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/jcjp/3.png",
            "text":"外语"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/jcjp/4.png",
            "text":"考试"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/jcjp/5.png",
            "text":"工具书"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/jcjp/6.png",
            "text":"中小学阅读"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/jcjp/7.png",
            "text":"读研"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/jcjp/8.png",
            "text":"全部教辅"
          },
        ],
      },
    ],
    loadingCommoditys:[
      {},
      {
        commodityOutBoxs:
        [
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/6.png",
            "text":"苹果"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/huawei/1.png",
            "text":"华为"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/sanxing/1.png",
            "text":"三星"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/xiaomi/1.png",
            "text":"小米"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/vivo/1.png",
            "text":"vivo"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/oppo/1.png",
            "text":"oppo"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/phone/meizu/1.png",
            "text":"魅族"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/fatiao.png",
            "text":"全部"
          }
        ]
      },
      {
        commodityOutBoxs:
        [
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/wxxs/1.png",
            "text":"文学小说"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/jglz/1.png",
            "text":"经管励志"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/tsjy/1.png",
            "text":"童书教育"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/rwsk/1.png",
            "text":"人文社科"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/kjkp/1.png",
            "text":"科技科普"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/shys/1.png",
            "text":"生活艺术"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/jcjp/1.png",
            "text":"教材教辅"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/book/rwsk/2.png",
            "text":"热销图书"
          }
        ]
      },
      {
        commodityOutBoxs:
        [
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/my/1.png",
            "text":"婴幼服饰"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/my/2.png",
            "text":"童车童床"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/my/3.png",
            "text":"玩具图书"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/my/4.png",
            "text":"尿裤湿巾"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/my/5.png",
            "text":"喂养用具"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/my/6.png",
            "text":"孕妈用品"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/my/3.png",
            "text":"洗护用品"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/fatiao.png",
            "text":"全部"
          }
        ]
      },
      {
        commodityOutBoxs:
        [
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/pbdd/1.png",
            "text":"苹果平板"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/pbdd/2.png",
            "text":"三星平板"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/pbdd/3.png",
            "text":"小米平板"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/pbdd/4.png",
            "text":"华为平板"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/pbdd/5.png",
            "text":"戴尔平板"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/pbdd/6.png",
            "text":"谷歌平板"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/fatiao.png",
            "text":"全部"
          }
        ]
      },
      {
        commodityOutBoxs:
        [
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/dl/1.png",
            "text":"笔记本"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/dl/2.png",
            "text":"台式机"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/dl/3.png",
            "text":"电脑配件"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/dl/4.png",
            "text":"外设产品"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/dl/5.png",
            "text":"网络设备"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/fatiao.png",
            "text":"全部"
          }
        ]
      },
      {
        commodityOutBoxs:
        [
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/cydq/1.png",
            "text":"电视机"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/cydq/7.png",
            "text":"洗衣机"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/cydq/3.png",
            "text":"冰箱"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/cydq/4.png",
            "text":"空调"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/cydq/5.png",
            "text":"热水器"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/cydq/6.png",
            "text":"厨房电器"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/cydq/7.png",
            "text":"生活小家电"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/fatiao.png",
            "text":"全部"
          }
        ]
      },
      {
        commodityOutBoxs:
        [
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/jjjj/1.png",
            "text":"沙发"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/jjjj/2.png",
            "text":"床/床垫"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/jjjj/3.png",
            "text":"柜子"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/jjjj/4.png",
            "text":"桌子/茶几"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/jjjj/5.png",
            "text":"椅子/凳子"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/jjjj/6.png",
            "text":"家装软饰"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/jjjj/1.png",
            "text":"厨房卫浴"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/fatiao.png",
            "text":"全部"
          }
        ]
      },
      {
        commodityOutBoxs:
        [
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/ydhw/1.png",
            "text":"健身训练"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/ydhw/2.png",
            "text":"户外装备"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/ydhw/3.png",
            "text":"桌游棋牌"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/ydhw/4.png",
            "text":"轮滑"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/ydhw/5.png",
            "text":"垂钓用品"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/ydhw/6.png",
            "text":"游泳用品"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/ydhw/7.png",
            "text":"舞蹈瑜伽"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/fatiao.png",
            "text":"全部"
          }
        ]
      },
      {
        commodityOutBoxs:
        [
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/bgyp/1.png",
            "text":"打印机/复印机"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/bgyp/2.png",
            "text":"办公家具"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/bgyp/3.png",
            "text":"投影仪"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/bgyp/4.png",
            "text":"文具耗材"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/fatiao.png",
            "text":"全部"
          }
        ]
      },
      {
        commodityOutBoxs:
        [
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/czsb/1.png",
            "text":"导航仪"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/czsb/2.png",
            "text":"行车记录仪"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/czsb/3.png",
            "text":"车载音箱"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/czsb/4.png",
            "text":"车载冰箱"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/czsb/5.png",
            "text":"车载香水"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/czsb/6.png",
            "text":"储物箱"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/czsb/7.png",
            "text":"维修保养设备"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/fatiao.png",
            "text":"全部"
          }
        ]
      },
      {
        commodityOutBoxs:
        [
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/wjyq/1.png",
            "text":"玩具"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/wjyq/2.png",
            "text":"吉他"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/wjyq/3.png",
            "text":"钢琴"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/wjyq/4.png",
            "text":"电子琴"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/wjyq/5.png",
            "text":"古筝"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/wjyq/6.png",
            "text":"架子鼓"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/wjyq/7.png",
            "text":"二胡"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/fatiao.png",
            "text":"全部"
          }
        ]
      },
      {
        commodityOutBoxs:
        [
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/pwkj/1.png",
            "text":"健身卡"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/pwkj/2.png",
            "text":"超市/购物卡"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/pwkj/3.png",
            "text":"赛事演出"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/pwkj/4.png",
            "text":"景点门票"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/pwkj/5.png",
            "text":"电影票"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/pwkj/6.png",
            "text":"蛋糕/甜点卡"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/bottomimg/pwkj/7.png",
            "text":"加油卡"
          },
          {
            "img":"http://www.gether.cn/zhuanzhuan/image/taohaohuo/fatiao.png",
            "text":"全部"
          }
        ]
      },
    ],
    commoditytexts:[
      {
        "text":"附近"
      },
      {
        "text":"手机"
      },
      {
        "text":"图书"
      },
      {
        "text":"母婴用品"
      },
      {
        "text":"平板电脑"
      },
      {
        "text":"电脑"
      },
      {
        "text":"家用电器"
      },
      {
        "text":"家居家具"
      },
      {
        "text":"运动户外"
      },
      {
        "text":"办公用品"
      },
      {
        "text":"车载设备"
      },
      {
        "text":"玩具乐器"
      },
      {
        "text":"票务卡劵"
      }
    ],
    giftSwipers:[
      {
        "img":"http://www.gether.cn/zhuanzhuan/image/gift/index/1.png"
      },
      {
        "img":"http://www.gether.cn/zhuanzhuan/image/gift/index/2.png"
      },
      {
        "img":"http://www.gether.cn/zhuanzhuan/image/gift/index/3.png"
      }
    ],
    giftMenuTexts:[
      {
        "index":"0",
        "text":"全部"
      },
      {
        "index":"1",
        "text":"推荐"
      },
      {
        "index":"2",
        "text":"数码"
      },
      {
        "index":"3",
        "text":"家居"
      },
      {
        "index":"4",
        "text":"母婴"
      },
      {
        "index":"5",
        "text":"服装"
      },
      {
        "index":"6",
        "text":"美妆"
      },
      {
        "index":"7",
        "text":"图书"
      },
      {
        "index":"8",
        "text":"其他"
      },
    ],
    giftLoadingBoxs:[
      {
        "messImg":"http://www.gether.cn/zhuanzhuan/image/gift/exchange/1.jpg",
        "userImg":"http://www.gether.cn/zhuanzhuan/image/user-image/user-image1.jpg",
        "userName":"用户1",
        "giftName":"欢乐送1",
        "num":"200",
        "flag":false,
        "img2":"http://www.gether.cn/zhuanzhuan/image/gift/index/heart.png",
        "text":"233"
    },
    {
        "messImg":"http://www.gether.cn/zhuanzhuan/image/gift/exchange/2.jpg",
        "userImg":"http://www.gether.cn/zhuanzhuan/image/user-image/user-image2.jpg",
        "userName":"用户2",
        "giftName":"欢乐送2",
        "num":"450",
        "flag":false,
        "img2":"http://www.gether.cn/zhuanzhuan/image/gift/index/heart.png",
        "text":"44"
    },
    {
        "messImg":"http://www.gether.cn/zhuanzhuan/image/gift/exchange/3.jpg",
        "userImg":"http://www.gether.cn/zhuanzhuan/image/user-image/user-image3.jpg",
        "userName":"用户3",
        "giftName":"欢乐送3",
        "num":"600",
        "flag":false,
        "img2":"http://www.gether.cn/zhuanzhuan/image/gift/index/heart.png",
        "text":"0"
    },
    {
        "messImg":"http://www.gether.cn/zhuanzhuan/image/gift/exchange/4.jpg",
        "userImg":"http://www.gether.cn/zhuanzhuan/image/user-image/user-image4.jpg",
        "userName":"用户4",
        "giftName":"欢乐送4",
        "num":"700",
        "flag":false,
        "img2":"http://www.gether.cn/zhuanzhuan/image/gift/index/heart.png",
        "text":"20"
    }
    ]
  },
  onLoad(options){
    var that = this

    that.setData({
      personNum: numArr[Math.floor(Math.random()*5)],
      mapUserSrc:imgArr[Math.floor(Math.random()*2)],
      mapUserSrc1:imgArr2[Math.floor(Math.random()*3)],
      mapUserSrc2:imgArr3[Math.floor(Math.random()*2)]
    });

    qqmapsdk = new QQMapWx({
      key:'WangXiaoKey'
    })
  },

  // 获取地址名字
  onReady(){
    var that = this
    wx.chooseLocation({
      success:(res) => {
        that.setData({
          adressName:res.name
        })
      }
    })
    wx.getSystemInfo({
      success:(res) => {
        that.setData({
          phone:res.model
        })
      }
    })
  },
  // 刷新
  upper(){
    wx.startPullDownRefresh();
    setTimeout(function(){
      wx.stopPullDownRefresh()
    },1000)
  },
  // 顶部点击切换
  swichNav(e){
    var that = this
    if(that.data.currentTab === e.target.dataset.current){
      return false
    }else{
      that.setData({
        currentTab: e.target.dataset.current,
        topNum: 0,
        freetopNum: 0,
        sellTopNum: 0,
        returnTop: true,
        returnTop2:true,
        giftMenuHide:false
      })
    }
  },
  menuStateBtn(){
    let that = this
    that.setData({
      state: 1
    })
  },
  changeState(){
    let that = this
    that.setData({
      state: 0
    })
  },
  sellBoxHid(){
    let that = this
    that.setData({
      sellBoxHide:1
    })
  },
  // 状态切换
  thhState(e){
    let that = this
    if(that.data.thhBottomTab === e.target.dataset.thhbottom){
      return false
    }else{
      that.setData({
        thhBottomTab: e.target.dataset.thhbottom
      })
    }
  },
  thhState2(e){
    let that = this
    if(that.data.thhBottomTab2 === e.target.dataset.thhbottomtwo){
      return false
    }else{
      that.setData({
        thhBottomTab2: e.target.dataset.thhbottomtwo
      })
    }
  },

  // 点击加载
  comState(e){
    j = 0
    let that = this
    let query = wx.createSelectorQuery().in(this)
    query.select('.taohaohuo').boundingClientRect(function(res){
      scrollTop = res.height
    }).exec()
    if(that.data.thhBottomCommodity === e.target.dataset.thhbottomcommodity){
      return false
    }else{
      that.setData({
        topNum: scrollTop,
        returnTop: true,
        thhBottomCommodity: e.target.dataset.thhbottomcommodity,
        loadingboxs:[],
        isHideLoadMore:false
      }),
      console.log("加载更多");
      let url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading1.json'
      switch (this.data.thhBottomCommodity) {
        case 0:
          url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading1.json'
        break;
        case 1:
          url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading2.json'
        break;
        case 2:
          url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading3.json'
        break
        case 3:
          url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading4.json'
        break
        case 4:
          url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading5.json'
        break
        case 5:
          url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading6.json'
        break
        case 6:
          url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading7.json'
        break
        case 7:
          url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading8.json'
        break
        case 8:
          url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading9.json'
        break
        case 9:
          url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading10.json'
        break
        case 10:
          url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading11.json'
        break
        case 11:
          url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading12.json'
        break
        case 12:
          url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading13.json'
        break
        default:
          console.log("请求错误")
        break;
      }
      setTimeout(function(){
        that.setData({
          isHideLoadMore:true
        })
      },1500)
      wx.request({
        url:url,
        header: {
          'Content-Type' :'application/json'
        },
        success:(res) => {
          let lists = that.data.loadingboxs;
          for(let i=0;i<3;i++){
            lists.push(res.data.list[i]);
          }
          that.setData({
            loadingboxs:lists
          })
        }
      })
    }
  },

  // 下滑加载
  loadmore(){
    let that = this;
    this.setData({
      isHideLoadMore:false
    })
    setTimeout( () => {
      that.setData({
        isHideLoadMore:true
      })
    },2000)

    let url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading1.json'
    switch (this.data.thhBottomCommodity) {
      case 0:
        url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading1.json'
      break
      case 1:
        url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading2.json'
      break
      case 2:
        url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading3.json'
      break
      case 3:
        url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading4.json'
      break
      case 4:
        url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading5.json'
      break
      case 5:
        url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading6.json'
      break
      case 6:
        url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading7.json'
      break
      case 7:
        url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading8.json'
      break
      case 8:
        url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading9.json'
      break
      case 9:
        url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading10.json'
      break
      case 10:
        url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading11.json'
      break
      case 11:
        url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading12.json'
      break
      case 12:
        url = 'http://www.gether.cn/zhuanzhuan/json/thh-loading13.json'
      break
      default:
        console.log("请求错误")
      break;
    }
    if (reqlocked) {
      return //终止
    }
    wx.request({
      url: url,
      header: {
        'Content-Type' :'application/json'
      },
      success:(res) => {
        reqlocked = false
        page++;
        let lists = that.data.loadingboxs;
        for(let i=0;i<3;i++){
          j++;
          if (j<=res.data.list.length) {
            lists.push(res.data.list[j-1])
          } else {
            j = 0
          }
        }
        that.setData({
          loadingboxs:lists
        })
        if (page >= 2){
          if (returnTop == true){
            that.setData({
              returnTop: false
            })
          }
        }
      }
    })
    reqlocked = true
  },

  // 返回顶部
  returnScrollTop(){
    let query = wx.createSelectorQuery().in(this)
    let that = this
    
    query.select('.taohaohuo').boundingClientRect(function(res){
      scrollTop = res.height
      that.setData({
        topNum: scrollTop,
        returnTop: true
      })
    }).exec()
  },

  // 线条移动
  giftLineMove(e){
    let that = this
    let giftIndex = e.currentTarget.dataset.gift
    giftLeftDitance = 80 + giftIndex*200
    this.setData({
      giftLeft:giftLeftDitance+"rpx",
    })
    setTimeout(() => {
    if(that.data.gift === e.target.dataset.gift){
      return false
    }else{
      that.setData({
        gift: e.target.dataset.gift,
        giftLoadingBoxs:[]
      })
      let url = "http://www.gether.cn/zhuanzhuan/json/giftjson/gift1.json"
      switch (this.data.gift) {
        case 0: 
          url = 'http://www.gether.cn/zhuanzhuan/json/giftjson/gift1.json'
          break;
        case 1: 
          url = 'http://www.gether.cn/zhuanzhuan/json/giftjson/gift2.json'
          break;
        case 2: 
          url = 'http://www.gether.cn/zhuanzhuan/json/giftjson/gift3.json'
          break;
        case 3: 
          url = 'http://www.gether.cn/zhuanzhuan/json/giftjson/gift4.json'
          break;
        case 4: 
          url = 'http://www.gether.cn/zhuanzhuan/json/giftjson/gift5.json'
          break;
        case 5: 
          url = 'http://www.gether.cn/zhuanzhuan/json/giftjson/gift6.json'
          break;
        case 6: 
          url = 'http://www.gether.cn/zhuanzhuan/json/giftjson/gift7.json'
          break;
        case 7: 
          url = 'http://www.gether.cn/zhuanzhuan/json/giftjson/gift8.json'
          break;
        case 8: 
          url = 'http://www.gether.cn/zhuanzhuan/json/giftjson/gift9.json'
          break;
        default:
          console.log("error");
          break;
      }
      wx.request({
        url:url,
        header: {
          'Content-Type' :'application/json'
        },
        success:(res) => {
          let lists = that.data.giftLoadingBoxs;
          for(let i=0;i<4;i++){
            lists.push(res.data.giftlist[i]);
          }
          that.setData({
            giftLoadingBoxs:lists
          })
        }
      })
    }
    },500)
  },

  // 点击收藏
  giftRightActive(e){
    const bindindex = e.currentTarget.dataset.bindindex;
    let giftLoadingBoxs = this.data.giftLoadingBoxs.slice(0);
    const flag = !giftLoadingBoxs[bindindex].flag;
    let text = parseInt(giftLoadingBoxs[bindindex].text,10);
    giftLoadingBoxs[bindindex].img2 = `http://www.gether.cn/zhuanzhuan/image/gift/index/heart${flag?'-active':''}.png`;
    giftLoadingBoxs[bindindex].text = flag ? ++text : --text;
    giftLoadingBoxs[bindindex].flag = flag;
    this.setData({
      giftLoadingBoxs
    })
  },

  // 下滑加载
  freeloadmore(){
    wx.showLoading({
      title: '加载中'
    })
    setTimeout( () => {
      wx.hideLoading()
    },1500)
    let that = this
    let url = "http://www.gether.cn/zhuanzhuan/json/giftjson/gift1.json"
    switch (this.data.gift) {
      case 0: 
        url = 'http://www.gether.cn/zhuanzhuan/json/giftjson/gift1.json'
        break;
      case 1: 
        url = 'http://www.gether.cn/zhuanzhuan/json/giftjson/gift2.json'
        break;
      case 2: 
        url = 'http://www.gether.cn/zhuanzhuan/json/giftjson/gift3.json'
        break;
      case 3: 
        url = 'http://www.gether.cn/zhuanzhuan/json/giftjson/gift4.json'
        break;
      case 4: 
        url = 'http://www.gether.cn/zhuanzhuan/json/giftjson/gift5.json'
        break;
      case 5: 
        url = 'http://www.gether.cn/zhuanzhuan/json/giftjson/gift6.json'
        break;
      case 6: 
        url = 'http://www.gether.cn/zhuanzhuan/json/giftjson/gift7.json'
        break;
      case 7: 
        url = 'http://www.gether.cn/zhuanzhuan/json/giftjson/gift8.json'
        break;
      case 8: 
        url = 'http://www.gether.cn/zhuanzhuan/json/giftjson/gift9.json'
        break;
      default:
        console.log("error");
        break;
    }
    if (reqlocked) {
      return //终止
    }
    wx.request({
      url: url,
      header: {
        'Content-Type' :'application/json'
      },
      success:(res) => {
        reqlocked = false
        page++;
        let lists = that.data.giftLoadingBoxs;
        for(let i=0;i<3;i++){
          j++;
          if (j<=res.data.giftlist.length) {
            lists.push(res.data.giftlist[j-1])
          } else {
            j = 0
          }
        }
        that.setData({
          giftLoadingBoxs:lists
        })
        if (page >= 2){
          if (returnTop2 == true){
            that.setData({
              returnTop2: false
            })
          }
        }
      }
    })
    reqlocked = true
  },

  // 返回顶部
  returnScrollTop2(){
    this.setData({
      freetopNum: 0,
      returnTop2: true
    })
  },

  // 触碰移动
  touchMove() {
    this.setData({
      giftFixeLeft:"740rpx"
    })
  },
  touchMoveReturn() {
    this.setData({
      giftFixeLeft:"600rpx"
    })
  },

  // 礼物盒隐藏
  giftGet() {
    this.setData({
      giftMenuHide:true
    })
  }
})