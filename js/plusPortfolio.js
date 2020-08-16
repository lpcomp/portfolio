
var nAnterior;
var paiDeTodosPort = document.querySelectorAll('.boxDadosPort');
var paiDeTodosIcons = document.querySelectorAll('.boxBtPlus');

function openPort (n, eleIco){

    var qtdItens = 0;
    
    paiDeTodosPort.forEach(element => {
        element.style.height = '0px';
        element.style.opacity = '0';
    });

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

            qtdItens++;
        }

    }

    pai.innerHTML = tempPort;
    pai.style.height = (qtdItens*163)+'px';
    pai.style.opacity = '1';

    nAnterior = n;

}


var dadosPort = [
    {
        'localDeTrabalho': 0,
        'titulo':'Boehringer Ingelheim - Retorno seguro e consciente',
        'descricao':'Responsável por desenvolver todo o front end da aplicação assim como testes e junção com o sistema LMS da Boehringer.',
        'link':'',
        'linkDesc':''
    },
    {
        'localDeTrabalho': 0,
        'titulo':'GLOBO - Dia Mundial do Meio Ambiente',
        'descricao':'Responsável por desenvolver parte do front end dos jogos e interface assim como realizar testes da aplicação.',
        'link':'https://www.linkedin.com/posts/playerum_playerum-comunicacaointerna-meioambiente-activity-6674707646286700544-LQew/',
        'linkDesc':'Veja a matéria'
    },
    {
        'localDeTrabalho': 0,
        'titulo':'FQM - Fumasil',
        'descricao':'Responsável por desenvolver parte do front end em React Native da aplicação.',
        'link':'https://play.google.com/store/apps/details?id=com.playerum.fumasil',
        'linkDesc':'Veja a aplicação'
    },
    {
        'localDeTrabalho': 0,
        'titulo':'Uber - Parceiro da cidadania',
        'descricao':'Responsável por ajudar na construção front end.',
        'link':'https://www.uber.com/pt-BR/newsroom/parceiro-da-cidadania-salvador/',
        'linkDesc':'Veja a matéria'
    },
    {
        'localDeTrabalho':0,
        'titulo':'Uber - Desafio cinco estrelas',
        'descricao':'Responsável por ajudar na construção front end do jogo, na programação e integração.',
        'link':'https://www.tecmundo.com.br/mobilidade-urbana-smart-cities/128930-uber-lanca-game-melhorar-conduta-motoristas.htm',
        'linkDesc':'Veja a matéria'
    },    
    {
        'localDeTrabalho':0,
        'titulo':'Raizen - Mestre de segurança',
        'descricao':'Reponsável pela parte front end e integração com o banco de dados. Treinamento de segurança voltado para os funcionários da Raizen.',
        'link':'https://www.mestredeseguranca.com.br',
        'linkDesc':'Site da plataforma'
    },  
    {
        'localDeTrabalho':0,
        'titulo':'L\'occitane au Brésil - Site parallax',
        'descricao':'Reponsável pela parte front end do site que é constituído pelas linhas da L\'occitane.',
        'link':'http://playerdois.com.br/loccitane/parallax',
        'linkDesc':'Site parallax'
    }, 
    {
        'localDeTrabalho':0,
        'titulo':'L\'occitane au Brésil - Site de produtos',
        'descricao':'Reponsável por uma parte front end do site que é constituído pelos produtos da linha L\'occitane. Esse site é mais usado para consulta e treinamento dos funcionários.',
        'link':'http://playerdois.com.br/loccitane/memento',
        'linkDesc':'Site dos produtos'
    }, 
    {
        'localDeTrabalho':0,
        'titulo':'Boehringer - Simulador',
        'descricao':'Reponsável pela parte front end do simulador e integração com o banco. Esse simulador é usado para treinamento dos vendedores da Boehringer.',
        'link':'http://playerdois.com.br/loccitane/memento',
        'linkDesc':'Site dos produtos'
    }, 
    {
        'localDeTrabalho':0,
        'titulo':'CNA - CNA Garden',
        'descricao':'Aplicação web para ensino de inglêns para alunos do CNA.',
        'link':'',
        'linkDesc':''
    },  
    {
        'localDeTrabalho':0,
        'titulo':'CNA - Level Up',
        'descricao':'Aplicação web integrada com SCORM (LMS) para treinamento dos professores do CNA.',
        'link':'',
        'linkDesc':''
    }, 
    {
        'localDeTrabalho':0,
        'titulo':'CNA - Tecnicas de vendas',
        'descricao':'Aplicação web integrada com SCORM (LMS) para treinamento dos funcionários do CNA.',
        'link':'',
        'linkDesc':''
    }, 
    {
        'localDeTrabalho':0,
        'titulo':'Ri Happy - Treinamento',
        'descricao':'Aplicação web integrada com SCORM (LMS) para treinamento dos funcionários da Ri Happy.',
        'link':'',
        'linkDesc':''
    },  
    {
        'localDeTrabalho':1,
        'titulo':'Unasus UERJ - Portal Unsasus UERJ',
        'descricao':'Responsável por desenvolver o site, utilizando juntamente o sistema WordPress e criação de treinamentos para os médicos.',
        'link':'http://unasus.uerj.br',
        'linkDesc':'Site da instituição'
    },
    {
        'localDeTrabalho':1,
        'titulo':'Unasus UERJ - Simulador do ouvido (não terminado)',
        'descricao':'Responsável por desenvolver o simulador no Unity, para ser utilizado para consulta por profissionais da área.',
        'link':'',
        'linkDesc':''
    },
    
]