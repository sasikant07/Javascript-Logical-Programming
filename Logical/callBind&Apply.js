let name = {
    firstName: 'Sasikant',
    lastName: 'Biswal',
}

let printFulName =  function(homeTown, states) {
    console.log(this.firstName + " " + this.lastName +" from "+ homeTown +"," +states);
    
}

printFulName.call(name, 'Bhadrak', 'Odisha');

let name2 = {
    firstName: 'Sachin',
    lastName: 'Tendulkar',

}

// function borrowing
// In call() we pass the argument individually. The first argument is mandatory reference name
/*
    call() method is used to invoke a function directly by passing in the reference which points to the
    this variable insid the method. 
*/
printFulName.call(name2, 'Mumbai', 'Maharashtra');

// In apply() we pass the argument in an array. The first argument is mandatory reference name
printFulName.apply(name2, ['Mumbai', 'Maharashtra']);

// bind() method
/* It looks exactly same as the call() method, but the difference is instead of directly calling the 
method the bind() method binds the printfulName with the object and returns the copy of the method
 which can be invoke later.
*/
let printMyName = printFulName.bind(name2, 'Mumbai', 'Maharashtra');
console.log(printMyName);
printMyName();
