let nevek = ["Andi", "Kati", "Laci", "Tamás", "Livia"]



nevek.forEach((nev) => {
    let szoveg = "<li>" + nev + "</li>";
    $('ul').append(szoveg);
    if (nev == "Kati") {
        $("li:last-of-type").css('font-weight', 'bold');
    }
});

let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
};


$('body').append('<h1>' + additionalBlock.title + '</h1>');
$('body').append('<p>' + additionalBlock.text + '</p>');




