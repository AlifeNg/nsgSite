$(()=>{
    $("#username").val("zs");
    $("#password").val("123");

    let options = {
        "username": {
            reg: `/^[a-zA-Z]{2,6}$/.test(val)`,
            msg: "用户名不规范！"
        },
        "password": {
            reg: `/^[a-zA-Z0-9]{3,6}$/.test(val)`,
            msg: "密码不规范！"
        },
        "imageCode": {
            reg: "imgCodeTarget == val",
            msg: "输入的验证码不正确！！！",
        }
    }

    $(".login_mode input").blur(function() {
        let action = this.id;
        let val = $.trim($(this).val());
        if (eval(options[action].reg)) {
            console.log("++++");
            // $(this).parents(".error_tips").text("qqqqqqqq");
            // $(this).next().text("");
            // $(this).parents(".form-item").removeClass("form-group-error")
        } else {
            alert(options[action].msg)
            return;
        }
    });



    let imgCodeTarget;
    let captcha = new Captcha({ lineNum: 10, dotNum: 3, fontSize: 40, length: 4, content: "012345432424542" });

    captcha.draw(document.querySelector('#captcha'), r => {
        imgCodeTarget = r;
        console.log(r, '验证码1');
        /* 当用户点击图形变化验证码的时候需要重新校验 */
        // $("#imageCode").trigger("blur");
    });

    $("#registerBtn").click(function() {
        $("#username,#imageCode,#password").trigger("blur");
        /* 003-发送网络请求把注册相关的信息提交给服务器 */
        let data = {
            username: $.trim($("#username").val()),
            password: $.trim($("#password").val()),
        }

        $.ajax({
            data: data,
            type: "post",
            dataType: "json",
            url: "../service/register.php",
            success(response) {
                console.log(response);
                if (response.status == "success") {
                    alert(response.msg);
                    window.location.href = "..//html/login.html";
                } else {
                    alert(response.msg);
                }
            }
        })
    })
})