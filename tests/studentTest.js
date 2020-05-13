let studentPage = require('../pages/studentPage.js');
const { browser } = require('protractor');

describe("Verify Student Data", function(){

    it("Verify Student Data Addition", function(){

        studentPage.get();

        studentPage.name("Tom");
        studentPage.contact("12345");
        studentPage.setSubject("JS");
        studentPage.marks("450");
        studentPage.btnsubmit();

        browser.sleep(3000);

        studentPage.verifyResult("Tom","12345","JS","450");
    })

    it("Edit Student Data", function(){

        studentPage.btnedit("Tom");
        browser.sleep(5000);
        studentPage.name("Dakota");
        studentPage.btnsubmit();
        browser.sleep(5000);
    })
})