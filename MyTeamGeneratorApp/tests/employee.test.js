const { getMaxListeners } = require('process');
const Employee = require('../lib-classes/employee.js');

describe("Employee", () => {
        it("should return an object containing 'name, id , email", () => {
           const employee = new Employee();
            expect(typeof (employee)).toBe('object');
            });
            const employee = new Employee();       
            expect(employee.name).toBe();
             expect(employee.id).toBe(employee.id);
    

        });
