
$(function(){	
	$(".nav").on("click","a",function(){
		$(".nav a").css("color","black");
		$(this).css("color","#ffaf7f");
		$(".nav-mini a").text($(this).text());   
	})
	$(".account-left").on("click","div",function(){
		$(".account-left div").removeClass("account-left-change");
		$(this).addClass("account-left-change");  
	})
	$(".exhibition").on("click","span",function(){
		$(".show").css("display","block");
		
	})
	$(".show div").on("click",function(){
		$(".show").css("display","none");
	})

	$(".exhibition-first").on("click","li",function(){
		$(".exhibition-first li").removeClass("account-left-change");
		$(this).addClass("account-left-change");
		var num1=$(this).index();
		$(".exhibition-first table").css("display","none");
		$(".exhibition-first table").eq(num1).css("display","block");
	})
	$(".exhibition-second").on("click","li",function(){
		$(".exhibition-second li").removeClass("account-left-change");
		$(this).addClass("account-left-change");
		var num1=$(this).index();
		$(".exhibition-second table").css("display","none");
		$(".exhibition-second table").eq(num1).css("display","block");
	});
	$(".nav-a").click();
	$(".exhibition-first li").eq(0).click();
	$(".exhibition-second li").eq(0).click();
})

$(".seller").click(function(){
	$(".seller-detial").slideToggle(500);
})
$(".buyer").click(function(){
	$(".buyer-detial").slideToggle(500);
})
