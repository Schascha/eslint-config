'use strict';

module.exports = {
	extends: 'eslint:recommended',
	rules: {
		'object-curly-spacing': ['error', 'never'],
		'one-var': 'error',
		'prefer-const': 'error',
		'quotes': [
			'error',
			'single', {
				'allowTemplateLiterals': true
			}
		],
		'semi': 'error',
		'semi-spacing': 'error',
		'space-before-function-paren': ['error', 'never']
	}
};
