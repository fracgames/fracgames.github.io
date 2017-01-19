var a = getBrowser();

function change() {
    var width = document.body.clientWidth;
    //var about = document.getElementsByClassName('about')[0];
    var title2 = document.getElementById('title2');
    var my2Title = document.getElementsByClassName('my2Title')[1];
    if (a == "ie" && width < 992) {
        title2.innerHTML = "艾博纳是条狗，<br>我可以告诉你哦，但你不许说出去";
    } else if (width > 650 && width < 992) {
        title2.innerHTML = "艾博纳是条狗，<wbr>我可以告诉你哦，但你不许说出去";
        // about.innerHTML = "About me: <br> Name: Abner | Designer. | Love beauty. | Geek. | Love technology. | Besides,| Pessimism";
        // about.className = "col-xs-12 col-sm-3 normalShadow about"
    }
    else if (width <= 650){
        title2.innerHTML = "艾博纳是条狗，<wbr>我可以告诉你哦，<wbr>但你不许说出去";
        my2Title.innerHTML = "看！！这里有个<a href='aSimpleGame/index.html' style='color:rgba(255,255,255,0.7)'><b>小游戏</b></a>，<wbr>我只给你一个人玩哦";
    }
     else {
        title2.innerHTML = "艾博纳是条狗，<wbr>我可以告诉你哦，<wbr>但你不许说出去";
        // about.innerHTML = "About me: <br><br> Name: Abner <br> Designer. <br> Love beauty. <br> Geek. <br> Love technology. <br> Besides,<br> Pessimism";
        // about.className = "col-xs-4 col-sm-3 col-sm-push-9 col-xs-push-8 normalShadow about";
    }
}