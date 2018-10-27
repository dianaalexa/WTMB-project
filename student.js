module.exports = class Student {
        constructor (name) {
            this.name = name
            this.credits = 0 
        }
        attend(course) { 
        course.students.push(this)
    }
}