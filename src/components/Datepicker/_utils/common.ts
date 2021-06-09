

export const addLeadingZeros = (number: number, length = 2) => {
  return ('0'.repeat(length) + number).slice(-length);
};

export const replaceAt = (str: string, index: number, replacement: string): string => {
  return str.substr(0, index) + replacement + str.substr(index + replacement.length);
};
