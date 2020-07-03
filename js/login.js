$(()=>{
    $(".login_button").click(function() {
        let username = $.trim($("#username").val());
        let password = $.trim($("#password").val());
        if (username.length == 0) {
            alert("请输入用户名");
            return;
        }

        if (password.length == 0) {
            alert("请输入密码");
            return;
        }

        let data = {
            username,
            password
        };

        /* .... */
        $.ajax({
            type: "post",
            url: "../service/login.php",
            data,
            dataType: "json",
            success: function(response) {
                if (response.status == "success") {
                    console.log(response);
                    localStorage.username = username;
                    localStorage.id = response.data.userId;
                    window.location.href = "../html/index.html";
                } else {
                    alert(response.msg);
                }
            }
        });

    })
})