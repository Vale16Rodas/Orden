<?php 
    $host = 'localhost';
    $db='prueba';
    $user='root';
    $pass='';
  
    try{
        $conn = new PDO("mysql:host=$host;dbname=$db",$user,$pass);
        $sql = "INSERT INTO datos(nombre,cadena,min,max) VALUES ($_POST['nom'], $_POST['cad'], $_POST['min'],$_POST['max'])";
        $conn->query($sql);
        echo("conexion correcta");
    }catch(PDOException $exp){
        echo("error");

    }
?>