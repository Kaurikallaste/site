import React from 'react';
import ProjectTab from './ProjectTab';

const Home = (): JSX.Element => {
	return(
		<>
			<div className="page welcome">
				<h1>Lorem Ipsum Lmao</h1>
				<h2>lorem ipsum lmao</h2>
			</div>	
			<div className="page projects">
				<h1>Projects</h1>
				<div className="project-container">
					<ProjectTab title="Project 1" githubLink="https://github.com"/>
					<div className="project-tab-filler"></div>
					<div className="project-tab-filler"></div>
				</div>
			</div>
		</>
	);
}

export default Home;
