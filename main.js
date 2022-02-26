"use strict";

let div = document.getElementById("test");

const createLines = () => {
    let lines = [];
    const array = sampleTexts.join().split("\n");
    console.log(array);
    for (let i = 0; i < array.length; i++){
        let p = document.createElement("p");
        p.innerText = array[i];
        div.appendChild(p);
        console.log(i);
    }
    // return lines;
}

// div.innerHTML = createLines();
createLines();