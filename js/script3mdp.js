
    document.getElementById("mdp2").addEventListener("input", function() {
        var paragraphe = document.getElementById("mdpgestion");
        if (this.value != document.getElementById("mdp1").value) {
            paragraphe.innerHTML = "Les mots de passe ne correspondent pas";
            $('#mdpgestion').addClass( "error" );
            $('#mdpgestion').removeClass( "valide" );
        } else {
            paragraphe.innerHTML = "Les mots de passe sont identiques";
            $('#mdpgestion').removeClass( "error" );
            $('#mdpgestion').addClass( "valide" );
            
        }
    });



//     });
  
	// if (!nom.value) {
	// 	validation = "Veuillez renseigner un nom";
    // }
    // if (!prenom.value) {
	// 	validation = "Veuillez renseigner un prenom";
	// }
	// if (!email.value) {
	// 	validation = "Veuillez renseigner un email";
	// }
	// if (!login.value) {
	// 	validation = "Veuillez renseigner un identifiant";
	// }
    // });

