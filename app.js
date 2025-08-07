let listadenumerosorteados=[];
let numerolimite=10;
let numerosecreto= gerarnumeroaleatorio();
let tentativas= 1;

function mensageminicial(){ 
    exibirtextonatela('h1','Jogo do numero secreto');
    exibirtextonatela('p','Escolha um numero entre 1 e 10');
}

function exibirtextonatela(tag, texto){
let campo= document.querySelector(tag)
campo.innerHTML = texto;
 if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}
mensageminicial();

function verificarChute(){
    let chute= document.querySelector('input').value;
    if (chute==numerosecreto){

             exibirtextonatela('h1', 'Acertou!');
             let mensagemtentativa= tentativas>1? 'tentativas':'tentativa';
             let mensagemtentativas=
             `Você descobriu o numero secreto com ${tentativas} ${mensagemtentativa}`
             exibirtextonatela('p',mensagemtentativas);
             document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
    if(chute>numerosecreto){
        exibirtextonatela('p','O numero secreto é menor');
    } else{
        exibirtextonatela('p', 'O numero secreto é maior');
    }
    tentativas++;
    limparcampo();

    }
}
    
function gerarnumeroaleatorio(){
    let numeroescolhido=parseInt(Math.random()*numerolimite+1) ;
    let quantidadedeelementos=listadenumerosorteados.length;
    if(quantidadedeelementos==numerolimite){
        listadenumerosorteados=[];
        
    }
    if(listadenumerosorteados.includes(numeroescolhido)){
        return gerarnumeroaleatorio();
    } else{
        listadenumerosorteados.push(numeroescolhido)
        console.log(listadenumerosorteados)
        return numeroescolhido;
    }
}
function limparcampo(){
    chute=document.querySelector('input');
    chute.value='';
}

function reiniciarjogo(){
    numerosecreto= gerarnumeroaleatorio();
    limparcampo();
    tentativas=1;
    mensageminicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}