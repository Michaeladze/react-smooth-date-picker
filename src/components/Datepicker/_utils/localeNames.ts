import { DateLocale, WeekDay } from './datepicker.types';
import { replaceAt } from './common';

/** Locale month name */
export const getMonthLocale = (month: number, locale: DateLocale, length: 'short' | 'long' = 'long'): string => {
  const date = new Date(2000, month, 1);
  return date.toLocaleString(locale, { month: length });
};

/** Locale months list */
export const getMonthsList = (locale: DateLocale, length: 'short' | 'long' = 'long'): string[] => {
  const months: string[] = [];

  for (let i = 0; i < 12; i++) {
    months.push(getMonthLocale(i, locale, length));
  }

  return months;
};

/** Locale day of the week */
export const getWeekdayLocale = (date: Date, locale: DateLocale, length: 'short' | 'long' = 'long'): string => {
  const weekday = date.toLocaleString(locale, { weekday: length });
  return replaceAt(weekday, 0, weekday[0].toUpperCase());
};

/** Locale list of weekdays */
export const getWeekdaysList = (locale: DateLocale, length: 'short' | 'long' = 'short', weekStartsFrom: WeekDay = '1'): string[] => {
  const weekdayDateMap: Date[] = [
    new Date('2020-01-05'),
    new Date('2020-01-06'),
    new Date('2020-01-07'),
    new Date('2020-01-08'),
    new Date('2020-01-09'),
    new Date('2020-01-10'),
    new Date('2020-01-11'),
  ];

  const shiftedWeekdayDateMap: Date[] = [];
  let i: number = +weekStartsFrom;

  while (shiftedWeekdayDateMap.length !== 7) {
    if (i >= weekdayDateMap.length) {
      i = 0;
    }

    shiftedWeekdayDateMap.push(weekdayDateMap[i]);
    i++;
  }

  return shiftedWeekdayDateMap.map((date: Date) => getWeekdayLocale(date, locale, length));
};
