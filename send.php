<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$phone = $_POST['phone'];

// Формирование самого письма
// if(!empty($email)){
//     $title = "Новый подписчик";
// $body = "
// <h2>Желает подписаться</h2>
// <b>Email:</b> $email<br>
// ";}
// elseif(!empty($name)){
//     $title = "Новое обращение Best Tour Plan";
// $body = "
// <h2>Новое письмо</h2>
// <b>Имя:</b> $name<br>
// <b>Телефон:</b> $phone<br><br>
// <b>Email:</b> $email<br><br>
// <b>Сообщение:</b><br>$message
// "
// ;}
// else {
// $title = "Новое обращение Best Tour Plan";
// $body = "
// <h2>Новое письмо</h2>
// <b>Имя:</b> $name<br>
// <b>Телефон:</b> $phone<br><br>
// <b>Сообщение:</b><br>$message
// ";}
$title = "Заголовок письма";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Почта:</b> $email<br><br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'gittolk@mail.ru'; // Логин на почте
    $mail->Password   = '3001117a'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('gittolk@mail.ru', 'Артем Сергеевич'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('arttolk@bk.ru');  


    
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    


// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// if(empty($email)){
// header('location: thankyou.html');}
// else{
header('location: thankyou.html');
