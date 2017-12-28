
var cats = new Array();

// named
var Cat = class Cat {
  constructor(name, image) {
    this.name = name;
    this.image = image;
	this.clicks = 0;
  }
};

function incrementCatCount(){
	var id = this.id.replace('cat_','');
	cats[id].clicks++;
	$("#clickCounter" + id ).text(`You've clicked ${cats[id].clicks} times on ${cats[id].name}`);	
}

function fillCatList(){
	//Fill in the list
	$("#cats").html("");
	//iterate the list of cats and display the list
	cats.forEach(function(cat, index){
		$("#cats").html($("#cats").html() + '<li id="' + index +'" class="item">' +  cat.name + '</li>');
	});
	
	//Empty the cat content area
	$("#content").html("");
}

function drawCat(){
	var cat = cats[this.id];
	//Brings the cat to the screen
	$("#content").html('<h2 id="clickCounter' + this.id + '">You\'ve clicked ' + cat.clicks  +' times on ' +  cat.name + '</h2>'	
	 + '<h3>'+  cat.name + '</h3>' + 
		'<img class="catImage" id="cat_' + this.id +'"src="'+ cat.image+'" alt="' + cat.name +'">'
	 );
	//Remove all bold classes from all li
	$("li").removeClass("bold");
	 $(this).addClass("bold");
}

$(function(){
	
	cats.push(new Cat('Ulises','img/cat.jpg'));
	cats.push(new Cat('Rodolfo','img/cat2.jpg'));
	cats.push(new Cat('Happy cat','img/cat3.jpg'));
	cats.push(new Cat('Fluffy','img/cat4.jpg'));
	cats.push(new Cat('Doc Cat','img/cat5.jpg'));
	cats.push(new Cat('Bobby','img/cat6.jpg'));
	cats.push(new Cat('Evil Cat','img/cat7.jpg'));

	
	fillCatList();
	$(".item").click(drawCat);
	
	//Add listener to the inner element of content (which is not displayed yet)
	$('#content').on('click', 'img', incrementCatCount);
});