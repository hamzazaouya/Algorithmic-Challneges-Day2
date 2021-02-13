/*global document, console*/

/* Start Triangle Area Calcualte */

var tringleResult = document.getElementById('tringleResult');
var triangleCalcButton = document.getElementById('calc-triangle-area');

triangleCalcButton.onclick = function () {triAreaCalc();};

function triAreaCalc() {
    
    var base = document.getElementById('base').value;
    var height = document.getElementById('height').value;

    tringleResult.innerHTML =  (base*height) / 2 + "cm";
    
}
/* End Triangl Area Calcualte */