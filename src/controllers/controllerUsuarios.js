
function guardarUsuario(usuario){
    const {id,	nombreCompleto,	correoElectronico,	contraseña} = usuario
    const sheetUsuarios = obtenerSheet(env_().SH_REGISTRO)
    try {
        sheetUsuarios.appendRow([id, nombreCompleto, correoElectronico,	contraseña])
        return {titulo: "registro exitoso"}
    } catch (error) {
        return {titulo: "algo salió mal"+error}
    }
}
function listarUsuarios(){
    return obtenerDatos(env_().SH_REGISTRO)
}