$(() => {

    let showText = localStorage.username ? localStorage.username + ",欢迎你！" : "请登录";
    $(".login_btn > a").text(showText);

    if (localStorage.username) {
        $(".register_btn > a").text("注销")
        $(".register_btn").click(()=>{
            localStorage.clear();
            window.location.href = "../html/index.html";
        })
    }else{
        $(".register_btn").click(()=>{
            window.location.href = "../html/register.html";
        })
    }

    $.ajax({
        type:"get",
        url:"../service/goodsList.php",
        dataType:"json",
    }).done(data => {
        data.forEach((item,idx) => {
            let bannerImgs =  JSON.parse(item.banner_imgs)
            let bannerImg = []
            bannerImgs.forEach(imgStr => {
                bannerImg.push(`<li><img src="${imgStr}" alt=""></li>`)
            });
            let smallBannerHtml = bannerImg.join("");
            let html = `
            <div class="good" data-goodid="${item.goods_id}" data-storeid="${item.store_id}" data-idx="${idx}">
                <div class="goods_info">
                    <div class="goods_img"><img src="${item.goods_img}" alt=""></div>
                    <ul class="goods_small_img">${smallBannerHtml}</ul>
                    <div class="goods_title"><a href="">${item.goods_name}</a></div>
                    <div class="price">
                        <em class="real_price">${item.sale_price}</em>
                        <em class="discount_price">${item.market_price}</em>
                    </div>
                </div>
                <div class="goods_other_info">
                    <ul class="first_mode">
                        <li class="goods_sale">
                            <span>${item.sales_number}</span>
                            <em>商品销量</em>
                        </li>
                        <li class="goods_comment">
                            <span>${item.comment_number}</span>
                            <em>用户评论</em>
                        </li>
                    </ul>
                    <div class="goods_store"><span>${item.store}</span></div>
                    <div class="add_cart"><button>加入购物车</button></div>
                </div>
            </div>`
            $(".goods_list_content").append(html);
        });
    })

    $("body").delegate(".good","mouseover",function(){
        $(this).children().eq(1).removeClass('goods_otherInfo_hidden')
        $(this).children().eq(1).addClass('goods_otherInfo_show')
    })
    $("body").delegate(".good","mouseout",function(){
        $(this).children().eq(1).removeClass('goods_otherInfo_show')
        $(this).children().eq(1).addClass('goods_otherInfo_hidden')
    })

    // 添加购物车
    $(".goods_list_content").on("click", ".add_cart", function() {
        let user_id = localStorage.getItem("id") || "";
        let user_name = localStorage.getItem("username") || "";
        let good_id = $(this).parent().parent().attr("data-goodid");
        let store_id = $(this).parent().parent().attr("data-storeid");
        if (user_id && user_name) {
            /* 发请求，执行添加到购物车 */
            $.ajax({
                url: "../service/addCart.php",
                data: { user_id, good_id ,store_id}
            }).done(data => {
                alert(data)
            })
        } else {
            /* 跳转去登录 */
            location.href = "../html/login.html"
        }
    })
    // 点击购物车
    $(".car_button").click(()=>{
        location.href = "../html/cartlist.html"
    })

})