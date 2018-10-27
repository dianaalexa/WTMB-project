module.exports = class Department {
    constructor (name) {
        this.name = name
        this.courses = []
    }
    classify(course) { 
    this.courses.push(course)
    }
}