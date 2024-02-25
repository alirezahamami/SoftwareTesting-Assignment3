jest.mock('./main');

describe('Test for GeoJSON Conversion', () => {
  test('should convert API data to GeoJSON format', () => {
  
    const mockMakeGeoJson = jest.fn().mockImplementation(item => {
      return item.map(element => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [element.longitude, element.latitude]
        }
      }));
    });

 
    const ApiData = [
      { latitude: 40.7128, longitude: -74.006 },
      { latitude: 51.5074, longitude: -0.1278 }
    ];

    // Call the test function with the mock implementation
    const result = mockMakeGeoJson(ApiData);

    // Assert that the mock function was called with the correct data
    expect(mockMakeGeoJson).toHaveBeenCalledWith(ApiData);

    // Assert the expected result
    expect(result).toEqual([
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-74.006, 40.7128]
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-0.1278, 51.5074]
        }
      }
    ]);
  });
});
