// import { MyScheduleCardType } from './ScheduleTypes';

export type ModalMyScheduleType = {
  schedule_id: number;
  title: string;
  summary: string;
  start_date: string;
  end_date: string;
  created_at: string;
  destinations: string[][];
};

export type MyScheduleListType = ModalMyScheduleType[];

export type ModalScheduleCardType = {
  schedule: ModalMyScheduleType;
  index: number;
  isSelected: boolean;
  onShowDestinations: (index: number) => void;
  // onCloseDestinations: () => void;
};

export type AddToScheduleModalType = {
  destinations: string[];
  onDestinationUpdate: (updatedDestination: string[]) => void;
};
