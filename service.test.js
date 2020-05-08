const { getPokemonData } = require('./service');
const { makeApiCall: mockApiCallMock } = require('./api-call');

jest.mock('./api-call');

test(`getPokemonData`, async () => {
  const mockPokemons = [
    {
      id: 5,
      name: 'Pikachu',
    },
  ];

  mockApiCallMock.mockImplementationOnce(() => Promise.resolve(mockPokemons));

  const result = await getPokemonData();
  expect(result).toMatchInlineSnapshot(`
    Object {
      "data": Array [
        Object {
          "id": 5,
          "name": "Pikachu",
        },
      ],
    }
  `);
});
