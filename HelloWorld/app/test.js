//Zachary Harper: Assignmanet 1

/*Create a program that:
1. Uses the constructor notation to define a Student object which includes.
    1. name and grades properties (grades is an array)
    2. addGrade method that adds a grade to the grades array
    3. totalGrades method that totals the grades in the grades array
    4. averageGrades method that returns the average of the grades or returns 0 if there are no grades
2. Creates an instance of the Student object
3. Writes the student name to the console
4. Adds two grades to the student object
5. Writes the total of the grades to the console
6. Writes the average of the grades to the console
*/


function Student(name, grade) {
    this.name = name;
    this.grade = [grade]; //Create array

    this.addGrade = function(newGrade) { //Add a new grade
        this.grade.push(newGrade);
    };

    this.totalGrade = function() { //Return total of grades
        var sum = 0;
        for( i = 0; i < this.grade.length; i++ ){
            sum += parseInt( this.grade[i], 10 );
        }
        return sum;
    };

    this.avgGrade = function () { //Return average grade
        var avg = this.totalGrade()/this.grade.length;
        //TODO: return 0 if no grades
        return avg;
    };
}

var student1 = new Student('Bob', 90);  //Create instance
console.log("Student name: " + student1.name); //Write students name to log
student1.addGrade(80); //Add two grades
student1.addGrade(85);

console.log("Total of " + student1.grade.length + " grades: " + student1.totalGrade()); //Write total of grades to console
console.log("Average grade: " + student1.avgGrade()); //Write average grade to console
