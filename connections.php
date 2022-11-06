<?php
    try{
    $m = new MongoClient();

    $db = $m->regform;
    $collection = $db->userdata; 
    }
    catch (Exception $e){
        die("Error. Couldn't connect to the server. Please Check");
    }
       session_start();
?>