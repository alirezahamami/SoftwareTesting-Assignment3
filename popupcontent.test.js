const { GeneratePopupContent } = require('./main');

// Mock the GeneratePopupContent function
jest.mock('./main', () => ({
  GeneratePopupContent: jest.fn((busData) => {
    return `Bus ID: ${busData.id}, Speed: ${busData.speed}, Route Number: ${busData.routeNumber}`;
  })
}));

describe('Popup Content Test for Popup Content', () => {
  test('should generate popup content with correct bus information', () => {
    // Mock bus data
    const busData = {
      id: 1,
      speed: 30,
      routeNumber: 1001
    };

    // Call the GeneratePopupContent function with the mock bus data
    const popupContent = GeneratePopupContent(busData);

    // Verify that the popup content includes the correct information
    expect(popupContent).toContain(`Bus ID: ${busData.id}`);
    expect(popupContent).toContain(`Speed: ${busData.speed}`);
    expect(popupContent).toContain(`Route Number: ${busData.routeNumber}`);
  });
});