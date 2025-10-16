/**
 * VERSIÓN FINAL DEL PROYECTO
 * Actualiza "Campañas Leads" desde "Resultados Leads" usando una columna "Consecutivo" como clave.
 * IMPORTANTE: Requiere que la hoja "Resultados Leads" tenga una columna llamada "Consecutivo".
 */
function actualizarDatosDeCampañas(filaInicio, filaFin) {
  // --- Nombres de las hojas de tu proyecto ---
  const nombreHojaDestino = "Campañas Leads";
  const nombreHojaOrigen = "Resultados Leads";

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const hojaDestino = ss.getSheetByName(nombreHojaDestino);
  const hojaOrigen = ss.getSheetByName(nombreHojaOrigen);

  if (!hojaDestino || !hojaOrigen) {
    SpreadsheetApp.getUi().alert(`Asegúrate de que existan las hojas "${nombreHojaDestino}" y "${nombreHojaOrigen}".`);
    return;
  }

  // --- 1. Leer y procesar datos de "Resultados Leads" ---
  const columnasOrigen = ["Consecutivo", "Arriendo", "Compra Nuevo", "Compra Usado", "Otras"];
  const datosOrigen = hojaOrigen.getDataRange().getValues();
  const cabecerasOrigen = datosOrigen[0];
  const indicesColumnasOrigen = {};

  for (const columna of columnasOrigen) {
    const index = cabecerasOrigen.indexOf(columna);
    if (index === -1) {
      SpreadsheetApp.getUi().alert(`Error: Falta la columna "${columna}" en la hoja "${nombreHojaOrigen}". Revisa el nombre.`);
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

  // --- 2. Actualizar datos en "Campañas Leads" ---
  const columnasDestino = ["consecutivo", "Arriendo", "C. Nuevo", "C. Usado"];
  const rangoDestino = hojaDestino.getRange(filaInicio, 1, filaFin - filaInicio + 1, hojaDestino.getLastColumn());
  const valoresDestino = rangoDestino.getValues();
  const cabecerasDestino = hojaDestino.getRange(1, 1, 1, hojaDestino.getLastColumn()).getValues()[0];
  
  // Normaliza los encabezados de destino a minúsculas para evitar errores de mayúsculas/minúsculas
  const cabecerasDestinoLower = cabecerasDestino.map(h => h.toLowerCase());

  const indicesColumnasDestino = {};
  columnasDestino.forEach(columna => {
    // Busca el índice en los encabezados en minúsculas
    indicesColumnasDestino[columna] = cabecerasDestinoLower.indexOf(columna);
  });
  
  let filasActualizadas = 0;
  valoresDestino.forEach(fila => {
    const consecutivo = fila[indicesColumnasDestino["consecutivo"]];
    if (consecutivo && mapaDatosOrigen.has(consecutivo.toString().trim())) {
      const datosCoincidentes = mapaDatosOrigen.get(consecutivo.toString().trim());
      fila[indicesColumnasDestino["Arriendo"]] = datosCoincidentes["Arriendo"];
      fila[indicesColumnasDestino["C. Nuevo"]] = datosCoincidentes["C. Nuevo"];
      fila[indicesColumnasDestino["C. Usado"]] = datosCoincidentes["C. Usado"];
      filasActualizadas++;
    }
  });

  rangoDestino.setValues(valoresDestino);
  SpreadsheetApp.getUi().alert(`Proceso completado para las filas de la ${filaInicio} a la ${filaFin}. Se actualizaron ${filasActualizadas} filas.`);
}

/**
 * Función para ejecutar la actualización.
 * Aquí defines el rango de filas a procesar en tu hoja "Campañas Leads".
 */
function ejecutarActualizacion() {
  // ▼▼▼ AJUSTA EL RANGO DE FILAS AQUÍ ▼▼▼
  
  const filaInicio = 1787;   // La primera fila con datos que quieres actualizar.
  const filaFin = 1874;  // La última fila que quieres actualizar.

  // ▲▲▲ NO MODIFIQUES NADA MÁS ABAJO ▲▲▲
  
  actualizarDatosDeCampañas(filaInicio, filaFin);
}