// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

let pronoun = ["the", "our", "that"];
let adj = ["great", "big", "small"];
let noun = ["jogger", "racom", "feeorg"];
let extensions = [".com", ".net", ".org"];

for (let item of pronoun) {
  for (let word of adj) {
    for (let object of noun) {
      for (let variation of extensions) {
        console.log(`${item}${word}${object}${variation}`);
      }
    }
  }
}

//Add domain hacks, for example: instead of lastOfUs.com you can use the .us domain like this: lastOf.us

// for (let item of pronoun) {
//   for (let word of adj) {
//     for (let object of noun) {
//       for (let variation of extensions) {
//         // check if variation has at least same part of noun
//         let newobject = object.replace("com", "");
//         console.log(newobject);

//         console.log(`${item}${word}${variation}`);
//       }
//     }
//   }
// }

// for (let item of pronoun) {
//   for (let word of adj) {
//     for (let object of noun) {
//       for (let variation of extensions) {
//         // check if variation has at least same part of noun
//           const sameword = extensions.filter((currentVariation,index,extensionsCopy)=>{
//             if (currentVariation.charAt(1) === object.length-3 && currentVariation.charAt(2) === object.length-2 && currentVariation(3) === object.length-2){
//               object = object.substring(0, str.length-3)
//             }
//           })

//         console.log(`${item}${word}${object}${variation}`);
//       }
//     }
//   }
// }
