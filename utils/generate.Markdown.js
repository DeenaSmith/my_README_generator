

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {
    if(license === 'Apache') {
        return `![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    }
    if(license === 'MIT') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)` 
    }
    if(license === 'Mozilla') {
        return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
    }
    if(license === 'ISC') {
        return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
    }

    if(license === 'NA') {
        return `NA`
    }
 }



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `

# ${data.title}

## License ${renderLicense(data.license)}

https://github.com/${data.username}/${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contribution)
* [Tests](#testing)
* [Questions](#questions)


## Installation
These dependencies are required to run this application: ${data.installation}

## Usage
To use this app, ${data.usage}

## Contribution
The contributing guidelines are ${data.contribution}

## Tests
To test this app, ${data.testing}

## License
${data.license}

## Questions
My Github username is ${data.username} and my email address is ${data.email}
`;
};



// const fileUtils = {
//     generateMarkdown, renderLicense
// }

//module.exports = renderLicense;
module.exports = generateMarkdown