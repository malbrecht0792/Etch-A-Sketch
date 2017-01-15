$(document).ready(function() {

	var numberOfDivs = 3;

	var newDiv = document.createElement('div');
	newDiv.id = 'block';
	newDiv.className = 'outside_box';
	document.getElementsByTagName('body')[0].appendChild(newDiv);

	for(i = 0; i < numberOfDivs*numberOfDivs; i++) {
		var newDiv = document.createElement('div');
		newDiv.id = 'block';
		newDiv.className = 'inside_box';
		document.getElementsByTagName('div')[0].appendChild(newDiv);
	}

	$('.inside_box').on('mouseenter', function() {
		$(this).css({'background-color' : 'black'});
	})
})