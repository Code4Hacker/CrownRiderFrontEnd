import React from 'react';
import "./style.css";
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    const sponsorSheet = () => {
        navigate('/sponsor');
    }
    const applicantSheet = () => {
        navigate('/applicant');
    }
    return (
        <div className="welcome">
            <div className="center-full-control">
                <h1 className='animation__animate animate__animated animate__fadeInUp animate__delay-1s'><span>Powe<span className='highlight'>ring</span> Opportunities</span></h1>
                <h5 className='animation__animate animate__animated animate__fadeInUp animate__delay-2s' style={{
                }}>thanks for your time here we need few things to get your account better choose one type </h5>

                <div className="button-field center">
                    <div className='animation__animate animate__animated animate__fadeInUp animate__delay-3s'>
                        <button className="btn-gradient w-150" onClick={sponsorSheet}>Sponsor</button>
                    </div>
                    <div className='animation__animate animate__animated animate__fadeInUp animate__delay-4s'>
                        <button className="btn-no-bg w-150" onClick={applicantSheet}>Freelancer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;