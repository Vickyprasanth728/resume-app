import React, { Component } from 'react'

class Trys extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nav : [
                {about :"ABOUT"},
                {experience : "EXPERIENCE"},
                {education : "EDUCATION"},
                {skills : "SKILLS"},
                {interests : "INTERESTS"},
                {awards : "AWARDS"}
            ],
            profile : [
                {
                  profileHead : "PROFILE",
                  firstName : "Enter",
                  lastName : "Fullname",
                  profession : "Enter profession",
                }
              ],
            address : [
                {door : "",
                street : "",
                place :""},
            ],
            aboutMe : [
                // {describe : "I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition."}
                {describe : ""}
            ],
            experienceTop : "EXPERIENCE",
            experienceH : "Add your work experience - (e.g : software engineer)",
            experienceHead : [
                // {
                //     // experienceTop : "EXPERIENCE",
                //     senior : "Click & enter the designation",
                //     seniorForm : " Click & brief your experience",
                // //     senior : "SENIOR WEB DEVELOPER",
                // //     seniorForm : "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
                // },

            //     {web : "WEB DEVELOPER"},
            //     {webForm : "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."},

            //     {junior :"JUNIOR WEB DESIGNER"},
            //     {juniorForm : "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration"},
            // 
            ],
            educationTop : "EDUCATION",
            educationH : "Add your education experience - (e.g : B.E engineering)",
            educationHead : [
                // {
                //     institute : "TOPIC",
                //     degree : "PARAGRAPH",
                // }
            ],
            skillsTop : "SKILLS",
            skillsH : "Add your skills - (e.g : Javascript ,React ,etc)",
            skillsHead : [
                // {
                //     // skillsForm : "SKILLS",
                //     programming : "PROGRAMMING LANGUAGES & TOOLS"
                // },
                // {
                //     workflow : "Mobile-First, Responsive Design"
                // },
                // {    
                //     workflow : "Cross Browser Testing & Debugging"
                // },
                // {
                //     workflow : "Cross Functional Teams"
                // },
                // {
                //     workflow : "Agile Development & Scrum"
                // },
            ],
            interestsTop : "INTERESTS",
            interestsH : "Add your interests - (e.g : Games & Sports)",
            interestsHead : [
                // {interestsForm : "INTERESTS"},
                // {
                //     para : "Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.",
                
                //     para1 : "When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world."
                // }
            ],
            awardsTop : "AWARDS & CERTIFICATIONS",
            awardH : "Add your awards - (e.g : Golden award, sliver award)",
            awardsHead : [
                // {awardsForm : "AWARDS & CERTIFICATIONS"},
                // {
                //     award : "Google Analytics Certified Developer"
                // },
                // {
                //     award : "Mobile Web Specialist - Google Certification"
                // },
                // {
                //     award : "1 st Place - University of Colorado Boulder - Emerging Tech Competition 2009"
                // },
                // {
                //     award : "1 st Place - James Buchanan High School - Hackathon 2006"
                // },
            ],
            inputfirstName:"",
            inputlastName :"",
            inputProfession:"",
            inputdoorNo : "",
            inputStreet : "",
            inputPlace : "",
            updateID:"",
            updateID1:"",
            updateExp:"",
            updateEdu:"",
            updateSkills : "",
            updateInterests : "",
            updateAwards : "",
            updateAbout : "",
        }
    }

    //========================================== userName ===========================================
    userNameModal = () => {
        var z = this.state.profile;
        z[this.state.updateID].firstName = this.state.inputfirstName;
        z[this.state.updateID].lastName = this.state.inputlastName;
        z[this.state.updateID].profession = this.state.inputProfession;

        this.setState({profile : z, updateID:"", inputfirstName:"", inputlastName:"", inputProfession:""})
        console.log(z);
    
        var x = this.state.address;
        x[this.state.updateID1].door = this.state.inputdoorNo;
        x[this.state.updateID1].street = this.state.inputStreet;
        x[this.state.updateID1].place = this.state.inputPlace;

        this.setState({address : x, updateID1:"", inputdoorNo:"", inputStreet:"", inputPlace:""});
        console.log(x);

        var y = this.state.aboutMe;
        y[this.state.updateAbout].describe = this.state.inputAbout;

        this.setState({aboutMe : y, updateAbout:"", inputAbout:"",});

    }

    modalButton = (id, i) => {
        this.setState({inputfirstName : id.firstName, inputlastName : id.lastName , inputProfession : id.profession, inputfirstName:"", inputlastName:"", inputProfession:"", updateID : i, inputdoorNo : id.door, inputStreet : id.street , inputPlace : id.place, inputdoorNo:"", inputStreet:"", inputPlace:"", updateID1 : i , updateAbout:i, inputAbout:"",})
    }

    //========================================== address ===========================================
    // addressModal = () => {
    //     var z = this.state.address;
    //     z[this.state.updateID1].door = this.state.inputdoorNo;
    //     z[this.state.updateID1].street = this.state.inputStreet;
    //     z[this.state.updateID1].place = this.state.inputPlace;

    //     this.setState({address : z, updateID1:"", inputdoorNo:"", inputStreet:"", inputPlace:""});
    //     console.log(z);
    // }

    // addressModalButton = (id, i) => {
    //     this.setState({inputdoorNo : id.door, inputStreet : id.street , inputPlace : id.place, inputdoorNo:"", inputStreet:"", inputPlace:"", updateID1 : i})
    // }

    //====================================== Experience ===========================================


    expModal = () => {

        if (typeof(this.state.updateExp) == "number") {
            var z = this.state.experienceHead;
            z[this.state.updateExp].senior = this.state.inputExpFirst;
            z[this.state.updateExp].seniorForm = this.state.inputExpSecond;
    
            this.setState({experienceHead : z, updateExp:"", inputExpFirst:"", inputExpSecond:"",})
            
        } else {
            var finalD = {
                senior : this.state.inputExpFirst,
                seniorForm : this.state.inputExpSecond,
            }
            var x = this.state.experienceHead;
            x.push(finalD);
            this.setState({experienceHead : x , updateExp:"", inputExpSecond:"",inputExpFirst:"",})
        }
      }

    editExpButton = (id, i) => {
        this.setState({inputExpFirst : id.senior, inputExpSecond : id.seniorForm, updateExp : i})
    }

    deleteExpButton = (id) => {
        var filtered = this.state.experienceHead.filter((item) => {
          return item !==id});
          this.setState({experienceHead : filtered, inputExpFirst:"", inputExpSecond:""});
          alert("delete ?");
    }

    modalExpButton = () => {
        this.setState({inputExpSecond:"",inputExpFirst:"",updateExp:"",})
    }


    //====================================== Education ===========================================

    eduModal = () => {

    if (typeof(this.state.updateEdu) == "number") {
        var z = this.state.educationHead;
        z[this.state.updateEdu].institute = this.state.inputEduFirst;
        z[this.state.updateEdu].degree = this.state.inputEduSecond;

        this.setState({educationHead : z, updateEdu:"", inputEduFirst:"", inputEduSecond:"",});
    } else {
        var finalD = {
            institute : this.state.inputEduFirst,
            degree : this.state.inputEduSecond,
        }
        var x = this.state.educationHead;
        x.push(finalD);
        this.setState({educationHead : x, updateEdu:"", inputEduFirst:"", inputEduSecond:"",})
    }
    }

      modalEduButton = () => {
        this.setState({inputEduFirst:"", inputEduSecond:"", updateEdu : ""})
    }

      editEduButton = (id, i) => {
        this.setState({inputEduFirst : id.institute, inputEduSecond : id.degree, updateEdu : i})
    }

    deleteEduButton = (id) => {
        var filtered = this.state.educationHead.filter((item) => {
          return item !==id});
          this.setState({educationHead : filtered, inputEduFirst:"", inputEduSecond:""});
          alert("delete ?");
    }

    //====================================== Skills  ===========================================

    SkillsModal = () => {

        if (typeof(this.state.updateSkills) == "number") {
            var z = this.state.skillsHead;
            z[this.state.updateSkills].programming = this.state.inputSkillsFirst;

            this.setState({skillsHead : z, updateSkills:"", inputSkillsFirst:"",});
        } else {
            var finalD = {
                programming : this.state.inputSkillsFirst,
            }
            var x = this.state.skillsHead;
            x.push(finalD);
            this.setState({skillsHead : x,updateSkills:"", inputSkillsFirst:"",})
        }
    }

        modalSkillsButton = () => {
        this.setState({inputSkillsFirst:"", updateSkills:"",})
    }

        editSkillsButton = (id, i) => {
        this.setState({inputSkillsFirst : id.programming, updateSkills:i})
    }

    deleteSkillsButton = (id) => {
        var filtered = this.state.skillsHead.filter((item) => {
          return item !==id});
          this.setState({skillsHead : filtered, inputSkillsFirst:"",});
          alert("delete ?");
    }


    //====================================== Interests ===========================================

    interestsModal = () => {

        if (typeof(this.state.updateInterests) == "number") {
            var z = this.state.interestsHead;
            z[this.state.updateInterests].para = this.state.inputInterests;

            this.setState({interestsHead : z, updateInterests:"", inputInterests:"",});
        } else {
            var finalD = {
                para : this.state.inputInterests,
            }
            var x = this.state.interestsHead;
            x.push(finalD);
            this.setState({interestsHead : x, updateInterests:"", inputInterests:"",})
        }
    }

    modalInterestsButton = () => {
        this.setState({inputInterests:"", updateInterests:"",})
    }

    editInterestsButton = (id, i) => {
        this.setState({inputInterests : id.para, updateInterests:i})
    }

    deleteInterestsButton = (id) => {
        var filtered = this.state.interestsHead.filter((item) => {
          return item !==id});
          this.setState({interestsHead : filtered, inputInterests:"",});
          alert("delete ?");
    }


    //====================================== Awards ===========================================

    awardsModal = () => {

        if (typeof(this.state.updateAwards) == "number") {
            var z = this.state.awardsHead;
            z[this.state.updateAwards].award = this.state.inputAwards;

            this.setState({awardsHead : z, updateAwards:"", inputAwards:"",});
        } else {
            var finalD = {
                award : this.state.inputAwards,
            }
            var x = this.state.awardsHead;
            x.push(finalD);
            this.setState({awardsHead : x, updateAwards:"", inputAwards:"",})
        }
    }

        //====================================== Awards ===========================================

    awardsModal = () => {

        if (typeof(this.state.updateAwards) == "number") {
            var z = this.state.awardsHead;
            z[this.state.updateAwards].award = this.state.inputAwards;

            this.setState({awardsHead : z, updateAwards:"", inputAwards:"",});
        } else {
            var finalD = {
                award : this.state.inputAwards,
            }
            var x = this.state.awardsHead;
            x.push(finalD);
            this.setState({awardsHead : x, updateAwards:"", inputAwards:"",})
        }
    }

    modalAwardsButton = () => {
        this.setState({inputAwards:"", updateAwards:"",})
    }

    editAwardsButton = (id, i) => {
        this.setState({inputAwards : id.award, updateAwards:i})
    }

    deleteAwardsButton = (id) => {
        var filtered = this.state.awardsHead.filter((item) => {
          return item !==id});
          this.setState({awardsHead : filtered, inputAwards:"",});
          alert("delete ?");
    }

    menuBtn = () => {
        document.getElementById("myleftNav").style.width = "250px"; 
        document.getElementById("myrightNav").style.marginLeft = "250px";

        // if (z == true) {
        //     var z = true;
        //     document.getElementById("myleftNav").style.width = "0px"; 
        //     document.getElementById("myrightNav").style.marginLeft = "0px";
        //     z = false;
        // }
        //  else {
        //     document.getElementById("myleftNav").style.width = "250px"; 
        //     document.getElementById("myrightNav").style.marginLeft = "250px";
        //     var z = true;
        // }
    }
    
    closeNav = () => {
        document.getElementById("myleftNav").style.width = "0px";
        document.getElementById("myrightNav").style.marginLeft= "0px";
    }


    menuBtnOne = () => {
        document.getElementById("myleftNavALT").style.height = "450px"; 
        document.getElementById("myrightNav").style.height = "450px";
    }

    closeNavOne = () => {
        document.getElementById("myleftNavALT").style.height = "0px";
        document.getElementById("myrightNav").style.height= "0px";
    }

    //====================================== value =======================================================

    firstNameValue = (value) => {
        this.setState({inputfirstName : value});
    }
    lastNameValue = (value) => {
        this.setState({inputlastName : value});
    }
    professionValue = (value) => {
        this.setState({inputProfession : value});
    }
    doorValue = (value) => {
        this.setState({inputdoorNo : value});
    }
    streetValue = (value) => {
        this.setState({inputStreet : value});
    }
    placeValue = (value) => {
        this.setState({inputPlace : value});
    }
    expFirstValue = (value) => {
        this.setState({inputExpFirst : value});
    }
    expSecondValue = (value) => {
        this.setState({inputExpSecond : value});
    }
    eduFirstValue = (value) => {
        this.setState({inputEduFirst : value});
    }
    eduSecondValue = (value) => {
        this.setState({inputEduSecond : value});
    }
    skillsFirstValue = (value) => {
        this.setState({inputSkillsFirst : value});
    }
    interestsValue = (value) => {
        this.setState({inputInterests : value});
    }
    AwardsValue = (value) => {
        this.setState({inputAwards : value});
    }
    aboutValue = (value) => {
        this.setState({inputAbout : value});
    }

    
  render() {
    return (
        <div className='main'>
            {/* <div className='row leftForm'> */}
                <div class="text-center leftSide" id='myleftNav'>
                  <a href="javascript:void(0)" class="closebtn" onClick={() => this.closeNav()}>&times;</a>
                    {this.state.nav.map((item) =>  
                    <div>
                        <h4><a href="#about">{item.about}</a></h4> 
                        <h4><a href="#experience">{item.experience}</a></h4> 
                        <h4><a href="#education">{item.education}</a></h4>
                        <h4><a href="#skills">{item.skills}</a></h4>
                        <h4><a href="#interests">{item.interests}</a></h4>
                        <h4><a href="#awards">{item.awards}</a></h4>
                        <br></br>
                    </div>
                    )} 
                </div>
                <div class="text-center leftSideALT" id='myleftNavALT'>
                  <a href="javascript:void(0)" class="closebtn1" onClick={() => this.closeNavOne()}>&times;</a>
                    {this.state.nav.map((item) =>  
                    <div className='leftnav'>
                        <h4><a href="#about">{item.about}</a></h4> 
                        <h4><a href="#experience">{item.experience}</a></h4> 
                        <h4><a href="#education">{item.education}</a></h4>
                        <h4><a href="#skills">{item.skills}</a></h4>
                        <h4><a href="#interests">{item.interests}</a></h4>
                        <h4><a href="#awards">{item.awards}</a></h4>
                        <br></br>
                    </div>
                    )} 
                </div>

                <div></div>
                <div class="rightSide w-100" id='myrightNav' >
                    <div class="fa fa-bars headForm" aria-hidden="true" id="menu-btn" onClick={() => this.menuBtn()}></div>
                    <div class="fa fa-bars headFormHide" aria-hidden="true" id="menu-btn" onClick={() => this.menuBtnOne()}></div>

                    <div class='rightTop' id='rightTop'>
                    <section id='about' onClick={() => this.closeNav()} >
                    {this.state.profile.map((item , i) =>  
                        <div>
                            <tr class="table headline row">
                                <div className='col-lg-10 d-flex '>
                                    <h1 style={{fontSize: "400%"}}>{item.firstName}</h1>
                                    <h1 style={{fontSize: "400%" , color:"#B05D03"}}>{item.lastName}</h1>
                                </div>
                                <div className='col-lg-1'>
                                    <button data-toggle="modal" data-target="#exampleModal" className='btn btn-secondary editBtn'  onClick={() => this.modalButton(item , i)}>Edit</button>
                                </div>
                            </tr>
                            <h4 style={{fontSize: "200%"}}>{item.profession}</h4>
                        </div> 
                    )}
                    {this.state.address.map((item , i) =>  
                        <div class="d-flex">
                            <h4>{item.door}</h4> 
                            <h4>{item.street}</h4> 
                            <h4 >{item.place}</h4>
                            {/* <button data-toggle="modal" data-target="#exampleModalAddress" className='btn btn-secondary btn-sm' onClick={() => this.addressModalButton(item , i)}>click</button> */}
                        </div>
                    )}  <br></br>
                    {this.state.aboutMe.map((item) =>  
                        <div class="d-flex">
                            <h4 >{item.describe}</h4> 
                        </div>
                    )} <br></br> <br></br> <hr style={{backgroundColor :"#BF6607" }}></hr>
                    </section>

                    <section id='experience' className='experience jumbotron'>
                    <tr class="table stepsForm row">
                        <h1 class="col-lg-10 headEdit" style={{color:"#844705"}}>{this.state.experienceTop}</h1>
                        <h4 class="col-lg-10 paraEdit" style={{color:"#422301"}}>{this.state.experienceH}</h4>
                        <div class="col-lg-1">
                            <button class="btn btn-secondary addBtn" data-toggle="modal" data-target="#exampleModalExperience" onClick={(item , i) => this.modalExpButton(item ,i)}> Add </button>
                        </div>
                    </tr>

                    {this.state.experienceHead.map((item , i) =>  
                        <div>
                            <tr class="table row">
                                <div class="col-lg-10">
                                    <h4 style={{color:"#BF6607"}}>{item.senior}</h4> 
                                    <h4>{item.seniorForm}</h4> 
                                    <hr></hr>
                                </div>
                                <div class="modal-footer">
                                    <button type='button'  className='btn btn-primary edit' data-toggle="modal" data-target="#exampleModalExperience"   onClick={() => this.editExpButton(item , i)}> Edit </button> 
                                    <button type='button'  className='btn btn-danger delete '  onClick={() => this.deleteExpButton(item , i)}> Delete </button>
                                </div>
                            </tr>
                            {/* <h4 style={{color:"#BF6607"}}>{item.web}</h4> 
                            <h4>{item.webForm}</h4>
                            <h4 style={{color:"#BF6607"}}>{item.junior}</h4> 
                            <h4>{item.juniorForm}</h4> <br></br> */}
                            {/* <button data-toggle="modal" data-target="#exampleModalExperience" className='btn btn-secondary btn-sm' onClick={() => this.expModalButton(item , i)}>click</button> */}
                        </div>
                    )}
                    </section> <br></br> <br></br> <hr style={{backgroundColor :"#BF6607" }}></hr>
                    
                    <section id='education' className='jumbotron'>
                    {/* {this.state.educationHead.map((item , i) =>   */}
                    <tr class="table row">
                        <h1 class="col-lg-10 headEdit" style={{color:"#844705"}}>{this.state.educationTop}</h1>
                        <h4 class="col-lg-10 paraEdit" style={{color:"#422301"}}>{this.state.educationH}</h4>
                        <div class="col-lg-1">
                            <button class="btn btn-secondary addBtn" data-toggle="modal" data-target="#exampleModalEducation" onClick={(item , i) => this.modalEduButton(item ,i)}> Add </button>
                        </div>
                    </tr>
                    {/* )} */}

                    {this.state.educationHead.map((item , i) =>  
                        <div>
                            <tr class="table row">
                            <div class="col-lg-10">
                                <h4 style={{color:"#BF6607"}}>{item.institute}</h4> 
                                <h4>{item.degree}</h4> 
                            </div>
                            <div class="modal-footer">
                                <button type='button'  className='btn btn-primary edit' data-toggle="modal" data-target="#exampleModalEducation"   onClick={() => this.editEduButton(item , i)}> Edit </button> 
                                <button type='button'  className='btn btn-danger delete'  onClick={() => this.deleteEduButton(item , i)}> Delete </button>
                            </div>
                            </tr>
                        </div>
                    )}
                    </section> <br></br> <br></br><hr style={{backgroundColor :"#BF6607" }}></hr>
                    

                    <section id='skills' className='jumbotron'>
                    <tr class="table row">
                        <h1 class="col-lg-10 headEdit" style={{color:"#844705"}}>{this.state.skillsTop}</h1>
                        <h4 class="col-lg-10 paraEdit" style={{color:"#422301"}}>{this.state.skillsH}</h4>
                        <div class="col-lg-1">
                            <button class="btn btn-secondary addBtn" data-toggle="modal" data-target="#exampleModalSkills" onClick={(item , i) => this.modalSkillsButton(item ,i)}> Add </button>
                        </div>
                    </tr>
                    {this.state.skillsHead.map((item , i) =>  
                        <div>
                            <tr class="table row">
                            <div class="col-lg-10">
                                {/* <h1 style={{color:"#844705"}}>{item.skillsForm}</h1> */}
                                <h4>{item.programming}</h4> 
                                <h4>{item.workflow}</h4> 
                            </div>
                            <div class="modal-footer">
                                <button type='button'  className='btn btn-primary edit' data-toggle="modal" data-target="#exampleModalSkills"   onClick={() => this.editSkillsButton(item , i)}> Edit </button> 
                                <button type='button'  className='btn btn-danger delete'  onClick={() => this.deleteSkillsButton(item , i)}> Delete </button>
                            </div>
                            </tr>
                        </div>
                    )}
                    </section> <br></br> <br></br> <hr style={{backgroundColor :"#BF6607" }}></hr>

                    <section id='interests' className='jumbotron'>
                    <tr class="table row">
                        <h1 class="col-lg-10 headEdit" style={{color:"#844705"}}>{this.state.interestsTop}</h1>
                        <h4 class="col-lg-10 paraEdit" style={{color:"#422301"}}>{this.state.interestsH}</h4>
                        <div class="col-lg-1">
                            <button class="btn btn-secondary addBtn" data-toggle="modal" data-target="#exampleModalInterests" onClick={(item , i) => this.modalInterestsButton(item ,i)}> Add </button>
                        </div>
                    </tr>
                    {this.state.interestsHead.map((item , i) =>  
                        <tr class="table row">
                        <div class="col-lg-10">                            
                            {/* <h1 style={{color:"#844705"}}>{item.interestsForm}</h1> */}
                            <h4>{item.para}</h4> 
                            <h4>{item.para1}</h4> 
                        </div>
                        <div class="modal-footer">
                            <button type='button'  className='btn btn-primary edit' data-toggle="modal" data-target="#exampleModalInterests"   onClick={() => this.editInterestsButton(item , i)}> Edit </button> 
                            <button type='button'  className='btn btn-danger delete'  onClick={() => this.deleteInterestsButton(item , i)}> Delete </button>
                        </div>
                        </tr>
                    )}
                    </section> <br></br> <br></br> <hr style={{backgroundColor :"#BF6607" }}></hr>

                    <section id='awards' className='jumbotron'>
                    <tr class="table row">
                        <h1 class="col-lg-10 headEdit" style={{color:"#844705"}}>{this.state.awardsTop}</h1>
                        <h4 class="col-lg-10 paraEdit" style={{color:"#422301"}}>{this.state.awardH}</h4>
                        <div class="col-lg-1">
                            <button class="btn btn-secondary addBtn" data-toggle="modal" data-target="#exampleModalAwards" onClick={(item , i) => this.modalAwardsButton(item ,i)}> Add </button>
                        </div>
                    </tr>
                    {this.state.awardsHead.map((item , i) =>  
                        <tr class="table row">
                        <div class="col-lg-10">
                            {/* <h1 style={{color:"#844705"}}>{item.awardsForm}</h1> */}
                            <h4>{item.award}</h4> 
                        </div>
                        <div class="modal-
                        footer">
                            <button type='button'  className='btn btn-primary edit' data-toggle="modal" data-target="#exampleModalAwards"   onClick={() => this.editAwardsButton(item , i)}> Edit </button> 
                            <button type='button'  className='btn btn-danger delete'  onClick={() => this.deleteAwardsButton(item , i)}> Delete </button>
                        </div>
                        </tr>
                    )}
                    </section>  <br></br> <br></br> <hr style={{backgroundColor :"#BF6607" }}></hr>

                    </div>
                </div>
            {/* </div> */}


{/* =================================================== userName */}
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">INFO</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body inputBox">
                        <div class="row p-3">
                            <input type="text" className='form-control col-lg-6' placeholder='Firstrname' value={this.state.inputfirstName} onChange={(e) => this.firstNameValue(e.target.value)}></input> <br></br>
                            <input type="text" className='form-control col-lg-6' placeholder='Lastname' value={this.state.inputlastName} onChange={(e) => this.lastNameValue(e.target.value)}></input> <br></br>
                        </div>
                            <input type="text" className='form-control' placeholder='Profession' value={this.state.inputProfession} onChange={(e) => this.professionValue(e.target.value)}></input>
                    </div>
                    <div class="modal-body inputBox">
                        <input type="text" className='form-control' placeholder='Door no' value={this.state.inputdoorNo} onChange={(e) => this.doorValue(e.target.value)}></input> <br></br>
                        <input type="text" className='form-control' placeholder='Street' value={this.state.inputStreet} onChange={(e) => this.streetValue(e.target.value)}></input> <br></br>
                        <input type="text" className='form-control' placeholder='Place' value={this.state.inputPlace} onChange={(e) => this.placeValue(e.target.value)}></input>
                    </div>
                    <div class="modal-body inputBox">
                        <input type="text" className='form-control' placeholder='About' value={this.state.inputAbout} onChange={(e) => this.aboutValue(e.target.value)}></input> <br></br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.userNameModal}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div>

{/* =================================================== ADDRESS============================================== */}
            {/* <div class="modal fade" id="exampleModalAddress" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabelAd   dress" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabelAddress">Address</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input type="text" className='form-control' placeholder='Enter door no' value={this.state.inputdoorNo} onChange={(e) => this.doorValue(e.target.value)}></input> <br></br>
                        <input type="text" className='form-control' placeholder='Enter street' value={this.state.inputStreet} onChange={(e) => this.streetValue(e.target.value)}></input> <br></br>
                        <input type="text" className='form-control' placeholder='Enter place' value={this.state.inputPlace} onChange={(e) => this.placeValue(e.target.value)}></input>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.addressModal}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div> */}

{/* =================================================== experience ============================================== */}
            <div class="modal fade" id="exampleModalExperience" tabindex="-1" role="dialog" aria-labelledby="exampleModalExperience" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabelExperience">Experience</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body inputBox">
                        <input type="text" className='form-control' placeholder='Enter the designation' value={this.state.inputExpFirst} onChange={(e) => this.expFirstValue(e.target.value)}></input> <br></br>
                        <input type="text" className='form-control' placeholder='Brief about your work experience' value={this.state.inputExpSecond} onChange={(e) => this.expSecondValue(e.target.value)}></input> <br></br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.expModal}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div>

