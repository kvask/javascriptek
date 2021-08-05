


function printNumbersTill(number) {
    let szoveg = "";
    for (let i = 1; i <= number; i++) {
        if (i == number) {
            szoveg += i;
        } else {
            szoveg += i + ", ";
        }
    }
    //document.getElementById("mo1").innerHTML = szoveg;
    $("#mo1").text(szoveg);
    console.log("lefut");
}

let getGreetingTo = (nev) => {
    $("#mo2").text("Hello " + nev + "!");
}


let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
        $("#mo3").append(array[i] + "<br>");
    }
};


let printValues2 = (array) => {
    array.forEach((number) => {
        $("#mo4").append(number + "<br>");
        console.log(number);
    });
};


