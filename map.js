$( document ).ready(function() {


    var urlcapaBase = "http://www.ign.es/wmts/ign-base?request=getTile&layer=IGNBaseTodo&TileMatrixSet=GoogleMapsCompatible&TileMatrix={z}&TileCol={x}&TileRow={y}&format=image/jpeg";
    var urlcapaSatelite = "http://www.ign.es/wmts/pnoa-ma?request=getTile&layer=OI.OrthoimageCoverage&TileMatrixSet=GoogleMapsCompatible&TileMatrix={z}&TileCol={x}&TileRow={y}&format=image/jpeg";

    // http://a.tile.openstreetmap.org/{z}/{x}/{y}.png
    // Z: Nivel de zoom
    // X: Longitud
    // Y: Latitud
    // a.tile.openstreetmap.org : Servidor de tiles
    /*
    L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; OpenStreetMap contributors'
    }).addTo(map);
    */

    //Mapa Base del asignamos
    //http://www.ign.es/wmts/ign-base
    var capaBase = L.tileLayer(urlcapaBase, {
        attribution: 'Mapa base IGN',
        maxZoom: 20
    });

    var capaSatelite=L.tileLayer(urlcapaSatelite, {
        attribution: 'Vista satélite',
        maxZoom: 20
     });

     //Con centro en Mercamadrid
     var map = L.map('map', {layers:[capaBase],
                             center:[40.359958, -3.661802],
                             zoom: 6});

     //creación del mapa map_canvas es el id de la capa donde queremos crear el mapa
     /*
    map=L.map('map_canvas',{
       layers:[capamapa]
       }).setView([40.359958, -3.661802], 6);
    */
    map.attributionControl.addAttribution("Seisa - IGN");

    //añadimos las capas de tiles al mapa para poder seleccionarlas

    var baseMaps={
        "Mapa":capaBase,
        "Satelite":capaSatelite
    };
    L.control.layers(baseMaps).addTo(map);


    //40.416935, -3.703612  Puerta del Sol
    //var marker = L.marker([40.416935, -3.703612]).addTo(map);

    var townIcon = L.icon({
      iconUrl: 'imagenes/icono_verde24.png',
      iconRetinaUrl: 'imagenes/icono_verde24.png',
      iconSize: [15,15],
      iconAnchor: [9,18],
      popupAnchor: [0, -15]
    });

    var arrayPuntos = [];
    var arrayCirculos = [];
    var shelterMarkers = new L.FeatureGroup();
    var markers = L.markerClusterGroup();



    var ubicaciones = ["Museo del Prado", "Coslada", "Rivas Vaciamadrid", "Legan&eacute;s", "Puerta del Sol"];

    //Añadimos los puntos al mapa
    for (var p=0; p<puntos.length ; p++){
      arrayPuntos[p] = L.marker(puntos[p], {icon: townIcon});
      //Creamos un popup para el punto.
      var popup = L.popup({
        minWidth: 100,
        maxWidth: 300
      }).setContent(contentData[p]);
      //El popup creado se lo asignamos al MARKER
      arrayPuntos[p].bindPopup(popup);
      //Para cada MARKER, lo rodemos con un círculo
    //arrayCirculos = new L.circle(puntos[p], 500).addTo(map);
      //Ibcorporamos un evento (de prueba)
      arrayPuntos[p].on('mouseover', function(e){
        document.getElementById('name').innerHTML = ubicaciones[p];
        document.getElementById('coordinates').innerHTML = 'Latitud: ' + e.latlng['lat'] +
           ', Longitud: ' + e.latlng['lng'];
      });


      //Añadimos el punto al grupo de Puntos
    //  shelterMarkers.addLayer(arrayPuntos[p]);
      markers.addLayer(arrayPuntos[p]);
    }

    //Añadimos la capa de Cluster de Puntos
    //map.addLayer(markers);


    map.on('zoomend', function() {
        if (map.getZoom() <7){
            map.removeLayer(markers);
        }
        else {
            map.addLayer(markers);
        }
    });


    function mostrarMarkers(){

      for (var m=0; m < arrayPuntos.length; m++){
        var punto = arrayPuntos[m];
        punto.addTo(map);
      }
    }


    function centerLeafletMapOnMarkers() {
      var latLngs = [];
      for (var a=0; a < arrayPuntos.length; a++){
        latLngs[a] = [ arrayPuntos[a].getLatLng() ];
      }
      var markerBounds = L.latLngBounds(latLngs);
      map.fitBounds(markerBounds);
    }

  //  $( document ).ready(function() {
//        console.log( "ready!" );
//    });



    //Creamos un polilinea para unir los Puntos
    //var polyline = new L.polyline(puntos,{
    //  color: 'red',
    //  weight: 5
    //}).addTo(map);

    //Creamos un poligono para unir los Puntos
    /*
    var polygon = new L.polygon(puntos,{
      color: '#14CCCC',
      weight: 5,
      fill: true
    }).addTo(map);
    */

    //Creamos un ciculo para un marker determinado
    //var circulo = new L.circle([40.426111, -3.565], 500).addTo(map);



    // var geoActuaciones
    //popup
    function popup (feature, layer){
      layer.bindPopup(feature.properties.NOMBRE);
    }



    $.getJSON("http://localhost:3000/comunidades_regantes.geojson",  function (data)  {
        // GeoJSON from API Rest
        let geoActuaciones = L.geoJson(null, {});
        geoActuaciones.addData(data);
        geoActuaciones.eachLayer(function (layer) {
             layer.bindPopup("<p class='contenido'><strong>Nombre:</strong> " + layer.feature.properties.NOMBRE + "<p>" +
                    "<p class='contenido'><strong>Autonom&iacute;a:</strong> " + layer.feature.properties.AUTONOMIA + "<p>" +
                    "<p class='contenido'><strong>Provincia:</strong> " + layer.feature.properties.PROVINCIA + "<p>" +
                    "<p class='contenido'><strong>Regantes:</strong> " + layer.feature.properties.REGANTES + "<p>");
        });
        /*
        geoActuaciones.bindPopup(function (layer) {
            return "<p class='contenido'><strong>Nombre:</strong> " + layer.feature.properties.NOMBRE + "<p>" +
                   "<p class='contenido'><strong>Autonom&iacute;a:</strong> " + layer.feature.properties.AUTONOMIA + "<p>" +
                   "<p class='contenido'><strong>Provincia:</strong> " + layer.feature.properties.PROVINCIA + "<p>" +
                  "<p class='contenido'><strong>Regantes:</strong> " + layer.feature.properties.REGANTES + "<p>";
        })
        */
        geoActuaciones.addTo(map);
        //Cargamos el control de búsqueda
        var searchControl = new L.Control.Search({
        		layer: geoActuaciones,
        		propertyName: "NOMBRE",
        		marker: false,
        		moveToLocation: function(latlng, title, map) {
        			//map.fitBounds( latlng.layer.getBounds() );
        			var zoom = map.getBoundsZoom(latlng.layer.getBounds());
          			map.setView(latlng, zoom); // access the zoom
        		}
        	});

        	searchControl.on('search:locationfound', function(e) {

        		//console.log('search:locationfound', );

        		//map.removeLayer(this._markerSearch)

        		e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
        		if(e.layer._popup){
        			e.layer.openPopup();
            }


        	}).on('search:collapsed', function(e) {

        		geoActuaciones.eachLayer(function(layer) {	//restore feature color
        			geoActuaciones.resetStyle(layer);
        		});
        	});

        	map.addControl( searchControl );  //inizialize search control
      });

      //Hacemos ZOOM en el mapa para los puntos obtenidos
      centerLeafletMapOnMarkers();

    //geoActuaciones.addTo(map);
    /*
    var searchControl = new L.Control.Search({
    		layer: geoActuaciones,
    		propertyName: 'NOMBRE',
    		marker: false,
    		moveToLocation: function(latlng, title, map) {
    			//map.fitBounds( latlng.layer.getBounds() );
    			var zoom = map.getBoundsZoom(latlng.layer.getBounds());
      			map.setView(latlng, zoom); // access the zoom
    		}
    	});

    	searchControl.on('search:locationfound', function(e) {

    		//console.log('search:locationfound', );

    		//map.removeLayer(this._markerSearch)

    		e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
    		if(e.layer._popup)
    			e.layer.openPopup();

    	}).on('search:collapsed', function(e) {

    		geoActuaciones.eachLayer(function(layer) {	//restore feature color
    			geoActuaciones.resetStyle(layer);
    		});
    	});

    	map.addControl( searchControl );  //inizialize search control

    */






    //Buscador
    /*
    var searchControl = new L.Control.Search({
           layer: poiLayers,
           propertyName: 'NOMBRE',
           circleLocation: false
    });

    map.addControl(searchControl);
    */

    //L.geoJSON(geoActuaciones,{onEachFeature: popup}).addTo(map);
    //L.geoJSON(geoActuaciones).addTo(map);
    /*
    L.geoJSON(geoActuaciones).bindPopup(function (layer) {
        return "<p class='contenido'><strong>Nombre:</strong> " + layer.feature.properties.NOMBRE + "<p>" +
               "<p class='contenido'><strong>Autonom&iacute;a:</strong> " + layer.feature.properties.AUTONOMIA + "<p>" +
               "<p class='contenido'><strong>Provincia:</strong> " + layer.feature.properties.PROVINCIA + "<p>" +
              "<p class='contenido'><strong>Regantes:</strong> " + layer.feature.properties.REGANTES + "<p>";
    }).addTo(map);
    */
  });
