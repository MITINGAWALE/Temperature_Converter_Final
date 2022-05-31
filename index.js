document.querySelector("#submit-btn").addEventListener("click", function(){
    var temperature = document.querySelector("form").elements[0].value;
    var cardhead = temperature;
    if(document.querySelector(".convert-from").value === "Celsius"){
        cardhead = cardhead + " degrees celsius = ";
        if(document.querySelector(".convert-to").value === "Fahrenheit"){
            var fahrenheit = ((9 / 5) * temperature) + 32;
            document.querySelector(".formulaarea").innerHTML = "Fahrenheit = ((9 / 5) * Celsius) + 32";     
            document.querySelector(".output").innerHTML = fahrenheit.toFixed(2) + " degrees fahrenheit";
        }
        else if(document.querySelector(".convert-to").value === "Kelvin"){
            var kelvin = parseFloat(temperature) + parseFloat(273.15);
            document.querySelector(".formulaarea").innerHTML = "Kelvin = Celsius + 273.15";
            document.querySelector(".output").innerHTML = kelvin.toFixed(2) + " kelvins";
        }
        else if(document.querySelector(".convert-to").value === "Celsius"){
            document.querySelector(".output").innerHTML = temperature + " degrees celsius";
            document.querySelector(".formulaarea").innerHTML = "Celsius = Celsius * 1";
        }
    }

    else if(document.querySelector(".convert-from").value === "Fahrenheit"){
        cardhead = cardhead + " degrees farhenheit = ";
        if(document.querySelector(".convert-to").value === "Fahrenheit"){
            document.querySelector(".output").innerHTML = temperature + " degrees fahrenheit";
            document.querySelector(".formulaarea").innerHTML = "Fahrenheit = Fahrenheit * 1";
        }
        else if(document.querySelector(".convert-to").value === "Kelvin"){
            var kelvin = ((parseFloat(temperature) - 32) * 5 / 9) + 273.15;
            document.querySelector(".formulaarea").innerHTML = "Kelvin = ((Fahrenheit - 32) * 5 / 9) + 273.15";
            document.querySelector(".output").innerHTML = kelvin.toFixed(2) + " kelvins";
        }
        else if(document.querySelector(".convert-to").value === "Celsius"){
            var celsius = (parseFloat(temperature) - 32) * 5 / 9;
            document.querySelector(".formulaarea").innerHTML = "Celsius = (Fahrenheit - 32) * 5 / 9";
            document.querySelector(".output").innerHTML = celsius.toFixed(2) + " degrees celsius";
        }
    }

    else if(document.querySelector(".convert-from").value === "Kelvin"){
        cardhead = cardhead + " kelvins = ";
        if(document.querySelector(".convert-to").value === "Fahrenheit"){
            var fahrenheit = ((temperature - 273.15) * 9 / 5) + 32;
            document.querySelector(".formulaarea").innerHTML = "Fahrenheit = ((Kelvin - 273.15) * 9 / 5) + 32";
            document.querySelector(".output").innerHTML = fahrenheit.toFixed(2) + " degrees fahrenheit";
        }
        else if(document.querySelector(".convert-to").value === "Kelvin"){
            document.querySelector(".output").innerHTML = temperature + " kelvins";
            document.querySelector(".formulaarea").innerHTML = "Kelvin = Kelvin * 1";
        }
        else if(document.querySelector(".convert-to").value === "Celsius"){
            var celsius = temperature - 273.15;
            document.querySelector(".formulaarea").innerHTML = "Celsius = Kelvin - 273.15";
            document.querySelector(".output").innerHTML = celsius.toFixed(2) + " degrees celsius";
        }
    }

    document.querySelector(".inputtemp").innerHTML = cardhead;
    
});

document.querySelector(".clearbtn").addEventListener("click", function(){
    document.querySelector(".output").innerHTML = "Your answer is here! ";
    document.querySelector(".inputtemp").innerHTML = "";
});

