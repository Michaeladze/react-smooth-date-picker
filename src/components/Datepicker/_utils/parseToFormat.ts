import { DateFormat } from '../DatepickerCalendar/datepicker.types';
import { replaceAt } from './common';
import { formatDate } from './formatDate';

export const parseToFormat = (format: DateFormat, defaultValue?: Date | string | number): {
  date: Date,
  string: string
} => {
  const separator = format[2];
  let inputValue = '';

  if (typeof defaultValue === 'string' && defaultValue.length > 0) {
    let newInputValue = defaultValue;

    if (newInputValue[2] !== separator) {
      newInputValue = replaceAt(newInputValue, 2, separator);
    }

    if (newInputValue[5] !== separator) {
      newInputValue = replaceAt(newInputValue, 5, separator);
    }

    inputValue = newInputValue;
  }

  if (typeof defaultValue === 'number') {
    inputValue = formatDate(defaultValue, format);
  }

  if (defaultValue instanceof Date) {
    inputValue = formatDate(defaultValue.getTime(), format);
  }

  const order = format.split(separator);
  let dd, mm, yyyy;

  if (order[0] === 'dd') {
    [dd, mm, yyyy] = inputValue.split(separator);
  } else {
    [mm, dd, yyyy] = inputValue.split(separator);
  }

  const date = new Date(+yyyy, +mm - 1, +dd);

  return {
    date,
    string: inputValue
  };
};
