<?php
	class Personaje { // Clase
    	// Propiedades
    	public $roles;
    	public $familia;
	}
	$npcTrevor = new Personaje(); // Objeto
	$jugador = new Personaje(); // Objeto

	$jugador->familia = array("riverwood","white"); // En el objeto jugador, guardo en la propiedad familia un array
	$pjFamilia = array_rand($jugador->familia, 1); // Luego en otra variable, guardo el elemento aleatorio del array

	$npcTrevor->roles = array("conversador","influyente"); // En el objeto npcTrevor, guardo en la propiedad roles un array
	$npcRol = array_rand($npcTrevor->roles, 1); // Luego en otra variable, guardo el elemento aleatorio del array

	echo 'Familia: '. $jugador->familia[$pjFamilia]; // Mensaje indicando que familia toco
	echo "<hr/>";

	echo 'Rol: '. $npcTrevor->roles[$npcRol]; // Mensaje indicando que rol toco
	echo "<hr/>";
	// Verifico que la familia del jugador sea riverwood
	while ($jugador->familia[$pjFamilia] == "riverwood") {
		// Verifico que el rol de Trevor sea conversador
		while ($npcTrevor->roles[$npcRol] == "conversador") {
			echo "Hola señore! Bienvenido su casa";
			break;
		}
		// Verifico que el rol de Trevor sea influyente
		while ($npcTrevor->roles[$npcRol] == "influyente") {
			echo "Riverwood esta mucho mejor con usted y hara grandes cosas";
			break;
		}
		break;
	}
	// Verifico que la familia del jugador sea white
	while ($jugador->familia[$pjFamilia] == "white") {
		// Verifico que el rol de Trevor sea conversador
		while ($npcTrevor->roles[$npcRol] == "conversador") {
			echo "Hola! ¿Usted es hijo de Walter?";
			break;
		}
		// Verifico que el rol de Trevor sea influyente
		while ($npcTrevor->roles[$npcRol] == "influyente") {
			echo "Sus metas lograrán que el cielo vuelva a estar azul";
			break;
		}
		break;
	}
?>