// optional chaining
const emplyoee = {
    salary:{
        bonus:440
    }
}
console.log(emplyoee.salary);
console.log(emplyoee.department);

const name = emplyoee.department?.name;
console.log(name);