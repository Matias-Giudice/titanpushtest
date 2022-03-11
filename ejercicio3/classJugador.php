<?php
	require_once 'classPersonaje.php'; // Verifica si el archivo ya ha sido incluido 
	class Jugador extends Personaje { // Clase
		public function seleccionRol(){ // Metodos
			$jugador = new stdClass(); // Inicializar objeto
			$jugador->familia = new stdClass(); // Inicializar propiedad familia
			/*$jugador->familia = array("riverwood","white");
			shuffle($jugador->familia);
			foreach($jugador->familia as $new){
			    echo 'Jugador [Familia]: '. $new; // Mensaje indicando que familia toco
				echo "<hr/>";
				break;
			}*/
		}
	}
?>