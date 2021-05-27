import React from 'react';

import Person from '@material-ui/icons/Person';

interface IAProps{
    name: String,
    Speciality: String,
    PastVisitDate?: String,
    PastVisitTime?: String,
    Rating?: String
}

const Appointment:React.FC<IAProps> = (props) => {

    return(
        <div className="appointment">
            <div className="cardContainer">
                <div className="doctorName doctorDetails">
                    <Person />
                    <h1>{props.name}</h1>
                </div>
                <div className="doctorSpeciality doctorDetails">
                    <h1>Speciality</h1>
                    <p>{props.Speciality}</p>
                </div>
                <div className="appointmentDetails doctorDetails">
                    <div className="date">
                        <h1>Date</h1>
                        <p>{props.PastVisitDate}</p>
                    </div>
                    <div className="time">
                        <h1>Time</h1>
                        <p>{props.PastVisitTime}</p>
                    </div>
                </div>
                <div className="rating doctorDetails">
                    <h1>Ratings</h1>
                    {props.Rating}
                </div>
            </div>
        </div>
    )
}

export default Appointment;