let colors = ["green", "red", "violet"]; 
let cells = document.getElementsByTagName("td");

let tindex = 0;
let clikers = 0;

    function changeColor() {
    
        clikers++;
    this.style.backgroundColor = colors[tindex];
    tindex = (tindex + 1) % colors.length; 
    checkTable(); 
    document.getElementById("clikers").innerHTML = clikers;
}

for (let i = 0; i < cells.length; i++) {
cells[i].addEventListener("click", changeColor); 
}

    function checkTable() {
    let firstColor = cells[0].style.backgroundColor; 
    for (let i = 1; i < cells.length; i++) {
    if (cells[i].style.backgroundColor != firstColor) {
    return; 
}

}

alert("Вы победили за " + clikers + " кликов!");
}

    function reset() {
    for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = ""; 
}
   
    tindex = 0; 
    clikers = 0;
    document.getElementById("clikers").innerHTML = clikers; 
}