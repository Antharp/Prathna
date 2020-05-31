
//verif mdp oublié
document.forms["mdp"].addEventListener("submit", function(e) {

	var nonvalide;
 
    var inputs = this;
    
const username = 'user@user.fr';

if (inputs["username"].value != username) {
    nonvalide = "Adresse inexistante";
}
else{
    valide ="Un mail de reinitialisation a été envoyé"
}
	if (nonvalide) {
		e.preventDefault();
		document.getElementById("emailval").innerHTML = nonvalide;
		$('#emailval').removeClass( "valide" );
		$('#emailval').addClass( "error" );
		return false;
	} else {
        e.preventDefault();
		document.getElementById("emailval").innerHTML =valide;
		$('#emailval').removeClass( "error" );
		$('#emailval').addClass( "valide" );
		return false;
    }
});