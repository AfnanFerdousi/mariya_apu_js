// to access the properties inside of an object you need to write - objectName.propertyName

const studentsOfClassAbc = [
    {
        name: "afnan ferdousi",
        age: 18,
        father: "Faisal Ahmed",
        mother: "Ambia Khatun",
        isChild: false
    }, 
    {
        name: "Mariya ",
        age: 18,
        father: "Ahmed",
        mother: "Khatun",
        isChild: false
    },
    {
        name: "Raihana ferdousi",
        age: 10,
        father: "Faisal Ahmed",
        mother: "Ambia Khatun",
        isChild: false
    },
    {
        name: "Talha ",
        age: 12,
        father: "Faisal Ahmed",
        mother: "Ambia Khatun",
        isChild: false
    }
]

for (let i = 0; i < studentsOfClassAbc.length; i++) {
    console.log(studentsOfClassAbc[i].name)
    console.log(studentsOfClassAbc[i].age)
    
}

const result = studentsOfClassAbc.map(student => {
    console.log(student.name)
})


// to create an object, you need to use curly braces. Then you have to wrirte the propery name and put the value. For example:
// propertyName: "value"
// make sure to put a comma at the end of the value (OUTSIDE THE QUOTATION IF ITS A STRING)
// Create an array as you usually do and then copy the object from the start of the curly braces to the end of the curly braces. And paste it. Make sure to put a comma at the end of the object.
// use the map method
// arrayName.map(elementName => {
    // do your thing here
// })