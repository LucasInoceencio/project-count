//Função escolhe qual função será utilizada
function metodoGerar(){
	var numberInicial = parseInt(document.getElementById("inputNumberInicial").value);
	var numberFinal = parseInt(document.getElementById("inputNumberFinal").value);
	text = "O campo 'Até' deve ser maior do que o campo 'De'."
	if(numberFinal < numberInicial){
		document.getElementById("caixaSaida").innerHTML = text; 
		console.log(text);
		disableBtnGerar();
	} else {
		var result  = document.getElementById("verificacaoZeros")
		var itemSelecionado = result.options[result.selectedIndex].value;
		if(itemSelecionado === "comZeros") {
			gerarlinkComZero();
		}
		if(itemSelecionado === "semZeros") {
			gerarLinkSemZero();
		}
	}
}

//Função que traz o resultado com o zero antes dos números. Ex.: 01, 02, 03 e etc.
function gerarlinkComZero() {

	var inputNomeArquivo = document.getElementById("inputNomeArquivo").value;
	var numberInicial = parseInt(document.getElementById("inputNumberInicial").value);
	var numberFinal = parseInt(document.getElementById("inputNumberFinal").value);
	var extensaoArquivo = document.getElementById("inputExtensaoArquivos").value;
	var text = '';
	var i = numberInicial;
    
    //Método que traz o resultado com o zero antes dos números. Ex.: 01, 02, 03 e etc.
	while (i <= numberFinal) {
		var i = i > 9 ? i : "0" + i
		text += inputNomeArquivo + i + extensaoArquivo + "|"
		i++;
	}
	
	document.getElementById("caixaSaida").innerHTML = text; 
	console.log(text);
	disableBtnGerar();
	enableBtnCopiar();
	mudarNomeBotaoParaGerado();
	limparPlaceholderArquivo();
}

//Função que traz o resultado sem o zero antes dos números. Ex.: 1, 2, 3 e etc.
function gerarLinkSemZero() {

	var inputNomeArquivo = document.getElementById("inputNomeArquivo").value;
	var numberInicial = parseInt(document.getElementById("inputNumberInicial").value);
	var numberFinal = parseInt(document.getElementById("inputNumberFinal").value);
	var extensaoArquivo = document.getElementById("inputExtensaoArquivos").value;
	var text = '';
	var i = numberInicial;
	
    //Método que traz o resultado sem o zero antes dos números. Ex.: 1, 2, 3 e etc.
	while (i <= numberFinal) {
		text += inputNomeArquivo + i + extensaoArquivo + "|"
		i++;
	}
	
	document.getElementById("caixaSaida").innerHTML = text; 
	console.log(text);
	disableBtnGerar();
	enableBtnCopiar();
	mudarNomeBotaoParaGerado();
	limparPlaceholderArquivo();
}

//Função que limpar os campos
function limparCampos(){

	text = ""
	document.getElementById("inputNomeArquivo").value = "";
	document.getElementById("inputNumberInicial").value = "";
	document.getElementById("inputNumberFinal").value = "";
	document.getElementById("caixaSaida").innerHTML = text; 
	console.log(text);
	disableBtnLimpar();
	disableBtnGerar();
	disableBtnCopiar();
	placeholderArquivo();
}

//Função para copiar o resultado
function metodoCopiar() {
	var copyText = document.getElementById("caixaSaida").innerText;
	//O texto que será copiado
	var texto = copyText;
	//Cria um elemento input (pode ser um textarea)
	var inputTest = document.createElement("input");
	inputTest.value = texto;
	//Anexa o elemento ao body
	document.body.appendChild(inputTest);
	//seleciona todo o texto do elemento
	inputTest.select();
	//executa o comando copy
	//aqui é feito o ato de copiar para a area de trabalho com base na seleção
	document.execCommand('copy');
	//remove o elemento
	document.body.removeChild(inputTest);
	disableBtnCopiar();
	mudarNomeBotaoParaCopiado();
	//Acrescentando texto na caixa de saida
	var textoAuxiliar = "O texto abaixo foi copiado:<br><br>";
	document.getElementById("caixaSaida").innerHTML = textoAuxiliar + copyText;
}

