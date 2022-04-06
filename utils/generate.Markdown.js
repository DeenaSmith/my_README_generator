// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `

# ${data.title}
https://github.com/${data.username}/${data.title}
# Description
${data.description}
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contribution)
* [Tests](#testing)

# Installation
These dependencies are required to run this application: 
# Usage
To use this app, ${data.usage}
# Contribution
The contributing guidelines are ${data.contribution}
# Tests
To test this app, ${data.testing}
`;
};



// const fileUtils = {
//     generateMarkdown, renderLicenseSection
// }

//module.exports = fileUtils;
module.exports = generateMarkdown