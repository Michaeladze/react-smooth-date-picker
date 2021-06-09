import { DateFormat } from '../DatepickerCalendar/datepicker.types';
import { formatDate } from './formatDate';

export const stringToDate = (s: string, format: DateFormat): Date => {
  const d = new Date();

  if (!s) {
    return d;
  }

  const separator = format[2];
  const formatToday = formatDate(d.getTime(), format).split(separator);

  const order = format.split(separator);
  let dd, mm, yyyy;
  const dayFirst = order[0] === 'dd';

  if (dayFirst) {
    [dd, mm, yyyy] = s.slice(0, 10).split(separator);
  } else {
    [mm, dd, yyyy] = s.slice(0, 10).split(separator);
  }

  dd = dd.includes('_') ? formatToday[dayFirst ? 0 : 1] : dd;
  mm = mm.includes('_') ? formatToday[dayFirst ? 1 : 0] : mm;
  yyyy = yyyy.includes('_') ? formatToday[2] : yyyy;
  return new Date(+yyyy, +mm - 1, +dd);
};
