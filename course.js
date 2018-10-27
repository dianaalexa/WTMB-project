module.exports = class Course {
    constructor (name, credit) {
        this.name = name
        this.students = []
        this.credits = credit
    }
    assign () {
        this.students.forEach(student => {
    student.credits += Number(this.credits)  
    });
 
    }
}   