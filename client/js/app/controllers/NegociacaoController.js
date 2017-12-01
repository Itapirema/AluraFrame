class NegociacaoController{


	constructor(){
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._listaNegociacoes = new ListaNegociacoes();
	}

	_criaNegociacao() {

		  return new Negociacao(
		        DateHelper.textoParaData(this._inputData.value),
		        this._inputQuantidade.value,
		        this._inputValor.value
		    )
    }

	//Método para limpar os campos do formulário e direcionar o foco para a data
	_limparFormulario(){
		this._inputData.value = "";
		this._inputQuantidade.value = 0;
		this._inputValor.value = 0.0;
		this._inputData.focus();
	}

	//Método para criar uma negociação
	adiciona(event){

		event.preventDefault();

		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._limparFormulario();

        console.log(this._listaNegociacoes.negociacoes);
	
	}
	
}