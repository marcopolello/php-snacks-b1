<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <?php include "data.php" ?>
    <?php /*
      function parking($value)
      {
        if ($value == true) {
          $parking = "Si";
        } else {
          $parking = "No";
        }
        return $parking;
      } */
    ?>
  </head>
  <body>
    <?php foreach ($hotels as $key => $hotel) {
      ?><h2>Nome dell'hotel: <?php echo $hotel['name'];  ?></h2><?php
      ?><h4 style="text-decoration: underline;"> <?php echo $hotel['description'];  ?></h4><?php
      ?><h4>Possibilità di parcheggio: <?php
      echo ($hotel['parking'] == false) ? "No" : "Si"; /*parking($hotel['parking']) */
      ?></h2><?php
      ?><h4>Voto hotel: <?php echo $hotel['vote'];  ?>/5</h4><?php
      ?><h4>Distanza dal centro: <?php echo $hotel['distance_to_center'];  ?> Km</h4><?php
    } ?>
  </body>
</html>
