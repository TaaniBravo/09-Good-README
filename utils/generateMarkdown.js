// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${data.license}

## Questions
If you have any questions or concerns pertaining the project and the code please reach out to:
Github: ${data.github}
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
