// Function renderLicenseBadge returns a license badge and linked image based on which license is passed in.
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return (`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`);
    case 'APACHE 2.0':
      return (`[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)`);
    case 'GPL 3.0':
      return (`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`);
    case 'BSD 3':
      return (`[![License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)`);
    case 'None':   
      return ('');
  }
}

// Function renderLicenseLink returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return (`[MIT](https://opensource.org/licenses/MIT)`);
    case 'APACHE 2.0':
      return (`[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`);
    case 'GPL 3.0':
      return (`[GPL v3](https://www.gnu.org/licenses/gpl-3.0)`);
    case 'BSD 3':
      return (`[BSD 3](https://opensource.org/licenses/BSD-3-Clause)`);
    case 'None':   
      return ('');
  }
}

// Function renderLicenseSection returns the license section of the README file
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  if (license) {
    return (`${renderLicenseBadge(license)} This project is licensed under the ${renderLicenseLink(license)} license.`);
  } else {
    return ("");
  }
}

// Function generateMarkdown generates and returns the markdown for the README.md file
function generateMarkdown({projectname, license, projectdesc, installcommand, use, contribute, test, email, username}) {

  return (`# ${projectname}
  ${renderLicenseBadge(license)}

  ## Description

  ${projectdesc}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribute](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)
 
  ## Installation

  To install necessary dependencies, run the following command:

  \`\`\`
  ${installcommand}
  \`\`\`

  ## Usage

  ${use}

  ## License

  ${renderLicenseSection(license)}

  ## Contribute

  ${contribute}

  ## Tests

  To run tests, run the following command: 

  \`\`\`
  ${test}
  \`\`\`

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${username}](https://github.com/${username}/).

`);
}

// Export our generateMarkdown function for use in index.js
module.exports = generateMarkdown;
