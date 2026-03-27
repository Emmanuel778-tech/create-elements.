console.log("script started");

function start(){
    console.log("click");

    //create an H1 heading
    let heading = document.createElement("h1");

    //setup text and styles
    heading.innerText = " Attendence";
    heading.style.color = "red";
    heading.style.textDecoration = "underLine";

    //Add the h1 to the page
    document.body.appendChild(heading);
    let userName = prompt("What is your name?");
    console.log(userName);
    
}

function addName(newName){
    
}