// index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import odinImage from "./odin.png";


const img = document.createElement("img");
img.src = odinImage

console.log(greeting);
document.body.appendChild(img);
