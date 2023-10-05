import React from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <div className={css.message_container}>
      <p className={css.message}>{message}</p>
    </div>
  )	
}

Notification.propTypes = {
	message: PropTypes.string,
};