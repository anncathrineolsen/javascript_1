//opgave 1.1

 /* Hvis der er for få tal eller for mange tal indtastet, 
 skal funktionen returnere en meddelelse, hvor funktionen 
 gør opmærksom på dette. Dette skal arbejde med 11 og 10 cifre.*/
 
 let tal = ["01", "12", "95", "16", "8", "5"]
 if (tal.length == 6) { //konkretisere at længden på et cpr nr i forbindelse med arrayet
     console.log("Dit cpr nr er korrekt")
 }
 else if (tal.length >= 7){ // hvis vi skal skrive flere else, skriver vi else if
     console.log("Dit cpr nr er for langt")
 }
 else{ //afslutter et if statement med else
     console.log("Dit cpr nr er for kort")
 }

/* Koden skal kunne bestemme om du er mand eller kvinde. 
 1685 er en mand, fordi tallet er ulige, 
 hvorimod 1684 vil være en pige fordi tallet er lige. */
 
 if (tal[5] == 1, 3, 5, 7, 9){ // alle ulige tal
     console.log("Du er en mand")
 }
 else if (tal[5] == 2, 4, 6, 8){ // alle lige tal
     console.log("Du er en kvinde")
 }

/* Koden skal bestemme, om fødselsdagen er gyldige fødselsdagscifre. 
 Fx hvis tallene for dag overskrider 31, eller måned overskrider 12, 
 ja så er det ikke en gyldig fødselsdag.  
 */
 
 //er det nødvendigt at tjekke 0?
 if (tal[0] == 0){ 
     console.log("0 er 0")
 }

 //tjekker dage og om det er gyldige fødselsdagscifre
if(tal[0] <= 31){
    console.log("Din fødselsdags dag er korrekt")
}
else {
    console.log("din fødselsdag dag er forket")
}

//tjekker måneden og om det er en gyldig måned

if(tal[1] <= 12){
    console.log("Din fødsesldags måned er gyldig")
}
else {
    console.log("din fødselsdags måned er ikke gyldig")
}
