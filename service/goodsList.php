<?php
    include_once "./connectDB.php";
    $sql = "SELECT * FROM `goodslist`";
    $result = mysqli_query($db,$sql);
    # 03-把数据库中的获取所有数据转换为JSON返回
    $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode($data,true);
    
    // header("Content-Type: text/json; charset=UTF-8");
    // $json = file_get_contents("./goodsListData.json");
    // echo $json;
?>