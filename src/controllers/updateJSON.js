function Update(id, datos){
    const {nombreCompleto,	correoElectronico,	contraseña} = JSON.parse(datos)
    var Rango = SpreadsheetApp.getActiveSpreadsheet().getRange("registro!A1:A").getValues().filter(String).map( fila => {
        return fila[0]
    })
    let index = Rango.indexOf(id)
    SpreadsheetApp.getActiveSpreadsheet().getRange("registro!B"+(index+1)+":"+"D"+(index+1)).setValues([[nombreCompleto,	correoElectronico,	contraseña]])
    
}