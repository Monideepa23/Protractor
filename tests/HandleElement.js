describe('mySuite', function(){

    it('Test Add User', function(){

        browser.get("http://www.trycatchclasses.com/code/demo/angular_crud/#");
        
        let url = "http://www.trycatchclasses.com/code/demo/angular_crud/#";

        browser.getCurrentUrl().then(function(url) {
            browser.navigate().refresh().catch(function() {
                return browser.switchTo().alert().then(function (alert) {
                    alert.accept();
                    return browser.get(url);
                });
            });

        });
        
        //browser.executeScript( "window.angular.element(window).off('beforeunload');" );
        element(by.css('span[ng-click="addUser()"]')).click();
        browser.sleep(5000);
        element(by.model('UserFirstname')).sendKeys('Bumba');
        element(by.model('UserLastname')).sendKeys('Das');
        element(by.model('UserType')).sendKeys(5);
        element(by.model('UserActive')).click();
        browser.sleep(3000);
        element(by.css('[ng-click="AddUpdateUser()"]')).click();
                let alt = browser.switchTo().alert().then(function(alert)
                {
                expect(alt.getText()).toEqual('Error in adding User record');
                alt.accept();
                browser.sleep(10000);
                });
    });

    xit('Dropdown Element', function(){
        element(by.model('search.type')).element(by.css('option[value="number:4"]')).click();
        browser.sleep(10000);
    })
    
})