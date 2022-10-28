<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>What-Watch</title>

    <!-- BOOTSTRAP -->
    <link href="assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <script src="assets/bootstrap/js/bootstrap.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">

    <!-- JQUERY -->
    <script src="https://code.jquery.com/jquery-3.6.1.js"
            integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>

    <!-- CUSTOM CSS -->
    <link rel="stylesheet" href="assets/css/style.css"/>
</head>
<body>
<div class="container-fluid">
    <div class="col-12 h-25 d-flex flex-column justify-content-center align-content-center align-items-center">
        <img src="assets/icons/what-watch-icon.png" alt="what-watch logo" class="h-50">
        <div class="col-3 d-flex flex-column justify-content-center align-content-center align-items-center">
            <input id="inputSearch" type="text" placeholder="Entrez le nom d'un film" class="form-control">
            <button id="btnSearch" type="button" class="btn btn-secondary btn-lg btn-block w-100 mt-1">Rechercher</button>
        </div>

    </div>
</div>
<div class="container-fluid mt-5">
    <div id="movieList" class="col-12 d-flex flex-column justify-content-center align-content-center align-items-center"></div>
</div>

</body>
<script type="text/javascript" src="javascript/index.js" defer></script>
</html>