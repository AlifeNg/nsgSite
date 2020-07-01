$(() => {
    $.ajax({
        type:"get",
        url:"../service/goodsList.php",
        dataType:"json",
    }).done(data => {
        data.forEach((item,idx) => {
            let bannerImg = []
            item.banner_imgs.forEach(imgStr => {
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
})