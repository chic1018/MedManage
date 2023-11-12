module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        indent: [2, 4, { SwitchCase: 1 }],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        semi: [2, 'always'], // 语句强制分号结尾
        'no-extra-semi': 2, // 禁止多余的冒号
        'no-multi-spaces': 1, // 不能用多余的空格
        'space-before-function-paren': 0
    }
};
