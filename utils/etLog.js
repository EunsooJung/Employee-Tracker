const CFonts = require('cfonts');

function displayHeadline(str) {
  let headline = '------------------------------    ';
  headline += str.toUpperCase();
  headline += '    ------------------------------';
  CFonts.say(headline, {
    font: 'console', // font face
    align: 'left', // text alignment
    colors: ['blueBright'], // all colors
    background: 'transparent', // background color, you can also use `backgroundColor` here as key
    letterSpacing: 1, // letter spacing
    lineHeight: 1, // line height
    space: true, // if the output text should have empty lines on top and on the bottom
    maxLength: '0' // how many character can be on one line
  });

  return headline;
}

function displayResults(result) {
  CFonts.say(`${result.toUpperCase()}\n`, {
    font: 'console', // font face
    align: 'left', // define text alignment
    colors: ['blueBright'], // define all colors
    background: 'transparent', // background color, you can also use `backgroundColor` here as key
    letterSpacing: 1, // define letter spacing
    lineHeight: 1, // line height
    space: false, // define if the output text should have empty lines on top and on the bottom
    maxLength: '0' // define how many character can be on one line
  });
}

function displayFooter(headline) {
  const length = headline.length;
  let footer = '';
  for (let i = 0; i < length; i++) {
    footer += '-';
  }
  CFonts.say(footer, {
    font: 'console', // define the font face
    align: 'left', // define text alignment
    colors: ['blueBright'], // define all colors
    background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 1, // define letter spacing
    lineHeight: 1, // define the line height
    space: false, // define if the output text should have empty lines on top and on the bottom
    maxLength: '0' // define how many character can be on one line
  });
}

module.exports = {
  displayHeadline,
  displayFooter,
  displayResults
};
