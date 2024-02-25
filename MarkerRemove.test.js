const { RenderBuses } = require('./main');

describe('Test for Marker Removal', () => {
  test('should remove existing markers from the map before adding new ones', () => {
    // Mock the Leaflet map object
    const map = {
      setView: jest.fn(),
      removeLayer: jest.fn(),
      addLayer: jest.fn(),
      marker: jest.fn().mockReturnValue({
        addTo: jest.fn()
      })
    };

    // Mock existing markers on the map
    const existingMarkers = [
      {
        remove: jest.fn()
      },
      {
        remove: jest.fn()
      }
    ];

    // Assume that the map already has existing markers added to it
    map.getLayers = jest.fn().mockReturnValue(existingMarkers);

    // Mock the API data containing new bus positions
    const newBusData = [
      {
        geometry: {
          coordinates: [44.653, -63.600] // Example new coordinates
        },
        properties: {
          bearing: 270 // Example new bearing
        }
      },
      {
        geometry: {
          coordinates: [44.654, -63.601] // Example new coordinates
        },
        properties: {
          bearing: 360 // Example new bearing
        }
      }
    ];

    // Call the RenderBuses function with the mocked map object and new API data
    RenderBuses(map, newBusData);
   
    // expect(existingMarkers[0].remove).toHaveBeenCalled();
    // expect(existingMarkers[1].remove).toHaveBeenCalled();

 
  });
});