  
  // $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
  //   .done(function(data){
  //     console.log(data);
  //   });



//var stringCats = $.get('https://ga-cat-rescue.herokuapp.com/api/cats');



$(function() {
    //$("#cats").append('<li>test</li>');
    //var stringCats = $.get('https://ga-cat-rescue.herokuapp.com/api/cats');
 	//var objectCats = JSON.parse(stringCats.responseText);
	//console.log(stringCats);
	//console.log(stringCats[0].id);

    // Use the more generic $.ajax to do the same request
	  $.ajax({
	    url: 'https://ga-cat-rescue.herokuapp.com/api/cats/',
	    method: 'get', // GET by default
	    dataType: 'json', // Intelligent Guess by default (xml, json, script, or html)
	  	success: function(data){
	  		data.forEach(function(value)
	  		{
  				$('#cats').append("<li>"+value.name + " - " + value.note +" </li>");
	  		});
	  	}

	  // }).done(function(data){
	  //   console.log(data);
	     //$.each(data, $("#cats").append('<li>data.id</li>'));
	  });

	  $("#new-cat").on("submit", function(event){
    // Stop the form from submitting
		    event.preventDefault(); // Stops the form from submitting!
			// Run the 'makeResults' function seen above

			var name =  $("input#cat-name").val();
			var note =  $("textarea#cat-note").val();
			
			var cat ={
				name:"test",
				note:"test"
			};

			cat.name = name;
			cat.note = note;

			  $.ajax({
			    url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
			    type: 'POST',
			    dataType: 'json',
			    contentType: 'application/json',
			    data: JSON.stringify(cat),
			    success: function(element){
			  		$('#cats').append("<li>"+element.name + " - " + element.note +" </li>");
			  	}
			  });

			// $.post('https://ga-cat-rescue.herokuapp.com/api/cats', JSON.stringify(cat))
		 //    .done(function(data){
		 //      console.log("Kitty was added");
		 //    });
		 	console.log(name + note);
		});
});





