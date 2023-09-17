import React from 'react'
import { freelancer } from '../../assets/crown_img'; 

const NavigationBar = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <div className="logo">
                            <span className='gradient'>CROWN</span><span>RIDER</span>
                        </div>
                    </div>
                    <div className="col-6" style={{
                        marginTop:'-10px'
                    }}>
                        <ul className='flex list center'>
                            <li className='active'><i className="bi bi-search"></i> Find Job</li>
                            <li><i className="bi bi-buildings"></i> Companies</li>
                            <li><i className="bi bi-bookmarks"></i> Saved</li>
                        </ul>
                    </div>
                    <div className="col-4" style={{
                        alignItems: "end"
                    }}>
                        <div className="row">
                            <div className="col-1">
                                <div className="profile" style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50px",
                                    boxShadow: "none",
                                    margin: "5px"
                                }}>
                                    <img src={freelancer} alt="" style={{
                                        borderRadius: "10px"
                                    }} />
                                </div>
                            </div>
                            <div className="col-10 mrg-10-top" style={{
                                marginLeft: "20px",
                                fontSize: "small"
                            }}>
                                <h5 style={
                                    {
                                        marginBottom: "-5px",
                                        fontSize: "small"
                                    }
                                }>GEMINI CHILD</h5>
                                <span className='gray'>gemini@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavigationBar;