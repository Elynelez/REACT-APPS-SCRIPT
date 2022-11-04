
function guardarUsuario(usuario){
    const {id,	nombreCompleto,	correoElectronico,	contraseña} = usuario
    const sheetUsuarios = obtenerSheet(env_().SH_REGISTRO)
    try {
        sheetUsuarios.appendRow([id, nombreCompleto, correoElectronico,	contraseña])
        // Insertar(usuario, sheetUsuarios)
        return {titulo: "registro exitoso"}
    } catch (error) {
        return {titulo: "algo salió mal"+error}
    }
}
function listarUsuarios(id = undefined) {
    // return obtenerDatos(env_().SH_REGISTRO);
    return JSON.stringify(_read(obtenerDatos(env_().SH_REGISTRO), id))
}

function actualizarUsuario(id, datos){
    try {
        Update(id, datos)
        return {titulo: "el usuario ha sido actualizado en la base de datos"}
    } catch (error) {
        return {titulo: "algo salió mal "+error}
    }
}

function eliminarUsuarios(id){
    let sheet = obtenerSheet(env_().SH_REGISTRO)
    var Rango = sheet.getRange("registro!A1:A").getValues().filter(String).map( fila => {
        return fila[0]
    })
    
    let index = Rango.indexOf(id)
    sheet.deleteRow(index+1)
    return {titulo: "eliminado correctamente"}
}
