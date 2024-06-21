<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datos del Login</title>
</head>
<body>
    <h2>Datos del Login</h2>
    <?php
    // Verificar si se han recibido los datos del formulario
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Obtener los datos del formulario
        $username = $_POST["username"];
        $password = $_POST["password"];

        // Mostrar los datos del formulario
        echo "<p>Usuario: $username</p>";
        echo "<p>Contraseña: $password</p>";
    } else {
        // Mostrar un mensaje si no se recibieron datos del formulario
        echo "<p>No se recibieron datos del formulario.</p>";
    }
    ?>
</body>
</html>
