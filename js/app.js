// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
    var count = 0;
    function getArr(){
    	var arr = [];
  		$('.box').map(function(){
  			if ($(this).hasClass("x")) {
  				arr.push(true);
  			}
  			else if ($(this).hasClass("o")) {
  				arr.push(false);
  			}
  			else{
  				arr.push($(this));
  			}
  		});	
  		return arr
    }

    function checkWin(arr){
    	
    	if(arr[0] === arr[1] && arr[1] === arr[2]){
    		return 1;
    	}
    	else if(arr[3] === arr[4] && arr[4] === arr[5]){
    		return 1;
    	}
    	else if(arr[6] === arr[7] && arr[7] === arr[8]){
    		return 1;
    	}
    	else if(arr[0] === arr[3] && arr[3] === arr[6]){
    		return 1;
    	}
    	else if(arr[1] === arr[4] && arr[4] === arr[7]){
    		return 1;
    	}
    	else if(arr[2] === arr[5] && arr[5] === arr[8]){
    		return 1;
    	}
    	else if(arr[0] === arr[4] && arr[4] === arr[8]){
    		return 1;
    	}
    	else if(arr[2] === arr[4] && arr[4] === arr[6]){
    		return 1;
    	}
    	full = 0;
    	for(var i=0; i< arr.length; i++){
    		if(arr[i] === true || arr[i] === false){
    			full ++;
    		}
    	}
    	console.log(full);
    	if(full === 9){
    		return 0;
    	}
    }

    $('.box').on('click', function(){
	  	if(count % 2 === 0){
	  		if(!($(this).hasClass("x")) && !($(this).hasClass("o"))){
		  		$(this).addClass("o");
		  		count++;
		  		$('span.turns').html("X");
		  		var arr = getArr();
		  		if(checkWin(arr) === 1){
		  			$('#results').html("O Wins!");
		  			setTimeout(function(){
		  				$('#results').html("")
		  			}, 2000)
		  			$('.box').removeClass('x o');
		  			$('span.turns').html("O");
		  			count = 0;

		  		}
		  		if(checkWin(arr) === 0){
		  			$('#results').html("it's a Draw!");
		  			setTimeout(function(){
		  				$('#results').html("")
		  			}, 2000);
		  			$('.box').removeClass('x o');
		  			$('span.turns').html("O");
		  			count = 0;
		  		}
		  		console.log('arr: ', arr);
	  		}
		}
		else{
			if(!($(this).hasClass("x")) && !($(this).hasClass("o"))){
				$(this).addClass("x");
				count++;
				$('span.turns').html("O");
				var arr = getArr();
				if(checkWin(arr) === 1){
		  			$('#results').html("X Wins!");
		  			setTimeout(function(){
		  				$('#results').html("")
		  			}, 2000);
		  			$('.box').removeClass('x o');
		  			$('span.turns').html("O");
		  			count = 0;
		  		}
		  		if(checkWin(arr) === 0){
		  			$('#results').html("it's a Draw!");
		  			setTimeout(function(){
		  				$('#results').html("")
		  			}, 2000);
		  			$('.box').removeClass('x o');
		  			$('span.turns').html("O");
		  			count = 0;
		  		}
		  		
		  		console.log("arr: ", arr);
			}
		}
    })
    $('button').click(function(){
    	$('.box').removeClass('x o');
    	$('span.turns').html("O");
    	$('#results').html("CHEATER!");
		setTimeout(function(){
			$('#results').html("")
		}, 2000);
    	count = 0
    })
});
