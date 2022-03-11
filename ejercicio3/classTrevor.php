<?php
	require_once 'classPersonaje.php'; // Verifica si el archivo ya ha sido incluido 
	require_once 'classJugador.php'; // Verifica si el archivo ya ha sido incluido 
	class Trevor extends Personaje { // Clase
		public function seleccionRol(){ // Metodos
			$jugador = new stdClass(); // Inicializar objeto
			$jugador->familia = new stdClass(); // Inicializar propiedad familia
			$npcTrevor = new stdClass(); // Inicializar objeto
			$npcTrevor->rol = new stdClass(); // Inicializar propiedad rol

			$jugador->familia = array("riverwood","white"); // En el objeto jugador, guardo en la propiedad familia un array
			shuffle($jugador->familia); // Mezcla el array
			$npcTrevor->rol = array("conversador","influyente"); // En el objeto npcTrevor, guardo en la propiedad rol un array
			shuffle($npcTrevor->rol); // Mezcla el array

			foreach($jugador->familia as $seleccionJugador){
				echo 'Jugador [Familia]: '. $seleccionJugador; // Mensaje indicando que familia toco
				echo "<hr/>";
			    foreach($npcTrevor->rol as $seleccionTrevor){
				    echo 'Trevor [Rol]: '. $seleccionTrevor; // Mensaje indicando que rol toco
					echo "<hr/>";
					
					// Verifico que la familia del jugador sea riverwood
					while ($seleccionJugador == "riverwood") {
						// Verifico que el rol de Trevor sea conversador
						while ($seleccionTrevor == "conversador") {
							echo "Hola señore! Bienvenido a su casa";
							break;
						}
						// Verifico que el rol de Trevor sea influyente
						while ($seleccionTrevor == "influyente") {
							echo "Riverwood esta mucho mejor con usted y hara grandes cosas";
							break;
						}
						break;
					}

					// Verifico que la familia del jugador sea white
					while ($seleccionJugador == "white") {
						// Verifico que el rol de Trevor sea conversador
						while ($seleccionTrevor == "conversador") {
							echo "Hola! ¿Usted es hijo de Walter?";
							break;
						}
						// Verifico que el rol de Trevor sea influyente
						while ($seleccionTrevor  == "influyente") {
							echo "Sus metas lograrán que el cielo vuelva a estar azul";
							break;
						}
						break;
					}
					break;
				}
				break;
			}
		}
	}
?>