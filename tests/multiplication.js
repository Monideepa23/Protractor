const homepage = require("../pages/homepage")
    it('Multiplication test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('3');

        homepage.clickGo1();

        homepage.verifyResult('7');

        browser.sleep(2000)

    });
