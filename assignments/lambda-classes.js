class Person {
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
    speak(){
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constuctor(unique){
        super(unique);
        this.specialty = unique.specialty,
        this.favLanguage = unique.favLanguage,
        this.catchPhrase = unique.catchPhrase
        this.subject = unique.subject
    }
        demo(subject){
            return `Today we are learning about ${this.subject}.`
        }
        grade(student, subject){
            `${this.student.name} recieves a perfect score on ${this.subject}`
        }
}

class Student extends Instructor {
    constuctor(unique2){
        super(unique2);
        this.className = unique.className,
        this.favSubjects = unique.favSubjects,
    }
    listsSubjects(favSubjects){
        console.log(`${this.favSubjects.length}`);
    }
    PRAssignment (subject){
        console.log(`${this.student.name} has submitted a PR for ${this.subject}`)
    }
    sprintChallenge(){
        console.log(`${this.student.name} has begun sprint challenge on ${this.subject}.`)
    }
}








/*
Stretch Problem
* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
* Add a graduate method to a student.
    - This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
    - If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/