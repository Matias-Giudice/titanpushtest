<?php
/*
	La clase 'classNPC', tiene como propieda '$roles', la cual en la siguiente función 'interactuar()', guardará un array
	con los roles, familias y su respectivo mensaje.
	Luego guardo en la variable '$rol', de forma aleatoria selecciono una clave del array ('conversador','influyente'), lo muestro
	y despues mediante el rol que se selecciono, tambien de forma aleatoria selecciono la familia y muestro su mensaje.
*/
	class classNPC{
		private $roles;
		public function interactuar(){
			$roles = array(
							'conversador' => array(
												'riverwood' => "Respuesta: Hola señore! Bienvenido a su casa", 
								  	  			'white' => "Respuesta: Hola! ¿Usted es hijo de Walter?"),
							'influyente' => array(
												'riverwood' => "Respuesta: Riverwood esta mucho mejor con usted y hara grandes cosas", 
								  	  			'white' => "Respuesta: Sus metas lograrán que el cielo vuelva a estar azul")
							);
			$rol = array_rand($roles); 
			echo "Trevor[ROL]: $rol <br>";
			echo $roles[$rol][array_rand($roles[$rol])]; 
			echo "<hr>";
		}
	}
?>