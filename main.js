"use strict";

let prev = document.getElementById("prev");
let current = document.getElementById("current");
let next = document.getElementById("next");
let pageNum = 0;
const width = window.innerWidth;
const height = window.innerHeight;
// let div = document.getElementById("test");

// const addLastP = () => {
//     let p1 = document.createElement("p");
//     let p2 = document.createElement("p");
//     let p3 = document.createElement("p");
// }

const scrollWindow = (w, h, ms, smooth) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            window.scrollTo({
                left: w,
                top: h,
                behavior: smooth ? "smooth" : "auto"
            });
            resolve();
        }, ms);
    });
}

// const sayHello = async(name) => {
//     return await asyncReturnSomething(`Hello! I'm ${name}!`)
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
    window.scrollTo({
        left: width * 1.1
        // behavior: 'smooth'
    });
}

const buttonClicked = async(lr) => {
    if(lr === "left"){
        if(pageNum > 0){
            pageNum--;
        }
    } else {
        if(pageNum < 3){
            pageNum++;
        }
    }
    await scrollWindow(width * 0.1, 0, 1, true);
    await scrollWindow(width * 1.1, height * 0.95, 1000, false);
    // window.scrollTo({
    //     // left: pageNum * width + width * 0.1,
    //     left: width * 1.1,
    //     top: height,
    //     behavior: 'smooth'
    // });
    console.log("pageNum: " + pageNum);
}

// div.innerHTML = createLines();
createLines();