<?php
    include_once "./connectDB.php";

    $user_id = $_REQUEST["user_id"];
    //类型要注意匹配 goodsid都是int类型才能用=号 都是varchar用nullif判断
    // 修改了表中goodsid的类型
    $sql = "SELECT cart.*,goodslist.goods_id,goodslist.store_id,goodslist.goods_img,goodslist.goods_name,goodslist.sale_price,goodslist.store FROM cart,goodslist WHERE cart.goodid = goodslist.goods_id AND userid=$user_id";
    $result = mysqli_query($db,$sql);
    $data = mysqli_fetch_all($result,MYSQLI_ASSOC);

    echo json_encode($data,true);
?>