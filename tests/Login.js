const { browser, element } = require("protractor");


describe('Test login of CAFE App', function(){

    it('Validate title', function(){
        browser.get('http://cafetownsend-angular-rails.herokuapp.com/login');
        expect(browser.getTitle()).toBe("CafeTownsend-AngularJS-Rails");
    })

    it('Validate login', function(){
        browser.get('http://cafetownsend-angular-rails.herokuapp.com/login');
        browser.waitForAngularEnabled();

        element(by.model('user.name')).sendKeys("Luke");

        element(by.model('user.password')).sendKeys("Skywalker");

        element(by.buttonText('Login')).click();
        browser.sleep(3000);

        element(by.css('[ng-click="logout()"]')).click();

    })
})