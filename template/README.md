A create-react-app template designed for Lambda School Build Week projects.

```
npx create-react-app PROJECT-NAME --template cra-template-build-week-template
```

# Lambda School Build Week Boilerplate -- create-react-app with redux

This is a create-react-app boilerplate for build week projects at Lambda School.

This particular template comes with redux already set up. The store and Provider have been set up in `App.js`, with redux-thunk being used as some middleware to help with handling asynchronous activity like API calls. Some very basic file structures have been set up for the reducers and actions to help get you started.

In the `utils` folder, an `axiosWithAuth` file has been created, with some basic structure set up for the headers and baseURL for `axios`. It also utilizes `localStorage` to store an authorization token. This token can be received from a server via a POST request when the correct credentials are provided in the `body` of the request. Then in your components, wherever you need to use `axios` that requires authorization, import `axiosWithAuth` and invoke the function in place of where you would put `axios`. Change or even delete the file as needed.

```javascript
import { axiosWithAuth } from "../utils/axiosWithAuth";

...

axiosWithAuth()
  .post("/login", user)
  .then(res => {
      localStorage.setItem("token", res.data.payload);
      props.history.push("/URL PATH YOU WANT TO LOGIN TO HERE");
  })
  .catch(err => {
      localStorage.removeItem("token");
      console.log("Invalid login: ", err);
  });
```

In the `components` folder, a `PrivateRoute` component has been created. When you use this component, the syntax is the same as a normal `Route` component where you provide the `path` and the component to be rendered. The `PrivateRoute` checks to see if you have stored a `token` in localStorage. This assumes that you are also using the provided `axiosWithAuth` that receives a `token` and stores it in localStorage.

Formik and Yup have also been added as dependencies for your convenience to use for creating your forms and adding form validation. Styled-components have been included as well. It is a common styling tool for Build Week projects at Lambda School since it is more widely known by students.

This template also comes with dependencies like [prettier](https://github.com/prettier/prettier), [eslint](https://github.com/eslint/eslint), [husky](https://github.com/typicode/husky#readme), and [lint-staged](https://github.com/okonet/lint-staged#readme) to make the team collaboration smoother by helping to keep code structure consistent and help prevent some poor code from being committed and pushed into production. Unfortunately, `create-react-app` doesn’t support devDependencies, so you have to manually put them as devDependencies after your project is bootstrapped.

Specifically, [Kent C. Dodd's eslint config](https://github.com/kentcdodds/eslint-config-kentcdodds) has been used with this template. To customize any of the rules, edit the `.eslintrc` file to override Kent's rules.

A default formatting for prettier has been provided. To make changes, edit the `.prettierrc` file.

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
