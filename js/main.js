
var cards = $('#card-slider .slider-item').toArray();

startAnim(cards);

function startAnim(array){
    if(array.length >= 4 ) {
        TweenMax.fromTo(array[0], 0.5, {x:0, y: 0, opacity:0.75}, {x:0, y: -120, opacity:0, zIndex: 0, delay:0.03, ease: Cubic.easeInOut, onComplete: sortArray(array)});

        TweenMax.fromTo(array[1], 0.5, {x:79, y: 125, opacity:1, zIndex: 1}, {x:0, y: 0, opacity:0.75, zIndex: 0, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: Cubic.easeInOut});

        TweenMax.to(array[2], 0.5, {bezier:[{x:0, y:250}, {x:65, y:200}, {x:79, y:125}], boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', zIndex: 1, opacity: 1, ease: Cubic.easeInOut});

        TweenMax.fromTo(array[3], 0.5, {x:0, y:400, opacity: 0, zIndex: 0}, {x:0, y:250, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut}, );
    } else {
        $('#card-slider').append('<p>Sorry, carousel should contain more than 3 slides</p>')
    }
}

function sortArray(array) {
    clearTimeout(delay);
    var delay = setTimeout(function(){
        var firstElem = array.shift();
        array.push(firstElem);
        return startAnim(array); 
    },3000)
}





$(document).ready(function(){
	
	
//stikey
	$(".js--clint-section").waypoint(function(direction){
		
	if(direction== "down"){
		$(".menu-section").addClass("stikey");
	}else{
	$(".menu-section").removeClass("stikey");	
	}	
		
	});
	//protfolio
	var mixer=mixitup('.container');
	
	
	$(".hellow-circle").circleProgress();	
		
	

$(".hellow-circle").circleProgress();	
	
	
	
	
	
$('.owl-carosel').owlCarousel();	
	
});

$(document).ready(function(){
	
	$(".logo").click(function(){
		
			$(this).slideIn();
		
	});	
		
});

	

 function openNav() {
	  
	  document.getElementById("myNav").style.width="30%";
  }
  
  
  function closeNav() {
	  
	  document.getElementById("myNav").style.width="0%";
  }
  


	function openNav1() {
	  
	  document.getElementById("myNav1").style.width="300px";
  }
  
  
  function closeNav1() {
	  
	  document.getElementById("myNav1").style.width="0%";
  }
  

 

