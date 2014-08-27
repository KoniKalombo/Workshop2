var nbSlideHome = $("#CatalogSales .slideHome").length;
var windowWith  = $(window).width();
var $imgIndex    = 0; 


/*********************************************************/
/*         SLIDE   HOME DESIGN - TOP                     */
/*********************************************************/
var PositionMenu = $(".menuHome").offset();
/* Next */

$('.next').click(function() {
  if($imgIndex < ($("#CatalogSales .slideHome").length -1))
    $imgIndex++;
  else
    $imgIndex = 0;

  $("#CatalogSales").animate({left: -($imgIndex * 100) +'%'}, 800, 'easeInQuart'); // Dynamic value
});



/*********************************************************/
/*                     SLIDE PRODUCT                     */
/*********************************************************/

$('.salesProduct').each(function(){
  var SalesIndex    = 0; 
  var nbProducts = $(this).find(".SPcontent img").length;
  $(this).find(".SPcontent").width(nbProducts*100+'%');
 // console.log(nbProducts*100+'%');

$(this).find('a.nxt').click(function(e) {
  e.preventDefault();

  if(SalesIndex < (nbProducts -1))
    SalesIndex++;
  else
    SalesIndex = 0;

  $(this).parent().prev().animate({left: -(SalesIndex * 100) +'%'}, 800, 'easeInQuart'); // Dynamic value
});

});


/*********************************************************/
/*                    SCROLL HIDE/SHOW MENU              */
/*********************************************************/

