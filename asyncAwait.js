function ordenarProducto(producto){
    return new Promise((resolve, reject) => {
        console.log('Ordenando: '+ producto+ ' de Circle.');
        setTimeout(() => {
            if(producto === 'tasa'){
                resolve('Ordenando una tasa con logo de Circle.');
            }
            else{
                reject('Este producto no esta disponble.');
            }
        }, 2000);
    });
}

function procesarPedido(respuesta){
    return new Promise(resolve => {
        console.log("Procesando respuesta");
        console.log("La respuesta fue "+ respuesta);
        setTimeout(() => {
            resolve('Gracias poe su compra...');
        }, 4000);
    });
}

/*ordenarProducto('lapiz')
    .then(respuesta => {
        console.log('Respuesta recibida');
        console.log(respuesta);
        return procesarPedido(respuesta);
    })
    .then(respuestaProcesada => {
        console.log(respuestaProcesada);
    })
    .catch(error => {
        console.log(error);
    });*/

    async function realizarPedido(producto) {
        try{
            const respuesta = await ordenarProducto(producto);
            console.log('Respuesta recibida');
            const respuestaProcesada = await procesarPedido(respuesta);
            console.log(respuestaProcesada);
        }
        catch(error){
            console.log(error);
        }
    }

    realizarPedido('tasa');
