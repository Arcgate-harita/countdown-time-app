import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CountdownModal.css";

const CountdownModal = ({ isOpen, onClose, onSetCountdown, selectedDateProp }) => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(selectedDateProp || currentDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSetCountdown = () => {
    onSetCountdown(selectedDate);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-content">
        <h2>Set Countdown Date</h2>
        <div className="date-picker-box">
          <i className="calendar-icon far fa-calendar-alt"></i>
          <DatePicker
            className="date-input"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            minDate={currentDate}
          />
        </div>
        <button onClick={handleSetCountdown}>Set Countdown</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default CountdownModal;
