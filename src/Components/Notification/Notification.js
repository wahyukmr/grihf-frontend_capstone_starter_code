import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";

const Notification = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    // const storedUsername = sessionStorage.getItem("email");
    const storedDoctorData = JSON.parse(localStorage.getItem("doctorData"));
    const storedAppointmentData = JSON.parse(
      localStorage.getItem(storedDoctorData?.user)
    );

    if (storedUsername) {
      setIsLoggedIn(true);
    //   setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []);

  console.log(appointmentData)

  return (
    <Popup open={isLoggedIn && appointmentData} >
      {isLoggedIn && appointmentData && (
        <>
          <div className="appointment-card">
            <div className="appointment-card__content">
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                <strong>Doctor:</strong> {doctorData?.name}
              </p>
            </div>
          </div>
        </>
      )}
    </Popup>
  );
};

export default Notification;
