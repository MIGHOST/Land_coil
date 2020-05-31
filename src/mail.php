<?php
if($_POST['email']){
    sendWithPhpMailer($_POST['email'],$_POST['name'],$_POST['phone']);
    header('Location: thanks.html');
}
function sendWithPhpMailer($email,$name,$phone) {
    require_once('phpmailer/PHPMailerAutoload.php');
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->Host = 'smtp.i.ua';
    $mail->SMTPAuth = true;
    $mail->Username = 'oliver_knan@i.ua';
    $mail->Password = 'sotoxaf82';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->CharSet = 'UTF-8';
    $mail->setFrom('oliver_knan@i.ua', 'oliver_knan@i.ua');
    $mail->addAddress('oliver_knan@i.ua','Адмін');
    $mail->isHTML(true);
    $mail->Subject = 'Заявка с сайта https://komanda.kamerton.club/';
    $mail->Body = 'Пользователь ' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$email;;
    if(!$mail->send()) {
        return json_encode($mail->ErrorInfo);
    }else{
        return json_encode(['mail' => true]);
    }
}
function createMailBody($email){
    $html = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">';
    $html .= '<html>';
    $html .= '<head>';
    $html .= '<title>email notification</title>';
    $html .= '</head>';
    $html .= '<body>';
    $html .= '<table cellpadding="5" border="0" cellspacing="0" >';
    $html .= '<thead>';
    $html .= '<tr>';
    $html .= '<th>E-mail</th>';
    $html .= '</tr>';
    $html .= '</thead>';
    $html .= '<tbody>';
    $html .= '<tr>';
    $html .= '<td>' . $email . '</td>';
    $html .= '</tr>';
    $html.= '</tbody>';
    $html .= '</table>';
    $html .= '</body>';
    $html .= '</html>';
    return $html;
}
?>
