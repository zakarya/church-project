module.exports = {
  parser: 'babel-eslint',
  extends: "airbnb",
  rules: {
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
      'react/prefer-stateless-function': 'off',
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: false,
            object: false,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
  },
};