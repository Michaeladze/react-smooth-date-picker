import { DateFormat } from './datepicker.types';
import { addLeadingZeros } from './common';

export const formatDate = (date: string | number | undefined, format: DateFormat): string => {
  if (!date) {
    date = Date.now();
  }

  const tempDate = new Date(date);
  const month = addLeadingZeros(tempDate.getMonth() + 1);

  const dayOfMonth = addLeadingZeros(tempDate.getDate());
  const year = tempDate.getFullYear();

  const separator = format[2];
  const order = format.split(separator);

  let dateString = '';

  if (order[0] === 'dd') {
    dateString = `${dayOfMonth}${separator}${month}${separator}${year}`;
  } else {
    dateString = `${month}${separator}${dayOfMonth}${separator}${year}`;
  }

  return dateString;
};
