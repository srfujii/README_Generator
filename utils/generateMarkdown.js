// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {
    case 'MIT':
      console.log("In render license MIT!");
      return (`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`);
    case 'APACHE 2.0':
      console.log("Apache 2.0!");
      return (`[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)`);
    case 'GPL 3.0':
      console.log("GPL 3.0!!!!!");
      return (`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`);
    case 'BSD 3':
      console.log("BSD 3!!!!");
      return (`[![License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)`);
    case 'None':   
      console.log("No license....wahh wha");
      return ('');
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  // switch (license) {
  //   case 'MIT':
  //     console.log("MIT License Link...");
  //     return()
  // }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(`In generateMarkdown function:
   # ${data.projectname}
   ${renderLicenseBadge(data.license)}`);

  return (`# ${data.projectname}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.projectdesc}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
 
  ## Installation

  To install necessary dependencies, run the following command:

  \`\`\`
  ${data.installcommand}
  \`\`\`

  ## Usage

  ${data.use}

  ## License

  This project is licensed under the ${data.license} license.

  ## Contribute

  ${data.contribute}

  ## Test

  To run tests, run the following command: 

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}/).

`);

}

module.exports = generateMarkdown;
