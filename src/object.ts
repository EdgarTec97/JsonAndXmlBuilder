export default {
  LABEL_NUMBER: {
    template2: {
      "soap:Envelope": {
        "@xmlns:soap": "http://www.w3.org/2003/05/soap-envelope",
        "@xmlns:tem": "http://tempuri.org/",
        "soap:Header": {
          "tem:AuthHeader": {
            "tem:login": {
              "#text": "{{carrier.id}}",
            },
            "tem:pwd": {
              "#text": "{{carrier.password}}",
            },
            "tem:Id_CodFacturacion": {
              "#text":
                "{{safeVal extraParams.servientrega.idCodFacturacion 'SER408'}}",
            },
            "tem:Nombre_Cargue": {
              "#text":
                "{{safeVal extraParams.servientrega.nombreCargue 'AJA_GROUP'}}",
            },
          },
        },
        "soap:Body": {
          "tem:CargueMasivoExterno": {
            "tem:envios": {
              "tem:CargueMasivoExternoDTO": {
                "tem:objEnvios": {
                  "tem:EnviosExterno": {
                    "@id_zonificacion": "?",
                    "@des_codigopostal": "{{carrier.postalCode}}",
                    "tem:Des_CiudadRemitente": {
                      "#text": "{{shipper.city}}",
                    },
                    "tem:Des_DireccionRemitente": {
                      "#text": "{{shipper.address1}}",
                    },
                    Num_TelefonoRemitente: {
                      "#text": "{{shipper.phoneNumber}}",
                    },
                    Nom_Remitente: {
                      label: "shipper.personName",
                      require: true,
                      "#text": "{{shipper.personName}}",
                    },
                    Des_Telefono: {
                      label: "recipient.phoneNumber",
                      require: true,
                      "#text": "{{recipient.phoneNumber}}",
                    },
                    Des_Ciudad: {
                      label: "recipient.city",
                      require: true,
                      "#text": "{{recipient.city}}",
                    },
                    Des_Direccion: {
                      label: "recipient.address1",
                      require: true,
                      "#text": "{{recipient.address1}}",
                    },
                    Nom_Contacto: {
                      label: "recipient.personName",
                      require: true,
                      "#text": "{{recipient.personName}}",
                    },
                    Des_CorreoElectronico: {
                      label: "recipient.email",
                      require: false,
                      "#text": "{{recipient.email}}",
                    },
                    Num_Guia: {
                      label: "extraParams.servientrega.numGuia",
                      require: false,
                      "#text": "{{safeVal extraParams.servientrega.numGuia 0}}",
                    },
                    Num_Sobreporte: {
                      label: "extraParams.servientrega.numSobreporte",
                      require: false,
                      "#text":
                        "{{safeVal extraParams.servientrega.numSobreporte 0}}",
                    },
                    Num_SobreCajaPorte: {
                      label: "extraParams.servientrega.numSobreCajaPorte",
                      require: false,
                      "#text":
                        "{{safeVal extraParams.servientrega.numSobreCajaPorte 0}}",
                    },
                    Fec_TiempoEntrega: {
                      label: "extraParams.servientrega.fecTiempoEntrega",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.fecTiempoEntrega 1}}",
                    },
                    Des_TipoTrayecto: {
                      label: "extraParams.servientrega.desTipoTrayecto",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.desTipoTrayecto 1}}",
                    },
                    Ide_CodFacturacion: {
                      label: "extraParams.servientrega.ideCodFacturacion",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.ideCodFacturacion 'SER408'}}",
                    },
                    Num_Piezas: {
                      label: "extraParams.servientrega.numPiezas",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.numPiezas 1}}",
                    },
                    Des_FormaPago: {
                      label: "extraParams.servientrega.formaPago",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.formaPago 2}}",
                    },
                    Des_MedioTransporte: {
                      label: "extraParams.servientrega.medioTransporte",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.medioTransporte 1}}",
                    },
                    Des_TipoDuracionTrayecto: {
                      label: "extraParams.servientrega.tipoDuracionTrayecto",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.tipoDuracionTrayecto 1}}",
                    },
                    Nom_TipoTrayecto: {
                      label: "extraParams.servientrega.tipoTrayecto",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.tipoTrayecto 1}}",
                    },
                    Num_Alto: {
                      label: "extraParams.servientrega.numAlto",
                      require: true,
                      "#text": "{{safeVal extraParams.servientrega.numAlto 1}}",
                    },
                    Num_Ancho: {
                      label: "extraParams.servientrega.numAncho",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.numAncho 1}}",
                    },
                    Num_Largo: {
                      label: "extraParams.servientrega.numLargo",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.numLargo 1}}",
                    },
                    Num_PesoTotal: {
                      label: "extraParams.servientrega.numPesoTotal",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.numPesoTotal 1}}",
                    },
                    Des_UnidadLongitud: {
                      label: "extraParams.servientrega.desUnidadLongitud",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.desUnidadLongitud 'cm'}}",
                    },
                    Des_UnidadPeso: {
                      label: "extraParams.servientrega.desUnidadPeso",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.desUnidadPeso 'kg'}}",
                    },
                    Nom_UnidadEmpaque: {
                      label: "extraParams.servientrega.nomUnidadEmpaque",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.nomUnidadEmpaque 'GENERICO'}}",
                    },
                    Gen_Cajaporte: {
                      label: "extraParams.servientrega.genCajaporte",
                      require: false,
                      "#text":
                        "{{safeVal extraParams.servientrega.genCajaporte false}}",
                    },
                    Gen_Sobreporte: {
                      label: "extraParams.servientrega.genSobreporte",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.genSobreporte false}}",
                    },
                    Des_DiceContenerSobre: {
                      label: "extraParams.servientrega.desDiceContenerSobre",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.desDiceContenerSobre '?'}}",
                    },
                    Doc_Relacionado: {
                      label: "extraParams.servientrega.docRelacionado",
                      require: false,
                      "#text":
                        "{{safeVal extraParams.servientrega.docRelacionado 'Valor10'}}",
                    },
                    Des_VlrCampoPersonalizado1: {
                      label:
                        "extraParams.servientrega.desVlrCampoPersonalizado1",
                      require: false,
                      "#text":
                        "{{safeVal extraParams.servientrega.desVlrCampoPersonalizado1 'Novedades 3166913218'}}",
                    },
                    Ide_Num_Referencia_Dest: {
                      label: "extraParams.servientrega.ideNumReferenciaDest",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.ideNumReferenciaDest 'Valor12'}}",
                    },
                    Num_Factura: {
                      label: "extraParams.servientrega.numFactura",
                      require: false,
                      "#text":
                        "{{safeVal extraParams.servientrega.numFactura 'valor13'}}",
                    },
                    Ide_Producto: {
                      label: "extraParams.servientrega.ideProducto",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.ideProducto 2}}",
                    },
                    Num_Recaudo: {
                      label: "extraParams.servientrega.numRecaudo",
                      require: false,
                      "#text":
                        "{{safeVal extraParams.servientrega.numRecaudo 0}}",
                    },
                    Ide_Destinatarios: {
                      label: "extraParams.servientrega.ideDestinatarios",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.ideDestinatarios '00000000-0000-0000-0000-000000000000'}}",
                    },
                    Ide_Manifiesto: {
                      label: "extraParams.servientrega.ideManifiesto",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.ideManifiesto '00000000-0000-0000-0000-000000000000'}}",
                    },
                    Num_BolsaSeguridad: {
                      label: "extraParams.servientrega.numBolsaSeguridad",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.numBolsaSeguridad 0}}",
                    },
                    Num_Precinto: {
                      label: "extraParams.servientrega.numPrecinto",
                      require: false,
                      "#text":
                        "{{safeVal extraParams.servientrega.numPrecinto 0}}",
                    },
                    Num_VolumenTotal: {
                      label: "extraParams.servientrega.numVolumenTotal",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.numVolumenTotal 0}}",
                    },
                    Des_DireccionRecogida: {
                      label: "extraParams.servientrega.desDireccionRecogida",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.desDireccionRecogida '?'}}",
                    },
                    Des_TelefonoRecogida: {
                      label: "extraParams.servientrega.desTelefonoRecogida",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.desTelefonoRecogida '?'}}",
                    },
                    Des_CiudadRecogida: {
                      label: "extraParams.servientrega.desCiudadRecogida",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.desCiudadRecogida '?'}}",
                    },
                    Num_PesoFacturado: {
                      label: "extraParams.servientrega.numPesoFacturado",
                      require: false,
                      "#text":
                        "{{safeVal extraParams.servientrega.numPesoFacturado 0}}",
                    },
                    Des_TipoGuia: {
                      label: "extraParams.servientrega.desTipoGuia",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.desTipoGuia 2}}",
                    },
                    Id_ArchivoCargar: {
                      label: "extraParams.servientrega.idArchivoCargar",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.idArchivoCargar 'hc3DC+KSn8oRLa+25qt/5w=='}}",
                    },
                    Des_CiudadOrigen: {
                      label: "extraParams.servientrega.desCiudadOrigen",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.desCiudadOrigen 0}}",
                    },
                    Num_ValorDeclaradoTotal: {
                      label: "extraParams.servientrega.numValorDeclaradoTotal",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.numValorDeclaradoTotal 5000}}",
                    },
                    Num_ValorLiquidado: {
                      label: "extraParams.servientrega.numValorLiquidado",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.numValorLiquidado 0}}",
                    },
                    Num_VlrSobreflete: {
                      label: "extraParams.servientrega.numVlrSobreflete",
                      require: false,
                      "#text":
                        "{{safeVal extraParams.servientrega.numVlrSobreflete 0}}",
                    },
                    Num_VlrFlete: {
                      label: "extraParams.servientrega.numVlrFlete",
                      require: false,
                      "#text":
                        "{{safeVal extraParams.servientrega.numVlrFlete 0}}",
                    },
                    Num_Descuento: {
                      label: "extraParams.servientrega.numDescuento",
                      require: false,
                      "#text":
                        "{{safeVal extraParams.servientrega.numDescuento 0}}",
                    },
                    Num_ValorDeclaradoSobreTotal: {
                      label:
                        "extraParams.servientrega.numValorDeclaradoSobreTotal",
                      require: false,
                      "#text":
                        "{{safeVal extraParams.servientrega.numValorDeclaradoSobreTotal 0}}",
                    },
                    Des_DepartamentoDestino: {
                      label: "extraParams.servientrega.desDepartamentoDestino",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.desDepartamentoDestino '?'}}",
                    },
                    Des_DiceContener: {
                      label: "extraParams.servientrega.desDiceContener",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.desDiceContener 'VARIOS PAPELES'}}",
                    },
                    Ide_Num_Identific_Dest: {
                      label: "extraParams.servientrega.ideNumIdentificDest",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.ideNumIdentificDest 1000100530100}}",
                    },
                    Num_Celular: {
                      label: "extraParams.servientrega.numCelular",
                      require: true,
                      "#text":
                        "{{safeVal extraParams.servientrega.numCelular '?'}}",
                    },
                    Des_DepartamentoOrigen: {
                      label: "extraParams.servientrega.desDepartamentoOrigen",
                      require: false,
                      "#text":
                        "{{safeVal extraParams.servientrega.desDepartamentoOrigen '?'}}",
                    },
                    Num_IdentiRemitente: {
                      label: "extraParams.servientrega.numIdentiRemitente",
                      require: false,
                      "#text":
                        "{{safeVal extraParams.servientrega.numIdentiRemitente '?'}}",
                    },
                    Est_CanalMayorista: {
                      label: "extraParams.servientrega.estCanalMayorista",
                      require: false,
                      "#text":
                        "{{safeVal extraParams.servientrega.estCanalMayorista false}}",
                    },
                    Nom_RemitenteCanal: {
                      label: "extraParams.servientrega.nomRemitenteCanal",
                      require: false,
                      "#text":
                        "{{safeVal extraParams.servientrega.nomRemitenteCanal '?'}}",
                    },
                    Des_IdArchivoOrigen: {
                      label: "extraParams.servientrega.desIdArchivoOrigen",
                      require: false,
                      "#text":
                        "{{safeVal extraParams.servientrega.desIdArchivoOrigen 1000100530100}}",
                    },
                    objEnviosUnidadEmpaqueCargue: {},
                  },
                },
              },
            },
            "tem:arrayGuias": {
              "tem:string": {
                "#text": "{{safeVal extraParams.servientrega.string '?'}}",
              },
            },
          },
        },
      },
    },
  },
};
