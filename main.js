$(function(){

	$("li.weird").click(function () {
		$("article.weird").css("display", "block");
		$("li.item").removeClass("active");
		$(this).addClass("active");
		$("article.who-am-i").css("display", "none");
		$("article.who-are-you").css("display", "none");
		$("article.last-time").css("display", "none");
	});

	$("li.who-am-i").click(function () {
		$("article.weird").css("display", "none");
		$("li.item").removeClass("active");
		$(this).addClass("active");
		$("article.who-am-i").css("display", "block");
		$("article.who-are-you").css("display", "none");
		$("article.last-time").css("display", "none");
	});

	$("li.who-are-you").click(function () {
		$("article.who-are-you").css("display", "block");
		$("li.item").removeClass("active");
		$(this).addClass("active");
		$("article.who-am-i").css("display", "none");
		$("article.weird").css("display", "none");
		$("article.last-time").css("display", "none");
	});

	$("li.last-time").click(function () {
		$("article.last-time").css("display", "block");
		$("li.item").removeClass("active");
		$(this).addClass("active");
		$("article.who-am-i").css("display", "none");
		$("article.who-are-you").css("display", "none");
		$("article.weird").css("display", "none");
	});

	$(".scroll").click(function(event){
		$.scrollTo($("#"+$(event.currentTarget).attr("href").replace("#","")), {
			duration: 400 
		});
	});

	// window.location.hash = $(this.section).scroll(attr('id'));

});

// $.scrollTo($(this), {
// 			duration: 400 
// 		});