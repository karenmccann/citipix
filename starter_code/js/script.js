//add js to the html the link from former
$(document).ready(function(){
	alert('hello');


// prevent default page loading
	function submitBtn(event){
	event.preventDefault();

}


					// this is what i was meant to do
					//'$('body').attr('class', 'nyc');
					//$('input').val();
					//|| to separate strings



//if user types 
	
		//"New York" or "New York City" or "NYC" 
		$(".body").attr('class', 'nyc');
			$('input').val('nyc' || 'new york' || 'new york city');
			//make "nyc.jpg" background
				//console.log("nyc");
		
		//"San Francisco" or "SF" or "Bay Area" 
			//make "sf.jpg" background
		$(".body").attr('class', 'sf');
			$('input').val('sf' || 'bay area' || 'san francisco');	
				//console.log("sf");
			
		//"Los Angeles" or "LA" or "LAX" 
			//make "la.jpg" background
		$(".body").attr('class', 'la');
			$('input').val('la' || 'lax' || 'los angeles');	
				//console.log("la");
			
		//"Austin" or "ATX" 
			//make "austin.jpg" background
		$(".body").attr('class', 'austin');
			$('input').val('austin' || 'atx');			
				//console.log("austin");
			
		//"Sydney" or "SYD" 
			//make "sydney.jpg"
		$(".body").attr('class', 'sydney');
			$('input').val('sydney' || 'syd');		
				//console.log("sydney");

		// if else 
			//show alert('We currently dont have any images of this city');
				//alert('We currently dont have any images of this city');
			//}

});