
function adBlockDetected() {
			console.log('Detected');
			var uuid='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    						var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    						return v.toString(16);
							});
$('div#video_ads_overdiv').prop('id', uuid);
$('div#'+uuid).show()
$('div#MarketGidComposite2699').show()
$("iframe").each(function() { 
   //$(this).attr('src', $(this).attr('src')); 
   console.log('iframe');
   $(this).show();
});
}
function adBlockNotDetected() {
	alert('Not Detected');
}
		
/*function checkAgain() {
		
			// setTimeout 300ms for the recheck is visible when you click on the button
			console.log('Again');
			setTimeout(function() {
				if(typeof blockAdBlock === 'undefined') {
					adBlockDetected();
				} else {
					blockAdBlock.onDetected(adBlockDetected).onNotDetected(adBlockNotDetected);
					blockAdBlock.check();
				}
			}, 300);
}
(function () {
	console.log('Beginning');
	var blockAdBlock = false;
	blockAdBlock = new BlockAdBlock;
	blockAdBlock.setOption('checkOnLoad', true);


// and|or
	blockAdBlock.setOption({
	debug: true,
	checkOnLoad: false,
	resetOnEnd: false
	});
    if(typeof blockAdBlock === 'undefined') {
			adBlockDetected();
		} else {
			blockAdBlock.setOption({ debug: true });
			blockAdBlock.onDetected(adBlockDetected).onNotDetected(adBlockNotDetected);
		}
    console.log('End');		
})();*/
//docum
if(typeof blockAdBlock === 'undefined') {
	console.log('Hello')
} else {
	blockAdBlock.onDetected(adBlockDetected);
	blockAdBlock.onNotDetected(adBlockNotDetected);
	// and|or
	blockAdBlock.on(true, adBlockDetected);
	blockAdBlock.on(false, adBlockNotDetected);
	// and|or
	blockAdBlock.on(true, adBlockDetected).onNotDetected(adBlockNotDetected);
}

