import React from 'react';

import Person from '@material-ui/icons/Person';

interface IADProps {
    name: String,
}

const AppointmentDetails:React.FC<IADProps> = (props) => {

    return(
        <div className="appointmentDetails">
            <div className="cardContainer">
                <div className="docProfile">
                    <Person />
                    <h1>{props.name}</h1>
                </div>
            </div>
        </div>
    )
}

export default AppointmentDetails;