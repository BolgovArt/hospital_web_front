Приложение работает следующим образом:
Полученные данные с формы записи "пациента" отправляются на сервер. Далее они обрабатываются на странице администратора и после принятия/отклонения заявки 
перезаписываются в другую "базу данных" с добавлением статуса true или false. Во вкладке "архив" заявки отображаются уже со второй "базы данных".

Недостаток метода: первая "база данных" остается захламленной, скрипту приходится постоянно фильтровать данные.
Поле почты пришлось сделать обязательным, поскольку по нему происходила сортировка.

Не удалось реализовать авторизацию администратора. В следствие этого отсутствует форма входа/выхода, формально сделал только вход.
Также в проекте отсутствует TS.