{/* =================================================== education  ============================================== */}
            <div class="modal fade" id="exampleModalEducation" tabindex="-1" role="dialog" aria-labelledby="exampleModalEducation" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabelEducation">Education</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body inputBox">
                        <input type="text" className='form-control' placeholder='Enter the qualification' value={this.state.inputEduFirst} onChange={(e) => this.eduFirstValue(e.target.value)}></input> <br></br>
                        <input type="text" className='form-control' placeholder='Brief about your education' value={this.state.inputEduSecond} onChange={(e) => this.eduSecondValue(e.target.value)}></input> <br></br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.eduModal}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div>

{/* =================================================== education  ============================================== */}
            <div class="modal fade" id="exampleModalSkills" tabindex="-1" role="dialog" aria-labelledby="exampleModalSkills" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabelSkills">skills</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body inputBox">
                        <input type="text" className='form-control' placeholder='Add skills' value={this.state.inputSkillsFirst} onChange={(e) => this.skillsFirstValue(e.target.value)}></input> <br></br>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.SkillsModal}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div>

{/* =================================================== education  ============================================== */}
            <div class="modal fade" id="exampleModalInterests" tabindex="-1" role="dialog" aria-labelledby="exampleModalInterests" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabelInterests">INTERESTS</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body inputBox">
                        <input type="text" className='form-control' placeholder='Add interests' value={this.state.inputInterests} onChange={(e) => this.interestsValue(e.target.value)}></input> <br></br>
                    </div>
                    <div class="modal-footer"> 
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.interestsModal}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div>

{/* =================================================== Awards  ============================================== */}
            <div class="modal fade" id="exampleModalAwards" tabindex="-1" role="dialog" aria-labelledby="exampleModalAwards" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content inputBox">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabelAwards">AWARDS & CERTIFICATIONS</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input type="text" className='form-control' placeholder='Add awards & certification' value={this.state.inputAwards} onChange={(e) => this.AwardsValue(e.target.value)}></input> <br></br>
                    </div>
                    <div class="modal-footer"> 
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.awardsModal}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
  }
}

export default Trys