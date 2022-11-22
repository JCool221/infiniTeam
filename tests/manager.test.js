const Manager = require('../lib/manager');

describe('Manager', () => {
    it("should return an object with the 'name' property when called with the 'new' keyword", () =>{
        const obj = new Manager('obj');
        expect(obj.name).toEqual('obj');
    });
    it("should return an object with the id property when called with the 'new' keyword", () => {
        const obj = new Manager('obj', 123);
        expect(obj.id).toEqual(123);
    });
    it("should return an object with the email property when called with the 'new' keyword", () => {
        const obj = new Manager('obj', 123, 'email@email.com');
        expect(obj.email).toEqual('email@email.com');
    });
    it("should return an object with the office property when called with the 'new' keyword", () => {
        const obj = new Manager('obj', 123, 'email@email.com', 11);
        expect(obj.office).toEqual(11);
    });
})
