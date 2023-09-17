import React, { useEffect, useState } from 'react';
import countries from "../../../assets/countries/countries.json";
import './style.css';
import axios from 'axios';
import { freelancer } from '../../../assets/crown_img';
const Applicants = () => {
  const [next, setNext] = useState(true);
  const [certificate, setCertificate] = useState(null);
  const [cv, setCv] = useState(null);
  const [profile, setProfile] = useState(null);
  const [preview, setPreview] = useState("");
  const [first, setFirst] = useState("");
  const [middle, setMiddle] = useState("");
  const [last, setLast] = useState("");
  const [pass, setPass] = useState("");
  const [nationality, setNationality] = useState("");
  const [sex, setSex] = useState("");
  const [birth, setBirth] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");
  const [location, setLocation] = useState("");

  // const [date, setDate] = useState("");
  const uploaderCredential = () => {
    document.getElementById("certificates").click();
  }
  const uploaderCV = () => {
    document.getElementById("cvs").click();
  }
  const openProfile = () => {
    const prf = document.getElementById("prf");
    prf.click();
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
  const handleSubmit = () => {
    let pwd = document.querySelector("#pwd").value;
    let cpwd = document.querySelector("#cpwd").value;
    if (pwd.length >= 6 && pwd === cpwd) {
      const formdata = new FormData();
      formdata.append('initial_name', first);
      formdata.append('intermedial_name', middle);
      formdata.append('final_name', last);
      formdata.append('sex_gnd', sex);
      formdata.append('nationality', nationality);
      formdata.append('do_birth', birth);
      formdata.append('experience', experience);
      formdata.append('education_level', education);
      formdata.append('pass', pass);
      formdata.append('app_img', profile);
      formdata.append('cert_file', certificate);
      formdata.append('civ_file', cv);

      axios.post(`${process.env.REACT_APP_JOBBER_FINDER}`, formdata).then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.error(error);
      });
    }
  }
  return (
    <div className="applicant glamor-bg">
      <div className="black-bg">
        <div className="containe">
          <div className={`row ${next === true ? 'show' : 'hide'}`}>
            <div className="col-md-5 valid-bx">
              <div className="container">
                <div className="profile animation__animate animate__animated animate__fadeInUp animate__delay-2s">
                  <img src={preview && preview?.length > 1 ? preview : freelancer} alt="" className='relative' />
                  <div className="holder">
                    <button className='center-full-control-2' onClick={openProfile}>choose profile</button>
                    <input type="file" name="" id="prf" hidden onChange={handleProfile} />
                  </div>
                </div>
                <div className="title">
                  <h1 style={{
                    textTransform: 'capitalize',
                    fontSize: 'x-large',
                    textAlign: 'center',
                    marginTop: '20px'
                  }} className='animation__animate animate__animated animate__fadeInUp animate__delay-3s'>Find Your Opportunity</h1>
                  <h5 style={{ color: "var(--comment-2)" }} className='animation__animate animate__animated animate__fadeInUp animate__delay-4s'>YOUR INFORMATION </h5>
                </div>
                <div className="row">
                  <div className="col-5 animation__animate animate__animated animate__fadeInUp animate__delay-5s">
                    <input type="text" placeholder='First' name='initial_name' value={first} onChange={(e) => setFirst(e.target.value)} />
                  </div>
                  <div className="col-7 animation__animate animate__animated animate__fadeInUp animate__delay-5s">
                    <input type="text" placeholder='Middle' name='intermedial_name' value={middle} onChange={(e) => setMiddle(e.target.value)} />
                  </div>
                  <div className="col-8 animation__animate animate__animated animate__fadeInUp animate__delay-5s">
                    <input type="text" placeholder='Last or Surname' name='final_name' value={last} onChange={(e) => setLast(e.target.value)} />
                  </div>
                  <div className="col-4 animation__animate animate__animated animate__fadeInUp animate__delay-5s">
                    <label htmlFor="Birth Day" className='comment' style={{ marginLeft: '20px', marginTop: "10px", position: "absolute" }}>Date of Birth</label>
                    <input type="date" placeholder='Birth Day' id='date' name='do_birth' value={birth} onChange={(e) => setBirth(e.target.value)} />
                  </div>
                  <div className="col-5 animation__animate animate__animated animate__fadeInUp animate__delay-5s">
                    <select name="sex_gnd" id="gender" onChange={(e) => setSex(e.target.value)}>
                      <option value="S">Select Sex</option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                  </div>
                  <div className="col-7 animation__animate animate__animated animate__fadeInUp animate__delay-5s">
                    <select name="nationality" id="country" onChange={(e) => setNationality(e.target.value)}>
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
                  }} className='animation__animate animate__animated animate__fadeInUp animate__delay-1s'>Finish To Start the Journey</h1>
                  <h5 style={{ color: "var(--comment-2)" }} className='animation__animate animate__animated animate__fadeInUp animate__delay-2s'>Last Informations </h5>
                </div>
                <div className="row">
                  <div className="col-12 animation__animate animate__animated animate__fadeInUp animate__delay-3s">
                    <textarea name="" id="Experience" placeholder='Your Experience: use "," to separate eg. Web dev, Graphic Designer' value={experience} onChange={(e) => setExperience(e.target.value)}></textarea>
                  </div>
                  <div className="col-4 animation__animate animate__animated animate__fadeInUp animate__delay-3s">
                    <select name="sex_gnd" id="Education_level" onChange={(e) => setEducation(e.target.value)}>
                      <option value="S">Education Level</option>
                      <option value="Primary">Primary</option>
                      <option value="Secondary (Form 1 - Form 4)">Secondary (Form 1 - Form 4)</option>
                      <option value="Advanced (Form 5 - Form 6)">Advanced (Form 5 - Form 6)</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Degree">Degree</option>
                      <option value="Master">Master</option>
                      <option value="Professor">Professor</option>
                    </select>
                  </div>
                  <div className="col-8 animation__animate animate__animated animate__fadeInUp animate__delay-3s">
                    <input type="text" placeholder='Your Location' value={location} onChange={(e) => setLocation(e.target.value)} />
                  </div>
                  <div className="col-7 animation__animate animate__animated animate__fadeInUp animate__delay-3s">
                    <input type="password" placeholder='Enter Password' id='pwd' />
                  </div>
                  <div className="col-5 animation__animate animate__animated animate__fadeInUp animate__delay-3s">
                    <input type="password" placeholder='Confirm' id='cpwd' />
                  </div>
                  <div className="col-12 animation__animate animate__animated animate__fadeInUp animate__delay-4s input flex two-btn">
                    <button onClick={uploaderCredential}>{certificate ? certificate.name.substring(0, 15) + "..." : "Upload Cerificate File"}</button>
                    <button onClick={uploaderCV} value={cv ? cv : "Upload CV File"}>{cv ? cv.name.substring(0, 15) + "..." : "Upload CV File"}</button>
                    <input type="file" hidden id='certificates' onChange={(e) => setCertificate(e.target.files[0])} />
                    <input type="file" hidden id='cvs' name='file' onChange={(e) => setCv(e.target.files[0])} />
                  </div>

                  <div className="center animation__animate animate__animated animate__fadeInUp animate__delay-5s">
                    <button className="btn-gradient w-150" onClick={handleSubmit}>Complete and Submit</button>
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

export default Applicants;