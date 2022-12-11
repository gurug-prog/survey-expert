# Модель прецедентів

В даному файлі наведені графічні діаграми що відображують бізнес процеси.

Вбудовування зображень діаграм здійснюється з використанням сервісу [UML Editor](https://jace-dev.herokuapp.com/design/uml-editor#/), що створений Андрієм Болдаком.

В markdown-файлі використовується опис діаграми.

## Діаграма прецедентів

<center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

@startuml
actor User
actor AuthorizedUser
actor OrganizationManager

AuthorizedUser -u-|> User
OrganizationManager -u-|> AuthorizedUser

usecase "**NOT_LOGGED**\nЗареєструватись та авторизуватись" as NL
usecase "**USER**\nОтримати та пройти опитування" as U
usecase "**ORGANIZATION**\nСтворити та редагувати організацію\nСтворити, аналізувати та редагувати опитування" as O
User -r-> NL
AuthorizedUser -r-> U
OrganizationManager -r-> O
@enduml

  </center>

## Схеми використання для користувача

<center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

@startuml
actor User

usecase "**NOT_LOGGED**\nЗареєструватись та авторизуватись" as NL

User -r-> NL

usecase "**NOT_LOGGED.001**\nЗареєструватись у системі" as REG
usecase "**NOT_LOGGED.002**\nАвторизуватись у системі" as AUTH

NL .u.> REG : extends
NL .u.> AUTH : extends
@enduml

  </center>

## Схеми використання для авторизованого користувача

<center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

@startuml
actor AuthorizedUser

usecase "**USER**\nОтримати та пройти опитування" as U

AuthorizedUser -r-> U

usecase "**USER.001**\nОтримати дані для проходження опитування" as GET
usecase "**USER.002**\nНадіслати дані про проходження опитування" as SEND
usecase "**USER.003**\nОтримати зворотній зв'язок \nстосовно надісланого опитування" as GET_REVIEW

U .u.> GET : extends
U .u.> SEND : extends
U .d.> GET_REVIEW : extends
@enduml

  </center>

## Схеми використання для менеджера організації

<center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

@startuml
actor OrganizationManager

usecase "**ORGANIZATION**\nСтворити та редагувати організацію\nСтворити, аналізувати та редагувати опитування" as O

OrganizationManager -r-> O

usecase "**ORGANIZATION.001**\nСтворити організацію" as CREAT
usecase "**ORGANIZATION.002**\nОтримати дані про організацію" as GET
usecase "**ORGANIZATION.003**\nЗмінити дані про організацію" as CHANGE
usecase "**ORGANIZATION.004**\nСтворити опитування" as CREATE_POLL
usecase "**ORGANIZATION.005**\nЗмінити дані про опитування" as EDIT_POLL
usecase "**ORGANIZATION.006**\nОтримати результати опитування" as GET_POLL_RESULTS

O .u.> CREAT : extends
O .u.> GET : extends
O .u.> CHANGE : extends
O .r.> CREATE_POLL : extends
O .d.> EDIT_POLL : extends
O .d.> GET_POLL_RESULTS : extends
@enduml

  </center>

<br><br>

## Сценарії використання для користувача
<br><br>

- ID: v1.NOT_LOGGED.001

    <center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

  @startuml

        left header
             <font color=000 size=10><b>ID:</b> v1.NOT_LOGGED.001
             <font color=000 size=10><b>НАЗВА:</b> Зареєструватись у системі
             <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система
             <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
             <font color=000 size=10>Користувач не зареєстрований у системі.
             <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Новий обліковий запис
             <font color=000 size=10><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
             <font color=000 size=10>v1.NOT_LOGGED.EX.001
         end header

         |Користувач|
             start
             : Натискає кнопку "Реєстрація" ;
             : Передає реєстраційні данні:
             Логін, пароль та пошта;

         |Система|
             : Перевіряє переданні реєстраційні данні;

             note right #ff0000
             <b>Можлива</b>
             <b>v1.NOT_LOGGED.EX.001</b>
             end note

             : створює обліковий запис за переданими
             реєстраційними даними;

             : надає користувачу інформацію про
             створення облікового запису;

         |Користувач|
             stop;

  @enduml

    </center>

- ID: v1.NOT_LOGGED.002

  <center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

  @startuml

      left header
           <font color=000 size=10><b>ID:</b> v1.NOT_LOGGED.002
           <font color=000 size=10><b>НАЗВА:</b> Авторизуватись у системі
           <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система
           <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
           <font color=000 size=10>Користувач зареєстрований у системі.
           <font color=000 size=10>Користувач не авторизований у системі.
           <font color=000 size=10><b>РЕЗУЛЬТАТ:</b>Сеанс роботи
           <font color=000 size=10><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
           <font color=000 size=10>v1.NOT_LOGGED.EX.002
           <font color=000 size=10>v1.NOT_LOGGED.EX.003
       end header

       |Користувач|
           start
           : Натискає кнопку "Вхід" ;
           : Передає авторизаційні дані:
           Логін та пароль;

       |Система|
           : ідентифікує користувача;

           note right #ff0000
           <b>Можлива</b>
           <b>v1.NOT_LOGGED.EX.002</b>
           end note

           : авторизує користувача, та
           надає користувачу авторизацію у системі;

         |Користувач|
             stop;

  @enduml

    </center>

## Сценарії для авторизованого користувача

- ID: v1.USER.001

  <center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

  @startuml

      left header
           <font color=000 size=10><b>ID:</b> v1.USER.001
           <font color=000 size=10><b>НАЗВА:</b> 	Отримати дані для проходження опитування
           <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система
           <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
           <font color=000 size=10>Користувач авторизований у системі.
           <font color=000 size=10>Користувач має доступ до запитаного опитування.
           <font color=000 size=10><b>РЕЗУЛЬТАТ:</b>Дані для проходження опитування
           <font color=000 size=10><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
           <font color=000 size=10>v1.NOT_LOGGED.EX.004
           <font color=000 size=10>v1.COMMON.EX.001
           <font color=000 size=10>v1.COMMON.EX.002
       end header

       |Користувач|
           start
           : Натискає кнопку "Пройти опитування" ;

       |Система|
           : ідентифікує користувача;

           note right #ff0000
           <b>Можлива</b>
           <b>v1.NOT_LOGGED.EX.004</b>
           end note

           :знаходить назву, опис, питання та ролі, для 
           яких доступно проходження опитування;

           note right #ff0000
           <b>Можлива</b>
           <b>v1.COMMON.EX.001</b>
           end note

           :авторизує користувача для отримання даних;

           note right #ff0000
           <b>Можлива</b>
           <b>v1.COMMON.EX.002</b>
           end note

           :надає користувачу сторінку для проходження опитування;

       |Користувач|

       :отримує сторінку для проходження опитування.;
           stop;

  @enduml

     </center>

- ID: v1.USER.002

    <center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

  @startuml

        left header
             <font color=000 size=10><b>ID:</b> v1.USER.002
             <font color=000 size=10><b>НАЗВА:</b>Завершити проходження опитування
             <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система
             <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
             <font color=000 size=10>Користувач авторизований у системі.
             <font color=000 size=10>Користувач має доступ до запитаного опитування.
             <font color=000 size=10>Користувач коректно пройшов опитування.
             <font color=000 size=10><b>РЕЗУЛЬТАТ:</b>Повідомлення про зарахування результатів опитування користувача
             <font color=000 size=10><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
             <font color=000 size=10>v1.NOT_LOGGED.EX.004
             <font color=000 size=10>v1.COMMON.EX.001
             <font color=000 size=10>v1.COMMON.EX.002
             <font color=000 size=10>v1.COMMON.EX.003
         end header

         |Користувач|
             start
             : Натискає кнопку "Завершити опитування" ;

         |Система|
             : ідентифікує користувача;

             note right #ff0000
             <b>Можлива</b>
             <b>v1.NOT_LOGGED.EX.004</b>
             end note

             :перевіряє правильність наданих
             користувачем відповідей на питання;

             note right #ff0000
             <b>Можлива</b>
             <b>v1.COMMON.EX.003</b>
             end note

             :надає користувачу повідомлення про зарахування результатів опитування;

         |Користувач|
             stop;

  @enduml

  </center>

- ID: v1.USER.003

    <center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

  @startuml

      left header
           <font color=000 size=10><b>ID:</b> v1.USER.003
           <font color=000 size=10><b>НАЗВА:</b> Отримати зворотній зв'язок стосовно надісланого опитування
           <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система
           <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
           <font color=000 size=10>Користувач авторизований у системі.
           <font color=000 size=10>Користувач має доступ до запитаного опитування.
           <font color=000 size=10>Користувач коректно пройшов опитування.
           <font color=000 size=10>У системі є дані про зворотній зв'язок стосовно опитування
           <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Зворотній зв'язок стосовно надісланого опитування
           <font color=000 size=10><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
           <font color=000 size=10>->v1.NOT_LOGGED.EX.004
           <font color=000 size=10>->v1.COMMON.EX.001
           <font color=000 size=10>->v1.COMMON.EX.002
           <font color=000 size=10>->v1.COMMON.EX.003
       end header
       |Користувач|
           start
           : Натискає на отримання
           даних про зворотній зв'язок
           стосовно опитування;
       |Система|
           : Шукає користувача у
           базі даних користувачів
           та ідентифікує його;

           note right #ff0000
           <b>Можлива</b>
           <b>v1.NOT_LOGGED.EX.004</b>
           end note

           : Перевіряє, чи існує задане опитування;

           note right #ff0000
           <b>Можлива</b>
           <b>v1.COMMON.EX.001</b>
           end note

           : Перевіряє, чи є доступ
           у користувача до заданого
           опитування;

           note right #ff0000
           <b>Можлива</b>
           <b>v1.COMMON.EX.002</b>
           end note

           : Перевіряє чи пройшов
           користувач опитування;

           note right #ff0000
           <b>Можлива</b>
           <b>v1.COMMON.EX.003</b>
           end note

           : Шукає назву, опис та результати заданого опитування;

           : Надає користувачу назву, опис та 
           результати заданого опитування;
       |Користувач|
           stop;

  @enduml

  </center>

## Сценарії для менеджера організацій

- ID: v1.ORGANIZATION.001

    <center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

  @startuml

      left header
           <font color=000 size=10><b>ID:</b> v1.ORGANIZATION.001
           <font color=000 size=10><b>НАЗВА:</b> Створити організацію
           <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система
           <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>Користувач авторизований у системі.
           <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Повідомлення про створення організації
           <font color=000 size=10><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
           <font color=000 size=10>->v1.NOT_LOGGED.EX.004
           <font color=000 size=10>->v1.COMMON.EX.003
       end header

       |Користувач|
           start
           : Надсилає запит на
           створення організації ;

       |Система|
           : Шукає користувача у
           базі даних користувачів
           та ідентифікує його;

           note right #ff0000
           <b>Можлива</b>
           <b>v1.NOT_LOGGED.EX.004</b>
           end note

           : Надає користувачу форму
           для заповнення даних
           про організацію;

       |Користувач|
           : Вносить назву, логотип,
           опис, ролі та їх права в організації;

       |Система|
           : Перевіряє правильність
           надісланих даних;

           note right #ff0000
           <b>Можлива</b>
           <b>v1.COMMON.EX.003</b>
           end note

           : Створює організацію;

           : Надсилає користувачу дані
           про створення організації;
       |Користувач|
           stop;

  @enduml

  </center>


- ID: v1.ORGANIZATION.002

    <center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

  @startuml

      left header
           <font color=000 size=10><b>ID:</b> v1.ORGANIZATION.002
           <font color=000 size=10><b>НАЗВА:</b> Отримати дані про організацію
           <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система
           <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
           <font color=000 size=10>Користувач авторизований у системі.
           <font color=000 size=10>Користувач має доступ до запитаної організації.
           <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Дані про організацію
           <font color=000 size=10><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
           <font color=000 size=10>v1.NOT_LOGGED.EX.004
           <font color=000 size=10>v1.COMMON.EX.001
           <font color=000 size=10>v1.COMMON.EX.002
       end header

       |Користувач|
           start
           : Запитує дані
           про організацію ;

       |Система|
           : Ідентифікує користувача;
           note right #ff0000
           <b>Можлива</b>
           <b>v1.NOT_LOGGED.EX.004</b>
           end note

           : Перевіряє, чи
           існує організація;

           note right #ff0000
           <b>Можлива</b>
           <b>v1.COMMON.EX.001</b>
           end note

           : Знаходить назву, логотип,
           опис, ролі та їх права в організації;

           : Авторизує користувача
           для отримання даних
           про організацію;

           note right #ff0000
           <b>Можлива</b>
           <b>v1.COMMON.EX.002</b>
           end note

           : Надсилає користувачу
           назву, логотип, опис,
           ролі та їх права в організації;
       |Користувач|
           stop;

  @enduml

  </center>

- ID: v1.ORGANIZATION.003

    <center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

  @startuml

      left header
         <font color=000 size=10><b>ID:</b> v1.ORGANIZATION.003
         <font color=000 size=10><b>НАЗВА:</b> Змінити дані про організацію
         <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система
         <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=10>Користувач авторизований у системі.
         <font color=000 size=10>Користувач має доступ до запитаної організації.
         <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Повідомлення про зміну даних організації.
         <font color=000 size=10><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
         <font color=000 size=10>v1.NOT_LOGGED.EX.004
         <font color=000 size=10>v1.COMMON.EX.001
         <font color=000 size=10>v1.COMMON.EX.002
         <font color=000 size=10>v1.COMMON.EX.003

      end header

      |Користувач|
          start
          : Запитує зміну
          даних про організацію ;
    
      |Система|
          : Ідентифікує користувача;

          note right #ff0000
          <b>Можлива</b>
          <b>v1.NOT_LOGGED.EX.004</b>
          end note

          : Перевіряє, чи
          існує організація;

          note right #ff0000
          <b>Можлива</b>
          <b>v1.COMMON.EX.001</b>
          end note
 
          : Знаходить назву, логотип, опис,
           ролі та їх права в організації;
 
          : Авторизує користувача
          для зміни назви, логотипу, опису,
          ролей та їх прав в організації у 
          відповідності до його прав;
 
          note right #ff0000
          <b>Можлива</b>
          <b>v1.COMMON.EX.002</b>
          end note

          : Надає користувачу форму
          для заповнення змінених
          назви, логотипу, опису,
          ролей та їх прав в організації;

      |Користувач|
          : Заповнює форму
          зміненими даними;

      |Система|
          : Перевіряє правильність
          надісланих даних;

          note right #ff0000
          <b>Можлива</b>
          <b>v1.COMMON.EX.003</b>
          end note
 
          : Змінює дані
          про організацію;
 
          : Надсилає користувачу
          повідомлення про зміну
          даних організації;

      |Користувач|
          stop;

  @enduml

  </center>

- ID: v1.ORGANIZATION.004

    <center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

  @startuml

      left header
        <font color=000 size=18><b>ID:</b> v1.ORGANIZATION.004
        <font color=000 size=16><b>НАЗВА:</b> Створити опитування
        <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система
        <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>
        <font color=000 size=16>1.Користувач авторизований у системі.
        <font color=000 size=16>2.Користувач має доступ до запитаної організації.
        <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Повідомлення про створення опитування.
        <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
        <font color=000 size=16>v1.NOT_LOGGED.EX.004
        <font color=000 size=16>v1.COMMON.EX.001
        <font color=000 size=16>v1.COMMON.EX.002
        <font color=000 size=16>v1.COMMON.EX.003
        <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>

      end header
    
      |Користувач|
          start
          :Авторизується
          в системі;
    
          :Відкриває
          форму для
          створення опитування;
      |Система|
          :Надає користувачу форму
          створення опитування;
            
      |Користувач|            
          :Заповнює форму
          запиту назвою опитування, описом,
          питаннями та ролями, які можуть приймати
          участь в опитуванні та мають до нього доступ;
  
          :Натискає
          кнопку "Відправити запит";
    
      |Система|
          :Ідентифікує
          користувача;
          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.NOT_LOGGED.EX.004</b>
          end note
    
          :Знаходить дані
          про організацію;
          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.COMMON.EX.001</b>
          end note
  
          :Авторизує користувача
          для створення опитування;
          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.COMMON.EX.002</b>
          end note
  
          :Перевіряє
          правильність надісланих даних;
          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.COMMON.EX.003</b>
          end note
  
          :Створює опитування;
  
          :Надсилає
          користувачу повідомлення про
          створення опитування;
    
      |Користувач|
          :Завершує
          взаємодію;
  
          stop;
    
  @enduml

  </center>

- ID: v1.ORGANIZATION.005

    <center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

  @startuml

      left header
        <font color=000 size=18><b>ID:</b> v1.ORGANIZATION.005
        <font color=000 size=16><b>НАЗВА:</b> Змінити дані про опитування
        <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система
        <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>
        <font color=000 size=16>1.Користувач авторизований у системі.
        <font color=000 size=16>2.Користувач має доступ до запитаної організації.
        <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Повідомлення про змінення даних опитування.
        <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
        <font color=000 size=16>v1.NOT_LOGGED.EX.004
        <font color=000 size=16>v1.COMMON.EX.001
        <font color=000 size=16>v1.COMMON.EX.002
        <font color=000 size=16>v1.COMMON.EX.003
        <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>
  
      end header

      |Користувач|
          start
          :Авторизується
          в системі;
    
          :Відкриває
          форму запиту
          на змінення опитування;
      |Система|
          :Надає користувачу форму
          для змінення опитування;

      |Користувач|      
          :Заповнює форму
          запиту зміненою назвою, описом,
          питаннями, та ролями які можуть 
          приймати участь та мають доступ
          до опитування;
    
          :Натискає
          кнопку "Відправити запит";
  
      |Система|
          :Отримує запит
          від користувача;
    
          :Ідентифікує
          користувача;
          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.NOT_LOGGED.EX.004</b>
          end note
    
          :Знаходить дані
          про організацію
          та опитування;
          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.COMMON.EX.001</b>
          end note
    
          :Авторизує користувача
          для змінення опитування;
          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.COMMON.EX.002</b>
          end note
    
          :Перевіряє
          правильність надісланих даних;
          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.COMMON.EX.003</b>
          end note
    
          :Змінює опитування;
    
          :Надсилає
          користувачу повідомлення про
          змінення опитування;
  
      |Користувач|          
          :Завершує
          взаємодію;

          stop;

  @enduml

  </center>


- ID: v1.ORGANIZATION.006

    <center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

  @startuml

      left header
        <font color=000 size=18><b>ID:</b> v1.ORGANIZATION.006
        <font color=000 size=16><b>НАЗВА:</b> Отримати результати опитування
        <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система
        <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>
        <font color=000 size=16>1.Користувач авторизований у системі.
        <font color=000 size=16>2.Користувач має доступ до запитаної організації.
        <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Результати опитування
        <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
        <font color=000 size=16>v1.NOT_LOGGED.EX.004
        <font color=000 size=16>v1.COMMON.EX.001
        <font color=000 size=16>v1.COMMON.EX.002
        <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>

      end header

      |Користувач|
          start
          :Авторизується
          в системі;
    
          :Відкриває
          форму запиту
          результатів опитування;
            
      |Система|
          :Надає користувачу форму
          для отримання результатів опитування;
            
      |Користувач|      
          :Нажимає
          кнопку "Відправити запит";

      |Система|
          :Отримує запит
          від користувача;

          :Ідентифікує
          користувача;
          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.NOT_LOGGED.EX.004</b>
          end note

          :Перевіряє
          рівень доступу користувача;

          :Знаходить назву організації,
          її ролі та їх права в організації,
          назву опитування та ролі, у яких є до 
          нього доступ;
          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.COMMON.EX.001</b>
          end note

          :Авторизує
          користувача для отримання
          результатів опитування;
          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.COMMON.EX.002</b>
          end note

          :Надсилає
          користувачу результати
          опитування;

      |Користувач|           
          :Завершує
          взаємодію;

          stop;

  @enduml

  </center>

## Виключні випадки

- ID: v1.NOT_LOGGED.EX.004

    <center style="
        border-radius:4px;
        border: 1px solid #cfd7e6;
        box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
        padding: 1em;" >
    
  @startuml
  
      left header
        <font color=000 size=10><b>ID:</b> v1.NOT_LOGGED.EX.004
        <font color=000 size=10><b>НАЗВА:</b> Відхілити доступ для неавторизованого користувача
        <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система 
        <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
        <font color=000 size=10>Користувач не авторизований у системі.
        <font color=000 size=10>Система відхилила запит неавторизованого користувача.
        <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Повідомлення про відхиленя доступу для неавторизованого користувача.
      end header
      |Користувач|
          start
          : Запитує доступ не будучи авторизованим;            
      |Система|
          : Надає користувачу повідомлення
          про відхиленя доступу 
          для неавторизованого користувача.;
      |Користувач|
          : Отримує повідомлення про 
          відхиленя доступу для 
          неавторизованого користувача.;           
          :Завершує
          взаємодію;

          stop;

  @enduml

  </center>

- ID: v1.COMMON.EX.001

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;" >
    
@startuml

left header
         <font color=000 size=10><b>ID:</b> v1.COMMON.EX.001
         <font color=000 size=10><b>НАЗВА:</b> Повідомити про відсутність запитаних даних
         <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система 
         <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=10>Користувач авторизований у системі.
         <font color=000 size=10>Користувач запитав дані, що відсутні у системі.
         <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Повідомлення про відсутність запитаних даних.
     end header
     |Користувач|
         start
         : Надсилає запит на отримання
         неіснуючих даних;             
     |Система|
         : Надає користувачу повідомлення 
         про відсутність запитаних даних.;
     |Користувач|
         : Отримує повідомлення 
         про відсутність запитаних даних.;           
          :Завершує
          взаємодію;

          stop;

@enduml

  </center>


- ID: v1.COMMON.EX.002

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;" >
    
@startuml
  
    left header
         <font color=000 size=10><b>ID:</b> v1.COMMON.EX.002
         <font color=000 size=10><b>НАЗВА:</b> Відхилити доступ користувача до даних
         <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система 
         <font color=000 size=10><b>ПЕРЕДУМОВИ:</b> Система відхилила запит користувача до даних.
         <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Повідомлення про відхилення доступу до даних.
     end header
     |Користувач|
         start
         : Надсилає запит на отримання доступу до
         недоступних користувачу даних;             
     |Система|
         : Надає користувачу повідомлення 
         про відхилення доступу до даних.;
     |Користувач| 
         : Отримує повідомлення 
         про відхилення доступу до даних.;           
          :Завершує
          взаємодію;

          stop;

@enduml

  </center>

- ID: v1.COMMON.EX.003

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;" >

@startuml

    left header
         <font color=000 size=10><b>ID:</b> v1.COMMON.EX.003
         <font color=000 size=10><b>НАЗВА:</b> Відхилити хибні дані
         <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система
         <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=10>Користувач авторизований у системі.
         <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Повідомлення про відхилення хибних даних.
     end header
     |Користувач|
         start
         : Надсилає у систему хибні дані;             
     |Система|        
         : Надає користувачу повідомлення
         про відхилення хибних даних.;
     |Користувач|
         : Отримує повідомлення
         про відхилення хибних даних.;           
          :Завершує
          взаємодію;

          stop;

@enduml

  </center>
           
- ID: v1.NOT_LOGGED.EX.001

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;" >

@startuml

    left header
         <font color=000 size=10><b>ID:</b> v1.NOT_LOGGED.EX.001
         <font color=000 size=10><b>НАЗВА:</b> Відхилити запит на реєстрацію
         <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система
         <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=10>Користувач не зареєстрований у системі.
         <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Повідомлення про відхилення реєстрації
     end header
      |Користувач|
          start
          : Вносить невірні дані при реєстрації;
     |Система|
         : Надає користувачу повідомлення
         про відхилення реєстрації;

     |Користувач|
         : Отримує повідомлення про
         відхилення реєстрації;
         : Завершує взаємодію;
         stop;

@enduml

</center>

- ID:	v1.NOT_LOGGED.EX.002

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;" >

@startuml

    left header
         <font color=000 size=10><b>ID:</b> v1.NOT_LOGGED.EX.002
         <font color=000 size=10><b>НАЗВА:</b> Відхилити спробу авторизації через помилку ідентифікації
         <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система
         <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=10>Користувач не авторизований у системі.
         <font color=000 size=10>Система не змогла ідентифікувати користувача.
         <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Повідомлення про помилку спроби авторизації
     end header

     |Користувач|
         start
         : Виконує дію, що потребує авторизації, 
         будучи неідентифікованим;             
     |Система|
         : Надає користувачу повідомлення про відхилення
         авторизації через помилку ідентифікації;

     |Користувач|
         : Отримує повідомлення про відхилення
         авторизації через помилку ідентифікації;
         : Завершує взаємодію;
         stop;

@enduml

</center>

- ID: v1.NOT_LOGGED.EX.003

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;" >

@startuml

    left header
         <font color=000 size=10><b>ID:</b> v1.NOT_LOGGED.EX.003
         <font color=000 size=10><b>НАЗВА:</b> Відхилити спробу авторизації через помилку аутентифікації
         <font color=000 size=10><b>УЧАСНИКИ:</b> Користувач, Система
         <font color=000 size=10><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=10>Клієнт не авторизований у системі.
         <font color=000 size=10>Система не змогла аутентифікувати користувача.
         <font color=000 size=10><b>РЕЗУЛЬТАТ:</b> Повідомлення про спроби авторизації
     end header
             
     |Користувач|
         start
         : Виконує дію, що потребує авторизації, 
         будучи неаутентифікованим;
     |Система|
         : Надає користувачу повідомлення про відхилення
         авторизації через помилку аутентифікації;  
         : Знижує ступінь довіри до користувача;  
             
     |Користувач|
         : Отримує повідомлення про відхилення
         авторизації через помлку аутентифікації;
         : Завершує взаємодію;
         stop;

@enduml

</center>
