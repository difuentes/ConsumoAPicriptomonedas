//Variables 
const ConsumoAPI = new  API('26d28ee86522a30db818bdffb369fe3d3b9c36aefaa427ca02241f27642fdf7b'); 
const ui = new Interface();


ConsumoAPI.obtenerMonedasAPi();
//leer formulario 
const formulario = document.getElementById('formulario');

//event lisener 

formulario.addEventListener('submit',(e) =>{
    e.preventDefault();
    //modena seleccionada formulario
    const monedaSelect = document.getElementById('moneda');
    const MonedaSelecionada = monedaSelect.options[monedaSelect.selectedIndex].value;
   //criptomoneda seleccionada formulario
   const criptoSelect = document.getElementById('criptomoneda');
   const criptoSelecionada = criptoSelect.options[criptoSelect.selectedIndex].value;

   //comprobar si los valores estan vacios 
    
   if(MonedaSelecionada === ''  && criptoSelecionada === ''){
         ui.mostrarMensaje('Falta Completar Ambos Campos','alert bg-danger text-center');
         
   }
   else {
    //consultar API
    ConsumoAPI.obtenerValores(MonedaSelecionada,criptoSelecionada)
    .then(data => {
       ui.InprimirResultado(data.resultado.RAW,MonedaSelecionada,criptoSelecionada);
    })


   }

})

//funciones
