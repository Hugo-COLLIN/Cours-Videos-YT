<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mon portfolio</title>

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <section class="container-fluid">
        <div class="container" id="content">
            <h1>Ma galerie photos</h1>
            <hr>
            <!--Start gallery-->
            <?php for($i = 0 ; $i < 2 ; $i ++): ?>
            <div class="row">
                <?php for ($j = 0 ; $j < 3 ; $j ++): ?>
                <article class="col-md-4">
                    <a href="#">
                        <img src="https://via.placeholder.com/350x250.png">
                        <span class="pane">
                            <span class="pane_info">
                                <h2 class="title">Title</h2>
                                <p class="desc">Description de l'image</p>
                                <button href="#" class="btn btn-danger">Click here »</button>
                            </span>
                        </span>
                    </a>
                </article>
                <?php endfor; ?>
            </div>
            <?php endfor; ?>
            <!--End gallery-->
        </div>
    </section>

    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>