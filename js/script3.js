//rien ne marche ici
document.forms["inscription"].addEventListener("submit", function(e) {
    var checkbox = document.getElementById("condi");
    var erreur;
    if (checkbox.checked == false){
             erreur="veuillez accepter les conditions d'utilisations";
         }
    else{
            validation ="Inscription réussite"
    }
    if (erreur){
            e.preventDefault();
            document.getElementById("validation").innerHTML = erreur;
            // $('#validation').removeClass( "valide" );
            // $('#validation').addClass( "error" );
            return false;
        }
        else{
            e.preventDefault();
            document.getElementById("validation").innerHTML = validation;
            // $('#validation').removeClass( "error" );
            // $('#validation').addClass( "valide" );
            setTimeout(function(){ alert("Inscription réussite !"); }, 3000);
 
        }
});
// ça marche pas
//     document.forms["inscription"].addEventListener("submit", function(e) {
//     var erreur;
//     var validation;
//     var checkbox = document.getElementById("condi");

// console.log("coucou");
 
// if (inputs["nom"].value == "" || inputs["prenom"].value == "" ) {
//     erreur = "Remplir nom et prénom";
// }
// else if (inputs["mail"].value == ""){
//     erreur = "Remplir l'adresse e-mail";
// }
// else if (inputs["mdp1"].value == "" ||inputs["mdp2"].value == ""  ){
//     erreur = "entrer un mot de passe";
// }
// else if (checkBox.checked == false){
//     erreur="veuillez accepter les conditions d'utilisations";
// }
// else{
//     validation ="Inscription réussite"
// }

// if (erreur){
//     e.preventDefault();
//     document.getElementById("validation").innerHTML = erreur;
//     $('#validation').removeClass( "valide" );
//     $('#validation').addClass( "error" );
//     return false;
// }
// else{
//     e.preventDefault();
//     document.getElementById("validation").innerHTML = validation;
//     $('#validation').removeClass( "error" );
//     $('#validation').addClass( "valide" );
//     alert('Inscription réussite !');
// }
// });
