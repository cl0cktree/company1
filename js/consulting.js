$(function(){
	//-----지역 변수의 전역화 정의-------
	var fixability_url = 'http://fixability.co.kr';
	var consulting_url = "./consulting.html"
	var resize_framespeed = 1000/60;
	var nav_num;
	var nav_num_start;
	var contents_head;
	var contents_title;
	var work_years;
	var class_add;
	var frame_year;
	var pc_ham;
	var $language = $('.language');
	var $language_mobile = $('.language-mobile');
	var $name_header=$('.header');
	var $name_header_con=$('.header-con');
	var $name_section = $('.section');
	var $name_footer = $('.footer');
	var footer_contaner=document.querySelector('footer .body-footer-contaner');
	var split_url = this.location.href.split('/').reverse()[0];
	var split_url_load = this.location.href.split('#')[0];
	var split_url_load_re = this.location.href.split('#').reverse()[0];
	//-----------------------------------
	//-----시작시 바로 동적 요소 제어------
	$(document).ready(function(){
		var down_speed = 500;
		var load_top = 129;
		
		function nav_down(){
			nav_timeout = setTimeout(function(){
				$('.nav').css({'margin-top':'0'});
			},down_speed);
		};
		$('body, html').stop().animate({ scrollTop: $('body').offset().top-100},0);
		$('.gnb-wrap, .gnb-modile').find('a').removeClass('on');
		
		if($('.nav').width()==$(window).width()){
			pc_ham = 20;
		}else{
			pc_ham = (($(window).width()-$('.nav').width())/2)+20;
		};
		// $('.mobile-menu').css({'right':pc_ham+'px'});
		// $('.gnb-wrap, .gnb-modile').find('.gnb-1').children('a').addClass('on');
		nav_down();
		// console.log(this.location.href+' / '+split_url_load_re);
		if((split_url_load==fixability_url)||(split_url_load==fixability_url+'/')){
			// console.log(split_url_load_re);
			if (this.location.href.split('#')[1]){
				console.log(this.location.href+' / '+split_url_load_re);
				$('body, html').stop().animate({ scrollTop: $('#'+split_url_load_re).offset().top-load_top},0);
			}
		}
	});
	//----------------------------------
	//-----브라우저 가로폭 변동시 필요 요소 동작-----
	$(window).stop().resize(function(){
		var delay_time;
		if(!delay_time){
			delay_time = setTimeout(function() {
				delay_time=null;
				if($('.header').width()>1063){
					// $('.language, .language-mobile').stop().removeClass('on');
					$('.menu_btn').stop().removeClass('mobile');
					$('.menu_btn input[type=checkbox]').prop('checked',false);
					$name_header.find('.mobile-menu').stop().animate({'right':'-100%'},function(){
						if ($('.background-filter').css('z-index')!=='200'){
							$('.background-filter').stop().fadeOut('300').removeClass('on');
						}
					});
					$name_header.stop().animate({'height':'70px'},50,function(){
						$('.gnb-wrap').find('.depth_wrap').stop().fadeOut(200).animate({'margin-top':'-50%','opacity':'0'});
					});

					$name_header_con.find('.mobile-menu').stop().animate({'right':'-100%'},function(){
						if ($('.background-filter').css('z-index')!=='200'){
							$('.background-filter').stop().fadeOut('300').removeClass('on');
						}
					});
					$name_header_con.stop().animate({'height':'70px'},50,function(){
						$('.gnb-wrap').find('.depth_wrap').stop().fadeOut(200).animate({'margin-top':'-50%','opacity':'0'});
					});
					// if($('.nav').width()==$(window).width()){
					// 	pc_ham = 20;
					// }else{
					// 	pc_ham = (($(window).width()-$('.nav').width())/2)+20;
					// };
					// $('.mobile-menu').css({'right':pc_ham+'px'});
				};
			},resize_framespeed)
		}
	});
	//--------------------------------

	$('.background-filter').on('click',function(){
		$name_header.find('.mobile-menu').stop().animate({'right':'-100%'},function(){
			// $('.background-filter').stop().fadeOut('300').removeClass('on');
			if (($('.background-filter').css('z-index')!=='200')||($('.background-filter').find('.terms-modal')==false)){
				$('.background-filter').stop().fadeOut('300').removeClass('on');
			}
		});
		$name_header_con.find('.mobile-menu').stop().animate({'right':'-100%'},function(){
			// $('.background-filter').stop().fadeOut('300').removeClass('on');
			if (($('.background-filter').css('z-index')!=='200')||($('.background-filter').find('.terms-modal')==false)){
				$('.background-filter').stop().fadeOut('300').removeClass('on');
			}
		});
		
		if($('.menu_btn input[type=checkbox]').prop('checked')==true){
			$('.menu_btn input[type=checkbox]').click();
		}
		
	});
	//-----------------------------------
	//------풀브라우징 및 모바일 GNB 제어--
	$('.gnb-wrap, .gnb-modile, .message-background, .message-background-mobile').on('click keypress','a',function(){
		var gnb_index = $(this).parent('li').data('index');
		var art_index = gnb_index;
		var topminus;
		var top_mobile;
		var color_add;
		var url_add;
		if($('.header, .header-con').width()>1063){
			topminus = 249;
		}else{
			topminus = 249;
			top_mobile = 130;
		};
		// $language.removeClass('on');
		// $('.gnb-wrap, .gnb-modile').find('a').removeClass('on');
		// $('.depth_wrap').children('li').children('a').removeClass();
		$('.gnb-wrap, .gnb-modile').find('.gnb-'+gnb_index).children('a').addClass('on');
		if ((gnb_index=='4')||(gnb_index=='5')){
			alert('준비 중 입니다.');
			$('.gnb-wrap, .gnb-modile').find('a').removeClass('on');
			$('.depth_wrap').children('li').children('a').removeClass();
		}else{
			if (String(gnb_index).length==1){
				if (gnb_index=='1'){
					color_add = 'color_blue';
					url_add = 'direction'
				}else if(gnb_index=='2'){
					color_add = 'color_green';
					url_add = 'kind'
				}else if(gnb_index=='3'){
					color_add = 'color_navy';
					url_add = 'introduce'
				}
				$(this).siblings('.depth_wrap').children('li:eq(0)').children('a').addClass(color_add);
				history.pushState(null,null,fixability_url+'/#mark_'+gnb_index+'_1');
				$('body, html').stop().animate({ scrollTop: $('.article_'+art_index).find('.contents').find('.slogan-box').offset().top-topminus },300);
				history.pushState(null,null,fixability_url);
			}else{
				var sub_index= $(this).parent('li').data('index');
				var split_sub = sub_index.split('_');
				var split_sub_1 = split_sub[1];
				if (split_sub[0]=='1'){
					color_add = 'color_blue';
					url_add = 'direction'
					menu_color();
				}else if(split_sub[0]=='2'){
					color_add = 'color_green';
					url_add = 'kind'
					menu_color();
				}else if(split_sub[0]=='3'){
					color_add = 'color_navy';
					url_add = 'introduce'
					menu_color();
				}else{
					alert('준비 중 입니다.');
					$('.gnb-wrap, .gnb-modile').find('a').removeClass('on');
					$('.depth_wrap').children('li').children('a').removeClass();
				}
				function menu_color(){
					$(this).addClass(color_add);
					history.pushState(null,null,fixability_url+'/#mark_'+sub_index);
					if($('.header, .header-con').width()>1063){
						$('body, html').stop().animate({ scrollTop: $('.mark-'+sub_index).offset().top-topminus },300);
					}else{
						$('body, html').stop().animate({ scrollTop: $('.mark-'+sub_index).offset().top-top_mobile },300);
					};
					history.pushState(null,null,fixability_url);
				};
			}
		}
		// $('body, html').stop().animate({ scrollTop: $('.article_'+art_index).find('.contents').find('.slogan-box').offset().top-topminus },300);
		// history.pushState(null,null,fixability_url+'index.html/'+url_add);
	});
	//----------------------------------
	//-----외부컨탠츠 가져오기------------
		// var bell_sum = 'http://webmail.fixability.co.kr/admin/mail_adminBoardList.php?bbsType=B&bbsManageIdx=14 #contents'
		// $('.board_ceo').load(bell_sum);
	//-----------------------------------
	//-----footer 클릭시 각 동작 모음----
	$name_footer.find('.terms').on('click','a',function(){
		var datasum;
		$('.background-filter').stop().fadeIn('300').addClass('on');
		if ($(this).is('.terms-service')){
			datasum = './data/terms.html .data-service';
		}else if($(this).is('.information-policy')){
			datasum = './data/terms.html .data-policy';
		}else if($(this).is('.standard-terms')){
			datasum = './data/terms.html .data-terms';
		}else if($(this).is('.rejection-email')){
			datasum = './data/terms.html .data-rejection';
		}else if($(this).is('.recruit')){
			datasum = './data/terms.html .data-recruit';
		}
		$('.background-filter').css({'z-index':'200'});
		$('.background-filter').load(datasum);
	});
	$('.background-filter').on('click','.close-btn',function(){
		$('.background-filter').stop().fadeOut('300').removeClass('on');
		$('.background-filter').css({'z-index':'-1'});
		$('.background-filter').html('');
	});
	$name_footer.on('click','.phon-num',function(){
		if (navigator.userAgent.match(/android/i)) {
			location.href='tel:02-6952-8892','_self';
		} else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)){
			location.href='tel:02-6952-8892','_self';
		}else{
			alert('모바일에서만 가능합니다.');
		}
	});
	//----------------------------------

	return false;
});
