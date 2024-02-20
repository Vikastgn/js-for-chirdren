let input = "javascript is awesome";
let output = "";
for (let i = 0; input.length > i; i++ ) {
    if (input[i] === "a") {
        output += 4;
    }
    else if (input[i] == "e") {
        output += 3;
    }
    else if (input[i] === "i") {
        output += "l";
    }
    else if (input[i] === "o") {
        output += 0;
    }
    else {
        output += input[i];
    }
}
console.log( output);