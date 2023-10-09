import React from 'react';
import Wish from './Wish';

const Countdown = ({ countdownData, name }) => {
  if (countdownData.isItBday) {
    return <Wish name={name} />;
  }

  const isCountdownOver =
    countdownData.days < 0 ||
    countdownData.hours < 0 ||
    countdownData.minutes < 0 ||
    countdownData.seconds < 0;

  return (
    <div className='countdown-container'>
      {isCountdownOver ? (
        <Wish name={name} />
      ) : (
        <>
          <p>Stay Tuned Our New Website is </p>
          <h1 className='heading'>COMING SOON!</h1>
          <div className='countdown-wrapper'>
            <div className='countdown-box'>
              {countdownData.days >= 0 ? countdownData.days : '0'}
              <span className='legend'>Days</span>
            </div>
            <div className='countdown-box'>
              {countdownData.hours >= 0 ? countdownData.hours : '0'}
              <span className='legend'>Hours</span>
            </div>
            <div className='countdown-box'>
              {countdownData.minutes >= 0 ? countdownData.minutes : '0'}
              <span className='legend'>Minutes</span>
            </div>
            <div className='countdown-box'>
              {countdownData.seconds >= 0 ? countdownData.seconds : '0'}
              <span className='legend'>Seconds</span>
            </div>
          </div>

        </>
      )}
    </div>
  );
};

export default Countdown;
