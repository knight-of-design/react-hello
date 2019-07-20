require('typescript-require')
require('../app/app.tsx')
test('arrays are equal', t => {
	t.deepEqual([1, 2], [1, 2]);
});
