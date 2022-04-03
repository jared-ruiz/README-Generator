// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === `None`) {
    return '';
  }
  else {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === `None`) {
    return '';
  }
  else {
    return `[Link to ${license} license]: https://opensource.org/licenses/${license}`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === `None`) {
    return '';
  }
  else {
    return `
    ## License Information
    ${renderLicenseBadge(data.license)}
    ${renderLicenseLink(data.license)}

  `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ## ${data.description}
    ${renderLicenseSection}
`;
}

module.exports = generateMarkdown;
