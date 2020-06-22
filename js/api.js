class API{
    constructor(apiKey)  {

        this.apiKey = apiKey;
    }

    //obtener las criptomonedas 
    async obtenerMonedasAPi(){
        //url api
        const url =  `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;

        //fetch a la api
        const urlObtenerMonedas = await fetch(url);

        //respuesta en json
        const monedas = await urlObtenerMonedas.json();

        return{
            monedas
        }

    }  

    async obtenerValores(moneda , cripto){

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}&api_key=${this.apiKey}`;

        //fetch  a la api
        const urlConvertirMonedas = await fetch(url); 
 
        //covertir Respuesta a JSON
        const resultado =  await urlConvertirMonedas.json();

        return{
            resultado
        }


    }

}