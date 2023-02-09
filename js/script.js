// make a fork


/* 
# JavaScript 1 - Module 2

## Lesson Task 4 Question

Using the HTML provided write code that does the following:


-   when the button is pressed and held down start a counter that increments by 1 every second

-   When the button is released stop the counter and create an amount of text boxes equal to the counter value
-   when the counter is pressed and held down again set the counter to 0, clear the text inputs and repeat the previous step */
/* 
const button = document.querySelector ("button");
const counter = document.querySelector (".counter")

button.onclick = function () {
    console.log ("hello, you ");
}



heldDown. (parameter/function, 1000)


counter.innerHTML = "heisann";

counter.innerHTML = ""; */
// I have sucessfully selected the buttton and the counter-element
// butten is helddown, as in it being an event, function, for every 1000 milli sec count i++, innerhtml this reached valu into the .counter


//I dont know these events!!?
//I know mouseover, mouseout, click

//actually I forgot to watch the last video, ill do that the next pomo,
// OK , that didnt really help for this task

//////////////// FASIT


const button = document.querySelector("button"); 
//OK
const counterContainer = document.querySelector(".counter"); 
//OK
const inputContainer = document.querySelector(".inputs");
// DIDN'T THINK TO ADD THIS ONE

button.addEventListener("mousedown", handleMouseDown);
button.addEventListener("mouseup", handleMouseUp);
// THESE ARE THE EVENTS I DIDN'T KNOW OF, IT SEEMS mouseon IS FOR HOLDING IN, 
//AND mouseup STOPS THE (HERE) COUNTING 
//WHAT CAUSES IT TO CLEAR?


let intervalId;
let count;
//THESE ARE let BECAUSE THE VALUE IS EXPECTED TO CHANGE

function handleMouseDown() {
    //THIS IS TO HAPPEN AT THE EVENT OF mousedown / HOLDING DOWN THE BUTTON
    count = 0;
    //START TO COUNT AT ZERO, THIS VARIABLE WAS SET OUT SIDE THE FUNCTION
    // ALSO MAKES SETS THE COUNTER AT ZERO /WHEN/ THE BUTTON IS PRESSED AGAIN,
    //OTHERWISE THE PREVIOUS COUNT WILL STAY
    this.textContent = "Release to stop counting";
    // FOR TEXT TO CHANGE WHEN BUTTTON IS HELD DOWN
    counterContainer.innerHTML = count;
    // FOR COUNTER TO EQUAL THE COUNT VARIABLE, WHEN BUTTON IS HELD DOWN
    inputContainer.innerHTML = "";
    // FOR THE NEW  CONTAINERS TO HAVE A PLACE TO LIVE, DIV CONTAINS EMPTY STRING, TO BE FILLED WITH NEW DIVS

    intervalId = setInterval(function () {
        //THIS IS THE INTERVAL AT WHICH THE NUMBER WILL GO UP, ONE PR SECOND
        count++;
        //THE COUNT VARIABLE IS PREVIOUSLY SET TO ZERO AND SHOULD NOW INCREASE BY ONE, FOR EVERY SECOND
        //OBS, WE ARE STILL INSIDE THE MOUSEDOWN EVENT
        counterContainer.innerHTML = count;
        //CHANGE THE CONTENTS OF THE .counter TO DISPLAY THE VALUE OF THE COUNT VARIABLE
    }, 1000);
    //COUNT SHOULD HAPPEN EVERY SECOND
}

function handleMouseUp() {
    // FUNCTION TO RUN WHEN MOUSE IS "LET GO"
    clearInterval(intervalId);
    //CLEAR THE intervalId, MEANING STOP THE COUNT
    this.textContent = "Press and hold to count";
    //RETURN THE ORIGINAL TEXT, PROMPTING THE USER TO PRESS IT AGAIN

    for (let i = 1; i <= count; i++) {
        //WE ARE STILL INSIDE THE FUNCTION FOR WHAT HAPPENS WHEN THE MOUSE IS LET GO
        //WHEN THE MOUSE IS LET GO:
        // GO FROM 1 TO LESS THEN OR EQUAL TO THE count VARIABEL
        inputContainer.innerHTML += `<input name="input${i}" id="input${i}" placeholder="Input ${i}" />`;
        //THIS RUNS
        //CHANGE THE inneHTML OF THE .input div  TO CONTAIN A NUMBER OF input elements,
        //EQUAL TO THE NUMBER OF count
    }
}
////// OK, I understood everything, would I be able to create it on my own had I known about the events
// dont know, maybe try another time?
//// Now move on to 3.1