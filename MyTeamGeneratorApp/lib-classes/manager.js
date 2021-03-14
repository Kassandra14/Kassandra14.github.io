const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, managerOffice) {
        super(name, id, email);
        this.managerOffice = managerOffice; 
    }
    
    getManagerOffice() {
        return this.managerOffice;
    }

    getRole () {
        return "Manager";
    }
}

module.exports = Manager;