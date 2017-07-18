  
  // $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
  //   .done(function(data){
  //     console.log(data);
  //   });



//var stringCats = $.get('https://ga-cat-rescue.herokuapp.com/api/cats');



$(function() {
    $("#cats").append('<li>test</li>');
    //var stringCats = $.get('https://ga-cat-rescue.herokuapp.com/api/cats');
 	//var objectCats = JSON.parse(stringCats.responseText);
	//console.log(stringCats);
	//console.log(stringCats[0].id);

    // Use the more generic $.ajax to do the same request
	  $.ajax({
	    url: 'https://ga-cat-rescue.herokuapp.com/api/cats/',
	    method: 'get', // GET by default
	    dataType: 'json' // Intelligent Guess by default (xml, json, script, or html)
	  }).done(function(data){
	    console.log(data);
	     //$.each(data, $("#cats").append('<li>data.id</li>'));
	  });
});


