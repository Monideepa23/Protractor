const { browser } = require("protractor");

describe('Test Non Angular app', function(){

    it("Non Angular Test", function(){

        //browser.waitForAngularEnabled(false); or,
        browser.ignoreSynchronization=true;
        browser.get("http://demowebshop.tricentis.com/");
        element(by.id('small-searchterms')).sendKeys('laptop');
        element(by.css('input[type="submit"]')).click();
        browser.sleep(5000);

        expect(element(by.css('img[alt="Picture of 14.1-inch Laptop"]')).isPresent()).toBe(true);

    })
})