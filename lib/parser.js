const regexNumber = /\d+/;

function extract(text) {
  const second = extractSecond(text);
  const minute = extractMinuteInSecond(text);
  const hour = extractHourInSecond(text);
  const day = extractDayInSecond(text);
  const month = extractMonthInSecond(text);
  const year = extractYearInSecond(text);
  
  return year + month + hour + day + minute + second;
}

function extractSecond(text) {
  const regex = /(\d*[ ]?(seconds|secondes))/;
  const res = regex.exec(text);

  if (res?.[0]) {
    const value = regexNumber.exec(res[0]);
    return parseInt(value, 0);
  }

  return 0;
}

function extractMinuteInSecond(text) {
  const regex = /(\d*[ ]?(minutes))/;
  const res = regex.exec(text);

  if (res?.[0]) {
    const value = regexNumber.exec(res[0]);
    return value * 60;
  }

  return 0;
}

function extractHourInSecond(text) {
  const regex = /(\d*[ ]?(hours|heures))/;
  const res = regex.exec(text);

  if (res?.[0]) {
    const value = regexNumber.exec(res[0]);
    return value * 3600;
  }

  return 0;
}

function extractDayInSecond(text) {
  const regex = /(\d*[ ]?(days|jours))*/gm;
  const res = regex.exec(text);

  if (res?.[0]) {
    const value = regexNumber.exec(res[0]);
    return value * 24 * 3600;
  }

  return 0;
}

function extractMonthInSecond(text) {
  const regex = /(\d*[ ]?(months|mois))*/gm;
  const res = regex.exec(text);

  if (res?.[0]) {
    const value = regexNumber.exec(res[0]);
    return value * 24 * 3600 * 30;
  }

  return 0;
}

function extractYearInSecond(text) {
  const regex = /(\d*[ ]?(years|ans|années))*/gm;
  const res = regex.exec(text);

  if (res?.[0]) {
    const value = regexNumber.exec(res[0]);
    return value * 365.25 * 24 * 3600;
  }

  return 0;
}

module.exports = { extract };
