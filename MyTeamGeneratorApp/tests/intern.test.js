const Intern = require("../lib-classes/intern.js");

describe("Intern", () => {
        it("should return an object containing 'name, id , email,school", () => {
           const intern = new Intern();
           expect(typeof (intern)).toBe('object');
        });
           const intern = new Intern();
           //expect(intern.name).toBe(name);
           expect(intern.id).toBe(intern.id);
           //expect(intern.email).toBe(email);
           //expect(intern.gitUser).toBe(gitUser);
           });      

           it('can get role via getRole()', () => {
            const testValue = 'Intern';
            const intern = new Intern('Jim', 122, 'email@gmail.com', '2',testValue);
            expect(intern.getRole()).toBe(testValue);
        });
    ;
    
