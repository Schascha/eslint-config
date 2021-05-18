'use strict';

module.exports = {
	extends: 'eslint:recommended',
	rules: {
		'keyword-spacing': 'error',
		'no-multi-spaces': [
			'error',
			{
				'ignoreEOLComments': true
			}
		],
		'object-curly-spacing': ['error', 'never'],
		'one-var': 'error',
		'prefer-const': 'error',
		'quotes': [
			'error',
			'single',
			{
				'allowTemplateLiterals': true
			}
		],
		'semi': 'error',
		'semi-spacing': 'error',
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', 'never']
	}
};
