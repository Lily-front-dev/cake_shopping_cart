<?
	// *** Настройка обязательности полей, в случае если они присутствуют в вашей форме

	// Имя
	const NAMEISREQUIRED = true;
	const MSGSNAMEERROR = "⚠ Поле обязательно для заполнения";

	// Телефон
	const TELISREQUIRED = true;
	const MSGSTELERROR = "⚠ Поле обязательно для заполнения";

	// Email
	const EMAILISREQUIRED = true;
	const MSGSEMAILERROR = "⚠ Поле обязательно для заполнения";
	const MSGSEMAILINCORRECT = "⚠ Некорректный почтовый адрес";

	// Компания
	const COMPANYISREQUIRED = false;
	const MSGSNAMEERROR = "⚠ Поле обязательно для заполнения";

	// Текстовое поле
	const TEXTISREQUIRED = false;
	const MSGSTEXTERROR = "⚠ Поле обязательно для заполнения";

	// Файл
	const FILEISREQUIRED = false;
	const MSGSFILEERROR = "⚠ Забыли добавить файл";

	// Соглашение
	const AGGREMENTISREQUIRED = true;
	const MSGSAGGREMENTERROR = "⚠ Примите пользовательское соглашение"; 

	// Сообщение об успешной отправке
	const MSGSSUCCESS = "Сообщение успешно отправлено";

	// *** SMTP *** //

		//require_once($_SERVER['DOCUMENT_ROOT'] . '/mail/phpmailer/smtp.php');
		//const HOST = 'ssl://smtp.gmail.com';
		//const LOGIN = 'brezdinatest@gmail.com';
		//const PASS = 'lilitest6498';
		//const PORT = '465';

	// *** /SMTP *** //

  // Почта с которой будет приходить письмо
	const SENDER = 'brezdinatest@gmail.com';
	
	// Почта на которую будет приходить письмо
	const CATCHER = 'brezdinatest@gmail.com';
	
	// Тема письма
	const SUBJECT = 'Заявка на звонок с Cakes';
	
	// Кодировка
  const CHARSET = 'UTF-8';