$(window).scroll(function() {

  if($(window).scrollTop()>600) { 
    $(".timeline").hide();
    $(".menuHome").addClass("Menuhomefixed");
  } else {
    $(".timeline").show();
     $(".menuHome").removeClass("Menuhomefixed");
  }


});












 $(".slideHome").width(windowWith);
 $("#CatalogSales").width(windowWith*nbSlideHome);


 $(".sidebar").load("files/sidebar-maria.html");
      $("header").load("files/header.html", function( response, status, xhr ) {

          $('.ui.dropdown').dropdown();
      });

      	$('.ui.sidebar').sidebar('attach events', ".menuIcon");
        $(".menuIcon").click(function(event) {
            if($(".ui.sidebar").hasClass("active")) {
            	$(".menuIcon").addClass("open");
      			}
              	else {
              		$(".menuIcon").removeClass("open");
      			}
        });

        $('.3quart').click(function() {
                /* GRID */
                $('.sales').addClass("sales3q");
                $('.ma').addClass("ma3q");
                $('.todelete').hide();
                $(".mason").masonry({
                  columnWidth: 314,
                  "gutter": 20,
                  itemSelector: '.sales3q'
                });

              $('.sales3q img:not(".plusg")').each(function(){

                var src = $(this).attr('src'); // "images/Grille/02.jpg"
                var tarr = src.split('/');      // ["images","Grille","02.jpg"]
                var file = tarr[tarr.length-1]; // 02.jpg
                var newSrc = "images/Grille2/"+file;

                $(this).attr("src",newSrc);
               

              });
        });


        $(".16neuf").click(function() {
                /* GRID */
                $('.sales').removeClass("sales3q");
                $(".mason").masonry('destroy');
                $('.ma').removeClass("ma3q");
                $('.todelete').show();
                $('.sales img:not(".plusg")').each(function(){

                var src = $(this).attr('src'); // "images/Grille/02.jpg"
                var tarr = src.split('/');      // ["images","Grille","02.jpg"]
                var file = tarr[tarr.length-1]; // 02.jpg
                var newSrc = "images/Grille/"+file;

                $(this).attr("src",newSrc);
               

              });
        });

        $('.ui.accordion')
          .accordion();

         $('.ui.checkbox')
          .checkbox();

        
        $(".searchInput").keypress(function() {
            if($(this).val() == "Je" || $(this).val() == "je") {
            	$('.searchResultsWrapper').fadeIn('fast');
          	}
        });

        $(".addToFavoriteLink").click(function() {
        	$(this).addClass("active");
		    });
        
        var TOffsetResults = [];
        var iOffestresults = 0;
        $(".wantedResult").click(function() {
        	$('.searchResultsWrapper').fadeOut('fast');
        	$(".searchInput").val("Jeans femmes");
        	$('.searchInputWrapper').addClass("showCountResults");
        	$('.countResult,.searchUp,.searchDown').show();
        	$('.zeResult .aResult').show();
        	$('.zeResult .aResult').css({"visibility":"visible"});
        	$('.zeResult').each(function(){
        		TOffsetResults.push($(this).offset().top);
        	});
        	$('.countResultOnebyOne').html(iOffestresults + 1);
        	$('.countResultTotal').html(TOffsetResults.length);
        	$("html, body").animate({ scrollTop: TOffsetResults[0] - 120 }, 1500);
      		});
              
              $(".jjgSearch").click(function() {
              	$('.searchResultsWrapper').fadeOut('fast');
              	$(".searchInput").val("Jean Jacques Goldman");
              	$('.jjgResult .aResult').show();
              	$('.jjgResult .aResult').css({"visibility":"visible"});
              	$("html, body").animate({ scrollTop: $('.jjgResult').offset().top - 120 }, 1500);
      		});
              
        $(".searchDown").click(function() {
        	iOffestresults++;
        	if(iOffestresults > TOffsetResults.length -1) {
        		iOffestresults = 0;
        	}
        	$('.countResultOnebyOne').html(iOffestresults + 1);
        	$("html, body").animate({ scrollTop: TOffsetResults[iOffestresults] - 120 }, 800);
        });
        
        $(".searchUp").click(function() {
        	iOffestresults--;
        	if(iOffestresults < 0) {
        		iOffestresults = TOffsetResults.length - 1;
        	}
        	$('.countResultOnebyOne').html(iOffestresults + 1);
        	$("html, body").animate({ scrollTop: TOffsetResults[iOffestresults] - 120 }, 800);
        });
        
        $(".clearInput").click(function() {
        	$('.zeResult .aResult').css({"visibility":"hidden"});
        	$('.zeResult .aResult').hide();
        	$('.jjgResult .aResult').css({"visibility":"hidden"});
        	$('.jjgResult .aResult').hide();
        	$('.searchResultsWrapper').hide();
        	$('.countResult,.searchUp,.searchDown').hide();
        	$('.searchInputWrapper').removeClass("showCountResults");
        	$(".searchInput").val("");
        	$(".searchInput").focus();
        	TOffsetResults = [];
        	iOffestresults = 0;
        	return false;
		});
        
        
        /* SCROLLABLE BU */     
        // parallax
       	var controller = new ScrollMagic();
        
       /* new ScrollScene({
            triggerElement: ".accueilBu",
            duration: $(window).height() + 264,
            offset: -132
          })
          .addTo(controller)
          .triggerHook("onCenter")
          .setTween(new TimelineMax().add([
     
            TweenMax.to(".parallax .accueilBu", 1, {backgroundPosition: "0 100%", ease: Linear.easeOut})

          ]));
        
        new ScrollScene({
            triggerElement: ".clickAndDrink",
            duration: $(window).height() + 264,
            offset: -132
          })
          .addTo(controller)
          .triggerHook("onCenter")
          .setTween(new TimelineMax().add([
     
            TweenMax.to(".parallax .clickAndDrink", 1, {backgroundPosition: "0 100%", ease: Linear.easeOut})
          ]));

        new ScrollScene({
            triggerElement: ".ticket",
            duration: $(window).height() + 264,
            offset: -132
          })
          .addTo(controller)
          .triggerHook("onCenter")
          .setTween(new TimelineMax().add([
            TweenMax.to(".parallax .ticket", 1, {backgroundPosition: "0 100%", ease: Linear.easeOut})
          ]));
        new ScrollScene({
            triggerElement: ".Rosedeal",
            duration: $(window).height() + 264,
            offset: -132
          })
          .addTo(controller)
          .triggerHook("onCenter")
          .setTween(new TimelineMax().add([
     

            TweenMax.to(".parallax .Rosedeal", 1, {backgroundPosition: "0 100%", ease: Linear.easeOut})
          ]));

        new ScrollScene({
            triggerElement: ".MiamMiam",
            duration: $(window).height() + 264,
            offset: -132
          })
          .addTo(controller)
          .triggerHook("onCenter")
          .setTween(new TimelineMax().add([
     
            TweenMax.to(".parallax .MiamMiam", 1, {backgroundPosition: "0 100%", ease: Linear.easeOut})

          ]));

        new ScrollScene({
            triggerElement: ".voyageVoy",
            duration: $(window).height() + 264,
            offset: -132
          })
          .addTo(controller)
          .triggerHook("onCenter")
          .setTween(new TimelineMax().add([
     
            TweenMax.to(".parallax .voyageVoy", 1, {backgroundPosition: "0 100%", ease: Linear.easeOut})

          ]));


        new ScrollScene({
            triggerElement: ".Pass",
            duration: $(window).height() + 264,
            offset: -132
          })
          .addTo(controller)
          .triggerHook("onCenter")
          .setTween(new TimelineMax().add([
     
            TweenMax.to(".parallax .Pass", 1, {backgroundPosition: "0 100%", ease: Linear.easeOut})

          ]));
        



        var tween = TweenMax.to(".imgColibri", 0.5, {backgroundPosition: "0 -10%", ease: Linear.easeOut});
        var tween2 = TweenMax.to(".imgColibri", 0.5, {backgroundPosition: "0 -30%", ease: Linear.easeOut});
        var tween3 = TweenMax.to(".imgColibri", 0.5, {backgroundPosition: "0 -50%", ease: Linear.easeOut});
        var tween4 = TweenMax.to(".imgColibri", 0.5, {backgroundPosition: "0 100%", ease: Linear.easeOut});


        var scene = new ScrollScene({triggerElement: "#trigger1"})
                .setTween(tween)
                .addTo(controller);
        var scene2 = new ScrollScene({triggerElement: "#trigger2", duration: 300})
            .setTween(tween2)
            .addTo(controller);

        var scene3 = new ScrollScene({triggerElement: "#trigger3", duration: 300})
            .setTween(tween3)
            .addTo(controller);

        var scene4 = new ScrollScene({triggerElement: "#trigger4", duration: 300})
            .setTween(tween4)
            .addTo(controller);
        */

    


			/* DRAGGABLE SALES */

			$(".home .mason div.sales").draggable({
			  revert: true, 
			  helper: "clone",
				appendTo: "body",
				helper: "clone",
				start: function( event, ui ) {
			  ui.helper.addClass("ui-resizable-helper");
			  $('.ui.sidebar').sidebar();

				}
			});

			/* DROPPABLE SALES */   

			 $(".dropElement").droppable({
				activeClass: "ui-state-default",
				hoverClass: "ui-state-hover",
				accept: ":not(.ui-sortable-helper)",
				drop: function(event, ui) {
					$(this).find(".placeholder").remove();
					$("<div></div>").html(ui.draggable.find(".titleSalesdrop").html())
						.addClass("sbLine sbFav cf")
						.appendTo(this);
						/* <a href>*/
						/*<span class="libelle">12 / 07</span>*/
				}
			});
            
            
            $("#startrosedealimg").click(function(){
            	$("#startrosedealimg").attr("src", "images/Grille/anim_rosedeal.gif");
			});
				
              /* SLIDE */     
              $(".timeline  li").click(function() {
                $( "li" ).each(function( index ) {
                	$(this).find("a").removeClass("on");
				        });
                $(this).find("a").addClass("on");
                var n = $(this).index();
                var cal = n * 982;
                $(".SalesContent").animate({"left": -1*cal});
                if (n == 1) {
                  $(".imgColibri").hide();
                	$(".imgHeaderBg").css({
                		"background":"url(./images/bg4.png) no-repeat",
                		"background-size":"cover"
                	});
                	$(".headerMask").css({
                		"background":"url(./images/bg4.png) no-repeat",
                		"background-size":"cover"
                	});
				          }
              	else if (n == 2) {
                  $(".imgColibri").hide();
                	$(".imgHeaderBg").css({
                		"background":"url(./images/BG_miam.jpg) no-repeat",
                		"background-size":"cover"
                	});
                	$(".headerMask").css({
                		"background":"url(./images/BG_miam.jpg) no-repeat",
                		"background-size":"cover"
                	});
				          } 
              	else {
                  $(".imgColibri").show();
                	$(".imgHeaderBg").css({
                		"background":"url(./images/bg.png) no-repeat",
                		"background-size":"cover"
                	});
                	$(".headerMask").css({
                		"background":"url(./images/bg.png) no-repeat",
                		"background-size":"cover"
                	});
			         	}
              });
              
              
             $(".accueilBu + h3, .accueilBuFixed").bind( "click",function() {
                $( ".timeline li" ).each(function( index ) {
                	$(this).find("a").removeClass("on");
				        });
                
                $(".timeline li:first-child a").addClass("on");
                
                $(".SalesContent").animate({"left": 0});
                
                $(".imgColibri").show();
        				$(".imgHeaderBg").css({
        					"background":"url(./images/bg.png) no-repeat",
        					"background-size":"cover"
        				});
        				$(".headerMask").css({
        					"background":"url(./images/bg.png) no-repeat",
        					"background-size":"cover"
        				});
        				$(".footImg").css({
        					"background":"url(./images/fbg.png) no-repeat",
        					"background-size":"cover"
        				});
              	
              	$(window).scrollTop(0);
              	
              });
             


               // CAPTION 


            $( ".sales" ).hover(function() {

                 caption = $($(this).find(".caption"));
                 iconAlert = $($(this).find(".icon-alert"));
              //    setTimeout(function(){
        				 caption.stop( true, true ).addClass("mid-up");
                 iconAlert.fadeIn("speed");
   				     //}, 500);

             }, function() {
                caption.stop( true, true ).removeClass("mid-up");
                iconAlert.fadeOut("slow");
              });



               $(".cross").click(function(event) {

                  if($(this).hasClass("rotate")) {
                      $(this).removeClass("rotate");
                      $(this).parent().removeClass("up");
                  } else {
                    $(this).parent().addClass("up");
                    $(this).addClass("rotate");                    
                  }

                  event.preventDefault(); 
               });

               $(".sales .simple-caption a.play").click(function(event) {
                  $(".videoContent").slideDown( "slow");
                  $('video').get(0).play();
                    event.preventDefault(); 
               });



