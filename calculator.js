let inputs=document.querySelectorAll("input");
let display=document.querySelector(".c");

inputs.forEach((input)=>{//for every input 
input.addEventListener("click",()=>{//when clicked any input this function than applies
let value=input.value;
    if(value==="AC"){
        display.value= " ";
    }
    else if(value==="DE"){
        display.value=display.value.slice(0,-1);
    }
   
    else if(value==="="){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="Math Error";
    }
} 
    else{
        display.value+=input.value;
    }
});
});

let input = document.querySelector(".input");    // km input
let output = document.querySelector(".output"); // m display
let fromunit=document.querySelector(".fromunit");
let tounit=document.querySelector(".tounit");

input.addEventListener("input", convert);
fromunit.addEventListener("change", convert);//"change" is the event type that triggers when the user selects a different unit.
tounit.addEventListener("change", convert);

function convert() {
  let value = parseFloat(input.value);
  if (isNaN(value)) {
    output.value = "";
    return;
  }

  if (fromunit.value === "km" && tounit.value === "m") {
    output.value = value * 1000;
  } 
  else if (fromunit.value === "m" && tounit.value === "km") {
    output.value = value / 1000;
  } 
  else if (fromunit.value === "cm" && tounit.value === "m") {
  output.value = value / 100;
  }
  else if (fromunit.value === "m" && tounit.value === "cm") {
  output.value = value * 100;
  }
  else if (fromunit.value === "cm" && tounit.value === "km") {
  output.value = value / 100000;
  }
  else if (fromunit.value === "km" && tounit.value === "cm") {
  output.value = value * 100000;
  }
  else {
    output.value = value; // same unit to same unit
  }
}



                                                                                                                                                                                                    




