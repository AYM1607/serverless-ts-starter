import * as handler from '../handler';

test('hello', async () => {
  const callback = (_, response) => {
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe("string");
  };

  await handler.hello(null, null, callback);
});