<?php
$db = mysqli_connect("127.0.0.1:8889", "root", "root", "nsg_site");

if (!$db) {
  die('连接错误: ' . mysqli_error($db));
}
?>