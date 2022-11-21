const Employee = require('../lib/employee.js');

describe('Employee', () => {
    describe("initialization", () => {
        it("should return an object with the 'name' property when called with the 'new' keyword", () =>{
            const obj = new Employee('obj');
            expect(obj.name).toEqual('obj');
        });
        it("should return an object with the id property when called with the 'new' keyword", () => {
            const obj = new Employee('obj', 123);
            expect(obj.id).toEqual(123);
        })
    })
})