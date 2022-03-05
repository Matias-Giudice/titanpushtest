<!DOCTYPE html>
<html>
    <head>
        <title>
            Ejercicio 3 TitanPush
        </title>
        <meta charset="utf-8"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <link href="styles.css" rel="stylesheet" type="text/css">
        </link>
    </head>
</html>
<body>
    <?php
    	class Personaje {
    		public $roles;
    		public $familia;
		}
		$npcTrevor = new Personaje();
		$jugador = new Personaje();

		$npcTrevor->roles = array("conversador","influyente");
		$npcRol = array_rand($npcTrevor->roles, 1);
		echo 'Rol: '. $npcTrevor->roles[$npcRol];
		echo "<hr/>";

		while ($npcTrevor->roles[$npcRol] == "conversador") {
			echo "Hola!¿Cómo estas?";
			break;
		}
		while ($npcTrevor->roles[$npcRol] == "influyente") {
			echo "Usted va a llegar muy lejos joven aventurero";
			break;
		}
		
    ?>
</body>