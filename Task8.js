function swap(){
    let a=15;
    let b=12;

    a=a-b;
    b=a+b;
    a=b-a;

    console.log("value of a : ",a);
    console.log("value of b : ",b);
}

swap();

function details(){
    let name='Pratiksha',address='Pune',age=23;
    let personalDetails = 'My name is '+name+','+'age '+age+','+'Address is '+address;

    console.log(personalDetails);

    newDetails = personalDetails.split(',');

    console.log(newDetails);
}
details();