


$("#sun").click(function(){
  $("#picSun").append('<img id ="su" src =pic/sun.jfif>');
});
$("#flower").click(function(){
  $("#picFlower").append('<img id ="fl" src =pic/flower.jfif>');
});

$("#tree").click(function(){
  $("#picTree").append('<img id ="tr" src =pic/tree.jfif>');
});
$("#cloud").click(function(){
  $("#picCloud").append('<img id ="cl" src =pic/cloud.png>');
});
$("#house").click(function(){
  $("#picHouse").append('<img id ="ho" src =pic/house.jfif>');
});

 // .append("<img id ='fl' src = https://i.pinimg.com/236x/49/20/48/49204847159d584629fe23b28edf704f--cartoon-picture-cartoon-images.jpg>");
// $("#red").click(function(){
//   console.log(';hi')
// })

$("#picSun").draggable();
$("#picFlower").draggable();
$("#picTree").draggable();
$("#picCloud").draggable();
$("#picHouse").draggable();




$("#drow").droppable()
	// 	drop: function(event, ui) {
	// 			$(this).css('background', 'Beige ');
	// 	} 
	// });
		// over: function(event, ui) {
		// 		$(this).css('background', 'Beige');
		// }
		// });
// 		out: function(event, ui) {
// 			$(this).css('background', 'white ');
// 	}
// });

