function calcula(opera) {
    let num1 = parseFloat(document.getElementById('zeroum').value);
    let num2 = parseFloat(document.getElementById('zerodois').value);
    let resultado = 0;
    if(isNaN(num1)|| isNaN(num2)){
        alert('acorde para vida');

    }else{
        if(opera =='+'){
            resultado = num1 + num2;
        }else if(opera =='-'){
            resultado = num1 - num2;
        }else if(opera =='*'){
            resultado = num1 * num2;
        }else if(opera =='/'){
            resultado = num1 / num2;
        }
        document.getElementById('resultado').textContent="resultado: ";
        if(resultado<0){
            document.getElementById('cor').style.color='red';
        }else if(resultado>0){
            document.getElementById('cor').style.color='green';
        }
        document.getElementById('cor').textContent= resultado;

        





    }
}