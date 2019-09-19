// function getRandomPass(){
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
            //questions[i].a = userAnswer;

            if(userAnswer){
                //console.log(questions[i].data);
                //source.concat( questions[i].data);
                source = source + questions[i].data;
            }
        }
        for(let c = 0; c < userPassLength; c++){
           let i = Math.floor(Math.random()*source.length);
            password = password + source[i];
            console.log(password);
        }
        console.log(password);
  
        //if(questions[0].q
    }
    else{
        alert("Your input is not valid. Please try again!!")
    }
    

// }