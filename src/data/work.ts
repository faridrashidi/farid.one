export type WorkDate =
  | `${number}${number}${number}${number}`
  | `${number}${number}${number}${number}-${number}${number}`;

export type WorkPosition = {
  dateFinish: WorkDate | null;
  dateStart: WorkDate;
  team?: string;
  title: string;
};

export type WorkEntry = {
  company: {
    accentFrom: string;
    accentTo: string;
    href?: string;
    initials: string;
    name: string;
  };
  positions: WorkPosition[];
};

export const work: WorkEntry[] = [];
