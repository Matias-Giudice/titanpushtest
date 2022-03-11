<!DOCTYPE html>
<html>
    <head>
        <title>
            Ejercicio 3 TitanPush
        </title>
        <meta charset="utf-8"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    </head>
</html>
<body>
	<?php
		require_once 'classJugador.php';  // Verifica si el archivo ya ha sido incluido 
        require_once 'classTrevor.php';  // Verifica si el archivo ya ha sido incluido 
        $jugador = new Jugador(); // Objeto
        $npcTrevor = new Trevor(); // Objeto
        echo $jugador->seleccionRol(); // Mensaje
        echo $npcTrevor->seleccionRol(); // Mensaje
	?>
</body>