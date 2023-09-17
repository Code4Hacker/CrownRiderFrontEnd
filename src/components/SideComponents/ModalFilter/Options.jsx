import React from 'react'

const Options = () => {
    return (
        <div>
            <div className="model_profile cnt">
                <h4>Job Filter</h4>
            </div>
            <div className="model_profile">
                <p className='titl'><span className='gradients'>Location</span></p>
                <div className="input">
                    <input type="text" name="" id="" placeholder='Find by location ...' style={{
                        padding: "5px !important",
                        height: "40px"
                    }} />
                </div>
            </div>
            <div className="model_profile">
                <p className='titl'><span className='gradients'>Experience</span></p>
                <div className="row">
                    <div className="col-xl-12 flex-div">
                        <span><input type="checkbox" name="" id="" /></span><span> Junior</span>
                    </div>
                    <div className="col-xl-12 flex-div">
                        <span><input type="checkbox" name="" id="" /></span><span> Intermedial</span>
                    </div>
                    <div className="col-xl-12 flex-div">
                        <span><input type="checkbox" name="" id="" /></span><span> Senior</span>
                    </div>

                </div>
            </div>
            <div className="model_profile">
                <p className='titl'><span className='gradients'>Job Type</span></p>
                <div className="row">
                    <div className="col-xl-12 flex-div">
                        <span><input type="checkbox" name="" id="" style={{
                            border: "none !important"
                        }} /></span><span> Full Time</span>
                    </div>
                    <div className="col-xl-12 flex-div">
                        <span><input type="checkbox" name="" id="" /></span><span> Part Time</span>
                    </div>
                    <div className="col-xl-12 flex-div">
                        <span><input type="checkbox" name="" id="" /></span><span> Remote</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Options;