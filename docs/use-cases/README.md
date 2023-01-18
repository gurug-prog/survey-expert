# Модель прецедентів

В даному файлі наведені графічні діаграми що відображують бізнес процеси.

Вбудовування зображень діаграм здійснюється з використанням сервісу [PlantUML](http://www.plantuml.com/)

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

## Схема використання для користувача

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

## Схема використання для авторизованого користувача

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

## Схема використання для менеджера організації

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

# Сценарії взаємодії

## Сценарії взаємодії для користувача

- ID: v1.NOT_LOGGED.001

    <center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

  @startuml

        left header
             <font color=000 size=16><b>ID:</b> v1.NOT_LOGGED.001
             <font color=000 size=16><b>НАЗВА:</b> Зареєструватись у системі
             <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система
             <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>
             <font color=000 size=16>Користувач не зареєстрований у системі.
             <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Система створює новий обліковий запис
             <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
             <font color=000 size=16>v1.NOT_LOGGED.EX.001
             <font color=000 size=16>v1.NOT_LOGGED.EX.002
         end header

         |Користувач|
             start
             :Натискає кнопку "Реєстрація";

             |Система|
             :Надсилає форму реєстрації
             нового користувача;

         |Користувач|
             :Вводить реєстраційні дані;

         |Система|
             :Обробляє передані
             реєстраційні дані;

             note right #ffaaaa
             <b>Можливі:</b>
             <b>v1.NOT_LOGGED.EX.001</b>
             <b>v1.NOT_LOGGED.EX.002</b>
             end note

             :Створює обліковий запис
             за валідованими даними;

             :Повідомляє користувача
             про створення облікового
             запису;

         |Користувач|

            :Підтверджує отримання
            повідомлення;

            stop;

  @enduml

    </center>

- ID: v1.NOT_LOGGED.002

  <center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

  @startuml

      left header
           <font color=000 size=16><b>ID:</b> v1.NOT_LOGGED.002
           <font color=000 size=16><b>НАЗВА:</b> Авторизуватись у системі
           <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система
           <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>
           <font color=000 size=16>Користувач зареєстрований у системі
           <font color=000 size=16>Користувач не авторизований у системі
           <font color=000 size=16><b>РЕЗУЛЬТАТ:</b>Сеанс роботи
           <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
           <font color=000 size=16>v1.NOT_LOGGED.EX.003
           <font color=000 size=16>v1.NOT_LOGGED.EX.004
       end header

       |Користувач|
           start
           :Натискає кнопку "Вхід";
        
       |Система|

           :Надсилає форму авторизації;

       |Користувач|

           :Передає авторизаційні дані:
           логін та пароль;

       |Система|
           :Ідентифікує користувача;

           note right #ffaaaa
           <b>Можлива</b>
           <b>v1.NOT_LOGGED.EX.003</b>
           end note

           :Аутентифікує користувача;

           note right #ffaaaa
           <b>Можлива</b>
           <b>v1.NOT_LOGGED.EX.004</b>
           end note

           :Авторизує користувача,
           надаючи інтерфейс взаємодії
           з сервісами системи;

         |Користувач|

            :Отримує доступ до сервісів
            інформаційної системи;

            stop;

  @enduml

    </center>

## Сценарії взаємодії для авторизованого користувача

- ID: v1.USER.001

  <center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

  @startuml

      left header
           <font color=000 size=16><b>ID:</b> v1.USER.001
           <font color=000 size=16><b>НАЗВА:</b> Отримати дані для проходження опитування
           <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система
           <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>
           <font color=000 size=16>Користувач авторизований у системі
           <font color=000 size=16>Користувач має доступ до запитаного опитування
           <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Дані для проходження опитування
           <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
           <font color=000 size=16>v1.COMMON.EX.001
           <font color=000 size=16>v1.COMMON.EX.002
       end header

       |Користувач|
           start
           :Натискає кнопку
           "Пройти опитування";

       |Система|
            :Перевіряє права
            доступу користувача;

            note right #ffaaaa
            <b>Можлива</b>
            <b>v1.COMMON.EX.002</b>
            end note

            :Знаходить назву, опис,
            питання та ролі, для 
            яких доступно проходження
            опитування;

            note right #ffaaaa
            <b>Можлива</b>
            <b>v1.COMMON.EX.001</b>
            end note

            :Надає користувачу сторінку
            проходження опитування;

        |Користувач|

            :Отримує сторінку
            з опитуванням;
            stop;

  @enduml

     </center>

- ID: v1.USER.002

    <center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

  @startuml

        left header
             <font color=000 size=16><b>ID:</b> v1.USER.002
             <font color=000 size=16><b>НАЗВА:</b> Завершити проходження опитування
             <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система
             <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>
             <font color=000 size=16>Користувач авторизований у системі.
             <font color=000 size=16>Користувач має доступ до запитаного опитування.
             <font color=000 size=16>Користувач коректно пройшов опитування.
             <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Повідомлення про зарахування результатів опитування користувача
             <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
             <font color=000 size=16>v1.NOT_LOGGED.EX.005
             <font color=000 size=16>v1.COMMON.EX.003
         end header

         |Користувач|
             start
             :Натискає кнопку
             "Завершити опитування" ;

         |Система|
             :Ідентифікує користувача;

             note right #ffaaaa
             <b>Можлива</b>
             <b>v1.NOT_LOGGED.EX.005</b>
             end note

             :Валідує надані відповіді;

             note right #ffaaaa
             <b>Можлива</b>
             <b>v1.COMMON.EX.003</b>
             end note

             :Надає користувачу повідомлення
             про зарахування результатів
             опитування;

         |Користувач|

            :Підтверджує отримання
            повідомлення;

             stop;

  @enduml

  </center>

- ID: v1.USER.003

    <center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

  @startuml

      left header
           <font color=000 size=16><b>ID:</b> v1.USER.003
           <font color=000 size=16><b>НАЗВА:</b> Отримати зворотній зв'язок стосовно надісланого опитування
           <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система
           <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>
           <font color=000 size=16>Користувач авторизований у системі.
           <font color=000 size=16>Користувач має доступ до запитаного опитування.
           <font color=000 size=16>Користувач коректно пройшов опитування.
           <font color=000 size=16>У системі є дані про зворотній зв'язок стосовно опитування
           <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Зворотній зв'язок стосовно надісланого опитування
           <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
           <font color=000 size=16>v1.NOT_LOGGED.EX.005
           <font color=000 size=16>v1.COMMON.EX.001
           <font color=000 size=16>v1.COMMON.EX.002
       end header

       |Користувач|
           start

           :Натискає на кнопку
           "Poll feedback";

       |Система|
           :Ідентифікує користувача;

           note right #ffaaaa
           <b>Можлива</b>
           <b>v1.NOT_LOGGED.EX.005</b>
           end note

           :Перевіряє, чи існує
           задане опитування;

           note right #ffaaaa
           <b>Можлива</b>
           <b>v1.COMMON.EX.001</b>
           end note

           :Перевіряє, чи є доступ
           у користувача до заданого
           опитування;

           note right #ffaaaa
           <b>Можлива</b>
           <b>v1.COMMON.EX.002</b>
           end note

           :Шукає назву, опис та
           результати заданого
           опитування;

           :Надає користувачу назву,
           опис та результати опитування;

       |Користувач|

            :Отримує форму
            з результатами;

           stop;

  @enduml

  </center>

## Сценарії взаємодії для менеджера організацій

- ID: v1.ORGANIZATION.001

    <center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

  @startuml

      left header
           <font color=000 size=16><b>ID:</b> v1.ORGANIZATION.001
           <font color=000 size=16><b>НАЗВА:</b> Створити організацію
           <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система
           <font color=000 size=16><b>ПЕРЕДУМОВИ:</b> Користувач авторизований у системі.
           <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Повідомлення про створення організації
           <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
           <font color=000 size=16>v1.NOT_LOGGED.EX.005
           <font color=000 size=16>v1.COMMON.EX.003
       end header

       |Користувач|
           start
           :Надсилає запит на
           створення організації;

       |Система|
           :Ідентифікує користувача;

           note right #ffaaaa
           <b>Можлива</b>
           <b>v1.NOT_LOGGED.EX.005</b>
           end note

           :Надає користувачу форму
           для заповнення даних
           про організацію;

       |Користувач|
           :Вносить назву, логотип,
           опис, ролі та їх права
           в організації;

       |Система|
           :Перевіряє правильність
           надісланих даних;

           note right #ffaaaa
           <b>Можлива</b>
           <b>v1.COMMON.EX.003</b>
           end note

           :Реєструє організацію;

           :Повідомляє користувача
           про створення організації;

       |Користувач|

            :Підтверджує отримання
            повідомлення;

            stop;

  @enduml

  </center>


- ID: v1.ORGANIZATION.002

    <center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

  @startuml

      left header
           <font color=000 size=16><b>ID:</b> v1.ORGANIZATION.002
           <font color=000 size=16><b>НАЗВА:</b> Отримати дані про організацію
           <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система
           <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>
           <font color=000 size=16>Користувач авторизований у системі.
           <font color=000 size=16>Користувач має доступ до запитаної організації.
           <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Дані про організацію
           <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
           <font color=000 size=16>v1.NOT_LOGGED.EX.005
           <font color=000 size=16>v1.COMMON.EX.001
           <font color=000 size=16>v1.COMMON.EX.002
       end header

       |Користувач|
           start
           :Запитує дані
           про організацію;

       |Система|
           :Ідентифікує користувача;
           note right #ffaaaa
           <b>Можлива</b>
           <b>v1.NOT_LOGGED.EX.005</b>
           end note

           :Перевіряє, чи
           існує організація;

           note right #ffaaaa
           <b>Можлива</b>
           <b>v1.COMMON.EX.001</b>
           end note

           :Знаходить назву, логотип,
           опис, ролі та їх права в
           організації;

           :Авторизує користувача
           для отримання даних
           про організацію;

           note right #ffaaaa
           <b>Можлива</b>
           <b>v1.COMMON.EX.002</b>
           end note

           :Надсилає користувачу
           назву, логотип, опис,
           ролі та їх права в організації;

       |Користувач|

            :Отримує форму з даними
            про організацію;

            stop;

  @enduml

  </center>

- ID: v1.ORGANIZATION.003

    <center style="border-radius:4px; border: 1px solid #cfd7e6; box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025); padding: 1em;">

  @startuml

      left header
         <font color=000 size=16><b>ID:</b> v1.ORGANIZATION.003
         <font color=000 size=16><b>НАЗВА:</b> Змінити дані про організацію
         <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система
         <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=16>Користувач авторизований у системі.
         <font color=000 size=16>Користувач має доступ до запитаної організації.
         <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Повідомлення про зміну даних організації.
         <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b>
         <font color=000 size=16>v1.NOT_LOGGED.EX.005
         <font color=000 size=16>v1.COMMON.EX.001
         <font color=000 size=16>v1.COMMON.EX.002
         <font color=000 size=16>v1.COMMON.EX.003

      end header

      |Користувач|
          start
          :Запитує зміну даних
          про організацію;
    
      |Система|
          :Ідентифікує користувача;

          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.NOT_LOGGED.EX.005</b>
          end note

          :Перевіряє, чи
          існує організація;

          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.COMMON.EX.001</b>
          end note
 
          :Знаходить назву, логотип, опис,
          ролі та їх права в організації;
 
          :Авторизує користувача у
          відповідності до його прав;
 
          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.COMMON.EX.002</b>
          end note

          :Надає користувачу форму
          для змінення назви,
          логотипу, опису, ролей та
          їх прав в організації;

      |Користувач|
          :Заповнює форму
          зміненими даними;

      |Система|
          :Перевіряє правильність
          надісланих даних;

          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.COMMON.EX.003</b>
          end note
 
          :Змінює дані
          про організацію;
 
          :Надсилає користувачу
          повідомлення про зміну
          даних організації;

      |Користувач|

            :Підтверджує отримання
            повідомлення;

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
        <font color=000 size=16>v1.NOT_LOGGED.EX.005
        <font color=000 size=16>v1.COMMON.EX.001
        <font color=000 size=16>v1.COMMON.EX.002
        <font color=000 size=16>v1.COMMON.EX.003
        <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>

      end header

      |Користувач|
          start

          :Натискає кнопку
          "Створити опитування";

      |Система|

          :Надає користувачу форму
          створення опитування;

      |Користувач|
          :Заповнює форму назвою
          опитування, описом, питаннями
          та ролями, які можуть приймати
          участь в опитуванні та мають
          до нього доступ;

          :Натискає кнопку
          "Відправити";

      |Система|
          :Ідентифікує
          користувача;
          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.NOT_LOGGED.EX.005</b>
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

          :Перевіряє правильність
          надісланих даних;
          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.COMMON.EX.003</b>
          end note

          :Створює опитування;

          :Повідомляє користувача
          про створення опитування;
    
      |Користувач|
          :Підтверджує отримання
          повідомлення;
  
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
        <font color=000 size=16>v1.NOT_LOGGED.EX.005
        <font color=000 size=16>v1.COMMON.EX.001
        <font color=000 size=16>v1.COMMON.EX.002
        <font color=000 size=16>v1.COMMON.EX.003
        <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>
  
      end header

      |Користувач|
          start

          :Відкриває форму запиту
          на змінення опитування;

      |Система|

          :Надає користувачу форму
          для змінення опитування;

      |Користувач|      
          :Заповнює форму,
          змінюючи дані;
    
          :Натискає кнопку
          "Відправити";
  
      |Система|
          :Отримує запит;
    
          :Ідентифікує
          користувача;

          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.NOT_LOGGED.EX.005</b>
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
    
          :Перевіряє правильність
          надісланих даних;
          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.COMMON.EX.003</b>
          end note
    
          :Зберігає зміни внесені
          користувачем до опитування;
    
          :Повідомляє користувача
          про збереження змін;
  
      |Користувач|          
          
          :Підтверджує отримання
          повідомлення;

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
        <font color=000 size=16>v1.NOT_LOGGED.EX.005
        <font color=000 size=16>v1.COMMON.EX.001
        <font color=000 size=16>v1.COMMON.EX.002
        <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>

      end header

      |Користувач|
          start
    
          :Натискає кнопку
          "Переглянути результати";

      |Система|

          :Отримує запит
          від користувача;

          :Ідентифікує
          користувача;
          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.NOT_LOGGED.EX.005</b>
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

          :Авторизує користувача
          для отримання результатів
          опитування;
          note right #ffaaaa
          <b>Можлива</b>
          <b>v1.COMMON.EX.002</b>
          end note

          :Надсилає користувачу
          результати опитування;

      |Користувач|
          :Отримує форму
          з резутататми;

          stop;

  @enduml

  </center>

## Виключні випадки

- ID: v1.COMMON.EX.001

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;" >
    
@startuml

left header
         <font color=000 size=16><b>ID:</b> v1.COMMON.EX.001
         <font color=000 size=16><b>НАЗВА:</b> Повідомити про відсутність запитаних даних
         <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система 
         <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=16>Користувач авторизований у системі
         <font color=000 size=16>Запитані дані відсутні у системі
         <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Повідомлення про відсутність запитаних даних
     end header
     |Користувач|
         start
         :Надсилає запит на отримання
         неіснуючих даних;
 
     |Система|
         :Надає користувачу повідомлення 
         про відсутність запитаних даних;

     |Користувач|
         :Підтверджує отримання
         повідомлення;

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
         <font color=000 size=16><b>ID:</b> v1.COMMON.EX.002
         <font color=000 size=16><b>НАЗВА:</b> Користувач не має доступу до даних
         <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система 
         <font color=000 size=16><b>ПЕРЕДУМОВИ:</b> Система відхилила запит користувача до даних.
         <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Повідомлення про відхилення доступу до даних.
     end header

     |Користувач|
         start
         :Надсилає запит на
         отримання даних;

     |Система|
         :Визначає, що користувач
         не має доступу до даних;

         :Надає користувачу повідомлення 
         про відхилення доступу до даних;

     |Користувач| 
         :Підтверджує отримання
         повідомлення;

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
         <font color=000 size=16><b>ID:</b> v1.COMMON.EX.003
         <font color=000 size=16><b>НАЗВА:</b> Відхилити хибні дані
         <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система
         <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=16>Користувач авторизований у системі.
         <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Повідомлення про відхилення хибних даних.
     end header

     |Користувач|
         start
         :Надсилає у систему хибні дані;             

     |Система|        
         :Надає користувачу повідомлення
         про відхилення хибних даних;

     |Користувач|
         :Отримує повідомлення
         про відхилення хибних даних;

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
         <font color=000 size=16><b>ID:</b> v1.NOT_LOGGED.EX.001
         <font color=000 size=16><b>НАЗВА:</b> Відхилити запит на реєстрацію
         <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система
         <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=16>Користувач не зареєстрований у системі.
         <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Система відхилює реєстрацію
     end header
      |Користувач|
          start
          :Вводить неправильні
          реєстраційні дані;

     |Система|
         :Надає користувачу повідомлення
         про відхилення реєстрації;

     |Користувач|
         :Підтверджує отримання
         повідомлення;

         stop;

@enduml

</center>

- ID: v1.NOT_LOGGED.EX.002

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;" >

@startuml

    left header
         <font color=000 size=16><b>ID:</b> v1.NOT_LOGGED.EX.002
         <font color=000 size=16><b>НАЗВА:</b> Відхилити запит на реєстрацію
         <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система
         <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=16>Користувач зареєстрований у системі
         <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Система відхилила реєстрацію
     end header
      |Користувач|
          start
          :Вводить реєстраційні дані;

     |Система|
         :Визначає, що користувач
         вже зареєстрований;

         :Надає користувачу повідомлення
         про відхилення реєстрації;

     |Користувач|
         :Підтверджує отримання
         повідомлення;

         stop;

@enduml

</center>

- ID:	v1.NOT_LOGGED.EX.003

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;" >

@startuml

    left header
         <font color=000 size=16><b>ID:</b> v1.NOT_LOGGED.EX.003
         <font color=000 size=16><b>НАЗВА:</b> Помилка ідентифікації
         <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система
         <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=16>Користувач не авторизований у системі
         <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Система відхилила авторизацію
     end header

     |Користувач|
         start
         :Виконує дії, потрібні
         для авторизації;

     |Система|
         :Визначає, що користувача
         неможливо ідентифікувати;

         :Повідомляє користувача про
         відхилення авторизації;

     |Користувач|
         :Підтверджує отримання
         повідомлення;

         stop;

@enduml

</center>

- ID: v1.NOT_LOGGED.EX.004

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;" >

@startuml

    left header
         <font color=000 size=16><b>ID:</b> v1.NOT_LOGGED.EX.004
         <font color=000 size=16><b>НАЗВА:</b> Відхилити спробу авторизації через помилку аутентифікації
         <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система
         <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>
         <font color=000 size=16>Користувач не авторизований у системі
         <font color=000 size=16><b>РЕЗУЛЬТАТ:</b>
         <font color=000 size=16>Система відхилила авторизацію та
         <font color=000 size=16>знизила ступінь довіри до користувача
     end header
             
     |Користувач|
         start
         :Намагається авторизуватися з
         хибними аутентифікаційними даними;

     |Система|
         :Знижує ступінь довіри
          до користувача;

         :Надає користувачу повідомлення
         про відхилення авторизації через
         помилку аутентифікації;

     |Користувач|
         :Підтверджує отримання
         повідомлення;

         stop;

@enduml

</center>

- ID: v1.NOT_LOGGED.EX.005

    <center style="
        border-radius:4px;
        border: 1px solid #cfd7e6;
        box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
        padding: 1em;" >

  @startuml

      left header

        <font color=000 size=16><b>ID:</b> v1.NOT_LOGGED.EX.005
        <font color=000 size=16><b>НАЗВА:</b> Відхілити доступ для неавторизованого користувача
        <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система 
        <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>
        <font color=000 size=16>Користувач не авторизований у системі
        <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Система відхилила запит на доступ

      end header

      |Користувач|
          start
          :Запитує доступ до
          ресурсу системи;

      |Система|
          :Визначає, що користувач
          неавторизований;

          :Повідомляє користувача
          про відхилення доступу;

      |Користувач|
          :Підтверджує отримання
          повідомлення;

          stop;

  @enduml

  </center>
