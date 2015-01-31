var hEx = {
	0 : 'the users doesn\'t utilize the buttons on the site',
	1 : 'looking at the number of clicks in Google Analytics',
	2 : 'make the buttons more "clickable" by adding drop shadows',
	3 : 'all mobile users',
	4 : 'a better understanding of what constitutes a button on the page',
	5 : 'higher CTR to other pages and more sales'
};

$('#hExample').click(function(e) {

	$('input').each(function(index){
    	$(this).val(hEx[index]);
	});

	$('#generate').prop('disabled', false);

});

$('#h').on('show.bs.modal', function (event) {
	var fields = $('input').serializeArray();

	var hypoEN = '<b>Since we have observed that</b> ' + fields[0].value + ' <b>by</b> ' + fields[1].value + '.<br /><br /> <b>We want to</b> ' + fields[2].value + ' <b>for</b> ' + fields[3].value + '.<br /><br /><b>Which should lead to</b> ' + fields[4].value + ' <b>and the effect will be measured by</b> ' + fields[5].value + '.';

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

$('#generate').prop('disabled', true);

$('input').on('input keyup change', function(e) {
	
	var x = [];
	var y = 0;

	$('input').each(function(index){
		if($(this).val().length > 0){
	        x.push(1);
	    }else{
	        x.push(0);
	    }
	});

	for(var i in x) { y += x[i]; }
	
	if(y === 6){
		$('#generate').prop('disabled', false);
	} else {
		$('#generate').prop('disabled', true);
	}

});

$(document).ready(function() {
	$('#hypothesisForm').bootstrapValidator({
		container: 'tooltip',
		
	    excluded: [':disabled', ':hidden', ':not(:visible)'],
	    feedbackIcons: 'disabled',
        fields: {
         	problemDescription: {
         		threshold: 0,
        		trigger: 'keyup blur',
	            validators: {
	                // notEmpty: {
	                //     message: 'The summary is required'
	                // }
	            }
	        },
	        observationMethod: {
	        	threshold: 0,
        		trigger: 'keyup blur',
	            validators: {
	                // notEmpty: {
	                //     message: 'The summary is required'
	                // }
	            }
	        },
	        makeThisChange: {
	        	threshold: 0,
        		trigger: 'keyup blur',
	            validators: {
	                // notEmpty: {
	                //     message: 'The summary is required'
	                // }
	            }
	        },
	        forThisSegment: {
	        	threshold: 0,
        		trigger: 'keyup blur',
	            validators: {
	                // notEmpty: {
	                //     message: 'The summary is required'
	                // }
	            }
	        },
	        behaviour: {
	        	threshold: 0,
        		trigger: 'keyup blur',
	            validators: {
	                // notEmpty: {
	                //     message: 'The summary is required'
	                // }
	            }
	        },
	        kpi: {
	        	threshold: 0,
        		trigger: 'keyup blur',
	            validators: {
	                // notEmpty: {
	                //     message: 'The summary is required'
	                // }
	            }
	        }
	    },
	    live: 'enabled',
	    message: 'This value is not valid',
	    submitButtons: '#generate'
	});
});