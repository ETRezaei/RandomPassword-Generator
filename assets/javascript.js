function getRandomPass(){
    let userPassLength = prompt("Please pick a password length between 8 to 128");
    if(userPassLength > 7 && userPassLength <= 128){
        
        let questions = [{ q: "Do you want 'Special Character'?", a:false },
                        { q: "Do you want 'Numeric Character'?", a: false },
                        { q: "Do you want 'Lowercase Character'?", a:false },
                        { q: "Do you want 'Upercase Character'?", a:false }]
        
        for(let i = 0; i < questions.length; i++){
            let userAnswer = confirm(questions[i].q);
            questions[i].a = userAnswer;
        }
    }
    else{
        alert("Your input is not valid. Please try again!!")
    }
    

}