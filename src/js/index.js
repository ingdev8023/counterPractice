//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0
let decimal = 0
let centesimas = 0
let milesimas = 0

setInterval(() => {
counter++
if(counter > 9) {
    counter = 0
    decimal++
}
if(decimal > 9) {
    decimal = 0
    centesimas++
}

if(centesimas > 9 ) {
    centesimas = 0
    milesimas++
}
ReactDOM.render(<Home  seconds = {counter} decimal ={decimal} centesimas = {centesimas} milesimas = {milesimas}/>, document.querySelector("#app"))
}, 1000)
