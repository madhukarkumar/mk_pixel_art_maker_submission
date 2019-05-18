// Select color input initially in a global variable
var colorSelected = document.getElementById("colorForm").elements['colorPicker'].value;

//Attach an event listener to the colorPicker and every time the value changes update the variable colorSelected
document.getElementById("colorForm").elements['colorPicker'].addEventListener('change', function(evt){
   //on change for the colorPicker, reset the colorSelected variable
    colorSelected = evt.target.value;
   //debug console.log("Color selected = " + colorSelected);
    });


//Add a listener to the Submit button
document.getElementById("submitButton").addEventListener("click", function(event){
   //first prevent the default behavior
    event.preventDefault();
   //debug statements -  console.log("The submit button was clicked");
    // Select size input
    let tableColumns = document.getElementById("sizePicker").elements['inputHeight'].value;
    let tableRows = document.getElementById("sizePicker").elements['inputWidth'].value;
   //debug statements -  console.log("this is the value of columns " + tableColumns);
   //debug statements -  console.log("this is the value of rows" + tableRows);
    removeTable();//make sure if there is an inner table to clear it first
    makeGrid(tableRows, tableColumns);

});

//This function will clear the inner table when called
function removeTable(){
    //Grab the dynamic table
    let tbl = document.getElementById('dynamicTable');
   if(tbl)//if not empty remove this from the parent table
   {tbl.parentNode.removeChild(tbl);}
}

//This function will create the inner table. Accepts two parameters for rows and columns
function makeGrid(rows, columns) {
    //grab the parent table from html
  let myTableDiv = document.getElementById("pixelCanvas");

  //create table
  let table = document.createElement('TABLE');
  //add a border and give it an id to get it later
  table.border = '1';
  table.setAttribute("id", "dynamicTable" );
    //create table body then append to table
  let tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);
    //loop and create rows
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement('TR');
    tableBody.appendChild(tr);
    //loop for every row create columns
    for (let j = 0; j < columns; j++) {
      let td = document.createElement('TD');
      //set cell width to 50. At some point I plan to turn this into an input as well
      td.width = '50';
      //now append td
      tr.appendChild(td);
    }
  }
  myTableDiv.appendChild(table);
  //done creating table
  //call the function to add event Listener to each td
  addCellListeners();
}

function addCellListeners(){
    document.querySelectorAll('#dynamicTable td')
//for each td add an event listener for click and when the event occurs set the background with the current value of colorSelected
   .forEach(e => e.addEventListener("click", function() {this.style.backgroundColor = colorSelected;}));
}
