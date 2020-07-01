$(() => {
    $.ajax({
        type:"get",
        url:"../service/goodsList.php",
        dataType:"json",
    }).done(data => {
        console.log(data);
        
    })
})