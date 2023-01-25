
// These tests check reqres.in site API


//------------------------------------LIST USERS------------------------------------
// LIST USERS
// https://reqres.in/api/users?page=2
// Method: GET

// Arrange
const PAGE = 2;
const PER_PAGE = 6;
const TOTAL = 12;
const TOTAL_PAGES = 2;

const ID = [7, 8, 9, 10, 11, 12];
const EMAIL = ["michael.lawson@reqres.in", "lindsay.ferguson@reqres.in", "tobias.funke@reqres.in",
"byron.fields@reqres.in", "george.edwards@reqres.in", "rachel.howell@reqres.in"];
const FIRST_NAME = ["Michael", "Lindsay", "Tobias", "Byron", "George", "Rachel"];
const LAST_NAME = ["Lawson", "Ferguson", "Funke", "Fields", "Edwards", "Howell"];
const AVATAR = ["https://reqres.in/img/faces/7-image.jpg", "https://reqres.in/img/faces/8-image.jpg",
            "https://reqres.in/img/faces/9-image.jpg", "https://reqres.in/img/faces/10-image.jpg",
            "https://reqres.in/img/faces/11-image.jpg" ,"https://reqres.in/img/faces/12-image.jpg"];

const URL = "https://reqres.in/#support-heading";
const TEXT = "To keep ReqRes free, contributions towards server costs are appreciated!";

// Assert
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Check HEADER", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.page).to.eql(PAGE);
    pm.expect(jsonData.per_page).to.eql(PER_PAGE);
    pm.expect(jsonData.total).to.eql(TOTAL);
    pm.expect(jsonData.total_pages).to.eql(TOTAL_PAGES);
});

pm.test("Check ID", function () {
    var jsonData = pm.response.json();
    for(let i = 0; i <= 5; i++) {
        pm.expect(jsonData.data[i].id).to.eql(ID[i])
    }
});

pm.test("Check E-MAIL", function () {
    var jsonData = pm.response.json();
    for(let i = 0; i <= 5; i++) {
        pm.expect(jsonData.data[i].email).to.eql(EMAIL[i])
    }
});

pm.test("Check FIRST_NAME", function () {
    var jsonData = pm.response.json();
    for(let i = 0; i <= 5; i++) {
        pm.expect(jsonData.data[i].first_name).to.eql(FIRST_NAME[i])
    }
});

pm.test("Check LAST_NAME", function () {
    var jsonData = pm.response.json();
    for(let i = 0; i <= 5; i++) {
        pm.expect(jsonData.data[i].last_name).to.eql(LAST_NAME[i])
    }
});

pm.test("Check AVATAR", function () {
    var jsonData = pm.response.json();
    for(let i = 0; i <= 5; i++) {
        pm.expect(jsonData.data[i].avatar).to.eql(AVATAR[i])
    }
});

pm.test("Check SUPPORT", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.support.url).to.eql(URL);
    pm.expect(jsonData.support.text).to.eql(TEXT);
});


//------------------------------------SINGLE USER------------------------------------
// SINGLE USER
// https://reqres.in/api/users/2
// Method: GET


const ID = 2;
const EMAIL = "janet.weaver@reqres.in";
const FIRST_NAME = "Janet";
const LAST_NAME = "Weaver";
const AVATAR = "https://reqres.in/img/faces/2-image.jpg";

const URL = "https://reqres.in/#support-heading";
const TEXT = "To keep ReqRes free, contributions towards server costs are appreciated!";

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});


pm.test("Check ID", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.id).to.eql(ID)
});

pm.test("Check E-MAIL", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.email).to.eql(EMAIL)
});

pm.test("Check FIRST_NAME", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.first_name).to.eql(FIRST_NAME)
});

pm.test("Check LAST_NAME", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.last_name).to.eql(LAST_NAME)
});

pm.test("Check AVATAR", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.avatar).to.eql(AVATAR)
});


pm.test("Check SUPPORT", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.support.url).to.eql(URL);
    pm.expect(jsonData.support.text).to.eql(TEXT);
});


//------------------------------------SINGLE USER NOT FOUND------------------------------------
// SINGLE USER NOT FOUND
// https://reqres.in/api/users/23
// Method: GET

pm.test("Status code is 404", function () {
    pm.response.to.have.status(404);
});


//------------------------------------LIST RESOURCE------------------------------------
// LIST RESOURCE
// https://reqres.in/api/unknown
// Method: GET

const PAGE = 1;
const PER_PAGE = 6;
const TOTAL = 12;
const TOTAL_PAGES = 2;

const ID = [1, 2, 3, 4, 5, 6];
const NAME = ["cerulean", "fuchsia rose", "true red", "aqua sky", "tigerlily", "blue turquoise"];
const YEAR = [2000, 2001, 2002, 2003, 2004, 2005];
const COLOR = ["#98B2D1", "#C74375", "#BF1932", "#7BC4C4", "#E2583E", "#53B0AE"];
const PANTONE_VALUE = ["15-4020", "17-2031", "19-1664", "14-4811", "17-1456" ,"15-5217"];

