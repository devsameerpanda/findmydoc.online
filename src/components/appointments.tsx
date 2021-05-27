import React from 'react';
import Appointment from './appointment';
import AppointmentDetails from './appointmentDetails';

import './appointments.css';

const Appointments:React.FC = () => {
    return(
        <div className="appointments">
            <div className="pastVisits">
                <h1 className="sectionHeader">
                    Past Visits
                </h1>
                <div className="pastVisits">
                    <Appointment name="TEST DOC NAME" Speciality = "TEST SPEC" PastVisitDate="26 Nov. 2020" PastVisitTime="11:20AM" Rating="*****"/>
                </div>
            </div>

            <div className="appointmentDetails">
                <AppointmentDetails name="Test DOc"/>
                {/* TODO ADD Name of doc from selected appointment */}
            </div>
        </div>
    )
}

export default Appointments;