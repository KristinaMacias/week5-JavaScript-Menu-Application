class Employee {
    constructor(name, position) {
        this.name = name; //employee name
        this.position = position; //name of the employee's position
    }
    describe() {
        return `${this.name} has this ${this.position}. position`; // shows the name of the employee and their respective positioin
    }
}

class Shift {
    constructor(name) {
        this.name = name; //name of the shift ie morning, afternoon, evening
        this.employees = []; //empty array of employees that will populate a shift
    }

    addPlayer(employee) {
        if(employee instanceof Employee) { // is their input an instance of the Employee Class? //need more research w instanceOf
            this.employees.push(employee);//allows user to push a new employee to the empty employees array
        } else {
            throw new Error(`You can only add instance of employee. Argument is not a employee: ${employee}.`);
        }
    }

    describe() {
        return `The ${this.name} shift has ${this.employees.length} employees`; //shows how many players each team has
    }
}


class Menu {
    constructor() {
        this.shifts = []; //array of shifts that user creates
        this.selectedShift = null; //selector for shift. starts at null b/c nothing selected yet
    }

    start() { // entry point to application
        let selection = this.showMainMenuOptions();

        while(selection != 0) { //lets us choose menu option 1-4 if 0 isn't selected
            switch (selection) {
                case '1':
                    this.createShift();
                    break;
                case '2':
                    this.viewShift();
                    break;
                case '3':
                    this.deleteShift();
                    break;
                case '4':
                    this.displayShifts();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions(); // not sure why this is necessary?
        }

        alert ('Goodbye!'); // what users see if they select 0 or anything but case 1-4?
    }
    showMainMenuOptions () { //this is what users see when they look at menu application
        return prompt(`
            0) Exit
            1) Create a shift
            2) View a shift
            3) Delete a shift
            4) Display all shifts
        `);
    }

    showShiftMenuOptions(shiftInfo) { //options available when user views shifts?
        return prompt(`
            0) Back
            1) Add an employee
            2) Remove an employee
            --------------------
            ${shiftInfo}
        `);
    }

    displayShifts() {
        let shiftString = ''; //blank string so user can later build string with inputs
        for (let i = 0; i < this.shifts.length; i++) { // iterates through all the shift names created by user
            shiftString += i + ') ' + this.shifts[i].name + '\n'; //shows the shifts created
        }
        alert(shiftString);
    }

    createShift (){ //call function for user to create a new shift
        let name = prompt('Enter name for a new shift:'); //instructions and prompt for user to enter name of shift
        this.shifts.push(new Shift (name)); //pushes their shift that they created to shifts array
    }

    viewShift (){
        let index = prompt('Enter the index of the shift that you wish to view:');
        if (index > -1 && index < this.shifts.length) { //if index is greater -1 AND index is less than the # of shifts (1-4), then we'll do something with it
            this.selectedShift = this.shifts[index];//allows user to input index of the shift they wish to view?
            let description = 'Shift Name: ' + this.selectedShift.name + '\n';

            for (let i = 0; i < this.selectedShift.employees.length; i++) { //lets users interact with employees in selected shift
                description += i + ') ' + this.selectedShift.employees[i].name + ' - ' + this.selectedShift.employees[i].position + '\n';
            }

            let selection = this.showShiftMenuOptions (description); // pass in above description to show shift and all options for the shift
            switch (selection) { //create a new sub menu for viewings a shift - add employee or remove employee
                case '1':
                    this.addEmployee();
                    break;
                case '2':
                    this.removeEmployee(); // don't need a break; statement because nothing comes after
            }
        }
    }
    deleteShift () {
        let index = prompt ('Enter the the index of the shift that you wish to remove:');
        if (index > -1 && index < this.shifts.length) { //iterates through the shifts
            this.shifts.splice(index, 1); //splice allows users to delete and index of shift 
        }
    }
    addEmployee  () {
        let name = prompt('Enter name for new employee that you wish to add to shift:');
        let position = prompt('Enter position for that employee:');
        this.selectedShift.employees.push(new Employee(name, position));//allows users the add employees to their selected shift, including their name and position
    }

    removeEmployee () {
        let index = prompt('Enter the index number of the employee that you wish to remove from shift:');
        if (index > -1 && index < this.selectedShift.employees.length) {
            this.selectedShift.employees.splice(index, 1); // allows users to remove employees on their selected shift with the appropriate index #
        }
    }

}

let menu = new Menu();
menu.start();//initiates my menue application