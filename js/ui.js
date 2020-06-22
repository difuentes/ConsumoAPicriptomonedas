class Interface {

    //constructor
    constructor(){
        this.init();
    }
    //cargar Contructor

    init(){
        this.construirSelect();
    }


    //metodo para obtener valores de la api pasandolos a la interfaz
    construirSelect(){
        ConsumoAPI.obtenerMonedasAPi()
        .then(monedas => {
            //crear variable del select 
            const select = document.getElementById('criptomoneda');

            //iterar valores de la api
            for(const [key ,value] of Object.entries(monedas.monedas.Data)){
                //añadir el symbol y el nombre como opciones
                const op = document.createElement('option');
                op.value = value.Symbol;
                op.appendChild(document.createTextNode(value.CoinName));

                select.appendChild(op);
            }
           
        })
    }



    mostrarMensaje(mensaje,clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        //seleccionar Menjaje 
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);
        //mostar Contenido

        setTimeout(()=>{
            document.querySelector('.mensajes div').remove();
        },2000)
    }

    //imprimir resultado de cotizacion
    InprimirResultado(resultado,moneda,crypto){

        const dataMoneda = resultado[crypto][moneda];

        //
        const resAnterior = document.querySelector('#resultado > div');

        if(resAnterior){
            resAnterior.remove();
        }

        //recortar precio 
        let precio = dataMoneda.PRICE.toFixed(2);
        //recortar variacion de precio 
        let variacion = dataMoneda.CHANGEPCTDAY.toFixed(2);
        //tranformar fecha 
        let fecha = new Date(dataMoneda.LASTUPDATE * 1000).toLocaleDateString('es-CL');

        //construir template
        let templateHTML = `
            <div class="card bg-success col-12">
                <div>
                    <h2 style="color:white" class="card-title mt-3">Resultado:  </h2>
                    <p style="color:white">El Precio  de :${dataMoneda.FROMSYMBOL} a ${dataMoneda.TOSYMBOL} es de :$ ${precio} </p>
                    <p style="color:white">variacion ultimo dia  es de %${variacion}<p>
                    <p style="color:white">Ultima actualizacion : ${fecha}<p>
                </div>
            
            </div>

        `;

        //insertar El resultado 

        this.mostarOcultarSpinner('block');

        setTimeout(( )=>{
            document.getElementById('resultado').innerHTML = templateHTML;
            //ocultar spinner
            this.mostarOcultarSpinner('none');
        },3000);
        

    }

    //mostrarSpiner de carga
    mostarOcultarSpinner(style)
    {
        const Spinner = document.querySelector('.contenido-spinner');
        Spinner.style.display = style;
    }


}