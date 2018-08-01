<!DOCTYPE>
<html lang="pt_br">
<head>
    <title>Meu CMS</title>
    <link rel="stylesheet" href="_cdn/css/reset.css">
    <link rel="stylesheet" href="_cdn/css/style.css">
</head>
<body>

<?php

if(!file_exists('dbconn.php')){
    header('location: install');
}

if(is_dir('install') || file_exists('install/dump.sql')){
    echo "<div class='attention'>
            <p>Atenção! O diretório de instalação está presente no projeto. Remova o diretório para continuar a usar o sistema!</p>
        </div>";
}

?>

</body>
</html>