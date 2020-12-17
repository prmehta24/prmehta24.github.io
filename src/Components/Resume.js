import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
class Resume extends Component {
  render() {



    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <ul>{education.description.map(item => <li key={item}> {item} </li>)}</ul>
		</div>
      })
	  var courses = this.props.data.courses.map(function(courses){
        return <div key={courses.title}><h3>{courses.title}</h3>
        <p>{courses.description}</p></div>
      })
	  var certifications = this.props.data.certifications.map(function(certifications){
        return <div key={certifications.title}><h3>{certifications.title}</h3>
        <p className="info">{certifications.authority} <span>&bull;</span><em className="date">{certifications.years}</em></p>
        <p>{certifications.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
			<ul>{work.description.map(item => <li key={item}> {item} </li>)}</ul>
        </div>
      })
	  var research = this.props.data.research.map(function(research){
        return <div key={research.institute}><h3>{research.institute}</h3>
            <p className="info">{research.title}<span>&bull;</span> <em className="date">{research.years}</em></p>
            <ul>{research.description.map(item => <li key={item}> {item} </li>)}</ul>
        </div>
      })
	  var volunteer = this.props.data.volunteer.map(function(volunteer){
        return <div key={volunteer.institute}><h3>{volunteer.institute}</h3>
            <p className="info">{volunteer.title}<span>&bull;</span> <em className="date">{volunteer.years}</em></p>
            <ul>{volunteer.description.map(item => <li key={item}> {item} </li>)}</ul>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">  
	    <div className="row education">
			<Tabs defaultTab="education" vertical>
				<div className="three columns header-col">
					<TabList>
					  <Tab tabFor="education"><h1><span>Education</span></h1></Tab>
					  <Tab tabFor="courses"><h1><span>Courses</span></h1></Tab>
					  <Tab tabFor="certifications"><h1><span>Certifications</span></h1></Tab>
					</TabList>
				</div>
				<div className="nine columns main-col">
				<TabPanel tabId="education">
					{education}
				</TabPanel>
				<TabPanel tabId="courses">
					{courses}
				</TabPanel>
				<TabPanel tabId="certifications">
					{certifications}
				</TabPanel>
				</div>
			 </Tabs>
		</div> 
		 {/*<div className="row education">
			 <div className="three columns header-col">
				<h1><span>Education</span></h1>
			 </div>

			 <div className="nine columns main-col">
				<div className="row item">
				   <div className="twelve columns">
					 {education}
				   </div>
				</div>
			 </div>
         </div>*/}
	  <div className="row experience">
		<Tabs defaultTab="work" vertical>
			<div className="three columns header-col">
				<TabList>
				  <Tab tabFor="work"><h1><span>Work</span></h1></Tab>
				  <Tab tabFor="research"><h1><span>Research</span></h1></Tab>
				  <Tab tabFor="volunteer"><h1><span>Volunteer</span></h1></Tab>
				</TabList>
			</div>
			<div className="nine columns main-col">
			<TabPanel tabId="work">
				{work}
			</TabPanel>
			<TabPanel tabId="research">
				{research}
			</TabPanel>
			<TabPanel tabId="volunteer">
				{volunteer}
			</TabPanel>
			</div>
		 </Tabs>
	  </div>	  
      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
