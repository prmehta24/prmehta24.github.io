import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
class Portfolio extends Component {
  render() {
    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        return <div key={projects.title}><h3>{projects.title}</h3>
            <p className="info">{projects.technologies}<span>&bull;</span> <em className="date">{projects.years}</em></p>
            <p>{projects.description}</p>
        </div>
      })
	  var publications = this.props.data.publications.map(function(publications){
        return <div key={publications.title}><h3>{publications.title}</h3>
            <p className="info">{publications.published}<span>&bull;</span> <em className="date">{publications.years}</em></p>
            <p>{publications.description}</p>
        </div>
      })
	  var competitions = this.props.data.competitions.map(function(competitions){
        return <div key={competitions.title}><h3>{competitions.title}</h3>
            <p className="info">{competitions.authority}<span>&bull;</span> <em className="date">{competitions.years}</em></p>
            <p>{competitions.description}</p>
        </div>
      })
    }
	
	

    return (
  <section id="portfolio">

  {/*<div className="row projects">
         <div className="three columns header-col">
            <h1><span>Projects</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {projects}
               </div>
            </div>
         </div>
  </div>*/}
  <div className="row projects">
	  <Tabs defaultTab="projects" vertical>
				<div className="three columns header-col">
					<TabList>
					  <Tab tabFor="projects"><h1><span>Projects</span></h1></Tab>
					  <Tab tabFor="publications"><h1><span>Publications</span></h1></Tab>
					  <Tab tabFor="competitions"><h1><span>Competitions</span></h1></Tab>
					</TabList>
				</div>
				<div className="nine columns main-col">
				<TabPanel tabId="projects">
					{projects}
				</TabPanel>
				<TabPanel tabId="publications">
					{publications}
				</TabPanel>
				<TabPanel tabId="competitions">
					{competitions}
				</TabPanel>
				</div>
	   </Tabs>
	</div>
    </section>
    );
  }
}

export default Portfolio;
