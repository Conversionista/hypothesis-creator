

WebFont.load({
    typekit: { id: 'fvc2tgi' }
});


function showExample(){
	'use strict';

	var exampleText = [
		'the users doesn\'t utilize the buttons on the site',
		'looking at the number of clicks in Google Analytics',
		'make the buttons more "clickable" by adding drop shadows',
		'all mobile users',
		'a better understanding of what constitutes a button on the page',
		'higher CTR to other pages and more sales'
	];
	var form = $('#hypothesisForm').serializeArray();
	$.each(form, function(i, v) {
		$('form [name="' + v.name + '"]').val(exampleText[i]);
		// $(v).val(exampleText[i]);
	});

}

function generateHypothesis(){
	var fields = $('#hypothesisForm').serializeArray();
	'use strict';
	var hypoEN = '<b>Since we have observed that</b> ' + fields[0].value + ' <b>by</b> ' + fields[1].value + '.<br /><br /> <b>We want to</b> ' + fields[2].value + ' <b>for</b> ' + fields[3].value + '.<br /><br /><b>Which should lead to</b> ' + fields[4].value + ' <b>and the effect will be measured by</b> ' + fields[5].value + '.';
	$('p.output').html(hypoEN);
	$('textarea.output').text($('p.output').text());
	$('.hide').removeClass('hide');
	$('.h2-a').addClass('text-muted');
	$('.h2-b').text('B. Copy the text below').removeClass('text-muted')
	$('.copy').attr('disabled', false);
}


$('input').on('blur', function(event) {
	event.preventDefault();
	/* Act on the event */
	var filledOut = [];
	var input = $('#hypothesisForm input');
	
	input.each(function(index, el) {
		
		if($(this).val() !== ''){
			filledOut.push(true);
		} else {
			filledOut.push(false);
		}
		
	});
	// console.log(filledOut);
	// console.log($.inArray(false, filledOut));

	if($.inArray(false, filledOut) === -1){
		$('#generate').attr('disabled', false);
	} else {
		$('#generate').attr('disabled', true);
	}

	// if($.inArray(false, filledOut)){
	// 	console.log(false);
	// } else {
	// 	console.log(true);
	// }
});

function getGACount() {
	$.ajax({
		url: 'https://api.conversionista.se/hypothesis-generator-count/',
		type: 'GET'
	})
	.done(function(data) {
		// console.log(data.events);
		var count = data.events;
			count = parseInt(count);
			count = 1752 + count;
		// console.log(count);

		if(count !== 0){
			// console.log(count)
			$('header h3').html('Over <b id="gaCount">' + count + '</b> hypothesis created with this tool so far.');
			// $('header.row').append('<h3>Over <b id="gaCount">' + count + '</b> hypothesis created with this tool so far.</h3>');
			var o = {
			  useEasing : true, 
			  useGrouping : true, 
			  separator : ' ', 
			  decimal : '.', 
			  prefix : '', 
			  suffix : '' 
			};
			var c = new CountUp('gaCount', 0, count, 0, 1, o);
			c.start();
		} else {
			// console.log('no count found...')
		}

	});
}

$('.copy').on('click', function(event) {
	event.preventDefault();
	var t = $(this),
		oldT = t.text();
	t.text('Copied!').addClass('animated shake');
	setTimeout(function(){
		// console.log('copy')
		t.text(oldT).removeClass('shake');
	},2500);
});


$(document).ready(function() {
	'use strict';
	
	$('input[name="problemDescription"]').focus();
	$('input[name="problemDescription"]:text:visible:first').focus();
	window.dataLayer = window.dataLayer || [];
	$('#hExample').click(function(event) {
		event.preventDefault();
		$('#generate').attr('disabled', false);
		showExample();

		window.dataLayer.push({
			'event' : 'event',
			'eventCategory' : 'Hypothesis Generator',
			'eventAction' : 'Click',
			'eventLabel' : 'Show Example',
			'eventNonInteraction' : false
		});

		generateHypothesis();
	});

	$('#generate').click(function(event) {
		event.preventDefault();
		generateHypothesis();
		
		window.dataLayer.push({
			'event' : 'event',
			'eventCategory' : 'Hypothesis Generator',
			'eventAction' : 'Click',
			'eventLabel' : 'Generate',
			'eventNonInteraction' : false
		});
	});

	new Clipboard('.btn');

	getGACount();

});

$('.sameHeights').equalHeights();
$('.sameH').equalHeights();

$('#reset').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('input').val('');
});