
let tabuada = 69;
let nome = "Henrique"

function opa(){
    document.write("tabuada do " + tabuada + "<br>")
    document.write(tabuada + " x  1 ="+(tabuada*1)+"<br>");
    document.write(tabuada + " x  2 ="+(tabuada*2)+"<br>");
    document.write(tabuada + " x  3 ="+(tabuada*3)+"<br>");
    document.write(tabuada + " x  4 ="+(tabuada*4)+"<br>");
    document.write(tabuada + " x  5 ="+(tabuada*5)+"<br>");
    document.write(tabuada + " x  6 ="+(tabuada*6)+"<br>");
    document.write(tabuada + " x  7 ="+(tabuada*7)+"<br>");
    document.write(tabuada + " x  8 ="+(tabuada*8)+"<br>");
    document.write(tabuada + " x  9 ="+(tabuada*9)+"<br>");
    document.write(tabuada + " x 10 ="+(tabuada*10)+"<br>");
    document.write("Feito por " + nome)
}

function calcula(){
    let c = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let r = c * (1 + (j/100));
    document.write("Resultado: " + r);
}

