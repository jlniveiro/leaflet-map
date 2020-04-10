//Si queremos añadir un conjunto de markers al mapa,
//creamos un array de punts y los añadimos posteriomente en un bucle
var puntos = [];
var contentData = [];
//Añadimos los contenidos
//CASTILLA LA-MANCHA
puntos[0] = [39.896933, -4.551254272];
contentData[0] = generateData("Z.R. Valdepusa, S-IV (C.R. Castrej&oacute;n)", "Castilla La-Mancha", "Toledo", "Desestimada");
puntos[1] = [40.12645171, -2.921640393];
contentData[1] = generateData("Barajas de Melo", "Castilla La-Mancha", "Cuenca", "En explotaci&oacute;n");
puntos[2] = [40.12645171, -2.921640393];
contentData[2] = generateData("C.R.Barajas de Melo (Obras complementarias)", "Castilla La-Mancha", "Cuenca", "En explotaci&oacute;n");
puntos[3] = [38.92286185, -1,9179687502];
contentData[3] = generateData("Salobral", "Castilla La-Mancha", "Albacete", "En explotaci&oacute;n");
puntos[13] = [38.93140861, -2.173400879];
contentData[13] = generateData("Balazote Fase I", "Castilla La-Mancha", "Albacete", "En explotaci&oacute;n");

//EXTREMADURA
puntos[4] = [38.87837534, -6.769462585];
contentData[4] = generateData("Talavera La Real", "Extremadura", "Badajoz", "En explotaci&oacute;n");
puntos[5] = [40.13679551, -5.943428039];
contentData[5] = generateData("Torno Fase I", "Extremadura", "Cáceres", "En explotaci&oacute;n");
puntos[6] = [38.95730971, -5.864807129];
contentData[6] = generateData("Zújar Fase I", "Extremadura", "Cáceres", "En explotaci&oacute;n");
puntos[7] = [39.98695557, -6.537204742];
contentData[7] = generateData("MD Río Alagón II,IV,VI,VIII", "Extremadura", "Cáceres", "En explotaci&oacute;n");
puntos[8] = [38.87837534, -6.769462585];
contentData[8] = generateData("Talavera La Real- Complementario", "Extremadura", "Badajoz", "En explotaci&oacute;n");

//ANDALUCIA
puntos[9] = [37.57484978, -5.827932119];
contentData[9] = generateData("Valle Inferior", "Andaluc&iacute;a", "Sevilla", "En explotaci&oacute;n");
puntos[10] = [37.54572907, -5.923719167];
contentData[10] = generateData("Viar Distribución y control", "Andaluc&iacute;a", "Sevilla", "En explotaci&oacute;n");
puntos[11] = [36.68534777, -4.680633306];
contentData[11] = generateData("Acequias del Guadalhorce Fase I", "Andaluc&iacute;a", "M&aacutelaga", "En explotaci&oacute;n");
puntos[12] = [36.80062042, -4.145736456];
contentData[12] = generateData("Plan Guaro", "Andaluc&iacute;a", "M&aacutelaga", "En explotaci&oacute;n");

//ARAGÓN
puntos[14] = [41.49992606, -0.530914522];
contentData[14] = generateData("Pina de Ebro", "Arag&oacute;n", "Zaragoza", "En explotaci&oacute;n");
puntos[15] = [41.80422294, -0.269446082];
contentData[15] = generateData("Orillena Fase III", "Arag&oacute;n", "Huesca", "En explotaci&oacute;n");
puntos[16] = [42.21823881, -1.219169355];
contentData[16] = generateData("Biota", "Arag&oacute;n", "Zaragoza", "En explotaci&oacute;n");
puntos[17] = [41.80671813, 0.26590138];
contentData[17] = generateData("Esplús", "Arag&oacute;n", "Huesca", "En explotaci&oacute;n");
puntos[18] = [41.82119152, 0.331497484];
contentData[18] = generateData("El Puntal", "Arag&oacute;n", "Huesca", "En explotaci&oacute;n");
puntos[19] = [41.84322317, 0.395022922];
contentData[19] = generateData("La Concepción-Tamarite de Litera", "Arag&oacute;n", "Huesca", "En explotaci&oacute;n");
puntos[20] = [42.00886852, -0.425829596];
contentData[20] = generateData("Molinar del Flumen Fase I", "Arag&oacute;n", "Huesca", "En explotaci&oacute;n");
puntos[21] = [41.82795131, 0.026744895];
contentData[21] = generateData("Monte de Pomar", "Arag&oacute;n", "Huesca", "En explotaci&oacute;n");

