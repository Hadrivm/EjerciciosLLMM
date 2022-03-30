function numMayor(num1, num2) {
    var x;
    if (num1 > num2)
        x = num1;
    else 
        x = num2;
    return x;
}

function mostrarMayor() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    document.getElementById("resultado").innerHTML = numMayor(num1, num2);
}

function numMayor1(nume1, nume2, num3) {
    var y;
    if (nume1 > nume2)
        y = nume1;
    else if (nume2 > num3)
        y = nume2;
    else
        y = num3
    return y;
}

function mostrarMayor1() {
    var nume1 = document.getElementById('nume1').value;
    var nume2 = document.getElementById('nume2').value;
    var num3 = document.getElementById('num3').value;
    document.getElementById("resultado1").innerHTML = numMayor1(nume1, nume2, num3);
}