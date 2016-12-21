
function catchReferenceError() {
  try {
  var sum = z + z;
    alert(sum);
	} catch(error) {
  	switch (error.name) {
  		case 'SyntaxError':
  			alert("caught a " + error.name + ": " + error.message);
  			//handle error…
  			break;
  		case 'EvalError':
  			alert("caught a " + error.name + ": " + error.message);
  			//handle error…
  			break;
        case 'ReferenceError':
  			alert("caught a " + error.name + ": " + error.message);
  			//handle error…
  			break;
  		default:
  			alert("caught a " + error.name + ": " + error.message);
  			//handle all other error types here…
  			break;
  	}
  } 
}

function catchSyntaxError() {
  try {
    eval('alert("Hello world)');
  } 
  catch(error) {
    if (error.name === 'SyntaxError') {
      alert("caught a " + error.name + ": " + error.message);
      //handle that error type
    }
    else {
      alert("caught a " + error.name + ": " + error.message);
      //handle generic errors here
    }
  }
}

function catchEvalError() {
  try {

    eval (arguments[1]*3);  
    alert("NO ERROR CAUGHT: Your browser doesn't seem to mind that we just set eval to the letter 'x'!");
  } catch(error) {
    switch (error.name) {
      // case 'SyntaxError':
      //   alert("caught a " + error.name + ": " + error.message);
      //   //handle error…
      //   break;
      case 'EvalError':
        alert("caught a " + error.name + ": " + error.message);
        //handle error…
        break;
      default:
        alert("caught a " + error.name + ": " + error.message);
        //handle all other error types here…
        break;
    }
  } 
}

function catchRangeError() {
  try {
    var x = new Array(100000000000);
    
  } catch(error) {
    switch (error.name) {
      case 'SyntaxError':
        alert("caught a " + error.name + ": " + error.message);
        //handle error…
        break;
      case 'EvalError':
        alert("caught a " + error.name + ": " + error.message);
        //handle error…
        break;
      default:
        alert("caught a " + error.name + ": " + error.message);
        //handle all other error types here…
        break;
    }
  } 
}