// object destructure

const student = {
  name: "A",
  age: 44,
  std: 3,
  address: function () {
    console.log("The address");
  },
  subjects: ["Bangla", "English", "Math"],
  parents: {
    father: "Adf",
    mother: "ddddd",
    email: "asdf@gmail.com",
  },
};

const { name, age, address, model = 234234 } = student;
address();
console.log(model);
const { subjects, numofSubj = subjects.length } = student;

// console.log(numofSubj);
// ekhane noton variable hisabe standard ke nauya hoyeche
//This is object destructuring with aliasing.
const { std: standard } = student;
console.log(standard);
const {
  parents: { email },
} = student;
console.log(email);

function sendEmail({ parents: { email } }) {
  console.log(`My email address is ${email}`);
}

// function sendEmail(student){
//     console.log(`My email address is ${student.parents.email}`);
// }

sendEmail(student);

const getStudent = () => {
  return {
    name: "A",
    age: 44,
    std: 3,
    subjects: ["Bangla", "English", "Math"],
    parents: {
      father: "Adf",
      mother: "ddddd",
      email: "asdf@gmail.com",
    },
  };
};


const {name:anotherStudent,std:newStd} = getStudent();
// console.log(anotherStudent.name);
// console.log(anotherStudent.subjects);
// console.log(anotherStudent,newStd);


const arr = [
    {
        name:"a",
        grade:"a"
    },
    {
        name:"b",
        grade:"b"
    },
    {
        name:"c",
        grade:"c"
    },
]

console.log(arr);
for(let {name,grade} of arr){
    console.log(name,grade);
}