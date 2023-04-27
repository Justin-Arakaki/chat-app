module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname,
	},
	plugins: ['@typescript-eslint', 'jest'],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			extends: ['plugin:@typescript-eslint/recommended'],

			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
	],
	rules: {
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		complexity: ['error', 10],
		'no-await-in-loop': 'warn',
		'no-eval': 'error',
		'no-implied-eval': 'error',
		'prefer-promise-reject-errors': 'warn',
		'no-console': [
			'error',
			{
				allow: ['warn', 'error'],
			},
		],
	},
	ignorePatterns: [
		'src/**/*.test.ts',
		'src/frontend/generated/*',
		'vite.config.ts',
		'.eslintrc.cjs',
	],
	env: {
		browser: true,
		'jest/globals': true,
	},
	settings: {
		react: {
			pragma: 'react',
		},
	},
};
