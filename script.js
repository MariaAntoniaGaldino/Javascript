function calcularMedia(N1,N2,N3){
    let resultado = (N1 + N2 + N3)/3;
    return resultado;
}
function calcularExame(nota){
    let resultado = 10 - nota;
    return resultado;

}

function calcularDelta(a,b,c)}
$('#inputOla').click(
    function(){
        calculo =
        {
            'N1':document.getElementById('inputA').value,
            'N2':document.getElementById('inputB').value,
            'N3':document.getElementById('inputC').value
        }
        let media = calcularMedia (parseInt(calculo.N1), parseInt(calculo.N2), parseInt(calculo.N3));
    
   
        if 
        (media >= 7) {
        alert('Você foi aprovado' + media);
         } else {
            alert('Você esta de recuperação' + calcularExame(media));

           // let exame= 10-media;
           // alert (exame);
         }

}
)
