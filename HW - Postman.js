// http://162.55.220.72:5005/first

//3. Проверить, что в body приходит правильный string.
var expectedResult = "This is the first responce from server!ss";
var responseData = pm.response.text();
console.log(responseData);
pm.test("Body is correct", function () {
    pm.expect(responseData).to.eql(expectedResult);
});

// __________________


// http://162.55.220.72:5005/user_info_3

// 3. Спарсить response body в json.
var responseData = pm.response.json();

//4. Проверить, что name в ответе равно name s request (name вбить руками.)
pm.test("Name-1", function() {
pm.expect(responseData.name).to.eql("Vika");
});

//5. Проверить, что age в ответе равно age s request (age вбить руками.)
pm.test("Age-1", function() {
pm.expect(responseData.age).to.eql("32");
});

//6. Проверить, что salary в ответе равно salary s request (salary вбить руками.)
pm.test("Salary-1", function() {
let actualResult = +responseData.salary 
pm.expect(actualResult).to.eql(1000);
});

//7. Спарсить request.
var requestData = request.data;

//8. Проверить, что name в ответе равно name s request (name забрать из request.)
pm.test("Name-2", function() {
pm.expect(responseData.name).to.eql(requestData.name);
});

//9. Проверить, что age в ответе равно age s request (age забрать из request.)
pm.test("Age-2", function() {
pm.expect(responseData.age).to.eql(requestData.age);
});

//10. Проверить, что salary в ответе равно salary s request (salary забрать из request.)
pm.test("Salary-2", function() {
let resSalary = +responseData.salary
let reqSalary = +requestData.salary
pm.expect(resSalary).to.eql(reqSalary);
});


//11. Вывести в консоль параметр family из response.
console.log(responseData.family);

//12. Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)
pm.test("u_salary_1_5_year", function() {
let reqSalary = +requestData.salary;
let res_u_salary_1_5_year = +responseData.family.u_salary_1_5_year;
pm.expect(res_u_salary_1_5_year).to.eql(reqSalary * 4);
});

// __________________

// http://162.55.220.72:5005/object_info_3

//3. Спарсить response body в json.
var responseData = pm.response.json();

//4. Спарсить request.
var requestData = pm.request.url.query.toObject();

//5. Проверить, что name в ответе равно name s request (name забрать из request.)
pm.test("Name", function(){
    pm.expect(responseData.name).to.eql(requestData.name);
});

//6. Проверить, что age в ответе равно age s request (age забрать из request.)
pm.test("Age", function(){
    pm.expect(responseData.age).to.eql(requestData.age);
});

//7. Проверить, что salary в ответе равно salary s request (salary забрать из request.)
pm.test("Salary", function(){
    pm.expect(+responseData.salary).to.eql(+requestData.salary);
});

//8. Вывести в консоль параметр family из response.
console.log(responseData.family);

//9. Проверить, что у параметра dog есть параметры name.
pm.test("Dog's name-1", function () {
    pm.expect(responseData.family.pets.dog).to.property("name");
});

//10. Проверить, что у параметра dog есть параметры age.
pm.test("Dog's age-1", function () {
    pm.expect(responseData.family.pets.dog).to.property("age");
});

//11. Проверить, что параметр name имеет значение Luky.
pm.test("Dog's name-2", function () {
    pm.expect(responseData.family.pets.dog.name).to.eql("Luky");
});

//12. Проверить, что параметр age имеет значение 4.
pm.test("Dog's age-2", function () {
    pm.expect(responseData.family.pets.dog.age).to.eql(4);
});

// __________________

// http://162.55.220.72:5005/object_info_4

//3. Спарсить response body в json.
var responseData = pm.response.json();

//4. Спарсить request.
var requestData = pm.request.url.query.toObject();

//5. Проверить, что name в ответе равно name s request (name забрать из request.)
pm.test("Name", function(){
    pm.expect(responseData.name).to.eql(requestData.name);
});

//6. Проверить, что age в ответе равно age из request (age забрать из request.)
pm.test("Age", function(){
    pm.expect(+responseData.age).to.eql(+requestData.age);
});

//7. Вывести в консоль параметр salary из request.
console.log(requestData.salary);

//8. Вывести в консоль параметр salary из response.
console.log(responseData.salary);

//9. Вывести в консоль 0-й элемент параметра salary из response.
console.log(responseData.salary[0]);

//10. Вывести в консоль 1-й элемент параметра salary параметр salary из response.
console.log(responseData.salary[1]);

//11. Вывести в консоль 2-й элемент параметра salary параметр salary из response.
console.log(responseData.salary[2]);

//12. Проверить, что 0-й элемент параметра salary равен salary из request (salary забрать из request.)
pm.test("Element 0", function(){
    pm.expect(+responseData.salary[0]).to.eql(+requestData.salary);
})

//13. Проверить, что 1-й элемент параметра salary равен salary*2 из request (salary забрать из request.)
pm.test("Element 1", function(){
    pm.expect(+responseData.salary[1]).to.eql(2 * +requestData.salary);
})

