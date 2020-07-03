$(() => {
    (new Slider(["../img/banner_1.jpg", "../img/banner_2.jpg"])).init();

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
    
    // 首页楼层
    $.ajax({
        type:"get",
        url:"../service/index.php",
        dataType:"json",
    }).done(data => {
        // console.log(data)
        data.forEach(item => {
            
            console.log(item)
            let targetBarArr = []
            item.barTitleArray.forEach(liString => {
                targetBarArr.push(`<li><a>${liString}</a></li>`)
            });
            // 导航栏的数据
            let barTitleHtml = targetBarArr.join("");
            // console.log(barTitleHtml)
            
            // 商品的数据
            let productHtml = item.productArray.map(product =>{
                return `<li>
                <div class="goods">
                    <img src="${product.img}" alt="">
                    <a href="#">${product.title}</a>
                    <div>
                        <span>${product.price}</span>
                        <button class="goCart">去下单</button>
                    </div>
                </div>
            </li>`
            }).join("")
            // console.log(productHtml)
            
            let html = `<div class="product_list">
                <div class="goods_header">
                    <div class="goods_header_left">${item.headerText}</div>
                    <div class="goods_header_right">${item.updateTime}</div>
                </div>
                <div class="goods_navi">
                    <ul>
                    ${barTitleHtml}
                    </ul>
                </div>
                <div class="goods_list">
                    <ul>
                    ${productHtml}
                    </ul>
                </div>
            </div>`
        
            $(".product_mode").append(html)
        });
        $(".product_mode").trigger("create");
        
        
    })
})