import React from 'react';
import Person from '@material-ui/icons/Person';

// import './dashboard.css';

const Dashboard:React.FC = () => {
    return(
        <div className="dashboard">
            <section className="info">
                <h1 className="sectionHeader">Your Details</h1>
                <div className="cardContainer">
                    <div className="cardProfile">
                        <Person />
                        <h1 className="profileName">Your Name</h1>  
                    </div>
                    <div className="flexContainer">
                        <div className="detailsAge">
                            <h1 className="detailsHeader">Age</h1>
                            <h1 className="details">56</h1>
                        </div>
                        <div className="detailsGender">
                            <h1 className="detailsHeader">Gender</h1>
                            <h1 className="details">Male</h1>
                        </div>
                    </div>
                    <div className="flexContainer">
                        <div className="detailsBP">
                            <h1 className="detailsHeader">BP</h1>
                            <h1 className="details">180/90</h1>
                        </div>
                        <div className="detailsBG">
                            <h1 className="detailsHeader">Blood Glucose</h1>
                            <h1 className="details">120</h1>
                        </div>
                    </div>
                    <div className="buttonGrp">
                        <button className="primary showMoreBtn">Show More</button>
                    </div>
                </div>
                <h1 className="sectionHeader">Last Appointment</h1>
                <div className="cardContainer">
                    <div className="cardProfile">
                        <Person />
                        <h1 className="profileName">Doctors Name</h1>
                    </div>
                    <div className="flexContainer">
                        <div className="detailsSpeciality">
                            <h1 className="detailsHeader">Speciality</h1>
                            <h1 className="details">General Medicine</h1>
                        </div>
                    </div>
                    <div className="flexContainer">
                        <div className="detailsLastDate">
                            <h1 className="detailsHeader">Date</h1>
                            <h1 className="details">26 Nov 2020</h1>
                        </div>
                        <div className="detailsLastTime">
                            <h1 className="detailsHeader">Time</h1>
                            <h1 className="details">11:00 PM</h1>
                        </div>
                    </div>
                    <div className="buttonGrp">
                        <button className="primary">Rate</button>
                    </div>
                </div>
            </section>
            <main>
                <h1 className="sectionHeader">Your Doctors</h1>
                <section className="yourDoctors">
                    <div className="cardContainer">
                        <h1>Test</h1>
                    </div>
                </section>
                <section className="healthCurve">
                    <div className="cardContainer">
                        <h1 className="sectionHeader">Health Curve</h1>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Dashboard;