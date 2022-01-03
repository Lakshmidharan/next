var lsgwoerter = [
    ["G", "I", "L", "L", "I"],
      ["A","Y","A","N"],
      ["J","A","I","B","H","I","M"],
      ["N","A","N","B","A","N"],
      ["G","I","R","I"],
      ["M","U","D","H","A","L","V","A","N"]
    ]
    var random = Math.floor((Math.random()*(lsgwoerter.length-1))); 
    
    var lsgwort = lsgwoerter[random];
    var ratewort = new Array(lsgwort.length);
    var fehler = 0;
    
    
    for (var i = 0; i < ratewort.length; i++){
        ratewort[i] = "_ ";
    }
    
    
    function printRatewort(){
        for (var i = 0; i < ratewort.length; i++){
        var ratefeld = document.getElementById("ratefeld");
        var buchstabe = document.createTextNode(ratewort[i]);
        ratefeld.appendChild(buchstabe);
        }
    }
    
   
    var pruefeZeichen = function(){
        var f = document.rateformular; 
        var b = f.elements["ratezeichen"]; 
        var zeichen = b.value; 
        zeichen = zeichen.toUpperCase();
        for (var i = 0; i < lsgwort.length; i++){
            if(lsgwort[i] === zeichen){
                ratewort[i] = zeichen + " ";
                var treffer = true;
            }
        b.value = "";
        }
        
       
        var ratefeld = document.getElementById("ratefeld");
        ratefeld.innerHTML=""; 
        printRatewort();
        
   
        if(!treffer){
            var gerateneBuchstaben = document.getElementById("gerateneBuchstaben");
            var buchstabe = document.createTextNode(" " + zeichen);
            gerateneBuchstaben.appendChild(buchstabe); 
            fehler++;
            var hangman = document.getElementById("hangman");
        hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + fehler + ".png";
        }
        
       
        var fertig = true;
        for (var i = 0; i < ratewort.length; i++){
            if(ratewort[i] === "_ "){
                fertig = false;
            }
        }
        if(fertig){
            window.alert("You win!");
        }
        
       
        if(fehler === 6){
            window.alert("Uh...I guess you're dead now.");
        }
    }
    
    function init(){
        printRatewort();
    }
    
    window.onload = init;