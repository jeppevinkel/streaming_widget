<?php include_once('inc/utils.php'); ?>
<html>
    <head>
        <?=loadJSFiles()?>
        <title>Pubsub Widget</title>
        <style>
            /* audio { display: none; } */
        </style>
    </head>
    <body>
        <script>
            const mainController = new MainController();
            mainController.init();
        </script>
    </body>
</html>