const { extract } = require('./parser');

class TextTime {
  constructor({ output } = { output: 'seconds' }) {
    this.output = output;

    return this.parse.bind(this);
  }

  parse(text) {
    const seconds = extract(text);

    switch (this.output) {
    case 'ms': case 'millisecond': case 'milliseconds': case 'milliseconde': case 'millisecondes':
      return seconds * 1000;
    case 'minutes':
      return seconds / 60;
    case 'hour': case 'hours': case 'heure': case 'heures':
      return seconds / 60 / 60;
    case 'day': case 'days': case 'jour': case 'jours': case 'journée': case 'journées':
      return seconds / 60 / 60 / 24;
    case 'year': case 'years': case 'an': case 'ans': case 'année': case 'années':
      return seconds / 60 / 60 / 24 / 30 / 12;
    default: 
      return seconds;
    }
  }
}

module.exports = TextTime;
