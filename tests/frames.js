describe('Test Frames', function(){

    it('Verify frames',function(){
        
        browser.waitForAngularEnabled(false);

        browser.get("https://www.selenium.dev/selenium/docs/api/java/index");

        browser.switchTo().frame('packageListFrame');
        element(by.linkText('org.openqa.selenium')).click();
        browser.switchTo().defaultContent();
        browser.sleep(5000);

        browser.switchTo().frame('packageFrame');
        element(by.linkText('WebDriver')).click();
        browser.switchTo().defaultContent();
        browser.sleep(5000);

        browser.switchTo().frame('classFrame');
        element(by.xpath("//div[@class='topNav']//a[contains(text(),'Index')]")).click();
        browser.sleep(5000);

        expect(browser.getTitle()).toEqual("Index");
 
    })
})