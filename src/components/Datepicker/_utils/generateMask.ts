import { DateFormat } from './datepicker.types';

type GM = (string | RegExp)[];

export const generateMask = (
  inputValue: string,
  format: DateFormat,
  range: boolean,
  showDayOfWeek: boolean,
  dayOfWeek: string[]
): GM => {
  let mask, fromMask, toMask;
  const separator = format[2];
  const order = format.split(separator);

  const dayFirst = order[0] === 'dd';

  const dd = [/[0-3]/, inputValue[dayFirst ? 0 : 3] === '3' ? /[0,1]/ : inputValue[dayFirst ? 0 : 3] === '0' ? /[1-9]/ : /[0-9]/];

  const mm = [/[0,1]/, inputValue[dayFirst ? 3 : 0] === '0' ? /[1-9]/ : /[0-2]/];

  const yyyy = [
    /[1,2]/,
    /\d/,
    /\d/,
    /\d/
  ];

  const ddTo = [/[0-3]/, inputValue[dayFirst ? 13 : 16] === '3' ? /[0,1]/ : inputValue[dayFirst ? 13 : 16] === '0' ? /[1-9]/ : /[0-9]/];

  const mmTo = [/[0,1]/, inputValue[dayFirst ? 16 : 13] === '0' ? /[1-9]/ : /[0-2]/, ];

  const first = dayFirst ? dd : mm;
  const second = dayFirst ? mm : dd;

  const firstTo = dayFirst ? ddTo : mmTo;
  const secondTo = dayFirst ? mmTo : ddTo;

  if (range) {
    const defaultFromMask = [
      ...first,
      separator,
      ...second,
      separator,
      ...yyyy
    ];

    const defaultToMask = [
      ...firstTo,
      separator,
      ...secondTo,
      separator,
      ...yyyy
    ];

    fromMask = defaultFromMask;
    toMask = defaultToMask;

    if (showDayOfWeek) {

      if (dayOfWeek[0]) {
        fromMask.push(' ');

        for (let i = 0; i < dayOfWeek[0].length; i++) {
          fromMask.push(dayOfWeek[0][i]);
        }

      } else {
        fromMask = defaultFromMask;
      }

      if (dayOfWeek[1]) {
        toMask.push(' ');

        for (let i = 0; i < dayOfWeek[1].length; i++) {
          toMask.push(dayOfWeek[1][i]);
        }
      } else {
        toMask = defaultToMask;
      }
    }

    mask = [
      ...fromMask,
      ' ',
      '-',
      ' ',
      ...toMask,
    ];

  } else {
    const defaultMask = [
      ...first,
      separator,
      ...second,
      separator,
      ...yyyy
    ];

    mask = defaultMask;

    if (showDayOfWeek) {
      if (dayOfWeek[0]) {
        mask.push(' ');

        for (let i = 0; i < dayOfWeek[0].length; i++) {
          mask.push(dayOfWeek[0][i]);
        }
      } else {
        mask = defaultMask;
      }
    }
  }

  return mask;
};
