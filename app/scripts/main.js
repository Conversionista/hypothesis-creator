var hEx = {
	0 : 'the users doesn\'t utilize the buttons on the site',
	1 : 'looking at the number of clicks in Google Analytics',
	2 : 'make the buttons more "clickable" by adding drop shadows',
	3 : 'a better understanding of what constitutes a button on the page',
	4 : 'higher CTR to other pages and more sales'
};

$('#hExample').click(function() {
	$('input').each(function(index){
    	$(this).val(hEx[index]);
	});
});

$('#generate').click(function() {
    var fields = $('input').serializeArray();

    var hypoEN = '<b>Since we have observed that</b> ' + fields[0].value + '<br /> <b>by</b> ' + fields[1].value + '.<br /><br /> <b>We want to</b> ' + fields[2].value + '<br /> <b>which should lead to</b> ' + fields[3].value + '<br /> <b>and the effect will be measured by</b> ' + fields[4].value + '';

    $('.modal-body').empty().append('<p>'+hypoEN+'</p>');

    var copyData = $('.modal-body').text();
	var client = new ZeroClipboard( document.getElementById('copy_button') );

	// console.log(copyData);

	ZeroClipboard.setData('text/plain', copyData);
	
	client.on( 'ready', function( readyEvent ) {
		// console.log( 'ZeroClipboard SWF is ready!' );

		client.on( 'aftercopy', function( event ) {
			// `this` === `client`
			// `event.target` === the element that was clicked
			// event.target.style.display = "none";
			$(event.target).text('Copied!');
			// console.log('Copied text to clipboard: ' + event.data['text/plain'] );
		} );
	} );

});