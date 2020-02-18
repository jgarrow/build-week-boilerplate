# Lambda School Build Week Boilerplate -- create-react-app with redux

```
npx create-react-app PROJECT-NAME --template cra-template-build-week-template
```

This is a create-react-app boilerplate for build week projects at Lambda School.

This particular boilerplate comes with redux already set up. The store and Provider have been set up in `App.js`, with redux-thunk being used as some middleware to help with handling asynchronous activity like API calls. Some very basic file structures have been set up for the reducers and actions to help get you started.

This template also comes with dependencies like prettier, eslint, husky, and lint-staged to make the team collaboration smoother by helping to keep code structure consistent and help prevent some poor code from being committed and pushed into production.

You can add the following to your `package.json` in your project directory to customize your husky and lint-staged dependencies:

```json
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
"lint-staged": {
    "*.js": [
        "eslint"
    ],
    "*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx)": [
        "prettier --write",
        "jest --findRelatedTests",
        "git add"
    ]
}
```

With this setup, when you run a `git commit` command, husky runs lint-staged. In our lint-staged, we've told it to run our eslint rules on all `.js` files. Then run prettier on all of the listed file types to make sure they're all consistently formatted. Then run all of our tests that are related to the files being committed with jest. Finally, if a file is changed, due to formatting from prettier or something else in this process, we do `git add` again to make sure that those changes are staged and ready to be committed. If these scripts pass, then all of the files will actually be committed.

[husky docs](https://github.com/typicode/husky#readme)
[lint-staged docs](https://github.com/okonet/lint-staged#readme)
