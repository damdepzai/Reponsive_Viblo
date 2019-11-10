 $(function(){
	  //hiệu ứng khi kích vào class nutmenu
 	 $('.icon').click(function() {
        $('.menu-left').addClass('ra');
        return false;
    });
    //dong menu
 	 $('.fa-times').click(function(event) {
        $('.menu-left').removeClass('ra');
        return false;
    });
   $(window).scroll(function(){
       if($(this).scrollTop() > 200){
        $('.btnNut').fadeIn();
       }
       else{
        $('.btnNut').fadeOut();
       }
   });
    $('.btnNut').click(function(){
        $('body,html').animate({scrollTop : 0},800);
    });
     

    
})  
 