//Função para desabilitar botão copiar
function disableBtnCopiar() {
	document.getElementById("botaoCopiar").disabled = true;
	var VarBotao = document.getElementById("botaoCopiar");
	VarBotao.innerHTML  = '<i class="fa fa-files-o" aria-hidden="true"></i>&nbsp;Copiar';
}

//Função para habilitar botão copiar
function enableBtnCopiar() {
	document.getElementById("botaoCopiar").disabled = false;
	var VarBotao = document.getElementById("botaoCopiar");
	VarBotao.innerHTML  = '<i class="fa fa-files-o" aria-hidden="true"></i>&nbsp;<b>Copiar</b>';
}

//Função para desabilitar botão gerar
function disableBtnGerar() {
	document.getElementById("botaoGerar").disabled = true;
	var VarBotao = document.getElementById("botaoGerar");
	VarBotao.innerHTML  = '<i class="fas fa-plus" aria-hidden="true"></i>&nbsp;Gerar';
}

//Função para habilitar botão gerar
function enableBtnGerar() {
	document.getElementById("botaoGerar").disabled = false;
	var VarBotao = document.getElementById("botaoGerar");
	VarBotao.innerHTML  = '<i class="fas fa-plus" aria-hidden="true"></i>&nbsp;<b>Gerar</b>';

	text = "";
	document.getElementById("caixaSaida").innerHTML = text; 
	console.log(text);
	disableBtnCopiar();
}

//Função para desabilitar botão limpar
function disableBtnLimpar() {
	document.getElementById("botaoLimpar").disabled = true;
	var VarBotao = document.getElementById("botaoLimpar");
	VarBotao.innerHTML  = '<i class="far fa-trash-alt" aria-hidden="true"></i>&nbsp;Limpar';
}

//Função para habilitar botão limpar
function enableBtnLimpar() {
	document.getElementById("botaoLimpar").disabled = false;
	var VarBotao = document.getElementById("botaoLimpar");
	VarBotao.innerHTML  = '<i class="far fa-trash-alt" aria-hidden="true"></i>&nbsp;<b>Limpar</b>';
}

//Função verifica campos para botão gerar
function habilitarBotoes() {
	var primeiroCampo = document.getElementById("inputNomeArquivo").value;
	var segundoCampo = document.getElementById("inputNumberInicial").value;
	var terceiroCampo = document.getElementById("inputNumberFinal").value;

	if(primeiroCampo != "" && segundoCampo != "" && terceiroCampo  != ""){
		enableBtnGerar();
		enableBtnLimpar();
	} else if(primeiroCampo != "" || segundoCampo != "" || terceiroCampo != ""){
		enableBtnLimpar();
		disableBtnGerar();
	} else {
		disableBtnGerar();
		disableBtnLimpar();
	}

}

function mudarNomeBotaoParaCopiado(){
	var VarBotao = document.getElementById("botaoCopiar");
	VarBotao.innerHTML  = '<i class="fas fa-check" aria-hidden="true"></i>&nbsp;<b>Copiado!</b>';
}

function mudarNomeBotaoParaGerado(){
	var VarBotao = document.getElementById("botaoGerar");
	VarBotao.innerHTML  = '<i class="fas fa-check" aria-hidden="true"></i>&nbsp;<b>Gerado!</b>';
}

function limparPlaceholderArquivo(){
	document.getElementById("inputNomeArquivo").placeholder = "";
}

function placeholderArquivo(){
	document.getElementById("inputNomeArquivo").placeholder = "https://www.novaxs.com.br/loja/img-travel/nome-padrao-do-arquivo-";
}