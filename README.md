# API
Неотъемлемыми этапами тестирования продукта являются проверки качества взаимодействия (интеграционное тестирование) между собственными элементами на модульном уровне, а также с другими программами и сторонними ресурсами на системном уровне.

В этом репозитории рассмотрим примеры интеграционных автотестов API (Application Programming Interface), реализованных в программе Postman, а также посредством языка программирования Java.

---

<div>
  <img src="https://github.com/btd1337/urutau-icons/blob/master/apps/48/postman.svg" title="Postman" alt="Postman" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/java/java-original-wordmark.svg" title="Java" alt="Java" width="40" height="40"/>&nbsp;
</div>

__Коротко о содержании:__
- В файле __HW - Postman (Tasks).txt__ находятся задачи по отправке GET и POST запросов с проведением автотестов по получаемым от сервера ответам.   
- В файле __HW - Postman.js__ - реализация задач с приведением кода JavaScript в формате удобном для чтения.   
- В файле __HW.postman_collection.json__ - файл с коллекцией, который можно импортировать в Postman для более детального ознакомления.   

В папке __Reqres.in SITE__ приведена реализация автотестов API с тестового сайта [reqres.in](https://reqres.in/).   
Внутри Reqres.in SITE располагаются файл __reqres.in - Postman.js__ для просмотра кода, а также коллекция __REQRES.IN.postman_collection.json__ для импорта в Postman.   
В папке __Java__ можно будет найти файл реализации автотестов тестового API reqres.in на языке программирования Java - __ReqrestApiTests.java__, а также папку с файлами, содержащими POJO-классы, используемые для сериализации и десериализации JSON.  
В разработке тестов API на Java использовались такие фреймворки как Rest Assured, Jackson, AssertJ.

---
