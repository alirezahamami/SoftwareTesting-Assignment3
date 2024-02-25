async function GetBusDataFromAPI(map) { 
    const Response = await fetch('https://prog2700.onrender.com/hrmbuses');
    const JsonResponse = await Response.json();
    const AllBusData = JsonResponse.entity;
    const FilteredData = AllBusData.filter((item) => item.vehicle.trip.routeId <10000);
    const GeoJson = MakeGeoJson(FilteredData)
    RenderBuses(map, GeoJson)
}

const RenderBuses = (map, input) => {
    input.forEach( item => {
        const coordinates = item.geometry.coordinates;
        const rotations = item.properties.bearing;
        // L.marker(coordinates, {icon: busIcon, rotationAngle: rotations}).addTo(map);
        // You can customize the marker with additional properties if needed
        // For example, you can use feature.properties to set popup content
        // if (item.properties) {
        //   L.marker(coordinates).bindPopup(`<p>Bus ID: ${item.properties.id}<p>
        //   <p>Route Number:  ${item.properties.route}</p> 
        //   <p>Speed: ${item.properties.speed !== undefined ? parseFloat(item.properties.speed).toFixed(2)+' km/h' : 'Not Available'}</p>`).addTo(map);
        // }
      })
}

const MakeGeoJson = (item) => {
  return item.map((element) => {
    return {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [element.vehicle.position.latitude, element.vehicle.position.longitude]
      },
      "properties": {
        "speed": element.vehicle.position.speed ,
        "id": element.id,
        "route": element.vehicle.trip.routeId,
        "bearing":  element.vehicle.position.bearing
      }
    }
  })
}

module.exports = { GetBusDataFromAPI,MakeGeoJson,RenderBuses };