const Employee = require('../lib/employee');

describe('Employee', () => {
    it("should return an object with the 'name' property when called with the 'new' keyword", () =>{
        const obj = new Employee('obj');
        expect(obj.name).toEqual('obj');
    });
    it("should return an object with the id property when called with the 'new' keyword", () => {
        const obj = new Employee('obj', 123);
        expect(obj.id).toEqual(123);
    });
    it("should return an object with the email property when called with the 'new' keyword", () => {
        const obj = new Employee('obj', 123, 'email@email.com');
        expect(obj.email).toEqual('email@email.com');
    });
})
