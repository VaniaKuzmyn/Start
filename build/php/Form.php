<?php

$email = trim($_POST['email']); //trim remove probels
$phone = trim($_POST['phone']);
$name = trim($_POST['name']);
$dt = date('Y-m-d H:i:s');

	if($email  == '' || $phone == '' || $name == ''){
        echo 'заполните все поля';
	}
    elseif(!filter_var($email , FILTER_VALIDATE_EMAIL)){
        echo 'Введите коректный емеил адрес';
	}
    else{
        file_put_content('file.txt', "$dt $email $phone  $name \n", FILE_APPEND);
	echo '1';
	}

?>

<?php //header('Content-type: text/html; charset=utf-8');
$email = $_POST['email'];
$tel = $_POST['tel'];
$name = $_POST['name'];
echo $email.' '.$tel.' '.$name.' '.'Its okey!!!';

$email = $_GET['email'];
echo $email;
?>