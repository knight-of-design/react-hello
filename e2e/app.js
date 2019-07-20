import { Selector } from 'testcafe'; // first import testcafe selectors
const url = process.env.E2E_URL || 'http://localhost:8080';

fixture(`Landing Page`).page(url);

test('Main Message', async t => {
  const body = Selector('body').textContent;
    await t
      .expect(body).contains('Hello World!');
});
