interface Schedule {
  schedule_id: number;
  title: string;
  summary: string;
  user: { nickname: string };
  start_date: string;
  end_date: string;
  duration: number;
  created_at: string;
  destinations: string[][];
  image: string;
  status: string;
  first_destination: string;
  last_destination: string;
  destination_count: number;
}

export type ScheduleCardType = Pick<
  Schedule,
  | 'schedule_id'
  | 'title'
  | 'summary'
  | 'user'
  | 'duration'
  | 'created_at'
  | 'destinations'
  | 'image'
  | 'first_destination'
  | 'last_destination'
  | 'destination_count'
>;

export type MyScheduleCardType = Pick<
  Schedule,
  | 'schedule_id'
  | 'title'
  | 'summary'
  | 'start_date'
  | 'end_date'
  | 'duration'
  | 'created_at'
  | 'destinations'
  | 'image'
  | 'first_destination'
  | 'last_destination'
  | 'destination_count'
>;

export type ScheduleListType = ScheduleCardType[];
export type MyScheduleListType = MyScheduleCardType[];

export type ScheduleCardProps = { schedule: ScheduleCardType; link: string };
export type MyScheduleCardProps = {
  schedule: MyScheduleCardType;
  link: string;
};
