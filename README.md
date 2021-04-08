## Home assignment 1 ##

### Setting up development environment ###
You need to download project template from Github.
https://github.com/kaareltinn/fp-js-starter

On the command line:
```bash
git clone https://github.com/kaareltinn/fp-js-starter
```
After that create your own repo in Github and change cloned repository origin.
```bash
cd fp-js-starter
git remote set-url origin <your_repo_git_url>
```

### Running application

```bash
# Install dependencies
yarn
# Build application files
yarn build
# Run webpack dev server
yarn start
```
Open you browser on localhost:9000. You should see web page with text
```
Welcome to FP JS Starter Application!
Godspeed!
```
Opening browser console you should see there is "3" printed on the console.

### Running tests
There is `add` function defined (`src/assignments/week1/index.js`) and simple unit test (`src/assignments/week1/index.test.js`).
To run the tests:
```bash
yarn test # add --watch flag to keep them running and react on file changes
```
Running those tests should report back that all tests passed.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwMTA1MjQzMDVdfQ==
-->