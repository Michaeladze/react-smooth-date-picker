export type IDatepickerPeriod = 'prev' | 'current' | 'next';

export type IDatepickerPeriodType = 'day' | 'month' | 'year';

export type DateLocale = string;

export interface IDatepickerActivePeriod {
  month: number;
  year: number;
  days: IDatepickerDay[];
}

export interface IDatepickerDay {
  period: IDatepickerPeriod;
  date: Date;
}

export type IDatepickerStack = [Date | undefined, Date | undefined];

export interface IDateVariants {
  date: {
    from: Date;
    to: Date;
    value: Date;
  };
  timestamp: {
    from: number;
    to: number;
    value: number;
  }
  value: string;
}

export type DateFormat = 'dd.mm.yyyy' | 'dd/mm/yyyy' | 'mm/dd/yyyy' | 'mm.dd.yyyy';

export type WeekDay = '0' | '1' | '2' | '3' | '4' | '5' | '6';
