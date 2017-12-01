class Lista{

	constructor(){
		this._numeros = [3,2,11,20,8,7];
	}

	dobraValorImpar(){

	    let novosNumeros = this._numeros.map((item)=> (item%2 +1 ) * item);
		console.log(novosNumeros);	

	}

}