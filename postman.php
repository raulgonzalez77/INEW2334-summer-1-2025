<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://postman-echo.com/get',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer XYZ',
    'Cookie: sails.sid=s%3AiCbhFO8EPt1wFGotlILHzRJV58emvZJA.o0vC9%2Bl25biqyhJwG5G0VhPb%2Fw5LlQ1%2FCKJ1VZ21Ggk'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
