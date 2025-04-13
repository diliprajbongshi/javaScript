// custom error

function ValidationError(message) {
    this.name = "ValidationError";
    this.message = message;
    // this.stack = new Error().stack;
}

// ValidationError.prototype = Object.create(Error.prototype)

function validateCityzen(age) {
    if(age < 60){
        throw new ValidationError("You are not a senior cityzen")
    }
    return "You are a sinior cityzen"
}
try {
    const message = validateCityzen(77)
    console.log(message);
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}


// self assignment operator ?=
let x;
let y = 33;

// x ?= 22;
// y ?= 232;

