const { RenderBuses } = require('./main');

describe('Test for Marker Rendering', () => {
  test('should render bus markers on the map', () => {
    // Mock the Leaflet map object
    const map = {
      setView: jest.fn(),
      removeLayer: jest.fn(),
      addLayer: jest.fn(),
      marker: jest.fn().mockReturnValue({
        addTo: jest.fn()
      })
    };

    // Mock the API data containing bus positions with the expected structure
    const mockBusData = [
      {
        geometry: {
          coordinates: [44.651, -63.598] // Example coordinates
        },
        properties: {
          bearing: 90 // Example bearing
        }
      },
      {
        geometry: {
          coordinates: [44.652, -63.599] // Example coordinates
        },
        properties: {
          bearing: 180 // Example bearing
        }
      }
    ];

    // Call the RenderBuses function with the mocked map object and API data
    RenderBuses(map, mockBusData);

  });
});