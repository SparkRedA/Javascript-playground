console.log("Script loaded!");


function moveTheThing(){
    const thing = document.getElementById("theThing");
    const leftBlock = document.getElementById("leftBlock");
    const rightBlock = document.getElementById("rightBlock");

    if (thing.parentElement === leftBlock) {
        rightBlock.appendChild(thing);
    } else {
        leftBlock.appendChild(thing);
    }  

}

function styleTheText(){
    const text = document.getElementById("fancyText");

    text.style.color = "blue";
    text.style.fontFamily = "Comic Sans";
    text.style.fontSize = "30px";
}

function getFormValues(){
    const first = document.getElementById("firstField").value;
    const second = document.getElementById("secondField").value;
    const third = document.getElementById("thirdField").checked;

    document.getElementById("firstResult").textContent = first;
    document.getElementById("secondResult").textContent = second;
    document.getElementById("thirdResult").textContent = third;

}

function countTheStuff(){
    const pCount = document.querySelectorAll("p").length;
    const h2Count = document.querySelectorAll("h2").length;
    const tdcount = document.querySelectorAll("td").length;

    document.getElementById("countOfP").textContent = pCount;
    document.getElementById("countOfH2").textContent = h2Count;
    document.getElementById("countOfTD").textContent = tdcount;
}

function addNewRow(){
    const table = document.getElementById("addRowsTable");

    const row = table.insertRow();
    const cell = row.insertCell();

    cell.textContent =table.rows.length - 1;

}

function yourBonusChallenge(){
     window.location.href = "https://youtu.be/avCWDDox1nE?si=UFWbp-vvVtxX13kB";
}
