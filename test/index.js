
'use strict';

const
	{ESLint} = require('eslint'),
	baseConfig = require('../')
;

(async function main() {
	const
		eslint = new ESLint({
			baseConfig: {
				...baseConfig,
				env: {
					node: true,
					es6: true
				},
				parserOptions: {
					ecmaVersion: 2018
				}
			},
			useEslintrc: false,
		}),
		results = await eslint.lintFiles(['**/*.js']),
		formatter = await eslint.loadFormatter('stylish'),
		resultText = formatter.format(results)
	;

	console.log(resultText);
})().catch((error) => {
	process.exitCode = 1;
	console.error(error);
});
