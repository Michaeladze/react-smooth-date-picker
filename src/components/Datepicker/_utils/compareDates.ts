export const isCurrentDay = (d1: Date, d2?: Date): boolean => {
  const d = d2 || new Date();

  return d1.getDate() === d.getDate() &&
    d1.getMonth() === d.getMonth() &&
    d1.getFullYear() === d.getFullYear();
};

export const isCurrentMonth = (d1: Date, d2?: Date): boolean => {
  const d = d2 || new Date();
  return d1.getMonth() === d.getMonth() && d1.getFullYear() === d.getFullYear();
};

export const compareMonths = (d1: Date, d2?: Date): number => {
  const d = d2 || new Date();

  const m1 = d1.getMonth();
  const y1 = d1.getFullYear();

  const m2 = d.getMonth();
  const y2 = d.getFullYear();

  const date1 = new Date(y1, m1);
  const date2 = new Date(y2, m2);

  if (date1.getTime() > date2.getTime()) {
    return 1;
  } else if (date1.getTime() < date2.getTime()) {
    return -1;
  }

  return 0;
};
