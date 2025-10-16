/**
 * VERSIÓN FINAL CON NOMBRES VERIFICADOS Y CORRECCIÓN DE BUGS DE RANGO
 * Actualiza la hoja "Copia de CAMPAÑAS_LEADS" desde "Copia de Resultados Leads" usando "Consecutivo" como clave.
 * Asume que los encabezados están en la fila 1 en ambas hojas.
 */
function actualizarDatosDeCampañas(filaInicio, filaFin) {
  // --- Nombres EXACTOS de las hojas (VERIFICADOS) ---
  const archivo = SpreadsheetApp.openById('1Z3BEq8zOehorBJflnWq3oZoMU2cKx1hbf4KN7oZjaAg');
  const nombreHojaDestino = 'Prueba leads'; 
  const nombreHojaOrigen = "Copia de Resultados Leads"; 

  const hojaDestino = archivo.getSheetByName(nombreHojaDestino);
  const hojaOrigen = archivo.getSheetByName(nombreHojaOrigen);

  // **COMPROBACIÓN CRÍTICA: SI ALGUNA HOJA NO SE ENCUENTRA, DETENERSE.**
  if (!hojaDestino) {
    SpreadsheetApp.getUi().alert(`ERROR CRÍTICO: No se encontró la hoja de destino "${nombreHojaDestino}".`);
    return;
  }
  if (!hojaOrigen) {
    SpreadsheetApp.getUi().alert(`ERROR CRÍTICO: No se encontró la hoja de origen "${nombreHojaOrigen}".`);
    return;
  }

  // --- 1. Leer y procesar datos de Origen ---
  const columnasOrigen = ["Consecutivo", "Arriendo", "Compra Nuevo", "Compra Usado", "Otras"];
  const datosOrigen = hojaOrigen.getDataRange().getValues();
  
  if (datosOrigen.length < 1) {
    SpreadsheetApp.getUi().alert(`Advertencia: La hoja "${nombreHojaOrigen}" está vacía.`);
    return;
  }
  
  const cabecerasOrigen = datosOrigen[0];
  const indicesColumnasOrigen = {};

  for (const columna of columnasOrigen) {
    const index = cabecerasOrigen.indexOf(columna);
    if (index === -1) {
      SpreadsheetApp.getUi().alert(`Error: Falta la columna "${columna}" en la hoja "${nombreHojaOrigen}".`);
      return;
    }
    indicesColumnasOrigen[columna] = index;
  }

  const mapaDatosOrigen = new Map();
  datosOrigen.slice(1).forEach(fila => {
    const consecutivo = fila[indicesColumnasOrigen["Consecutivo"]];
    if (consecutivo) {
      let arriendo = parseFloat(fila[indicesColumnasOrigen["Arriendo"]]) || 0;
      let compraNuevo = parseFloat(fila[indicesColumnasOrigen["Compra Nuevo"]]) || 0;
      let compraUsado = parseFloat(fila[indicesColumnasOrigen["Compra Usado"]]) || 0;
      const otras = parseFloat(fila[indicesColumnasOrigen["Otras"]]) || 0;

      // Lógica de distribución de 'Otras'
      if (otras > 0) {
        if (compraUsado >= arriendo && compraUsado >= compraNuevo) {
          compraUsado += otras;
        } else if (arriendo >= compraUsado && arriendo >= compraNuevo) {
          arriendo += otras;
        } else {
          compraNuevo += otras;
        }
      }

      mapaDatosOrigen.set(consecutivo.toString().trim(), {
        "Arriendo": arriendo,
        "C. Nuevo": compraNuevo,
        "C. Usado": compraUsado
      });
    }
  });

  // --- 2. Actualizar datos en Destino ---
  const columnasDestino = ["consecutivo", "Arriendo", "C. Nuevo", "C. Usado"];
  
  // Rango de la fila 1 para obtener siempre los encabezados
  const cabecerasDestino = hojaDestino.getRange(1, 1, 1, hojaDestino.getLastColumn()).getValues()[0];
  const cabecerasDestinoLower = cabecerasDestino.map(h => h.toString().toLowerCase().trim());

  const indicesColumnasDestino = {};
  for (const columna of columnasDestino) {
    const index = cabecerasDestinoLower.indexOf(columna.toLowerCase().trim());
    if (index === -1) {
      SpreadsheetApp.getUi().alert(`Error: Falta la columna "${columna}" en la hoja "${nombreHojaDestino}". Revisa que el nombre sea exacto.`);
      return;
    }
    indicesColumnasDestino[columna] = index;
  }
  
  // VERIFICACIÓN ADICIONAL PARA EL RANGO DE DATOS
  const numFilas = filaFin - filaInicio + 1;
  const numColumnas = hojaDestino.getLastColumn();
  
  if (numFilas <= 0 || filaInicio > hojaDestino.getLastRow()) {
      SpreadsheetApp.getUi().alert(`Advertencia: El rango de filas (${filaInicio} a ${filaFin}) está fuera de los límites de la hoja o está vacío.`);
      return;
  }
  
  // ESTA ES LA LÍNEA QUE FALLÓ ANTES, AHORA CON LAS COMPROBACIONES HECHAS
  const rangoDestino = hojaDestino.getRange(filaInicio, 1, numFilas, numColumnas);
  const valoresDestino = rangoDestino.getValues();

  let filasActualizadas = 0;
  valoresDestino.forEach(fila => {
    // Es posible que el valor del consecutivo sea una fecha u otro formato. 
    // Lo convertimos a cadena y lo limpiamos para asegurar la coincidencia.
    const consecutivo = fila[indicesColumnasDestino["Consecutivo"]];
    if (consecutivo) {
      const consecutivoString = consecutivo.toString().trim();
      if (mapaDatosOrigen.has(consecutivoString)) {
        const datosCoincidentes = mapaDatosOrigen.get(consecutivoString);
        fila[indicesColumnasDestino["Arriendo"]] = datosCoincidentes["Arriendo"];
        fila[indicesColumnasDestino["C. Nuevo"]] = datosCoincidentes["C. Nuevo"];
        fila[indicesColumnasDestino["C. Usado"]] = datosCoincidentes["C. Usado"];
        filasActualizadas++;
      }
    }
  });

  rangoDestino.setValues(valoresDestino);
  SpreadsheetApp.getUi().alert(`Proceso completado para las filas de la ${filaInicio} a la ${filaFin}. Se actualizaron ${filasActualizadas} filas.`);
}

/**
 * Función para ejecutar la actualización.
 */
function ejecutarActualizacion() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const nombreHoja = "prueba leads";
  const hojaDestino = ss.getSheetByName(nombreHoja);

  if (!hojaDestino) {
      SpreadsheetApp.getUi().alert(`Error: La hoja "${nombreHoja}" no fue encontrada.`);
      return;
  }

  // La actualización comenzará en la fila 2 (después de los encabezados) y terminará en la última fila con datos.
  const filaInicio = 2;
  const filaFin = hojaDestino.getLastRow();
  
  actualizarDatosDeCampañas(filaInicio, filaFin);
}