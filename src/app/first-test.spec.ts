describe('First Test', () => {

    let testVariable: any;

    beforeEach(() => {
        testVariable = {};

    });

    it('it should return true if a is true', () => {

    //arrange data
     testVariable.a = false;

     //act 
     testVariable.a = true;

     //assert
      expect(testVariable.a).toBe(true);
    })

});
















// describe('User Service', () => {
//     describe('getUser() method', () => {

//         it('should return the correct given user', () => {

//         })
//     })
// })