const URL = "https://reqres.in/#support-heading";
const TEXT = "To keep ReqRes free, contributions towards server costs are appreciated!";


pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Check HEADER", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.page).to.eql(PAGE);
    pm.expect(jsonData.per_page).to.eql(PER_PAGE);
    pm.expect(jsonData.total).to.eql(TOTAL);
    pm.expect(jsonData.total_pages).to.eql(TOTAL_PAGES);
});

pm.test("Check ID", function () {
    var jsonData = pm.response.json();
    for(let i = 0; i <= 5; i++) {
        pm.expect(jsonData.data[i].id).to.eql(ID[i])
    }
});

pm.test("Check NAME", function () {
    var jsonData = pm.response.json();
    for(let i = 0; i <= 5; i++) {
        pm.expect(jsonData.data[i].name).to.eql(NAME[i])
    }
});

pm.test("Check YEAR", function () {
    var jsonData = pm.response.json();
    for(let i = 0; i <= 5; i++) {
        pm.expect(jsonData.data[i].year).to.eql(YEAR[i])
    }
});

pm.test("Check COLOR", function () {
    var jsonData = pm.response.json();
    for(let i = 0; i <= 5; i++) {
        pm.expect(jsonData.data[i].color).to.eql(COLOR[i])
    }
});

pm.test("Check PANTONE_VALUE", function () {
    var jsonData = pm.response.json();
    for(let i = 0; i <= 5; i++) {
        pm.expect(jsonData.data[i].pantone_value).to.eql(PANTONE_VALUE[i])
    }
});

pm.test("Check SUPPORT", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.support.url).to.eql(URL);
    pm.expect(jsonData.support.text).to.eql(TEXT);
});


//------------------------------------SINGLE RESOURCE------------------------------------
// SINGLE RESOURCE
// https://reqres.in/api/unknown/2
// Method: GET

const ID = 2;
const NAME = "fuchsia rose";
const YEAR = 2001;
const COLOR = "#C74375";
const PANTONE_VALUE = "17-2031";

const URL = "https://reqres.in/#support-heading";
const TEXT = "To keep ReqRes free, contributions towards server costs are appreciated!";

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Check ID", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.id).to.eql(ID);
});

pm.test("Check NAME", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.name).to.eql(NAME);
});

pm.test("Check YEAR", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.year).to.eql(YEAR);
});

pm.test("Check COLOR", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.color).to.eql(COLOR);
});

pm.test("Check PANTONE_VALUE", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data.pantone_value).to.eql(PANTONE_VALUE);
});


pm.test("Check SUPPORT", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.support.url).to.eql(URL);
    pm.expect(jsonData.support.text).to.eql(TEXT);
});


//------------------------------------SINGLE RESOURCE NOT FOUND------------------------------------
// SINGLE RESOURCE NOT FOUND
// https://reqres.in/api/unknown/23
// Method: GET

pm.test("Status code is 404", function () {
    pm.response.to.have.status(404);
});


//------------------------------------CREATE------------------------------------
// CREATE
// https://reqres.in/api/users
// Method: POST

// CREATED_AT needs actualize before send request
const CREATED_AT = pm.environment.get("DATE_AND_TIME");


pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Check NAME", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql(request.data.name);
});

pm.test("Check JOB", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.job).to.eql(request.data.job);
});

pm.test("Response body has ID", function () {
    pm.expect(pm.response.text()).to.include("id");
});

pm.test("Response body has DATE ant TIME created", function () {
    pm.expect(pm.response.text()).to.include("createdAt");
});

pm.test("Check CREATED_AT", function () {
    pm.expect(pm.response.text()).to.include(CREATED_AT);
});

//------------------------------------UPDATE - PUT------------------------------------
// UPDATE - PUT
// https://reqres.in/api/users/2
// Method: PUT

// UPDATED_AT needs actualize before send request
const UPDATED_AT = pm.environment.get("DATE_AND_TIME");

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Check NAME", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql(request.data.name);
});

pm.test("Check JOB", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.job).to.eql(request.data.job);
});

pm.test("Response body has DATE and TIME updeted", function () {
    pm.expect(pm.response.text()).to.include("updatedAt");
});

pm.test("Check UPDATED_AT", function () {
    pm.expect(pm.response.text()).to.include(UPDATED_AT);
});


//------------------------------------UPDATE - PATCH------------------------------------
// UPDATE - PATCH
// https://reqres.in/api/users/2
// Method: PATCH

// UPDATED_AT needs actualize before send request
const UPDATED_AT = pm.environment.get("DATE_AND_TIME");

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Check NAME", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql(request.data.name);
});

