<?php

  header("Content-Type: application/json");

  $data = json_decode(file_get_contents("php://input"));

  file_put_contents("muzaUpdated.json", json_encode($data));
  file_put_contents("muza.json", json_encode($data));

 ?>
