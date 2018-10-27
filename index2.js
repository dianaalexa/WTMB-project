const Student = require ("./student")
const Course = require ("./course")
const Department= require ("./department")
const Database = require ("./database2")

const diana = new Student ("Diana")
const maria = new Student ("Maria")
const dan = new Student ("Dan")

const arthist = new Course ("Art History", 6)
const intro = new Course ("Introduction to Programming", 6)
const buss = new Course ("Business Strategy Making", 9)

const art = new Department ("Institute of Arts")
const comp = new Department ("Institute of Computer Science")
const econ = new Department ("Institute of Economics and Social Sciences")

diana.attend(arthist)
maria.attend(intro)
dan.attend(buss)
diana.attend(intro)
maria.attend(buss)
dan.attend(intro)

art.classify(arthist)
comp.classify(intro)
econ.classify(buss)

arthist.assign()
intro.assign()
buss.assign()

Database.save([diana,maria,dan,arthist,intro,buss,art,comp,econ])
console.log(JSON.stringify(Database.load()))