// Your code here

function greet () {
    let sign = prompt ("What is your name?")
    console.log (sign)
    alert ("Hello " + sign)

    let age = prompt ("How old are you?")
    console.log (parseInt(age)) //Only if the number is starting the answer, will give NaN value is the words are in front of the value; Only looks at the first value starting the string"

    if (confirm) {
        var retVal =  confirm ("Have your birthday already passed this year?");
        if (retVal === true)
        {alert ("If you already had a birthday, then you were born in " + ((new Date().getFullYear()) - age))}
    else { 
        alert ("If you have NOT had a birthday yet, then you were born in " + ((new Date().getFullYear()) - age - 1))}
    }
    
}
