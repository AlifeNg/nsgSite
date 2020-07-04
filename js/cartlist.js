$(() => {
    
    let user_id = localStorage.getItem("id") || "";
    /* 发请求获取购物车的商品信息 */
    $.ajax({
        url: "../service/cartList.php",
        data: { user_id },
        dataType: "json"
    }).done(data => {
        // data = dataTool(data);
        // renderUI(data);
        console.log(data);
        let arr = [];
        data.forEach(item => {
            let result = arr.filter((ele) => ele.store == item.store);
            if (result.length == 0) {
                arr.push({ store: item.store, goods: [] });
            }
            console.log(3333,arr);
        })

        /* 把所有的数据依次加入到对象中去 */
        data.forEach(item => {
            arr.forEach(ele => {
                if (ele.store == item.store) {
                    ele.goods.push(item);
                }
            })
        })

        let html = "";
        let sum = 0;
        arr.forEach(data =>{
            let listHtml = data.goods.map(item=>{
                let salePrice = item.sale_price.substring(1,item.sale_price.length);
                let storeSum = item.num * salePrice;
                console.log("storeSum",storeSum);
                sum += storeSum;
                console.log(sum); 
                return ` <ul class="good" data-goodid=${item.goods_id}>
                <li class="good_chk">
                    <input type="checkbox" id="good_check" class="one_check">
                    <img src="${item.goods_img}" alt="">
                </li>
                <li class="good_name">
                    <a href="">${item.goods_name}</a>
                </li>
                <li class="good_price">
                    <span>${item.sale_price}</span>
                </li>
                <li class="num">
                    <button>-</button>
                    <input type="text" value="${item.num}">
                    <button>+</button>
                </li>
                <li class="good_sum">
                    <span>￥${storeSum}</span>
                </li>
                <li>
                    <button>收藏</button>
                    <button>删除</button>
                </li>
            </ul>`
            }).join("");

            let cartBoxHtml = `
            <div class="stores_goods_list">
                <div class="store">
                <h5>店铺：${data.store}</h5>
                ${listHtml}
            </div>`
            html += cartBoxHtml;
        })

        $(html).insertAfter(".cart_hd");
        $(".sum_price > span").text(`￥${sum}`)

    })

    /*
    ` <div class="stores_goods_list">
    <div class="store">
        <h5>店铺：潮男搭配师</h5>
    </div>

            <ul class="good">
                <li class="good_chk">
                    <input type="checkbox" id="good_check" class="one_check">
                    <img src="../img/logo.png" alt="">
                </li>
                <li class="good_name">
                    <a href="">男士破洞春秋牛仔夹克男潮2019新款春装上衣韩版潮流褂子春季外套 黑色 M</a>
                </li>
                <li class="good_price">
                    <span>128.00</span>
                </li>
                <li class="num">
                    <button>-</button>
                    <input type="text" value="3">
                    <button>+</button>
                </li>
                <li class="good_sum">
                    <span>128</span>
                </li>
                <li>
                    <button>收藏</button>
                    <button>删除</button>
                </li>
            </ul>
    </div>`
    */
})