//14. Проверить, что 2-й элемент параметра salary равен salary*3 из request (salary забрать из request.)
pm.test("Element 2", function(){
    pm.expect(+responseData.salary[2]).to.eql(3 * +requestData.salary);
})

// 15. Создать в окружении переменную name
// 16. Создать в окружении переменную age
// 17. Создать в окружении переменную salary
// 18. Передать в окружение переменную name
pm.environment.set("name", responseData.name);
// 19. Передать в окружение переменную age
pm.environment.set("age", responseData.age);
// 20. Передать в окружение переменную salary
pm.environment.set("salary", responseData.salary[0]);


//21. Написать цикл который выведет в консоль по порядку элементы списка из параметра salary.
for (let i = 0; i < 3; i++){
    console.log(+responseData.salary[i]);
}

// __________________

// http://162.55.220.72:5005/user_info_2

// 1. Вставить параметр salary из окружения в request
// 2. Вставить параметр age из окружения в age
// 3. Вставить параметр name из окружения в name
// 4. Отправить запрос.
// 5. Статус код 200
// 6. Спарсить response body в json.
var responseData = pm.response.json();

// 7. Спарсить request.
var requestData = request.data;

//8. Проверить, что json response имеет параметр start_qa_salary
pm.test("Have start_qa_salary", function () {
     pm.expect(responseData).to.property("start_qa_salary");
});

// 9. Проверить, что json response имеет параметр qa_salary_after_6_months
pm.test("Have qa_salary_after_6_months", function () {
    pm.expect(responseData).to.property("qa_salary_after_6_months");
});

// 10. Проверить, что json response имеет параметр qa_salary_after_12_months
pm.test("Have qa_salary_after_12_months", function () {
    pm.expect(responseData).to.property("qa_salary_after_12_months");
});

// 11. Проверить, что json response имеет параметр qa_salary_after_1.5_year
pm.test("Have qa_salary_after_1.5_year", function () {
    pm.expect(responseData).to.property("qa_salary_after_1.5_year");
});

// 12. Проверить, что json response имеет параметр qa_salary_after_3.5_years
pm.test("Have qa_salary_after_3.5_years", function () {
    pm.expect(responseData).to.property("qa_salary_after_3.5_years");
});

// 13. Проверить, что json response имеет параметр person
pm.test("Have person", function () {
    pm.expect(responseData).to.property("person");
});

// 14. Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request.)
pm.test("requestData.salary = start_qa_salary", function () {
    pm.expect(+requestData.salary).to.eql(+responseData.start_qa_salary);
});

// 15. Проверить, что параметр qa_salary_after_6_months равен salary*2 из request (salary забрать из request.)
pm.test("requestData.salary*2 = qa_salary_after_6_months", function () {
    pm.expect(+requestData.salary * 2).to.eql(+responseData.qa_salary_after_6_months);
});

// 16. Проверить, что параметр qa_salary_after_12_months равен salary*2.7 из request (salary забрать из request.)
pm.test("requestData.salary*2.7 = qa_salary_after_12_months", function () {
    pm.expect(+requestData.salary * 2.7).to.eql(+responseData.qa_salary_after_12_months);
});

// 17. Проверить, что параметр qa_salary_after_1.5_year равен salary*3.3 из request (salary забрать из request.)
pm.test("requestData.salary*3.3 = qa_salary_after_1.5_year", function () {
    pm.expect(+requestData.salary * 3.3).to.eql(+responseData["qa_salary_after_1.5_year"]);
});

// 18. Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request (salary забрать из request.)
pm.test("requestData.salary*3.3 = qa_salary_after_3.5_years", function () {
    pm.expect(+requestData.salary * 3.8).to.eql(+responseData["qa_salary_after_3.5_years"]);
});

// 19. Проверить, что в параметре person, 1-й элемент из u_name равен salary из request (salary забрать из request.)
pm.test("responseData.person.u_name[1] = requestData.salary", function () {
    pm.expect(+responseData.person.u_name[1]).to.eql(+requestData.salary);
});

// 20. Проверить, что что параметр u_age равен age из request (age забрать из request.)
pm.test("responseData.person.u_name[1] = requestData.salary", function () {
    pm.expect(+responseData.person.u_age).to.eql(+requestData.age);
});

// 21. Проверить, что параметр u_salary_5_years равен salary*4.2 из request (salary забрать из request.)
pm.test("responseData.person.u_name[1] = requestData.salary", function () {
    pm.expect(+responseData.person.u_salary_5_years).to.eql(+requestData.salary * 4.2);
});

// 22. ***Написать цикл который выведет в консоль по порядку элементы списка из параметра person.
let totalElements  = Object.keys(responseData.person).length;
let personData = Object.keys(responseData.person);
for (let i = 0; i < totalElements; ++i) {
    console.log(personData[i]);
}