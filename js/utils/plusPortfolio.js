
var previousWorkplace;
var paiDeTodosPort = document.querySelectorAll('.boxDadosPort');
var paiDeTodosIcons = document.querySelectorAll('.boxBtPlus');

function openPort (workplace, eleIco) {
    const maxHeightCard = 184;
    const qtdItens = dadosPort[workplace].length;
    
    paiDeTodosPort.forEach(element => {
        element.style.height = '0px';
        element.style.opacity = '0';
    });

    if (workplace === previousWorkplace) {
        document.querySelector('#dadosPort_'+workplace).innerHTML = '';
        previousWorkplace = '';
        eleIco.children[0].style.display = 'inline';
        eleIco.children[1].style.display = 'none';
        return;
    }

    for( var x in paiDeTodosPort) paiDeTodosPort[x].innerHTML = '';
    for (var j = 0; j < paiDeTodosIcons.length; j++) {
        paiDeTodosIcons[j].children[0].style.display = 'inline';
        paiDeTodosIcons[j].children[1].style.display = 'none';       
    }    
    
    var pai = document.querySelector('#dadosPort_'+workplace);
    var tempPort = '';    

    eleIco.children[0].style.display = 'none';
    eleIco.children[1].style.display = 'inline';    

    dadosPort[workplace].forEach(element => {
        tempPort += '<div class="dadosPort">';
        tempPort += '<span class="tituPort">'+element.titulo+'</span>';
        tempPort += '<span class="descPort">'+element.descricao+'</span>';
        tempPort += '<a href="'+element.link+'" target="_blank"><span class="linkPort">'+element.linkDesc+'</span></a>';
        tempPort += '</div>';
    });

    pai.innerHTML = tempPort;
    pai.style.height = (qtdItens*maxHeightCard)+'px';
    pai.style.opacity = '1';

    previousWorkplace = workplace;

}
