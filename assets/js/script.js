$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	//---------------------文字縮放設定----------------------
	$(".js-font-size").find("a").click(function () {
		$(".js-font-size").find("a").removeClass("now");
		$(this).addClass("now");
		if ($(this).attr("data-size") == "txt-sm") {
			$("body").css('font-size', '.9em');
		} else if ($(this).attr("data-size") == "txt-md") {
			$("body").css('font-size', '1em');
		} else if ($(this).attr("data-size") == "txt-lg") {
			$("body").css('font-size', '1.1em');
		}
		return false;
	})

	//頁籤按鈕切換設定
	$(".js-toggle-menu").find('.js-toggle-btn').click(function () {
		$(this).parents(".js-toggle-menu").find('.js-toggle-btn').removeClass('active');
		$(this).addClass("active");
		$(this).parents(".js-toggle-menu").find('span').removeClass('ti-arrow-circle-down').addClass('ti-arrow-circle-right');
		$(this).find('span').removeClass('ti-arrow-circle-right').addClass('ti-arrow-circle-down');

	});

	//手風琴按鈕切換設定
	$(".js-accordion-menu").find('button').click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this).find('span').removeClass('ti-angle-up').addClass('ti-angle-down');
		} else {
			$(this).parents(".js-accordion-menu").find('button').removeClass('active');
			$(this).parents(".js-accordion-menu").find('button').find('span').removeClass('ti-angle-up').addClass('ti-angle-down');
			$(this).addClass("active");
			$(this).find('span').removeClass('ti-angle-down').addClass('ti-angle-up');
		}

	});


	//地圖切換按鈕設定
	$(".js-side-toggle").find(".js-toggle-menu").find(".btn").click(function () {
		$(".js-side-menu").addClass("open");
		$(".js-side-toggle").addClass("open");
		$(".js-side-content").addClass("open");
	})
	//地圖收合按鈕設定
	$(".js-map-toggler").click(function () {
		if($("#layer-all").hasClass("show")){
			$("#layer-all").removeClass("show");
			$("#locate-all").addClass("show");
		}else{
			$("#locate-all").addClass("show");
		}

		$(".js-side-menu").toggleClass("open");
		$(".js-side-toggle").toggleClass("open");
		$(".js-side-content").toggleClass("open");
		$(this).toggleClass("open");
		if($(this).hasClass("open")){
			$('[data-bs-target="#locate-all"]').addClass("active");
		}else{
			$(".js-side-toggle").find(".js-toggle-menu").find(".btn").removeClass("active")
		}
		
	});

	//----------------gotop功能-----------------
	$(".gotop").click(function () {
		$("html,body").animate({ scrollTop: 0 }, 300);
		return false;
	})
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) { //若目前的位置距離網頁頂端>100px
			$(".gotop").fadeIn("fast");
			$("header").addClass("godown");
		} else {
			$(".gotop").stop().fadeOut("fast");
			$("header").removeClass("godown");
		}

		var index = 0;//各單元區塊順序
		var st = $(window).scrollTop();//現在捲軸位置
		var wh = $(window).height();//視窗高度

		/*$(".section").each(function (i, element) {//選單標示設定
			if (st > $(".section").eq(i).offset().top + $(".section").eq(i).outerHeight(true) / 2 - wh) {//i離開畫面時
				index = i;
				$('nav li').find("a").css('color', '#FFFFFF');
				$('nav li').eq(index - 1).find("a").css('color', '#FCE76D');
			}
			
			if (st < $(".section").eq(1).offset().top - 84 ) {
				$('nav li').find("a").css('color', '#FFFFFF');
			}
		});*/
	});

	//主選單設定
	/*$(".navbar-nav").find('a').click(function () {
		var section = $(this).attr("href");
		$("html,body").animate({ scrollTop: $(section).offset().top + 100 }, 300);
		$(".navbar-collapse").removeClass("show");
		return false;
	});*/
	
	//消息輪播設定
	$('.flood-slider').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		  {
			breakpoint: 1200,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
	  });

	  $('.disaster-slider').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		  {
			breakpoint: 1200,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
	  });

	RESIZE();

	function RESIZE() {
		WINDOWH = $(window).height();
		WINDOW = $(window).width();

		if (WINDOW < 1200) {
			$("#locate-all").removeClass("show");
		} else {
			$("#locate-all").addClass("show");
		}
	}


})//JS尾端	