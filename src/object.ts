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
                    "tem:Num_TelefonoRemitente": {
                      "#text": "{{shipper.phoneNumber}}",
                    },
                    "tem:Nom_Remitente": {
                      "#text": "{{shipper.personName}}",
                    },
                    "tem:Des_Telefono": {
                      "#text": "{{recipient.phoneNumber}}",
                    },
                    "tem:Des_Ciudad": {
                      "#text": "{{recipient.city}}",
                    },
                    "tem:Des_Direccion": {
                      "#text": "{{recipient.address1}}",
                    },
                    "tem:Nom_Contacto": {
                      "#text": "{{recipient.personName}}",
                    },
                    "tem:Des_CorreoElectronico": {
                      "#text": "{{recipient.email}}",
                    },
                    "tem:Num_Guia": {
                      "#text": "{{safeVal extraParams.servientrega.numGuia 0}}",
                    },
                    "tem:Num_Sobreporte": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numSobreporte 0}}",
                    },
                    "tem:Num_SobreCajaPorte": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numSobreCajaPorte 0}}",
                    },
                    "tem:Fec_TiempoEntrega": {
                      "#text":
                        "{{safeVal extraParams.servientrega.fecTiempoEntrega 1}}",
                    },
                    "tem:Des_TipoTrayecto": {
                      "#text":
                        "{{safeVal extraParams.servientrega.desTipoTrayecto 1}}",
                    },
                    "tem:Ide_CodFacturacion": {
                      "#text":
                        "{{safeVal extraParams.servientrega.ideCodFacturacion 'SER408'}}",
                    },
                    "tem:Num_Piezas": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numPiezas 1}}",
                    },
                    "tem:Des_FormaPago": {
                      "#text":
                        "{{safeVal extraParams.servientrega.formaPago 2}}",
                    },
                    "tem:Des_MedioTransporte": {
                      "#text":
                        "{{safeVal extraParams.servientrega.medioTransporte 1}}",
                    },
                    "tem:Des_TipoDuracionTrayecto": {
                      "#text":
                        "{{safeVal extraParams.servientrega.tipoDuracionTrayecto 1}}",
                    },
                    "tem:Nom_TipoTrayecto": {
                      "#text":
                        "{{safeVal extraParams.servientrega.tipoTrayecto 1}}",
                    },
                    "tem:Num_Alto": {
                      "#text": "{{safeVal extraParams.servientrega.numAlto 1}}",
                    },
                    "tem:Num_Ancho": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numAncho 1}}",
                    },
                    "tem:Num_Largo": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numLargo 1}}",
                    },
                    "tem:Num_PesoTotal": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numPesoTotal 1}}",
                    },
                    "tem:Des_UnidadLongitud": {
                      "#text":
                        "{{safeVal extraParams.servientrega.desUnidadLongitud 'cm'}}",
                    },
                    "tem:Des_UnidadPeso": {
                      "#text":
                        "{{safeVal extraParams.servientrega.desUnidadPeso 'kg'}}",
                    },
                    "tem:Nom_UnidadEmpaque": {
                      "#text":
                        "{{safeVal extraParams.servientrega.nomUnidadEmpaque 'GENERICO'}}",
                    },
                    "tem:Gen_Cajaporte": {
                      "#text":
                        "{{safeVal extraParams.servientrega.genCajaporte false}}",
                    },
                    "tem:Gen_Sobreporte": {
                      "#text":
                        "{{safeVal extraParams.servientrega.genSobreporte false}}",
                    },
                    "tem:Des_DiceContenerSobre": {
                      "#text":
                        "{{safeVal extraParams.servientrega.desDiceContenerSobre '?'}}",
                    },
                    "tem:Doc_Relacionado": {
                      "#text":
                        "{{safeVal extraParams.servientrega.docRelacionado 'Valor10'}}",
                    },
                    "tem:Des_VlrCampoPersonalizado1": {
                      "#text":
                        "{{safeVal extraParams.servientrega.desVlrCampoPersonalizado1 'Novedades 3166913218'}}",
                    },
                    "tem:Ide_Num_Referencia_Dest": {
                      "#text":
                        "{{safeVal extraParams.servientrega.ideNumReferenciaDest 'Valor12'}}",
                    },
                    "tem:Num_Factura": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numFactura 'valor13'}}",
                    },
                    "tem:Ide_Producto": {
                      "#text":
                        "{{safeVal extraParams.servientrega.ideProducto 2}}",
                    },
                    "tem:Num_Recaudo": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numRecaudo 0}}",
                    },
                    "tem:Ide_Destinatarios": {
                      "#text":
                        "{{safeVal extraParams.servientrega.ideDestinatarios '00000000-0000-0000-0000-000000000000'}}",
                    },
                    "tem:Ide_Manifiesto": {
                      "#text":
                        "{{safeVal extraParams.servientrega.ideManifiesto '00000000-0000-0000-0000-000000000000'}}",
                    },
                    "tem:Num_BolsaSeguridad": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numBolsaSeguridad 0}}",
                    },
                    "tem:Num_Precinto": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numPrecinto 0}}",
                    },
                    "tem:Num_VolumenTotal": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numVolumenTotal 0}}",
                    },
                    "tem:Des_DireccionRecogida": {
                      "#text":
                        "{{safeVal extraParams.servientrega.desDireccionRecogida '?'}}",
                    },
                    "tem:Des_TelefonoRecogida": {
                      "#text":
                        "{{safeVal extraParams.servientrega.desTelefonoRecogida '?'}}",
                    },
                    "tem:Des_CiudadRecogida": {
                      "#text":
                        "{{safeVal extraParams.servientrega.desCiudadRecogida '?'}}",
                    },
                    "tem:Num_PesoFacturado": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numPesoFacturado 0}}",
                    },
                    "tem:Des_TipoGuia": {
                      "#text":
                        "{{safeVal extraParams.servientrega.desTipoGuia 2}}",
                    },
                    "tem:Id_ArchivoCargar": {
                      "#text":
                        "{{safeVal extraParams.servientrega.idArchivoCargar 'hc3DC+KSn8oRLa+25qt/5w=='}}",
                    },
                    "tem:Des_CiudadOrigen": {
                      "#text":
                        "{{safeVal extraParams.servientrega.desCiudadOrigen 0}}",
                    },
                    "tem:Num_ValorDeclaradoTotal": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numValorDeclaradoTotal 5000}}",
                    },
                    "tem:Num_ValorLiquidado": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numValorLiquidado 0}}",
                    },
                    "tem:Num_VlrSobreflete": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numVlrSobreflete 0}}",
                    },
                    "tem:Num_VlrFlete": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numVlrFlete 0}}",
                    },
                    "tem:Num_Descuento": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numDescuento 0}}",
                    },
                    "tem:Num_ValorDeclaradoSobreTotal": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numValorDeclaradoSobreTotal 0}}",
                    },
                    "tem:Des_DepartamentoDestino": {
                      "#text":
                        "{{safeVal extraParams.servientrega.desDepartamentoDestino '?'}}",
                    },
                    "tem:Des_DiceContener": {
                      "#text":
                        "{{safeVal extraParams.servientrega.desDiceContener 'VARIOS PAPELES'}}",
                    },
                    "tem:Ide_Num_Identific_Dest": {
                      "#text":
                        "{{safeVal extraParams.servientrega.ideNumIdentificDest 1000100530100}}",
                    },
                    "tem:Num_Celular": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numCelular '?'}}",
                    },
                    "tem:Des_DepartamentoOrigen": {
                      "#text":
                        "{{safeVal extraParams.servientrega.desDepartamentoOrigen '?'}}",
                    },
                    "tem:Num_IdentiRemitente": {
                      "#text":
                        "{{safeVal extraParams.servientrega.numIdentiRemitente '?'}}",
                    },
                    "tem:Est_CanalMayorista": {
                      "#text":
                        "{{safeVal extraParams.servientrega.estCanalMayorista false}}",
                    },
                    "tem:Nom_RemitenteCanal": {
                      "#text":
                        "{{safeVal extraParams.servientrega.nomRemitenteCanal '?'}}",
                    },
                    "tem:Des_IdArchivoOrigen": {
                      "#text":
                        "{{safeVal extraParams.servientrega.desIdArchivoOrigen 1000100530100}}",
                    },
                    "tem:objEnviosUnidadEmpaqueCargue": {
                      "#text:": "packagesXML packages resources 'SERVIENTREGA'",
                    },
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
