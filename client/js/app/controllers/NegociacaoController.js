class NegociacaoController {


	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._listaNegociacoes = new ListaNegociacoes(() => {
			this._negociacoesView.update(this._listaNegociacoes);
		});
		this._negociacoesView = new NegociacoesView($('#negociacoesView'));

		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($('#mensagemView'));
		this._mensagemView.update(this._mensagem);

	}

	//Método para criar uma negociação
	adiciona(event) {

		event.preventDefault();
		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._negociacoesView.update(this._listaNegociacoes);

		this._mensagem.texto = 'Negociação adicionada com sucesso';
		this._mensagemView.update(this._mensagem);

		this._limparFormulario();

		console.log(this._listaNegociacoes.negociacoes);

	}

	_criaNegociacao() {
		console.log("Data: " + this._inputData.value);
		return new Negociacao(
			DateHelper.textoParaData(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value
		)
	}

	//Método para limpar os campos do formulário e direcionar o foco para a data
	_limparFormulario() {
		this._inputData.value = "";
		this._inputQuantidade.value = 1;
		this._inputValor.value = "0.0";
		this._inputData.focus();
	}

	apagar() {

		this._listaNegociacoes.esvazia();
		this._negociacoesView.update(this._listaNegociacoes);

		this._mensagem.texto = "Negociações apagadas com sucesso";
		this._mensagemView.update(this._mensagem);
	}

}