/**/

    var $window = $(window);
             $window.scroll(function () {

                var positionScroll = $window.scrollTop(); 
                var TotalHeight =  $(document).height();

                var PercentPos = (positionScroll * 100)/TotalHeight;
                var NewHeight = PercentPos * 341 / 100;

     
                var initAttr ="dots_03.png";

               if(positionScroll>20400) {
                $("#task").addClass("correct_timeline"); 
               }else {
                $("#task").removeClass("correct_timeline"); 
               }

               if(NewHeight > 206) {
                  var newAttr ="dots_03b.png";

                  $( ".dots a.newClick img.dots_mid" ).attr({
                    src: "./images/dots/"+newAttr
                  });

              } else {
                   $( ".dots a.newClick img.mid_dots" ).attr({
                    src: "./images/dots/"+initAttr
                  });               
              }
               $(".rose_progr").height(NewHeight);
               /*  if ($window.scrollTop() == 0)
      

                 else if ($window.height() + $window.scrollTop()
                                == $(document).height()) {
                    
                 }*/
             });


$(".ico")
    .bind('mouseover',function(event){
    
      if( $(this).prev().is(":visible") ) {

      } else {
        $(this).prev().addClass("opening").fadeOut( "slow").show("speed");
      }
    
    })
    .bind('mouseleave',function(){
      $(this).prev().removeClass("opening");
    });

  $(".alert-ico").click(function(event) {
    $(this).addClass("bgpink");
    $(this).prev().addClass("checkin");
    $(this).prev().find("em").text("Alerte ajoutée !");
    event.preventDefault(); 
  });

        $(".videoContent .iclose").click(function() {
          
          $(".videoContent").slideUp('slow');
          $('video').get(0).pause();
        });
                
        $(".currentClick").click(function(event) {
                	$("html, body").animate({ scrollTop: $('#CurrentSales').offset().top - 120 }, 1000);
				});
				
				$(".newClick").click(function(event) {
                	$("html, body").animate({ scrollTop: $('#NewSales').offset().top - 120 }, 1000);
				});
				
				$(".comingClick").click(function(event) {
                	$("html, body").animate({ scrollTop: $('#ComingSales').offset().top - 120 }, 1000);
				});

        /* NIV 1*/

        $(".niv1").click(function(event) {
          $(this).slideUp('slow');
          $(this).parent().addClass("niv");
        });

        /* NIV 2*/
       $(".niv2").click(function(event) {
        $('.test.modal')
          .modal('show');
        });


      $("footer").load("files/footer.html");
      