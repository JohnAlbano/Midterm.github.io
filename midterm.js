function getinfo(){
	var inputa=document.getElementById('inputa').value;
	var inputb=document.getElementById('inputb').value;
	var inputa=document.getElementById('inputc').value;
	var output=document.getElementById("output");
	var textarea=document.getElementById("input")
	if (input <= 0 || input > 1000){
		alert('Please enter valid number')
	}
	else {
		output.innerHTML=" ";
		output.style.display="block";
		for(var inputa = 0; inputa <= inputb; inputa++){
			var result = `${input} * $(inputc} = ${inputc*input}`
			output.innerHTML+=result;
		}
		textarea.value=" ";

	}
}