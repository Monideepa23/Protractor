describe('Predefined jasmine Function ', function(){

    beforeAll(function(){
        console.log('Before All IT block');
    })

    beforeEach(function(){
        console.log('Before Each IT Block');
    })
    it('Test login', function(){
        console.log('login application');
    })
    it('Test login with wrong credentails', function(){
        console.log('login application- Error');
    })

    afterEach(function(){
        console.log('After Each It Block');
    })

    afterAll(function(){
        console.log('After All IT block')
    })

})

