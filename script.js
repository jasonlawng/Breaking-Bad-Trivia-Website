function quiz() {
    alert("Welcome to the game. Good luck.");  

	  let score=0;
	  const totalQuestions=3; 

	//first trivia question
	 const q1 = prompt("Where does Walter H. White live?");
	 if (q1 == "308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104") { 
		alert("Correct!");   	
		score = score + 1; 
	}
	 else {  
		 alert("Incorrect!");  	
	}  

	//second trivia question
	 const q2 = prompt("How old is Walter H. White in the pilot episode of Breaking Bad?");
	if (q2 == "50 years old") {
		  alert("Correct!");  	
		 score = score + 1;  
	}
	 else {  
		 alert("Incorrect!");  	
	}  

	//third trivia question
	 const q3 = prompt("Who is Walter H. White's lawyer in Breaking Bad?");  
	 if (q3 == "Saul Goodman") { 
		 alert("Correct!");  	
		 score = score + 1;  
	}  
	else {  
		alert("Incorrect!");   	
	}   

	//tell players their final score
	  alert("You got " + score + " out of " + totalQuestions + " questions correct!"); 

} //closing bracket for the entire function            
