import React from "react";
import "./Posts.css";
import Post from "../Post";
import ProjectPosts from "./ProjectPosts"
import {GoLinkExternal} from 'react-icons/go'

//import robot_lecture from './PostMedia/robot_lecture.png'
function getColourFromTheme(theme){
	if (theme == "CARMA"){
		return "#E4572E"
	}
	else if (theme == "SocioDrive"){
		return "#4183C4"
	}
	else if (theme == "FAIR-Robot"){
		return "#39AC84"
	}
	else if (theme == "SatCAV"){
		return "#242222"
	}
}
/* ALL IMAGES ARE OF RATIO 2500pxH 6000pxW (25:60)*/
const Project = ({ post: { title, body,
	theme, github, link }, index }) => {
		const overlineStyle = {
			paddingTop: "2%",
			borderTop: "4px solid ".concat(getColourFromTheme(theme))
		   }
	return (
		<>
		<div style={overlineStyle} class="info">
		<h1 textAlign="left">{title}</h1>
		{/* <img className="image" src={imgUrl} alt="post" /> */}

		<br></br><br></br>
		<p>{body}</p>

		<a href={link} class="project-link"><GoLinkExternal/> Read Online</a>
		<a href={github} class="project-link"><GoLinkExternal/> Github</a>

		{/* <h4>Date: {date}</h4> */}
		<br></br><br></br>

		</div>
		</>
	);
	};

const Posts = (filterTheme) => {
	if (typeof filterTheme.filterTheme === 'undefined'){
		var projectPosts = ProjectPosts()
	}else{
		var projectPosts = ProjectPosts().filter(post => post.theme === filterTheme.filterTheme);
	}// console.log(ProjectPosts()[0].theme);
// console.log(filterTheme.filterTheme);

return (
	<>
	{projectPosts.map((post, index) => (
		<Project key={index} index={index} post={post} />
	))}
	</>
);
};

export default Posts;
