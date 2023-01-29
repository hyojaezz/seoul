var front = {
    st: 0,
    _scrollTop: 0,

    init: function(){
        this.mainSlider();
        this.imgBannerSlide();
        this.topBtn();
        this.mHeader();
        this.asideMenu();
        this.snbMenu();
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

    // 반응형  header 영역
    mHeader: function() {
        // nav 열림
        $('#mGnb .btn_nav').on('click', function(){
            $('#nav').show();
        });
        // nav 닫힘
        $('#nav .btn_nav_close').on('click', function(){
            $('#nav').hide();
        });

        var btnDepth = $('.m_all_menu>li>a');
        var btnDepthList = $('.m_all_menu>li');
        var btnDepth3 = $('.depth3_more>a');

        // nav 좌측 메뉴
        btnDepth.each(function(){
            btnDepth.click(function(){
                btnDepthList.removeClass('active');
                $(this).parent().addClass('on').siblings().removeClass('on');
                $(this).siblings('.depth2').show().parent().siblings().find('.depth2').hide();
            });
        })

        // depth3 처리
        btnDepth.on('click', function(){
            $('.depth3').removeClass('on');
        });

        btnDepth3.on('click',function(){
           $(this).siblings().toggleClass('on').parent().siblings().find('.depth3').removeClass('on');
        });

        // 검색영역 버튼
        $('#mGnb .btn_search').on('click', function() {
            $('#mGnb .header_search').toggleClass('on');
            // $('#mGnb').toggleClass('on');
        });
    },
    // aside 영역
    asideMenu:function(){

        var asideMenu = $('.snb>ul>li');

        // $('.snb>ul>li>a').click(function(e){
        //     e.preventDefault();
        //     $(this).parent().toggleClass('on').siblings().removeClass('on');
        // });

        $('.snb .menu').each(function(){
            $('.snb .menu>a').click(function(){
                $(this).parent().toggleClass('on')
            });
        });
    },

    // 반응형 SNB 영역
    snbMenu: function(){
        $('.m_snb h2>a').on('click',function(){
            $(this).toggleClass('on');
            $('.m_snb .m_snb_menu').slideToggle();
        });
    },
    


}




$(document).ready(function() {
    front.init();

    $(window).scroll(function() {
        front._scrollTop = $(document).scrollTop();  
    
        front.topBtn();
      });

});



