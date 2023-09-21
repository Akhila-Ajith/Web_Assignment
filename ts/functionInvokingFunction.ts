function functionCalls(){

    const input = prompt("Please enter a number between 1-3:");
    switch ( input)
    {
        case '1': functionOne();
        break;
        case '2': functionTwo();
        break;
        case '3': functionThree();
        break;
    }
}
function functionOne()
{ console.log('function one');

}
function functionTwo()
{ console.log('function two');

}
function functionThree()
{ console.log(' function three');

}
functionCalls()