pm.test("Check JOB", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.job).to.eql(request.data.job);
});

pm.test("Response body has DATE and TIME updeted", function () {
    pm.expect(pm.response.text()).to.include("updatedAt");
});

pm.test("Check UPDATED_AT", function () {
    pm.expect(pm.response.text()).to.include(UPDATED_AT);
});


//------------------------------------DELETE------------------------------------
// DELETE
// https://reqres.in/api/users/2
// Method: DELETE

pm.test("Status code is 204", function () {
    pm.response.to.have.status(204);
});


//------------------------------------REGISTER - SUCCESSFUL------------------------------------
// REGISTER - SUCCESSFUL
// https://reqres.in/api/register
// Method: POST

const ID = 4;
const TOKEN = "QpwL5tke4Pnpja7X4";


pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Check ID", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.id).to.eql(ID);
});

pm.test("Check TOKEN", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.token).to.eql(TOKEN);
});


//------------------------------------REGISTER - UNSUCCESSFUL------------------------------------
// REGISTER - UNSUCCESSFUL
// https://reqres.in/api/register
// Method: POST

const ERROR = "Missing password";


pm.test("Status code is 400", function () {
    pm.response.to.have.status(400);
});

pm.test("Check ID", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.error).to.eql(ERROR);
});


//------------------------------------LOGIN - SUCCESSFUL------------------------------------
// LOGIN - SUCCESSFUL
// https://reqres.in/api/login
// Method: POST

const TOKEN = "QpwL5tke4Pnpja7X4";


pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Check TOKEN", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.token).to.eql(TOKEN);
});


//------------------------------------LOGIN - UNSUCCESSFUL------------------------------------
// LOGIN - UNSUCCESSFUL
// https://reqres.in/api/login
// Method: POST

const ERROR = "Missing password";


pm.test("Status code is 400", function () {
    pm.response.to.have.status(400);
});

pm.test("Check TOKEN", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.error).to.eql(ERROR);
});


//------------------------------------DELAYED RESPONSE------------------------------------
// DELAYED RESPONSE
// https://reqres.in/api/users?delay=3
// Method: GET

const PAGE = 1;
const PER_PAGE = 6;
const TOTAL = 12;
const TOTAL_PAGES = 2;

const ID = [1, 2, 3, 4, 5, 6];
const EMAIL = ["george.bluth@reqres.in", "janet.weaver@reqres.in", "emma.wong@reqres.in", "eve.holt@reqres.in",
"charles.morris@reqres.in", "tracey.ramos@reqres.in"];
const FIRST_NAME = ["George", "Janet", "Emma", "Eve", "Charles", "Tracey"];
const LAST_NAME = ["Bluth", "Weaver", "Wong", "Holt", "Morris", "Ramos"];
const AVATAR = ["https://reqres.in/img/faces/1-image.jpg", "https://reqres.in/img/faces/2-image.jpg",
            "https://reqres.in/img/faces/3-image.jpg", "https://reqres.in/img/faces/4-image.jpg",
            "https://reqres.in/img/faces/5-image.jpg" ,"https://reqres.in/img/faces/6-image.jpg"];

const URL = "https://reqres.in/#support-heading";
const TEXT = "To keep ReqRes free, contributions towards server costs are appreciated!";


pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Check HEADER", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.page).to.eql(PAGE);
    pm.expect(jsonData.per_page).to.eql(PER_PAGE);
    pm.expect(jsonData.total).to.eql(TOTAL);
    pm.expect(jsonData.total_pages).to.eql(TOTAL_PAGES);
});

pm.test("Check ID", function () {
    var jsonData = pm.response.json();
    for(let i = 0; i <= 5; i++) {
        pm.expect(jsonData.data[i].id).to.eql(ID[i])
    }
});

pm.test("Check E-MAIL", function () {
    var jsonData = pm.response.json();
    for(let i = 0; i <= 5; i++) {
        pm.expect(jsonData.data[i].email).to.eql(EMAIL[i])
    }
});

pm.test("Check FIRST_NAME", function () {
    var jsonData = pm.response.json();
    for(let i = 0; i <= 5; i++) {
        pm.expect(jsonData.data[i].first_name).to.eql(FIRST_NAME[i])
    }
});

pm.test("Check LAST_NAME", function () {
    var jsonData = pm.response.json();
    for(let i = 0; i <= 5; i++) {
        pm.expect(jsonData.data[i].last_name).to.eql(LAST_NAME[i])
    }
});

pm.test("Check AVATAR", function () {
    var jsonData = pm.response.json();
    for(let i = 0; i <= 5; i++) {
        pm.expect(jsonData.data[i].avatar).to.eql(AVATAR[i])
    }
});

pm.test("Check SUPPORT", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.support.url).to.eql(URL);
    pm.expect(jsonData.support.text).to.eql(TEXT);
});