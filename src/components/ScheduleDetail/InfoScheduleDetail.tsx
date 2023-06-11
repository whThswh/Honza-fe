import React from 'react';
import styles from './InfoScheduleDetail.module.scss';
import Avatar from '@mui/material/Avatar';
import { ScheduleDetailInfoType } from '../../types/ScheduleDetailTypes';

function InfoScheduleDetail({
  nickname,
  title,
  summary,
  duration,
  startDate,
  endDate,
  createdAt,
  updatedAt
}: ScheduleDetailInfoType) {
  return (
    <div className={styles.scheduleInfoContainer}>
      <div className={styles.date}>
        <p>작성일: {createdAt.toLocaleDateString('ko-KR')}</p>
        <p>수정일: {updatedAt.toLocaleDateString('ko-KR')}</p>
      </div>
      <div className={styles.duration}>
        {`${startDate.toLocaleDateString(
          'ko-KR'
        )} ~ ${endDate.toLocaleDateString('ko-KR')} (${duration}일)`}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.nickname}>
        <span className={styles.avatar}>
          <Avatar>{nickname[0]}</Avatar>
        </span>
        {nickname}
      </div>
      <p>{summary}</p>
    </div>
  );
}

export default InfoScheduleDetail;
