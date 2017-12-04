class DateHelper{

	constructor(){
		throw new Error("A classe DateHelper não pode ser instanciada")
	}

	static dataParaTexto(data){
		console.log("Data: "+data);
		let nData = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
		console.log("Data N: "+nData); 
		return nData
	}

	static textoParaData(texto){

		if(!/\d{4}-\d{2}-\d{2}/.test(texto))
			throw new Error('Deve estar no formato aaaa-mm-dd');

        	return new Date(...texto.split('-').map((item,indice) => item - indice % 2));
	}

}
