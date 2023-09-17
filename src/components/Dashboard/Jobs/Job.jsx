import React from 'react';
import { freelancer } from '../../../assets/crown_img';
import "aos/dist/aos.css";
import aos from 'aos';

const Job = () => {
    aos.init({
        duration:1000
    });
    return (
        <div className="model_profile">
            <div className="col-xl-12">
                <div className="row">
                    <div className="col-1">
                        <div className="profile" style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "10px",
                            boxShadow: "none"
                        }}>
                            <img src={freelancer} alt="" style={{
                                borderRadius: "10px"
                            }} />
                        </div>
                    </div>
                    <div className="col-6 mrg-10-top" style={{
                        marginLeft: "20px"
                    }}>
                        <h5 style={
                            {
                                marginBottom: "-5px"
                            }
                        }>UX/UI DESIGNER</h5>
                        <span className='gray'>Generation for the Future</span>
                    </div>
                    <div className="col-4 saving">
                        <button><i className="bi bi-bookmark-fill"></i> Save Job</button>
                    </div>
                </div>
            </div>
            <div className="col-xl-12" style={{
                paddingLeft: "25px",
                paddingRight: "25px"
            }}>
                <p className='gray'>We require and Provide such a good dealing in data we require and Provide such a good dealing in data mining we require and Provide such a good dealing in  mining </p>
            </div>
            <div className="col-xl-12">
                <div className="flex saving s2">
                    <button><i className="bi bi-hourglass-bottom"></i> Full Time</button>
                    <button><i className="bi bi-hourglass"></i> Remote</button>
                    <button><i className="bi bi-hourglass-split"></i> Part Time</button>
                </div>
            </div>
            <div className="col-xl-12">
                <div className="container">
                    <div className="row">
                        <div className="col-4 mrg-10-top">
                        <i className="bi bi-wallet"></i> 12K
                        </div>
                        <div className="col-4 mrg-10-top">
                            <span><i className="bi bi-person-fill-add"></i> 67</span><span className="gray"> People Applied</span>
                        </div>
                        <div className="col-4 saving">
                            <button className=' btn-apply'><i className="bi bi-award"></i> Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Job;