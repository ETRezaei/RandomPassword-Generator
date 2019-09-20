function getRandomPass(){
    let userPassLength = prompt("Please pick a password length between 8 to 128");
    if(userPassLength > 7 && userPassLength <= 128){
        
        let questions = [{ q: "Do you want 'Special Character'?", a: false, data: "~!@-#$" },
                        { q: "Do you want 'Numeric Character'?", a: false, data: "0123456789" },
                        { q: "Do you want 'Lowercase Character'?", a: false, data: "abcdefghijklmnopqrstuvwxyz" },
                        { q: "Do you want 'Upercase Character'?", a: false, data: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"}]


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

        if (source === ""){
            alert("please choose at least one character type!");
        }
        else{
        for(let c = 0; c < userPassLength; c++){
           let i = Math.floor(Math.random()*source.length);
            password = password + source[i];
            // console.log(password);
        }
        // console.log(password);
  
        //if(questions[0].q
        return password;
    }
    }
    else{
        alert("Your input is not valid. Please try again!!")
    }
    
}

let request = document.querySelector("#generate");
let textArea = document.querySelector("#password");
let copy = document.querySelector("#copy");

request.addEventListener('click',function(event){
    event.preventDefault();
    let finalPass = getRandomPass();

    textArea.textContent = finalPass;
    copy.disabled = false;

})

copy.addEventListener("click", function(){
    copyToClipboard();
})


function copyToClipboard() {
    var passwordText = document.querySelector("#password");
  
    passwordText.select();
    document.execCommand("copy");
  
    alert(
      "Your password " + passwordText.value + " was copied to your clipboard."
    );
  }

