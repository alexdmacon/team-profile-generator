# team-profile-generator

## Description

This is a Node.js command-line application meant to help the user create an HTML webpage containing information about their (real or hypothetical) software engineering team. It takes user input on individual team members and writes that info to an HTML page.

I developed it primarily to get some more experience with back-end technologies and with unit testing for JavaScript, and to practice working with JavaScript classes. To that end, this app uses several NPM packages, including Inquirer to collect user input, Jest to run tests, and the fs module to write it all down. The HTML was styled using the Bootstrap framework.

[Here's a link to a video demo showing how it works]()

![gif]()

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Download the code off of this GitHub repo. From the command line, initialize npm and install jest, inquirer, fs, and path as dependencies. 

## Usage

From the command line, navigate to downloaded team-profile-generator folder and enter "node index.js" to run the app. Follow the prompts from there. At the time I am writing this README, I have not added validation to check user input, so please be on your best behavior and try to stick to the appropriate format implied by the questions. If I have time later, I will fix this. Anyway, the HTML file will write to the "dist" folder when you're done.

![README screenshot](images/readme-screenshot.png)

## Credits

The following links and documentation proved helpful as I was working on this:
- https://www.npmjs.com/package/inquirer
- https://javascript.info/class-inheritance
- https://jestjs.io/docs/api
- https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file
- https://www.npmjs.com/package/path
- https://techblog.topdesk.com/coding/frontend-testing-with-jest-assertions-deep-dive/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
- https://jestjs.io/docs/expect#tohavereturned
- https://developer.mozilla.org/en-US/docs/Glossary/IIFE
- https://getbootstrap.com/docs/4.0/components/card/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
- https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
- https://www.youtube.com/watch?v=PFmuCDHHpwk


## License

Copyright 2021 ©[alexdmacon](https://github.com/alexdmacon). Shared under the [MIT](https://opensource.org/licenses/MIT) license.

## Contributing

Fork this repo, create a branch, and tinker away. Make a pull request and make this thing better.

## Tests

This repo contains unit tests checking the scripts for the JavaScript Classes used in this app. Enter "npm test" from the command line to see if they're working.

## Questions

Got questions? Just reach out and ask.

- Email: alexdmacon@gmail.com
- GitHub: [alexdmacon](https://github.com/alexdmacon)