"use strict";

let prev = document.getElementById("prev");
let current = document.getElementById("current");
let next = document.getElementById("next");
// let div = document.getElementById("test");

// const addLastP = () => {
//     let p1 = document.createElement("p");
//     let p2 = document.createElement("p");
//     let p3 = document.createElement("p");
// }

const createLines = () => {
    let lines = [];
    const array = sampleTexts.join().split("\n");
    console.log(array);
    for (let i = 0; i < array.length; i++){
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        const line = array[i] === "" ? "　" : array[i];
        p1.innerText = line;
        p2.innerText = line;
        p3.innerText = line;
        prev.appendChild(p1);
        current.appendChild(p2);
        next.appendChild(p3);
        // console.log(i);
    }
    // return lines;
}

// div.innerHTML = createLines();
createLines();