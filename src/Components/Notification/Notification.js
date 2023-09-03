import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import './Notification.css'

const Notification = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  const handleStorageChange = (e) => {
      const storedDoctorData = JSON.parse(localStorage.getItem("doctorData"));
      if (storedDoctorData) {
        setDoctorData(storedDoctorData);
      }

      const storedAppointmentData = JSON.parse(
        localStorage.getItem("appointmentData")
      );
      if (storedAppointmentData) {
        setAppointmentData(storedAppointmentData);
      }
  };

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("email");

    // Daftarkan event listener untuk mendengarkan perubahan di localStorage
    window.addEventListener("storage", handleStorageChange);

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    // Bersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  
  console.log(isLoggedIn)
  console.log(appointmentData)

  return (
    <Popup open={isLoggedIn && appointmentData} position='bottom right' modal>
      <div className="appointment-card" style={{height: "80vh"}}>
        <div className="appointment-card__content">
          <h3 className="appointment-card__title">Appointment Details</h3>
          <p className="appointment-card__message">
            <strong>Doctor:</strong> {doctorData?.name}
          </p>
          <p className="appointment-card__message">
            <strong>Speciality:</strong> {doctorData?.speciality}
          </p>
          <p className="appointment-card__message">
            <strong>Name:</strong> {appointmentData?.name}
          </p>
          <p className="appointment-card__message">
            <strong>Phone Number:</strong> {appointmentData?.phoneNumber}
          </p>
          <p className="appointment-card__message">
            <strong>Date of Appointment:</strong> {appointmentData?.date}
          </p>
          <p className="appointment-card__message">
            <strong>Time Slot:</strong> {appointmentData?.selectedSlot}
          </p>
        </div>
      </div>
    </Popup>
  );
};

export default Notification;