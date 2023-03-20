// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function createLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function createLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function createLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function createMarkdown(data) {
  return `# ${data.title}
  ${createLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  ${createLicenseLink(data.license)}
  * [Contributions](#contributions)
  
  * [Tests](#tests)
  
  * [Contact](#contact)
  
  ## Installation
  
  Run the following command to install dependencies for this project:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  ${createLicenseSection(data.license)}
    
  ## Contributions
  
  ${data.contributing}
  
  ## Tests
  
  Run the following command to run tests for this project:
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  ## Contact
  
  For any questions about the repo or any other inquiries, you can contact me at ${
      data.email
    }. You can also find me on Github: [${data.github}](https://github.com/${
      data.github
    }/).
`;
}

module.exports = createMarkdown;
