export default {
  "soap:Envelope.@xmlns:soap":
    "{{safeVal 'http://www.w3.org/2003/05/soap-envelope' 'http://www.w3.org/2003/05/soap-envelope' }}",

  "soap:Envelope.@xmlns:tem":
    "{{safeVal 'http://tempuri.org/' 'http://tempuri.org/' }}",

  "soap:Envelope.soap:Header.tem:AuthHeader.tem:login.#text": "{{carrier.id}}",

  "soap:Envelope.soap:Header.tem:AuthHeader.tem:pwd.#text":
    "{{carrier.password}}",

  "soap:Envelope.soap:Header.tem:AuthHeader.tem:Id_CodFacturacion.#text":
    "{{safeVal extraParams.servientrega.idCodFacturacion 'SER408' }}",

  "soap:Envelope.soap:Header.tem:AuthHeader.tem:Nombre_Cargue.#text":
    "{{safeVal extraParams.servientrega.nombreCargue 'AJA_GROUP' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.@id_zonificacion":
    "{{safeVal '?' '?' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.@des_codigopostal":
    "{{recipient.postalCode}}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_CiudadRemitente.#text":
    "{{shipper.city}}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_DireccionRemitente.#text":
    "{{shipper.address1}}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_TelefonoRemitente.#text":
    "{{shipper.phoneNumber}}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Nom_Remitente.#text":
    "{{shipper.personName}}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_Telefono.#text":
    "{{recipient.phoneNumber}}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_Ciudad.#text":
    "{{recipient.city}}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_Direccion.#text":
    "{{recipient.address1}}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Nom_Contacto.#text":
    "{{recipient.personName}}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_CorreoElectronico.#text":
    "{{recipient.email}}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_Guia.#text":
    "{{safeVal extraParams.servientrega.numGuia '0' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_Sobreporte.#text":
    "{{safeVal extraParams.servientrega.numSobreporte '0' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_SobreCajaPorte.#text":
    "{{safeVal extraParams.servientrega.numSobreCajaPorte '0' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Fec_TiempoEntrega.#text":
    "{{safeVal extraParams.servientrega.fecTiempoEntrega '1' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_TipoTrayecto.#text":
    "{{safeVal extraParams.servientrega.desTipoTrayecto '1' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Ide_CodFacturacion.#text":
    "{{safeVal extraParams.servientrega.ideCodFacturacion 'SER408' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_Piezas.#text":
    "{{safeVal extraParams.servientrega.numPiezas '1' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_FormaPago.#text":
    "{{safeVal extraParams.servientrega.formaPago '2' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_MedioTransporte.#text":
    "{{safeVal extraParams.servientrega.medioTransporte '1' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Nom_TipoTrayecto.#text":
    "{{safeVal extraParams.servientrega.tipoTrayecto '1' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_Alto.#text":
    "{{safeVal extraParams.servientrega.numAlto '1' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_Ancho.#text":
    "{{safeVal extraParams.servientrega.numAncho '1' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_Largo.#text":
    "{{safeVal extraParams.servientrega.numLargo '1' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_PesoTotal.#text":
    "{{safeVal extraParams.servientrega.numPesoTotal '1' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_UnidadLongitud.#text":
    "{{safeVal extraParams.servientrega.desUnidadLongitud 'cm' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_UnidadPeso.#text":
    "{{safeVal extraParams.servientrega.desUnidadPeso 'kg' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Nom_UnidadEmpaque.#text":
    "{{safeVal extraParams.servientrega.nomUnidadEmpaque 'GENERICO' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Gen_Cajaporte.#text":
    "{{safeVal extraParams.servientrega.genCajaporte false }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Gen_Sobreporte.#text":
    "{{safeVal extraParams.servientrega.genSobreporte false }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_DiceContenerSobre.#text":
    "{{safeVal extraParams.servientrega.desDiceContenerSobre '?' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Doc_Relacionado.#text":
    "{{safeVal extraParams.servientrega.docRelacionado 'Valor10' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_VlrCampoPersonalizado1.#text":
    "{{safeVal extraParams.servientrega.desVlrCampoPersonalizado1 'Novedades 3166913218' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Ide_Num_Referencia_Dest.#text":
    "{{safeVal extraParams.servientrega.ideNumReferenciaDest 'Valor12' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_Factura.#text":
    "{{safeVal extraParams.servientrega.numFactura 'valor13' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Ide_Producto.#text":
    "{{safeVal extraParams.servientrega.ideProducto 2 }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_Recaudo.#text":
    "{{safeVal extraParams.servientrega.numRecaudo 0 }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Ide_Destinatarios.#text":
    "{{safeVal extraParams.servientrega.ideDestinatarios '00000000-0000-0000-0000-000000000000' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Ide_Manifiesto.#text":
    "{{safeVal extraParams.servientrega.ideManifiesto '00000000-0000-0000-0000-000000000000' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_BolsaSeguridad.#text":
    "{{safeVal extraParams.servientrega.numBolsaSeguridad 0 }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_Precinto.#text":
    "{{safeVal extraParams.servientrega.numPrecinto 0 }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_VolumenTotal.#text":
    "{{safeVal extraParams.servientrega.numVolumenTotal 0 }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_DireccionRecogida.#text":
    "{{safeVal extraParams.servientrega.desDireccionRecogida '?' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_TelefonoRecogida.#text":
    "{{safeVal extraParams.servientrega.desTelefonoRecogida '?' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_CiudadRecogida.#text":
    "{{safeVal extraParams.servientrega.desCiudadRecogida '?' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_PesoFacturado.#text":
    "{{safeVal extraParams.servientrega.numPesoFacturado 0 }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_TipoGuia.#text":
    "{{safeVal extraParams.servientrega.desTipoGuia 2 }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Id_ArchivoCargar.#text":
    "{{safeVal extraParams.servientrega.idArchivoCargar 'hc3DC+KSn8oRLa+25qt/5w==' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_CiudadOrigen.#text":
    "{{safeVal extraParams.servientrega.desCiudadOrigen 0 }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_ValorDeclaradoTotal.#text":
    "{{safeVal extraParams.servientrega.numValorDeclaradoTotal 0 }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_ValorLiquidado.#text":
    "{{safeVal extraParams.servientrega.numValorLiquidado 0 }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_VlrSobreflete.#text":
    "{{safeVal extraParams.servientrega.numVlrSobreflete 0 }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_VlrFlete.#text":
    "{{safeVal extraParams.servientrega.numVlrFlete 0 }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_Descuento.#text":
    "{{safeVal extraParams.servientrega.numDescuento 0 }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_DepartamentoDestino.#text":
    "{{safeVal extraParams.servientrega.desDepartamentoDestino '?' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_DiceContener.#text":
    "{{safeVal extraParams.servientrega.desDiceContener 'VARIOS PAPELES' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Ide_Num_Identific_Dest.#text":
    "{{safeVal extraParams.servientrega.ideNumIdentificDest 1000100530100 }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_Celular.#text":
    "{{safeVal extraParams.servientrega.numCelular '?' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_DepartamentoOrigen.#text":
    "{{safeVal extraParams.servientrega.desDepartamentoOrigen '?' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Num_IdentiRemitente.#text":
    "{{safeVal extraParams.servientrega.numIdentiRemitente '?' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Est_CanalMayorista.#text":
    "{{safeVal extraParams.servientrega.estCanalMayorista false }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Nom_RemitenteCanal.#text":
    "{{safeVal extraParams.servientrega.nomRemitenteCanal '?' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:Des_IdArchivoOrigen.#text":
    "{{safeVal extraParams.servientrega.desIdArchivoOrigen 1000100530100 }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:envios.tem:CargueMasivoExternoDTO.tem:objEnvios.tem:EnviosExterno.tem:objEnviosUnidadEmpaqueCargue.#text":
    "{{packagesXML packages resources 'SERVIENTREGA' }}",

  "soap:Envelope.soap:Body.tem:CargueMasivoExterno.tem:arrayGuias.tem:string.#text":
    "{{safeVal extraParams.servientrega.string '?' }}",
};
