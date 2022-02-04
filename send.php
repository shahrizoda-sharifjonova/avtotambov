<?php
$email2="avtotambov68.ru@yandex.ru"; // ----------------------------------------- почта, куда отправляем письмо
$headers  =  'MIME-Version: 1.0' . "\r\n";
    $headers .=  'Content-type: text/html; charset=UTF-8' . "\r\n";
    $headers .=  'To: <'.$email2.'>, '."\r\n";
    $headers .=  'From: <site.ru>' . "\r\n"; // ---------------------- адрес отправителя, это заголовок письма, менять не обязательно
$subject2    = "обратной связи с сайта"; // ----------------------------------------- заголовок
$message2    = "
<br>VIN-CODE: ".$_POST['vin']."
<br>Марка автомобиля: ".$_POST['marka']."
<br>Имя: ".$_POST['name']."
<br>Телефон: ".$_POST['phone']."
<br>Комменарий к звонку: ".$_POST['comment']."

<br>IP-адрес посетителя: ".@$_SERVER['REMOTE_ADDR']."
<br>Время заказа: ".date('Y-m-d H:i:s').";
";
$mail=mail($email2, $subject2, $message2, $headers);
header('Location: index.html');
?>


