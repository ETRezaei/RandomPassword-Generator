function getRandomPass(){
    let userPassLength = prompt("Please pick a password length between 8 to 128");
    if(userPassLength > 7 && userPassLength <= 128){
        
        let questions = [{ q: "Do you want 'Special Character'?", a:false, data: "~!@-#$" },
                        { q: "Do you want 'Numeric Character'?", a: false, data: "0123456789" },
                        { q: "Do you want 'Lowercase Character'?", a:false, data: "abcdefghijklmnopqrstuvwxyz" },
                        { q: "Do you want 'Upercase Character'?", a:false, data: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"}]


        let password = '';
        let source = '';
        
        for(let i = 0; i < questions.length; i++){
            let userAnswer = confirm(questions[i].q);
            questions[i].a = userAnswer;

            if(userAnswer){
                source + questions[i].data
            }
        }
        for(let i = 0; i < userPassLength; i++){
           i = Math.floor(Math.random()*source.length);
            password = password.concat(source[i])
        }
  
        //if(questions[0].q
    }
    else{
        alert("Your input is not valid. Please try again!!")
    }
    

}