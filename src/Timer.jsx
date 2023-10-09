import React, { useState, useEffect, useRef } from 'react';
import Countdown from './Countdown';
import CountdownModal from './CountdownModal';
import "./Timer.css";
import About from './About';

const Timer = ({ name , day , month  }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date(2023, 10, 30)); 

  const [countdownData, setCountdownData] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    isItBday: false,
  });

  const [email, setEmail] = useState('');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const countdownIntervalRef = useRef(null);

  useEffect(() => {
    
    const updateCountdown = () => {
      const currentDate = new Date();
      const timeRemaining = selectedDate - currentDate;
      const seconds = Math.floor(timeRemaining / 1000) % 60;
      const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
      const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const isItBday = currentDate.getDate() === day && currentDate.getMonth() === month - 1;

      setCountdownData({
        seconds,
        minutes,
        hours,
        days,
        isItBday,
      });
    };

    updateCountdown();

    clearInterval(countdownIntervalRef.current);

    countdownIntervalRef.current = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(countdownIntervalRef.current);
    };
  }, [selectedDate, day, month]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const setCountdown = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const subscribe = () => {
    if (!email || !isValidEmail(email)) {
      setSubscriptionMessage('Please enter a valid email address.');
    } else {
      setSubscriptionMessage(`Thank you for subscribing, ${email}!`);
      setEmail('');
    }
  };

  const isValidEmail = (email) => {
    return email.includes('@');
  };

  return (
<>
        <div className='set-time' data-testid="timer">
         <button onClick={openModal}>Set Countdown Time</button>
      <CountdownModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSetCountdown={setCountdown}
        selectedDate={selectedDate}
      />
      </div>
          <div className='page'>
      <Countdown countdownData={countdownData} name={name} />
      <div className='email-field'>
        <input
        className='email-text'
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={subscribe} className='sub-button'>Subscribe</button>
        <div className="subscription-message">{subscriptionMessage}</div>
        <p className='spam-text'>*Don't Worry We Will Not Spam You :)</p>
      </div>
     
    </div>
     <About />
    </>
  );
};

export default Timer;
