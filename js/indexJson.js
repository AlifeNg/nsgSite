let data = [];
let redObj = {}
let red = document.querySelector(".style-red")
let red_bar = red.querySelector(".nsgtitile-bar")
let li = red_bar.querySelectorAll("li");
let bar_Array = [];
li.forEach(l=>{
    let bar_title = l.querySelector("a").innerText;
    bar_Array.push(bar_title)
})

let topTitle = red.querySelector(".curr")
let product_ul = red.querySelector(".nsgsplist")
let productDom = product_ul.querySelectorAll("li")

productArray = []
productDom.forEach(li=>{
    let product = {}
    product.img = li.querySelector("img").src
    product.title = li.querySelector(".czg-wqg").innerText
    product.price = li.querySelector(".price-final").innerText
    productArray.push(product)
 })


 redObj.headerText = topTitle.querySelector("a").innerText
 redObj.updateTime = "每天10点上新"
 redObj.barTitleArray = bar_Array
 redObj.productArray = productArray;

 data.push(redObj,pinkObj,orangeObj,greenObj,blueObj,brownObj)
 JSON.stringify(data)

 [
    {
      "headerText": "潮流上装",
      "updateTime": "每天10点上新",
      "barTitleArray": [
        "皮衣/夹克",
        "卫衣",
        "衬衫",
        "牛仔衫",
        "棒球服",
        "外套/风衣"
      ],
      "productArray": [
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05977681498246100_240.jpg",
          "title": "冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S",
          "price": "￥178.00"
        },
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982346005548882_240.jpg",
          "title": "冬季胖子棉衣男士灯芯绒加厚棉服韩版个性外套加肥大码潮男装棉袄 黄色 S",
          "price": "￥169.00"
        },
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982349565989895_240.jpg",
          "title": "冬季情侣连帽面包服男士帅气短款棉衣韩版休闲棉袄潮男装加厚外套 灰色 S",
          "price": "￥189.00"
        },
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982354899298264_240.jpg",
          "title": "冬季情侣连帽面包服男士帅气短款棉衣韩版宽松加厚棉袄潮男装外套 黑色 S",
          "price": "￥169.00"
        }
      ]
    },
    {
      "headerText": "精品裤装",
      "updateTime": "每天10点上新",
      "barTitleArray": [
        "小脚",
        "九分裤",
        "休闲裤",
        "牛仔裤",
        "运动裤",
        "内裤"
      ],
      "productArray": [
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05960745627128595_240.jpg",
          "title": "潮男秋冬季裤子男韩版潮流秋季加绒运动男士休闲裤宽松潮牌束脚工装裤 深灰色 M",
          "price": "￥119.00"
        },
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05960739685357586_240.jpg",
          "title": "裤子男韩版潮流秋冬季运动裤男士加绒宽松休闲束脚长裤潮牌工装裤 黑色 M",
          "price": "￥119.00"
        },
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/15/15_05599992122073239_240.jpg",
          "title": "休闲裤男士裤子男冬季修身小脚韩版潮流秋冬款2017学生哈伦束脚裤 宝蓝 28",
          "price": "￥125.00"
        },
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/18/18_05598228774481982_240.jpg",
          "title": "2017秋季新款休闲裤男士加肥加大码束脚卫裤韩版青年小脚潮男裤子 黑色 M",
          "price": "￥98.00"
        }
      ]
    },
    {
      "headerText": "经典套装",
      "updateTime": "每天10点上新",
      "barTitleArray": [
        "休闲套装",
        "运动套装",
        "西服套装",
        "睡衣内衣"
      ],
      "productArray": [
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/32/32_05542521522860780_240.jpg",
          "title": "薄款长袖卫衣长裤一套装青少年夏天外套运动衣服装男 白色 M",
          "price": "￥128.00"
        },
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/32/32_05539475467236705_240.jpg",
          "title": "青少年夏季韩版修身背心男士运动学生短袖套装男潮流无袖T恤夏装 白色 M",
          "price": "￥89.00"
        },
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/18/18_05533655547367959_240.jpg",
          "title": "夏天两件套装矮个子清爽褶皱休闲运动短袖系带5分裤 军绿 S",
          "price": "￥128.00"
        },
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/25/25_05532167381257098_240.jpg",
          "title": "夏季男士无袖运动睡衣套装休闲背心短裤纯棉夏天背心家居服大码薄 灰色 M",
          "price": "￥129.00"
        }
      ]
    },
    {
      "headerText": "时尚鞋靴",
      "updateTime": "每天10点上新",
      "barTitleArray": [
        "板鞋",
        "帆布鞋",
        "豆豆鞋",
        "懒人鞋",
        "休闲鞋",
        "运动鞋"
      ],
      "productArray": [
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/47/47_06071111289163602_240.jpg",
          "title": "2019春季新款小白鞋男韩版板鞋男士白鞋百搭休闲鞋夏季增高男鞋子 白色 36",
          "price": "￥89.00"
        },
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/47/47_06071103152844782_240.jpg",
          "title": "2019春季透气阿甘鞋男小白鞋男士休闲帆布板鞋韩版潮流男鞋子潮鞋 白黑 36",
          "price": "￥89.00"
        },
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/47/47_06071100369195301_240.jpg",
          "title": "2019春季新款小白鞋男士板鞋男韩版潮鞋休闲鞋百搭白鞋男鞋子夏季 白色 36",
          "price": "￥89.00"
        },
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/47/47_06071097359425992_240.jpg",
          "title": "2019春季新款小白鞋男鞋子韩版夏季板鞋男士百搭白鞋帆布休闲潮鞋 白色 36",
          "price": "￥89.00"
        }
      ]
    },
    {
      "headerText": "精选上装",
      "updateTime": "每天10点上新",
      "barTitleArray": [
        "T恤",
        "开衫",
        "马甲",
        "针织衫/毛衣",
        "防晒衣",
        "毛呢大衣",
        "棉衣/羽绒服"
      ],
      "productArray": [
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/16/16_05543981338282911_240.jpg",
          "title": "潮男士宽松polo衫t恤oversize韩版短袖半袖五分袖 白色 M",
          "price": "￥76.00"
        },
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/32/32_05537733040500746_240.jpg",
          "title": "中国风夏季修身款简约百搭短袖翻领t恤男青年POLO衫韩版学生上衣 黑色 M",
          "price": "￥88.00"
        },
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/18/18_05533670133624046_240.jpg",
          "title": "男韩版修身翻领短袖T恤矮个子撞色polo衫 黑色 M",
          "price": "￥105.00"
        },
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/32/32_05512767271098682_240.jpg",
          "title": "新款翻领polo衫简约白色 保罗衫修身帅气时尚有型男装 黑色 M",
          "price": "￥89.00"
        }
      ]
    },
    {
      "headerText": "精选裤装",
      "updateTime": "每天10点上新",
      "barTitleArray": [
        "五分裤",
        "休闲裤",
        "牛仔裤",
        "运动裤",
        "西裤",
        "内裤"
      ],
      "productArray": [
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/16/16_05533837494926696_240.jpg",
          "title": "夏季男款牛仔短裤薄款修身五分裤韩版时尚中裤夏天五分牛仔裤男潮 浅蓝 M",
          "price": "￥69.00"
        },
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/14/14_05548284464900706_240.jpg",
          "title": "彩色织带牛仔短裤男夏季2017潮流直筒百搭沙滩裤情侣装韩版五分裤 浅蓝色 M",
          "price": "￥85.00"
        },
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/25/25_05531681651489658_240.jpg",
          "title": "短裤男夏天2017新款韩版潮流学生5五分裤青年时尚纯棉个性沙滩裤 黑色 M",
          "price": "￥79.00"
        },
        {
          "img": "https://www.nanshig.com/data/upload/shop/store/goods/32/32_05503335029993919_240.jpg",
          "title": "短裤男士韩版潮流夏天夏季五分四分裤男生港风休闲5分宽松半截裤 藏青 M",
          "price": "￥75.00"
        }
      ]
    }
  ]

    /* 商品列表json */
    let ul = document.querySelector(".list_pic")
    let items = ul.querySelectorAll(".item")
    let list_data = []
    items.forEach(li=>{
    let product = {}
    product.goods_id = li.querySelector(".goods-content").getAttribute("nctype_goods")
    product.store_id = li.querySelector(".goods-content").getAttribute("nctype_store")
    product.goods_img = li.querySelector(".goods-pic").querySelector("img").src
    product.goods_name = li.querySelector(".goods-name").innerText
    product.sale_price = li.querySelector(".sale-price").innerText
    product.market_price = li.querySelector(".market-price").innerText
    product.sales_number = li.querySelector(".sell-stat").querySelectorAll("li")[0].querySelector("a").innerText
    product.comment_number = li.querySelector(".sell-stat").querySelectorAll("li")[1].querySelector("a").innerText
    product.store = li.querySelector(".store").querySelector("a").innerText
    let banner_imgs = []
    let smallImgArr = li.querySelector(".goods-pic-scroll-show").querySelector("ul").querySelectorAll("li")
    smallImgArr.forEach(e =>{
    banner_imgs.push(e.querySelector("img").src)  
    })
    product.banner_imgs = banner_imgs
    list_data.push(product)
    })
    JSON.stringify(list_data)

    [
        {
          "goods_id": " 227338",
          "store_id": "45",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_06266619536950613_240.jpg",
          "goods_name": "男士破洞春秋牛仔夹克男潮2019新款春装上衣韩版潮流褂子春季外套 黑色 M",
          "sale_price": "¥128.00",
          "market_price": "¥168.00",
          "sales_number": "2",
          "comment_number": "0",
          "store": "潮男搭配师",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_06266619536950613_60.jpg"
          ]
        },
        {
          "goods_id": " 227323",
          "store_id": "45",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_06266617360388454_240.jpg",
          "goods_name": "2019新款外套男韩版潮流休闲帅气工装夹克男士灯芯绒春秋季上衣服 黑色 M",
          "sale_price": "¥158.00",
          "market_price": "¥178.00",
          "sales_number": "0",
          "comment_number": "0",
          "store": "潮男搭配师",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_06266617360388454_60.jpg"
          ]
        },
        {
          "goods_id": " 227311",
          "store_id": "45",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_06266614650486239_240.jpg",
          "goods_name": "男生灯芯绒工装外套男韩版潮流加绒夹克ins百搭港风帅气原宿上衣 灰色 M",
          "sale_price": "¥108.00",
          "market_price": "¥128.00",
          "sales_number": "1",
          "comment_number": "0",
          "store": "潮男搭配师",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_06266614650486239_60.jpg"
          ]
        },
        {
          "goods_id": " 227281",
          "store_id": "45",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_06266611090936217_240.jpg",
          "goods_name": "秋冬季男士潮流修身青年水洗外套中长款韩版牛仔夹克纯棉翻领外衣 黑色 M",
          "sale_price": "¥118.00",
          "market_price": "¥228.00",
          "sales_number": "0",
          "comment_number": "0",
          "store": "潮男搭配师",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_06266611090936217_60.jpg"
          ]
        },
        {
          "goods_id": " 227236",
          "store_id": "47",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/47/47_06095305151751796_240.jpg",
          "goods_name": "男t恤五分袖ins夏季上衣服韩版潮流2019新款嘻哈潮牌帅气 黑色上衣 M",
          "sale_price": "¥89.00",
          "market_price": "¥128.00",
          "sales_number": "4",
          "comment_number": "0",
          "store": "潮男公社",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/47/47_06095305151751796_60.jpg"
          ]
        },
        {
          "goods_id": " 227108",
          "store_id": "39",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982354899298264_240.jpg",
          "goods_name": "冬季情侣连帽面包服男士帅气短款棉衣韩版宽松加厚棉袄潮男装外套 黑色 S",
          "sale_price": "¥169.00",
          "market_price": "¥218.00",
          "sales_number": "0",
          "comment_number": "0",
          "store": "好男孩潮品铺",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982354899298264_60.jpg"
          ]
        },
        {
          "goods_id": " 227087",
          "store_id": "39",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982353372811636_240.jpg",
          "goods_name": "冬季情侣连帽棉衣男士宽松帅气面包服韩版加厚棉袄潮男装外套棉服 军绿色 S",
          "sale_price": "¥179.00",
          "market_price": "¥218.00",
          "sales_number": "2",
          "comment_number": "0",
          "store": "好男孩潮品铺",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982353372811636_60.jpg"
          ]
        },
        {
          "goods_id": " 227059",
          "store_id": "39",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982351569257288_240.jpg",
          "goods_name": "冬季休闲工装棉服男士宽松拼接棉衣韩版百搭加厚棉袄潮流男装外套 绿色 S",
          "sale_price": "¥149.00",
          "market_price": "¥189.00",
          "sales_number": "0",
          "comment_number": "0",
          "store": "好男孩潮品铺",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982351569257288_60.jpg"
          ]
        },
        {
          "goods_id": " 227038",
          "store_id": "39",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982349565989895_240.jpg",
          "goods_name": "冬季情侣连帽面包服男士帅气短款棉衣韩版休闲棉袄潮男装加厚外套 灰色 S",
          "sale_price": "¥189.00",
          "market_price": "¥218.00",
          "sales_number": "0",
          "comment_number": "0",
          "store": "好男孩潮品铺",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982349565989895_60.jpg"
          ]
        },
        {
          "goods_id": " 227010",
          "store_id": "39",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982346005548882_240.jpg",
          "goods_name": "冬季胖子棉衣男士灯芯绒加厚棉服韩版个性外套加肥大码潮男装棉袄 黄色 S",
          "sale_price": "¥169.00",
          "market_price": "¥198.00",
          "sales_number": "2",
          "comment_number": "0",
          "store": "好男孩潮品铺",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982346005548882_60.jpg"
          ]
        },
        {
          "goods_id": " 226982",
          "store_id": "39",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05977681498246100_240.jpg",
          "goods_name": "冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S",
          "sale_price": "¥178.00",
          "market_price": "¥218.00",
          "sales_number": "0",
          "comment_number": "0",
          "store": "好男孩潮品铺",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05977681498246100_60.jpg"
          ]
        },
        {
          "goods_id": " 226961",
          "store_id": "39",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05977679217962590_240.jpg",
          "goods_name": "冬季羊羔毛加绒加厚外套男士棉服韩版帅气棉衣潮流短款情侣装棉袄 黑色 S",
          "sale_price": "¥159.00",
          "market_price": "¥198.00",
          "sales_number": "0",
          "comment_number": "0",
          "store": "好男孩潮品铺",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05977679217962590_60.jpg"
          ]
        },
        {
          "goods_id": " 226933",
          "store_id": "39",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05977667423494467_240.jpg",
          "goods_name": "冬季加厚羊羔绒毛短款外套男士修身帅气棉衣韩版休闲情侣棉袄潮装 灰色 S",
          "sale_price": "¥169.00",
          "market_price": "¥218.00",
          "sales_number": "0",
          "comment_number": "0",
          "store": "好男孩潮品铺",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/39/39_05977667423494467_60.jpg"
          ]
        },
        {
          "goods_id": " 226921",
          "store_id": "34",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/34/34_05967532963793338_240.jpg",
          "goods_name": "秋冬装新款2018港风夹克男士外套韩版潮流休闲学生上衣纯色棒球服 黑色 M",
          "sale_price": "¥169.00",
          "market_price": "¥218.00",
          "sales_number": "1",
          "comment_number": "0",
          "store": "衣品家",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/34/34_05967532963793338_60.jpg"
          ]
        },
        {
          "goods_id": " 226909",
          "store_id": "34",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/34/34_05967528436656758_240.jpg",
          "goods_name": "2018新款男女情侣日系复古牛仔外套秋季韩版潮流时尚小清新夹克衫 深蓝色 M",
          "sale_price": "¥139.00",
          "market_price": "¥198.00",
          "sales_number": "0",
          "comment_number": "0",
          "store": "衣品家",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/34/34_05967528436656758_60.jpg"
          ]
        },
        {
          "goods_id": " 226903",
          "store_id": "34",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/34/34_05967525036632821_240.jpg",
          "goods_name": "2018秋季新款港风街头嘻哈加肥大码青少年个性夹克韩版休闲男装潮 花色 M",
          "sale_price": "¥159.00",
          "market_price": "¥218.00",
          "sales_number": "0",
          "comment_number": "0",
          "store": "衣品家",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/34/34_05967525036632821_60.jpg"
          ]
        },
        {
          "goods_id": " 226897",
          "store_id": "34",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/34/34_05967521268194174_240.jpg",
          "goods_name": "冬季ulzzang夹克男士外套棒球服学生韩版潮流运动外衣宽松胖男装 灰色 M",
          "sale_price": "¥189.00",
          "market_price": "¥218.00",
          "sales_number": "0",
          "comment_number": "0",
          "store": "衣品家",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/34/34_05967521268194174_60.jpg"
          ]
        },
        {
          "goods_id": " 226867",
          "store_id": "34",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/34/34_05962462680786488_240.jpg",
          "goods_name": "冬季男棉衣2018新款短款连帽棉袄韩版加厚休闲面包服男装潮牌外套 黑色 M",
          "sale_price": "¥178.00",
          "market_price": "¥218.00",
          "sales_number": "1",
          "comment_number": "0",
          "store": "衣品家",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/34/34_05962462680786488_60.jpg"
          ]
        },
        {
          "goods_id": " 226829",
          "store_id": "25",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/25/25_05961439678003802_240.jpg",
          "goods_name": "春秋季新款男士毛衣韩版套头薄款圆领针织衫休闲线衣外套潮流 黑色 M",
          "sale_price": "¥89.00",
          "market_price": "¥89.00",
          "sales_number": "1",
          "comment_number": "0",
          "store": "潮衣格",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/25/25_05961439678003802_60.jpg"
          ]
        },
        {
          "goods_id": " 226814",
          "store_id": "25",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/25/25_05961435788059457_240.jpg",
          "goods_name": "冬季男士毛衣半高领针织衫2018新款潮流加绒加厚款毛衫韩版打底衫 黑色 M",
          "sale_price": "¥89.00",
          "market_price": "¥138.00",
          "sales_number": "2",
          "comment_number": "0",
          "store": "潮衣格",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/25/25_05961435788059457_60.jpg"
          ]
        },
        {
          "goods_id": " 226688",
          "store_id": "45",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05960736607098325_240.jpg",
          "goods_name": "新款冬季男士外套春秋装休闲夹克ins加绒厚韩版潮流学生衣服 灰色 M",
          "sale_price": "¥159.00",
          "market_price": "¥218.00",
          "sales_number": "1",
          "comment_number": "0",
          "store": "潮男搭配师",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05960736607098325_60.jpg"
          ]
        },
        {
          "goods_id": " 226670",
          "store_id": "45",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05960729469786657_240.jpg",
          "goods_name": "冬季新款男士牛仔外套加绒加厚保暖棉衣韩版修身潮流大码夹克 黑色 M",
          "sale_price": "¥158.00",
          "market_price": "¥398.00",
          "sales_number": "2",
          "comment_number": "0",
          "store": "潮男搭配师",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05960729469786657_60.jpg"
          ]
        },
        {
          "goods_id": " 226655",
          "store_id": "25",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/25/25_05409995396529226_240.jpg",
          "goods_name": "秋冬款日系圆领套头毛衣男韩版修身型针织衫青年潮流长袖拼色线衣 黑色 M",
          "sale_price": "¥98.00",
          "market_price": "¥198.00",
          "sales_number": "0",
          "comment_number": "0",
          "store": "潮衣格",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/25/25_05409995396529226_60.jpg",
            "https://www.nanshig.com/data/upload/shop/store/goods/25/25_05264793123278184_60.jpg",
            "https://www.nanshig.com/data/upload/shop/store/goods/25/25_05409995368926360_60.jpg",
            "https://www.nanshig.com/data/upload/shop/store/goods/25/25_05409995467829414_60.jpg",
            "https://www.nanshig.com/data/upload/shop/store/goods/25/25_05409995503063264_60.jpg"
          ]
        },
        {
          "goods_id": " 226424",
          "store_id": "45",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05923387106302358_240.jpg",
          "goods_name": "卫衣男青少年学生早秋款韩版潮流修身秋季男士外套长袖T恤上衣服 黑色 M",
          "sale_price": "¥89.00",
          "market_price": "¥158.00",
          "sales_number": "1",
          "comment_number": "0",
          "store": "潮男搭配师",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05923387106302358_60.jpg"
          ]
        },
        {
          "goods_id": " 226406",
          "store_id": "45",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05923385552023978_240.jpg",
          "goods_name": "2018早秋卫衣韩版潮流修身圆领套头衫青少年学生百搭春秋男士外套 黑色 M",
          "sale_price": "¥89.00",
          "market_price": "¥158.00",
          "sales_number": "1",
          "comment_number": "0",
          "store": "潮男搭配师",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05923385552023978_60.jpg"
          ]
        },
        {
          "goods_id": " 226388",
          "store_id": "45",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05923383295317790_240.jpg",
          "goods_name": "男士卫衣连帽春秋款青少年学生秋装韩版潮流长袖T恤帅秋季上衣服 黑色 M",
          "sale_price": "¥89.00",
          "market_price": "¥158.00",
          "sales_number": "1",
          "comment_number": "0",
          "store": "潮男搭配师",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05923383295317790_60.jpg"
          ]
        },
        {
          "goods_id": " 226370",
          "store_id": "45",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05923380156947849_240.jpg",
          "goods_name": "男士外套春秋韩版修身薄2018新款秋季潮流帅气男秋装百搭休闲夹克 灰色 M",
          "sale_price": "¥89.00",
          "market_price": "¥168.00",
          "sales_number": "1",
          "comment_number": "0",
          "store": "潮男搭配师",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05923380156947849_60.jpg"
          ]
        },
        {
          "goods_id": " 226352",
          "store_id": "45",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05923376458900934_240.jpg",
          "goods_name": "秋装牛仔外套男迷彩学生港式bf风工装夹克潮流帅气男士牛仔褂上衣 灰色 M",
          "sale_price": "¥138.00",
          "market_price": "¥198.00",
          "sales_number": "0",
          "comment_number": "0",
          "store": "潮男搭配师",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05923376458900934_60.jpg"
          ]
        },
        {
          "goods_id": " 226273",
          "store_id": "45",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05906254977134950_240.jpg",
          "goods_name": "春季2018新款马甲韩版棉衣背心男士修身棉服潮流冬季羽绒马夹外套 黑色 M",
          "sale_price": "¥118.00",
          "market_price": "¥299.00",
          "sales_number": "0",
          "comment_number": "0",
          "store": "潮男搭配师",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05906254977134950_60.jpg"
          ]
        },
        {
          "goods_id": " 226263",
          "store_id": "45",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05906251516314185_240.jpg",
          "goods_name": "春季2018新款马甲韩版棉衣背心男士修身棉服潮流冬季羽绒马夹外套 黑色 M",
          "sale_price": "¥108.00",
          "market_price": "¥199.00",
          "sales_number": "0",
          "comment_number": "0",
          "store": "潮男搭配师",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05906251516314185_60.jpg"
          ]
        },
        {
          "goods_id": " 226253",
          "store_id": "45",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05906246257217290_240.jpg",
          "goods_name": "2018新款加厚加绒棉袄冬季男士外套个性棉衣修身韩版棉服潮流帅气 黑色 M反季折扣价 反季不买 当季被宰",
          "sale_price": "¥128.00",
          "market_price": "¥299.00",
          "sales_number": "0",
          "comment_number": "0",
          "store": "潮男搭配师",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05906246257217290_60.jpg"
          ]
        },
        {
          "goods_id": " 226243",
          "store_id": "45",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05874393794974609_240.jpg",
          "goods_name": "斯潮 爆款新品大吉大利晚上吃鸡绝地求生短袖宽松潮流体t恤港风男 黑色 M",
          "sale_price": "¥69.00",
          "market_price": "¥89.00",
          "sales_number": "1",
          "comment_number": "0",
          "store": "潮男搭配师",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05874393794974609_60.jpg"
          ]
        },
        {
          "goods_id": " 226228",
          "store_id": "45",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05874389236364258_240.jpg",
          "goods_name": "斯潮港风原宿情侣简约圆领字母印花短袖T恤韩版青少年百搭个性潮 蓝色 M",
          "sale_price": "¥68.00",
          "market_price": "¥98.00",
          "sales_number": "0",
          "comment_number": "0",
          "store": "潮男搭配师",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05874389236364258_60.jpg"
          ]
        },
        {
          "goods_id": " 226199",
          "store_id": "45",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05860525139062365_240.jpg",
          "goods_name": "春夏季白色打底衫男韩版修身紧身健身纯棉短袖t恤男士体恤衫潮流 黑色 M",
          "sale_price": "¥78.00",
          "market_price": "¥99.00",
          "sales_number": "1",
          "comment_number": "0",
          "store": "潮男搭配师",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05860525139062365_60.jpg"
          ]
        },
        {
          "goods_id": " 226118",
          "store_id": "45",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05852291601901769_240.jpg",
          "goods_name": "新款潮2018春夏男女纯棉情侣印花短袖T恤宽松半袖 港风 黑色 M",
          "sale_price": "¥79.00",
          "market_price": "¥92.00",
          "sales_number": "0",
          "comment_number": "0",
          "store": "潮男搭配师",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05852291601901769_60.jpg"
          ]
        },
        {
          "goods_id": " 226103",
          "store_id": "45",
          "goods_img": "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05852281830449534_240.jpg",
          "goods_name": "斯潮 男士短袖抖音爆款夏季韩版潮流宽松文艺风T恤个性衣服五分袖 红色 S",
          "sale_price": "¥89.00",
          "market_price": "¥96.00",
          "sales_number": "0",
          "comment_number": "0",
          "store": "潮男搭配师",
          "banner_imgs": [
            "https://www.nanshig.com/data/upload/shop/store/goods/45/45_05852281830449534_60.jpg"
          ]
        }
      ]