// cache mot de passe
$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
});


document.forms["inscription"].addEventListener("submit", function(e) {

	var erreur;
 
    var inputs = this;
    
const username = 'user@user.fr';
const password = 'password';

if (inputs["username"].value != username || inputs["loginpassword"].value != password) {
    erreur = "Adresse-email ou mot de passe invalide";
}
else{
    valide ="Authentification réussie"
}
	if (erreur) {
		e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        document.getElementById("valide").innerHTML = "";
		return false;
	} else {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = "";
        document.getElementById("valide").innerHTML = valide;
        
       function auth(){
        alert('Authentification réussie !');
        };
        setTimeout(auth, 1000);
    }
});