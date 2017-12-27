var count = 0;

function incrementCatCount(){
	count++;
	$(".clickCounter").text(`You've clicked ${count} times`);	
}

$(function(){
	
	$(".catImage").click(incrementCatCount);
	
	
});