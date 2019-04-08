
var nAnterior;
var paiDeTodosPort = document.querySelectorAll('.boxDadosPort');
var paiDeTodosIcons = document.querySelectorAll('.boxBtPlus');

function openPort (n, eleIco){

    if (n === nAnterior) {
        document.querySelector('#dadosPort_'+n).innerHTML = '';
        nAnterior = '';
        eleIco.children[0].style.display = 'inline';
        eleIco.children[1].style.display = 'none';
        return;
    }

    for( var x in paiDeTodosPort) paiDeTodosPort[x].innerHTML = '';
    for (var j = 0; j < paiDeTodosIcons.length; j++) {
        paiDeTodosIcons[j].children[0].style.display = 'inline';
        paiDeTodosIcons[j].children[1].style.display = 'none';       
    }    
    
    var pai = document.querySelector('#dadosPort_'+n);
    var tempPort = '';    

    eleIco.children[0].style.display = 'none';
    eleIco.children[1].style.display = 'inline';

    for (var index = 0; index < dadosPort.length; index++) {

        if(n === dadosPort[index].localDeTrabalho){
            tempPort += '<div class="dadosPort">';
            tempPort += '<span class="tituPort">'+dadosPort[index].titulo+'</span>';
            tempPort += '<span class="descPort">'+dadosPort[index].descricao+'</span>';
            tempPort += '<a href="'+dadosPort[index].link+'" target="_blank"><span class="linkPort">'+dadosPort[index].linkDesc+'</span></a>';
            tempPort += '</div>'; 
        }

    }

    pai.innerHTML = tempPort;
    /*pai.style.height = '130px';

    setTimeout(function(){
        pai.style.height = 'auto';
    }, 300);*/

    nAnterior = n;

}


var dadosPort = [
    {
        'localDeTrabalho':0,
        'titulo':'App tal1',
        'descricao':'Essa aplicação eu fiz com o propósito X',
        'link':'Link para aplicação (se existir)',
        'linkDesc':'clique aqui la la'
    },
    {
        'localDeTrabalho':0,
        'titulo':'App tal1',
        'descricao':'Essa aplicação eu fiz com o propósito X',
        'link':'',
        'linkDesc':''
    },
    {
        'localDeTrabalho':1,
        'titulo':'App tal0',
        'descricao':'Essa aplicação eu fiz com o propósito X',
        'link':'Link para aplicação (se existir)',
        'linkDesc':'clique aqui la la'
    },
]