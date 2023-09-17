import React, { useState } from 'react';
import "./style.css";
import { freelancer } from '../../../assets/crown_img';
import countries from "../../../assets/countries/countries.json";
const Sponsor = () => {
    const [next, setNext] = useState(true);
    const [images, setImages] = useState("");
    const [preview, setPreview] = useState("");
    const [profile, setProfile ] = useState("");
    const uploaderCredential = () => {
        document.getElementById("credential").click();
    }

    const handleProfile = (e) => {
        let file = e.target.files[0];


        let reader = new FileReader();
        reader.onloadstart = function () {
            console.log("starting ...");
        }
        reader.onloadend = function () {
            console.log("end ...");
        }
        reader.onerror = function () {
            console.log("Error ...");
        }
        reader.onload = function () {
            setPreview(this.result);
            setProfile(e.target.files[0]);
        }
        reader.readAsDataURL(file);

    }
    const { country } = countries;
    return (
        <div className="sponsor glamor-bg">
            <div className="black-bg">
                <div className="containe">
                    <div className={`row ${next === true ? 'show' : 'hide'}`}>
                        <div className="col-md-5 valid-bx">
                            <div className="container">
                                <div className="profile animation__animate animate__animated animate__fadeInUp animate__delay-2s">
                                    <img src={preview && preview?.length > 1 ? preview : freelancer} alt="" className='relative' />
                                </div>
                                <div className="title">
                                    <h1 style={{
                                        textTransform: 'capitalize',
                                        fontSize: 'x-large',
                                        textAlign: 'center',
                                        marginTop: '20px'
                                    }} className='animation__animate animate__animated animate__fadeInUp animate__delay-3s'>Powering Opportunities</h1>
                                    <h5 style={{ color: "var(--comment-2)" }} className='animation__animate animate__animated animate__fadeInUp animate__delay-4s'>YOUR INFORMATION </h5>
                                </div>
                                <div className="row">
                                    <div className="col-6 animation__animate animate__animated animate__fadeInUp animate__delay-5s">
                                        <input type="text" placeholder='First' name='initial_name' />
                                    </div>
                                    <div className="col-6 animation__animate animate__animated animate__fadeInUp animate__delay-5s">
                                        <input type="text" placeholder='Middle' name='intermedial_name' />
                                    </div>
                                    <div className="col-12 animation__animate animate__animated animate__fadeInUp animate__delay-5s">
                                        <input type="text" placeholder='Last or Surname' name='final_name' />
                                    </div>
                                    <div className="col-4 animation__animate animate__animated animate__fadeInUp animate__delay-5s">
                                        <select name="sex_gnd" id="">
                                            <option value="S">Select Sex</option>
                                            <option value="M">Male</option>
                                            <option value="F">Female</option>
                                        </select>
                                    </div>
                                    <div className="col-8 animation__animate animate__animated animate__fadeInUp animate__delay-5s">
                                        <select name="nationality" id="">
                                            {
                                                country && country !== undefined && country?.length > 0 ? country.map((country, i) => <option value={country.name} key={i}>{country.name}</option>) : 'Wait a bit'
                                            }
                                        </select>
                                    </div>

                                    <div className="center animation__animate animate__animated animate__fadeInUp animate__delay-5s">
                                        <button className="btn-gradient w-150" onClick={() => setNext(false)}>Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`row ${next === false ? 'show' : 'hide'}`}>
                        <div className="col-md-5 valid-bx">
                            <div className="container">
                                <div className="title">
                                    <h1 style={{
                                        textTransform: 'capitalize',
                                        fontSize: 'x-large',
                                        textAlign: 'center',
                                        marginTop: '20px'
                                    }} className='animation__animate animate__animated animate__fadeInUp animate__delay-1s'>Give Opportunities</h1>
                                    <h5 style={{ color: "var(--comment-2)" }} className='animation__animate animate__animated animate__fadeInUp animate__delay-2s'>Company Information </h5>
                                </div>
                                <div className="row">
                                    <div className="col-6 animation__animate animate__animated animate__fadeInUp animate__delay-3s">
                                        <input type="text" placeholder='Company Name' />
                                    </div>
                                    <div className="col-6 animation__animate animate__animated animate__fadeInUp animate__delay-3s">
                                        <select name="sex_gnd" id="">
                                            <option value="S">Company Type eg. Private / Public</option>
                                            <option value="PVT">Private</option>
                                            <option value="PUB">Public</option>
                                        </select>
                                    </div>
                                    <div className="col-12 animation__animate animate__animated animate__fadeInUp animate__delay-3s">
                                        <input type="text" placeholder='Company Location' />
                                    </div>
                                    <div className="col-4 animation__animate animate__animated animate__fadeInUp animate__delay-3s">
                                        <input type="text" placeholder='Registered Number' />
                                    </div>
                                    <div className="col-8 animation__animate animate__animated animate__fadeInUp animate__delay-3s">
                                        <input type="text" placeholder='Honor Position eg. CEO' />
                                    </div>
                                    <div className="col-7 animation__animate animate__animated animate__fadeInUp animate__delay-3s">
                                        <input type="password" placeholder='Enter Password' />
                                    </div>
                                    <div className="col-5 animation__animate animate__animated animate__fadeInUp animate__delay-3s">
                                        <input type="password" placeholder='Confirm' />
                                    </div>
                                    <div className="col-12 animation__animate animate__animated animate__fadeInUp animate__delay-4s input flex">
                                        <input type="file" hidden id='credential' onChange={(e) => setImages(e.target.value.replace('fakepath\\', ''))} />
                                        <button onClick={uploaderCredential}>Upload</button>
                                        <input type="text" placeholder='Upload File that verify the Company is Real' value={images} disabled />
                                    </div>
                                    <div className="center animation__animate animate__animated animate__fadeInUp animate__delay-5s">
                                        <button className="btn-gradient w-150">Complete and Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsor;