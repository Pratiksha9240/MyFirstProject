class Student{
    static count = 0;
    constructor(name,age,p_no,marks){
        this.name = name;
        this.age = age;
        this.p_no = p_no;
        this.marks = marks;

        Student.count = Student.count + 1;
    }

    static numberOfStudents(){
        console.log("Total Students are : " + Student.count);
    }

    isEligible(){
        if(this.marks > 40){
            console.log(this.name + " is Eligible for College");
        }
        else{
            console.log(this.name + " is not Eligible for College");
        }
    }

    isEligibleForPlacements(min_marks){
        if(this.marks > min_marks){
            return (age) => {
                if(this.age > age){
                    // console.log(this.name + " is eligible for placements");
                    return true;
                }
                else{
                    // console.log(this.name + " is not eligible for placements -- age is less");
                    return false;
                }
            }
        }
        else{
            // console.log(this.name + " is not eligible for placements -- marks are less");
            return (age) => {return false};
        }
        
    }
}

const s1 = new Student('Pratiksha',23,1234567890,92);
const s2 = new Student('Pratik',20,1234567890,89);
const s3 = new Student('Saurabh',25,1234567890,62);
const s4 = new Student('Sayli',28,1234567890,36);
const s5 = new Student('Priyanka',22,1234567890,29);

const listOfStudents = [s1,s2,s3,s4,s5];

// s1.isEligible();
// s4.isEligible();

console.log("*************************************************")

console.log("Eligible Students for placements are : ");

for(let i=0;i<listOfStudents.length;i++){
    const isS = listOfStudents[i].isEligibleForPlacements(30);
    if(isS(24)){
        console.log(listOfStudents[i].name);
    }
    
}

// Student.numberOfStudents();