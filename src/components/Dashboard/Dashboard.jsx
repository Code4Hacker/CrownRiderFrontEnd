import React from 'react';
import "./style.css";
import { freelancer } from '../../assets/crown_img';
import Job from './Jobs/Job';
import "aos/dist/aos.css";
import aos from 'aos';
import NavigationBar from '../NavigationBar/NavigationBar';
import Options from '../SideComponents/ModalFilter/Options';

const Dashboard = () => {
    aos.init();

    return (
        <div className="dashboard background_color">
            <div className="nav">
                <NavigationBar/>
            </div>
            <div className="normal container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="model_profile cnt">
                            <div className="profile">
                                <img src={freelancer} alt='profile' />
                            </div>
                            <div className="bio-de">
                                <p>Gemini Child</p>
                                <span className='comment' style={{
                                    marginTop: "-10px"
                                }}> Web Developer | Graphics </span>

                            </div>
                            <div className="btn button">
                                <button>edit</button>
                            </div>
                        </div>
                        <div className="model_profile">
                            <p className='title'><span className='gradient'>Work Experience</span></p>
                        </div>
                        <div className="model_profile">
                            <p className='title'><span className='gradient'>Skills</span></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="model_profile">
                            <div className="input">
                                <input type="text" placeholder='Search Job ...' className='search_tab' />
                                <button className='btn-gradient'>Search</button>
                            </div>
                        </div>
                        <div className="main">
                            <Job />
                            <Job />
                            <Job />
                            <Job />
                            <Job />
                            <Job />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <Options/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;