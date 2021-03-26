const { getMaxListeners } = require('process');
const Engineer = require("../lib-classes/engineer.js");

describe("Engineer", () => {
        it("should return an object containing 'name, id , email,gitUser", () => {
           const engineer = new Engineer();
            expect(typeof (engineer)).toBe('object');
            });
            const engineer = new Engineer();       
              expect(engineer.name).toBe();
             expect(engineer.id).toBe(engineer.id);
            expect(engineer.email).toBe(engineer.mail);
            expect(engineer.gitUser).toBe(engineer.gitUser);
            });
            
            it('can get role via getRole()', () => {
                const testValue = 'Engineer';
                const intern = new Engineer('JOJO', 1, 'email@gmail.com', '2',testValue);
                expect(intern.getRole()).toBe(testValue);
            });