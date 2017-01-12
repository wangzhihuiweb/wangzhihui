$(function(){
	CssFun()
//	var video = document.getElementById("video");
//	//点击播放
//	$(video).on("click", function() {
//		playpause()
//	})
//	$(video).parent().find(".play").on("click", function() {
//			playpause()
//		})
//		//播放结束
//	$(video).on('ended', function() {
//		video.pause();
//		$(video).parent().find(".play").css({
//			"display": "block"
//		})
//	});
//
//	//点击开始、暂停fun
//	function playpause() {
//		if(video.paused || video.ended) {
//			video.play();
//			$(video).parent().find(".play").css({
//				"display": "none"
//			})
//		} else {
//			video.pause();
//			$(video).parent().find(".play").css({
//				"display": "block"
//			})
//
//		}
//
//	}
})

function CssFun(){
	$(".DoubleStar").css({"padding":Q(30),"width":Q(660),"font-size":Q(32)})
	$(".User").css({"height":Q(101),"width":Q(660)})
	$(".DoubleStar .User .Head").css({"width":Q(101),"height":Q(101)})
	$(".DoubleStar .User .Info").css({"height":Q(101),"padding-left":Q(34)})
	$(".DoubleStar .User .Info h3").css({"height":Q(58),"line-height":Q(58),"font-size":Q(32)})
	$(".DoubleStar .User .Info p").css({"height":Q(42),"line-height":Q(42),"font-size":Q(26)})	
	$(".DoubleStar .Text").css({"line-height":Q(36),"font-size":Q(28),"padding-top":Q(24)})	
	$(".DoubleStar .Show").css({"width":Q(660),"padding-top":Q(15)})	
	$(".DoubleStar .Show .Img").css({"width":Q(660),"margin-bottom":Q(30)})
	$(".DoubleStar .Show .Img img").css({"width":Q(660),"height":Q(400)})		
	$(".DoubleStar .Show .Thevideo").css({"width":Q(660),"height":Q(400)})
	$(".DoubleStar .Show .Thevideo video").css({"width":Q(660),"height":Q(400)})	
	$(".DoubleStar .Show .Thevideo .play").css({"width":Q(76),"height":Q(76),"margin-top":Q(-38),"margin-left":Q(-38)})
	$(".DoubleStar .Review").css({"width":Q(660)})
	$(".DoubleStar .Review h3").css({"font-size":Q(30),"height":Q(86),"line-height":Q(86)})	
	$(".DoubleStar .Review .list").css({"width":Q(660),"margin-bottom":Q(30)})
	$(".DoubleStar .Review .list .Img").css({"width":Q(88)})
	$(".DoubleStar .Review .list .Img img").css({"width":Q(68),"height":Q(68)})
	$(".DoubleStar .Review .list .Con").css({"width":Q(570),"padding-bottom":Q(12)})
	$(".DoubleStar .Review .list .Con h2").css({"height":Q(56)})
	$(".DoubleStar .Review .list .Con h2 b").css({"height":Q(56),"line-height":Q(56)})
	$(".DoubleStar .Review .list .Con h2 span").css({"height":Q(56),"line-height":Q(50)})
	$(".DoubleStar .Review .list .Con p").css({"line-height":Q(40),"font-size":Q(30)})	
	$(".DoubleStar .Qrcode").css({"width":Q(221),"margin-top":Q(20)})
	
	
	$(".DoubleStar .Qrcode img").css({"width":Q(221),"height":Q(221)})
	$(".DoubleStar .Qrcode span").css({"width":Q(221),"height":Q(62),"line-height":Q(62)})
}




function Q(obj) {
    var width = $(window).width()
//  alert(width)
    if (width > 720) {
        width = 720;
    }
    var num = (parseInt(obj) / 720).toFixed(20) * width;
    return num + "px";
}