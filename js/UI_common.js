var front = {
    st: 0,
    _scrollTop: 0,

    init: function(){
        this.mainSlider();
        this.imgBannerSlide();
        this.topBtn();
    },

    mainSlider: function() {
        $('.main_slide01').bxSlider({
            auto: true,
            autoControls: true,
            stopAutoOnClick: true,
            slideWidth: 690,
            captions: true,
            pager: true,
            pagerType: 'short',
            touchEnabled: false,
        });

        $('.main_slide02').bxSlider({
            auto: true,
            autoControls: true,
            stopAutoOnClick: true,
            slideWidth: 690,
            captions: true,
            pager: true,
            pagerType: 'short',
            touchEnabled: false,
        });

        $('.btn_slide01').on('click', function() {
            $('.main_slide01_wrap').show();
            $('.main_slide02_wrap').hide();
            $('.btn_slide01').addClass('on')
            $('.btn_slide02').removeClass('on')
        });

        $('.btn_slide02').on('click', function() {
            $('.main_slide02_wrap').show();
            $('.main_slide01_wrap').hide();
            $('.btn_slide02').addClass('on')
            $('.btn_slide01').removeClass('on')
        });

        $('.main_slide01_wrap .bx-stop').on('click', function(){
            $(this).hide();
            $('.main_slide01_wrap .bx-start').css('display', 'inline-block');
        });

        $('.main_slide01_wrap .bx-start').on('click', function(){
            $(this).hide();
            $('.main_slide01_wrap .bx-stop').css('display', 'inline-block');
        });

        $('.main_slide02_wrap .bx-stop').on('click', function(){
            $(this).hide();
            $('.main_slide02_wrap .bx-start').css('display', 'inline-block');
        });

        $('.main_slide02_wrap .bx-start').on('click', function(){
            $(this).hide();
            $('.main_slide02_wrap .bx-stop').css('display', 'inline-block');
        });

    },

    // 하단 이미지 배너 영역
    imgBannerSlide:function() {
        $('.img_banner_slide').bxSlider({
            auto: true,
            autoControls: true,
            stopAutoOnClick: true,
            slideWidth: 355,
            captions: true,
            pager: true,
            pagerType: 'short',
            touchEnabled: false,
            minSlides: 3,
            maxSlides: 3,
            slideMargin: 45,
        });

        $('.img_banner_wrap .bx-stop').on('click', function(){
            $(this).hide();
            $('.img_banner_wrap .bx-start').css('display', 'inline-block');
        });

        $('.img_banner_wrap .bx-start').on('click', function(){
            $(this).hide();
            $('.img_banner_wrap .bx-stop').css('display', 'inline-block');
        });
    },
    // 탑버튼
    topBtn: function() {
        console.log(front._scrollTop);

        if(front._scrollTop > 0) {
            $('.btn_top').addClass('on');
        } else {
            $('.btn_top').removeClass('on');
        }
    },



}




$(document).ready(function() {
    front.init();

    $(window).scroll(function() {
        front._scrollTop = $(document).scrollTop();  
    
        front.topBtn();
      });

});