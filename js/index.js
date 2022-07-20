import $ from 'jquery'
$(function(){
//     //  $('body').css('background-color','red')
      let windowW = $(window).width();
      console.log(windowW);
      if(windowW >= 1300){
        nav();
        subMenu();
        topScroll();
      }
      else if(windowW < 1300 && windowW >= 980){

      }
      else if(windowW < 980 && windowW >= 580){
        mobileNav();
        subMenu();
        topScroll();
        gallery();
      }
      else if(windowW < 580){
        lastNav();
        topScroll();
        gallery();
      }
      // 
      function nav(){
        $('nav>ul>li>a').on('click',function(e){
          let navHref = $(this).attr('href');
          let aPos = $(navHref).offset().top;
          console.log(aPos);
          $('html,body').animate({scrollTop:aPos},800);
          return false;
        })
      }
      function subMenu(){
        $('aside ul>li>a').on('click', function(e){
          let navHref = $(this).attr('href');
          let aPos = $(navHref).offset().top;
          console.log(aPos);
          $('html,body').animate({scrollTop:aPos},800);
          return false;
        })
      }
      function topScroll(){
        $('aside p.top').on('click', function(e){
          $('html,body').animate({scrollTop:0},800)
        })
      }
      // table, mobile
      function mobileNav(){
        $('header p.btn').on('click', function(e){
          $('nav').animate({left:'0'},800);
          $(this).hide();
        });
        $('nav>ul>li>a').on('click', function(e){
          let navHref = $(this).attr('href');
          let aPos = $(navHref).offset().top;
          $('nav').css('left','-480px');
          console.log(aPos);
          $('html,body').animate({scrollTop:aPos},800);
          $('header p.btn').show();
          return false;
        })
        $('nav .btn').on('click', function(e){
          $('nav').animate({left:'-480px'},300);
          $('header p.btn').show();
        })
      }
    //   
      function lastNav(){
     $('header p.btn').on('click', function(e){
      $('nav').animate({left:'0'},800);
      $(this).hide();
    });
    $('nav>ul>li>a').on('click', function(e){
      let navHref = $(this).attr('href');
      let aPos = $(navHref).offset().top;
      $('nav').css('left','-100vw');
      console.log(aPos);
      $('html,body').animate({scrollTop:aPos},800);
      $('header p.btn').show();
      return false;
    })
    $('nav .btn').on('click', function(e){
      $('nav').animate({left:'-100vw'},300);
      $('header p.btn').show();
    })
  }
  //   box04 gallery
    function gallery(){
    $('#galley .prev').on('click',function(){
	  $('#galley #all>figure:last').prependTo('#all')
	   })

	  $('#galley .next').on('click',function(){
	  $('#galley #all>figure:first').appendTo('#all')
    })
  }
})


