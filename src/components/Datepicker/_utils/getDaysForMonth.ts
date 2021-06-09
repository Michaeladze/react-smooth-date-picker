import { IDatepickerActivePeriod } from '../DatepickerCalendar/datepicker.types';

export const getDaysForMonth = (d?: Date): IDatepickerActivePeriod => {
  const date = d || new Date();

  const result: IDatepickerActivePeriod = {
    month: date.getMonth(),
    year: date.getFullYear(),
    days: []
  };

  const daysInCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const weekDayOfFirstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const weekDayOfLastDay = new Date(date.getFullYear(), date.getMonth(), daysInCurrentMonth).getDay();

  if (weekDayOfFirstDay !== 1) {
    let daysFromPrevMonth = weekDayOfFirstDay - 2;

    if (daysFromPrevMonth < 0) {
      daysFromPrevMonth = 7 - Math.abs(daysFromPrevMonth);
    }

    let lastDayInPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    for (let i = daysFromPrevMonth; i >= 0; i--) {
      result.days[i] = {
        period: 'prev',
        date: new Date(date.getFullYear(), date.getMonth() - 1, lastDayInPrevMonth)
      };
      lastDayInPrevMonth--;
    }
  }

  for (let i = 1; i <= daysInCurrentMonth; i++) {
    result.days.push({
      period: 'current',
      date: new Date(date.getFullYear(), date.getMonth(), i)
    });
  }

  if (weekDayOfLastDay !== 0) {
    const daysFromNextMonth = 7 - weekDayOfLastDay;

    for (let i = 1; i <= daysFromNextMonth; i++) {
      result.days.push({
        period: 'next',
        date: new Date(date.getFullYear(), date.getMonth() + 1, i)
      });
    }
  }

  return result;
};
