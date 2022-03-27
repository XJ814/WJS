$(function () {
    //导航栏点击下面变色
    $(".navbar-nav > li").click(function () {
        if ($(this)[0].className == "navbar-nav-right-li"){
            $(".navbar-nav > li").removeClass("active")
            $(this).addClass("active")
        }else {
            $(".navbar-nav > li").removeClass("active")
            $(this).addClass("active")
        }
    })


    //轮播图动态添加
    $(window).resize(function () {
        width = $(this).width();
        if (width >= 768) {
            $(".item").each(function (key, item) {
                var imgUrl = $(this).data('bigImg')
                str = `<a href="#" class="pcImg" style="background-image: url('${imgUrl}')"></a>`
                $(this).html(str)
            })
        }else {
            $(".item").each(function (key, item) {
                var imgUrl = $(this).data('smellImg')
                str = `<a href="#" class="phoneImg"><img src="${imgUrl}"></a>`
                $(this).html(str)
            })
        }
    }).trigger('resize')


    //页面滑动轮播事件
    var carousel= $(".carousel")[0];//将获取到的 jq 对象转换为 dom 对象
    var startX = 0;//触摸的起始位置
    var endX = 0;//触摸的结束位置
    // 监听开始触摸手机屏幕
    carousel.addEventListener('touchstart',function(event){
        startX = event.targetTouches[0].clientX;
    });
    //  监听手指离开手机屏幕
    carousel.addEventListener('touchend',function(event){
        endX = event.changedTouches[0].clientX;
        if(endX - startX >0){
            $('.carousel').carousel("prev");
        }else {
            $('.carousel').carousel("next");
        }
    });

    //工具提示初始化
    $('[data-toggle="tooltip"]').tooltip()

    //获取滑动导航栏的宽
    var lis = $(".wjs_products .nav-tabs li");
    var ul = $(".wjs_products .nav-tabs");
    var totalWidth = 0;//li宽度的和
    lis.each(function(item,index){
        var w = $(this).outerWidth(true);
        totalWidth += w;
    });
    $(ul).width(totalWidth);
    var myScroll = new IScroll('#wjs_nav_parent',{
        scrollX: true,
        scrollY: false
    });

})