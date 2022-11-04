
function prepararFila(data, headers){
    let array = []
    for(i = 0; i<headers.lenght;i++){
        let valor = data[headers[i]]
        array[i] = valor
    }
    return array
}
/**
 * 
 * @param {Object} data 
 * @param {Object} tabla 
 * @return {String}
 */
function Insertar(data, tabla){
    let headers = tabla.getDataRange().getValues().shift()
    let nuevaFila = prepararFila(data, headers.filter(String))
    tabla.appendRow(nuevaFila)
}
