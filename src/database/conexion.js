function conexion(){
    return SpreadsheetApp.openById(env_().ID_DATABASE);
}



function obtenerSheet(nombre){
    return conexion().getSheetByName(nombre)
}

function obtenerDatos(nombre){
    return obtenerSheet(nombre).getDataRange().getDisplayValues()

}