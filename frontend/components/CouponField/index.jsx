import React from 'react';
import config from './../../config';
import style from './styles';

/**
 * The Coupon Field component.
 * @return {JSX}
 */
const CouponField = () => {
  const noticeText = config.notice;

  if (noticeText === '') {
    return null;
  }

  return (
    <div className={style.noticeText}>{noticeText}</div>
  );
};

export default CouponField;
