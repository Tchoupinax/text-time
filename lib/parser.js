const regexNumber = /\d+/;

function detectIfDateIsWanted(text) {
  const regex = /dans/;
  const res = regex.exec(text);

  if (res === null) {
    return false;
  }

  if (res?.[0]) {
    regexNumber.exec(res[0]);
    return 'future';
  }
}

function extract(text) {
  const { v: second, text: textSecond } = extractSecond(text);
  const { v: minute, text: textMinute } = extractMinuteInSecond(textSecond);
  const { v: hour, text: textHour } = extractHourInSecond(textMinute);
  const { v: day, text: textDay } = extractDayInSecond(textHour);
  const { v: month, text: textMonth } = extractMonthInSecond(textDay);
  const { v: year } = extractYearInSecond(textMonth);

  // console.log('-------------');
  // console.log('second', second);
  // console.log('minute', minute);
  // console.log('hour', hour);
  // console.log('day', day);
  // console.log('month', month);
  // console.log('year', year);

  return year + month + hour + day + minute + second;
}

function extractSecond(text) {
  const regex = /\d* (seconds|secondes)/gm;
  const res = text.match(regex);

  if (res?.[0]) {
    const value = regexNumber.exec(res[0]);
    const newText = text.replace(res[0], '');

    return { text: newText, v: parseInt(value, 0) };
  }

  return { text, v: 0 };
}

function extractMinuteInSecond(text) {
  const regex = /\d* (minutes)/gm;
  const res = text.match(regex);

  if (res?.[0]) {
    const value = regexNumber.exec(res[0]);
    const newText = text.replace(res[0], '');

    return { text: newText, v: value * 60 };
  }

  return { text, v: 0 };
}

function extractHourInSecond(text) {
  const regex = /\d* (hours|heures)/gm;
  const res = text.match(regex);

  if (res?.[0]) {
    const value = regexNumber.exec(res[0]);
    const newText = text.replace(res[0], '');

    return { text: newText , v: value * 3600 };
  }

  return { text, v: 0 };
}

function extractDayInSecond(text) {
  const regex = /\d* (days|jour|jours)/gm;
  const res = text.match(regex);

  if (res?.[0]) {
    const value = regexNumber.exec(res[0]);
    const newText = text.replace(res[0], '');

    return { text: newText, v: value * 3600 * 24 };
  }

  return { text, v: 0 };
}

function extractMonthInSecond(text) {
  const regex = /\d* (months|mois)/gm;
  const res = text.match(regex);

  if (res?.[0]) {
    const value = regexNumber.exec(res[0]);
    const newText = text.replace(res[0], '');

    return { text: newText, v: value * 3600 * 24 * 30 };
  }

  return { text, v: 0 };
}

function extractYearInSecond(text) {
  const regex = /\d* (years|ans|années)/gm;
  const res = text.match(regex);

  if (res?.[0]) {
    const value = regexNumber.exec(res[0]);
    const newText = text.replace(res[0], '');

    return { text: newText, v: value * 365.25 * 24 * 3600 };
  }

  return { text, v: 0 };
}

module.exports = { detectIfDateIsWanted, extract };
