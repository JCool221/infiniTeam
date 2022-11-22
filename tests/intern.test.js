const Intern = require('../lib/intern');

describe('Intern', () => {
    it("should return an object with the 'name' property when called with the 'new' keyword", () =>{
        const obj = new Intern('obj');
        expect(obj.name).toEqual('obj');
    });
    it("should return an object with the id property when called with the 'new' keyword", () => {
        const obj = new Intern('obj', 123);
        expect(obj.id).toEqual(123);
    });
    it("should return an object with the email property when called with the 'new' keyword", () => {
        const obj = new Intern('obj', 123, 'email@email.com');
        expect(obj.email).toEqual('email@email.com');
    });
    it("should return an object with the school property when called with the 'new' keyword", () => {
        const obj = new Intern('obj', 123, 'email@email.com', 'a totally not made up school');
        expect(obj.school).toEqual('a totally not made up school');
    });
})
