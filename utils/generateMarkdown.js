// function to generate markdown for README
function generateMarkdown(data) {
  return `# project title: ${data.Title}

  
# Table of contents: ${data.TableOfContents}

# Installation instructions: ${data.Installation}

# Usage instructions: ${data.Usage}

# Liscenses: ${data.Liscenses}

#Git Hub Profile Link ${data.Questions}



`;
}

module.exports = generateMarkdown;

  // ![GitHub license](https://img.shields.io/badge/license-${mit}-blue.svg)