describe('Test Mouse Actions', function(){

    xit('Verify Mouse Over action',function(){
        
        browser.waitForAngularEnabled(false);
        browser.get("https://opensource-demo.orangehrmlive.com/index.php/auth/login");

        element(by.id('txtUsername')).sendKeys("Admin");
        element(by.id('txtPassword')).sendKeys("admin123");
        element(by.id('btnLogin')).click();
        browser.sleep(3000);

        var admin = element(by.id('menu_admin_viewAdminModule'));
        var usermgnt = element(by.id('menu_admin_UserManagement'));
        var user = element(by.id('menu_admin_viewSystemUsers'));

        browser.actions().mouseMove(admin).mouseMove(usermgnt).mouseMove(user).click().perform();
        browser.sleep(5000);

    });

    xit('Double Click', function(){
        
        browser.waitForAngularEnabled(false);
        browser.get("http://testautomationpractice.blogspot.com/");
        var button = element(by.xpath("//button[contains(text(),'Copy Text')]"));

        //approach 1
      //  browser.actions().mouseMove(button).doubleClick().perform();
       

        //approach 2
        browser.actions().doubleClick(button).perform();
        browser.sleep(3000);

    });

    it('Right Click', function(){
        
        browser.waitForAngularEnabled(false);
        browser.get("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        var btn = element(by.xpath("//p/span[@class='context-menu-one btn btn-neutral']"));

        browser.actions().click(btn,protractor.Button.RIGHT).perform();
        browser.sleep(5000);
    });

    fit('Drag and Drop', function(){

        browser.get("http://codef0rmer.github.io/angular-dragdrop/#!/")

        var drag = element(by.model('list1'));
        var drop = element(by.model('list2'));

        browser.actions().dragAndDrop(drag,drop).perform();
        browser.sleep(5000);
    })


});