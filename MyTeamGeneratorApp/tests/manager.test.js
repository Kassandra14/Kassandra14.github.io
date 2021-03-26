
const { getMaxListeners } = require('process');
const Manager = require("../lib-classes/manager.js");

describe("Manager", () => {
        it("should return an object containing 'name, id , email,managerofficenumber", () => {
           const manager = new Manager();
           expect(typeof (manager)).toBe('object');
        });
           const manager = new Manager();
           expect(manager.name).toBe();
           expect(manager.id).toBe(manager.id);
           expect(manager.email).toBe(manager.email);
           expect(manager.managerOffice).toBe(manager.managerOffice);
           });

           it('can get role via getRole()', () => {
            const testValue = 'Manager';
            const manager = new Manager('Jim', 122, 'email@gmail.com', '2',testValue);
            expect(manager.getRole()).toBe(testValue);
        });

        it('should be able to take a new manager name', () => {
            const name = 'Mr Bossy';
            const manager = new Manager(name);
            expect(manager.name).toBe(name);
        });
        it('can set id via constructor argument ', () => {
            const id = '555';
            const manager = new Manager('Joe', id);
            expect(manager.id).toBe(id);
        });
        // it('can get email via constructor argument', () => {
        //     const email = 'email@gmail.com';
        //     const manager = new Manager('foo', 23, email);
        //     expect(manager.email).toBe(email);
        // });

        it('can get name via getName()', () => {
            const testValue = "Mr. Bossy";
            const manager = new Manager(testValue);
            expect(manager.getName()).toBe(testValue);

        });    