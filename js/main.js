$(function(){
	 //=====bottom to top button=====//
	 $(window).scroll(function(){

		var scrolling = $(this).scrollTop();

		if(scrolling > 50){
				$(".bottom-to-top").fadeIn(500);
		}
		else{
				$(".bottom-to-top").fadeOut(500); 
		}
		// sticky menu //
		if(scrolling > 100){
				$("#nav").addClass("sticky-bg");
		}
		else{
				$("#nav").removeClass("sticky-bg");
		}
	});

 $(".bottom-to-top").click(function(){
		$('html, body').animate({
				scrollTop:0
		}, 2000);
 });      

	// types js
	$(".typed").typed({
		strings: ["Designer.", "Developer.", "Professional Coder."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 40,
		// time before typing starts
		startDelay: 1000,
		// backspacing speed
		backSpeed: 30,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 10,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});
