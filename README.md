# API
Неотъемлемыми этапами тестирования программного продукта являются проверки качества взаимодействия (интеграционное тестирование) между собственными элементами на модульном уровне, а также с другими программами и сторонними ресурсами на системном уровне.

В этом репозитории рассмотрим примеры интеграционных автотестов API (Application Programming Interface), реализованных в программе Postman, а также посредством языка программирования Java.

---

<div>
  <img src="https://github.com/btd1337/urutau-icons/blob/master/apps/48/postman.svg" title="Postman" alt="Postman" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/java/java-original-wordmark.svg" title="Java" alt="Java" width="40" height="40"/>&nbsp;
</div>

__Коротко о содержании:__
- В файле _HW - Postman (Tasks).txt_ находятся задачи по отправке GET и POST запросов с проведением автотестов по получаемым от сервера ответам.   
- В файле _HW - Postman.js_ - реализация задач с приведением кода JavaScript в формате удобном для чтения.   
- В файле _HW.postman_collection.json_ - коллекция, которую можно импортировать в Postman для более детального ознакомления.   

В папке _Reqres.in SITE_ приведена реализация автотестов API с тестового сайта [reqres.in](https://reqres.in/).   
Внутри Reqres.in SITE располагаются файл _reqres.in - Postman.js_ для просмотра кода, а также коллекция _REQRES.IN.postman_collection.json_ для импорта в Postman.   
В папке _Java_ можно будет найти файл реализации автотестов тестового API сайта reqres.in на языке программирования Java (_ReqrestApiTests.java_), а также папку с файлами, содержащими POJO-классы, используемые для сериализации и десериализации JSON.  
В разработке тестов API на Java использовались такие фреймворки как Rest Assured, Jackson, AssertJ.

---