//GALICIA
puntos[22] = [43.24366967, -7.468440894];
contentData[22] = generateData("Terra Cha", "Galicia", "Lugo", "En explotaci&oacute;n");
puntos[23] = [42.09290754, -7.717119216];
contentData[23] = generateData("Laguna de Antela", "Galicia", "Orense", "En explotaci&oacute;n");

//CASTILLA-LEON
puntos[24] = [41.40209404, -5.237363338];
contentData[24] = generateData("C.R. Vegas de Castronuño", "Castilla y Le&oacute;n", "Valladolid", "En explotaci&oacute;n");

puntos[25] = [41.45911011, -5.100549221];
contentData[25] = generateData("Comunidad de Regantes Canal Pollos", "Castilla y Le&oacute;n", "Valladolid", "En explotaci&oacute;n");

puntos[26] = [41.48726181, -5.641067981];
contentData[26] = generateData("Virgen del Aviso. Fase II", "Castilla y Le&oacute;n", "Zamora", "En explotaci&oacute;n");

puntos[27] = [41.47639487, -5.720976352];
contentData[27] = generateData("San Frontis Fase II", "Castilla y Le&oacute;n", "Zamora", "En explotaci&oacute;n");

puntos[28] = [41.51712043, -4.909425735];
contentData[28] = generateData("Tordesillas Sectores I y II", "Castilla y Le&oacute;n", "Valladolid", "En explotaci&oacute;n");

puntos[29] = [42.36223698, -5.770666961];
contentData[29] = generateData("Canal del Páramo Sector V", "Castilla y Le&oacute;n", "Le&oacute;n", "En explotaci&oacute;n");

puntos[30] = [42.40717441, -5.981923103];
contentData[30] = generateData("Villameca Fase IV", "Castilla y Le&oacute;n", "Le&oacute;n", "En explotaci&oacute;n");

puntos[31] = [42.3164626, -5.62964714];
contentData[31] = generateData("Páramo Bajo Sector I", "Castilla y Le&oacute;n", "Le&oacute;n", "En explotaci&oacute;n");




/*
var puntos = [[40.414043, -3.692191], [40.426111, -3.565],
 [40.354435, -3.535988],[40.334231, -3.767917],[40.416935, -3.703612]
];
*/
//Datos a añadir en el popup

/*
contentData[0] = "<p><strong><a href='https://www.museodelprado.es' target='blank'>Museo del Prado</a></p>";
contentData[1] = "<p><strong>Nombre:</strong><a href='http://coslada.es' target='blank'>Coslada</a></p><p><strong>Poblaci&oacute;n:</strong>81860 habitantes</p>";
contentData[2] = "Rivas Vaciamadrid";
contentData[3] = "Legan&eacute;s";
contentData[4] = "<img src='imagenes/puerta-del-sol.png'/><p>Puerta del Sol</p>";
*/
function generateData(nombre, comunidad, provincia, situacion){
  var content = "<p class='contenido'><strong><a class='titulo' href=''>" + nombre + "</a></strong></p>" +
                "<p class='contenido'><strong>C. Aut&oacute;noma:</strong>" + comunidad + "</p>" +
                "<p class='contenido'><strong>Provincia:</strong>" + provincia + "</p>" +
                "<p class='contenido'><strong>Estado:</strong>" + situacion + "</p>";

  return content;
}
